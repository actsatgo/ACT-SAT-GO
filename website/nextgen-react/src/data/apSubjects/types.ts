import type { FaqItem } from '../faq';

/**
 * One AP subject page at /ap/:slug. Content is summarized from the subject's
 * free PDF guide (public/guides/ap/<guideSlug>.pdf), so the page and the PDF agree.
 */
export interface ApSubject {
  /** URL segment: /ap/<slug>. */
  slug: string;
  /** AP_GUIDES slug, for the PDF and cover image. */
  guideSlug: string;
  /** Full course name, e.g. "AP Biology". */
  name: string;
  metaTitle: string;
  description: string;
  /** ISO date the page content was last checked. */
  updated: string;
  /** The direct answer, shown first. */
  intro: string;
  /** 2027 exam date and session (or submission deadline), from College Board's published schedule. */
  examDate: string;
  /** Label before the date in the hero. Defaults to "2027 exam". */
  dateLabel?: string;
  /** Total exam length, e.g. "3 hours 15 minutes". */
  length: string;
  /** Four headline numbers for the hero. */
  glance: { value: string; label: string }[];
  structure: { section: string; weight: string; timing: string; what: string }[];
  /** Short notes about the exam format (digital/paper, calculator, reference sheets). */
  formatNotes: { title: string; text: string }[];
  /** Section I. `title` defaults to "The multiple-choice section", `kicker` to "Section I". */
  mcq: { kicker?: string; title?: string; intro: string; tips: string[] };
  /** What the course is organized into: "Unit" (default), "Period", "Skill", "Theme", "Big idea"... */
  unitLabel?: string;
  /** Heading for the units section, e.g. "The 9 periods, in plain English". */
  unitsTitle?: string;
  /** Number of the first unit, when the course continues another one (Physics 2 starts at Unit 9). */
  unitStart?: number;
  /** `weight` is the exam share; leave it empty when College Board publishes none. */
  units: { name: string; weight: string; about: string; skills: string }[];
  unitsNote?: string;
  /** Section II. `title` defaults to "The free-response section", `kicker` to "Section II". */
  frq: {
    kicker?: string;
    title?: string;
    intro: string;
    types: { label: string; title: string; text: string; tip?: string }[];
    timePlan: string;
  };
  habits: string[];
  traps: { title: string; text: string }[];
  roadmap: { when: string; focus: string; text: string }[];
  /** Last roadmap step. Defaults to "Exam day" on `examDate`. */
  roadmapEnd?: { when: string; focus: string; text: string };
  /** Recent score distribution; leave out for new courses with no national history yet. */
  scores?: { threePlus: string; fives: string };
  practice: { topic: string; question: string; choices: string[]; answer: string; why: string }[];
  /** Replace the standard date or length FAQ, e.g. for portfolio courses with no timed exam. */
  dateFaq?: FaqItem;
  lengthFaq?: FaqItem;
  /** Subject-specific questions, added after the standard date/length/score ones. */
  faq: FaqItem[];
}
