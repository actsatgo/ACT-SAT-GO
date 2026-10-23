import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { fetchBlogs, type BlogPost } from '../admin/api';
import { AP_GUIDES, apGuidePdf, type ApGuide, type ApGuideCategory } from '../data/apGuides';
import { TEST_GUIDES, TEST_GUIDES_UPDATED, testGuideCover, testGuidePdf } from '../data/testGuides';
import { ARTICLES, articlePath } from '../data/articles';
import { AP_SUBJECT_BY_GUIDE, apSubjectPath } from '../data/apSubjects';
import { QUERY_API_BASE } from '../config';
import { CONSULT_PATH, PRIMARY_CTA } from '../site';
import { trackDownload } from '../lib/analytics';

// Image assets
import heroImg from '../assets/img/resouces-hero.webp';
import blogStudyHabitsImg from '../assets/img/6.webp';
import blogSatDiffImg from '../assets/img/7.webp';
import blogCollegeEssayImg from '../assets/img/8.webp';
import blogApWorthImg from '../assets/img/9.webp';

// Custom icons
function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

const POPULAR = ['SAT Prep', 'ACT Strategies', 'AP Guides', 'IB Guides', 'A Level', 'Study Tips'];

// Words that describe the kind of resource rather than its topic ("SAT Prep" means SAT).
const FILLER_WORDS = new Set(['prep', 'guide', 'guides', 'strategies', 'tips', 'resources', 'pdf', 'and', '&']);

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** True when every topic word in `query` starts a word somewhere in `text`. */
function matches(text: string, query: string): boolean {
  const words = query.toLowerCase().split(/\s+/).filter((w) => w && !FILLER_WORDS.has(w));
  if (words.length === 0) return true;
  return words.every((w) => new RegExp(`\\b${escapeRegExp(w)}`, 'i').test(text));
}

// AP subject areas, most-taken first. Groups marked `more` sit below a divider in the AP dropdown.
const AP_GROUPS: { id: string; label: string; categories: ApGuideCategory[]; more?: boolean }[] = [
  { id: 'ap-math', label: 'Math and Computer Science', categories: ['Math & Computer Science'] },
  { id: 'ap-sciences', label: 'Sciences', categories: ['Sciences'] },
  { id: 'ap-history', label: 'History and Social Sciences', categories: ['History & Social Sciences'] },
  { id: 'ap-english', label: 'English', categories: ['English'] },
  { id: 'ap-arts', label: 'Arts', categories: ['Arts'], more: true },
  { id: 'ap-languages', label: 'World Languages and Cultures', categories: ['World Languages'], more: true },
  { id: 'ap-capstone', label: 'Capstone and Career Kickstart', categories: ['Capstone', 'Career Kickstart'], more: true },
];

// Subjects listed first within their group; the rest keep their usual order.
const AP_FIRST = ['AP Macroeconomics', 'AP Microeconomics', 'AP Psychology', 'AP Human Geography'];
const apRank = (g: ApGuide) => (AP_FIRST.includes(g.title) ? AP_FIRST.indexOf(g.title) : AP_FIRST.length);
/** The guides in an AP group, popular subjects first. */
const guidesInGroup = (guides: ApGuide[], categories: ApGuideCategory[]) =>
  guides.filter((g) => categories.includes(g.category)).sort((x, y) => apRank(x) - apRank(y));

const ARTICLE_TAGS = ['All', 'SAT', 'ACT', 'College Admissions', 'AP'];

/** Articles tagged "SAT & ACT" cover both tests, so they show under the SAT chip and the ACT chip. */
const EXAMS = ['SAT', 'ACT', 'AP', 'IB', 'Articles', 'Others'] as const;
type Exam = (typeof EXAMS)[number];
/** "Articles" lists every article; "Others" holds what isn't tied to one exam: admissions articles and the blog. */
const articleInExam = (articleTag: string, exam: Exam | null) => {
  if (!exam || exam === 'Articles') return true;
  if (exam === 'Others') return articleTag === 'College Admissions';
  return exam !== 'IB' && hasArticleTag(articleTag, exam);
};

const hasArticleTag = (articleTag: string, chip: string) =>
  chip === 'All' || articleTag === chip || (articleTag === 'SAT & ACT' && (chip === 'SAT' || chip === 'ACT'));
