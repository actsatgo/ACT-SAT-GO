import { Link } from 'react-router-dom';
import { IconTarget, IconOpenBookSquare, IconRocket } from './Icons';
import img1 from '../assets/img/1.webp';
import img2 from '../assets/img/2.webp';
import img3 from '../assets/img/3.webp';

const ORBIT_CHIPS = ['Personalized guidance', 'Proven strategies', 'Stronger results'];

function OrbitCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5 10 17 19 7" />
    </svg>
  );
}

function OrbitTrendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

function HubBadgeCapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3 1 8.5 12 14l9-4.36V15h2V8.5L12 3Z" />
      <path d="M5 11.18V16c0 1.86 3.13 3.5 7 3.5s7-1.64 7-3.5v-4.82l-7 3.4-7-3.4Z" />
    </svg>
  );
}

const CARDS = [
  {
    key: 'test-prep',
    icon: <IconTarget />,
    accent: 'linear-gradient(135deg, #f5b93a, #e08a1e)',
    solid: '#e08a1e',
    title: <>Test<br />Preparation</>,
    text: 'Ace standardized tests with proven strategies, expert guidance, and personalized study plans.',
    photo: img1,
    pills: [
      { label: 'SAT', to: '/sat' },
      { label: 'ACT', to: '/act' },
      { label: 'AP', to: '/ap' },
    ],
    to: '/sat',
  },
  {
    key: 'school',
    icon: <IconOpenBookSquare />,
    accent: 'linear-gradient(135deg, #2f7bd1, #14355f)',
    solid: '#2f7bd1',
    title: <>School<br />Academics</>,
    text: 'Build strong concepts, improve grades, and develop skills for academic excellence at every level.',
    photo: img2,
    pills: [
      { label: 'Elementary', to: '/k-12-tutoring#elementary' },
      { label: 'Middle School', to: '/k-12-tutoring#middle' },
      { label: 'High School', to: '/k-12-tutoring#high' },
    ],
    to: '/k-12-tutoring',
  },
  {
    key: 'future',
    icon: <IconRocket />,
    accent: 'linear-gradient(135deg, #8b5cf6, #5b21b6)',
    solid: '#8b5cf6',
    title: <>Future<br />Programs</>,
    text: "Expanding horizons with international curricula and language courses for tomorrow's leaders.",
    photo: img3,
    pills: [
      { label: 'Future Programs', to: '/future-programs' },
    ],
    to: '/future-programs',
  },
];

export function ProgramsHub() {
  return (
    <section className="hub section-dark" id="programs" aria-label="Programs overview">
      <div className="shell">
        <div className="hub-header">
          <div>
            <h2>
              Your Path to <span>Success</span>
            </h2>
            <p className="hub-subtitle">
              Expert-led programs designed to help students excel at every stage of their academic journey.
            </p>
          </div>
          {/* The three promises circle the cap; hover pauses them so they can be read */}
          <div className="hub-orbit">
            <span className="hub-orbit-ring" aria-hidden="true" />
            <span className="hub-orbit-ring hub-orbit-ring-inner" aria-hidden="true" />
            <span className="hub-orbit-core" aria-hidden="true"><HubBadgeCapIcon /></span>
            <ul className="hub-orbit-carrier">
              {ORBIT_CHIPS.map((c, i) => (
                <li key={c} className={`hub-orbit-arm hub-orbit-arm-${i + 1}`}>
                  <span className="hub-orbit-upright">
                    <span className={`hub-orbit-chip${i === 2 ? ' is-gold' : ''}`}>
                      <i aria-hidden="true">{i === 2 ? <OrbitTrendIcon /> : <OrbitCheckIcon />}</i>
                      {c}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hub-grid">
          {CARDS.map((c) => (
            <article key={c.key} className="hub-card" style={{ ['--hub-accent' as string]: c.accent, ['--hub-solid' as string]: c.solid }}>
              <span className="hub-icon" aria-hidden="true">{c.icon}</span>
              <h3>{c.title}</h3>
              <span className="hub-underline" aria-hidden="true" />
              <p>{c.text}</p>

              {c.pills ? (
                <div className="hub-pills-row">
                  <span className="hub-explore-label">Explore <span aria-hidden="true">-</span></span>
                  <div className="hub-pills">
                    {c.pills.map((p) => (
                      <Link key={p.label} to={p.to} className="hub-pill">{p.label}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link to={c.to} className="hub-explore-label">Explore <span aria-hidden="true">-</span></Link>
              )}

              <span
                className="hub-photo"
                aria-hidden="true"
                style={{ backgroundImage: `url(${c.photo})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
