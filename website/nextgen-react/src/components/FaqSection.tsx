import { Link } from 'react-router-dom';
import type { FaqItem } from '../data/faq';

/** Accessible FAQ built on <details>; the whole list stays folded behind the
 *  heading until clicked. Content is still server-rendered for SEO. */
export function FaqSection({ items, title = 'FAQs' }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="faq shell" id="faq" aria-labelledby="faq-title">
      <details className="faq-toggle">
        <summary className="faq-toggle-head">
          <h2 id="faq-title">{title}</h2>
        </summary>
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
      </details>
    </section>
  );
}
