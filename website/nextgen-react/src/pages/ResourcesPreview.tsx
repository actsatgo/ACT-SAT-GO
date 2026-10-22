// Design previews for the Resources page redesign. Open /resources?v=a, ?v=b or ?v=c.
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { fetchBlogs, type BlogPost } from '../admin/api';
import { AP_GUIDES, AP_GUIDE_CATEGORIES, apGuideCover, apGuidePdf, type ApGuideCategory } from '../data/apGuides';
import { TEST_GUIDES, testGuideCover, testGuidePdf } from '../data/testGuides';
import { ARTICLES, articlePath, formatArticleDate } from '../data/articles';
import { CONSULT_PATH, PRIMARY_CTA } from '../site';
import heroImg from '../assets/img/resouces-hero.webp';
import blogStudyHabitsImg from '../assets/img/6.webp';
import blogSatDiffImg from '../assets/img/7.webp';
import blogCollegeEssayImg from '../assets/img/8.webp';
import blogApWorthImg from '../assets/img/9.webp';
import '../resources-preview.css';

export type PreviewVariant = 'a' | 'b' | 'c';

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function IconArrow() {
  return <span aria-hidden="true">→</span>;
}

function IconDoc() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconTimer() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M9 2h6" />
    </svg>
  );
}

const sizeLabel = (kb: number) => (kb >= 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${kb} KB`);

const ARTICLE_TAGS = ['All', 'SAT', 'ACT', 'SAT & ACT', 'College Admissions', 'AP'];

function blogImage(post: BlogPost) {
  if (post.image) return post.image;
  const tag = post.tag.toLowerCase();
  if (tag.includes('tips') || tag.includes('habit')) return blogStudyHabitsImg;
  if (tag.includes('sat') || tag.includes('act')) return blogSatDiffImg;
  if (tag.includes('essay') || tag.includes('college')) return blogCollegeEssayImg;
  if (tag.includes('ap')) return blogApWorthImg;
  return blogStudyHabitsImg;
}

function useBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  useEffect(() => {
    let cancelled = false;
    fetchBlogs()
      .then((d) => !cancelled && setBlogs(d))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);
  return blogs;
}

const apCounts = () => {
  const c: Record<string, number> = {};
  AP_GUIDES.forEach((g) => (c[g.category] = (c[g.category] || 0) + 1));
  return c;
};

/* ── Shared building blocks ─────────────────────────────────────────── */

function GuideRow({ title, sub, cover, pdf, pages, sizeKb }: { title: string; sub: string; cover: string; pdf: string; pages: number; sizeKb: number }) {
  return (
    <li className="rp-guide-row">
      <a className="rp-guide-thumb" href={pdf} target="_blank" rel="noopener" aria-label={`Open ${title}`}>
        <img src={cover} alt="" loading="lazy" width={72} height={93} />
      </a>
      <div className="rp-guide-row-body">
        <span className="rp-tag">{sub}</span>
        <h3>{title}</h3>
        <p className="rp-meta">PDF · {pages} pages · {sizeLabel(sizeKb)}</p>
      </div>
      <a className="rp-icon-btn" href={pdf} download aria-label={`Download ${title}`}>
        <IconDownload />
      </a>
    </li>
  );
}

function ApLibrary({ initial = 8, layout = 'cards' }: { initial?: number; layout?: 'cards' | 'rows' }) {
  const [category, setCategory] = useState<ApGuideCategory | 'All'>('All');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const counts = useMemo(apCounts, []);
  const visible = AP_GUIDES.filter(
    (g) =>
      (category === 'All' || g.category === category) &&
      (!query || `${g.title} ${g.category} ${g.keywords.join(' ')}`.toLowerCase().includes(query.toLowerCase())),
  );
  const shown = showAll ? visible : visible.slice(0, initial);

  return (
    <>
      <div className="rp-toolbar">
        <label className="rp-search-sm">
          <IconSearch />
          <input type="search" placeholder="Find your AP subject, e.g. Biology, Calc BC, APUSH" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <div className="rp-chips">
          <button type="button" className={`rp-chip${category === 'All' ? ' active' : ''}`} onClick={() => setCategory('All')}>
            All <span>{AP_GUIDES.length}</span>
          </button>
          {AP_GUIDE_CATEGORIES.map((c) => (
            <button key={c} type="button" className={`rp-chip${category === c ? ' active' : ''}`} onClick={() => setCategory(c)}>
              {c} <span>{counts[c]}</span>
            </button>
          ))}
        </div>
      </div>

      {layout === 'cards' ? (
        <ul className="ap-guides-grid">
          {shown.map((g) => (
            <li key={g.slug} className="ap-guide-card">
              <a className="ap-guide-cover" href={apGuidePdf(g)} target="_blank" rel="noopener">
                <img src={apGuideCover(g)} alt={`${g.title} exam guide cover`} loading="lazy" width={360} height={466} />
              </a>
              <div className="ap-guide-body">
                <span className="ap-guide-tag">{g.category}</span>
                <h3>{g.title} Exam Guide</h3>
                <p className="ap-guide-meta">PDF · {g.pages} pages · {sizeLabel(g.sizeKb)}</p>
                <a className="ap-guide-download" href={apGuidePdf(g)} download>
                  <IconDownload /> Download free PDF
                </a>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="rp-guide-rows">
          {shown.map((g) => (
            <GuideRow key={g.slug} title={`${g.title} Exam Guide`} sub={g.category} cover={apGuideCover(g)} pdf={apGuidePdf(g)} pages={g.pages} sizeKb={g.sizeKb} />
          ))}
        </ul>
      )}

      {visible.length > initial && (
        <div className="rp-more">
          <button type="button" className="rp-more-btn" onClick={() => setShowAll((s) => !s)}>
            {showAll ? 'Show fewer' : `Show all ${visible.length} AP guides`}
          </button>
        </div>
      )}
    </>
  );
}

function ArticleCards({ initial = 6, style = 'cards' }: { initial?: number; style?: 'cards' | 'list' }) {
  const [tag, setTag] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const visible = ARTICLES.filter((a) => tag === 'All' || a.tag === tag);
  const shown = showAll ? visible : visible.slice(0, initial);
  const count = (t: string) => (t === 'All' ? ARTICLES.length : ARTICLES.filter((a) => a.tag === t).length);

  return (
    <>
      <div className="rp-chips rp-chips-tight">
        {ARTICLE_TAGS.map((t) => (
          <button key={t} type="button" className={`rp-chip${tag === t ? ' active' : ''}`} onClick={() => setTag(t)}>
            {t} <span>{count(t)}</span>
          </button>
        ))}
      </div>
      {style === 'cards' ? (
        <div className="blog-grid rp-article-grid">
          {shown.map((a) => (
            <article key={a.slug} className="blog-card">
              <div className="blog-content-area">
                <span className="blog-post-tag">{a.tag}</span>
                <h3>
                  <Link to={articlePath(a.slug)}>{a.title}</Link>
                </h3>
                <p>{a.description}</p>
                <div className="blog-card-footer">
                  <span>Updated {formatArticleDate(a.updated)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <ol className="rp-article-list">
          {shown.map((a, i) => (
            <li key={a.slug}>
              <span className="rp-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <span className="rp-tag">{a.tag}</span>
                <Link to={articlePath(a.slug)}>{a.title}</Link>
              </div>
              <IconArrow />
            </li>
          ))}
        </ol>
      )}
      {visible.length > initial && (
        <div className="rp-more">
          <button type="button" className="rp-more-btn" onClick={() => setShowAll((s) => !s)}>
            {showAll ? 'Show fewer' : `Show all ${visible.length} articles`}
          </button>
        </div>
      )}
    </>
  );
}

function BlogRow({ blogs, title = 'From the Blog' }: { blogs: BlogPost[]; title?: string }) {
  if (blogs.length === 0) return null;
  return (
    <section className="resources-section shell rp-tight" id="blog">
      <div className="section-header-row">
        <div className="section-title">
          <h2>{title}</h2>
          <p>Tutoring strategies, exam updates and academic planning advice</p>
        </div>
      </div>
      <div className="blog-grid">
        {blogs.slice(0, 4).map((post) => (
          <article key={post.title} className="blog-card">
            <div className="blog-image-wrapper">
              <img src={blogImage(post)} alt={post.title} loading="lazy" />
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
  );
}

function TutorCta() {
  return (
    <section className="shell rp-cta-wrap">
      <div className="rp-cta">
        <div>
          <span className="rp-eyebrow">FREE · 1-ON-1 · ONLINE</span>
          <h2>Guides help. A plan built for you helps more.</h2>
          <p>Take a free practice test, then book a diagnostic session and get a study plan built around your target score and test date.</p>
        </div>
        <div className="rp-cta-actions">
          <a className="rp-btn-gold" href={CONSULT_PATH}>
            {PRIMARY_CTA} <IconArrow />
          </a>
          <a className="rp-btn-ghost" href="/free-test">
            Take a Free Practice Test
          </a>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="resources-newsletter shell" id="newsletter">
      <div className="newsletter-box">
        <div className="newsletter-main-row">
          <div className="newsletter-copy">
            <h2>Get new guides in your inbox</h2>
            <p>One short email when we publish a new guide or the test changes. Unsubscribe any time.</p>
          </div>
          <div className="newsletter-form-wrapper">
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="newsletter-input" placeholder="Enter your email address" />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchBox({ placeholder = 'Search guides and articles, e.g. "good SAT score"' }: { placeholder?: string }) {
  return (
    <form className="resources-search-form" onSubmit={(e) => e.preventDefault()}>
      <div className="resources-search-wrapper">
        <input type="text" className="resources-search-input" placeholder={placeholder} />
        <button type="submit" className="resources-search-btn" aria-label="Search">
          <IconSearch />
        </button>
      </div>
    </form>
  );
}

const STATS_LINE = [
  { n: TEST_GUIDES.length, l: 'SAT & ACT guides' },
  { n: AP_GUIDES.length, l: 'AP exam guides' },
  { n: ARTICLES.length, l: 'expert articles' },
];

/* ── Option A: same look, better order ──────────────────────────────── */

function VariantA() {
  const blogs = useBlogs();
  const jumps = [
    { name: 'SAT & ACT Guides', sub: `${TEST_GUIDES.length} free PDFs`, href: '#sat-act', icon: <IconDoc /> },
    { name: 'AP Exam Guides', sub: `${AP_GUIDES.length} subjects`, href: '#ap', icon: <IconStack /> },
    { name: 'Articles', sub: `${ARTICLES.length} answers`, href: '#articles', icon: <IconChat /> },
    { name: 'Free Practice Test', sub: 'Full-length, scored', href: '/free-test', icon: <IconTimer /> },
  ];
  return (
    <>
      <section className="resources-hero section-dark">
        <span className="orb orb-gold" aria-hidden="true" />
        <div className="shell">
          <p className="resources-breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">›</span> <span>Resources</span>
          </p>
          <div className="resources-hero-grid">
            <div className="resources-hero-copy">
              <span className="eyebrow">FREE SAT, ACT &amp; AP RESOURCES</span>
              <h1>
                Knowledge that
                <br />
                <span>Empowers Progress</span>
              </h1>
              <p className="hero-text">Free test guides, study plans and straight answers from our tutors. No sign-up needed.</p>
              <SearchBox />
              <div className="resources-popular">
                <span>Popular:</span>
                {['Digital SAT', 'SAT vs ACT', 'Good SAT score', 'AP Calculus', 'Test dates'].map((p) => (
                  <button key={p} type="button" className="resources-pill-btn">
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="resources-hero-art">
              <img src={heroImg} alt="" className="resources-hero-photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section shell rp-jump-section">
        <div className="rp-jump-grid">
          {jumps.map((j) => (
            <a key={j.name} href={j.href} className="topic-card rp-jump-card">
              <div className="topic-icon-wrapper">{j.icon}</div>
              <div>
                <h3>{j.name}</h3>
                <p>{j.sub}</p>
              </div>
              <span className="rp-jump-arrow">
                <IconArrow />
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="resources-section shell ap-guides rp-tight" id="sat-act">
        <div className="section-header-row">
          <div className="section-title">
            <span className="ap-guides-eyebrow">START HERE · FREE PDF · NO SIGN-UP</span>
            <h2>SAT &amp; ACT Test Guides</h2>
            <p>Format and timing, every skill in plain English, a 12-week study plan and 10 practice questions.</p>
          </div>
        </div>
        <ul className="ap-guides-grid rp-start-grid">
          {TEST_GUIDES.map((g) => (
            <li key={g.slug} className="ap-guide-card">
              <a className="ap-guide-cover" href={testGuidePdf(g)} target="_blank" rel="noopener">
                <img src={testGuideCover(g)} alt={`${g.title} guide cover`} width={360} height={466} />
              </a>
              <div className="ap-guide-body">
                <span className="ap-guide-tag">{g.tag}</span>
                <h3>{g.title} Test Guide</h3>
                <p>{g.summary}</p>
                <p className="ap-guide-meta">PDF · {g.pages} pages · {sizeLabel(g.sizeKb)}</p>
                <a className="ap-guide-download" href={testGuidePdf(g)} download>
                  <IconDownload /> Download free PDF
                </a>
              </div>
            </li>
          ))}
          <li className="ap-guide-card rp-practice-card">
            <div className="rp-practice-top">
              <IconTimer />
              <span className="ap-guide-tag">FULL-LENGTH · SCORED</span>
              <h3>Free SAT Practice Test</h3>
              <p>Take a timed, full-length practice test online and get your score with a section-by-section breakdown.</p>
            </div>
            <div className="ap-guide-body">
              <a className="ap-guide-download rp-navy-btn" href="/free-test">
                Start the free test <IconArrow />
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className="resources-section shell ap-guides rp-tight" id="ap">
        <div className="section-header-row">
          <div className="section-title">
            <span className="ap-guides-eyebrow">FREE PDF · NO SIGN-UP</span>
            <h2>AP Exam Guides for Every Subject</h2>
            <p>{AP_GUIDES.length} guides: exam format, every unit in plain English and 10 practice questions each.</p>
          </div>
        </div>
        <ApLibrary initial={8} />
      </section>

      <section className="resources-section shell rp-tight" id="articles">
        <div className="section-header-row">
          <div className="section-title">
            <h2>Answers for Parents &amp; Students</h2>
            <p>Straight answers to the SAT, ACT and admissions questions we hear most</p>
          </div>
        </div>
        <ArticleCards initial={8} />
      </section>

      <BlogRow blogs={blogs} />
      <TutorCta />
      <Newsletter />
    </>
  );
}

/* ── Option B: one library with a sidebar ───────────────────────────── */

function VariantB() {
  const blogs = useBlogs();
  const counts = useMemo(apCounts, []);
  return (
    <>
      <section className="resources-hero section-dark rp-hero-compact">
        <span className="orb orb-gold" aria-hidden="true" />
        <div className="shell">
          <p className="resources-breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">›</span> <span>Resources</span>
          </p>
          <div className="rp-hero-center resources-hero-copy">
            <span className="eyebrow">RESOURCE LIBRARY</span>
            <h1>
              Every free guide, <span>in one place</span>
            </h1>
            <p className="hero-text">Test guides, study plans and expert answers for the SAT, ACT and AP exams.</p>
            <SearchBox />
            <div className="rp-stats">
              {STATS_LINE.map((s) => (
                <div key={s.l}>
                  <strong>{s.n}</strong>
                  <span>{s.l}</span>
                </div>
              ))}
              <div>
                <strong>$0</strong>
                <span>no sign-up</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shell rp-library">
        <aside className="rp-sidebar" aria-label="Library sections">
          <p className="rp-side-title">Library</p>
          <a className="rp-side-link active" href="#sat-act">
            SAT &amp; ACT guides <span>{TEST_GUIDES.length}</span>
          </a>
          <a className="rp-side-link" href="#ap">
            AP exam guides <span>{AP_GUIDES.length}</span>
          </a>
          <div className="rp-side-sub">
            {AP_GUIDE_CATEGORIES.map((c) => (
              <a key={c} href="#ap">
                {c} <span>{counts[c]}</span>
              </a>
            ))}
          </div>
          <a className="rp-side-link" href="#articles">
            Articles <span>{ARTICLES.length}</span>
          </a>
          <a className="rp-side-link" href="#blog">
            Blog <span>{blogs.length}</span>
          </a>
          <div className="rp-side-cta">
            <strong>Not sure where to start?</strong>
            <p>Take a free, scored SAT practice test.</p>
            <a href="/free-test">
              Start the test <IconArrow />
            </a>
          </div>
        </aside>

        <div className="rp-library-main">
          <section id="sat-act" className="rp-lib-section">
            <div className="rp-lib-head">
              <h2>SAT &amp; ACT Test Guides</h2>
              <p>Free PDFs · format, skills, 12-week plan, practice questions</p>
            </div>
            <div className="rp-feature-pair">
              {TEST_GUIDES.map((g) => (
                <div key={g.slug} className="rp-feature-card">
                  <img src={testGuideCover(g)} alt={`${g.title} guide cover`} width={120} height={155} />
                  <div>
                    <span className="rp-tag">{g.tag}</span>
                    <h3>{g.title} Test Guide</h3>
                    <p>{g.summary}</p>
                    <div className="rp-feature-foot">
                      <span className="rp-meta">PDF · {g.pages} pages · {sizeLabel(g.sizeKb)}</span>
                      <a className="rp-btn-gold rp-btn-sm" href={testGuidePdf(g)} download>
                        <IconDownload /> Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="ap" className="rp-lib-section">
            <div className="rp-lib-head">
              <h2>AP Exam Guides</h2>
              <p>{AP_GUIDES.length} subjects · every unit explained, 10 practice questions each</p>
            </div>
            <ApLibrary initial={10} layout="rows" />
          </section>

          <section id="articles" className="rp-lib-section">
            <div className="rp-lib-head">
              <h2>Articles</h2>
              <p>Straight answers to the questions parents and students ask most</p>
            </div>
            <ArticleCards initial={8} style="list" />
          </section>
        </div>
      </div>

      <BlogRow blogs={blogs} title="Latest from the Blog" />
      <TutorCta />
      <Newsletter />
    </>
  );
}

/* ── Option C: SAT-first, pick your exam ────────────────────────────── */

function VariantC() {
  const blogs = useBlogs();
  const sat = TEST_GUIDES[0];
  const act = TEST_GUIDES[1];
  const top = (tags: string[], n: number) => ARTICLES.filter((a) => tags.includes(a.tag)).slice(0, n);
  const paths = [
    {
      key: 'SAT',
      title: 'Digital SAT',
      blurb: 'Adaptive, 2 sections, 2 h 14 min. Our main focus.',
      guide: sat,
      articles: top(['SAT'], 3),
      program: '/sat',
      featured: true,
    },
    {
      key: 'ACT',
      title: 'Enhanced ACT',
      blurb: 'Shorter test, optional Science and Writing.',
      guide: act,
      articles: top(['ACT'], 3),
      program: '/act',
    },
    {
      key: 'AP',
      title: 'AP Exams',
      blurb: `${AP_GUIDES.length} subject guides, from Calculus to Art History.`,
      articles: top(['AP', 'College Admissions'], 3),
      program: '/ap',
    },
  ];
  const [open, setOpen] = useState<string>(AP_GUIDE_CATEGORIES[0]);

  return (
    <>
      <section className="resources-hero section-dark">
        <span className="orb orb-gold" aria-hidden="true" />
        <div className="shell">
          <p className="resources-breadcrumb">
            <a href="/">Home</a> <span aria-hidden="true">›</span> <span>Resources</span>
          </p>
          <div className="resources-hero-grid">
            <div className="resources-hero-copy">
              <span className="eyebrow">FREE RESOURCES</span>
              <h1>
                Everything you need to
                <br />
                <span>prep for the SAT</span>
              </h1>
              <p className="hero-text">Free guides and straight answers from our tutors, plus ACT and AP guides for every subject.</p>
              <SearchBox />
              <div className="rp-stats rp-stats-left">
                {STATS_LINE.map((s) => (
                  <div key={s.l}>
                    <strong>{s.n}</strong>
                    <span>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rp-hero-feature">
              <span className="rp-ribbon">MOST DOWNLOADED</span>
              <img src={testGuideCover(sat)} alt="Digital SAT guide cover" width={190} height={246} />
              <div>
                <h3>The Digital SAT: Complete Test Guide</h3>
                <p>{sat.pages} pages · both sections, adaptive scoring, 12-week plan, 10 hard practice questions.</p>
                <a className="rp-btn-gold" href={testGuidePdf(sat)} download>
                  <IconDownload /> Download free PDF
                </a>
                <span className="rp-small">No email or sign-up needed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section shell rp-tight">
        <div className="resources-section-heading with-ornament">
          <h2>Choose Your Exam</h2>
          <p>Each path has a free guide, the questions families ask most and tutoring if you want it</p>
        </div>
        <div className="rp-paths">
          {paths.map((p) => (
            <div key={p.key} className={`rp-path${p.featured ? ' featured' : ''}`}>
              <div className="rp-path-head">
                <span className="rp-path-badge">{p.key}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.blurb}</p>
                </div>
              </div>
              {p.guide ? (
                <a className="rp-path-guide" href={testGuidePdf(p.guide)} download>
                  <img src={testGuideCover(p.guide)} alt="" width={44} height={57} />
                  <span>
                    <strong>{p.guide.title} Test Guide</strong>
                    <small>Free PDF · {p.guide.pages} pages</small>
                  </span>
                  <IconDownload />
                </a>
              ) : (
                <a className="rp-path-guide" href="#ap">
                  <img src={apGuideCover(AP_GUIDES[0])} alt="" width={44} height={57} />
                  <span>
                    <strong>{AP_GUIDES.length} AP Exam Guides</strong>
                    <small>Free PDFs · browse by subject</small>
                  </span>
                  <IconArrow />
                </a>
              )}
              <ul className="rp-path-links">
                {p.articles.map((a) => (
                  <li key={a.slug}>
                    <Link to={articlePath(a.slug)}>{a.title}</Link>
                  </li>
                ))}
              </ul>
              <a className="rp-path-program" href={p.program}>
                {p.key} tutoring <IconArrow />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="resources-section shell rp-tight" id="articles">
        <div className="section-header-row">
          <div className="section-title">
            <h2>Most-Read Answers</h2>
            <p>Short, sourced answers to the questions we hear most</p>
          </div>
        </div>
        <ArticleCards initial={8} style="list" />
      </section>

      <section className="resources-section shell rp-tight" id="ap">
        <div className="section-header-row">
          <div className="section-title">
            <span className="ap-guides-eyebrow">FREE PDF · NO SIGN-UP</span>
            <h2>AP Exam Guides by Subject Area</h2>
            <p>{AP_GUIDES.length} guides. Open a subject area to see its guides.</p>
          </div>
        </div>
        <div className="rp-accordion">
          {AP_GUIDE_CATEGORIES.map((c) => {
            const list = AP_GUIDES.filter((g) => g.category === c);
            const isOpen = open === c;
            return (
              <div key={c} className={`rp-acc-item${isOpen ? ' open' : ''}`}>
                <button type="button" className="rp-acc-head" onClick={() => setOpen(isOpen ? '' : c)} aria-expanded={isOpen}>
                  <span>{c}</span>
                  <span className="rp-acc-count">{list.length} guides</span>
                  <span className="rp-acc-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <ul className="rp-guide-rows rp-acc-body">
                    {list.map((g) => (
                      <GuideRow key={g.slug} title={`${g.title}`} sub="Exam guide" cover={apGuideCover(g)} pdf={apGuidePdf(g)} pages={g.pages} sizeKb={g.sizeKb} />
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <BlogRow blogs={blogs} />
      <TutorCta />
      <Newsletter />
    </>
  );
}

export function ResourcesPreview({ variant }: { variant: PreviewVariant }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main className={`rp rp-${variant}`}>
        {variant === 'a' && <VariantA />}
        {variant === 'b' && <VariantB />}
        {variant === 'c' && <VariantC />}
      </main>
      <Footer />
    </>
  );
}
