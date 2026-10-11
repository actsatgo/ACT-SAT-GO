// Long-form articles served at /resources/<slug>. These are prerendered to
// static HTML (scripts/prerender.mjs), listed in the sitemap and llms.txt, and
// emitted as Article + FAQPage structured data (schema.ts), so search engines
// and AI answer engines can read and quote them.
//
// Writing rules: open with a direct answer, keep facts checkable against
// College Board / ACT, and only quote ACT SAT GO prices that match
// data/programs.ts.

import type { FaqItem } from './faq';
import { SAT_PAGE, ACT_PAGE } from './programs';

/** Fee table rows built from the program pages, so prices never drift. */
const money = (p: string) => p.replace(/^\$(\d)(\d{3})$/, '$$$1,$2');
const feeRows = () =>
  [...SAT_PAGE.tiers, ...ACT_PAGE.tiers].map((t) => [t.name, t.weeks.replace(/\s*–\s*/, ' to ').replace('Weeks', 'weeks'), money(t.price)]);

export interface ArticleTable {
  head: string[];
  rows: string[][];
}

export interface ArticleSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  table?: ArticleTable;
}

export interface Article {
  slug: string;
  /** Visible H1. */
  title: string;
  /** <title> tag. */
  metaTitle: string;
  description: string;
  /** ISO date (YYYY-MM-DD) shown as "Last updated" and used in schema. */
  published: string;
  updated: string;
  tag: string;
  /** The direct answer, shown first on the page. */
  answer: string;
  sections: ArticleSection[];
  faq: FaqItem[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'sat-vs-act',
    title: 'SAT vs ACT in 2026: Which Test Should You Take?',
    metaTitle: 'SAT vs ACT in 2026: Which Test Should You Take? | ACT SAT GO',
    description:
      'The Digital SAT and the enhanced ACT compared side by side: length, sections, timing, scoring and calculator rules, plus a simple way to decide which test suits your child.',
    published: '2026-10-11',
    updated: '2026-10-11',
    tag: 'SAT & ACT',
    answer:
      'US colleges accept the SAT and the ACT equally, so the right test is the one your child scores higher on. The Digital SAT is adaptive and gives more time per question; the enhanced ACT is a fixed test with more questions in less time and an optional Science section. The fastest way to decide is to take one full practice test of each and compare the results.',
    sections: [
      {
        heading: 'The two tests side by side',
        table: {
          head: ['', 'Digital SAT', 'Enhanced ACT'],
          rows: [
            ['Total length', 'About 2 hours 14 minutes', 'About 2 hours 5 minutes (plus 40 minutes with Science)'],
            ['Sections', 'Reading and Writing; Math', 'English; Math; Reading; Science (optional)'],
            ['Questions', '98 (54 Reading and Writing, 44 Math)', '131 core (50 English, 45 Math, 36 Reading), plus 40 Science'],
            ['Format', 'Adaptive: the second module of each section depends on how you did on the first', 'Fixed: every student sees the same questions'],
            ['Score range', '400 to 1600', '1 to 36 composite (average of English, Math and Reading)'],
            ['Calculator', 'Allowed on all of Math, with Desmos built in', 'Allowed on all of Math'],
          ],
        },
      },
      {
        heading: 'Time per question',
        paragraphs: [
          'Pacing is the biggest practical difference. The Digital SAT gives about 71 seconds per Reading and Writing question and about 95 seconds per Math question. The enhanced ACT gives about 42 seconds per English question and about 67 seconds per Math or Reading question.',
          'Students who work carefully but slowly often prefer the SAT. Students who read quickly and stay accurate under time pressure often do well on the ACT.',
        ],
      },
      {
        heading: 'What each test feels like',
        list: [
          'Reading: the SAT uses many short passages, each with one question. The ACT uses four longer passages, each with several questions.',
          'Writing and grammar: both test grammar, punctuation and clear expression. The SAT mixes these into Reading and Writing; the ACT has its own English section.',
          'Math: both cover algebra, advanced math, geometry, trigonometry and data. The ACT tends to include a wider range of topics, while the SAT goes deeper on algebra and data analysis.',
          'Science: the SAT has no science section, though some passages use science topics. The ACT Science section is optional and is scored separately from the composite.',
        ],
      },
      {
        heading: 'How to choose in four steps',
        list: [
          'Check the colleges on your list. Almost all accept either test, but confirm whether any of them require or recommend ACT Science.',
          'Take one full-length, timed practice test of each. Official SAT practice tests are free in College Board’s Bluebook app, and you can take a free SAT or ACT practice test on our site.',
          'Compare the results on equal terms using a concordance table, and note which test felt more comfortable for pacing.',
          'Commit to one test and prepare for it properly. Splitting preparation between both tests usually slows progress on each.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do colleges prefer the SAT or the ACT?',
        a: 'No. US colleges that consider test scores accept the SAT and the ACT equally and do not prefer one over the other. Choose the test your child scores higher on, and check whether any college on your list has a specific rule about ACT Science.',
      },
      {
        q: 'Is the ACT Science section required?',
        a: 'No. On the enhanced ACT, Science is optional and does not count toward the 1 to 36 composite score. Some colleges and STEM programs may still ask for it, so check the requirements of each college on your list before deciding.',
      },
      {
        q: 'Is the Digital SAT easier than the ACT?',
        a: 'Neither test is easier overall. The Digital SAT gives more time per question and uses short passages, while the ACT asks more questions in less time. Many students find one test noticeably more comfortable, which is why taking a practice test of each is the best way to decide.',
      },
      {
        q: 'Can my child take both the SAT and the ACT?',
        a: 'Yes, but it is usually better to pick one after a practice test of each and prepare for it fully. Preparing for both at once splits study time, and most students reach a higher score by focusing on the test that suits them.',
      },
    ],
  },
  {
    slug: 'sat-act-tutoring-cost',
    title: 'How Much Does SAT and ACT Tutoring Cost in 2026?',
    metaTitle: 'How Much Does SAT & ACT Tutoring Cost in 2026? | ACT SAT GO',
    description:
      'What SAT and ACT tutoring costs, what drives the price, how 1-on-1 tutoring compares with classes and self-study, and what ACT SAT GO programs cost.',
    published: '2026-10-11',
    updated: '2026-10-11',
    tag: 'SAT & ACT',
    answer:
      'SAT and ACT tutoring costs vary widely, from free self-study resources to private 1-on-1 tutors charging several hundred dollars an hour. The price depends mostly on the format (self-study, group class or 1-on-1), the tutor’s experience and the number of hours. At ACT SAT GO, live 1-on-1 online programs cost $500 to $1,600 for the SAT and $599 to $1,299 for the ACT, and the first diagnostic lesson is free.',
    sections: [
      {
        heading: 'What drives the price',
        list: [
          'Format: 1-on-1 tutoring costs more than a group class, and a group class costs more than self-study, because the student gets more individual attention.',
          'Tutor experience: tutors with proven score results and years of test-specific experience charge more than general homework tutors.',
          'Number of hours: a full preparation program over several months costs more than a short refresher before the test.',
          'What is included: practice tests, score reports, homework review and parent updates add value that an hourly rate alone does not show.',
        ],
      },
      {
        heading: 'Comparing the main options',
        table: {
          head: ['Option', 'Typical cost', 'Best for'],
          rows: [
            ['Self-study (Bluebook, Khan Academy, official guides)', 'Free to low cost', 'Motivated students who need structure less than practice'],
            ['Group classes', 'Moderate, usually a fixed course fee', 'Students who learn well at a set pace with others'],
            ['1-on-1 tutoring', 'Highest, by the hour or by program', 'Students with a specific target score, a close test date, or gaps in particular topics'],
          ],
        },
      },
      {
        heading: 'ACT SAT GO program fees',
        paragraphs: [
          'All ACT SAT GO programs are live, 1-on-1 and online. Fees are listed in full on our SAT and ACT pages.',
        ],
        table: {
          head: ['Program', 'Length', 'Fee'],
          rows: feeRows(),
        },
      },
      {
        heading: 'Questions to ask before you pay any tutor',
        list: [
          'Will my child take a diagnostic test first, and will I see the results?',
          'Is the tutor a specialist in this exact test (Digital SAT or enhanced ACT)?',
          'How many full-length practice tests are included, and do they come with score reports?',
          'How will I see progress between sessions?',
          'What is the rescheduling, cancellation and refund policy?',
        ],
      },
    ],
    faq: [
      {
        q: 'Is SAT or ACT tutoring worth the cost?',
        a: 'Tutoring is most worth it when your child has a specific target score, a test date coming up, or clear gaps that self-study has not fixed. A diagnostic test shows how far your child is from their target, which tells you how much help is actually needed before you spend anything.',
      },
      {
        q: 'How many hours of SAT or ACT tutoring does a student need?',
        a: 'It depends on the gap between the current score and the target. A small improvement may need a few weeks of focused sessions, while a large one usually needs a full program of three to four months with regular practice tests. A diagnostic is the best way to estimate it.',
      },
      {
        q: 'Are there free ways to prepare for the SAT and ACT?',
        a: 'Yes. College Board offers free full-length Digital SAT practice tests in its Bluebook app and free practice through Khan Academy, and ACT publishes free practice material. You can also take a free timed SAT or ACT practice test with a score report on the ACT SAT GO website.',
      },
    ],
  },
  {
    slug: 'how-long-to-study-for-digital-sat',
    title: 'How Long Should You Study for the Digital SAT?',
    metaTitle: 'How Long Should You Study for the Digital SAT? | ACT SAT GO',
    description:
      'How many weeks and hours to study for the Digital SAT, based on how many points you need to gain, plus a step-by-step plan and the free official resources to use.',
    published: '2026-10-11',
    updated: '2026-10-11',
    tag: 'SAT',
    answer:
      'Most students preparing for the Digital SAT from the start need about 12 to 16 weeks of steady study, at roughly 4 to 6 hours a week. A student who only needs a small improvement may be ready in 4 to 6 weeks. The right amount depends on the gap between your current score, measured with a full practice test, and your target score.',
    sections: [
      {
        heading: 'Study time by points you need to gain',
        paragraphs: [
          'This is the rule of thumb our tutors use when planning a student’s preparation. Measure the starting point with a full-length, timed practice test.',
        ],
        table: {
          head: ['Points to gain', 'Suggested prep time', 'Weekly study'],
          rows: [
            ['Up to 50 points', '4 to 6 weeks', '3 to 5 hours'],
            ['50 to 150 points', '8 to 12 weeks', '4 to 6 hours'],
            ['More than 150 points', '12 to 16 weeks or longer', '5 to 8 hours'],
          ],
        },
      },
      {
        heading: 'A simple plan that works',
        list: [
          'Take a full-length, timed practice test to get your baseline score.',
          'Pick a test date that leaves enough weeks for your gap, and ideally time for a second attempt.',
          'Spend most of your time on the question types you miss most often, not on what you already know.',
          'Take a full-length practice test every two to three weeks to check progress and build stamina.',
          'Review every mistake: note why you got it wrong and redo similar questions.',
          'In the last week, review rather than learn new material, and rest well before test day.',
        ],
      },
      {
        heading: 'Free official resources',
        list: [
          'Bluebook: College Board’s testing app, which includes full-length adaptive Digital SAT practice tests.',
          'Khan Academy: free official SAT practice, organised by skill.',
          'ACT SAT GO free practice test: a timed SAT or ACT test with a section and topic score report.',
        ],
      },
      {
        heading: 'Signs you need more time',
        list: [
          'Your practice scores have stayed flat across two or three full tests.',
          'You regularly run out of time in either section.',
          'The same topics keep appearing in your mistakes.',
        ],
        paragraphs: [
          'If any of these apply, push the test date back or get targeted help on the weak areas rather than simply taking more practice tests.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I prepare for the Digital SAT in one month?',
        a: 'Yes, if you only need a modest improvement and can study consistently. A focused 4 to 6 week plan works best when it targets the question types you miss most and includes at least two full-length practice tests to build pacing and stamina.',
      },
      {
        q: 'How many hours a week should I study for the SAT?',
        a: 'Most students make good progress with about 4 to 6 hours a week, including one full practice test every two to three weeks. Students aiming for a large score increase, or with less time before the test, may need 6 to 8 hours a week.',
      },
      {
        q: 'When should I start studying for the SAT?',
        a: 'Start about three to four months before your planned test date, which for many students is the summer before or the autumn of junior year. Starting early leaves time for a second attempt if the first score falls short of your target.',
      },
      {
        q: 'How many practice tests should I take before the SAT?',
        a: 'Most students benefit from four to eight full-length, timed practice tests spread across their preparation. Reviewing every mistake after each test matters more than the number of tests you take.',
      },
    ],
  },
];

export const ARTICLE_BY_SLUG: Record<string, Article> = Object.fromEntries(ARTICLES.map((a) => [a.slug, a]));

export const articlePath = (slug: string) => `/resources/${slug}`;

/** "2026-10-11" -> "October 11, 2026" (UTC, so server and browser agree). */
export function formatArticleDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
