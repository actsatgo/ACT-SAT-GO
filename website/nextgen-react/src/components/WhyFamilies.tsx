import { useEffect, useRef, useState, type CSSProperties } from 'react';
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

// Resting position: handle near the left edge, ACT SAT GO almost fully shown.
const REST = 96;

export function WhyFamilies({ onBook }: { onBook: () => void }) {
  // How much of the ACT SAT GO side is revealed, from the right edge (0–100).
  const [reveal, setReveal] = useState(REST);
  const current = useRef(REST);
  const target = useRef(REST);
  const frame = useRef(0);
  // How much of the remaining gap to close each frame: quick while following the mouse, gentle when returning.
  const speed = useRef(0.12);

  // Touch: true while a finger is holding the handle.
  const dragging = useRef(false);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  // Glide the split towards `to` instead of jumping there.
  const glideTo = (to: number, ease: number) => {
    target.current = to;
    speed.current = ease;
    if (frame.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      current.current = to;
      setReveal(to);
      return;
    }
    const step = () => {
      const diff = target.current - current.current;
      if (Math.abs(diff) < 0.2) {
        current.current = target.current;
        setReveal(target.current);
        frame.current = 0;
        return;
      }
      current.current += diff * speed.current;
      setReveal(current.current);
      frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  };

  const jumpTo = (to: number) => {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    current.current = target.current = to;
    setReveal(to);
  };

  return (
    <section className="why shell" id="why-us">
      <div className="why-head">
        <h2>Why families choose <em>ACT SAT GO</em></h2>
      </div>

      <div
        className="why-slider"
        style={{ '--pos': `${100 - reveal}%` } as CSSProperties}
        onPointerDown={(e) => {
          // Touch: only a finger placed on the handle starts a drag; taps elsewhere and vertical swipes do nothing.
          if (e.pointerType === 'mouse') return;
          const box = e.currentTarget.getBoundingClientRect();
          const handleX = box.left + ((100 - current.current) / 100) * box.width;
          if (Math.abs(e.clientX - handleX) > 36) return;
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          const box = e.currentTarget.getBoundingClientRect();
          const x = Math.min(1, Math.max(0, (e.clientX - box.left) / box.width));
          // With a mouse the split follows the pointer, no click needed.
          if (e.pointerType === 'mouse') glideTo(100 - x * 100, 0.45);
          // With a finger it follows the drag, in the direction of the drag.
          else if (dragging.current) jumpTo(100 - x * 100);
        }}
        onPointerUp={() => { dragging.current = false; }}
        onPointerCancel={() => { dragging.current = false; }}
        onPointerLeave={(e) => {
          if (e.pointerType === 'mouse') glideTo(REST, 0.12);
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
          value={Math.round(100 - reveal)}
          onChange={(e) => jumpTo(100 - Number(e.target.value))}
          aria-label="Drag to compare typical tutoring with ACT SAT GO"
        />
      </div>

      <div className="why-cta">
        <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); onBook(); }}>
          {PRIMARY_CTA} <span aria-hidden="true">→</span>
        </a>
        <Link className="btn why-btn-outline" to="/free-test">{SECONDARY_CTA}</Link>
      </div>
    </section>
  );
}
