import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { api, type TimeAnalyticsResponse, type TaResult, type TaVisit } from '../../lib/api';

/**
 * Per-question time analysis for the Question Wise Report: total time plus the
 * time of each visit (1st attempt, 2nd attempt, …), coloured like the Time
 * Analytics bars (green correct, red incorrect, indigo unanswered) by the
 * answer the student left at the end of that visit. Uses the same cached
 * time-analytics response as the charts, so opening questions adds no requests.
 * Attempts taken before visit tracking existed show the total time only.
 */

const ordinal = (n: number) => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
};

const fmt = (ms: number) => {
  const secs = Math.max(0, Math.round(ms / 1000));
  return `${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, '0')}`;
};

const RESULT_STYLE: Record<TaResult, { dot: string; label: string }> = {
  correct: { dot: 'bg-emerald-500', label: 'answer correct' },
  incorrect: { dot: 'bg-red-500', label: 'answer incorrect' },
  unanswered: { dot: 'bg-indigo-500', label: 'no answer' },
};

// One fetch per attempt, shared by every question on the page.
const cache = new Map<string, Promise<TimeAnalyticsResponse | null>>();
function load(attemptId: string) {
  let p = cache.get(attemptId);
  if (!p) {
    p = api.getTimeAnalytics(attemptId).catch(() => null);
    cache.set(attemptId, p);
    p.then((r) => { if (!r) cache.delete(attemptId); });
  }
  return p;
}

export function QuestionVisitTimes({ attemptId, questionId, fallbackSeconds }: {
  attemptId: string;
  questionId: string;
  /** Saved total time for the question, used when visits were not recorded. */
  fallbackSeconds: number;
}) {
  const [data, setData] = useState<TimeAnalyticsResponse | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    load(attemptId).then((r) => { if (!cancelled) setData(r); });
    return () => { cancelled = true; };
  }, [attemptId]);

  const visits: TaVisit[] = data?.hasEvents
    ? data.sections.flatMap((s) => s.visits.filter((v) => v.questionId === questionId)).sort((a, b) => a.visitNo - b.visitNo)
    : [];
  const totalMs = visits.length > 0 ? visits.reduce((sum, v) => sum + v.activeMs, 0) : fallbackSeconds * 1000;

  return (
    <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50/60 px-3 py-2.5 text-left">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <Clock size={12} /> Time on this question: {fmt(totalMs)}
        </span>
        {visits.length > 0 && (
          <span className="text-slate-500">{visits.length} {visits.length === 1 ? 'visit' : 'visits'}</span>
        )}
      </div>

      {data === undefined ? (
        <p className="mt-1.5 text-xs text-slate-400">Loading visit times…</p>
      ) : visits.length > 0 ? (
        <ul className="mt-2 flex flex-wrap gap-2">
          {visits.map((v) => {
            const style = RESULT_STYLE[v.exitResult] ?? RESULT_STYLE.unanswered;
            return (
              <li
                key={v.visitNo}
                title={`${ordinal(v.visitNo)} attempt: ${fmt(v.activeMs)}, ${style.label} when leaving`}
                className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs"
              >
                <span className={`h-2 w-2 rounded-full ${style.dot}`} />
                <span className="text-slate-500">{ordinal(v.visitNo)} attempt</span>
                <span className="font-semibold text-slate-800 tabular-nums">{fmt(v.activeMs)}</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="mt-1.5 text-xs text-slate-400">Visit-by-visit times were not recorded for this test.</p>
      )}
    </div>
  );
}
