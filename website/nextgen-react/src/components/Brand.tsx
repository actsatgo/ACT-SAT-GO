import { Link } from 'react-router-dom';

export function Brand({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link className="brand" to="/" aria-label="ACT SAT GO home" onClick={onNavigate}>
      {/* White-on-transparent version of the logo, for the navy header and footer */}
      <img className="brand-logo-img" src="/brand-logo-dark.png" alt="ACT SAT GO: Prepare, Perform, Achieve" width={539} height={140} />
    </Link>
  );
}
