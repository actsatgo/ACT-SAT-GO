import { Link, useLocation } from 'react-router-dom';
import { PRIMARY_CTA, CONSULT_PATH } from '../site';

const HIDDEN_ON = ['/consultation', '/free-test', '/careers'];

/** Mobile-only bottom bar so the primary action is always one tap away. */
export function StickyCta() {
  const { pathname } = useLocation();
  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;
  return (
    <div className="sticky-cta" role="region" aria-label="Book a lesson">
      <Link className="btn btn-primary sticky-cta-btn" to={CONSULT_PATH}>
        {PRIMARY_CTA}
      </Link>
    </div>
  );
}
