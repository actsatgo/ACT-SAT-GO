import { Link } from 'react-router-dom';
import { Brand } from './Brand';
import { WHATSAPP_HREF } from './WhatsAppButton';
import { SITE, PRIMARY_CTA, CONSULT_PATH } from '../site';
import { trackContactClick } from '../lib/analytics';

/** Site-wide footer — one copy, so contact details and links never drift apart. */
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top shell">
        <div className="footer-brand-col">
          <Brand />
          <p className="footer-desc">
            Live 1-on-1 online tutoring for the Digital SAT, the enhanced ACT and AP exams, plus K-12 academics —
            with a diagnostic before the first lesson and progress reports for parents.
          </p>
          <div className="footer-social">
            <a href={SITE.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href={SITE.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#04111f" /></svg>
            </a>
            <a href={SITE.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href={SITE.googleReviewUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer-col" aria-label="Programs">
          <h2 className="footer-heading">Programs</h2>
          <ul className="footer-links">
            <li><Link to="/sat">Digital SAT Tutoring</Link></li>
            <li><Link to="/act">ACT Tutoring</Link></li>
            <li><Link to="/ap">AP Tutoring</Link></li>
            <li><Link to="/k-12-tutoring">K-12 Tutoring</Link></li>
            <li><Link to="/future-programs">IB, IGCSE &amp; A Levels</Link></li>
            <li><Link to="/free-test">Free Practice Test</Link></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Company">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-links">
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/resources">Resources &amp; Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to={CONSULT_PATH}>Contact</Link></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h2 className="footer-heading">Get In Touch</h2>
          <ul className="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              <a href={SITE.phoneHref} onClick={() => trackContactClick('phone')}>{SITE.phoneDisplay}</a>
            </li>
            <li>
              <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16.01 3C9.38 3 4 8.38 4 15.01c0 2.35.65 4.55 1.79 6.43L3 29l7.76-2.71a12.9 12.9 0 0 0 5.25 1.12h.01c6.63 0 12-5.38 12-12.01C28.02 8.38 22.65 3 16.01 3z" /></svg>
              <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" onClick={() => trackContactClick('whatsapp')}>Text us on WhatsApp</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <a href={`mailto:${SITE.email}`} onClick={() => trackContactClick('email')}>{SITE.email}</a>
            </li>
          </ul>
          <Link className="btn btn-primary footer-cta" to={CONSULT_PATH}>{PRIMARY_CTA}</Link>
        </div>
      </div>

      <div className="footer-bottom shell">
        <p>&copy; {new Date().getFullYear()} ACT SAT GO. All rights reserved.</p>
        <nav className="footer-legal" aria-label="Legal">
          <Link to="/privacy-policy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <Link to="/refund-policy">Refunds &amp; Cancellation</Link>
          <Link to="/child-safety">Child Safety</Link>
        </nav>
      </div>
    </footer>
  );
}
