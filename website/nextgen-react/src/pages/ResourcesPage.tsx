import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { SlidingPills } from '../components/SlidingPills';
import type { PillItem } from '../components/SlidingPills';
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

// AP subject areas, in the order and wording College Board uses on its course list.
const AP_GROUPS: { id: string; label: string; categories: ApGuideCategory[] }[] = [
  { id: 'ap-arts', label: 'Arts', categories: ['Arts'] },
  { id: 'ap-english', label: 'English', categories: ['English'] },
  { id: 'ap-history', label: 'History and Social Sciences', categories: ['History & Social Sciences'] },
  { id: 'ap-math', label: 'Math and Computer Science', categories: ['Math & Computer Science'] },
  { id: 'ap-sciences', label: 'Sciences', categories: ['Sciences'] },
  { id: 'ap-languages', label: 'World Languages and Cultures', categories: ['World Languages'] },
  { id: 'ap-capstone', label: 'Capstone and Career Kickstart', categories: ['Capstone', 'Career Kickstart'] },
];

const ARTICLE_TAGS = ['All', 'SAT', 'ACT', 'College Admissions', 'AP'];

/** Articles tagged "SAT & ACT" cover both tests, so they show under the SAT chip and the ACT chip. */
const hasArticleTag = (articleTag: string, chip: string) =>
  chip === 'All' || articleTag === chip || (articleTag === 'SAT & ACT' && (chip === 'SAT' || chip === 'ACT'));
const ARTICLES_SHOWN = 8;

const SECTION_IDS = ['sat-act-guides', 'ap-guides', 'articles', 'blog'];

const sizeLabel = (kb: number) => (kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`);

const apText = (g: ApGuide) => `${g.title} ${g.category} ${g.summary} ${g.keywords.join(' ')} AP guide`;

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [articleTag, setArticleTag] = useState('All');
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
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

  // Highlight the tab for the section (and AP subject group) currently on screen.
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries
          .filter((e) => e.isIntersecting)
          .forEach((e) => {
            if (SECTION_IDS.includes(e.target.id)) setActiveSection(e.target.id);
            else setActiveGroup(e.target.id);
          });
      },
      { rootMargin: '-160px 0px -60% 0px' },
    );
    [...SECTION_IDS, ...AP_GROUPS.map((g) => g.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [blogs.length, searchQuery]);

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
  const testGuides = TEST_GUIDES.filter((g) =>
    matches(`${g.title} ${g.tag} ${g.summary} ${g.keywords.join(' ')} test guide`, searchQuery),
  );
  const apGuides = AP_GUIDES.filter((g) => matches(apText(g), searchQuery));
  const apGroups = AP_GROUPS.map((group) => ({
    ...group,
    guides: apGuides.filter((g) => group.categories.includes(g.category)),
  })).filter((group) => group.guides.length > 0);

  const searchedArticles = ARTICLES.filter((a) => matches(`${a.title} ${a.tag} ${a.description}`, searchQuery));
  const articleCount = (tag: string) => searchedArticles.filter((a) => hasArticleTag(a.tag, tag)).length;
  const articles = searchedArticles.filter((a) => hasArticleTag(a.tag, articleTag));
  const shownArticles = showAllArticles ? articles : articles.slice(0, ARTICLES_SHOWN);

  const filteredBlogs = blogs.filter((post) =>
    matches(`${post.title} ${post.text} ${post.tag} ${post.tags.join(' ')}`, searchQuery),
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

  const libraryTabs: PillItem[] = [
    { id: 'sat-act-guides', label: 'SAT & ACT guides', count: testGuides.length },
    { id: 'ap-guides', label: 'AP exam guides', count: apGuides.length },
    { id: 'articles', label: 'Articles', count: searchedArticles.length },
    ...(filteredBlogs.length > 0 ? [{ id: 'blog', label: 'Blog', count: filteredBlogs.length }] : []),
  ];
  const apTabs: PillItem[] = apGroups.map((g) => ({ id: g.id, label: g.label, count: g.guides.length }));

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
          {/* Library tabs: a sliding pill bar that stays under the header */}
          <div className="lib-tabs">
            <div className="lib-tabs-inner">
              <div className="lib-tabs-row">
                <SlidingPills items={libraryTabs} active={activeSection} label="Resource library sections" />
                <a className="lib-tabs-cta" href="/free-test">
                  Free SAT practice test <span aria-hidden="true">→</span>
                </a>
              </div>
              {activeSection === 'ap-guides' && apTabs.length > 1 && (
                <SlidingPills items={apTabs} active={activeGroup} label="AP subject areas" small />
              )}
            </div>
          </div>

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
                <h3>No match found</h3>
                <p>We couldn't find any guides or articles matching "{searchQuery}".</p>
                <button className="clear-search-btn" onClick={clearSearch}>
                  Clear Search &amp; View All
                </button>
              </div>
            )}

            {/* SAT & ACT test guides */}
            {testGuides.length > 0 && (
              <section id="sat-act-guides" className="lib-section" aria-labelledby="sat-act-guides-title">
                <div className="lib-head">
                  <h2 id="sat-act-guides-title">SAT &amp; ACT Test Guides</h2>
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
                  <h2 id="ap-guides-title">AP Exam Guides</h2>
                  <p>{AP_GUIDES.length} subjects · every unit explained, 10 practice questions each · free PDFs</p>
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
