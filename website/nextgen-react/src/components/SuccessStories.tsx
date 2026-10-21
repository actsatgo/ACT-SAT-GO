import { useEffect, useRef, useState } from 'react';
import { PRIMARY_CTA } from '../site';

type Story = {
  initial: string;
  name: string;
  /** Header label, e.g. "SAT · Total score". */
  exam: string;
  max: number;
  score: number;
  /** Starting score; omitted for exams shown as a single top score. */
  before?: number;
  /** Shown in place of the starting score when there is none. */
  beforeLabel?: string;
  stamp: string;
  university: string;
};

// Starting scores are the final score minus the improvement shown on the old cards.
const STORIES: Story[] = [
  { initial: 'A', name: 'Ananya K.', exam: 'SAT · Total score', max: 1600, score: 1540, before: 1310, stamp: '+230', university: 'University of Michigan' },
  { initial: 'R', name: 'Rohan S.', exam: 'ACT · Composite', max: 36, score: 33, before: 27, stamp: '+6', university: 'Georgia Tech' },
  { initial: 'M', name: 'Meera P.', exam: 'AP · Calculus BC', max: 5, score: 5, beforeLabel: 'AP Calc', stamp: 'Top score', university: 'Stanford University' },
  { initial: 'A', name: 'Arjun D.', exam: 'SAT · Total score', max: 1600, score: 1510, before: 1300, stamp: '+210', university: 'UC Berkeley' },
];

/** Counts from `from` up to `to` once the card scrolls into view. Renders `to` until then. */
function CountUp({ from, to }: { from: number; to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || from === to) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1200;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(Math.round(from + (to - from) * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      setValue(from);
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [from, to]);

  return <span ref={ref}>{value}</span>;
}

export function SuccessStories({ onBook }: { onBook: () => void }) {
  return (
    <>
      <div className="ss-grid">
        {STORIES.map((s) => (
          <article key={s.name} className="ss-ticket">
            <div className="ss-who">
              <span className="ss-avatar" aria-hidden="true">{s.initial}</span>
              <div>
                <b>{s.name}</b>
                <span>{s.exam}</span>
              </div>
            </div>
            <div className="ss-scores">
              <div className="ss-col">
                <small>{s.before !== undefined ? 'Before' : 'Exam'}</small>
                <b className="ss-before">{s.before ?? s.beforeLabel}</b>
              </div>
              <span className="ss-arrow" aria-hidden="true">→</span>
              <div className="ss-col ss-after">
                <small>{s.before !== undefined ? 'After' : 'Score'}</small>
                <b>
                  <CountUp from={s.before ?? 1} to={s.score} />
                  <span className="ss-max">/{s.max}</span>
                </b>
              </div>
            </div>
            <div className="ss-perf" aria-hidden="true" />
            <div className="ss-uni">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3 1.5 8.5 12 14l10.5-5.5L12 3Z" fill="currentColor" />
                <path d="M5.5 11v4.5c0 1.6 2.9 3.5 6.5 3.5s6.5-1.9 6.5-3.5V11L12 14.5 5.5 11Z" fill="var(--gold)" />
              </svg>
              <div><small>Admitted to</small>{s.university}</div>
              <span className="ss-stamp">{s.stamp}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="ss-cta">
        <p>Your student could be the next story here.</p>
        <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); onBook(); }}>
          {PRIMARY_CTA} <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}
