import { useState, useRef, useEffect } from 'react';
import { Header } from '../components/Header';
import careersTeamImg from '../assets/img/careers-hero-team.webp';
import careerPartnerImg from '../assets/img/career-partner.webp';
import { QUERY_API_BASE } from '../config';
import { fetchJobs, type Job } from '../admin/api';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const DEFAULT_JOBS = [
  {
    id: 'job_1',
    dept: 'Academics',
    title: 'SAT Math Tutor',
    location: 'Remote (Global)',
    type: 'Freelance',
    desc: 'Teach Digital SAT Math one student at a time, from algebra to advanced math, turning each diagnostic into a clear plan for the target score.',
  },
  {
    id: 'job_1b',
    dept: 'Academics',
    title: 'ACT Math Tutor',
    location: 'Remote (Global)',
    type: 'Freelance',
    desc: 'Prepare students for ACT Math with fast, accurate problem solving across algebra, geometry and trigonometry, plus a pacing strategy that works.',
  },
  {
    id: 'job_2',
    dept: 'Academics',
    title: 'SAT Verbal Tutor',
    location: 'Remote (Global)',
    type: 'Freelance',
    desc: 'Coach the Digital SAT Reading and Writing section: comprehension, grammar and timing, with a plan built around each student\'s diagnostic.',
  },
  {
    id: 'job_2b',
    dept: 'Academics',
    title: 'ACT English Tutor',
    location: 'Remote (Global)',
    type: 'Freelance',
    desc: 'Teach grammar, punctuation and rhetorical skills for ACT English, with timed practice that builds speed and accuracy.',
  },
  {
    id: 'job_3',
    dept: 'Academics',
    title: 'AP Calculus Tutor',
    location: 'Remote (Global)',
    type: 'Freelance',
    desc: 'Prepare high schoolers for AP Calculus AB and BC, with timed practice on the exam\'s multiple-choice and free-response questions.',
  },
  {
    id: 'job_4',
    dept: 'Academics',
    title: 'AP Biology Tutor',
    location: 'Remote (Global)',
    type: 'Freelance',
    desc: 'Make AP Biology click, from core concepts to lab-based and experimental design questions, with exam-style practice.',
  },
  {
    id: 'job_5',
    dept: 'Academics',
    title: 'AP Computer Science Tutor',
    location: 'Remote (Global)',
    type: 'Freelance',
    desc: 'Help students write clean code, reason through algorithms and get comfortable with the AP Computer Science free-response questions.',
  },
  {
    id: 'job_6',
    dept: 'Operations',
    title: 'Operations Manager',
    location: 'Remote (Global)',
    type: 'Full-time',
    desc: 'Keep lessons running on time: own tutor scheduling, session quality and the coordinator team, so every family gets a smooth experience.',
  },
  {
    id: 'job_7',
    dept: 'Student Success',
    title: 'Student Success Specialist',
    location: 'Remote (Global)',
    type: 'Full-time',
    desc: 'Be the family\'s go-to person: check in on progress, share reports with parents, and keep student and tutor working toward the same goal.',
  },
  {
    id: 'job_8',
    dept: 'Student Success',
    title: 'Student Success Executive',
    location: 'Remote (Global)',
    type: 'Full-time',
    desc: 'Welcome new families after their free diagnostic lesson, guide them through onboarding, and build relationships that last.',
  },
  {
    id: 'job_9',
    dept: 'Operations',
    title: 'Assessment & Testing Coordinator',
    location: 'Remote (Global)',
    type: 'Full-time',
    desc: 'Run full-length mock tests, read the score reports and show tutors exactly where each student needs more practice.',
  },
];

/* Icon in the navy card header, picked from the job's department */
function jobIcon(dept: string) {
  const d = dept.toLowerCase();
  if (d.includes('academ')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
      </svg>
    );
  }
  if (d.includes('success')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

/* Older job records say "Freelancer"; show the job type, not the person */
const jobType = (type: string) => (type === 'Freelancer' ? 'Freelance' : type);

const CULTURE = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: 'Student First',
    desc: 'Everything we do is for student success.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    label: 'Learn & Grow',
    desc: 'We invest in your growth and celebrate progress.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    label: 'Collaborate & Win',
    desc: 'Great results come from great teamwork.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: 'Innovate Always',
    desc: 'We challenge the status quo to create better outcomes.',
  },
];

const PARTNER_PERKS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 17 12 21 16 17" />
        <line x1="12" y1="12" x2="12" y2="21" />
        <path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29" />
      </svg>
    ),
    label: 'Empower',
    desc: 'students to reach their full potential',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    label: 'Flexible',
    desc: 'collaboration that works for you',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    label: 'Exclusive',
    desc: 'resources and training support',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    label: 'Meaningful',
    desc: 'rewards for your referrals',
  },
];

