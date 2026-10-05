import { useEffect, useRef } from 'react';
import { QuestionTimeTracker } from '../lib/questionTimeTracker';

interface Options {
  /** Real attempt id; null/undefined (or preview mode) disables tracking. */
  attemptId: string | null | undefined;
  enabled: boolean;
  /** The question currently on screen, or null when none is (directions, break, review screen…). */
  questionId: string | null;
  /**
   * The current question's answer in its stored (server) shape, or null.
   * Pass `undefined` while the local answer state still belongs to the
   * previous question, so the switch itself is never logged as an answer.
   */
  answer: unknown;
  /** Grid-in answers are logged once typing settles, not on every keystroke. */
  debounceAnswer: boolean;
  flagged: boolean;
  finished: boolean;
}

const NUMERIC_SETTLE_MS = 1200;

/**
 * Feeds the test player's state into a QuestionTimeTracker. Driving it from
 * state (rather than from each button handler) means every way of changing
 * question — Next, Back, palette, review screen, module change, resume —
 * goes through the same single call site.
 */
export function useVisitTracking({ attemptId, enabled, questionId, answer, debounceAnswer, flagged, finished }: Options) {
  const trackerRef = useRef<QuestionTimeTracker | null>(null);
  const lastAnswer = useRef<{ q: string | null; json: string | null }>({ q: null, json: null });
  const lastFlag = useRef<{ q: string | null; on: boolean }>({ q: null, on: false });
  const pending = useRef<{ q: string; choice: unknown; timer: ReturnType<typeof setTimeout> } | null>(null);

  const flushPending = () => {
    const p = pending.current;
    if (!p) return;
    clearTimeout(p.timer);
    pending.current = null;
    trackerRef.current?.answer(p.q, p.choice);
  };

  // Create one tracker per attempt.
  useEffect(() => {
    if (!enabled || !attemptId) return;
    const tracker = new QuestionTimeTracker({ attemptId });
    trackerRef.current = tracker;
    return () => {
      flushPending();
      tracker.destroy();
      if (trackerRef.current === tracker) trackerRef.current = null;
    };
  }, [enabled, attemptId]);

  // ENTER / LEAVE — a new question, or no question, on screen.
  useEffect(() => {
    const tracker = trackerRef.current;
    if (!tracker) return;
    flushPending(); // a settling grid-in answer belongs to the visit being left
    if (questionId) tracker.enter(questionId);
    else tracker.leave();
  }, [questionId, enabled, attemptId]); // eslint-disable-line react-hooks/exhaustive-deps

  // ANSWER / CLEAR — only changes made while the question stays on screen.
  useEffect(() => {
    if (!questionId || answer === undefined) return;
    const json = JSON.stringify(answer ?? null);
    const prev = lastAnswer.current;
    lastAnswer.current = { q: questionId, json };
    // First settled value after arriving on a question is the baseline, not a change.
    if (prev.q !== questionId || prev.json === json) return;
    const tracker = trackerRef.current;
    if (!tracker) return;
    if (debounceAnswer) {
      if (pending.current) clearTimeout(pending.current.timer);
      const timer = setTimeout(flushPending, NUMERIC_SETTLE_MS);
      pending.current = { q: questionId, choice: answer ?? null, timer };
    } else {
      flushPending();
      tracker.answer(questionId, answer ?? null);
    }
  }, [questionId, answer, debounceAnswer]); // eslint-disable-line react-hooks/exhaustive-deps

  // FLAG / UNFLAG
  useEffect(() => {
    if (!questionId) return;
    const prev = lastFlag.current;
    lastFlag.current = { q: questionId, on: flagged };
    if (prev.q !== questionId || prev.on === flagged) return;
    trackerRef.current?.markReview(questionId, flagged);
  }, [questionId, flagged]);

  // SUBMIT
  useEffect(() => {
    if (!finished) return;
    flushPending();
    trackerRef.current?.end('SUBMIT');
  }, [finished]); // eslint-disable-line react-hooks/exhaustive-deps
}