const ARTICLES_SHOWN = 8;


const sizeLabel = (kb: number) => (kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`);

const apText = (g: ApGuide) => `${g.title} ${g.category} ${g.summary} ${g.keywords.join(' ')} AP guide`;

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  // The picked exam lives in the URL (?exam=sat) so each tab has its own shareable link.
  const [params, setParams] = useSearchParams();
  const exam = EXAMS.find((e) => e.toLowerCase() === params.get('exam')?.toLowerCase()) ?? null;
  // An AP subject area picked from the AP tab's dropdown (?exam=ap&area=sciences).
  const apArea = exam === 'AP' ? (AP_GROUPS.find((g) => g.id === `ap-${params.get('area')}`) ?? null) : null;
  const setExam = (e: Exam | null, area?: string) =>
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (e) next.set('exam', e.toLowerCase());
        else next.delete('exam');
        if (area) next.set('area', area.replace(/^ap-/, ''));
        else next.delete('area');
        return next;
      },
      { replace: true, preventScrollReset: true },
    );
  const [apMenuOpen, setApMenuOpen] = useState(false);

  // A tap anywhere outside the AP dropdown closes it.
  useEffect(() => {
    if (!apMenuOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!(e.target as Element).closest('.lib-exam-drop')) setApMenuOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [apMenuOpen]);
  const [articleTag, setArticleTag] = useState('All');
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  const getBlogImage = (post: BlogPost) => {
    if (post.image) return post.image;
    const tag = post.tag.toLowerCase();
    if (tag.includes('tips') || tag.includes('habit')) return blogStudyHabitsImg;
    if (tag.includes('sat') || tag.includes('act')) return blogSatDiffImg;
    if (tag.includes('essay') || tag.includes('college')) return blogCollegeEssayImg;
    if (tag.includes('ap')) return blogApWorthImg;
    return blogStudyHabitsImg;
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchBlogs();
        if (!cancelled) {
          setBlogs(data);
        }
      } catch (err) {
        console.error('Failed to load blogs:', err);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    try {
      await fetch(`${QUERY_API_BASE}/api/queries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter Subscriber',
          email: email.trim(),
          phone: '',
          exam: 'General',
          message: 'Signed up for newsletter resources & tips.',
          type: 'Newsletter',
        }),
      });
    } catch (error) {
      console.error('Error submitting newsletter email:', error);
    }
    setEmail('');
  };

  const clearSearch = () => setSearchQuery('');

  const handlePillClick = (pill: string) => {
    setSearchQuery(searchQuery.toLowerCase() === pill.toLowerCase() ? '' : pill);
  };

  // Filtering
  const testGuides = TEST_GUIDES.filter(
    (g) =>
      (!exam || g.slug.startsWith(exam.toLowerCase())) &&
      matches(`${g.title} ${g.tag} ${g.summary} ${g.keywords.join(' ')} test guide`, searchQuery),
  );
  const apGuides = AP_GUIDES.filter(
    (g) =>
      (!exam || exam === 'AP') && (!apArea || apArea.categories.includes(g.category)) && matches(apText(g), searchQuery),
  );
  const apGroups = AP_GROUPS.map((group) => ({
    ...group,
    guides: guidesInGroup(apGuides, group.categories),
  })).filter((group) => group.guides.length > 0);

  const searchedArticles = ARTICLES.filter(
    (a) => articleInExam(a.tag, exam) && matches(`${a.title} ${a.tag} ${a.description}`, searchQuery),
  );
  const articleCount = (tag: string) => searchedArticles.filter((a) => hasArticleTag(a.tag, tag)).length;
  const articles = searchedArticles.filter((a) => hasArticleTag(a.tag, articleTag));
  const shownArticles = showAllArticles ? articles : articles.slice(0, ARTICLES_SHOWN);

  const filteredBlogs = blogs.filter((post) =>
    (!exam || exam === 'Others') && matches(`${post.title} ${post.text} ${post.tag} ${post.tags.join(' ')}`, searchQuery),
  );

  const hasResults = testGuides.length + apGuides.length + searchedArticles.length + filteredBlogs.length > 0;

  const counts = useMemo(
    () => [
      { n: TEST_GUIDES.length, label: 'SAT & ACT guides' },
      { n: AP_GUIDES.length, label: 'AP exam guides' },
      { n: ARTICLES.length, label: 'expert articles' },
    ],
    [],
  );

  const pickExam = (e: Exam, area?: string) => {
    setApMenuOpen(false);
    setExam(exam === e && !area && e !== 'AP' ? null : e, area);
    setArticleTag('All');
    setShowAllArticles(false);
    // Keep the bar at the top of the screen as the content below it changes.
    requestAnimationFrame(() => document.getElementById('library')?.scrollIntoView({ block: 'start' }));
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="resources-hero section-dark">
          <span className="orb orb-gold" aria-hidden="true" />
          <div className="shell">
            <div className="resources-hero-grid">
              <div className="resources-hero-copy">
                <h1>
                  Knowledge that<br />
                  <span>Empowers Progress</span>
                </h1>
                <p className="hero-text">
                  Curated guides, expert tips, and the latest insights to help you learn smarter and achieve more.
                </p>

                {/* Search box */}
                <form
                  className="resources-search-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <div className="resources-search-wrapper">
                    <input
                      type="text"
                      className="resources-search-input"
                      placeholder="Search for guides, blogs, resources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit" className="resources-search-btn" aria-label="Search">
                      <IconSearch />
                    </button>
                  </div>
                </form>

                {/* Popular tags */}
                <div className="resources-popular">
                  <span>Popular:</span>
                  {POPULAR.map((pill) => (
                    <button
                      key={pill}
                      type="button"
                      className={`resources-pill-btn${searchQuery.toLowerCase() === pill.toLowerCase() ? ' active' : ''}`}
                      onClick={() => handlePillClick(pill)}
                    >
                      {pill}
                    </button>
                  ))}
                </div>

                {/* Library counts */}
                <div className="lib-stats">
                  {counts.map((c) => (
                    <div key={c.label}>
                      <strong>{c.n}</strong>
                      <span>{c.label}</span>
                    </div>
                  ))}
                  <div>
                    <strong>$0</strong>
                    <span>free, no sign-up</span>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="resources-hero-art">
                <img
                  src={heroImg}
                  alt="Knowledge and education concept: Graduation cap, rocket and icons orbiting lightbulb"
                  className="resources-hero-photo"
                  width={1050}
                  height={957}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="shell lib-layout" id="library">
          {/* Exam bar: narrows the library to one exam; picking it again shows everything */}
          <nav className="lib-exams" aria-label="Filter the library by exam">
            {EXAMS.map((e) =>
              e === 'AP' ? (
                <div
                  key={e}
                  className={`lib-exam-drop${apMenuOpen ? ' is-open' : ''}`}
                  // Hover opens it for mouse users; on touch a tap on the tab opens it instead
                  onPointerEnter={(ev) => ev.pointerType === 'mouse' && setApMenuOpen(true)}
                  onPointerLeave={(ev) => ev.pointerType === 'mouse' && setApMenuOpen(false)}
                  onKeyDown={(ev) => ev.key === 'Escape' && setApMenuOpen(false)}
                >
                  <button
                    type="button"
                    className={`lib-exam${exam === e ? ' active' : ''}`}
                    aria-expanded={apMenuOpen}
                    aria-haspopup="true"
                    onClick={() => setApMenuOpen((v) => !v)}
                  >
                    <span className="lib-exam-label">AP</span>
                    <svg className="lib-exam-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <ul className="lib-exam-menu">
                    {AP_GROUPS.map((g, i) => {
                      const subjects = guidesInGroup(AP_GUIDES, g.categories);
                      return (
                        <li key={g.id} className={g.more && !AP_GROUPS[i - 1]?.more ? 'lib-exam-menu-break' : undefined}>
                          <button
                            type="button"
                            className={apArea?.id === g.id ? 'active' : ''}
                            onClick={() => pickExam('AP', g.id)}
                          >
                            AP {g.label}
                            <span>
                              <b>{subjects.length}</b> <i aria-hidden="true">›</i>
                            </span>
                          </button>
                          {/* Hovering a group opens its subjects to the right */}
                          <ul className="lib-exam-sub">
                            {subjects.map((a) => {
                              const page = AP_SUBJECT_BY_GUIDE[a.slug];
                              return (
                                <li key={a.slug}>
                                  {page ? (
                                    <Link to={apSubjectPath(page.slug)} onClick={() => setApMenuOpen(false)}>
                                      {a.title}
                                    </Link>
                                  ) : (
                                    <button type="button" onClick={() => pickExam('AP', g.id)}>
                                      {a.title}
                                    </button>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <button
                  key={e}
                  type="button"
                  className={`lib-exam${exam === e ? ' active' : ''}`}
                  aria-pressed={exam === e}
                  onClick={() => pickExam(e)}
                >
                  <span className="lib-exam-label">{e}</span>
                </button>
              ),
            )}
          </nav>

          <div className="lib-main">
            {searchQuery && (
              <p className="lib-search-note" aria-live="polite">
                Showing results for <strong>“{searchQuery}”</strong>
                <button type="button" onClick={clearSearch}>
                  Clear search
                </button>
              </p>
            )}

            {/* Empty state when search yields nothing */}
            {!hasResults && (
              <div className="search-empty-state">
                {exam === 'IB' && !searchQuery ? (
                  <>
                    <h3>IB guides are coming soon</h3>
                    <p>We're writing them now. Meanwhile, browse our SAT, ACT and AP guides.</p>
                  </>
                ) : (
                  <>
                    <h3>No match found</h3>
                    <p>We couldn't find any guides or articles matching "{searchQuery}".</p>
                  </>
                )}
                <button
                  className="clear-search-btn"
                  onClick={() => {
                    clearSearch();
                    setExam(null);
                  }}
                >
                  {exam === 'IB' && !searchQuery ? 'View All Resources' : 'Clear Search & View All'}
                </button>
              </div>
            )}

            {/* SAT & ACT test guides */}
            {testGuides.length > 0 && (
              <section id="sat-act-guides" className="lib-section" aria-labelledby="sat-act-guides-title">
                <div className="lib-head">
                  <h2 id="sat-act-guides-title">{exam ? `${exam} Test Guide` : 'SAT & ACT Test Guides'}</h2>
                  <p>Free PDFs, no sign-up · updated {TEST_GUIDES_UPDATED}</p>
                </div>
                <div className="lib-feature-pair">
                  {testGuides.map((g) => {
                    const pdf = testGuidePdf(g);
                    return (
                      <article key={g.slug} className="lib-feature-card">
                        <a
                          href={pdf}
                          target="_blank"
                          rel="noopener"
                          aria-label={`Open the ${g.title} test guide PDF in a new tab`}
                          onClick={() => trackDownload(g.title, 'open')}
                        >
                          <img src={testGuideCover(g)} alt={`${g.title} test guide cover`} width={110} height={142} loading="lazy" />
                        </a>
                        <div>
                          <span className="lib-tag">{g.tag}</span>
                          <h3>{g.title} Test Guide</h3>
                          <p>{g.summary}</p>
                          <div className="lib-feature-foot">
                            <span className="lib-meta">
                              PDF · {g.pages} pages · {sizeLabel(g.sizeKb)}
                            </span>
                            <a className="lib-download" href={pdf} download onClick={() => trackDownload(g.title, 'download')}>
                              <IconDownload /> Download
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            )}

            {/* AP exam guides, grouped by subject area */}
            {apGroups.length > 0 && (
              <section id="ap-guides" className="lib-section" aria-labelledby="ap-guides-title">
                <div className="lib-head">
                  <h2 id="ap-guides-title">{apArea ? `AP ${apArea.label} Guides` : 'AP Exam Guides'}</h2>
                  <p>{apGuides.length} subjects · every unit explained, 10 practice questions each · free PDFs</p>
                </div>
                <div className="lib-ap-groups">
                  {apGroups.map((group) => (
                    <div key={group.id} id={group.id} className="lib-ap-group">
                      <h3>{group.label}</h3>
                      <ul>
                        {group.guides.map((g) => {
                          const page = AP_SUBJECT_BY_GUIDE[g.slug];
                          return page ? (
                          <li key={g.slug}>
                            <Link to={apSubjectPath(page.slug)} title={g.summary}>
                              <span>{g.title}</span>
                              <em className="lib-ap-page">Full guide</em>
                              <IconChevron />
                            </Link>
                          </li>
                          ) : (
                          <li key={g.slug}>
                            <a
                              href={apGuidePdf(g)}
                              target="_blank"
                              rel="noopener"
                              title={g.summary}
                              onClick={() => trackDownload(g.title, 'open')}
                            >
                              <span>{g.title}</span>
                              <IconChevron />
                            </a>
                          </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Guides & articles — static pages, prerendered for search and AI engines */}
            {searchedArticles.length > 0 && (
              <section id="articles" className="lib-section" aria-label="Articles">
                {(!exam || exam === 'Articles') && (
                  <div className="lib-chips" role="group" aria-label="Filter articles by topic">
                    {ARTICLE_TAGS.filter((t) => articleCount(t) > 0).map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`lib-chip${articleTag === t ? ' active' : ''}`}
                        aria-pressed={articleTag === t}
                        onClick={() => {
                          setArticleTag(t);
                          setShowAllArticles(false);
                        }}
                      >
                        {t} <span>{articleCount(t)}</span>
                      </button>
                    ))}
                  </div>
                )}
                <ol className="lib-article-list">
                  {shownArticles.map((a, i) => (
                    <li key={a.slug}>
                      <span className="lib-num" aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="lib-tag">{a.tag}</span>
                        <Link to={articlePath(a.slug)}>{a.title}</Link>
                      </div>
                      <span className="lib-arrow" aria-hidden="true">→</span>
                    </li>
                  ))}
                </ol>
                {articles.length > ARTICLES_SHOWN && (
                  <div className="lib-more">
                    <button type="button" className="lib-more-btn" onClick={() => setShowAllArticles((s) => !s)}>
                      {showAllArticles ? 'Show fewer' : `Show all ${articles.length} articles`}
                    </button>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>

        {/* From the Blog */}
        {filteredBlogs.length > 0 && (
          <section className="resources-section shell lib-blog" id="blog">
            <div className="section-header-row">
              <div className="section-title">
                <h2>Latest from the Blog</h2>
                <p>Expert tutoring strategies, exam updates, and academic planning advice</p>
              </div>
            </div>

            <div className="blog-grid">
              {filteredBlogs.map((post) => (
                <article key={post.title} className="blog-card">
                  <div className="blog-image-wrapper">
                    <img src={getBlogImage(post)} alt={post.title} loading="lazy" />
                  </div>
                  <div className="blog-content-area">
                    <span className="blog-post-tag">{post.tag}</span>
                    <h3>{post.title}</h3>
                    <p>{post.text}</p>
                    <div className="blog-card-footer">
                      <span>{post.date}</span>
                      <span className="divider" aria-hidden="true" />
                      <span>{post.read}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Tutoring CTA */}
        <section className="shell lib-cta-wrap">
          <div className="lib-cta">
            <div>
              <span className="lib-eyebrow">FREE · 1-ON-1 · ONLINE</span>
              <h2>Guides help. A plan built for you helps more.</h2>
              <p>
                Take a free practice test, then book a diagnostic session and get a study plan built around your target
                score and test date.
              </p>
            </div>
            <div className="lib-cta-actions">
              <a className="lib-btn-gold" href={CONSULT_PATH}>
                {PRIMARY_CTA} <span aria-hidden="true">→</span>
              </a>
              <a className="lib-btn-ghost" href="/free-test">
                Take a Free Practice Test
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter subscription */}
        <section className="resources-newsletter shell lib-newsletter" id="newsletter">
          <div className="newsletter-box">
            <div className="newsletter-main-row">
              <div className="newsletter-copy">
                <h2>Get new guides in your inbox</h2>
                <p>One short email when we publish a new guide or the test changes. Unsubscribe any time.</p>
              </div>
              <div className="newsletter-form-wrapper">
                {isSubscribed ? (
                  <div className="newsletter-success">✓ Thank you! You have successfully subscribed to our newsletter.</div>
                ) : (
                  <form className="newsletter-form" onSubmit={handleSubscribe}>
                    <input
                      type="email"
                      className="newsletter-input"
                      placeholder="Enter your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="newsletter-btn">
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
