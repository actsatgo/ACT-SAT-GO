import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QUERY_API_BASE } from '../config';
import { trackLead, leadSource, trackContactClick } from '../lib/analytics';
import { SITE, PRIMARY_CTA } from '../site';
import { HowItWorks } from '../components/HowItWorks';
import { WHATSAPP_HREF } from '../components/WhatsAppButton';
import { DarkSelect, PHONE_CODE_OPTIONS, EXAM_OPTIONS as EXAM_SELECT_OPTIONS } from '../components/DarkSelect';

const EXAM_OPTIONS = ['General', 'SAT', 'ACT', 'AP Prep', 'K-12 Tutoring'];

function normalizeExam(raw: string | null): string {
  if (!raw) return 'General';
  const match = EXAM_OPTIONS.find((o) => o.toLowerCase() === raw.toLowerCase() || o.toLowerCase().startsWith(raw.toLowerCase()));
  return match ?? 'General';
}

export function EnquiryPage() {
  const [searchParams] = useSearchParams();
  const presetExam = normalizeExam(searchParams.get('exam'));
  const presetName = searchParams.get('name') ?? '';

  const [formData, setFormData] = useState({ name: presetName, email: '', phone: '', exam: presetExam, message: '' });
  const [phoneCountryCode, setPhoneCountryCode] = useState('+1');
  const [phoneLocalNumber, setPhoneLocalNumber] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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
          source: leadSource('Website · Consultation page'),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackLead('consultation_page', { exam: formData.exam });
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
        <section className="hero section-dark enquiry-hero" style={{ paddingBottom: '60px' }}>
          <span className="orb orb-gold" aria-hidden="true" />
          <div className="shell" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <h1 className="enquiry-title">Book a <span>Free Diagnostic Session</span></h1>
            <p className="hero-text" style={{ margin: '0 auto 24px', fontSize: '15px' }}>
              Prefer to talk first? Call <a href={SITE.phoneHref} onClick={() => trackContactClick('phone')} style={{ color: 'var(--gold)', fontWeight: 800 }}>{SITE.phoneDisplay}</a>
              {' '}or <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" onClick={() => trackContactClick('whatsapp')} style={{ color: 'var(--gold)', fontWeight: 800 }}>text us on WhatsApp</a>.
            </p>

            {SITE.bookingUrl && (
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '22px', marginBottom: '12px' }}>Pick a time for your free call</h2>
                <iframe className="booking-embed" src={SITE.bookingUrl} title="Book a free diagnostic session" loading="lazy" />
                <p className="hero-text" style={{ fontSize: '14px', marginTop: '16px' }}>Can&rsquo;t find a time that works? Send the form below and we&rsquo;ll call you.</p>
              </div>
            )}

            <div className="c-modal" style={{ margin: '0 auto', textAlign: 'left', transform: 'none' }}>
              {submitStatus === 'success' ? (
                <div className="c-success-state">
                  <div className="c-success-icon">✓</div>
                  <h4>Request received!</h4>
                  <p>Thank you. An academic advisor from ACT SAT GO will contact you shortly to schedule your free diagnostic session.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="c-form-group">
                    <label htmlFor="enq-name">Parent or student name</label>
                    <input
                      id="enq-name"
                      type="text"
                      className="c-input"
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="c-form-group">
                    <label htmlFor="enq-email">Email Address</label>
                    <input
                      id="enq-email"
                      type="email"
                      className="c-input"
                      placeholder="e.g. ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="c-form-group">
                    <label htmlFor="enq-phone">Phone Number</label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <DarkSelect
                        className="dark-select-code"
                        ariaLabel="Country code"
                        value={phoneCountryCode}
                        options={PHONE_CODE_OPTIONS}
                        onChange={setPhoneCountryCode}
                      />
                      <input
                        id="enq-phone"
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
                    <label htmlFor="enq-exam">Exam / Program Interest</label>
                    <DarkSelect
                      id="enq-exam"
                      value={formData.exam}
                      options={EXAM_SELECT_OPTIONS}
                      onChange={(exam) => setFormData({ ...formData, exam })}
                    />
                  </div>

                  <div className="c-form-group">
                    <label htmlFor="enq-message">Target score and test date</label>
                    <textarea
                      id="enq-message"
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

                  <button type="submit" className="c-submit-btn" disabled={submitStatus === 'submitting'}>
                    {submitStatus === 'submitting' ? 'Submitting...' : PRIMARY_CTA}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <HowItWorks showCta={false} />
      </main>

      <Footer />
    </>
  );
}
