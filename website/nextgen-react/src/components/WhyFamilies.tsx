import { useEffect, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_CTA, SECONDARY_CTA } from '../site';

const ROWS = [
  { label: 'Study plan', others: 'Same lessons for everyone', asg: "A plan built from your student's diagnostic test" },
  { label: 'Support', others: 'Tutoring sessions only', asg: 'Tutor plus academic mentor, through test day' },
  { label: 'Progress tracking', others: 'Little insight into progress', asg: 'Section-level score analytics' },
  { label: 'Help between sessions', others: 'Limited or extra cost', asg: 'Unlimited homework and question help' },
  { label: 'Parent updates', others: 'Occasional, if at all', asg: 'Weekly reports and parent-tutor meetings' },
  { label: 'Tools', others: 'Scattered apps and worksheets', asg: 'Lessons, practice and mock tests in one platform' },
];

export function WhyFamilies({ onBook }: { onBook: () => void }) {
  // How much of the ACT SAT GO side is revealed, from the right edge (0–100).
  const [reveal, setReveal] = useState(66);

  // On phones the tiles stack in one column, so a mid-way split cuts every line.
  // Start with ACT SAT GO almost fully shown and let visitors drag to see the rest.
  useEffect(() => {
    if (window.matchMedia('(max-width: 520px)').matches) setReveal(94);
  }, []);

  return (
    <section className="why shell" id="why-us">
      <div className="why-head">
        <span className="why-eyebrow">Why families choose ACT SAT GO</span>
        <h2>See the difference a real plan makes.</h2>
        <p>1-on-1 SAT tutoring with a personal plan, a mentor and weekly parent reports.</p>
      </div>

      <div className="why-slider" style={{ '--pos': `${100 - reveal}%` } as CSSProperties}>
        <span className="why-tag why-tag-them" aria-hidden="true">Typical tutoring</span>
        <span className="why-tag why-tag-us" aria-hidden="true">ACT SAT GO</span>
        <div className="why-layer why-them">
          {ROWS.map((r) => (
            <div key={r.label} className="why-tile">
              <small>{r.label}</small>
              <b><span className="sr-only">Typical tutoring: </span>{r.others}</b>
            </div>
          ))}
        </div>
        <div className="why-layer why-us">
          {ROWS.map((r) => (
            <div key={r.label} className="why-tile">
              <small>{r.label}</small>
              <b><span className="sr-only">ACT SAT GO: </span>{r.asg}</b>
            </div>
          ))}
        </div>
        <div className="why-handle" aria-hidden="true" />
        <input
          id="why-compare"
          className="why-range"
          type="range"
          min={0}
          max={100}
          value={reveal}
          onChange={(e) => setReveal(Number(e.target.value))}
          aria-label="Drag to compare typical tutoring with ACT SAT GO"
        />
      </div>
      <p className="why-hint">Drag the gold handle to compare.</p>

      <div className="why-cta">
        <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); onBook(); }}>
          {PRIMARY_CTA} <span aria-hidden="true">→</span>
        </a>
        <Link className="btn why-btn-outline" to="/free-test">{SECONDARY_CTA}</Link>
      </div>
    </section>
  );
}
