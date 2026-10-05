import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PRIMARY_CTA, CONSULT_PATH } from '../site';

export function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="policy-page">
        <div className="shell policy-shell">
          <h1>We couldn’t find that page</h1>
          <p>The link may be old or mistyped. These are the most useful places to go next:</p>
          <ul className="notfound-links">
            <li><Link to="/sat">Digital SAT tutoring</Link></li>
            <li><Link to="/act">ACT tutoring</Link></li>
            <li><Link to="/ap">AP tutoring</Link></li>
            <li><Link to="/free-test">Free practice test</Link></li>
            <li><Link to="/resources">Guides &amp; resources</Link></li>
          </ul>
          <p><Link className="btn btn-primary" to={CONSULT_PATH}>{PRIMARY_CTA}</Link></p>
        </div>
      </main>
      <Footer />
    </>
  );
}
