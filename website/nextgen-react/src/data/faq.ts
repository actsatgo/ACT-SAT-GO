// Parent FAQ shown on the homepage and emitted as FAQPage structured data.
// Keep answers factual — every line here is something a parent can hold us to.
// Answers state the fact itself (a price, a length) rather than pointing to
// another page, so search and AI answer engines can quote them directly.

import { SAT_PAGE, ACT_PAGE, AP_PAGE, type ProgramPageData } from './programs';

/** "$500 to $1,600", built from the same tiers the program pages show. */
function priceRange(data: ProgramPageData): string {
  const prices = data.tiers.map((t) => Number(t.price.replace(/[^0-9.]/g, ''))).filter((n) => n > 0);
  const fmt = (n: number) => `$${n.toLocaleString('en-US')}`;
  const lo = Math.min(...prices);
  const hi = Math.max(...prices);
  return lo === hi ? fmt(lo) : `${fmt(lo)} to ${fmt(hi)}`;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: 'What happens after I book the free diagnostic session?',
    a: 'An academic advisor confirms a time that suits your family, your child takes a short diagnostic with a tutor, and we walk you through the results and a recommended plan. There is no payment and no obligation — you only choose a plan if you want to continue.',
  },
  {
    q: 'Is tutoring really 1-on-1?',
    a: 'Yes. Every student works live, online, 1-on-1 with a tutor matched to their exact test or AP course. Homework is set after every session and reviewed before the next one, so no lesson is spent re-teaching.',
  },
  {
    q: 'How much does it cost?',
    a: `SAT programs cost ${priceRange(SAT_PAGE)}, ACT programs ${priceRange(ACT_PAGE)}, and AP programs ${priceRange(AP_PAGE)} per subject, depending on length and focus. The diagnostic session is free. After it, your advisor recommends the program that fits your child's target score and test date, so you only pay for what your child needs.`,
  },
  {
    q: 'Do you teach the Digital SAT and the enhanced ACT?',
    a: 'Yes. Our curriculum is built for the adaptive Digital SAT (Reading and Writing, and Math, with Desmos allowed on all of Math) and the enhanced ACT (131 core questions in about 2 hours, with Science optional).',
  },
  {
    q: 'How will I know tutoring is working?',
    a: 'Students take full-length practice tests with a score report after each one, and parents receive regular progress reports showing scores, completed homework and the focus for the coming weeks.',
  },
  {
    q: 'When are sessions held?',
    a: 'Sessions are scheduled around your family\'s time zone and school calendar, and run live online so your child can join from home.',
  },
  {
    q: 'Can I reschedule or cancel?',
    a: 'Yes. Our rescheduling, cancellation and refund terms are written out on our Refund & Cancellation Policy page, and your advisor confirms them before you pay for anything.',
  },
];

/** K-12 tutoring page FAQ (also emitted as FAQPage structured data). */
export const K12_FAQ: FaqItem[] = [
  {
    q: 'What grades do you tutor?',
    a: 'We tutor students from kindergarten through grade 12: elementary school (grades K–5), middle school (grades 6–8) and high school (grades 9–12).',
  },
  {
    q: 'Which subjects does K-12 tutoring cover?',
    a: 'Elementary students work on reading, writing, phonics, vocabulary and math fundamentals. Middle school covers math and pre-algebra, science, social studies, writing, grammar and study skills. High school covers advanced math and sciences, English and literature, AP course support and SAT or ACT preparation.',
  },
  {
    q: 'Is K-12 tutoring 1-on-1 and online?',
    a: 'Yes. Every session is live, online and 1-on-1 with a tutor, so your child can join from home and the pace follows their needs.',
  },
  {
    q: 'How do you decide what my child works on?',
    a: "We start with an assessment of your child's strengths, gaps and goals, then build a personalized learning plan. Progress is tracked as sessions go on, and the plan is adjusted as your child improves.",
  },
  {
    q: 'How do I get started?',
    a: 'Book a free diagnostic session. There is no payment and no obligation, and you receive a recommended learning plan for your child afterwards.',
  },
];

/** Free practice test page FAQ (also emitted as FAQPage structured data). */
export const FREE_TEST_FAQ: FaqItem[] = [
  {
    q: 'Is the practice test really free?',
    a: 'Yes. You create a free account and take one full-length practice test with a score report. There is no payment and no credit card is needed.',
  },
  {
    q: 'Which tests can I take?',
    a: 'You can take a full-length Digital SAT practice test, scored from 400 to 1600, or an ACT practice test, scored from 1 to 36.',
  },
  {
    q: 'What does the score report show?',
    a: 'Right after you submit, you get a scaled score with a section-by-section and topic-by-topic breakdown, accuracy and time analysis, and a question-by-question review showing your answer, the correct answer and an explanation.',
  },
  {
    q: 'Is it like the real exam?',
    a: 'The test runs on the same exam platform our enrolled students use, with section timers, a question palette, flag-for-review and a built-in calculator.',
  },
  {
    q: 'What should I do after the practice test?',
    a: 'Use the score report to see where points are being lost. If you would like a plan to close those gaps, you can book a free diagnostic session with a tutor.',
  },
];
