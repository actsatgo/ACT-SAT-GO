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
        <h2>Why families choose <em>ACT SAT GO</em></h2>
        <p>See the difference a real 1-on-1 plan makes.</p>
      </div>

      <div
        className="why-slider"
        style={{ '--pos': `${100 - reveal}%` } as CSSProperties}
        onPointerMove={(e) => {
          // With a mouse the split follows the pointer, no click needed. Touch still drags the range input.
          if (e.pointerType !== 'mouse') return;
          const box = e.currentTarget.getBoundingClientRect();
          const x = Math.min(1, Math.max(0, (e.clientX - box.left) / box.width));
          setReveal(Math.round(100 - x * 100));
        }}
      >
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
      <p className="why-hint">Move across the cards to compare.</p>

      <div className="why-cta">
        <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); onBook(); }}>
          {PRIMARY_CTA} <span aria-hidden="true">→</span>
        </a>
        <Link className="btn why-btn-outline" to="/free-test">{SECONDARY_CTA}</Link>
      </div>
    </section>
  );
}
