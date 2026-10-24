import { useEffect, useRef, useState } from 'react';

type Testimonial = { name: string; quote: string; details?: string; videoId?: string };

const VIDEO_TESTIMONIALS: Testimonial[] = [
  { name: 'Abigail', videoId: 'y6Yio5nkXV4', quote: 'Real talk on the ACT SAT GO experience and results.', details: 'ACT Prep Student' },
  { name: 'Sudiksha', videoId: 'Jl9fY1Y480s', quote: 'The impact of personalized mentoring and roadmap clarity.', details: 'Parent of Student' },
  { name: 'Kyla', videoId: 'vnaWzyAuTbU', quote: 'How personalized mentoring made the difference for me.', details: 'Academic Mentoring Student' },
  { name: 'Manya', videoId: 'Lq0C6uOjA8E', quote: 'My honest experience preparing with ACT SAT GO.', details: 'Test Prep Student' },
  { name: 'Dhwani', videoId: '25-pOE_ujqc', quote: 'How I prepped and boosted my score with ACT SAT GO.', details: 'SAT Prep Student' },
  { name: 'Mary', videoId: 'YNSQmcPqfCc', quote: 'My honest review after working with ACT SAT GO.', details: 'SAT Prep Student' },
];

const AUTO_ADVANCE_MS = 4000;

function VideoTestimonial({ videoId, name }: { videoId: string; name: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-wrapper">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&autoplay=1`}
          title={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <button
          type="button"
          className="video-thumb"
          style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)` }}
          onClick={() => setPlaying(true)}
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

export function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const list = VIDEO_TESTIMONIALS;

  const scrollToIndex = (i: number) => {
    const clamped = Math.max(0, Math.min(list.length - 1, i));
    const el = trackRef.current;
    const card = el?.children[clamped] as HTMLElement | undefined;
    // Scroll the track only, so the page itself never jumps.
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
    setActive(clamped);
  };

  // Auto-advance every few seconds while the section is on screen. Pauses on
  // hover or keyboard focus, stops once a video is playing, and loops back to
  // the start after the last full view.
  const [paused, setPaused] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.35 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !onScreen) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el || el.querySelector('iframe')) return;
      const first = el.children[0] as HTMLElement | undefined;
      const perView = first ? Math.max(1, Math.round(el.clientWidth / first.offsetWidth)) : 1;
      const lastStart = Math.max(0, list.length - perView);
      scrollToIndex(active >= lastStart ? 0 : active + 1);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  });

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    let closest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - el.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  };

  return (
    <section className="testimonials section-dark" id="testimonials" ref={sectionRef}>
      <div className="shell">
        <div className="section-heading inverse">
          <h2>Student &amp; Parent Testimonials</h2>
        </div>

        <div
          className="testimonial-carousel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <button
            className="testimonial-arrow prev"
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Previous testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>

          <div className="testimonial-slider" ref={trackRef} onScroll={handleScroll}>
            {list.map((t) => (
              <article key={t.name} className="video-card">
                {t.videoId && <VideoTestimonial videoId={t.videoId} name={t.name} />}
                <h3 className="testimonial-name">{t.name}</h3>
                {t.details && <p className="testimonial-details">{t.details}</p>}
                <p className="testimonial-quote">{t.quote}</p>
              </article>
            ))}
          </div>

          <button
            className="testimonial-arrow next"
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === list.length - 1}
            aria-label="Next testimonial"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>

        <div className="testimonial-dots" role="tablist" aria-label="Testimonial slides">
          {list.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to testimonial ${i + 1}`}
              className={i === active ? 'active' : undefined}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
