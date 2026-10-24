import type { FaqItem } from './faq';

// Web versions of the SAT and ACT PDF guides (public/guides/sat-act/), served at
// /sat/exam-guide and /act/exam-guide. Content follows the PDFs; keep the two in step.

interface Stat {
  value: string;
  label: string;
}

interface Table {
  title?: string;
  head: string[];
  rows: string[][];
  note?: string;
}

export interface TestSection {
  id: string;
  kicker: string;
  title: string;
  intro: string;
  stats: Stat[];
  domainsTitle: string;
  domainsNote?: string;
  domains: { name: string; share: string; about: string; skills: string }[];
  strategies: string[];
  table?: Table;
  notes?: { title: string; text: string }[];
  tip: string;
}

export interface PracticeQuestion {
  topic: string;
  question: string;
  choices: string[];
  /** Answer letters; the ACT alternates A–D and F–J. */
  letters?: string[];
  answer: string;
  why: string;
}

export interface TestGuidePage {
  slug: 'sat' | 'act';
  guideSlug: string;
  name: string;
  metaTitle: string;
  description: string;
  updated: string;
  intro: string;
  nextDate: string;
  glance: Stat[];
  structure: { section: string; timing: string; what: string }[];
  formatNotes: { title: string; text: string }[];
  sections: TestSection[];
  traps: { title: string; text: string }[];
  roadmap: { when: string; focus: string; text: string }[];
  finalFour: Table;
  roadmapNote: string;
  practice: PracticeQuestion[];
  scoreIntro: string;
  scoreStats: Stat[];
  scoreTable?: Table;
  scoreTip: string;
  scoreNotes?: { title: string; text: string }[];
  dates: Table;
  resources: { name: string; where: string; text: string; free: boolean }[];
  checklist: string[];
  checklistNote: string;
  faq: FaqItem[];
  cta: { title: string; text: string };
}

