import { useState } from 'react';
import { SITE } from '../site';

type Testimonial = { name: string; quote: string; details?: string; videoId?: string };

const VIDEO_TESTIMONIALS: Testimonial[] = [
  { name: 'Abigail', videoId: 'y6Yio5nkXV4', quote: 'Real talk on the ACT SAT GO experience and results.', details: 'ACT Prep Student' },
  { name: 'Sudiksha', videoId: 'Jl9fY1Y480s', quote: 'The impact of personalized mentoring and roadmap clarity.', details: 'Parent of Student' },
  { name: 'Kyla', videoId: 'vnaWzyAuTbU', quote: 'How personalized mentoring made the difference for me.', details: 'Academic Mentoring Student' },
  { name: 'Manya', videoId: 'Lq0C6uOjA8E', quote: 'My honest experience preparing with ACT SAT GO.', details: 'Test Prep Student' },
  { name: 'Dhwani', videoId: '25-pOE_ujqc', quote: 'How I prepped and boosted my score with ACT SAT GO.', details: 'SAT Prep Student' },
  { name: 'Mary', videoId: 'YNSQmcPqfCc', quote: 'My honest review after working with ACT SAT GO.', details: 'SAT Prep Student' },
];

// Seconds each card takes to scroll past; the whole loop scales with the count.
const SECONDS_PER_CARD = 6;

function VideoTestimonial({ videoId, name, onPlay }: { videoId: string; name: string; onPlay: (playing: boolean) => void }) {
  const [playing, setPlaying] = useState(false);

  const toggle = (on: boolean) => {
    setPlaying(on);
    onPlay(on);
  };

  return (
    <div className="video-wrapper">
      {playing ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=1`}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <button type="button" className="vt-close" onClick={() => toggle(false)} aria-label={`Close video: ${name}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
        </>
      ) : (
        <button
          type="button"
          className="video-thumb"
          style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)` }}
          onClick={() => toggle(true)}
          aria-label={`Play video: ${name}`}
        >
          <span className="video-play-btn" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7Z" /></svg>
          </span>
        </button>
      )}
    </div>
  );
}

// Same endless strip as the Google reviews above: two copies of the list slide
// left forever. Hover pauses it, and it stays still while a video is playing.
export function Testimonials() {
  const [held, setHeld] = useState(0);
  const list = VIDEO_TESTIMONIALS;
  const duration = `${Math.max(30, list.length * SECONDS_PER_CARD)}s`;

  return (
    <section className="testimonials section-dark" id="testimonials" aria-labelledby="testimonials-title">
      <div className="shell vt-head">
        <div>
          <h2 id="testimonials-title">Student &amp; Parent Testimonials</h2>
          <p>Hear it straight from the families we work with.</p>
        </div>
        <a className="vt-link" href={SITE.socials.youtube} target="_blank" rel="noopener noreferrer">
          Watch all on YouTube <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className={`vt-marquee${held ? ' is-held' : ''}`}>
        <div className="vt-track" style={{ animationDuration: duration }}>
          {[0, 1].map((copy) =>
            list.map((t) => (
              <div className="vt-slot" key={`${copy}-${t.name}`} aria-hidden={copy === 1 ? true : undefined}>
                <article className="vt-card">
                  {t.videoId && (
                    <VideoTestimonial
                      videoId={t.videoId}
                      name={t.name}
                      onPlay={(on) => setHeld((n) => Math.max(0, n + (on ? 1 : -1)))}
                    />
                  )}
                  <h3 className="vt-name">{t.name}</h3>
                  {t.details && <p className="vt-details">{t.details}</p>}
                  <p className="vt-quote">{t.quote}</p>
                </article>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
