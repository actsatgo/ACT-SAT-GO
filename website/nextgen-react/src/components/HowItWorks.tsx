import { Link } from 'react-router-dom';
import { PRIMARY_CTA, CONSULT_PATH } from '../site';

const STEPS = [
  {
    title: 'Book a free diagnostic lesson',
    text: 'Pick a time or send the short form. No payment, no obligation.',
  },
  {
    title: 'Get your baseline and plan',
    text: 'Your child works through a diagnostic with a tutor; we show you the results and a plan built around the target score and test date.',
  },
  {
    title: 'Start 1-on-1 sessions',
    text: 'A specialist tutor for the exact test or AP course, homework after every session and progress reports for you.',
  },
];

/** "What happens after you click" — shown near every major call to action. */
export function HowItWorks({ showCta = true, dark = false }: { showCta?: boolean; dark?: boolean }) {
  return (
    <section className={`how-it-works${dark ? ' how-it-works--dark' : ''}`} aria-labelledby="how-it-works-title">
      <div className="shell">
        <div className="section-heading center">
          <h2 id="how-it-works-title">How it works</h2>
          <p>Three steps from first click to first lesson.</p>
        </div>
        <ol className="hiw-steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="hiw-step">
              <span className="hiw-num" aria-hidden="true">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        {showCta && (
          <div className="hiw-cta">
            <Link className="btn btn-primary" to={CONSULT_PATH}>{PRIMARY_CTA} <span aria-hidden="true">→</span></Link>
          </div>
        )}
      </div>
    </section>
  );
}