/* ─────────────────────────────────────────────
   PAGE
 ───────────────────────────────────────────── */

export function CareersPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cvDragOver, setCvDragOver] = useState(false);
  const [testPrepOpen, setTestPrepOpen] = useState(false);
  const [applyOpen, setApplyOpen] = useState(false);
  const [applyRole, setApplyRole] = useState('');
  const [applyKind, setApplyKind] = useState<'tutor' | 'ops'>('tutor');
  const [opsForm, setOpsForm] = useState({
    role: '',
    experience: '',
    currentRole: '',
    availability: '',
    salary: '',
    notice: '',
    linkedin: '',
  });
  const testPrepRef = useRef<HTMLDivElement>(null);

  // Close the test prep dropdown on an outside click or Escape
  useEffect(() => {
    if (!testPrepOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!testPrepRef.current?.contains(e.target as Node)) setTestPrepOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setTestPrepOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [testPrepOpen]);
  const jobsMarqueeRef = useRef<HTMLDivElement>(null);
  const jobsPausedRef = useRef(false);
  const jobsDragRef = useRef({ dragging: false, moved: false, startX: 0, startScroll: 0 });
  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobFilter, setJobFilter] = useState<'all' | 'academics' | 'operations'>('all');
  const isAcademicDept = (dept?: string) => (dept || '').toLowerCase().includes('academ');
  const opsRoles = Array.from(new Set(jobs.filter((j) => !isAcademicDept(j.dept)).map((j) => j.title)));
  const shownJobs = jobs.filter((job) => {
    if (jobFilter === 'all') return true;
    const academic = (job.dept || '').toLowerCase().includes('academ');
    return jobFilter === 'academics' ? academic : !academic;
  });
  const [phoneCountryCode, setPhoneCountryCode] = useState('+91');
  const [phoneLocalNumber, setPhoneLocalNumber] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: '',
    testPrep: [] as string[],
    grades: '',
    hourlyRate: '',
    videoUrl: '',
    remarks: '',
  });
  const [cvFile, setCvFile] = useState<{ name: string; type: string; data: string } | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const TEST_PREP_OPTIONS = ['SAT', 'ACT', 'AP', 'K-12', 'Other'];

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await fetchJobs();
        if (!cancelled) {
          setJobs(data.length > 0 ? data : (DEFAULT_JOBS as unknown as Job[]));
        }
      } catch (err) {
        console.error('Failed to load jobs, using defaults:', err);
        if (!cancelled) {
          setJobs(DEFAULT_JOBS as unknown as Job[]);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Auto-scroll the jobs carousel; pauses while the user hovers, drags or touches it.
  useEffect(() => {
    const el = jobsMarqueeRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let rafId: number;
    let lastTime: number | null = null;
    const speedPxPerSec = 40;

    const step = (time: number) => {
      if (lastTime === null) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;
      if (!jobsPausedRef.current && !jobsDragRef.current.dragging) {
        el.scrollLeft += (speedPxPerSec * dt) / 1000;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [shownJobs.length]);

  // Keep the loop seamless: once scrolled past one full copy of the (duplicated) list, jump back.
  useEffect(() => {
    const el = jobsMarqueeRef.current;
    if (!el) return;
    const handleScroll = () => {
      const singleWidth = el.scrollWidth / 2;
      if (singleWidth <= 0) return;
      if (el.scrollLeft >= singleWidth) {
        el.scrollLeft -= singleWidth;
      } else if (el.scrollLeft < 0) {
        el.scrollLeft += singleWidth;
      }
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [shownJobs.length]);

  // Arrow buttons: glide the carousel by exactly one card in either direction, wrapping
  // around the duplicated list so both arrows loop forever. Auto-scroll pauses briefly.
  const jobsArrowTimer = useRef<number | undefined>(undefined);
  const jobsArrowAnim = useRef<number | undefined>(undefined);
  const scrollJobs = (dir: 1 | -1) => {
    const el = jobsMarqueeRef.current;
    const card = el?.querySelector<HTMLElement>('.careers-job-card');
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(card.parentElement as HTMLElement).columnGap) || 0;
    const step = card.offsetWidth + gap;
    const singleWidth = el.scrollWidth / 2;
    if (singleWidth <= 0) return;
    const wrap = (x: number) => ((x % singleWidth) + singleWidth) % singleWidth;
    // Start from the nearest card edge so repeated clicks stay aligned
    const from = Math.round(el.scrollLeft / step) * step;
    const startAt = el.scrollLeft;
    const delta = from + dir * step - startAt;
    const duration = 450;
    let t0: number | null = null;
    if (jobsArrowAnim.current) cancelAnimationFrame(jobsArrowAnim.current);
    jobsPausedRef.current = true;
    const tick = (time: number) => {
      if (t0 === null) t0 = time;
      const t = Math.min(1, (time - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.scrollLeft = wrap(startAt + delta * eased);
      if (t < 1) jobsArrowAnim.current = requestAnimationFrame(tick);
    };
    jobsArrowAnim.current = requestAnimationFrame(tick);
    window.clearTimeout(jobsArrowTimer.current);
    jobsArrowTimer.current = window.setTimeout(() => {
      jobsPausedRef.current = false;
    }, 2500);
  };

  const handleJobsPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return; // let touch/trackpad use native scrolling
    const el = jobsMarqueeRef.current;
    if (!el) return;
    jobsDragRef.current = { dragging: true, moved: false, startX: e.clientX, startScroll: el.scrollLeft };
    jobsPausedRef.current = true;
  };

  const handleJobsPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = jobsDragRef.current;
    if (!drag.dragging) return;
    const el = jobsMarqueeRef.current;
    if (!el) return;
    const dx = e.clientX - drag.startX;
    // Capture the pointer only once it is a real drag; capturing on press would
    // retarget the click to the carousel and the Apply Now buttons would never fire.
    if (!drag.moved && Math.abs(dx) > 3) {
      drag.moved = true;
      el.setPointerCapture(e.pointerId);
    }
    el.scrollLeft = drag.startScroll - dx;
  };

  const endJobsDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const drag = jobsDragRef.current;
    if (!drag.dragging) return;
    drag.dragging = false;
    jobsPausedRef.current = false;
    const el = jobsMarqueeRef.current;
    if (el?.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  };

  const handleJobsClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    // Suppress the click that follows a drag so "Apply Now" isn't triggered accidentally.
    if (jobsDragRef.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      jobsDragRef.current.moved = false;
    }
  };

  // Application form lives in a pop-up; Escape or the backdrop closes it, page scroll is locked while open
  const openApply = (role = '', kind: 'tutor' | 'ops' = 'tutor') => {
    setApplyRole(role);
    setApplyKind(kind);
    if (kind === 'ops') setOpsForm((f) => ({ ...f, role }));
    setErrorMsg('');
    setApplyOpen(true);
  };

  useEffect(() => {
    if (window.location.hash === '#apply-form') setApplyOpen(true);
  }, []);

  useEffect(() => {
    if (!applyOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !testPrepOpen) setApplyOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [applyOpen, testPrepOpen]);

  const handleApplyClick = (jobTitle: string, dept?: string) => {
    if (dept && !isAcademicDept(dept)) {
      openApply(jobTitle, 'ops');
      return;
    }
    let subject = jobTitle;
    let testPrep: string[] = [];
    
    if (jobTitle.toLowerCase().includes('sat') || jobTitle.toLowerCase().includes('act')) {
      testPrep = ['SAT', 'ACT'];
    } else if (jobTitle.toLowerCase().includes('ap')) {
      testPrep = ['AP'];
    }

    setForm((f) => ({
      ...f,
      subject,
      testPrep,
    }));

    openApply(jobTitle);
  };

  const handleTestPrepChange = (option: string) => {
    setForm(f => {
      const exists = f.testPrep.includes(option);
      const testPrep = exists 
        ? f.testPrep.filter(t => t !== option)
        : [...f.testPrep, option];
      return { ...f, testPrep };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) readCvFile(file);
  };

  const readCvFile = (file: File) => {

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg('CV file size must be under 5MB.');
      return;
    }

    const validExtensions = ['pdf', 'doc', 'docx'];
    const fileExt = file.name.split('.').pop()?.toLowerCase();
    if (!fileExt || !validExtensions.includes(fileExt)) {
      setErrorMsg('Only PDF, DOC, or DOCX files are allowed.');
      return;
    }

    setErrorMsg('');
    const reader = new FileReader();
    reader.onload = () => {
      setCvFile({
        name: file.name,
        type: file.type,
        data: reader.result as string,
      });
    };
    reader.onerror = () => {
      setErrorMsg('Failed to read the CV file.');
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !phoneLocalNumber.trim()) {
      setErrorMsg('Name, Email, and WhatsApp number are required.');
      return;
    }
    if (!cvFile) {
      setErrorMsg('Please upload your CV.');
      return;
    }
    const isOps = applyKind === 'ops';
    if (isOps && (!opsForm.role || !opsForm.experience || !opsForm.availability)) {
      setErrorMsg('Please choose the role, your experience and your availability.');
      return;
    }
    // Operations applications go to the same applications list as tutors; the role is
    // stored as the subject and the extra answers are summarised in the remarks.
    const opsSummary = [
      `Role: ${opsForm.role}`,
      `Experience: ${opsForm.experience}`,
      opsForm.currentRole && `Current / last role: ${opsForm.currentRole}`,
      `Availability: ${opsForm.availability}`,
      opsForm.salary && `Expected monthly salary (INR): ${opsForm.salary}`,
      opsForm.notice && `Notice period: ${opsForm.notice}`,
      opsForm.linkedin && `LinkedIn: ${opsForm.linkedin}`,
      form.remarks && `Notes: ${form.remarks}`,
    ].filter(Boolean).join('\n');

    setSubmitStatus('submitting');
    setErrorMsg('');

    try {
      const response = await fetch(`${QUERY_API_BASE}/api/queries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: `${phoneCountryCode} ${phoneLocalNumber}`.trim(),
          city: form.city,
          cvFile,
          type: 'Tutor',
          ...(isOps
            ? {
                exam: 'Operations',
                subject: `Operations: ${opsForm.role}`,
                hourlyRate: opsForm.salary ? `₹${opsForm.salary.replace(/^₹\s*|\/month$/g, '')}/month` : '',
                companiesWorkedWith: opsForm.currentRole,
                videoUrl: opsForm.linkedin,
                message: opsSummary,
                remarks: opsSummary,
              }
            : {
                subject: form.subject,
                testPrep: form.testPrep,
                grades: form.grades,
                hourlyRate: form.hourlyRate,
                videoUrl: form.videoUrl,
                message: form.remarks,
                remarks: form.remarks,
              }),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setPhoneCountryCode('+91');
        setPhoneLocalNumber('');
        setForm({
          name: '',
          email: '',
          phone: '',
          city: '',
          subject: '',
          testPrep: [],
          grades: '',
          hourlyRate: '',
          videoUrl: '',
          remarks: '',
        });
        setCvFile(null);
        setOpsForm({ role: '', experience: '', currentRole: '', availability: '', salary: '', notice: '', linkedin: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMsg(data.error || 'Failed to submit application.');
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Network error. Failed to reach the server.');
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <Header />

      <main>
        {/* ── Hero ── */}
        <section className="careers-hero-section section-dark">
          <img
            className="careers-hero-bg"
            src={careersTeamImg}
            alt="The ACT SAT GO team"
            width={1672}
            height={941}
          />
          <div className="shell careers-hero-grid">
            <div className="careers-hero-copy">
              <span className="careers-eyebrow">CAREERS AT ACT SAT GO</span>
              <h1 className="careers-hero-title">
                Build the Future<br />of Student <span>Success.</span>
              </h1>
              <p className="careers-hero-desc">
                We're a team of educators, innovators and problem-solvers passionate about helping
                students achieve their highest potential. If you're driven to make an impact,
                you'll feel right at home here.
              </p>
              <a
                href="#open-positions"
                className="btn btn-primary careers-hero-btn"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('open-positions');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Open Positions
              </a>
            </div>

          </div>
        </section>

        {/* ── Open Positions ── */}
        <section className="careers-jobs-section" id="open-positions">
          <div className="shell">
            <p className="careers-section-eyebrow">OPEN POSITIONS</p>
            <h2 className="careers-jobs-title">
              Help the next 1,000 students <span>reach their target score.</span>
            </h2>
            <p className="careers-jobs-lead">
              Every role is fully remote. Tutors choose their own hours and teach 1-on-1; team members work
              directly with families in the USA, UK, India, Singapore and UAE.
            </p>
            <p className="careers-jobs-freelance">Freelancers are always welcome to apply.</p>

            <div className="careers-jobs-bar">
            <div className="careers-tabs" role="tablist" aria-label="Filter roles">
              {(
                [
                  ['all', 'All'],
                  ['academics', 'Academics'],
                  ['operations', 'Operations'],
                ] as const
              ).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={jobFilter === key}
                  className={`careers-tab${jobFilter === key ? ' is-active' : ''}`}
                  onClick={() => setJobFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
            </div>

            {/* Job cards, with an arrow on each side */}
            <div className="careers-jobs-carousel">
              <button type="button" className="careers-jobs-arrow is-prev" aria-label="Previous role" onClick={() => scrollJobs(-1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
            <div
              className="careers-jobs-marquee"
              ref={jobsMarqueeRef}
              onMouseEnter={() => { jobsPausedRef.current = true; }}
              onMouseLeave={() => { jobsPausedRef.current = false; }}
              onPointerDown={handleJobsPointerDown}
              onPointerMove={handleJobsPointerMove}
              onPointerUp={endJobsDrag}
              onPointerCancel={endJobsDrag}
              onClickCapture={handleJobsClickCapture}
            >
              <div className="careers-jobs-track">
                {[...shownJobs, ...shownJobs].map((job, i) => (
                  <article key={`${job.id || job.title}-${i}`} className="careers-job-card">
                    <header className="careers-job-head">
                      <span className="careers-job-avatar" aria-hidden="true">{jobIcon(job.dept || '')}</span>
                      <div>
                        <h3 className="careers-job-title">{job.title}</h3>
                        <span className="careers-job-sub">
                          {job.dept ? `${job.dept} · ` : ''}{jobType(job.type)}
                        </span>
                      </div>
                    </header>
                    <div className="careers-job-body">
                      <p className="careers-job-desc">{job.desc}</p>
                    </div>
                    <div className="careers-job-footer">
                      <button
                        type="button"
                        onClick={() => handleApplyClick(job.title, job.dept)}
                        className="careers-job-apply-btn"
                      >
                        Apply Now
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>

              <button type="button" className="careers-jobs-arrow is-next" aria-label="Next role" onClick={() => scrollJobs(1)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>

            <div className="careers-jobs-more">
              <div>
                <strong>Don't see your role?</strong>
                <span>We're always glad to hear from great educators. Send us your details and CV.</span>
              </div>
              <a
                href="#apply-form"
                onClick={(e) => {
                  e.preventDefault();
                  openApply();
                }}
              >
                Apply anyway →
              </a>
            </div>
          </div>
        </section>

        {/* ── Culture ── */}
        <section className="careers-culture-section">
          <div className="shell">
            <p className="careers-section-eyebrow">OUR CULTURE</p>
            <h2 className="careers-culture-title">A place to grow, learn and make an impact.</h2>
            <div className="careers-culture-grid">
              {CULTURE.map((c) => (
                <div key={c.label} className="careers-culture-card">
                  <div className="careers-culture-icon">{c.icon}</div>
                  <p className="careers-culture-label">{c.label}</p>
                  <p className="careers-culture-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partner With Us ── */}
        <section className="careers-partner-section">
          <div className="shell careers-partner-inner">
            {/* Left copy */}
            <div className="careers-partner-copy">
              <p className="careers-section-eyebrow">PARTNER WITH US</p>
              <h2 className="careers-partner-title">
                Help more students.<br />
                <span className="careers-partner-accent">Grow</span> together.
              </h2>
              <p className="careers-partner-desc">
                We work with enthusiastic education counsellors who share our mission of empowering
                students. By collaborating with ACT SAT GO, you can provide valued guidance to
                students while creating a rewarding opportunity for yourself.
              </p>
              <div className="careers-partner-perks">
                {PARTNER_PERKS.map((p) => (
                  <div key={p.label} className="careers-partner-perk">
                    <span className="careers-partner-perk-icon">{p.icon}</span>
                    <div>
                      <strong>{p.label}</strong>
                      <span>{p.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => openApply()}
                className="careers-partner-btn"
              >
                Learn More →
              </button>
            </div>

            {/* Right image */}
            <div className="careers-partner-image-wrap">
              {/* centre ring graphic */}
              <div className="careers-partner-ring" aria-hidden="true">
                <svg viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="58" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6 6" />
                  <circle cx="60" cy="60" r="42" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.4" />
                  <path d="M60 30c0 0 8 10 8 20s-8 20-8 20s-8-10-8-20 8-20 8-20z" fill="#2563eb" fillOpacity="0.08" />
                  <circle cx="60" cy="60" r="14" fill="#2563eb" fillOpacity="0.1" />
                  {/* people icon */}
                  <g stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M52 55a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" />
                    <path d="M44 75v-2a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v2" />
                    <path d="M68 51a4 4 0 1 1 0 8" strokeOpacity="0.5" />
                    <path d="M76 75v-2a8 8 0 0 0-4-7" strokeOpacity="0.5" />
                  </g>
                </svg>
              </div>
              <img
                src={careerPartnerImg}
                alt="Education counsellor working with ACT SAT GO"
                className="careers-partner-img"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ── Tutor Application Form ── */}
        <section id="teach-with-us" className="careers-form-section">
          <div className="shell">
            <div className="careers-form-grid">
              
              {/* Form Info Panel */}
              <div className="careers-form-info">
                <span className="careers-section-eyebrow">WORK WITH US</span>
                <h2 className="careers-form-title">
                  Become an ACT SAT GO Tutor
                </h2>
                <p className="careers-form-desc">
                  We are always looking for exceptional, student-first mentors. Join our network of elite educators, set your own flexible hours, and tutor students globally from the comfort of your home.
                </p>
                
                <div className="careers-form-requirements">
                  <h3>What we look for:</h3>
                  <ul>
                    <li>
                      <span className="req-check">✓</span> High-scoring academic backgrounds (SAT 1500+, ACT 34+, or AP 5/5 preferred).
                    </li>
                    <li>
                      <span className="req-check">✓</span> Empathy, patience, and strong communication skills.
                    </li>
                    <li>
                      <span className="req-check">✓</span> Ability to teach in a structured, interactive 1-on-1 online format.
                    </li>
                    <li>
                      <span className="req-check">✓</span> A reliable, quiet workspace with high-speed internet and tutoring equipment.
                    </li>
                  </ul>
                </div>

              </div>

              {/* Perks and the button that opens the application pop-up */}
              <div className="careers-form-side">
                <ul className="careers-form-perks">
                  <li><strong>Fully remote</strong><span>Teach from anywhere</span></li>
                  <li><strong>Your hours</strong><span>Pick the slots that suit you</span></li>
                  <li><strong>Global students</strong><span>USA, UK, India, Singapore, UAE</span></li>
                  <li><strong>1-on-1 only</strong><span>No crowded group classes</span></li>
                </ul>
                <button type="button" className="form-submit-btn careers-open-apply" onClick={() => openApply()}>
                  Apply to Teach
                </button>
                <p className="careers-open-apply-note">Takes about 5 minutes. Keep your CV and a short intro video link handy.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="careers-cta-section">
          <div className="shell careers-cta-inner">
            <div className="careers-cta-copy">
              <p className="careers-cta-eyebrow">MAKE AN IMPACT</p>
              <h2 className="careers-cta-title">
                Build a career that<br />makes a <span className="careers-cta-accent">difference.</span>
              </h2>
              <p className="careers-cta-desc">
                Join a team where your work empowers students, supports families and creates a lasting impact.
              </p>
              <button
                type="button"
                onClick={() => openApply()}
                className="careers-cta-btn"
              >
                Apply Now
              </button>
            </div>
            {/* decorative illustration */}
            <div className="careers-cta-illustration" aria-hidden="true">
              <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* platform steps */}
                <rect x="40" y="120" width="60" height="60" rx="4" fill="#1d4ed8" />
                <rect x="110" y="90" width="60" height="90" rx="4" fill="#ffb400" />
                <rect x="180" y="60" width="60" height="120" rx="4" fill="#1d4ed8" />
                {/* flag on top */}
                <line x1="210" y1="60" x2="210" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <polygon points="210,20 240,32 210,44" fill="#ffb400" />
                {/* silhouettes */}
                {/* small person */}
                <circle cx="70" cy="108" r="8" fill="white" fillOpacity="0.7" />
                <path d="M60 120v10a10 10 0 0 0 20 0v-10" fill="white" fillOpacity="0.7" />
                {/* medium person */}
                <circle cx="140" cy="76" r="9" fill="white" fillOpacity="0.85" />
                <path d="M129 90v11a11 11 0 0 0 22 0V90" fill="white" fillOpacity="0.85" />
                {/* tall person */}
                <circle cx="210" cy="44" r="10" fill="white" />
                <path d="M198 58v12a12 12 0 0 0 24 0V58" fill="white" />
                {/* helping arm */}
                <path d="M180 76 L196 58" stroke="#ffb400" strokeWidth="2.5" strokeLinecap="round" />
                {/* leaves */}
                <ellipse cx="22" cy="150" rx="14" ry="28" fill="#1e3a5f" transform="rotate(-30 22 150)" />
                <ellipse cx="14" cy="140" rx="10" ry="22" fill="#1d4ed8" fillOpacity="0.6" transform="rotate(-50 14 140)" />
                <ellipse cx="258" cy="155" rx="14" ry="28" fill="#1e3a5f" transform="rotate(30 258 155)" />
              </svg>
            </div>
          </div>
        </section>

        {/* ── Application pop-up ── */}
        {applyOpen && (
          <div
            className="careers-apply-modal"
            id="apply-form"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setApplyOpen(false);
            }}
          >
            <div className="careers-apply-dialog" role="dialog" aria-modal="true" aria-label={applyKind === 'ops' ? 'Operations application form' : 'Tutor application form'}>
              <button type="button" className="careers-apply-close" aria-label="Close" onClick={() => setApplyOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
              <div className="careers-form-card">
                {submitStatus === 'success' ? (
                  <div className="careers-form-success animate-fade-in">
                    <div className="success-icon-badge">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3>Application Submitted!</h3>
                    <p>
                      {applyKind === 'ops'
                        ? 'Thank you for applying. Our team will review your CV and contact you via WhatsApp or Email if your profile matches the role.'
                        : 'Thank you for applying. Our academic coordinators will review your CV and video introduction. We will contact you via WhatsApp or Email if your profile matches our requirements.'}
                    </p>
                    <button className="btn-reset-form" onClick={() => setSubmitStatus('idle')}>
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="careers-application-form">
                    <h3 className="form-legend">
                      {applyKind === 'ops'
                        ? (opsForm.role ? `Apply: ${opsForm.role}` : 'Join our operations team')
                        : (applyRole ? `Apply: ${applyRole}` : 'Apply to teach with us')}
                      <small>Fields marked * are required.</small>
                    </h3>

                    <div className="careers-apply-kind" role="tablist" aria-label="Application type">
                      {(
                        [
                          ['tutor', 'Tutor'],
                          ['ops', 'Operations'],
                        ] as const
                      ).map(([key, label]) => (
                        <button
                          key={key}
                          type="button"
                          role="tab"
                          aria-selected={applyKind === key}
                          className={`careers-tab${applyKind === key ? ' is-active' : ''}`}
                          onClick={() => {
                            if (applyKind === key) return;
                            setApplyKind(key);
                            setApplyRole('');
                            setOpsForm((f) => ({ ...f, role: '' }));
                            setErrorMsg('');
                          }}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                    
                    {errorMsg && (
                      <div className="careers-form-error-banner animate-fade-in" role="alert">
                        {errorMsg}
                      </div>
                    )}

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          placeholder="e.g. Jane Doe"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Contact Number (WhatsApp) *</label>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <select
                            className="phone-code-select"
                            value={phoneCountryCode}
                            onChange={(e) => setPhoneCountryCode(e.target.value)}
                          >
                            <option value="+91">+91 (IN)</option>
                            <option value="+1">+1 (US)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+971">+971 (AE)</option>
                            <option value="+65">+65 (SG)</option>
                            <option value="+61">+61 (AU)</option>
                            <option value="+966">+966 (SA)</option>
                            <option value="+974">+974 (QA)</option>
                            <option value="+968">+968 (OM)</option>
                            <option value="+965">+965 (KW)</option>
                            <option value="+973">+973 (BH)</option>
                            <option value="+852">+852 (HK)</option>
                          </select>
                          <input
                            type="tel"
                            id="phone"
                            placeholder="555 123 4567"
                            required
                            style={{ flex: 1 }}
                            value={phoneLocalNumber}
                            onChange={(e) => setPhoneLocalNumber(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="city">City / Location *</label>
                        <input
                          type="text"
                          id="city"
                          placeholder="e.g. Boston, USA"
                          required
                          value={form.city}
                          onChange={(e) => setForm({ ...form, city: e.target.value })}
                        />
                      </div>
                    </div>

                    {applyKind === 'tutor' ? (
                      <>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="subject">Subject / Expertise *</label>
                          <input
                            type="text"
                            id="subject"
                            placeholder="e.g. SAT Math, AP Physics"
                            required
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="hourlyRate">Expected Hourly Rate (INR) <small>optional</small></label>
                          <input
                            type="text"
                            id="hourlyRate"
                            placeholder="e.g. ₹1,500/hr"
                            value={form.hourlyRate}
                            onChange={(e) => setForm({ ...form, hourlyRate: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="grades">Grades *</label>
                          <input
                            type="text"
                            id="grades"
                            placeholder="e.g. Grades 9-12"
                            required
                            value={form.grades}
                            onChange={(e) => setForm({ ...form, grades: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label id="test-prep-label">Test Prep Specializations *</label>
                          <div className="test-prep-dropdown" ref={testPrepRef}>
                            <button
                              type="button"
                              className={`test-prep-toggle${testPrepOpen ? ' is-open' : ''}`}
                              aria-haspopup="listbox"
                              aria-expanded={testPrepOpen}
                              aria-labelledby="test-prep-label"
                              onClick={() => setTestPrepOpen((o) => !o)}
                            >
                              <span className={form.testPrep.length ? '' : 'is-placeholder'}>
                                {form.testPrep.length ? form.testPrep.join(', ') : 'Select one or more'}
                              </span>
                            </button>
                            {testPrepOpen && (
                              <div className="test-prep-menu" role="listbox" aria-multiselectable="true">
                                {TEST_PREP_OPTIONS.map((option) => (
                                  <label key={option} className="checklist-item">
                                    <input
                                      type="checkbox"
                                      checked={form.testPrep.includes(option)}
                                      onChange={() => handleTestPrepChange(option)}
                                    />
                                    <span className="checklist-label">{option}</span>
                                  </label>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      </>
                    ) : (
                      <>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="opsRole">Role Applying For *</label>
                          <select
                            id="opsRole"
                            required
                            value={opsForm.role}
                            onChange={(e) => setOpsForm({ ...opsForm, role: e.target.value })}
                          >
                            <option value="">Select a role</option>
                            {opsRoles.map((r) => (
                              <option key={r} value={r}>{r}</option>
                            ))}
                            {opsForm.role && !opsRoles.includes(opsForm.role) && opsForm.role !== 'Other' && (
                              <option value={opsForm.role}>{opsForm.role}</option>
                            )}
                            <option value="Other">Other / open application</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="opsExperience">Work Experience *</label>
                          <select
                            id="opsExperience"
                            required
                            value={opsForm.experience}
                            onChange={(e) => setOpsForm({ ...opsForm, experience: e.target.value })}
                          >
                            <option value="">Select years</option>
                            <option>Fresher (0-1 years)</option>
                            <option>1-3 years</option>
                            <option>3-5 years</option>
                            <option>5+ years</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="opsCurrentRole">Current / Last Role and Company <small>optional</small></label>
                          <input
                            type="text"
                            id="opsCurrentRole"
                            placeholder="e.g. Admissions Counsellor, XYZ Education"
                            value={opsForm.currentRole}
                            onChange={(e) => setOpsForm({ ...opsForm, currentRole: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="opsAvailability">Availability *</label>
                          <select
                            id="opsAvailability"
                            required
                            value={opsForm.availability}
                            onChange={(e) => setOpsForm({ ...opsForm, availability: e.target.value })}
                          >
                            <option value="">Select one</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Freelance</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="opsSalary">Expected Monthly Salary (INR) <small>optional</small></label>
                          <input
                            type="text"
                            id="opsSalary"
                            placeholder="e.g. ₹40,000/month"
                            value={opsForm.salary}
                            onChange={(e) => setOpsForm({ ...opsForm, salary: e.target.value })}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="opsNotice">Notice Period <small>optional</small></label>
                          <select
                            id="opsNotice"
                            value={opsForm.notice}
                            onChange={(e) => setOpsForm({ ...opsForm, notice: e.target.value })}
                          >
                            <option value="">Select one</option>
                            <option>Immediate</option>
                            <option>15 days</option>
                            <option>30 days</option>
                            <option>60 days or more</option>
                          </select>
                        </div>
                      </div>
                      </>
                    )}

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="cv-upload" className="cv-upload-label">
                          Upload CV (PDF, DOC, DOCX - Max 5MB) *
                        </label>
                        <div
                          className={`file-uploader-box${cvDragOver ? ' is-dragover' : ''}`}
                          role="button"
                          tabIndex={0}
                          aria-label="Upload CV"
                          onClick={() => fileInputRef.current?.click()}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              fileInputRef.current?.click();
                            }
                          }}
                          onDragOver={(e) => {
                            e.preventDefault();
                            setCvDragOver(true);
                          }}
                          onDragLeave={() => setCvDragOver(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setCvDragOver(false);
                            const file = e.dataTransfer.files?.[0];
                            if (file) readCvFile(file);
                          }}
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            id="cv-upload"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                          />
                          <span className="file-drop-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="17 8 12 3 7 8" />
                              <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                          </span>
                          <span className="file-drop-text">
                            {cvFile ? (
                              <strong>{cvFile.name}</strong>
                            ) : (
                              <strong>
                                Drop your CV here or <u>browse</u>
                              </strong>
                            )}
                            <span className="file-name-display">
                              {cvFile ? 'Click to choose a different file' : 'PDF, DOC or DOCX, up to 5MB'}
                            </span>
                          </span>
                        </div>
                      </div>

                      {applyKind === 'tutor' ? (
                        <div className="form-group">
                          <label htmlFor="videoUrl">Tutoring Video Introduction Link *</label>
                          <input
                            type="url"
                            id="videoUrl"
                            placeholder="e.g. Loom, YouTube, Google Drive link"
                            required
                            value={form.videoUrl}
                            onChange={(e) => setForm({ ...form, videoUrl: e.target.value })}
                          />
                          <span className="field-hint">Please provide a 2-3 min video link explaining a concept or introducing yourself.</span>
                        </div>
                      ) : (
                        <div className="form-group">
                          <label htmlFor="opsLinkedin">LinkedIn Profile <small>optional</small></label>
                          <input
                            type="url"
                            id="opsLinkedin"
                            placeholder="https://linkedin.com/in/your-name"
                            value={opsForm.linkedin}
                            onChange={(e) => setOpsForm({ ...opsForm, linkedin: e.target.value })}
                          />
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="remarks">
                        {applyKind === 'ops' ? 'Why ACT SAT GO?' : 'Remarks (If Any)'} {applyKind === 'ops' && <small>optional</small>}
                      </label>
                      <textarea
                        id="remarks"
                        rows={3}
                        placeholder={applyKind === 'ops'
                          ? 'A few lines on why this role suits you...'
                          : 'Any additional details or schedule preferences...'}
                        value={form.remarks}
                        onChange={(e) => setForm({ ...form, remarks: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="form-submit-btn"
                    >
                      {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Application'}
                    </button>
                    <p className="form-next-step">
                      <strong>What happens next:</strong> we review every application and reply by email or WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
