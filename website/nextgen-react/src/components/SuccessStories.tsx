import { useState } from 'react';
import { PRIMARY_CTA } from '../site';

type Story = {
  initial: string;
  name: string;
  exam: string;
  score: string;
  max: string;
  /** Short label for the picker, e.g. "+230 SAT" or "AP Calc BC". */
  badge: string;
  /** Headline under the score in the spotlight. */
  gain: string;
  /** Line under the student's name, e.g. their starting score. */
  detail: string;
  university: string;
  /** The student's own words. Only shown when filled in. */
  quote?: string;
};

// Starting scores are the final score minus the improvement shown on the old cards.
const STORIES: Story[] = [
  { initial: 'A', name: 'Ananya K.', exam: 'SAT score', score: '1540', max: '1600', badge: '+230 SAT', gain: '▲ +230 points', detail: 'Started at 1310 · 1-on-1 SAT tutoring', university: 'University of Michigan' },
  { initial: 'R', name: 'Rohan S.', exam: 'ACT score', score: '33', max: '36', badge: '+6 ACT', gain: '▲ +6 points', detail: 'Started at 27 · 1-on-1 ACT tutoring', university: 'Georgia Tech' },
  { initial: 'M', name: 'Meera P.', exam: 'AP score', score: '5', max: '5', badge: 'AP Calc BC', gain: 'AP Calculus BC', detail: 'Top score · 1-on-1 AP tutoring', university: 'Stanford University' },
  { initial: 'A', name: 'Arjun D.', exam: 'SAT score', score: '1510', max: '1600', badge: '+210 SAT', gain: '▲ +210 points', detail: 'Started at 1300 · 1-on-1 SAT tutoring', university: 'UC Berkeley' },
];

export function SuccessStories({ onBook }: { onBook: () => void }) {
  const [active, setActive] = useState(0);
  const s = STORIES[active];

  return (
    <div className="ss-wrap">
      <article className="ss-spot" id="ss-spotlight" role="tabpanel" aria-live="polite">
        <div className="ss-chips">
          <span className="ss-chip ss-chip-gold">{s.exam}</span>
          <span className="ss-chip">Admitted · {s.university}</span>
        </div>
        <div className="ss-big">
          <div className="ss-score">{s.score}<small> / {s.max}</small></div>
          <div className="ss-gain">{s.gain}</div>
        </div>
        {s.quote && <blockquote className="ss-quote">“{s.quote}”</blockquote>}
        <div className="ss-person">
          <div className="ss-avatar ss-avatar-light" aria-hidden="true">{s.initial}</div>
          <div>
            <b>{s.name}</b>
            <span>{s.detail}</span>
          </div>
        </div>
      </article>

      <div className="ss-list">
        <div className="ss-tabs" role="tablist" aria-label="Choose a student">
          {STORIES.map((story, i) => (
            <button
              key={story.name}
              type="button"
              role="tab"
              className="ss-item"
              aria-selected={i === active}
              aria-controls="ss-spotlight"
              onClick={() => setActive(i)}
            >
              <span className="ss-avatar" aria-hidden="true">{story.initial}</span>
              <span className="ss-meta"><b>{story.name}</b><span>{story.university}</span></span>
              <span className="ss-sc"><b>{story.score}</b><span>{story.badge}</span></span>
            </button>
          ))}
        </div>
        <div className="ss-cta">
          <p>Your student could be the next story here.</p>
          <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); onBook(); }}>
            {PRIMARY_CTA} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
