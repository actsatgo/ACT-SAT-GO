import type { ApSubject } from './types';

export const CHEMISTRY: ApSubject = {
  slug: 'chemistry',
  guideSlug: 'ap-chemistry-exam-guide-act-sat-go',
  name: 'AP Chemistry',
  metaTitle: 'AP Chemistry Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Chemistry exam explained: 60 multiple-choice and 7 free-response questions in 3 hours 15 minutes, all 9 units with weightings, FRQ types, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Chemistry exam is 3 hours 15 minutes: 60 multiple-choice questions in 90 minutes and 7 free-response questions in 105 minutes, each worth half your score. It covers 9 units, with intermolecular forces, gases and solutions (Unit 3) and acids and bases (Unit 8) the largest. A periodic table, an equation sheet and a calculator are allowed throughout. About 75–78% of students score 3 or higher.',
  examDate: 'Thursday, May 6, 2027 (afternoon session)',
  length: '3 hours 15 minutes',
  glance: [
    { value: '3 hr 15', label: '90 min multiple choice + 105 min free response' },
    { value: '60 + 7', label: 'multiple-choice + free-response questions' },
    { value: '9 units', label: 'atoms to electrochemistry' },
    { value: '75–78%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    {
      section: 'I · Multiple choice',
      weight: '50%',
      timing: '1 hr 30 min · 60 questions',
      what: 'Questions on models, experiments, particle diagrams and calculations. A scientific or graphing calculator is recommended.',
    },
    {
      section: 'II · Free response',
      weight: '50%',
      timing: '1 hr 45 min · 7 questions',
      what: '3 long questions worth 10 points each and 4 short questions worth 4 points each. Explain models, design experiments, represent data, calculate and justify claims.',
    },
  ],
  formatNotes: [
    {
      title: 'Click in Bluebook, write on paper',
      text: 'You answer multiple-choice questions and read the free-response questions in the Bluebook app, then handwrite free-response answers in a paper booklet.',
    },
    {
      title: 'Periodic table + equation sheet',
      text: 'A periodic table and a sheet of equations and constants are provided for both sections. You still need to know which equation applies and what each symbol means.',
    },
  ],
  mcq: {
    intro: '60 questions in 90 minutes gives you 1 minute 30 seconds per question. Calculations are designed to be done quickly, often by estimating. Wrong answers lose no points.',
    tips: [
      'Estimate before calculating. Answer choices are often far enough apart that rounding works.',
      'Draw particle diagrams for "what does the mixture look like" questions.',
      "Use Coulomb's law reasoning for ionization energy, lattice energy and atomic size.",
      'Check units and significant figures only after the chemistry is right.',
      'Know your strong acids and bases and the common soluble and insoluble ions.',
      'Flag and move on after 2 minutes. Return once the quick points are banked.',
    ],
  },
  units: [
    { name: 'Atomic Structure & Properties', weight: '7–9%', about: 'Moles, electrons and periodic trends.', skills: "Convert moles, mass and particles; read mass and photoelectron spectra; write electron configurations; explain trends with Coulomb's law." },
    { name: 'Compound Structure & Properties', weight: '7–9%', about: 'Bonding and molecular shape.', skills: 'Compare ionic, covalent and metallic bonding; draw Lewis structures and formal charges; use VSEPR and hybridization; predict polarity.' },
    { name: 'Properties of Substances & Mixtures', weight: '18–22%', about: 'Intermolecular forces, gases and solutions.', skills: "Rank IMFs and boiling points; use the ideal gas law and kinetic molecular theory; calculate molarity; explain chromatography, distillation and Beer's law." },
    { name: 'Chemical Reactions', weight: '7–9%', about: 'Equations, stoichiometry and reaction types.', skills: 'Write net ionic equations; do stoichiometry and limiting reactant problems; run titration calculations; identify acid-base and redox reactions.' },
    { name: 'Kinetics', weight: '7–9%', about: 'How fast reactions happen and why.', skills: 'Find rate laws from data; use integrated rate laws and half-life; connect mechanisms to rate laws; explain catalysts and activation energy.' },
    { name: 'Thermochemistry', weight: '7–9%', about: 'Heat in reactions.', skills: "Use q = mcΔT and calorimetry; apply Hess's law and bond enthalpies; relate ΔH to bond breaking and forming." },
    { name: 'Equilibrium', weight: '7–9%', about: 'Reversible reactions and their balance point.', skills: "Write K and Q; use ICE tables; apply Le Châtelier's principle; calculate solubility with Ksp and the common-ion effect." },
    { name: 'Acids & Bases', weight: '11–15%', about: 'pH, buffers and titrations.', skills: 'Calculate pH for strong and weak acids and bases; use Henderson-Hasselbalch for buffers; read titration curves; relate pKa to structure.' },
    { name: 'Thermodynamics & Electrochemistry', weight: '7–9%', about: 'What makes reactions favorable, and batteries.', skills: "Predict signs of ΔS and ΔG; relate ΔG°, K and E°; describe galvanic and electrolytic cells; use Faraday's law." },
  ],
  unitsNote: 'Unit 3 (intermolecular forces, gases, solutions) and Unit 8 (acids and bases) are the biggest. Unit 3 ideas also explain answers across the rest of the course.',
  frq: {
    intro: '105 minutes for 3 long questions (10 points each) and 4 short questions (4 points each): 46 raw points in total. Long questions combine several units around one scenario.',
    types: [
      { label: 'Q1–Q3 · long', title: 'Three 10-point questions', text: 'One scenario, many parts: calculations, particle-level explanations, experimental design and data analysis, often across several units.', tip: 'Later parts may use earlier answers. If you are stuck, assume a value and keep going.' },
      { label: 'Q4–Q7 · short', title: 'Four 4-point questions', text: 'A single focused task: one calculation, one explanation, or one representation such as a particle diagram or Lewis structure.', tip: "Short questions are quick points. Don't leave them to the end." },
      { label: 'Calc', title: 'Calculation parts', text: 'Show the equation, substitute with units, and give an answer with appropriate significant figures.', tip: 'A correct setup with an arithmetic slip can still earn most of the credit.' },
      { label: 'Why', title: 'Explanation parts', text: 'Explain using intermolecular forces, Coulombic attraction, collisions, or comparisons of Q and K.', tip: 'Compare both substances: "A has stronger IMFs than B because…".' },
    ],
    timePlan: 'About 23 minutes for each long question and 9 minutes for each short one.',
  },
  habits: [
    'Answer every lettered part, in order, with a label.',
    'Show the equation, the substitution and the units.',
    'Justify with a cause → effect sentence, not a word.',
    "Use the reference sheet; you don't need to memorize it.",
    'Blank part? Write the relationship you would use. It can earn credit.',
  ],
  traps: [
    { title: 'Bond breaking releases energy', text: 'Breaking bonds always absorbs energy. Forming bonds releases it.' },
    { title: 'IMFs vs bonds', text: 'Boiling breaks intermolecular forces, not covalent bonds within molecules.' },
    { title: 'Spectator ions in net ionic equations', text: 'Strong electrolytes in solution appear as ions; cancel spectators; keep solids, liquids, gases and weak acids whole.' },
    { title: 'Catalysts and equilibrium', text: 'A catalyst speeds up both directions equally. It does not change K or the equilibrium amounts.' },
    { title: 'Temperature and K', text: 'Only temperature changes K. Concentration and pressure changes shift the position, not K.' },
    { title: 'Weak vs strong', text: 'A dilute strong acid is still strong; a concentrated weak acid is still weak. Strength means extent of ionization.' },
    { title: 'Units in the gas law', text: 'Use kelvin, and match R to your pressure and volume units.' },
    { title: 'Rate law from the equation', text: "Rate laws come from experiments or the slow step of a mechanism, not from the balanced equation's coefficients." },
    { title: 'Signs of ΔG, E° and K', text: 'Favorable: ΔG° < 0, E° > 0, K > 1. Keep all three consistent.' },
    { title: 'One-sided comparisons', text: '"A has strong IMFs" isn\'t enough. Compare: "A has stronger IMFs than B because…".' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: foundations', text: 'Moles, electron configurations, trends, bonding and molecular shape. Master unit conversions now.' },
    { when: 'Nov – Dec', focus: 'Units 3–4: matter and reactions', text: 'IMFs, gases, solutions, net ionic equations and stoichiometry. Practice particle diagrams.' },
    { when: 'Jan – Feb', focus: 'Units 5–7: rates and energy', text: 'Kinetics, thermochemistry and equilibrium. One long free-response question each week.' },
    { when: 'Mar – Apr', focus: 'Units 8–9: acids and thermodynamics', text: 'pH, buffers, titrations, ΔG and electrochemistry. Begin full timed sections in April.' },
    { when: 'Early May', focus: 'Free-response drills', text: 'Three long and four short questions under timing. Review the traps list.' },
  ],
  scores: { threePlus: '75–78%', fives: '15–18%' },
  practice: [
    {
      topic: 'Unit 8 · Weak acids',
      question: 'What is the pH of 0.10 M acetic acid (Ka = 1.8 × 10⁻⁵)?',
      choices: ['1.00', '2.87', '4.74', '5.74'],
      answer: 'B · 2.87',
      why: '[H⁺] ≈ √(Ka·C) = √(1.8 × 10⁻⁶) ≈ 1.34 × 10⁻³ M, so pH ≈ 2.87. Choice A treats it as a strong acid; C is the pKa.',
    },
    {
      topic: "Unit 7 · Le Châtelier",
      question: 'For the exothermic reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which change increases the equilibrium constant?',
      choices: ['Lowering the temperature', 'Adding more O₂', 'Increasing the pressure', 'Adding a catalyst'],
      answer: 'A',
      why: 'Only temperature changes K. For an exothermic reaction, lowering T shifts toward products and increases K. Adding O₂ or pressure shifts position only; catalysts change neither.',
    },
    {
      topic: 'Unit 9 · Thermodynamics',
      question: 'A reaction has ΔH° = +50 kJ/mol and ΔS° = +200 J/(mol·K). At what temperatures is it thermodynamically favorable?',
      choices: ['At all temperatures', 'Only above 250 K', 'Only below 250 K', 'At no temperature'],
      answer: 'B',
      why: 'ΔG = ΔH − TΔS < 0 when T > ΔH/ΔS = 50,000/200 = 250 K. Convert J to kJ consistently.',
    },
  ],
  faq: [
    {
      q: 'Can I use a calculator on the AP Chemistry exam?',
      a: 'Yes. A scientific or graphing calculator is allowed on both sections, and a periodic table and an equations and constants sheet are provided.',
    },
    {
      q: 'What is the hardest part of AP Chemistry?',
      a: 'Most points are lost on explanations rather than arithmetic. Answers need particle-level reasoning (intermolecular forces, Coulombic attraction, collisions) that compares the substances, and acids and bases (Unit 8) is the second-largest unit.',
    },
  ],
};
