import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes, preloadRoute } from './routes';

import { headTags as baseHeadTags, type PageMeta } from './seo';
import { schemaFor } from './schema';

export { PAGES, metaForPath, canonicalUrl } from './seo';

/** <head> tags for a prerendered page, including its JSON-LD structured data. */
export function headTags(meta: PageMeta): string {
  return baseHeadTags(meta, schemaFor(meta.path));
}
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
