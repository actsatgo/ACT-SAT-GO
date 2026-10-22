import type { ApSubject } from './types';

export const PRECALCULUS: ApSubject = {
  slug: 'precalculus',
  guideSlug: 'ap-precalculus-exam-guide-act-sat-go',
  name: 'AP Precalculus',
  metaTitle: 'AP Precalculus Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Precalculus exam explained: 42 multiple-choice and 4 free-response questions, the calculator and no-calculator parts, the 3 tested units, FRQ types, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Precalculus exam is 2 hours 55 minutes: 42 multiple-choice questions in 1 hour 45 minutes (about 63% of the score) and 4 free-response questions in 70 minutes (about 37%). Both sections have a no-calculator part and a graphing-calculator part. Only Units 1–3 are tested: polynomial and rational, exponential and logarithmic, and trigonometric and polar functions. About 81–82% of students score 3 or higher, one of the highest rates of any AP exam, so aim for a 4 or 5.',
  examDate: 'Tuesday, May 11, 2027 (morning session)',
  length: '2 hours 55 minutes',
  glance: [
    { value: '2 hr 55', label: '1 hr 45 min multiple choice + 70 min free response' },
    { value: '42 + 4', label: 'multiple-choice + free-response questions' },
    { value: '3 units', label: 'tested (Unit 4 is taught, not tested)' },
    { value: '81–82%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: 'about 63%', timing: '1 hr 45 min · 42 questions', what: 'Part A: 29 questions in 65 minutes, no calculator (about 44%). Part B: 13 questions in 40 minutes, graphing calculator required for some (about 19%).' },
    { section: 'II · Free response', weight: 'about 37%', timing: '1 hr 10 min · 4 questions', what: 'Part A (calculator, 35 min): Q1 Function Concepts and Q2 Modeling a Non-Periodic Context. Part B (no calculator, 35 min): Q3 Modeling a Periodic Context and Q4 Symbolic Manipulations. Each is worth 6 points.' },
  ],
  formatNotes: [
    { title: 'Click in Bluebook, write on paper', text: 'You answer multiple-choice questions and read the free-response questions in the Bluebook app, then handwrite free-response answers in a paper booklet.' },
    { title: 'Units 1–3 only', text: 'The exam covers polynomial and rational, exponential and logarithmic, and trigonometric and polar functions. Unit 4 (parameters, vectors and matrices) is taught but not tested.' },
  ],
  mcq: {
    intro: 'Part A gives you 29 questions in 65 minutes without a calculator (about 2¼ minutes each). Part B gives 13 questions in 40 minutes with a graphing calculator (about 3 minutes each). Wrong answers lose no points.',
    tips: [
      'Use rates of change: constant first differences mean linear, constant second differences mean quadratic, constant ratios mean exponential.',
      'Factor first to find zeros, holes and vertical asymptotes of rational functions.',
      'Log rules are tools. Combine logs before solving, then check that answers are in the domain.',
      'Know the unit circle cold for Part A: exact values at multiples of π/6 and π/4.',
      'In Part B, graph and use intersect or zero instead of solving by hand.',
      'Flag and move on after 3 minutes. Return once the quick points are banked.',
    ],
  },
  units: [
    { name: 'Polynomial & Rational Functions', weight: '30–40%', about: 'How functions change, and the shapes of polynomials and rational functions.', skills: 'Describe rates of change and concavity; find zeros with multiplicity and end behavior; identify holes and vertical and horizontal asymptotes; solve inequalities; work with transformations and function models.' },
    { name: 'Exponential & Logarithmic Functions', weight: '27–40%', about: 'Growth and decay, and the inverse functions that undo them.', skills: 'Compare arithmetic and geometric sequences; build exponential models; use log properties to solve equations; find inverses and compositions; use semi-log plots to linearize data.' },
    { name: 'Trigonometric & Polar Functions', weight: '30–35%', about: 'Periodic behavior, the unit circle and polar graphs.', skills: 'Use sine, cosine and tangent on the unit circle; find amplitude, period, phase shift and midline; model periodic situations; use identities and inverse trig to solve equations; graph polar functions.' },
    { name: 'Parameters, Vectors & Matrices', weight: 'Not tested', about: 'Taught to prepare for calculus, but not on the AP Exam.', skills: 'Use parametric functions, vectors and matrices for transformations. Your teacher may still assess it in class.' },
  ],
  unitsNote: 'The three tested units are close to equal, so your weakest unit is your biggest opportunity, and trigonometry is where most students lose points. Rates of change, composition and inverses are the exact ideas AP Calculus builds on.',
  frq: {
    title: 'The 4 free-response questions',
    intro: '70 minutes, 4 questions, 6 points each (24 raw points, about 37% of your score). Part A (calculator) and Part B (no calculator) are timed separately, 35 minutes each.',
    types: [
      { label: 'Q1 · calc', title: 'Function Concepts', text: 'Given a graph or table, describe behavior: where the function increases, its rate of change, concavity, and values of compositions or inverses.', tip: 'Use precise words: "increasing at an increasing rate".' },
      { label: 'Q2 · calc', title: 'Modeling a Non-Periodic Context', text: 'Build a linear, quadratic, exponential or logarithmic model from data, use it to predict, and explain its limitations.', tip: 'Write the model with numbers, then interpret each parameter in context.' },
      { label: 'Q3 · no calc', title: 'Modeling a Periodic Context', text: 'Build a sinusoidal model from a situation such as a Ferris wheel or tides, then interpret amplitude, period and midline.', tip: 'Find the midline and amplitude from the maximum and minimum first.' },
      { label: 'Q4 · no calc', title: 'Symbolic Manipulations', text: 'Rewrite and solve expressions and equations using exponent, log and trig identities.', tip: 'Show each algebra step; points are given for correct intermediate forms.' },
    ],
    timePlan: 'About 17–18 minutes per question. On modeling questions, interpret in context: "the population grows by 8% per year", not just "b = 1.08".',
  },
  habits: [
    'Label each part: (a), (b), (c).',
    'Write models with real numbers, then interpret every parameter.',
    'Include units and context in every modeling answer.',
    'Keep answers exact in no-calculator parts.',
    'Stuck? Write the equation you would solve. It can still earn credit.',
  ],
  traps: [
    { title: 'Holes vs asymptotes', text: 'A factor that cancels gives a hole, not a vertical asymptote. Factor before deciding.' },
    { title: 'Extraneous log solutions', text: 'After solving log equations, check every answer: arguments of logs must be positive.' },
    { title: 'Percent growth over different periods', text: 'Q = a(1.2)^(t/3) grows 20% every 3 years, which is about 6.3% per year, not 20%.' },
    { title: 'Degrees vs radians', text: 'AP Precalculus uses radians. Check your calculator mode before Part B.' },
    { title: 'Period vs frequency', text: 'For sin(bx), the period is 2π/b. A bigger b means a shorter period.' },
    { title: 'Multiplicity ignored', text: 'At a zero of even multiplicity the graph touches and turns; at odd multiplicity it crosses.' },
    { title: 'Losing inverse-trig range', text: 'arcsin and arctan give values in [−π/2, π/2]; arccos gives [0, π]. Find the other solutions yourself.' },
    { title: 'Wrong end behavior', text: 'End behavior depends on the leading term only, including its sign and degree.' },
    { title: 'Negative r in polar', text: 'When r < 0, the point is plotted in the opposite direction of θ.' },
    { title: 'Bare numbers in context', text: 'Modeling answers need units and a sentence about what the number means.' },
  ],
  roadmap: [
    { when: 'Sep – Nov', focus: 'Unit 1: polynomial and rational functions', text: 'Rates of change, zeros, end behavior and asymptotes. Practice describing graphs in words every week.' },
    { when: 'Dec – Jan', focus: 'Unit 2: exponentials and logs', text: 'Growth models, log rules, inverses and semi-log data. One modeling question (Q2 style) per week.' },
    { when: 'Feb – Mar', focus: 'Unit 3: trigonometry and polar', text: 'Unit circle, sinusoidal models, identities and polar graphs. Drill exact values until they are automatic.' },
    { when: 'April', focus: 'Timed sections', text: 'Finish Unit 4 in class, but spend review time on Units 1–3. Take full timed sections, splitting calculator parts.' },
    { when: 'Early May', focus: 'Fix weak spots', text: 'Redo every missed question. Review the traps list and practice symbolic manipulations without a calculator.' },
  ],
  scores: { threePlus: '81–82%', fives: '28–29%' },
  practice: [
    {
      topic: 'Unit 1 · Rational functions',
      question: 'For f(x) = (x² − 4)/(x² − x − 2), which statement is true?',
      choices: [
        'f has a hole at x = 2 and a vertical asymptote at x = −1',
        'f has vertical asymptotes at x = 2 and x = −1',
        'f has a horizontal asymptote at y = 4',
        'f has a hole at x = −1',
      ],
      answer: 'A',
      why: 'f = (x − 2)(x + 2) / ((x − 2)(x + 1)). The x − 2 cancels (hole at x = 2); x + 1 stays (vertical asymptote at x = −1). Equal degrees give a horizontal asymptote at y = 1.',
    },
    {
      topic: 'Unit 2 · Log equations',
      question: 'What is the solution set of log₂(x) + log₂(x − 6) = 4?',
      choices: ['{8}', '{−2, 8}', '{4}', '{10}'],
      answer: 'A · {8}',
      why: 'Combine: log₂(x(x − 6)) = 4, so x² − 6x − 16 = 0 and x = 8 or −2. x = −2 makes the logs undefined, so it is extraneous.',
    },
    {
      topic: 'Unit 3 · Trig equations',
      question: 'How many solutions does 2sin²θ − sin θ − 1 = 0 have on 0 ≤ θ < 2π?',
      choices: ['1', '2', '3', '4'],
      answer: 'C · 3',
      why: 'Factor: (2sin θ + 1)(sin θ − 1) = 0. sin θ = 1 gives π/2; sin θ = −1/2 gives 7π/6 and 11π/6.',
    },
  ],
  faq: [
    {
      q: 'Is Unit 4 on the AP Precalculus exam?',
      a: 'No. Unit 4 (parameters, vectors and matrices) is taught in the course but is not tested. The exam covers Units 1–3: polynomial and rational, exponential and logarithmic, and trigonometric and polar functions.',
    },
    {
      q: 'Can I use a calculator on the AP Precalculus exam?',
      a: 'Only on multiple-choice Part B (13 questions) and free-response Part A (Q1 and Q2). The rest is done without a calculator, so unit-circle values and log rules need to be automatic. Set your graphing calculator to radians.',
    },
  ],
};
