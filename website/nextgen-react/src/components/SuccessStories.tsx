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
  stamp: string;
  university: string;
};

// Starting scores are the final score minus the improvement shown on the old cards.
const STORIES: Story[] = [
  { initial: 'A', name: 'Ananya K.', exam: 'SAT · Total score', max: 1600, score: 1540, before: 1310, stamp: '+230 pts', university: 'University of Michigan' },
  { initial: 'R', name: 'Rohan S.', exam: 'ACT · Composite', max: 36, score: 33, before: 27, stamp: '+6 pts', university: 'Georgia Tech' },
  { initial: 'M', name: 'Meera P.', exam: 'AP · Calculus BC', max: 5, score: 5, stamp: 'Top score', university: 'Stanford University' },
  { initial: 'A', name: 'Arjun D.', exam: 'SAT · Total score', max: 1600, score: 1510, before: 1300, stamp: '+210 pts', university: 'UC Berkeley' },
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
          <article key={s.name} className="ss-card">
            <div className="ss-who">
              <span className="ss-avatar" aria-hidden="true">{s.initial}</span>
              <div>
                <b>{s.name}</b>
                <span>{s.exam}</span>
              </div>
            </div>
            {s.before !== undefined ? (
              <div className="ss-scores">
                <small className="ss-label">Before</small>
                <small className="ss-label ss-label-new">After</small>
                <span className="ss-num ss-num-old">{s.before}</span>
                <span className="ss-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <span className="ss-num ss-num-new">
                  <CountUp from={s.before} to={s.score} />
                  <span className="ss-max">/{s.max}</span>
                </span>
                <span className="ss-gain">{s.stamp}</span>
              </div>
            ) : (
              <div className="ss-scores ss-scores-single">
                <small className="ss-label">Final score</small>
                <span className="ss-num ss-num-new">
                  {s.score}
                  <span className="ss-max">/{s.max}</span>
                </span>
                <span className="ss-gain">{s.stamp}</span>
              </div>
            )}
            <div className="ss-uni">
              <small>Admitted to</small>
              <div className="ss-uni-row">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3 1.5 8.5 12 14l10.5-5.5L12 3Z" fill="currentColor" />
                  <path d="M5.5 11v4.5c0 1.6 2.9 3.5 6.5 3.5s6.5-1.9 6.5-3.5V11L12 14.5 5.5 11Z" fill="var(--gold)" />
                </svg>
                <span className="ss-uni-name">{s.university}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="ss-cta">
        <p>Your teen could be the next story here.</p>
        <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); onBook(); }}>
          {PRIMARY_CTA} <span aria-hidden="true">→</span>
        </a>
      </div>
    </>
  );
}
