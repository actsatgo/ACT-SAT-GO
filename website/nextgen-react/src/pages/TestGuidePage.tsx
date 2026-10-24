import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FaqSection } from '../components/FaqSection';
import { TEST_GUIDES, testGuideCover, testGuidePdf } from '../data/testGuides';
import { TEST_GUIDE_PAGES, testGuidePagePath, type TestGuidePage as Guide } from '../data/testGuidePages';
import { AP_GUIDES } from '../data/apGuides';
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

const LETTERS = ['A', 'B', 'C', 'D'];

/** "[[...]]" in a practice question marks the underlined part (ACT English). */
function withUnderline(text: string) {
  return text.split(/\[\[|\]\]/).map((part, i) => (i % 2 ? <u key={i}>{part}</u> : <Fragment key={i}>{part}</Fragment>));
}

/** A table that stacks into one card per row on phones. */
function GuideTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="article-table-wrap">
      <table className="article-table tg-table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              <th scope="row">{r[0]}</th>
              {r.slice(1).map((c, i) => (
                <td key={i} data-label={head[i + 1]}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** SAT or ACT guide at /sat/exam-guide and /act/exam-guide, fully server-rendered for search and AI engines. */
export function TestGuidePage({ g }: { g: Guide }) {
  const guide = TEST_GUIDES.find((t) => t.slug === g.guideSlug)!;
  const pdf = testGuidePdf(guide);
  const other = TEST_GUIDE_PAGES.find((p) => p.slug !== g.slug)!;
  const nav = [
    { id: 'format', label: 'The test at a glance' },
    ...g.sections.map((s) => ({ id: s.id, label: s.title.replace(/^The /, '') })),
    { id: 'traps', label: 'Common traps' },
    { id: 'study-plan', label: '12-week study plan' },
    { id: 'practice', label: 'Practice questions' },
    { id: 'scores', label: 'Scores & test dates' },
    { id: 'toolkit', label: 'Free resources' },
    { id: 'faq', label: 'FAQs' },
  ];

  return (
    <>
      <Header />
      <main className="aps tg">
        {/* Hero */}
        <section className="aps-hero section-dark">
          <span className="orb orb-gold" aria-hidden="true" />
          <div className="shell">
            <div className="aps-hero-grid">
              <div>
                <h1>
                  {g.name} <span>Exam Guide</span>
                </h1>
                <p className="aps-intro">{g.intro}</p>
                <p className="aps-date">
                  <IconCalendar /> Next test: <strong>{g.nextDate}</strong>
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
                aria-label={`Open the ${g.name} guide PDF in a new tab`}
                onClick={() => trackDownload(guide.title, 'open')}
              >
                <img src={testGuideCover(guide)} alt={`${g.name} exam guide cover`} width={360} height={466} />
              </a>
            </div>

            <dl className="aps-glance">
              {g.glance.map((s) => (
                <div key={s.label}>
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="shell aps-layout">
          <aside className="aps-toc" aria-label="On this page">
            <p className="lib-side-title">On this page</p>
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
            <div className="lib-side-cta">
              <strong>Want a higher score?</strong>
              <p>Get a week-by-week {g.name} plan from a 1-on-1 tutor.</p>
              <Link to={CONSULT_PATH}>
                Book a free session <span aria-hidden="true">→</span>
              </Link>
            </div>
          </aside>

          <article className="aps-main">
            {/* Format */}
            <section id="format" className="aps-section">
              <span className="aps-kicker">The test at a glance</span>
              <h2>How the {g.name} is built</h2>
              <div className="article-table-wrap">
                <table className="article-table tg-table">
                  <thead>
                    <tr>
                      <th scope="col">Section</th>
                      <th scope="col">Questions &amp; timing</th>
                      <th scope="col">What you do</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.structure.map((r) => (
                      <tr key={r.section}>
                        <th scope="row">{r.section}</th>
                        <td data-label="Questions & timing" className="tg-strong">
                          {r.timing}
                        </td>
                        <td data-label="What you do">{r.what}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="aps-notes">
                {g.formatNotes.map((n) => (
                  <div key={n.title}>
                    <h3>{n.title}</h3>
                    <p>{n.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Test sections */}
            {g.sections.map((s) => (
              <section key={s.id} id={s.id} className="aps-section">
                <span className="aps-kicker">{s.kicker}</span>
                <h2>{s.title}</h2>
                <p>{s.intro}</p>
                <dl className="tg-stats">
                  {s.stats.map((st) => (
                    <div key={st.label}>
                      <dt>{st.value}</dt>
                      <dd>{st.label}</dd>
                    </div>
                  ))}
                </dl>

                <h3 className="aps-subhead">{s.domainsTitle}</h3>
                <div className="aps-units">
                  {s.domains.map((d) => (
                    <div key={d.name} className="aps-unit">
                      <div className="aps-unit-head">
                        <span className="aps-unit-num">{d.about}</span>
                        <span className="aps-unit-weight">{d.share}</span>
                      </div>
                      <h3>{d.name}</h3>
                      <p>
                        <strong>Be ready to: </strong>
                        {d.skills}
                      </p>
                    </div>
                  ))}
                </div>
                {s.domainsNote && <p className="aps-callout">{s.domainsNote}</p>}

                <h3 className="aps-subhead">Strategies that work</h3>
                <ul className="aps-checks">
                  {s.strategies.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                {s.table && (
                  <>
                    <h3 className="aps-subhead">{s.table.title}</h3>
                    <GuideTable head={s.table.head} rows={s.table.rows} />
                    {s.table.note && <p className="aps-small tg-note">{s.table.note}</p>}
                  </>
                )}

                {s.notes && (
                  <div className="aps-notes">
                    {s.notes.map((n) => (
                      <div key={n.title}>
                        <h3>{n.title}</h3>
                        <p>{n.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                <p className="aps-callout">
                  <strong>Tip: </strong>
                  {s.tip}
                </p>
              </section>
            ))}

            {/* Traps */}
            <section id="traps" className="aps-section">
              <span className="aps-kicker">Learn from others</span>
              <h2>{g.traps.length} traps that cost points</h2>
              <ol className="aps-traps">
                {g.traps.map((t) => (
                  <li key={t.title}>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Roadmap */}
            <section id="study-plan" className="aps-section">
              <span className="aps-kicker">Plan your prep</span>
              <h2>Your 12-week study roadmap</h2>
              <p>
                A steady plan beats cramming. Three or four focused sessions a week is enough for most students, as long as
                every session ends with reviewing mistakes.
              </p>
              <ol className="aps-roadmap">
                {g.roadmap.map((r) => (
                  <li key={r.when}>
                    <span className="aps-when">{r.when}</span>
                    <div>
                      <h3>{r.focus}</h3>
                      <p>{r.text}</p>
                    </div>
                  </li>
                ))}
                <li className="aps-roadmap-end">
                  <span className="aps-when">Weeks 11–12</span>
                  <div>
                    <h3>Full tests and review</h3>
                    <p>Two more full tests on Saturday mornings. Review every miss, then go light in the last two days.</p>
                  </div>
                </li>
              </ol>
              <h3 className="aps-subhead">The final four weeks</h3>
              <GuideTable head={g.finalFour.head} rows={g.finalFour.rows} />
              <p className="aps-callout">{g.roadmapNote}</p>
            </section>

            {/* Practice */}
            <section id="practice" className="aps-section">
              <span className="aps-kicker">Test yourself</span>
              <h2>{g.practice.length} practice questions</h2>
              <p>
                Original questions written by ACT SAT GO in the style of the {g.name}, pitched hard. The free PDF has 10, with
                full explanations.
              </p>
              <ol className="aps-practice">
                {g.practice.map((q) => (
                  <li key={q.question}>
                    <span className="lib-tag">{q.topic}</span>
                    <p className="aps-q">{withUnderline(q.question)}</p>
                    <ul className="aps-choices">
                      {q.choices.map((c, i) => (
                        <li key={c}>
                          <span>{(q.letters ?? LETTERS)[i]}</span> {c}
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

            {/* Scores and dates */}
            <section id="scores" className="aps-section">
              <span className="aps-kicker">Know the target</span>
              <h2>Scores and 2026–27 test dates</h2>
              <p>{g.scoreIntro}</p>
              <div className="aps-score-stats">
                {g.scoreStats.map((s) => (
                  <div key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              {g.scoreTable && (
                <>
                  <h3 className="aps-subhead">{g.scoreTable.title}</h3>
                  <GuideTable head={g.scoreTable.head} rows={g.scoreTable.rows} />
                </>
              )}
              <p className="aps-callout">{g.scoreTip}</p>
              {g.scoreNotes && (
                <div className="aps-notes">
                  {g.scoreNotes.map((n) => (
                    <div key={n.title}>
                      <h3>{n.title}</h3>
                      <p>{n.text}</p>
                    </div>
                  ))}
                </div>
              )}
              <h3 className="aps-subhead">{g.dates.title}</h3>
              <GuideTable head={g.dates.head} rows={g.dates.rows} />
              <p className="aps-small tg-note">{g.dates.note}</p>
            </section>

            {/* Toolkit */}
            <section id="toolkit" className="aps-section">
              <span className="aps-kicker">Your toolkit</span>
              <h2>Free resources and a test-day checklist</h2>
              <ol className="tg-resources">
                {g.resources.map((r) => (
                  <li key={r.name}>
                    <h3>
                      {r.name} {r.free && <span className="tg-free">Free</span>}
                    </h3>
                    <span className="tg-where">{r.where}</span>
                    <p>{r.text}</p>
                  </li>
                ))}
              </ol>
              <h3 className="aps-subhead">Test-day checklist</h3>
              <ul className="aps-checks">
                {g.checklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p className="aps-callout">{g.checklistNote}</p>
            </section>

            <div className="lib-cta aps-cta">
              <div>
                <span className="lib-eyebrow">FREE · 1-ON-1 · ONLINE</span>
                <h2>{g.cta.title}</h2>
                <p>{g.cta.text}</p>
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

        <FaqSection items={g.faq} title={`${g.name} FAQs`} />

        <section className="shell aps-more" aria-labelledby="more-guides-title">
          <h2 id="more-guides-title">More free exam guides</h2>
          <ul>
            <li>
              <Link to={testGuidePagePath(other.slug)}>{other.name} Exam Guide</Link>
            </li>
            <li>
              <Link to="/resources?exam=AP">All {AP_GUIDES.length} AP guides →</Link>
            </li>
            <li>
              <Link to="/resources?exam=Articles">{g.name} articles →</Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
