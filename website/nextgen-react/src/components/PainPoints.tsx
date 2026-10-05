const PAINS = [
  {
    pain: '“My child’s practice scores have plateaued.”',
    fix: 'A diagnostic pinpoints the exact question types costing points, and practice sets are built from your child’s own mistakes — not a generic workbook.',
  },
  {
    pain: '“The test date is close and we don’t have a plan.”',
    fix: 'We build a week-by-week plan around the target score and the real test date, so every session has a job to do.',
  },
  {
    pain: '“I can’t tell if tutoring is working.”',
    fix: 'Homework after every session, full-length practice tests with a score report after each one, and progress reports so you can see the trend.',
  },
];

/** Names the worries parents actually arrive with, each tied to how we solve it. */
export function PainPoints() {
  return (
    <section className="pain-points shell" aria-labelledby="pain-points-title">
      <div className="section-heading center">
        <h2 id="pain-points-title">Sound familiar?</h2>
      </div>
      <div className="pain-grid">
        {PAINS.map((p) => (
          <article key={p.pain} className="pain-card">
            <h3>{p.pain}</h3>
            <p>{p.fix}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
