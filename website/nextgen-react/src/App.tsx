import { useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Universities } from './components/Universities';
import { ProgramsHub } from './components/ProgramsHub';
import { CountUp } from './components/CountUp';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ACT_PAGE } from './data/programs';
import heroImg from './assets/img/hero-y1.webp';
import { QUERY_API_BASE } from './config';
import { trackLead, leadSource, trackContactClick } from './lib/analytics';
import { SITE, STATS, STUDENT_COUNTRIES, PRIMARY_CTA, SECONDARY_CTA } from './site';
import { PainPoints } from './components/PainPoints';
import { HowItWorks } from './components/HowItWorks';
import { FaqSection } from './components/FaqSection';
import { TutorCards } from './components/TutorCards';
import { SuccessStories } from './components/SuccessStories';
import { WhyFamilies } from './components/WhyFamilies';
import { HOME_FAQ } from './data/faq';

import { IconGlobe, IconUser, IconUsers, IconHeartCheck, IconGraduationCap, IconChart, IconDocument, IconClipboardCheck, IconLink, IconRoute, IconMonitor, IconFlag, IconNetwork, IconTrophy } from './components/Icons';


export default function App() {
  useScrollReveal();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', exam: 'General', message: '' });
  const [phoneCountryCode, setPhoneCountryCode] = useState('+1');
  const [phoneLocalNumber, setPhoneLocalNumber] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const openConsultationModal = (defaultExam = 'General') => {
    setFormData({ name: '', email: '', phone: '', exam: defaultExam, message: '' });
    setPhoneCountryCode('+1');
    setPhoneLocalNumber('');
    setSubmitStatus('idle');
    setIsModalOpen(true);
    document.body.classList.add('modal-open-body');
  };

  const closeConsultationModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open-body');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) return;

    setSubmitStatus('submitting');
    try {
      const response = await fetch(`${QUERY_API_BASE}/api/queries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: `${phoneCountryCode} ${phoneLocalNumber}`.trim(),
          type: 'Consultation',
          source: leadSource('Website · Home modal'),
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackLead('home_modal', { exam: formData.exam });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="hero section-dark" id="home">
          <span className="orb orb-gold" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Raise your teen&rsquo;s SAT score with <span>1&#8209;on&#8209;1 expert tutoring</span></h1>
              <div className="hero-actions-new">
                <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); openConsultationModal('General'); }}>
                  {PRIMARY_CTA} <span aria-hidden="true">→</span>
                </a>
                <Link className="btn btn-secondary" to="/free-test" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  {SECONDARY_CTA}
                </Link>
              </div>
              <p className="hero-micro">Free and no obligation. Live online, scheduled around your time zone.</p>
            </div>

            <div className="hero-art">
              {/* Background artwork decorations */}
              <div className="hero-decorations" aria-hidden="true">
                {/* Dotted globe wireframe background */}
                <svg className="globe-bg" viewBox="0 0 400 400" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.2">
                  <circle cx="200" cy="200" r="160" />
                  <path d="M200,40 A200,160 0 0,0 200,360" />
                  <path d="M200,40 A200,160 0 0,1 200,360" />
                  <path d="M200,40 A80,160 0 0,0 200,360" />
                  <path d="M200,40 A80,160 0 0,1 200,360" />
                  <line x1="200" y1="40" x2="200" y2="360" />
                  <line x1="40" y1="200" x2="360" y2="200" />
                  <path d="M70,100 Q200,140 330,100" />
                  <path d="M70,300 Q200,260 330,300" />
                </svg>
              </div>

              <img src={heroImg} alt="Student in a live 1-on-1 online tutoring session" width="1200" height="911" {...{ fetchpriority: 'high' }} />

              {/* Personalized plan: floats on its own, separate from the photo */}
              <div className="floating-card card-plan-glass">
                <strong>Personalized Plan</strong>
                <ul>
                  <li>Diagnostic Test</li>
                  <li>Targeted Practice</li>
                  <li>Performance Tracking</li>
                </ul>
              </div>

              {/* A real result from Success Stories */}
              <div className="floating-card card-result">
                <small>Ananya&rsquo;s SAT score</small>
                <div className="card-result-row">
                  <s>1310</s><b>1540</b><span>+230</span>
                </div>
                <svg viewBox="0 0 200 42" aria-hidden="true">
                  <defs><linearGradient id="heroResultLine" x1="0" x2="1"><stop offset="0" stopColor="#fdb913" stopOpacity="0.4" /><stop offset="1" stopColor="#f97c0a" /></linearGradient></defs>
                  <path d="M4 36 C 40 34, 60 26, 90 24 S 150 14, 196 5" fill="none" stroke="url(#heroResultLine)" strokeWidth="3" strokeLinecap="round" />
                  <circle cx="196" cy="5" r="4.5" fill="#fdb913" />
                </svg>
                <p>Admitted to University of Michigan</p>
              </div>

              {/* Programs: each tag opens its page */}
              <nav className="floating-card card-exams-new" aria-label="Programs">
                <Link className="exam-tag" to="/sat">SAT</Link>
                <Link className="exam-tag" to="/act">ACT</Link>
                <Link className="exam-tag" to="/ap">AP</Link>
              </nav>
            </div>
          </div>
        </section>

        {/* Stats Band — Why ASG (bars only, no heading) */}
        <section className="stats-band shell" aria-label="Impact statistics">
          <div className="stats-band-reach">
            <span className="stat-icon" aria-hidden="true"><IconGlobe /></span>
            <div className="stat-text">
              <strong>Students Across</strong>
              <span>{STUDENT_COUNTRIES.join(' · ')}</span>
            </div>
          </div>
          <div>
            <span className="stat-icon" aria-hidden="true"><IconUser /></span>
            <div className="stat-text"><CountUp value={STATS.students} /><span>Students Mentored</span></div>
          </div>
          <div>
            <span className="stat-icon" aria-hidden="true"><IconUsers /></span>
            <div className="stat-text"><CountUp value={STATS.tutors} /><span>Expert Tutors</span></div>
          </div>
          <div>
            <span className="stat-icon" aria-hidden="true"><IconHeartCheck /></span>
            <div className="stat-text"><CountUp value={STATS.satisfaction} /><span>Parent Satisfaction</span></div>
          </div>
          <div>
            <a className="stat-rating" href={SITE.googleReviewUrl} target="_blank" rel="noopener noreferrer">
              <span className="stat-icon stat-google" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </span>
              <div className="stat-text"><strong>{STATS.rating}</strong><span>Google Rating</span></div>
            </a>
          </div>
        </section>

        <PainPoints />

        {/* What changes for your child */}
        <section className="features shell" id="about">
          <article>
            <span className="icon"><IconUsers /></span>
            <h3>A plan built around your test date</h3>
            <p>From diagnostic to test day, every week is planned around your child&rsquo;s target score.</p>
          </article>
          <article>
            <span className="icon"><IconGraduationCap /></span>
            <h3>A specialist tutor, not a generalist</h3>
            <p>Every student is matched with a tutor for their exact test or AP course &mdash; selected, trained and reviewed by our academic team.</p>
          </article>
          <article>
            <span className="icon"><IconChart /></span>
            <h3>Weekly progress reports for parents</h3>
            <p>See scores, completed homework and what the next sessions will focus on &mdash; no guessing whether it&rsquo;s working.</p>
          </article>
          <article>
            <span className="icon"><IconDocument /></span>
            <h3>25+ full-length Digital SAT practice tests</h3>
            <p>With a score report after each one, so you can see the trend, not just a single number.</p>
          </article>
          <article>
            <span className="icon"><IconClipboardCheck /></span>
            <h3>Homework after every session</h3>
            <p>Reviewed before the next lesson, with practice sets built from your child&rsquo;s own mistakes &mdash; so no hour is wasted re-teaching.</p>
          </article>
        </section>

        <ProgramsHub />

        <section className="cta-section shell">
          <div className="process-cta">
            <span className="process-cta-dots process-cta-dots-tr" aria-hidden="true" />
            <span className="process-cta-dots process-cta-dots-bl" aria-hidden="true" />
            <div className="cta-copy">
              <span className="cta-eyebrow">Your path to a higher score</span>
              <h3>
                <span className="cta-line">Every step is <em>personalized.</em></span>
                <span className="cta-line">Every action is <em>guided.</em></span>
                <span className="cta-line">Every goal is <em>achievable.</em></span>
              </h3>
              <div className="cta-actions">
                <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); openConsultationModal('General'); }}>
                  {PRIMARY_CTA} <span aria-hidden="true">→</span>
                </a>
                <Link className="cta-link" to="/free-test">
                  Or take a free practice test <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <ol className="cta-steps" aria-label="How it starts">
              <li>
                <span className="cta-step-num">1</span>
                <div>
                  <strong>Free diagnostic lesson</strong>
                  <span>Find out exactly where your score stands today.</span>
                </div>
              </li>
              <li>
                <span className="cta-step-num">2</span>
                <div>
                  <strong>Personalized plan</strong>
                  <span>A week-by-week roadmap built around your test date.</span>
                </div>
              </li>
              <li>
                <span className="cta-step-num">3</span>
                <div>
                  <strong>Weekly progress report</strong>
                  <span>Parents see scores, homework and what comes next.</span>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Our Personalized Learning Process (7 steps) */}
        <section className="process section-light" id="process">
          <div className="shell">
            <div className="section-heading">
              <h2>Our Personalized Learning Process</h2>
              <p>A proven 7-step journey to help every student succeed.</p>
            </div>
            <div className="process-flow">
              {[
                { n: '01', title: 'Understand', text: 'We learn about your goals & challenges.', icon: <IconLink /> },
                { n: '02', title: 'Assess', text: 'Diagnostic tests to analyze strengths & weaknesses.', icon: <IconDocument /> },
                { n: '03', title: 'Plan', text: 'We create a custom learning roadmap just for you.', icon: <IconRoute /> },
                { n: '04', title: 'Learn', text: 'Live classes, practice & resources with expert guidance.', icon: <IconMonitor /> },
                { n: '05', title: 'Track', text: 'Weekly progress reports with section-by-section analytics.', icon: <IconFlag /> },
                { n: '06', title: 'Improve', text: 'Continuous feedback & data insights for continuous improvement.', icon: <IconNetwork /> },
                { n: '07', title: 'Achieve', text: 'Reach your target score & unlock your future.', icon: <IconTrophy /> },
              ].map((s, i) => (
                <article key={s.n} className="process-step reveal" style={{ '--i': i, '--p': (i + 1) / 7 } as CSSProperties}>
                  <span className="process-icon" aria-hidden="true">{s.icon}</span>
                  <span className="process-num">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="success shell" id="results">
          <div className="success-heading-row">
            <div className="section-heading">
              <span className="ss-eyebrow">Success stories</span>
              <h2>Real students. Real results.</h2>
            </div>
            <a className="view-all-link" href="#testimonials">Read parent &amp; student reviews <span aria-hidden="true">→</span></a>
          </div>
          <SuccessStories onBook={() => openConsultationModal('General')} />
          <h3 className="uni-strip-label">Our students have been accepted to top universities worldwide</h3>
          <Universities />
        </section>

        <TutorCards />

        <WhyFamilies onBook={() => openConsultationModal('General')} />


        {/* What Our Students & Parents Say — Testimonials */}
        <Testimonials />

        <HowItWorks />

        <FaqSection items={HOME_FAQ} />

        {/* CTA + Stats */}
        <section className="prog-cta section-dark" id="consultation">
          <span className="orb orb-gold" aria-hidden="true" />
          <div className="shell">
            <div className="prog-cta-banner">
              <div>
                <h2>Ready to Achieve Your Dream Score?</h2>
                <p>
                  Book a <strong>free diagnostic lesson</strong>: your child gets a baseline score, you get a clear plan for the
                  target score and test date. No payment, no obligation.
                </p>
              </div>
              <div className="prog-cta-actions">
                <a className="btn btn-primary" href="/consultation" onClick={(e) => { e.preventDefault(); openConsultationModal('General'); }}>
                  {PRIMARY_CTA} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="prog-stats">
              {ACT_PAGE.stats.map((s, idx) => (
                <div key={s.label}>
                  {[
                    <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px', color: 'var(--gold)' }}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path><path d="M12 2a6 6 0 0 1 6 6v3.5c0 3.3-2.7 6-6 6s-6-2.7-6-6V8a6 6 0 0 1 6-6z"></path></svg>,
                    <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px', color: 'var(--gold)' }}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
                    <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px', color: 'var(--gold)' }}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
                    <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px', color: 'var(--gold)' }}><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>,
                  ][idx]}
                  <strong style={{ marginTop: '8px' }}>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Consultation Request Modal */}
      <div className={`c-modal-overlay${isModalOpen ? ' is-active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeConsultationModal(); }}>
        <div className="c-modal">
          <button className="c-modal-close" onClick={closeConsultationModal}>&times;</button>

          {submitStatus === 'success' ? (
            <div className="c-success-state">
              <div className="c-success-icon">✓</div>
              <h4>Request received!</h4>
              <p>Thank you. An academic advisor from ACT SAT GO will contact you shortly to schedule your free diagnostic lesson.</p>
              {SITE.bookingUrl && (
                <p><a href={SITE.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackContactClick('booking')} style={{ color: 'var(--gold)', fontWeight: 800 }}>Prefer to pick a time yourself? Open the calendar →</a></p>
              )}
              <button className="btn btn-primary" style={{ width: '100%' }} onClick={closeConsultationModal}>Close</button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="c-modal-header">
                <h3>{PRIMARY_CTA}</h3>
                <p>Tell us a little about your child. An advisor will confirm a time &mdash; no payment, no obligation.</p>
              </div>

              <div className="c-form-group">
                <label htmlFor="modal-name">Parent or student name</label>
                <input
                  id="modal-name"
                  type="text"
                  className="c-input"
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="c-form-group">
                <label htmlFor="modal-email">Email Address</label>
                <input
                  id="modal-email"
                  type="email"
                  className="c-input"
                  placeholder="e.g. ananya@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="c-form-group">
                <label htmlFor="modal-phone">Phone Number</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select
                    className="c-input"
                    style={{ width: '110px', padding: '0 8px', backgroundColor: '#0d1b31', color: 'white' }}
                    value={phoneCountryCode}
                    onChange={(e) => setPhoneCountryCode(e.target.value)}
                  >
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+1">+1 (US)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+91">+91 (IN)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+44">+44 (UK)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+971">+971 (AE)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+65">+65 (SG)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+61">+61 (AU)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+966">+966 (SA)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+974">+974 (QA)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+968">+968 (OM)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+965">+965 (KW)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+973">+973 (BH)</option>
                    <option style={{ backgroundColor: '#0d1b31', color: 'white' }} value="+852">+852 (HK)</option>
                  </select>
                  <input
                    id="modal-phone"
                    type="tel"
                    className="c-input"
                    style={{ flex: 1 }}
                    placeholder="555 123 4567"
                    value={phoneLocalNumber}
                    onChange={(e) => setPhoneLocalNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="c-form-group">
                <label htmlFor="modal-exam">Exam / Program Interest</label>
                <select
                  id="modal-exam"
                  className="c-input"
                  value={formData.exam}
                  onChange={(e) => setFormData({ ...formData, exam: e.target.value })}
                >
                  <option value="General">General / Other</option>
                  <option value="SAT">SAT Prep</option>
                  <option value="ACT">ACT Prep</option>
                  <option value="AP Prep">AP Prep</option>
                  <option value="K-12 Tutoring">K-12 Tutoring</option>
                </select>
              </div>

              <div className="c-form-group">
                <label htmlFor="modal-message">Target score and test date (optional)</label>
                <textarea
                  id="modal-message"
                  className="c-input c-textarea"
                  placeholder="e.g. Aiming for 1450+ on the March SAT, currently around 1250"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {submitStatus === 'error' && (
                <p style={{ color: '#ef4444', fontSize: '13px', margin: '8px 0', fontWeight: 600 }}>
                  ✕ Sorry, something went wrong. Please try again, or text us on WhatsApp.
                </p>
              )}

              <button
                type="submit"
                className="c-submit-btn"
                disabled={submitStatus === 'submitting'}
              >
                {submitStatus === 'submitting' ? 'Submitting...' : PRIMARY_CTA}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
