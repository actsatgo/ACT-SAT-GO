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
  return (
    <section className="why shell" id="why-us">
      <div className="why-head">
        <span className="why-eyebrow">Why families choose ACT SAT GO</span>
        <h2>We don't just teach. We turn potential into performance.</h2>
        <p>1-on-1 SAT tutoring with a personal plan, a mentor and weekly parent reports.</p>
      </div>
      <div className="why-table" role="table" aria-label="ACT SAT GO compared with typical tutoring">
        <div className="why-row why-row-head" role="row">
          <div className="why-what" role="columnheader"><span className="sr-only">Feature</span></div>
          <div className="why-them" role="columnheader">Typical tutoring</div>
          <div className="why-us" role="columnheader">
            <svg className="why-logo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="12 3 21 20 3 20" /></svg>
            ACT SAT GO
          </div>
        </div>
        {ROWS.map((r) => (
          <div key={r.label} className="why-row" role="row">
            <div className="why-what" role="rowheader">{r.label}</div>
            <div className="why-them" role="cell"><span className="why-ico why-no" aria-hidden="true">✕</span>{r.others}</div>
            <div className="why-us" role="cell"><span className="why-ico why-yes" aria-hidden="true">✓</span>{r.asg}</div>
          </div>
        ))}
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
