import { Suspense, useEffect, type ComponentType } from 'react';
import { Navigate, matchRoutes, useLocation, useRoutes, type RouteObject } from 'react-router-dom';
import { metaForPath, canonicalUrl } from './seo';
import { trackPageView, trackPixelNavigation } from './lib/analytics';
import { WhatsAppButton } from './components/WhatsAppButton';
import { StickyCta } from './components/StickyCta';

// Route table shared by the browser entry (main.tsx) and the prerenderer
// (entry-server.tsx). Each page is its own JS chunk; `preloadRoute` resolves
// the chunk for a URL *before* hydrating or prerendering, so the first render
// is synchronous and matches the prerendered HTML exactly.

type Loaded = ComponentType<Record<string, never>>;

interface LazyPage {
  (): JSX.Element;
  preload: () => Promise<void>;
}

function page(loader: () => Promise<Loaded>): LazyPage {
  let Comp: Loaded | null = null;
  let pending: Promise<void> | null = null;
  const preload = () =>
    (pending ??= loader().then((c) => {
      Comp = c;
    }));
  const Page = (() => {
    // Suspends (shows the previous screen) until the chunk has loaded.
    if (!Comp) throw preload();
    return <Comp />;
  }) as LazyPage;
  Page.preload = preload;
  return Page;
}

const program = (key: 'SAT_PAGE' | 'ACT_PAGE' | 'AP_PAGE') =>
  page(() =>
    Promise.all([import('./pages/ProgramPage'), import('./data/programs')]).then(([m, d]) => () => (
      <m.ProgramPage data={d[key]} />
    )),
  );

const policy = (slug: string) =>
  page(() => import('./pages/PolicyPage').then((m) => () => <m.PolicyPage slug={slug} />));

const Home = page(() => import('./App').then((m) => m.default));
const Sat = program('SAT_PAGE');
const Act = program('ACT_PAGE');
const Ap = program('AP_PAGE');
const FuturePrograms = page(() => import('./pages/FutureProgramsPage').then((m) => m.FutureProgramsPage));
const K12 = page(() => import('./pages/K12TutoringPage').then((m) => m.K12TutoringPage));
const About = page(() => import('./pages/AboutUsPage').then((m) => m.AboutUsPage));
const Resources = page(() => import('./pages/ResourcesPage').then((m) => m.ResourcesPage));
const Enquiry = page(() => import('./pages/EnquiryPage').then((m) => m.EnquiryPage));
const FreeTest = page(() => import('./pages/FreeTestPage').then((m) => m.FreeTestPage));
const Careers = page(() => import('./pages/CareersPage').then((m) => m.CareersPage));
const AdminLogin = page(() => import('./pages/AdminLogin').then((m) => m.AdminLogin));
const AdminLeads = page(() => import('./pages/AdminLeads').then((m) => m.AdminLeads));
const NotFound = page(() => import('./pages/NotFoundPage').then((m) => m.NotFoundPage));

type AppRoute = RouteObject & { preload?: () => Promise<void> };

const r = (path: string, P: LazyPage): AppRoute => ({ path, element: <P />, preload: P.preload });

export const ROUTES: AppRoute[] = [
  r('/', Home),
  r('/sat', Sat),
  r('/act', Act),
  r('/ap', Ap),
  r('/future-programs', FuturePrograms),
  r('/k-12-tutoring', K12),
  r('/about-us', About),
  r('/resources', Resources),
  r('/consultation', Enquiry),
  r('/free-test', FreeTest),
  r('/free-test/:testId', FreeTest),
  r('/careers', Careers),
  r('/privacy-policy', policy('privacy-policy')),
  r('/terms', policy('terms')),
  r('/refund-policy', policy('refund-policy')),
  r('/child-safety', policy('child-safety')),
  r('/admin/login', AdminLogin),
  r('/admin/leads', AdminLeads),
  // Legacy paths — also 301-redirected at the edge in vercel.json.
  { path: '/enquiry', element: <Navigate to="/consultation" replace /> },
  { path: '/take-free-test', element: <Navigate to="/free-test" replace /> },
  { path: '/about', element: <Navigate to="/about-us" replace /> },
  { path: '/admin', element: <Navigate to="/admin/leads" replace /> },
  r('*', NotFound),
];

/** Loads the JS chunk(s) for `url` so the next render doesn't suspend. */
export function preloadRoute(url: string): Promise<unknown> {
  const matches = matchRoutes(ROUTES, url) ?? [];
  return Promise.all(matches.map((m) => (m.route as AppRoute).preload?.()));
}

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Keeps <title>, description, canonical and OG tags in sync on navigation. */
function RouteMeta() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const meta = metaForPath(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl(meta.path));
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl(meta.path));
    trackPageView(pathname, meta.title);
    trackPixelNavigation(pathname);
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export function AppRoutes() {
  const element = useRoutes(ROUTES);
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');
  return (
    <>
      <RouteMeta />
      <Suspense fallback={null}>{element}</Suspense>
      {!isAdmin && <StickyCta />}
      {!isAdmin && <WhatsAppButton />}
    </>
  );
}
