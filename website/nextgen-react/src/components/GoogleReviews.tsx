import { useEffect, useState } from 'react';
import { QUERY_API_BASE } from '../config';
import { SITE, STATS } from '../site';

// Google reviews, pulled from Google by the query-server and stored there so
// the admin can choose which ones show first. The list below is only used until
// the API answers (and for the prerendered HTML), so the section is never empty.

export type GoogleReview = {
  id: string;
  author: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  featured?: boolean;
};

type ReviewsResponse = {
  rating: number | null;
  total: number | null;
  mapsUrl: string;
  reviews: GoogleReview[];
};

const FALLBACK_REVIEWS: GoogleReview[] = [
  { id: 'f1', author: 'Sudiksha Aaloori', rating: 5, text: "Hi, my name is Sudiksha Aaloori, and I've been preparing for the SAT with ACT SAT Go. My experience has been really positive so far. The tutors are knowledgeable, patient, and explain concepts in a way that's easy to understand. The study plan is well-structured, and the practice sessions have helped me become more confident with the SAT format and question types. I've seen improvement in my understanding of concepts, and I feel much more prepared for my upcoming test. I would definitely recommend ACT SAT Go to any student looking for quality SAT preparation and individual support throughout their journey." },
  { id: 'f2', author: 'Tarun Prasad', rating: 5, text: 'My brother joined their course for SAT prep and we have seen a good improvement in scores. The tutors focus on the areas where the student is weak and give regular practice and feedback. The tests are similar to the real SAT, which helped build confidence. Overall, we are satisfied with the progress.' },
  { id: 'f3', author: "It's Dhwani", rating: 5, text: 'One of the best platforms for SAT & ACT preparation. The lessons are easy to understand and the practice tests are really helpful. I noticed a good improvement in my concepts and confidence. The mentors are supportive and always ready to help. Highly recommended for anyone preparing seriously for these exams ✨' },
  { id: 'f4', author: 'Jagriti Ratnani', rating: 5, text: 'ACT / SAT Go Tutoring was a great experience. The tutors are knowledgeable, patient, and truly invested in their students’ success. They break down difficult concepts clearly and teach effective test-taking strategies that really boost confidence. The practice was tailored to specific weaknesses, and I saw noticeable improvement in my score. I highly recommend ACT / SAT Go Tutoring to anyone looking to improve and feel prepared on test day!' },
  { id: 'f5', author: 'Simran Raghuwanshi', rating: 5, text: 'This organization provides excellent SAT test preparation with a very structured and outcome-oriented approach. The tutors clearly understand the Digital SAT format, question patterns, and scoring strategy, and they focus heavily on improving accuracy, timing, and test-taking skills. What I really appreciated was the personalized study plan—the student’s strengths and weak areas were identified early, and sessions were tailored accordingly.' },
  { id: 'f6', author: 'Tanveer Ali', rating: 5, text: 'My nephew had a great experience here. The team was super supportive and professional, they really focused on making sure he understood the concepts instead of memorizing stuff. Regular practice helped boost his confidence and his scores. Communication was clear and it genuinely felt like they cared about his progress.' },
  { id: 'f7', author: 'Sahil Gupta', rating: 5, text: 'I had a good experience with this tutoring company. The tutors are patient and explain things in a way that’s easy to understand. The sessions felt personalized, which really helped with learning. I noticed an improvement over time and felt more confident with the subjects.' },
  { id: 'f8', author: 'Ekta Rathode', rating: 5, text: 'Very supportive and knowledgeable tutor. Teaching style is clear and easy to understand.' },
];

const AVATAR_COLORS = ['#1c6fe0', '#14a38b', '#7c3aed', '#f5891f', '#e0457b', '#0e7490'];

// Seconds each card takes to scroll past; the whole loop scales with the count.
const SECONDS_PER_CARD = 7;

function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="gr-stars" aria-label={`${rating} out of 5 stars`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={i < full ? 'on' : undefined} aria-hidden="true">
          <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review, index, onExpand }: { review: GoogleReview; index: number; onExpand: (open: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const long = review.text.length > 220;
  const initial = review.author.replace(/[^A-Za-z]/g, '').charAt(0).toUpperCase() || 'G';

  return (
    <article className={`gr-card${open ? ' is-open' : ''}`}>
      <div className="gr-card-head">
        {review.authorPhoto ? (
          <img className="gr-avatar" src={review.authorPhoto} alt="" width={40} height={40} loading="lazy" referrerPolicy="no-referrer" />
        ) : (
          <span className="gr-avatar" style={{ background: AVATAR_COLORS[index % AVATAR_COLORS.length] }} aria-hidden="true">{initial}</span>
        )}
        <div className="gr-who">
          <strong>{review.author}</strong>
          <span className="gr-meta">
            <Stars rating={review.rating} />
            {review.relativeTime && <em>{review.relativeTime}</em>}
          </span>
        </div>
        <span className="gr-card-g"><GoogleG size={18} /></span>
      </div>
      <p className="gr-text">{review.text}</p>
      {long && (
        <button
          type="button"
          className="gr-more"
          onClick={() => {
            setOpen(!open);
            onExpand(!open);
          }}
        >
          {open ? 'Show less' : 'Read more'}
        </button>
      )}
    </article>
  );
}

export function GoogleReviews() {
  const [data, setData] = useState<ReviewsResponse>({ rating: null, total: null, mapsUrl: '', reviews: FALLBACK_REVIEWS });
  const [held, setHeld] = useState(0);

  useEffect(() => {
    let alive = true;
    fetch(`${QUERY_API_BASE}/api/google-reviews`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((json: ReviewsResponse) => {
        if (alive && Array.isArray(json.reviews) && json.reviews.length) setData(json);
      })
      .catch(() => { /* keep the built-in list */ });
    return () => { alive = false; };
  }, []);

  const reviews = data.reviews;
  const rating = data.rating ?? parseFloat(STATS.rating);
  const allReviewsUrl = data.mapsUrl || 'https://www.google.com/search?q=ACT+SAT+GO+reviews';
  const duration = `${Math.max(30, reviews.length * SECONDS_PER_CARD)}s`;

  return (
    <section className="google-reviews" id="reviews" aria-labelledby="google-reviews-title">
      <div className="shell gr-head">
        <div>
          <h2 id="google-reviews-title">What Families Say on Google</h2>
          <div className="gr-summary">
            <GoogleG size={26} />
            <strong>{rating.toFixed(1)}</strong>
            <Stars rating={rating} />
            <span>{data.total ? `Based on ${data.total} Google reviews` : 'Rated on Google'}</span>
          </div>
        </div>
        <div className="gr-actions">
          <a className="gr-link" href={allReviewsUrl} target="_blank" rel="noopener noreferrer">See all reviews <span aria-hidden="true">→</span></a>
          <a className="btn btn-primary gr-write" href={SITE.googleReviewUrl} target="_blank" rel="noopener noreferrer">Write a Review</a>
        </div>
      </div>

      <div className={`gr-marquee${held ? ' is-held' : ''}`}>
        <div className="gr-track" style={{ animationDuration: duration }}>
          {[0, 1].map((copy) =>
            reviews.map((r, i) => (
              <div className="gr-slot" key={`${copy}-${r.id}`} aria-hidden={copy === 1 ? true : undefined}>
                <ReviewCard review={r} index={i} onExpand={(open) => setHeld((n) => Math.max(0, n + (open ? 1 : -1)))} />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
