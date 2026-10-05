import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { POLICIES } from '../data/policies';

const ORDER: [string, string][] = [
  ['privacy-policy', 'Privacy'],
  ['terms', 'Terms'],
  ['refund-policy', 'Refunds & Cancellation'],
  ['child-safety', 'Child Safety'],
];

export function PolicyPage({ slug }: { slug: string }) {
  const policy = POLICIES[slug];
  return (
    <>
      <Header />
      <main className="policy-page">
        <article className="shell policy-shell">
          <nav className="policy-tabs" aria-label="Policies">
            {ORDER.map(([s, label]) => (
              <Link key={s} to={`/${s}`} aria-current={s === slug ? 'page' : undefined}>{label}</Link>
            ))}
          </nav>
          <h1>{policy.title}</h1>
          <p className="policy-updated">Last updated: {policy.updated}</p>
          <p className="policy-intro">{policy.intro}</p>
          {policy.sections.map((sec) => (
            <section key={sec.heading}>
              <h2>{sec.heading}</h2>
              {sec.body.map((para) => <p key={para}>{para}</p>)}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
