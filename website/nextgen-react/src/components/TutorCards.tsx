import { TUTORS } from '../data/tutors';

/** "Meet your tutors" — renders only once real profiles exist in data/tutors.ts. */
export function TutorCards({ exam }: { exam?: string }) {
  const list = exam ? TUTORS.filter((t) => t.exams.includes(exam)) : TUTORS;
  if (list.length === 0) return null;
  return (
    <section className="tutors shell" id="tutors" aria-labelledby="tutors-title">
      <div className="section-heading center">
        <h2 id="tutors-title">Meet your tutors</h2>
        <p>Every tutor is selected, trained and reviewed by our academic team.</p>
      </div>
      <div className="tutor-grid">
        {list.map((t) => (
          <article key={t.name} className="tutor-card">
            {t.photo ? (
              <img src={t.photo} alt={`${t.name}, ${t.role}`} width={96} height={96} loading="lazy" />
            ) : (
              <span className="tutor-initial" aria-hidden="true">{t.name[0]}</span>
            )}
            <h3>{t.name}</h3>
            <p className="tutor-role">{t.role}</p>
            <ul>
              <li>{t.education}</li>
              {t.scores && <li>{t.scores}</li>}
              <li>{t.experience}</li>
            </ul>
            {t.specialty && <p className="tutor-specialty">{t.specialty}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