export const SAT_GUIDE: TestGuidePage = {
  slug: 'sat',
  guideSlug: 'sat-exam-guide-act-sat-go',
  name: 'SAT',
  metaTitle: 'Digital SAT Exam Guide 2026–27: Format, Scoring, Study Plan & Practice | ACT SAT GO',
  description:
    'The digital SAT explained: both sections module by module, how adaptive scoring works, all eight content domains, 10 common traps, a 12-week study plan, 2026–27 test dates and practice questions.',
  updated: '2026-10-24',
  intro:
    'The digital SAT is 2 hours 14 minutes on a laptop or tablet in College Board’s Bluebook app: Reading and Writing (54 questions, 64 minutes), a 10-minute break, then Math (44 questions, 70 minutes). Each section has two modules, and how you do on the first decides how hard the second is. Scores run from 400 to 1600, and there is no penalty for wrong answers.',
  nextDate: 'November 7, 2026 (late registration closes October 27)',
  glance: [
    { value: '2 hr 14', label: '64 + 70 minutes, plus a 10-minute break' },
    { value: '54 + 44', label: 'Reading and Writing + Math questions' },
    { value: '1600', label: 'top score: two sections of 200–800 each' },
    { value: '1029', label: 'average total score, class of 2025' },
  ],
  structure: [
    {
      section: '1 · Reading and Writing',
      timing: '54 questions · 64 min (2 × 32) · 200–800',
      what: 'Short passages of 25–150 words, each with one question. Texts come from literature, history, social studies, the humanities and science, and some include a table or graph. Every question is multiple choice with four options.',
    },
    {
      section: 'Break',
      timing: '10 minutes',
      what: 'Between the sections. You can’t go back to Reading and Writing once Math starts.',
    },
    {
      section: '2 · Math',
      timing: '44 questions · 70 min (2 × 35) · 200–800',
      what: 'About 75% multiple choice and 25% student-produced response, where you type the answer. A calculator is allowed on every question, and the Desmos graphing calculator is built in. About 30% of questions use a real-world context.',
    },
  ],
  formatNotes: [
    {
      title: 'Module 1 decides Module 2',
      text: 'Module 1 mixes easy, medium and hard questions. Do well and you get a harder Module 2, which unlocks the top of the score range. Inside a module you can skip, flag and return to any question.',
    },
    {
      title: 'A few questions don’t count',
      text: 'Each section includes a small number of pretest questions that College Board is trying out. They don’t affect your score, and you can’t tell which ones they are, so give every question your best effort.',
    },
  ],
  sections: [
    {
      id: 'reading-writing',
      kicker: 'Section 1',
      title: 'The Reading and Writing section',
      intro:
        'Two 32-minute modules of 27 questions each. Every question has its own short passage, so you never have to hold a long text in your head for ten questions. Questions come in a set order: Craft and Structure, Information and Ideas, Standard English Conventions, then Expression of Ideas, with the easier questions first in each group.',
      stats: [
        { value: '27', label: 'questions per module' },
        { value: '~71 sec', label: 'per question' },
        { value: '25–150', label: 'words per passage' },
        { value: '0', label: 'points lost for a wrong answer' },
      ],
      domainsTitle: 'The four domains, in plain English',
      domainsNote:
        'Conventions and Expression of Ideas are almost half the section and follow learnable rules, so they are the fastest points to raise.',
      domains: [
        {
          name: 'Craft and Structure',
          share: '~28%',
          about: 'How and why a text is written.',
          skills: 'choose the most precise word (Words in Context), name what a sentence does in a passage, and predict how one author would respond to another (Cross-Text Connections).',
        },
        {
          name: 'Information and Ideas',
          share: '~26%',
          about: 'What a text says and what it proves.',
          skills: 'find a text’s main idea, choose the quote or data that best supports a claim (Command of Evidence), and finish a passage with its most logical conclusion (Inferences).',
        },
        {
          name: 'Standard English Conventions',
          share: '~26%',
          about: 'The rules of grammar and punctuation.',
          skills: 'join and separate clauses with the right punctuation (Boundaries), make subjects and verbs agree, and choose the right tense, pronoun and possessive (Form, Structure, and Sense).',
        },
        {
          name: 'Expression of Ideas',
          share: '~20%',
          about: 'Revising writing so it meets a goal.',
          skills: 'use only the notes that accomplish a stated goal (Rhetorical Synthesis), and choose the transition that shows the right logical link.',
        },
      ],
      strategies: [
        'Answer from the text, not from what you know. The right choice is always supported by the passage, even if another choice is a true fact.',
        'Predict before you look. On words-in-context questions, say your own word for the blank, then match it to a choice.',
        'Read the goal first on “notes” questions. Rhetorical synthesis asks you to meet a stated goal; pick the choice that does exactly that.',
        'Bank the grammar. Once you know the rules, Conventions questions take 30–45 seconds. Spend the time you save on inferences.',
        'Use the Bluebook tools. Highlight, cross out choices and flag questions to revisit before the module ends.',
        'Watch for extreme words. “Always”, “proves” and “entirely” are rarely supported by a 100-word passage.',
        'Two minutes is the limit. If a question passes two minutes, pick your best guess, flag it and move on.',
        'Read tables carefully. For quantitative evidence, check the exact row, column and units the claim refers to.',
      ],
      table: {
        title: 'Grammar rules cheat sheet',
        head: ['Rule', 'Example'],
        rows: [
          ['A semicolon works like a period', 'It joins two complete sentences: The lab closed early; the samples were already frozen.'],
          ['A colon follows a complete sentence', 'It introduces a list, an explanation or an example: She had one goal: finishing the race.'],
          ['Comma + FANBOYS joins sentences', 'for, and, nor, but, or, yet, so. A comma alone between two sentences is a comma splice.'],
          ['Extra information gets a matching pair', 'Two commas or two dashes around a non-essential phrase, never one of each.'],
          ['Skip the phrase to find the subject', 'The list of supplies is long. The subject is “list”, not “supplies”.'],
          ['No comma between subject and verb', 'The scientists who ran the study found… (no comma before “found”).'],
          ['Possessives and contractions', 'its = belonging to it; it’s = it is; the researchers’ data = belonging to several researchers.'],
          ['Modifiers touch what they describe', 'Walking home, Maya saw a fox, not Walking home, a fox was seen by Maya.'],
        ],
        note: 'Transitions to know. Contrast: however, nevertheless, by contrast, still. Result: therefore, thus, consequently. Addition: moreover, furthermore, in addition. Example: for example, for instance. Similarity: similarly, likewise. Time: meanwhile, subsequently, finally.',
      },
      tip: 'Hard questions in Module 1 matter most. Getting them right is what sends you to the harder Module 2.',
    },
    {
      id: 'math',
      kicker: 'Section 2',
      title: 'The Math section',
      intro:
        'Two 35-minute modules of 22 questions each. You can use a calculator on every question, and the Desmos graphing calculator is built into Bluebook. Questions get harder as a module goes on, but early questions count the same, so don’t rush them.',
      stats: [
        { value: '22', label: 'questions per module' },
        { value: '~95 sec', label: 'per question' },
        { value: '~25%', label: 'student-produced responses' },
        { value: '100%', label: 'of questions allow a calculator' },
      ],
      domainsTitle: 'The four domains, in plain English',
      domainsNote:
        'Algebra and Advanced Math are 70% of the section. Fluency with linear equations, systems, quadratics and function notation moves your score faster than anything else.',
      domains: [
        {
          name: 'Algebra',
          share: '~35%',
          about: 'Linear relationships, in every form.',
          skills: 'write an equation from a word problem, explain slope and intercept in context, and tell when a system has no solution or infinitely many.',
        },
        {
          name: 'Advanced Math',
          share: '~35%',
          about: 'Nonlinear equations and functions.',
          skills: 'factor and complete the square, use the vertex and discriminant, model exponential growth and decay, and shift or stretch graphs.',
        },
        {
          name: 'Problem-Solving & Data Analysis',
          share: '~15%',
          about: 'Numbers from the real world.',
          skills: 'find percent change, read scatterplots and lines of best fit, compare mean and median with outliers, and use a two-way table.',
        },
        {
          name: 'Geometry & Trigonometry',
          share: '~15%',
          about: 'Shapes, angles and right-triangle trig.',
          skills: 'use similar triangles and the Pythagorean theorem, apply SOH-CAH-TOA and radians, and find arc length, sector area and a circle’s equation.',
        },
      ],
      strategies: [
        'Read the last line twice. Are they asking for x, or for 2x + 1? Many wrong choices are right answers to a different question.',
        'Plug in or back-solve. When algebra gets messy, test the answer choices or pick easy numbers for variables.',
        'Know the reference sheet by heart. It’s there on test day, but opening it costs time.',
        'Check units in word problems. Convert minutes to hours, or percents to decimals, before you calculate.',
        'Let Desmos do the algebra: graph both sides of an equation and click the intersection, click a parabola’s vertex or x-intercepts, add a slider for an unknown constant like k, or run y₁ ~ mx₁ + b on a table for a line of best fit.',
      ],
      table: {
        title: 'Formulas to know cold',
        head: ['Idea', 'Formula', 'When it shows up'],
        rows: [
          ['Slope', 'm = (y₂ − y₁) / (x₂ − x₁)', 'Lines through two points; rate of change in context'],
          ['Vertex of a parabola', 'x = −b / (2a)', 'Maximum or minimum of a quadratic'],
          ['Discriminant', 'b² − 4ac: >0 two, =0 one, <0 no real solutions', '“How many solutions?” and “for what value of k?”'],
          ['Sum and product of roots', 'sum = −b/a, product = c/a', 'Quadratics you’d rather not solve'],
          ['Exponential model', 'y = a(1 ± r)ᵗ', 'Growth or decay by a percent each period'],
          ['Percent change', '(new − old) / old × 100', 'Prices, populations, data tables'],
          ['Circle', '(x − h)² + (y − k)² = r²', 'Complete the square to find center and radius'],
          ['Arcs and sectors', 'arc = (θ/360)·2πr, sector = (θ/360)·πr²', 'Circle questions in degrees; π radians = 180°'],
          ['Complementary angles', 'sin x° = cos(90 − x)°', 'Trig questions that look impossible at first'],
        ],
      },
      notes: [
        {
          title: 'Typing your answer',
          text: 'Up to 5 characters for a positive answer, 6 for a negative one. Fractions or decimals are both fine, but not mixed numbers: type 7/2 or 3.5, not 3 1/2. Round or cut long decimals at the fourth digit (2/3 can be .6666 or .6667). No units, %, $ or commas.',
        },
      ],
      tip: 'Many system and quadratic questions take 15 seconds in Desmos and two minutes by hand.',
    },
  ],
  traps: [
    { title: 'Answering the wrong question', text: 'You solve for x, but the question asked for x + 3 or 2x. Reread the last line before you choose.' },
    { title: 'True but off-target choices', text: 'On Reading and Writing, a choice can be accurate and still not answer the question or meet the goal.' },
    { title: 'Bringing in outside knowledge', text: 'If the passage doesn’t support it, it’s wrong, even if it’s a real fact you learned in class.' },
    { title: 'Comma splices', text: 'Two complete sentences need a period, semicolon, or comma + FANBOYS. A comma alone is never enough.' },
    { title: 'Extreme answer choices', text: '“Always”, “proves” and “entirely” are rarely backed up by a short passage. Prefer measured claims.' },
    { title: 'Ignoring units', text: 'Minutes vs hours, percent vs decimal, feet vs inches. Convert before you calculate.' },
    { title: 'Rushing Module 1', text: 'Module 1 decides how high you can score. Accuracy there matters more than finishing early.' },
    { title: 'Typing an invalid answer', text: 'Mixed numbers like 3 1/2 can be misread. Enter 7/2 or 3.5, and leave off units and % signs.' },
    { title: 'Skipping Desmos', text: 'Many system and quadratic questions take 15 seconds in Desmos and two minutes by hand.' },
    { title: 'Leaving blanks', text: 'There’s no penalty for wrong answers. Guess, flag the question, and return if time allows.' },
  ],
  roadmap: [
    { when: 'Week 1', focus: 'Baseline test', text: 'Take a full practice test in Bluebook under real timing. Log every miss by domain and skill in a mistake journal.' },
    { when: 'Weeks 2–4', focus: 'Grammar and Algebra', text: 'Learn the conventions rules and the linear-equation toolkit. Do 20 Question Bank questions a day.' },
    { when: 'Weeks 5–7', focus: 'Advanced Math and evidence', text: 'Quadratics, exponentials, Information and Ideas. Learn the Desmos moves. One timed module each weekend.' },
    { when: 'Week 8', focus: 'Second full test', text: 'Compare each domain with Week 1. Re-aim the next four weeks at what’s still weakest.' },
    { when: 'Weeks 9–10', focus: 'Push the ceiling', text: 'Filter the Question Bank to hard questions in Craft and Structure, data analysis, geometry and trig.' },
  ],
  finalFour: {
    head: ['When', 'Focus', 'Target'],
    rows: [
      ['4 weeks out', 'Full practice test, then review every miss by domain', 'Name your three weakest skills'],
      ['3 weeks out', 'Drill those three skills; one timed module per section', '80% or better on those skills'],
      ['2 weeks out', 'Full practice test at the time of day you’ll test', 'Finish every module on time'],
      ['Final week', 'Light review of grammar rules and formulas; complete exam setup in Bluebook', 'Rest the night before'],
    ],
  },
  roadmapNote:
    'Keep a mistake journal: for every miss, write the domain, why you missed it (didn’t know it, misread, ran out of time) and the rule that would have saved you. Reread it before each full test.',
  practice: [
    {
      topic: 'R&W · Words in Context',
      question:
        'Although the committee’s report was praised for its thoroughness, critics noted that its recommendations were largely ______: they restated policies already in place rather than proposing anything new.',
      choices: ['innovative', 'redundant', 'controversial', 'ambiguous'],
      answer: 'B',
      why: 'The colon explains the blank: the recommendations “restated policies already in place.” Repeating what already exists is redundant. “Innovative” is the opposite, and nothing suggests controversy or unclear meaning.',
    },
    {
      topic: 'R&W · Boundaries',
      question:
        'In 1928, Alexander Fleming noticed that mold had killed the bacteria in one of his culture ______ this accidental observation eventually led to the development of penicillin.',
      choices: ['dishes,', 'dishes;', 'dishes', 'dishes, and,'],
      answer: 'B',
      why: 'Both sides are complete sentences, so a semicolon joins them. A is a comma splice, C is a run-on, and D adds an incorrect comma after “and.”',
    },
    {
      topic: 'R&W · Transitions',
      question: 'Coral reefs cover less than 1% of the ocean floor. ______ they support roughly a quarter of all known marine species.',
      choices: ['Therefore,', 'Similarly,', 'Nevertheless,', 'For instance,'],
      answer: 'C',
      why: 'A tiny area supporting a huge share of species is a surprising contrast, and “nevertheless” signals exactly that. “Therefore” would mean the small area caused the diversity.',
    },
    {
      topic: 'Math · Advanced Math',
      question: 'The function f(x) = 2x² − 12x + c, where c is a constant, has a minimum value of 5. What is the value of c?',
      choices: ['5', '18', '23', '41'],
      answer: 'C',
      why: 'The minimum is at the vertex, x = −(−12)/(2·2) = 3. f(3) = 18 − 36 + c = c − 18 = 5, so c = 23.',
    },
    {
      topic: 'Math · Problem-Solving & Data',
      question: 'The price of a jacket is increased by 20%. The new price is then decreased by 25%. The final price is what percent of the original price?',
      choices: ['85%', '90%', '95%', '105%'],
      answer: 'B',
      why: 'Percent changes multiply: 1.20 × 0.75 = 0.90, or 90%. Adding them (+20% − 25% = −5%) gives the trap answer, 95%.',
    },
  ],
  scoreIntro: 'Your total score is the sum of the Reading and Writing and Math section scores, each from 200 to 800.',
  scoreStats: [
    { value: '1029', label: 'average total score, class of 2025 (about 2 million test takers)' },
    { value: '1200', label: '75th percentile: scoring here beats about 3 in 4 test takers' },
    { value: '850–1200', label: 'the middle half of total scores (25th to 75th percentile)' },
  ],
  scoreTip:
    'Set your own target from your college list. Look up each college’s middle-50% SAT range (in its Common Data Set, section C9, or admissions page) and aim for the upper half of that range.',
  scoreNotes: [
    {
      title: 'Score Choice and superscoring',
      text: 'You choose which test dates to send, though some colleges ask for all scores. Many colleges superscore, combining your best section scores across dates.',
    },
    {
      title: 'Free score reports',
      text: 'Registration includes free score sends to four colleges, usable until 9 days after your test date.',
    },
  ],
  dates: {
    title: '2026–27 SAT weekend test dates',
    head: ['Test date', 'Register by', 'Late registration (fee)', 'Good for'],
    rows: [
      ['November 7, 2026', 'October 23', 'October 27', 'Seniors’ last early-round option at many colleges'],
      ['December 5, 2026', 'November 20', 'November 24', 'Regular-decision seniors; juniors’ first try'],
      ['March 6, 2027', 'February 19', 'February 23', 'Juniors after winter prep'],
      ['May 1, 2027', 'April 16', 'April 20', 'Juniors; plan around AP exams'],
      ['June 5, 2027', 'May 21', 'May 25', 'Juniors’ retake before summer'],
    ],
    note: 'Dates from College Board’s 2026–27 calendar; always confirm on sat.collegeboard.org before you register. Many schools also offer the SAT free on a school day.',
  },
  resources: [
    { name: 'Bluebook practice tests', where: 'bluebook.collegeboard.org', text: 'Full-length adaptive practice tests that look and score like the real SAT. Review answers in My Practice afterward.', free: true },
    { name: 'Official SAT Practice on Khan Academy', where: 'khanacademy.org/digital-sat', text: 'Free lessons and practice for every skill, built with College Board. Great for Weeks 2–7.', free: true },
    { name: 'SAT Suite Question Bank', where: 'satsuitequestionbank.collegeboard.org', text: 'Real-style questions you can filter by domain, skill and difficulty. Use it to drill hard questions.', free: true },
    { name: 'Desmos graphing calculator', where: 'desmos.com/calculator', text: 'The same calculator that’s built into Bluebook. Practice until the moves are automatic.', free: true },
    { name: 'SAT Skills Insight', where: 'satsuite.collegeboard.org', text: 'Shows the skills students in each score band usually have, so you can see what the next band needs.', free: true },
    { name: 'ACT SAT GO free practice tests', where: 'actsatgo.com/free-test', text: 'Timed practice tests with a score report, plus a free diagnostic session with a tutor.', free: true },
  ],
  checklist: [
    'Bluebook installed and updated, with exam setup completed in the days before the test',
    'Admission ticket from Bluebook, printed or saved',
    'Acceptable photo ID',
    'Device fully charged, plus a charger or power cord',
    'Pencils or pens for the scratch paper you’ll be given',
    'An approved calculator (optional; Desmos is built in)',
    'Snack and water for the break',
    'Arrive by 7:45 a.m.; doors usually close at 8:00',
    'Phone off and put away for the whole test',
    'A good night’s sleep. No new material the night before.',
  ],
  checklistNote:
    'Testing with accommodations? Apply through your school’s SSD coordinator well before your registration deadline. Approved accommodations carry over to future SAT dates.',
  faq: [
    {
      q: 'How long is the digital SAT?',
      a: '2 hours 14 minutes of testing: Reading and Writing (64 minutes) and Math (70 minutes), with a 10-minute break between them.',
    },
    {
      q: 'How is the digital SAT scored?',
      a: 'Reading and Writing and Math are each scored from 200 to 800, for a total of 400 to 1600. The test is adaptive by module: your performance on Module 1 of each section decides whether Module 2 is easier or harder, and the harder Module 2 unlocks the top of the score range.',
    },
    {
      q: 'Is there a penalty for wrong answers on the SAT?',
      a: 'No. Wrong answers and blanks score the same, so answer every question, even with seconds left.',
    },
    {
      q: 'Can you use a calculator on the whole SAT Math section?',
      a: 'Yes. A calculator is allowed on every Math question, and the Desmos graphing calculator is built into the Bluebook app. You can also bring an approved calculator.',
    },
    {
      q: 'What is a good SAT score?',
      a: 'The class of 2025 averaged 1029, and 1200 is about the 75th percentile. A good score depends on your colleges: look up each one’s middle-50% SAT range and aim for the upper half.',
    },
    {
      q: 'When are the 2026–27 SAT test dates?',
      a: 'November 7 and December 5, 2026, then March 6, May 1 and June 5, 2027. Registration closes about two weeks before each date; confirm on sat.collegeboard.org.',
    },
    {
      q: 'How long should you study for the SAT?',
      a: 'About 12 weeks of three or four focused sessions a week works for most students: a baseline test, foundations in grammar and algebra, a checkpoint test in Week 8, then hard questions and full tests.',
    },
  ],
  cta: {
    title: 'Aiming for 1500+? Get a personal SAT plan.',
    text: 'Book a free diagnostic session. We’ll find your weakest skills, review your practice tests and give you a week-by-week plan to test day.',
  },
};

