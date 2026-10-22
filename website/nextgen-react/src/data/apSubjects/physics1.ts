import type { ApSubject } from './types';

export const PHYSICS_1: ApSubject = {
  slug: 'physics-1',
  guideSlug: 'ap-physics-1-exam-guide-act-sat-go',
  name: 'AP Physics 1: Algebra-Based',
  metaTitle: 'AP Physics 1 Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Physics 1 exam explained: 42 multiple-choice and 4 free-response questions in 3 hours, all 8 units including fluids, the four FRQ types, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Physics 1 exam is 3 hours: 42 multiple-choice questions in 85 minutes and 4 free-response questions in 95 minutes, each worth half your score. It covers 8 algebra-based units, now including fluids, and forces and energy together make up about 40% of the multiple-choice section. A calculator and an equation sheet are allowed throughout, and answers are scored on reasoning from principles, not just numbers. About 67–68% of students score 3 or higher.',
  examDate: 'Wednesday, May 5, 2027 (afternoon session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '85 min multiple choice + 95 min free response' },
    { value: '42 + 4', label: 'multiple-choice + free-response questions' },
    { value: '8 units', label: 'kinematics to fluids' },
    { value: '67–68%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '50%', timing: '1 hr 25 min · 42 questions', what: 'Single questions and short sets built around a stimulus such as a diagram, graph or data table. Calculator allowed.' },
    { section: 'II · Free response', weight: '50%', timing: '1 hr 35 min · 4 questions', what: 'Four question types: Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, and Qualitative/Quantitative Translation.' },
  ],
  formatNotes: [
    { title: 'Click in Bluebook, write on paper', text: 'You answer multiple-choice questions and read the free-response questions in the Bluebook app, then handwrite free-response answers in a paper booklet.' },
    { title: 'Equation sheet + calculator', text: 'A table of equations and constants is provided, and a calculator is allowed throughout. Knowing when an equation applies, and its conditions, matters more than memorizing it.' },
  ],
  mcq: {
    intro: '42 questions in 85 minutes gives you about 2 minutes per question. Many questions test reasoning with symbols and graphs rather than plugging in numbers. Wrong answers lose no points.',
    tips: [
      'Draw a diagram for every question. It takes seconds and prevents sign errors.',
      'Check limiting cases. What happens if a mass is zero or an angle is 90°? Wrong choices often fail this test.',
      'Use units to eliminate answer choices with the wrong dimensions.',
      'Read graphs as relationships: slope and area under the curve both have physical meaning.',
      'Work symbolically first, then plug in numbers only if needed.',
      'Flag and move on after 3 minutes. Return once the quick points are banked.',
    ],
  },
  units: [
    { name: 'Kinematics', weight: '10–15%', about: 'Describing motion.', skills: 'Use motion graphs (slope and area); apply kinematic equations in 1D and 2D; solve projectile problems; use reference frames.' },
    { name: 'Force & Translational Dynamics', weight: '18–23%', about: "Newton's laws.", skills: "Draw free-body diagrams; apply Newton's laws to systems; handle friction, springs, inclines and pulleys; analyze circular motion and gravitation." },
    { name: 'Work, Energy & Power', weight: '18–23%', about: 'Energy and its conservation.', skills: 'Calculate work from force and graphs; use the work-energy theorem; apply conservation of energy with energy bar charts; calculate power.' },
    { name: 'Linear Momentum', weight: '10–15%', about: 'Impulse and collisions.', skills: 'Use impulse and force-time graphs; apply conservation of momentum; classify elastic and inelastic collisions; track the center of mass.' },
    { name: 'Torque & Rotational Dynamics', weight: '10–15%', about: 'How things turn.', skills: 'Calculate torque; use rotational kinematics; apply Στ = Iα; analyze static equilibrium and rotational inertia.' },
    { name: 'Energy & Momentum of Rotating Systems', weight: '5–8%', about: 'Rolling and spinning.', skills: 'Use rotational kinetic energy; analyze rolling without slipping; apply conservation of angular momentum.' },
    { name: 'Oscillations', weight: '5–8%', about: 'Springs and pendulums.', skills: 'Describe simple harmonic motion; find periods of springs and pendulums; track energy in oscillators.' },
    { name: 'Fluids', weight: '10–15%', about: 'Pressure, buoyancy and flow.', skills: "Use density and pressure; apply buoyancy (Archimedes' principle); use the continuity equation and Bernoulli's equation." },
  ],
  unitsNote: "Forces and energy together are about 40% of the multiple-choice section, and they reappear in rotation, oscillations and fluids, so master them first. The course is algebra-based: you won't need derivatives or integrals, but you must manipulate symbols confidently and read slopes and areas from graphs.",
  frq: {
    title: 'The 4 free-response questions',
    intro: '95 minutes, 4 questions. The four question types are the same every year, so you can practice each on purpose. Mathematical Routines and lab questions are typically worth the most points.',
    types: [
      { label: 'MR', title: 'Mathematical Routines', text: 'Use equations and principles to derive expressions and calculate quantities, often starting symbolically.', tip: 'Start from a fundamental equation and show each substitution.' },
      { label: 'TBR', title: 'Translation Between Representations', text: 'Draw a free-body diagram, energy bar chart or graph, then write equations that are consistent with it.', tip: 'Arrows on free-body diagrams start on the object and are labeled.' },
      { label: 'LAB', title: 'Experimental Design and Analysis', text: 'Design a procedure, choose what to graph to get a straight line (linearize), then use the slope to find a quantity.', tip: 'Linearize: graph the quantities that make y = mx a straight line.' },
      { label: 'QQT', title: 'Qualitative/Quantitative Translation', text: 'Explain a situation in words with physics reasoning, then derive an equation that agrees with your explanation.', tip: 'Make sure your words and your equation predict the same trend.' },
    ],
    timePlan: 'About 25 minutes for MR, 22 for TBR, 25 for LAB and 23 for QQT. Points are given for derivations: "plugging in" without a starting equation often loses credit.',
  },
  habits: [
    'Answer every lettered part, in order, with a label.',
    'Start from a fundamental principle, then apply it to the situation.',
    'Show the equation, the substitution and the units.',
    'Keep your words and your equations consistent.',
    'Blank part? Write the relationship you would use. It can earn credit.',
  ],
  traps: [
    { title: 'Normal force = mg', text: 'Only on a flat surface with no other vertical forces and no vertical acceleration. On an incline it is mg cos θ.' },
    { title: 'Force in the direction of motion', text: 'A moving object needs no forward force. Net force tells you acceleration, not velocity.' },
    { title: 'Centripetal force as a new force', text: 'Never draw "Fc" on a free-body diagram. Tension, gravity or friction provides it.' },
    { title: 'Momentum vs energy', text: 'In every collision without external forces, momentum is conserved. Kinetic energy is conserved only in elastic collisions.' },
    { title: 'Sign errors', text: 'Choose a positive direction at the start and stick to it for velocity, acceleration and force.' },
    { title: 'Mass and pendulum period', text: "A pendulum's period doesn't depend on mass or (for small angles) amplitude: T = 2π√(L/g)." },
    { title: 'Rolling objects', text: 'Rolling objects share energy between translation and rotation, so they move slower than sliding frictionless ones.' },
    { title: 'Buoyant force', text: "Fb = ρ(fluid) × V(displaced) × g. Use the fluid's density, not the object's." },
    { title: 'Faster fluid, higher pressure', text: 'In Bernoulli flow, where the fluid moves faster the pressure is lower.' },
    { title: 'Words and math disagree', text: 'In QQT questions, an explanation that contradicts your equation loses points on both.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: motion and forces', text: "Kinematics graphs, projectiles, free-body diagrams and Newton's laws. Draw a diagram for every problem." },
    { when: 'Nov – Dec', focus: 'Units 3–4: conservation', text: 'Work, energy bar charts, power, impulse and momentum. Start one free-response question per week.' },
    { when: 'Jan – Feb', focus: 'Units 5–6: rotation', text: 'Torque, rotational inertia, rolling and angular momentum. Practice lab-design questions.' },
    { when: 'Mar – Apr', focus: 'Units 7–8: oscillations and fluids', text: 'Springs, pendulums, buoyancy and Bernoulli. Begin full timed sections in April.' },
    { when: 'Early May', focus: 'Free-response drills', text: 'All four question types under timing. Review linearization and the traps list.' },
  ],
  scores: { threePlus: '67–68%', fives: '19–20%' },
  practice: [
    {
      topic: 'Unit 4 · Collisions',
      question: 'A 2 kg cart at 3 m/s collides with and sticks to a 1 kg cart at rest. How much kinetic energy is lost?',
      choices: ['0 J', '3 J', '6 J', '9 J'],
      answer: 'B · 3 J',
      why: 'Momentum: 2 × 3 = 3v, so v = 2 m/s. Kinetic energy before = 9 J, after = ½(3)(2²) = 6 J. Lost: 3 J.',
    },
    {
      topic: 'Unit 7 · Oscillations',
      question: "A pendulum on Earth has a period of 2.0 s. On a planet where g is four times larger, the same pendulum's period is:",
      choices: ['0.5 s', '1.0 s', '2.0 s', '4.0 s'],
      answer: 'B · 1.0 s',
      why: 'T = 2π√(L/g). Four times g halves the period: 2.0 s → 1.0 s.',
    },
    {
      topic: 'Unit 8 · Fluids',
      question: 'Water flows through a horizontal pipe that narrows from area A to area A/2. Compared with the wide section, the narrow section has:',
      choices: [
        'Higher speed and lower pressure',
        'Higher speed and higher pressure',
        'Lower speed and higher pressure',
        'The same speed and lower pressure',
      ],
      answer: 'A',
      why: 'Continuity (A × v is constant): halving the area doubles the speed. Bernoulli: faster flow at the same height means lower pressure.',
    },
  ],
  faq: [
    {
      q: 'Is fluids on the AP Physics 1 exam?',
      a: 'Yes. Fluids is Unit 8 of AP Physics 1 and makes up 10–15% of the multiple-choice section: density and pressure, buoyancy, the continuity equation and Bernoulli\'s equation.',
    },
    {
      q: 'Do I need calculus for AP Physics 1?',
      a: 'No. AP Physics 1 is algebra-based. You need confident algebra with symbols and the ability to read slopes and areas from graphs. Calculus-based mechanics is AP Physics C: Mechanics.',
    },
  ],
};
