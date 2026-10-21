import { Link } from 'react-router-dom';

export function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link className="brand" to="/" aria-label="ACT SAT GO home" onClick={onNavigate}>
      {/* Full-colour logo on a white badge, so it reads on the navy header and footer */}
      <img className="brand-logo-img" src="/brand-logo.png" alt="ACT SAT GO: Prepare, Perform, Achieve" width={540} height={140} />
    </Link>
  );
}