const ACT_LETTERS_1 = ['A', 'B', 'C', 'D'];
const ACT_LETTERS_2 = ['F', 'G', 'H', 'J'];

export const ACT_GUIDE: TestGuidePage = {
  slug: 'act',
  guideSlug: 'act-exam-guide-act-sat-go',
  name: 'ACT',
  metaTitle: 'Enhanced ACT Exam Guide 2026–27: Format, Scoring, Study Plan & Practice | ACT SAT GO',
  description:
    'The enhanced ACT explained: English, Math and Reading section by section, optional Science and Writing, formulas to memorize, 10 common traps, a 12-week study plan, 2026–27 test dates and practice questions.',
  updated: '2026-10-24',
  intro:
    'The enhanced ACT is 2 hours 5 minutes for the core test: English (50 questions, 35 minutes), Math (45 questions, 50 minutes) and Reading (36 questions, 40 minutes). Your Composite, from 1 to 36, is the average of those three. Science and Writing are optional, there is no penalty for guessing, and everyone gets the same form; it is not adaptive.',
  nextDate: 'December 12, 2026 (register by November 6)',
  glance: [
    { value: '2 hr 05', label: '35 + 50 + 40 minutes for the core test' },
    { value: '131', label: 'English, Math and Reading questions (+40 Science)' },
    { value: '1–36', label: 'Composite = average of English, Math, Reading' },
    { value: '19.4', label: 'average Composite, class of 2025' },
  ],
  structure: [
    {
      section: 'English',
      timing: '50 questions · 35 min · 1–36',
      what: 'Edit passages for punctuation, grammar, word choice, organization and style. Four choices per question, including NO CHANGE.',
    },
    {
      section: 'Math',
      timing: '45 questions · 50 min · 1–36',
      what: 'Pre-algebra through basic trigonometry. A permitted calculator is allowed on every question, and each question now has four choices instead of five.',
    },
    {
      section: 'Reading',
      timing: '36 questions · 40 min · 1–36',
      what: 'Passages from fiction, social science, the humanities and natural science, including a paired-passage set. Questions test main ideas, details, author’s craft and comparisons.',
    },
    {
      section: 'Science (optional)',
      timing: '40 questions · 40 min · 1–36',
      what: 'Interpret graphs, tables and experiments. Combined with Math into a STEM score. Does not count toward the Composite.',
    },
    {
      section: 'Writing (optional)',
      timing: '1 essay · 40 min · 2–12',
      what: 'Take a position on an issue and weigh it against other perspectives. Reported separately.',
    },
  ],
  formatNotes: [
    {
      title: 'Not adaptive: everyone gets the same form',
      text: 'Unlike the digital SAT, the ACT doesn’t change based on your answers. Depending on your test center, you’ll take it on paper or on a computer, with the same content either way.',
    },
    {
      title: 'Some questions are field tests',
      text: 'ACT mixes unscored field-test questions into each section: about 20% in English, 9% in Math, 25% in Reading and 15% in Science. You can’t spot them, so answer everything.',
    },
  ],
  sections: [
    {
      id: 'english',
      kicker: 'Section 1',
      title: 'The English section',
      intro:
        '50 questions in 35 minutes. You’ll see passages with underlined parts and choose the best version, or NO CHANGE if the original is already right.',
      stats: [
        { value: '50', label: 'questions' },
        { value: '~42 sec', label: 'per question' },
        { value: '4', label: 'choices, including NO CHANGE' },
        { value: '0', label: 'points lost for a wrong answer' },
      ],
      domainsTitle: 'What the section tests',
      domains: [
        {
          name: 'Production of Writing',
          share: '38–43%',
          about: 'Development, organization and transitions.',
          skills: 'decide whether to add, delete or move a sentence, pick the transition that fits, and choose the best introduction or conclusion for a paragraph.',
        },
        {
          name: 'Conventions of Standard English',
          share: '38–43%',
          about: 'Punctuation, grammar and sentence structure.',
          skills: 'use commas, semicolons, colons and dashes; make subjects, verbs and pronouns agree; fix verb tense, modifiers, run-ons and fragments.',
        },
        {
          name: 'Knowledge of Language',
          share: '18–23%',
          about: 'Precise, concise, consistent style.',
          skills: 'cut wordiness and redundancy, choose the most precise word, and keep the tone consistent with the passage.',
        },
      ],
      strategies: [
        'NO CHANGE is a real answer. Pick it when the original is already correct; don’t avoid it just because it feels too easy.',
        'Shorter is usually better. When every choice is grammatical, the most concise one that keeps the meaning usually wins.',
        'Read the whole sentence. The error is often caused by words outside the underlined part.',
        'Yes/No first, reason second. On “should the writer add this?” questions, decide yes or no, then pick the reason that matches the paragraph’s focus.',
        'Compare the choices. What changes between them (a comma, a verb, a word) tells you what’s being tested.',
        'Keep the pace. At 42 seconds a question you’ll finish with a few minutes to check flagged items.',
      ],
      tip: 'If two choices mean the same thing and are both correct, neither can be the answer. Look for the one that’s different.',
    },
    {
      id: 'math',
      kicker: 'Section 2',
      title: 'The Math section',
      intro:
        '45 questions in 50 minutes, a little over a minute each. You can use a permitted calculator throughout, and there’s no formula sheet. About 80% of questions are “Preparing for Higher Math”; the rest are “Integrating Essential Skills”.',
      stats: [
        { value: '45', label: 'questions' },
        { value: '~67 sec', label: 'per question' },
        { value: '4', label: 'answer choices (was 5)' },
        { value: '0', label: 'formulas given, so memorize them' },
      ],
      domainsTitle: 'How the questions are split',
      domainsNote:
        'Modeling counts too. At least 20% of questions are also tagged Modeling: you’ll build or interpret a math model of a real situation, like a cost function or a growth rate.',
      domains: [
        { name: 'Algebra', share: '17–20%', about: 'Equations, inequalities and systems.', skills: 'solve and graph linear and quadratic equations, inequalities and systems, and translate word problems into equations.' },
        { name: 'Functions', share: '17–20%', about: 'Notation, graphs and transformations.', skills: 'evaluate and compose functions, read their graphs, and shift or stretch them.' },
        { name: 'Geometry', share: '17–20%', about: 'Shapes, coordinate geometry and trig.', skills: 'find area and volume, use triangles and circles, and apply right-triangle trigonometry.' },
        { name: 'Statistics & Probability', share: '12–15%', about: 'Data, center, spread and chance.', skills: 'compute mean and median, interpret data displays and find probabilities.' },
        { name: 'Number & Quantity', share: '10–12%', about: 'Exponents, radicals and complex numbers.', skills: 'work with exponent rules, radicals, complex numbers and vectors or matrices.' },
        { name: 'Integrating Essential Skills', share: '~20%', about: 'Rates, percents and proportions.', skills: 'solve multi-step problems with rates, percents, proportions, area and averages.' },
      ],
      strategies: [
        'Easy points first. Every question is worth the same. Skip a time sink and come back.',
        'Plug in the choices. With four options, back-solving from the middle value is often the fastest route.',
        'Draw the figure. Sketch geometry and coordinate questions, even when a figure isn’t given.',
        'Save 3 minutes to guess. Make sure every question has an answer before time is called.',
        'Check your calculator. Models with a built-in computer algebra system, such as the TI-89 or TI-Nspire CAS, are not allowed. Bring fresh batteries and know whether you’re in degree or radian mode.',
      ],
      table: {
        title: 'No formula sheet: memorize these',
        head: ['Topic', 'What to know'],
        rows: [
          ['Area', 'Circle πr², triangle ½bh, trapezoid ½(b₁ + b₂)h'],
          ['Right triangles', 'Pythagorean theorem; 30-60-90 and 45-45-90 triangles'],
          ['Trigonometry', 'SOH-CAH-TOA; sin²θ + cos²θ = 1'],
          ['Coordinate geometry', 'Slope, midpoint and distance formulas'],
          ['Quadratics', 'Quadratic formula and the discriminant'],
          ['Logarithms', 'log(ab) = log a + log b; log_b x = y ⇔ bʸ = x'],
          ['Polygons', 'Interior angles: (n − 2) × 180°'],
        ],
      },
      tip: 'Degrees vs radians changes every trig answer. Check your calculator’s mode before the section starts.',
    },
    {
      id: 'reading',
      kicker: 'Section 3',
      title: 'The Reading section',
      intro:
        '36 questions in 40 minutes, about 67 seconds per question. Passages are long, so your reading method matters as much as your speed.',
      stats: [
        { value: '36', label: 'questions' },
        { value: '~67 sec', label: 'per question' },
        { value: '~10 min', label: 'per passage set, including reading' },
        { value: '1', label: 'paired-passage set' },
      ],
      domainsTitle: 'What the section tests',
      domains: [
        { name: 'Key Ideas & Details', share: '44–52%', about: 'What the passage says.', skills: 'find the main idea, locate details, make inferences and follow a sequence of events.' },
        { name: 'Craft & Structure', share: '26–33%', about: 'How the passage is written.', skills: 'work out word meaning in context, the author’s purpose and point of view.' },
        { name: 'Integration of Knowledge & Ideas', share: '19–26%', about: 'Arguments and comparisons.', skills: 'evaluate arguments, compare paired passages and read data in a passage.' },
      ],
      strategies: [
        'Read actively, once. Spend about 3 minutes per passage and jot a 3–5 word summary of each paragraph.',
        'Answer in your own words first, then pick the choice that matches. This beats reading four tempting choices cold.',
        'Go back to the lines. For line-reference questions, read a few lines before and after the reference.',
        'Choose your order. Start with your strongest passage type; you can move between passages within the section.',
        'Cut extreme and out-of-scope choices. If a choice says more than the passage does, it’s wrong.',
        'Paired passages: do the questions on Passage A, then Passage B, then the questions about both.',
      ],
      table: {
        title: 'The four passage types',
        head: ['Passage', 'What it’s like', 'How to read it'],
        rows: [
          ['Literary Narrative', 'Fiction or memoir; characters, relationships, tone', 'Track who feels what and how it changes'],
          ['Social Science', 'History, economics, psychology, education', 'Find the argument and the evidence for it'],
          ['Humanities', 'Art, music, philosophy, personal essays', 'Note the author’s opinion and attitude words'],
          ['Natural Science', 'Biology, physics, earth science research', 'Map the process or experiment step by step'],
        ],
      },
      tip: 'The answer is always in the passage. If you can’t point to the line that proves it, keep looking.',
    },
    {
      id: 'science-writing',
      kicker: 'Optional sections',
      title: 'Science and Writing',
      intro:
        'Neither counts toward your Composite. Take Science if your colleges or programs want a STEM score; take Writing if a college on your list requires or recommends it. When unsure, taking Science keeps your options open.',
      stats: [
        { value: '40', label: 'Science questions in 40 minutes' },
        { value: 'STEM', label: 'score: average of Math and Science' },
        { value: '40 min', label: 'for the Writing essay' },
        { value: '2–12', label: 'Writing score, reported separately' },
      ],
      domainsTitle: 'What Science tests',
      domainsNote:
        'Passages come as Data Representation (graphs or tables to interpret), Research Summaries (related experiments with results) and Conflicting Viewpoints (scientists explaining the same thing differently).',
      domains: [
        { name: 'Interpretation of Data', share: '36–47%', about: 'Read graphs and tables.', skills: 'pull values from figures, spot trends and interpolate between data points.' },
        { name: 'Scientific Investigation', share: '17–31%', about: 'Design, variables and controls.', skills: 'name the independent and dependent variables, and judge how an experiment was set up.' },
        { name: 'Evaluation of Models', share: '22–36%', about: 'Hypotheses and conclusions.', skills: 'decide which data support a claim and compare competing explanations.' },
      ],
      strategies: [
        'Question first, figure second. Most Science questions point to one table or graph; read only what you need.',
        'Check axes and units before reading any value.',
        'Find the variables: what did the scientist change, and what did they measure?',
        'You need little outside science. The answer is almost always in the figures and text.',
        'Conflicting Viewpoints: summarize each scientist in one line before you look at the questions.',
      ],
      notes: [
        {
          title: 'How the essay is scored',
          text: 'Two readers score four domains: Ideas & Analysis (a clear position that engages with the perspectives given), Development & Support, Organization, and Language Use.',
        },
        {
          title: 'A five-paragraph plan that works',
          text: '5 minutes to plan your thesis and two reasons. Intro: state your position. Body 1–2: one reason each, with a concrete example. Body 3: answer the strongest opposing view. Conclusion, then 3 minutes to proofread.',
        },
      ],
      tip: 'If your knowledge disagrees with the passage’s data, go with the data.',
    },
  ],
  traps: [
    { title: 'Avoiding NO CHANGE', text: 'It’s correct as often as the other choices when the original is fine. Judge the sentence, not the odds.' },
    { title: 'Picking the longest answer', text: 'Wordy, redundant choices are usually wrong on English. Concise and clear wins.' },
    { title: 'Comma splices', text: 'Two complete sentences joined by just a comma are always wrong. Use a period, semicolon, or comma + FANBOYS.' },
    { title: 'Keeping interesting sentences', text: 'On add/delete questions, relevance to the paragraph matters, not whether the fact is interesting.' },
    { title: 'One question, three minutes', text: 'Every Math question counts the same. Skip the time sink and come back.' },
    { title: 'Forgetting formulas', text: 'There’s no reference sheet. If you can’t recall the area of a trapezoid, you lose the point.' },
    { title: 'Wrong calculator mode', text: 'Degrees vs radians changes every trig answer. Check your mode before the section starts.' },
    { title: 'Rereading whole passages', text: 'Reading questions reward finding the right lines, not memorizing the passage.' },
    { title: 'Using outside science', text: 'If your knowledge disagrees with the passage’s data, go with the data.' },
    { title: 'Running out without guessing', text: 'No penalty for wrong answers. Fill in every question before time is called.' },
  ],
  roadmap: [
    { when: 'Week 1', focus: 'Baseline test', text: 'Take ACT’s free official practice test with real timing. Log every miss by section and category in a mistake journal.' },
    { when: 'Weeks 2–4', focus: 'English rules and core math', text: 'Punctuation and grammar rules, plus algebra and functions. Memorize the formula list.' },
    { when: 'Weeks 5–7', focus: 'Reading method and geometry', text: 'Practice the active-reading method on one passage a day. Geometry, trig and statistics. One timed section each weekend.' },
    { when: 'Week 8', focus: 'Second full test', text: 'Compare each section with Week 1 and re-aim the last month at what’s still weakest.' },
    { when: 'Weeks 9–10', focus: 'Pacing and Science', text: 'Timed sections only. Add Science practice if you’re taking it, and one Writing essay if you need it.' },
  ],
  finalFour: {
    head: ['When', 'Focus', 'Target'],
    rows: [
      ['4 weeks out', 'Full practice test, then review every miss by category', 'Name your three weakest areas'],
      ['3 weeks out', 'Drill those areas; one timed section a day', 'Finish each section on time'],
      ['2 weeks out', 'Full practice test at 8 a.m. with the real breaks', 'Beat your Week 8 Composite'],
      ['Final week', 'Light review of grammar rules and formulas; print your admission ticket', 'Rest the night before'],
    ],
  },
  roadmapNote:
    'Plan to take it twice. Most colleges superscore the ACT, so a first test in the fall or winter and a retake in the spring gives you two chances at each section.',
  practice: [
    {
      topic: 'English · Agreement',
      question:
        'The museum’s new exhibit, which features more than two hundred photographs from the 1930s, [[are drawing]] record crowds every weekend.',
      choices: ['NO CHANGE', 'is drawing', 'have drawn', 'were drawing'],
      letters: ACT_LETTERS_1,
      answer: 'B',
      why: 'The subject is exhibit, which is singular. Skip the clause between the commas: the exhibit is drawing.',
    },
    {
      topic: 'English · Punctuation',
      question:
        'Marine biologists have studied the octopus for [[decades, its]] ability to change color in milliseconds still surprises them.',
      choices: ['NO CHANGE', 'decades; its', 'decades its', 'decades, it’s'],
      letters: ACT_LETTERS_2,
      answer: 'G',
      why: 'Both halves are complete sentences, so the comma creates a splice. A semicolon fixes it. J also uses it’s (it is) instead of the possessive its.',
    },
    {
      topic: 'Math · Functions',
      question: 'If f(x) = 3x − 2 and g(x) = x² + 1, what is f(g(2))?',
      choices: ['13', '15', '17', '25'],
      letters: ACT_LETTERS_1,
      answer: 'A',
      why: 'Work inside out: g(2) = 5, then f(5) = 13. Choice C (17) is g(f(2)), the trap for doing it in the wrong order.',
    },
    {
      topic: 'Math · Statistics',
      question: 'The mean of five numbers is 12. When one number is removed, the mean of the remaining four is 10. What number was removed?',
      choices: ['2', '10', '12', '20'],
      letters: ACT_LETTERS_2,
      answer: 'J',
      why: 'Total of five numbers = 5 × 12 = 60. Total of four = 4 × 10 = 40. The removed number is 60 − 40 = 20.',
    },
    {
      topic: 'Math · Geometry',
      question: 'What is the radius of the circle x² + y² − 6x + 8y = 0?',
      choices: ['4', '5', '10', '25'],
      letters: ACT_LETTERS_1,
      answer: 'B',
      why: 'Complete the square: (x − 3)² + (y + 4)² = 9 + 16 = 25, so the radius is √25 = 5. Choice D is r², not r.',
    },
  ],
  scoreIntro:
    'Each section is scored from 1 to 36. Your Composite is the average of English, Math and Reading, rounded to the nearest whole number.',
  scoreStats: [
    { value: '19.4', label: 'national average Composite, class of 2025' },
    { value: '1.4M', label: '2025 graduates took the ACT, about 36% of the class' },
    { value: '30%', label: 'of ACT-tested 2025 grads met at least 3 college-readiness benchmarks' },
  ],
  scoreTable: {
    title: 'How your scores are built',
    head: ['Score', 'Scale', 'How it’s calculated'],
    rows: [
      ['Composite', '1–36', 'Average of English, Math and Reading. Science is no longer included.'],
      ['Superscore', '1–36', 'Average of your best English, Math and Reading scores from any test dates. Many colleges use it.'],
      ['STEM', '1–36', 'Average of Math and Science. Reported only if you take Science.'],
      ['Writing', '2–12', 'Two readers score four domains; reported on its own.'],
    ],
  },
  scoreTip:
    'Set your own target from your college list. Look up each college’s middle-50% ACT range (in its Common Data Set, section C9, or admissions page) and aim for the upper half.',
  dates: {
    title: '2026–27 ACT national test dates',
    head: ['Test date', 'Register by', 'Good for'],
    rows: [
      ['December 12, 2026', 'November 6', 'Regular-decision seniors; juniors’ first try'],
      ['February 27, 2027', 'January 22', 'Juniors after winter prep'],
      ['April 10, 2027', 'March 5', 'Juniors before AP season'],
      ['June 12, 2027', 'May 7', 'Juniors’ retake after school ends'],
      ['July 10, 2027', 'June 4', 'Rising seniors with a summer of prep'],
    ],
    note: 'Late registration is available for a fee on most dates. Dates as published for 2026–27; always confirm on act.org before you register. Many states and districts also offer the ACT free on a school day.',
  },
  resources: [
    { name: 'Official ACT practice test', where: 'act.org', text: 'ACT’s free full-length practice test for the enhanced format, with answers and a scoring table. Your Week 1 baseline.', free: true },
    { name: 'The Official ACT Prep Guide', where: 'Latest edition, from ACT', text: 'Several real past tests with explanations. The best paid resource if you want more official practice.', free: false },
    { name: 'MyACT account', where: 'my.act.org', text: 'Register, choose score recipients, view scores and order Test Information Release when it’s offered.', free: true },
    { name: 'Khan Academy', where: 'khanacademy.org', text: 'Free lessons on algebra, geometry, trigonometry and grammar to fill gaps found by your practice tests.', free: true },
    { name: 'ACT calculator policy', where: 'act.org', text: 'The list of prohibited calculators. Check yours well before test day.', free: true },
    { name: 'ACT SAT GO free practice tests', where: 'actsatgo.com/free-test', text: 'Timed practice tests with a score report, plus a free diagnostic session with a tutor.', free: true },
  ],
  checklist: [
    'Printed admission ticket from MyACT',
    'Acceptable photo ID',
    'Sharpened No. 2 pencils with erasers (no mechanical pencils)',
    'Permitted calculator with fresh batteries, set to the right mode',
    'A watch without an alarm (no smartwatches)',
    'Snack and water for the break',
    'Arrive by 8:00 a.m. check-in',
    'Phone off and put away for the whole test',
    'Know which optional sections you registered for',
    'A good night’s sleep. No new material the night before.',
  ],
  checklistNote:
    'Testing with accommodations? Request them through your school when you register, well before the deadline. Decisions can take several weeks.',
  faq: [
    {
      q: 'How long is the enhanced ACT?',
      a: '2 hours 5 minutes for the core test: English (35 minutes), Math (50 minutes) and Reading (40 minutes). Optional Science adds 40 minutes, and the optional Writing essay adds another 40.',
    },
    {
      q: 'Is Science still part of the ACT Composite?',
      a: 'No. On the enhanced ACT the Composite is the average of English, Math and Reading. Science is optional and is combined with Math into a separate STEM score.',
    },
    {
      q: 'Can you use a calculator on the ACT?',
      a: 'Yes, a permitted calculator is allowed on every Math question. Models with a built-in computer algebra system, such as the TI-89 or TI-Nspire CAS, are not allowed. There is no formula sheet, so memorize the key formulas.',
    },
    {
      q: 'Is there a penalty for guessing on the ACT?',
      a: 'No. Wrong answers and blanks score the same, so every question should have an answer before time is called.',
    },
    {
      q: 'What is a good ACT score?',
      a: 'The class of 2025 averaged a 19.4 Composite. A good score depends on your colleges: look up each one’s middle-50% ACT range and aim for the upper half.',
    },
    {
      q: 'When are the 2026–27 ACT test dates?',
      a: 'December 12, 2026, then February 27, April 10, June 12 and July 10, 2027. Registration closes about five weeks before each date; confirm on act.org.',
    },
    {
      q: 'Should I take the SAT or the ACT?',
      a: 'Colleges accept both equally. The ACT is not adaptive, has no formula sheet and moves faster on English, while the digital SAT is adaptive with Desmos built in. Take a practice test of each and compare.',
    },
  ],
  cta: {
    title: 'Aiming for 34+? Get a personal ACT plan.',
    text: 'Book a free diagnostic session. We’ll find your weakest sections, review your practice tests and give you a week-by-week plan to test day.',
  },
};

export const TEST_GUIDE_PAGES: TestGuidePage[] = [SAT_GUIDE, ACT_GUIDE];

export const testGuidePagePath = (slug: string) => `/${slug}/exam-guide`;

/** Web page for a SAT/ACT guide PDF. */
export const TEST_GUIDE_PAGE_BY_GUIDE: Record<string, TestGuidePage> = Object.fromEntries(
  TEST_GUIDE_PAGES.map((p) => [p.guideSlug, p]),
);
