import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FaqSection } from '../components/FaqSection';
import { NotFoundPage } from './NotFoundPage';
import { AP_SUBJECTS, AP_SUBJECT_BY_SLUG, apSubjectFaq, apSubjectPath } from '../data/apSubjects';
import { AP_GUIDES, apGuideCover, apGuidePdf } from '../data/apGuides';
import { CONSULT_PATH, PRIMARY_CTA } from '../site';
import { trackDownload } from '../lib/analytics';

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

const NAV = [
  { id: 'format', label: 'Exam format' },
  { id: 'section-1', label: 'Section I' },
  { id: 'units', label: 'What it covers' },
  { id: 'section-2', label: 'Section II' },
  { id: 'traps', label: 'Common traps' },
  { id: 'study-plan', label: 'Study plan' },
  { id: 'practice', label: 'Practice questions' },
  { id: 'scores', label: 'Scores' },
  { id: 'faq', label: 'FAQs' },
];

/** How many related guides to list at the bottom of the page. */
const MORE_COUNT = 8;

/** AP subject guide at /ap/:subject, fully server-rendered for search and AI engines. */
export function ApSubjectPage() {
  const { subject = '' } = useParams();
  const s = AP_SUBJECT_BY_SLUG[subject];
  if (!s) return <NotFoundPage />;

  const guide = AP_GUIDES.find((g) => g.slug === s.guideSlug)!;
  const pdf = apGuidePdf(guide);
  const label = s.unitLabel ?? 'Unit';
  // Section links follow the section kickers ("Section II · 60%" -> "Section II"), so they match the page.
  const navLabel = (id: string) =>
    id === 'section-1' ? s.mcq.kicker?.split(' · ')[0] : id === 'section-2' ? s.frq.kicker?.split(' · ')[0] : undefined;
  const end = s.roadmapEnd ?? {
    when: 'May 2027',
    focus: 'Exam day',
    text: `${s.examDate}. Sleep well and confirm your start time with your AP coordinator.`,
  };
  // Same subject area first, then the rest, so the list stays short and relevant.
  const categoryOf = (x: { guideSlug: string }) => AP_GUIDES.find((g) => g.slug === x.guideSlug)?.category;
  const others = AP_SUBJECTS.filter((x) => x.slug !== s.slug)
    .sort((a, b) => Number(categoryOf(b) === guide.category) - Number(categoryOf(a) === guide.category))
    .slice(0, MORE_COUNT);

  return (
    <>
      <Header />
      <main className="aps">
        {/* Hero */}
        <section className="aps-hero section-dark">
          <span className="orb orb-gold" aria-hidden="true" />
          <div className="shell">
            <div className="aps-hero-grid">
              <div>
                <h1>
                  {s.name} <span>Exam Guide</span>
                </h1>
                <p className="aps-intro">{s.intro}</p>
                <p className="aps-date">
                  <IconCalendar /> {s.dateLabel ?? '2027 exam'}: <strong>{s.examDate}</strong>
                </p>
                <div className="aps-hero-actions">
                  <a className="lib-btn-gold" href={pdf} download onClick={() => trackDownload(guide.title, 'download')}>
                    <IconDownload /> Download the free PDF
                  </a>
                  <Link className="lib-btn-ghost" to={CONSULT_PATH}>
                    {PRIMARY_CTA}
                  </Link>
                </div>
              </div>
              <a
                className="aps-cover"
                href={pdf}
                target="_blank"
                rel="noopener"
                aria-label={`Open the ${s.name} guide PDF in a new tab`}
                onClick={() => trackDownload(guide.title, 'open')}
              >
                <img src={apGuideCover(guide)} alt={`${s.name} exam guide cover`} width={360} height={466} />
              </a>
            </div>

            <dl className="aps-glance">
              {s.glance.map((g) => (
                <div key={g.label}>
                  <dt>{g.value}</dt>
                  <dd>{g.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="shell aps-layout">
          <aside className="aps-toc" aria-label="On this page">
            <p className="lib-side-title">On this page</p>
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {navLabel(n.id) ?? n.label}
              </a>
            ))}
            <div className="lib-side-cta">
              <strong>Want a 5?</strong>
              <p>Get a week-by-week {s.name} plan from a 1-on-1 tutor.</p>
              <Link to={CONSULT_PATH}>
                Book a free session <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>

          <article className="aps-main">
            {/* Format */}
            <section id="format" className="aps-section">
              <h2>The exam at a glance</h2>
              <div className="article-table-wrap">
                <table className="article-table aps-table">
                  <thead>
                    <tr>
                      <th scope="col">Section</th>
                      <th scope="col">Weight</th>
                      <th scope="col">Timing</th>
                      <th scope="col">What you do</th>
                    </tr>
                  </thead>
                  <tbody>
                    {s.structure.map((r) => (
                      <tr key={r.section}>
                        <th scope="row">{r.section}</th>
                        <td data-label="Weight">{r.weight}</td>
                        <td data-label="Timing">{r.timing}</td>
                        <td data-label="What you do">{r.what}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="aps-notes">
                {s.formatNotes.map((n) => (
                  <div key={n.title}>
                    <h3>{n.title}</h3>
                    <p>{n.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section I */}
            <section id="section-1" className="aps-section">
              <span className="aps-kicker">{s.mcq.kicker ?? 'Section I'}</span>
              <h2>{s.mcq.title ?? 'The multiple-choice section'}</h2>
              <p>{s.mcq.intro}</p>
              <h3 className="aps-subhead">Strategies that work</h3>
              <ul className="aps-checks">
                {s.mcq.tips.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            {/* Units */}
            <section id="units" className="aps-section">
              <span className="aps-kicker">What the course covers</span>
              <h2>{s.unitsTitle ?? `The ${s.units.length} units, in plain English`}</h2>
              <div className="aps-units">
                {s.units.map((u, i) => (
                  <div key={u.name} className={`aps-unit${u.weight === 'Not tested' ? ' muted' : ''}`}>
                    <div className="aps-unit-head">
                      <span className="aps-unit-num">
                        {label} {i + (s.unitStart ?? 1)}
                      </span>
                      {u.weight && <span className="aps-unit-weight">{u.weight}</span>}
                    </div>
                    <h3>{u.name}</h3>
                    <p className="aps-unit-about">{u.about}</p>
                    <p>
                      <strong>{label === 'Period' ? 'Know: ' : 'Be ready to: '}</strong>
                      {u.skills}
                    </p>
                  </div>
                ))}
              </div>
              {s.unitsNote && <p className="aps-callout">{s.unitsNote}</p>}
            </section>

            {/* Section II */}
            <section id="section-2" className="aps-section">
              <span className="aps-kicker">{s.frq.kicker ?? 'Section II'}</span>
              <h2>{s.frq.title ?? 'The free-response section'}</h2>
              <p>{s.frq.intro}</p>
              <div className="aps-frq">
                {s.frq.types.map((t) => (
                  <div key={t.label} className="aps-frq-card">
                    <span className="aps-frq-label">{t.label}</span>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                    {t.tip && <p className="aps-tip">{t.tip}</p>}
                  </div>
                ))}
              </div>
              <p className="aps-callout">
                <strong>Time plan: </strong>
                {s.frq.timePlan}
              </p>
              <h3 className="aps-subhead">Habits that earn points</h3>
              <ol className="aps-habits">
                {s.habits.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ol>
            </section>

            {/* Traps */}
            <section id="traps" className="aps-section">
              <span className="aps-kicker">Learn from others</span>
              <h2>{s.traps.length} traps that cost points</h2>
              <ol className="aps-traps">
                {s.traps.map((t) => (
                  <li key={t.title}>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Roadmap */}
            <section id="study-plan" className="aps-section">
              <span className="aps-kicker">Plan your year</span>
              <h2>A study roadmap to May</h2>
              <p>A steady plan beats a last-minute rush. Shift the months to match your teacher's pacing.</p>
              <ol className="aps-roadmap">
                {s.roadmap.map((r) => (
                  <li key={r.when}>
                    <span className="aps-when">{r.when}</span>
                    <div>
                      <h3>{r.focus}</h3>
                      <p>{r.text}</p>
                    </div>
                  </li>
                ))}
                <li className="aps-roadmap-end">
                  <span className="aps-when">{end.when}</span>
                  <div>
                    <h3>{end.focus}</h3>
                    <p>{end.text}</p>
                  </div>
                </li>
              </ol>
            </section>

            {/* Practice */}
            <section id="practice" className="aps-section">
              <span className="aps-kicker">Test yourself</span>
              <h2>3 practice questions</h2>
              <p>
                Original questions written by ACT SAT GO in the style of the exam. The free PDF has 10, with full
                explanations.
              </p>
              <ol className="aps-practice">
                {s.practice.map((q) => (
                  <li key={q.question}>
                    <span className="lib-tag">{q.topic}</span>
                    <p className="aps-q">{q.question}</p>
                    <ul className="aps-choices">
                      {q.choices.map((c, i) => (
                        <li key={c}>
                          <span>{LETTERS[i]}</span> {c}
                        </li>
                      ))}
                    </ul>
                    <details>
                      <summary>Show answer</summary>
                      <p>
                        <strong>Answer: {q.answer}.</strong> {q.why}
                      </p>
                    </details>
                  </li>
                ))}
              </ol>
            </section>

            {/* Scores */}
            <section id="scores" className="aps-section">
              <span className="aps-kicker">Know the target</span>
              <h2>How students score</h2>
              <div className="aps-score-stats">
                {s.scores ? (
                  <>
                    <div>
                      <strong>{s.scores.threePlus}</strong>
                      <span>earned a 3 or higher in recent years</span>
                    </div>
                    <div>
                      <strong>{s.scores.fives}</strong>
                      <span>earned the top score of 5</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <strong>New</strong>
                      <span>course, so national score history is still building</span>
                    </div>
                    <div>
                      <strong>1–5</strong>
                      <span>the same scale as every AP exam</span>
                    </div>
                  </>
                )}
                <div>
                  <strong>3+</strong>
                  <span>is the score many colleges accept for credit or placement</span>
                </div>
              </div>
              <p className="aps-small">
                Ranges reflect recent College Board score distributions and shift a little each year. Credit and
                placement policies vary by college.
              </p>
            </section>

            <div className="lib-cta aps-cta">
              <div>
                <span className="lib-eyebrow">FREE · 1-ON-1 · ONLINE</span>
                <h2>Aiming for a 5 in {s.name}?</h2>
                <p>
                  Book a free diagnostic session. We'll find your weakest units, review your practice responses and give
                  you a week-by-week plan to exam day.
                </p>
              </div>
              <div className="lib-cta-actions">
                <Link className="lib-btn-gold" to={CONSULT_PATH}>
                  {PRIMARY_CTA} <span aria-hidden="true">→</span>
                </Link>
                <a className="lib-btn-ghost" href={pdf} download onClick={() => trackDownload(guide.title, 'download')}>
                  Download the free PDF
                </a>
              </div>
            </div>
          </article>
        </div>

        <FaqSection items={apSubjectFaq(s)} title={`${s.name} FAQs`} />

        <section className="shell aps-more" aria-labelledby="more-ap-title">
          <h2 id="more-ap-title">More AP exam guides</h2>
          <ul>
            {others.map((o) => (
              <li key={o.slug}>
                <Link to={apSubjectPath(o.slug)}>{o.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/resources#ap-guides">All {AP_GUIDES.length} AP guides →</Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
