import type { ApSubject } from './types';

export const CALCULUS_BC: ApSubject = {
  slug: 'calculus-bc',
  guideSlug: 'ap-calculus-bc-exam-guide-act-sat-go',
  name: 'AP Calculus BC',
  metaTitle: 'AP Calculus BC Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Calculus BC exam explained: 42 multiple-choice and 6 free-response questions, the calculator and no-calculator parts, all 10 units including series, parametric and polar, FRQ types and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Calculus BC exam is 3 hours 10 minutes: 42 multiple-choice questions in 1 hour 40 minutes and 6 free-response questions in 1 hour 30 minutes, each worth half your score. BC covers everything in AB plus parametric, polar and vector functions and infinite series, and series alone is about 17–18% of the exam. You also get an AB subscore. About 79–82% of students score 3 or higher, and about 44–46% earn a 5.',
  examDate: 'Monday, May 10, 2027 (morning session)',
  length: '3 hours 10 minutes',
  glance: [
    { value: '3 hr 10', label: '1 hr 40 min multiple choice + 1 hr 30 min free response' },
    { value: '42 + 6', label: 'multiple-choice + free-response questions' },
    { value: '10 units', label: 'all of AB plus parametric, polar and series' },
    { value: '79–82%', label: 'scored 3 or higher in recent years' },
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
      'Read graphs of f′ carefully. Increasing f means f′ > 0, not f′ increasing.',
      "Know your limits toolkit: factoring, conjugates, the special trig limits and L'Hospital's Rule.",
      'Units tell you the answer type. A rate in gallons per hour, integrated over hours, gives gallons.',
      "In Part B, use the calculator for definite integrals and solving. Store intermediate values; don't round.",
      'Eliminate with estimates. A quick sketch often rules out two choices.',
      'Flag and move on after 3 minutes. Come back once the quick points are banked.',
    ],
  },
  units: [
    { name: 'Limits & Continuity', weight: '4–7%', about: 'What a function approaches, and where it breaks.', skills: 'Evaluate limits from graphs, tables and algebra; find asymptotes; apply continuity and the IVT.' },
    { name: 'Differentiation: Definition & Rules', weight: '4–7%', about: 'The derivative as a limit and an instantaneous rate.', skills: 'Use the limit definition and all basic derivative rules; connect differentiability and continuity.' },
    { name: 'Composite, Implicit & Inverse', weight: '4–7%', about: 'Harder derivative rules.', skills: 'Apply the chain rule, implicit differentiation and inverse-function derivatives.' },
    { name: 'Contextual Applications', weight: '6–9%', about: 'Derivatives describing real change.', skills: "Interpret rates with units; solve motion and related-rates problems; linearize; use L'Hospital's Rule." },
    { name: 'Analytical Applications', weight: '8–11%', about: "Using derivatives to analyze a function's shape.", skills: 'Apply the MVT and EVT; justify extrema and concavity; solve optimization problems.' },
    { name: 'Integration & Accumulation', weight: '17–20%', about: 'The integral as accumulated change.', skills: 'Use Riemann sums and the FTC; integrate by substitution, parts and partial fractions; evaluate improper integrals.' },
    { name: 'Differential Equations', weight: '6–9%', about: 'Equations that describe how something changes.', skills: "Read slope fields; use Euler's method; solve separable equations; analyze logistic growth." },
    { name: 'Applications of Integration', weight: '6–9%', about: 'Average value, area, volume and length.', skills: 'Find average value, area, volume and the arc length of a curve.' },
    { name: 'Parametric, Polar & Vector', weight: '11–12%', about: 'Curves described by t or θ, and motion in the plane.', skills: 'Find derivatives, speed and arc length of parametric curves; analyze vector-valued motion; find polar slopes and areas.' },
    { name: 'Infinite Sequences & Series', weight: '17–18%', about: 'Infinite sums and polynomial approximations.', skills: 'Apply the convergence tests; find the radius and interval of convergence; build Taylor and Maclaurin series; bound errors with the alternating series and Lagrange bounds.' },
  ],
  unitsNote: 'Series (Unit 10) is as heavy as integration and is the topic BC students most often under-prepare, so start it early and revisit it every week. Units 1–8 also appear on AB, and those topics produce your AB subscore.',
  frq: {
    title: 'The 6 free-response questions',
    intro: '90 minutes, 6 questions, 9 points each (54 raw points). Part A (2 questions, calculator) gets 30 minutes; Part B (4 questions, no calculator) gets 60 minutes, and you may return to Part A questions without a calculator.',
    types: [
      { label: 'Rate', title: 'Rates and accumulation', text: 'Rates in and out, amounts over time and maximums. Often in Part A with a calculator, and shared with AB.', tip: 'Amount = start + ∫(in − out).' },
      { label: 'Param', title: 'Parametric or vector motion', text: 'A particle moving in the plane: velocity vector, speed, total distance traveled and position at a time. Usually Part A.', tip: 'Speed = √((dx/dt)² + (dy/dt)²).' },
      { label: 'Graph', title: "Graph of f′ or a table", text: "Analyze a function from its derivative's graph or from data in a table, with Riemann sums and full justifications.", tip: "Justify with the signs of f′ and f″." },
      { label: 'Polar', title: 'Polar curves', text: 'Area inside polar curves or between them, and how r or position changes with θ.', tip: 'Area = ½∫r² dθ. Find the bounds first.' },
      { label: 'DE', title: 'Differential equations', text: "Slope fields, Euler's method, separable equations and logistic models.", tip: 'Logistic growth is fastest at half the carrying capacity.' },
      { label: 'Series', title: 'Taylor series', text: 'Almost always Q6. Build a Taylor polynomial, find the interval of convergence and bound the error.', tip: 'Check both endpoints separately with a named test.' },
    ],
    timePlan: 'About 15 minutes per question. Write the setup before you compute: an integral written correctly with limits earns points even if you run out of time.',
  },
  habits: [
    'Label every part: (a), (b), (c).',
    'Justify with the signs of f′ or f″, not "the graph".',
    'Include units in every answer in context.',
    'Give decimals to 3 places on calculator parts.',
    'Stuck? Write the setup integral or equation. It still scores.',
  ],
  traps: [
    { title: 'Skipping endpoint checks', text: 'The ratio test says nothing at the endpoints. Test each one separately and name the test.' },
    { title: 'Forgetting factorials', text: 'The nth Taylor coefficient is f⁽ⁿ⁾(a)/n!. Missing the n! is the most common series slip.' },
    { title: 'Polar bounds', text: 'For area, find where the curve starts and ends (or where curves intersect) before setting up ½∫r² dθ.' },
    { title: 'Speed vs velocity', text: 'Speed is the magnitude of the velocity vector. Total distance integrates speed, not dy/dt.' },
    { title: 'd²y/dx² for parametric curves', text: 'Differentiate dy/dx with respect to t, then divide by dx/dt again.' },
    { title: 'Justifying with "the graph"', text: 'Readers need a reason based on f′ or f″, such as "f′ changes from positive to negative".' },
    { title: 'Dropping +C or the initial condition', text: 'Add +C right after integrating and solve for it before isolating y.' },
    { title: 'Rounding too early', text: 'Store calculator values and round only the final answer to 3 decimal places.' },
    { title: 'Wrong error bound', text: 'Alternating series: the error is at most the first omitted term. Otherwise use the Lagrange bound with a maximum of the next derivative.' },
    { title: 'Leaving a part blank', text: 'Each part is scored separately. A correct setup can earn points even if the next step fails.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–4: fast foundations', text: 'Limits and every derivative rule, moving quickly. Drill derivatives daily until they are automatic.' },
    { when: 'Nov – Dec', focus: 'Units 5–6: analysis and integrals', text: 'MVT, extrema, the FTC and all integration techniques, including parts and partial fractions.' },
    { when: 'Jan – Feb', focus: 'Units 7–9: applications, parametric and polar', text: 'Euler, logistic growth, arc length, vector motion and polar area. One free-response question per week.' },
    { when: 'Mar – Apr', focus: 'Unit 10: series', text: 'Convergence tests, power series and Taylor polynomials with error bounds. Revisit series every week until May.' },
    { when: 'Late April', focus: 'Timed sections', text: 'Full multiple-choice and free-response sections under real timing, splitting calculator and no-calculator parts.' },
  ],
  scores: { threePlus: '79–82%', fives: '44–46%' },
  practice: [
    {
      topic: 'Unit 10 · Interval of convergence',
      question: 'What is the interval of convergence of Σ (x + 1)ⁿ / (n·2ⁿ), for n = 1 to ∞?',
      choices: ['−3 ≤ x < 1', '−3 < x < 1', '−3 < x ≤ 1', '−3 ≤ x ≤ 1'],
      answer: 'A',
      why: 'The ratio test gives |x + 1| < 2. At x = 1 it is the harmonic series, which diverges; at x = −3 it is the alternating harmonic series, which converges.',
    },
    {
      topic: 'Unit 9 · Polar area',
      question: 'What is the area enclosed by the polar curve r = 2 + 2cos θ?',
      choices: ['3π', '4π', '6π', '8π'],
      answer: 'C · 6π',
      why: 'Area = ½∫(2 + 2cos θ)² dθ from 0 to 2π = ½∫(4 + 8cos θ + 4cos²θ) dθ = ½(8π + 4π) = 6π.',
    },
    {
      topic: "Unit 7 · Euler's method",
      question: "dy/dx = x + y with y(0) = 1. Using Euler's method with two steps of size 0.5, what is the estimate for y(1)?",
      choices: ['2', '2.25', '2.5', '3'],
      answer: 'C · 2.5',
      why: 'Step 1: slope 0 + 1 = 1, so y(0.5) ≈ 1.5. Step 2: slope 0.5 + 1.5 = 2, so y(1) ≈ 1.5 + 0.5(2) = 2.5.',
    },
  ],
  faq: [
    {
      q: 'Should I take AP Calculus AB or BC?',
      a: 'BC covers all of AB plus parametric, polar and vector functions and series, at a faster pace. If you are strong in precalculus and comfortable moving quickly, BC is worth it: your score report includes an AB subscore, so strong AB skills still count.',
    },
    {
      q: 'What is the AB subscore on the AP Calculus BC exam?',
      a: 'It is a separate 1–5 score based only on the AB topics in the BC exam (Units 1–8). Many colleges award AB credit from it, so it protects your result even if series and polar go badly.',
    },
  ],
};
