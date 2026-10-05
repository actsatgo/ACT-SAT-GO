import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes, preloadRoute } from './routes';
import { initAnalytics } from './lib/analytics';
import './styles.css';
import './program.css';
import './future-programs.css';
import './k12-tutoring.css';
import './about-us.css';
import './resources.css';
import './admin.css';
import './careers.css';
import './free-test.css';
import './growth.css';

initAnalytics();

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

// Pages are prerendered to static HTML at build time; load this route's JS
// chunk first so hydration renders synchronously and reuses that markup.
preloadRoute(window.location.pathname).finally(() => {
  if (container.firstElementChild) hydrateRoot(container, app);
  else createRoot(container).render(app);
});
