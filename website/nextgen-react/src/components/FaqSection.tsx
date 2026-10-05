import { Link } from 'react-router-dom';
import type { FaqItem } from '../data/faq';

/** Accessible FAQ built on <details>; content is server-rendered for SEO. */
export function FaqSection({ items, title = 'Questions parents ask' }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="faq shell" id="faq" aria-labelledby="faq-title">
      <div className="section-heading center">
        <h2 id="faq-title">{title}</h2>
      </div>
      <div className="faq-list">
        {items.map((f) => (
          <details key={f.q} className="faq-item">
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
      <p className="faq-more">
        Still have a question? <Link to="/consultation">Talk to an advisor</Link>.
      </p>
    </section>
  );
}
