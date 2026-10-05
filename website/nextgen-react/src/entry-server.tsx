import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes, preloadRoute } from './routes';

export { PAGES, metaForPath, headTags, canonicalUrl } from './seo';
export { SITE } from './site';

/** Renders one route to static HTML (used by scripts/prerender.mjs at build time). */
export async function render(url: string): Promise<string> {
  await preloadRoute(url);
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  );
}
