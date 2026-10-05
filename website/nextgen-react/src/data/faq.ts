// Parent FAQ shown on the homepage and emitted as FAQPage structured data.
// Keep answers factual — every line here is something a parent can hold us to.

export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: 'What happens after I book the free diagnostic lesson?',
    a: 'An academic advisor confirms a time that suits your family, your child takes a short diagnostic with a tutor, and we walk you through the results and a recommended plan. There is no payment and no obligation — you only choose a plan if you want to continue.',
  },
  {
    q: 'Is tutoring really 1-on-1?',
    a: 'Yes. Every student works live, online, 1-on-1 with a tutor matched to their exact test or AP course. Homework is set after every session and reviewed before the next one, so no lesson is spent re-teaching.',
  },
  {
    q: 'How much does it cost?',
    a: 'Program fees are listed on our SAT, ACT and AP pages. After the free diagnostic, your advisor recommends the program and number of hours that fit your child\'s target score and test date, so you only pay for what your child needs.',
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
