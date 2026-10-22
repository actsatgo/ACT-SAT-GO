import type { ApSubject } from './types';

export const CALCULUS_AB: ApSubject = {
  slug: 'calculus-ab',
  guideSlug: 'ap-calculus-ab-exam-guide-act-sat-go',
  name: 'AP Calculus AB',
  metaTitle: 'AP Calculus AB Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Calculus AB exam explained: 42 multiple-choice and 6 free-response questions, the calculator and no-calculator parts, all 8 units with weightings, FRQ types and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Calculus AB exam is 3 hours 10 minutes: 42 multiple-choice questions in 1 hour 40 minutes and 6 free-response questions in 1 hour 30 minutes, each worth half your score. Both sections have a no-calculator part and a calculator part, and most of the exam is done without one. Free-response points come from correct setups and justifications, not just final numbers. About 64–65% of students score 3 or higher.',
  examDate: 'Monday, May 10, 2027 (morning session)',
  length: '3 hours 10 minutes',
  glance: [
    { value: '3 hr 10', label: '1 hr 40 min multiple choice + 1 hr 30 min free response' },
    { value: '42 + 6', label: 'multiple-choice + free-response questions' },
    { value: '8 units', label: 'limits to applications of integration' },
    { value: '64–65%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    {
      section: 'I · Multiple choice',
      weight: '50%',
      timing: '1 hr 40 min · 42 questions',
      what: 'Part A: 29 questions in 62 minutes, no calculator (35% of score). Part B: 13 questions in 38 minutes, graphing calculator required for some (15%). Functions appear as equations, graphs, tables and words.',
    },
    {
      section: 'II · Free response',
      weight: '50%',
      timing: '1 hr 30 min · 6 questions',
      what: 'Part A: 2 questions in 30 minutes, graphing calculator required (about 17%). Part B: 4 questions in 60 minutes, no calculator (about 33%). At least two questions use a real-world context.',
    },
  ],
  formatNotes: [
    {
      title: 'Click in Bluebook, write on paper',
      text: 'You answer multiple-choice questions and read the free-response questions in the Bluebook app, then handwrite free-response answers in a paper booklet.',
    },
    {
      title: 'Know your four calculator skills',
      text: "On calculator parts you are expected to graph a function, solve an equation, find a numerical derivative and evaluate a definite integral. Check that your model is on College Board's approved list.",
    },
  ],
  mcq: {
    intro: 'Part A gives you 29 questions in 62 minutes without a calculator (about 2 minutes each). Part B gives 13 questions in 38 minutes with a calculator (about 3 minutes each). Wrong answers lose no points.',
    tips: [
      'Read graphs of f′ carefully. Many questions show the derivative, not the function: increasing f means f′ > 0, not f′ increasing.',
      "Know your limits toolkit: factoring, conjugates, the special trig limits and L'Hospital's Rule.",
      'Units tell you the answer type. A rate in gallons per hour, integrated over hours, gives gallons.',
      "In Part B, use the calculator for definite integrals and solving. Store intermediate values; don't round.",
      'Eliminate with estimates. A quick sketch often rules out two choices.',
      'Flag and move on after 3 minutes. Come back once the quick points are banked.',
    ],
  },
  units: [
    { name: 'Limits & Continuity', weight: '10–12%', about: 'What a function approaches, and where it breaks.', skills: 'Evaluate limits from graphs, tables and algebra; use the squeeze theorem; find asymptotes; apply the definition of continuity and the IVT.' },
    { name: 'Differentiation: Definition & Rules', weight: '10–12%', about: 'The derivative as a limit and an instantaneous rate.', skills: 'Use the limit definition; apply power, product and quotient rules and trig/exponential derivatives; connect differentiability and continuity.' },
    { name: 'Composite, Implicit & Inverse', weight: '9–13%', about: 'Harder derivative rules.', skills: 'Apply the chain rule; differentiate implicitly; find derivatives of inverse functions and inverse trig functions; find second derivatives.' },
    { name: 'Contextual Applications', weight: '10–15%', about: 'Derivatives describing real change.', skills: "Interpret derivatives with units; solve motion and related-rates problems; use local linearization; apply L'Hospital's Rule." },
    { name: 'Analytical Applications', weight: '15–18%', about: "Using derivatives to analyze a function's shape.", skills: 'Apply the MVT and EVT; find intervals of increase and concavity; justify extrema with the first and second derivative tests; solve optimization problems.' },
    { name: 'Integration & Accumulation', weight: '17–20%', about: 'The integral as accumulated change.', skills: 'Compute Riemann and trapezoidal sums; apply both parts of the FTC; find antiderivatives; use u-substitution; interpret accumulation functions.' },
    { name: 'Differential Equations', weight: '6–12%', about: 'Equations that describe how something changes.', skills: 'Verify solutions; sketch and read slope fields; solve separable equations with initial conditions; model exponential growth.' },
    { name: 'Applications of Integration', weight: '10–15%', about: 'Average value, motion, area and volume.', skills: 'Find average value; use integrals for position and total distance; find areas between curves; find volumes by cross sections and discs/washers.' },
  ],
  unitsNote: 'Units 5 and 6, analyzing functions with derivatives and the meaning of the integral, are the biggest and drive most free-response questions. AB covers Units 1–8; BC adds Units 9–10 (parametric, polar and series).',
  frq: {
    intro: '90 minutes, 6 questions, 9 points each (54 raw points). Part A (2 questions, calculator) gets 30 minutes; Part B (4 questions, no calculator) gets 60 minutes, and you may return to Part A questions without a calculator.',
    types: [
      { label: 'Rate', title: 'Rates in and out', text: 'Water, people or cars enter and leave. You integrate rates for amounts, compare rates to decide increasing or decreasing, and find maximums. Often in Part A.', tip: 'Amount at time t = starting amount + ∫(in − out).' },
      { label: 'Table', title: 'Data in a table', text: 'Estimate integrals with left, right, midpoint or trapezoidal sums, interpret them with units, and apply the MVT or IVT to the data.', tip: 'Check the hypotheses aloud: "f is differentiable, so…".' },
      { label: 'Graph', title: "Graph of f′", text: 'Given the graph of a derivative, find extrema, concavity, inflection points and values of f using areas.', tip: 'Justify with f′, never with "the graph goes up".' },
      { label: 'Motion', title: 'Particle motion', text: 'Position, velocity and acceleration: direction, speeding up or slowing down, displacement versus total distance, and position at a given time.', tip: 'Speeding up: v and a have the same sign.' },
      { label: 'DE', title: 'Differential equations', text: 'Sketch a slope field, use a tangent-line approximation, and solve a separable equation with an initial condition.', tip: 'Separate, integrate, add +C, use the initial condition, then solve for y.' },
      { label: 'Area', title: 'Area and volume', text: 'Area between curves and volumes by discs, washers or cross sections. Sometimes replaced by an implicit-differentiation question.', tip: 'Write the integral setup clearly; it earns points even without evaluating.' },
    ],
    timePlan: 'About 15 minutes per question.',
  },
  habits: [
    'Label every part: (a), (b), (c).',
    'Justify with f′ or f″ signs, not words like "the graph".',
    'Include units in every contextual answer.',
    'Give decimals to 3 places on calculator parts.',
    'Stuck? Write the setup integral or equation. It still scores.',
  ],
  traps: [
    { title: 'Justifying with "the graph"', text: 'Readers need a reason based on f′ or f″: "f′ changes from + to −", not "the graph peaks".' },
    { title: 'Displacement vs distance', text: 'Total distance is ∫|v(t)| dt. Displacement is ∫v(t) dt. They differ whenever the particle turns around.' },
    { title: 'Forgetting the chain rule', text: 'd/dx[sin(x²)] = 2x cos(x²). The inner derivative is the most common missing piece.' },
    { title: 'Rounding too early', text: 'Store calculator values and round only the final answer to 3 decimal places.' },
    { title: 'Dropping +C or the initial condition', text: 'In separable equations, add +C right after integrating and solve for it before isolating y.' },
    { title: "Mixing up f, f′ and f″", text: "If the graph shown is f′, its zeros are f's critical points and its slopes give f's concavity." },
    { title: 'Using a theorem without its conditions', text: 'The MVT needs f continuous on [a, b] and differentiable on (a, b). Say so when you use it.' },
    { title: 'Wrong limits after u-substitution', text: 'Either change the limits to u-values or switch back to x before evaluating.' },
    { title: 'Missing units in context', text: 'A rate in liters per minute integrated over minutes gives liters. Write it.' },
    { title: 'Leaving a part blank', text: 'Each part is scored separately. A correct setup can earn points even if the next step fails.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: limits and derivatives', text: 'Master limit techniques and every derivative rule. Do 10 derivative drills a day until you rarely make sign errors.' },
    { when: 'Nov – Dec', focus: 'Units 3–5: applications', text: 'Chain rule, implicit, related rates, MVT, extrema and optimization. Start writing justifications in full sentences.' },
    { when: 'Jan – Mar', focus: 'Units 6–8: integrals', text: 'Riemann sums, FTC, u-substitution, differential equations, area and volume. One released free-response question per week.' },
    { when: 'April', focus: 'Timed sections', text: 'Alternate full multiple-choice and free-response sections under real timing, splitting calculator and no-calculator parts.' },
    { when: 'Early May', focus: 'Justification polish', text: 'Rewrite your weakest justifications until they match rubric language. Review the traps list.' },
  ],
  scores: { threePlus: '64–65%', fives: 'about 20%' },
  practice: [
    {
      topic: 'Unit 3 · Implicit differentiation',
      question: 'For the curve x² + xy + y³ = 3, what is dy/dx at the point (1, 1)?',
      choices: ['−3/4', '−1', '3/4', '−1/2'],
      answer: 'A · −3/4',
      why: "Differentiate: 2x + y + xy′ + 3y²y′ = 0. At (1, 1): 3 + 4y′ = 0, so y′ = −3/4.",
    },
    {
      topic: 'Unit 5 · Extrema',
      question: "The derivative of f is f′(x) = (x − 2)²(x + 1)(x − 4). At which value(s) of x does f have a relative minimum?",
      choices: ['x = −1 only', 'x = 2 and x = 4', 'x = −1, x = 2 and x = 4', 'x = 4 only'],
      answer: 'D · x = 4 only',
      why: "f′ changes sign only at −1 (+ to −, a maximum) and 4 (− to +, a minimum). (x − 2)² never changes sign, so x = 2 is not an extremum.",
    },
    {
      topic: 'Unit 8 · Motion',
      question: 'A particle moves along a line with velocity v(t) = t² − 4t + 3 for 0 ≤ t ≤ 4. What is the total distance it travels?',
      choices: ['4/3', '8/3', '4', '16/3'],
      answer: 'C · 4',
      why: 'v = (t − 1)(t − 3) changes sign at 1 and 3. Distances: 4/3 + 4/3 + 4/3 = 4. Choice A is the displacement.',
    },
  ],
  faq: [
    {
      q: 'Can I use a calculator on the AP Calculus AB exam?',
      a: "Only on two parts: multiple-choice Part B (13 questions) and free-response Part A (2 questions). Multiple-choice Part A and free-response Part B, about two-thirds of your score, are done without a calculator. You need a graphing calculator on College Board's approved list.",
    },
    {
      q: 'What is the difference between AP Calculus AB and BC?',
      a: 'AB covers Units 1–8. BC covers the same content plus Units 9–10: parametric equations, polar coordinates and infinite series. BC students also receive an AB subscore.',
    },
  ],
};
