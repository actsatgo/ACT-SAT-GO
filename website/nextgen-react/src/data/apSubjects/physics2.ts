import type { ApSubject } from './types';

export const PHYSICS_2: ApSubject = {
  slug: 'physics-2',
  guideSlug: 'ap-physics-2-exam-guide-act-sat-go',
  name: 'AP Physics 2: Algebra-Based',
  metaTitle: 'AP Physics 2 Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Physics 2 exam explained: 42 multiple-choice and 4 free-response questions, all 7 units from thermodynamics to modern physics, the four FRQ types, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Physics 2 exam is 3 hours: 42 multiple-choice questions in 85 minutes and 4 free-response questions in 95 minutes, each worth half your score. It covers 7 algebra-based units (thermodynamics, electrostatics, circuits, magnetism, optics, waves and modern physics) that carry close to equal weight, so there is no unit you can skip. A calculator and an equation sheet are allowed throughout. About 72–73% of students score 3 or higher.',
  examDate: 'Thursday, May 6, 2027 (morning session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '85 min multiple choice + 95 min free response' },
    { value: '42 + 4', label: 'multiple-choice + free-response questions' },
    { value: '7 units', label: 'thermodynamics to modern physics' },
    { value: '72–73%', label: 'scored 3 or higher in recent years' },
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
      'Draw a diagram for every question: forces, fields, circuits or rays. It prevents sign errors.',
      'Check limiting cases. What happens if a mass is zero or an angle is 90°? Wrong choices often fail this test.',
      'Use units to eliminate answer choices with the wrong dimensions.',
      'Read graphs as relationships: slope and area under the curve both have physical meaning.',
      'Work symbolically first, then plug in numbers only if needed.',
      'Flag and move on after 3 minutes. Return once the quick points are banked.',
    ],
  },
  unitStart: 9,
  units: [
    { name: 'Thermodynamics', weight: '15–18%', about: 'Heat, gases and engines.', skills: 'Use the ideal gas law and kinetic theory; apply the first law (ΔU = Q + W) to PV diagrams; analyze heat engines and efficiency; describe thermal conduction and entropy.' },
    { name: 'Electric Force, Field & Potential', weight: '15–18%', about: 'Charges and the fields around them.', skills: "Apply Coulomb's law; draw field lines and equipotentials; calculate field and potential from point charges; relate field to potential difference; analyze capacitors." },
    { name: 'Electric Circuits', weight: '15–18%', about: 'Current, resistance and power.', skills: "Use Ohm's law and resistivity; reduce series and parallel networks; apply Kirchhoff's rules; calculate power; analyze RC circuits qualitatively." },
    { name: 'Magnetism & Electromagnetism', weight: '12–15%', about: 'Magnetic forces and induction.', skills: "Find forces on moving charges and currents; use right-hand rules; describe fields of wires; apply Faraday's and Lenz's laws." },
    { name: 'Geometric Optics', weight: '12–15%', about: 'Mirrors, lenses and refraction.', skills: "Apply reflection and Snell's law; find critical angles; draw ray diagrams; use the thin lens and mirror equations and magnification." },
    { name: 'Waves, Sound & Physical Optics', weight: '12–15%', about: 'Wave behavior and interference.', skills: 'Describe wave properties and standing waves; apply the Doppler effect; analyze double-slit and thin-film interference and diffraction.' },
    { name: 'Modern Physics', weight: '12–15%', about: 'Photons, atoms and nuclei.', skills: 'Use photon energy and the photoelectric effect; read energy-level diagrams; describe wave-particle duality; balance nuclear decays and use E = mc².' },
  ],
  unitsNote: 'Units are numbered 9–15 because they continue on from AP Physics 1 (Units 1–8), and Physics 1 ideas such as energy and forces are used throughout. The seven units are close to equal, and electricity (Units 10–11) together is nearly a third of the multiple-choice section.',
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
    'Show the equation, the substitution and the units.',
    'Justify with a cause → effect sentence, not a word.',
    "Use the reference sheet; you don't need to memorize it.",
    'Blank part? Write the relationship you would use. It can earn credit.',
  ],
  traps: [
    { title: 'Current "used up"', text: 'Current is the same everywhere in a series path. Resistors use up potential energy, not charge.' },
    { title: 'Field vs potential', text: "Field is a vector (direction matters); potential is a scalar (just add with signs). Field can be zero where potential isn't." },
    { title: 'Sign of work on a gas', text: 'In ΔU = Q + W, W is work done on the gas. Expansion means W is negative.' },
    { title: 'Right-hand rule for electrons', text: 'For a negative charge, the force is opposite to what the right-hand rule gives for a positive charge.' },
    { title: "Lenz's law direction", text: 'The induced current opposes the change in flux, not the flux itself.' },
    { title: 'Lens sign conventions', text: 'Real images have positive image distance; a negative magnification means the image is inverted.' },
    { title: 'Light bending at a boundary', text: 'Entering a higher index, light bends toward the normal and slows; its frequency stays the same.' },
    { title: 'Photoelectric intensity', text: 'Brighter light releases more electrons but not faster ones. Only frequency changes their maximum kinetic energy.' },
    { title: 'Unit conversions', text: 'Convert nm, cm, μC and eV to SI units before using equations.' },
    { title: 'Words and math disagree', text: 'In QQT questions, an explanation that contradicts your equation loses points on both.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 9: heat and gases', text: 'Ideal gases, the first law and PV diagrams, heat engines and entropy. Practice sign conventions now.' },
    { when: 'Nov – Dec', focus: 'Unit 10: electrostatics', text: 'Charges, fields, potential and capacitors. Draw field lines and equipotentials until they make sense.' },
    { when: 'Jan – Feb', focus: 'Units 11–12: circuits and magnetism', text: "Circuits, Kirchhoff's rules, magnetic forces and induction. One free-response question per week." },
    { when: 'Mar – Apr', focus: 'Units 13–15: light and modern physics', text: 'Optics, waves, interference, photons and nuclear physics. Begin full timed sections in April.' },
    { when: 'Early May', focus: 'Free-response drills', text: 'All four question types under timing. Review sign conventions and the traps list.' },
  ],
  scores: { threePlus: '72–73%', fives: '20–22%' },
  practice: [
    {
      topic: 'Unit 9 · First law',
      question: 'A gas expands at a constant pressure of 2.0 × 10⁵ Pa from 0.010 m³ to 0.030 m³ while absorbing 10,000 J of heat. What is the change in its internal energy?',
      choices: ['+6,000 J', '+4,000 J', '+10,000 J', '+14,000 J'],
      answer: 'A · +6,000 J',
      why: 'Work done on the gas W = −PΔV = −(2 × 10⁵)(0.020) = −4,000 J. ΔU = Q + W = 10,000 − 4,000 = 6,000 J.',
    },
    {
      topic: 'Unit 11 · Circuits',
      question: 'A 12 V battery is connected to a 4 Ω resistor in series with a parallel pair of 6 Ω and 3 Ω resistors. What is the current through the 3 Ω resistor?',
      choices: ['0.67 A', '1.33 A', '2.0 A', '4.0 A'],
      answer: 'B · 1.33 A',
      why: 'The parallel pair is 2 Ω, so the total is 6 Ω and I = 2 A. The potential difference across the pair is 4 V, so the 3 Ω resistor carries 4/3 ≈ 1.33 A.',
    },
    {
      topic: 'Unit 15 · Photoelectric effect',
      question: 'Light of wavelength 500 nm strikes a metal with a work function of 2.0 eV. What is the maximum kinetic energy of the emitted electrons? (hc ≈ 1,240 eV·nm)',
      choices: ['2.0 eV', '2.48 eV', 'No electrons are emitted', '0.48 eV'],
      answer: 'D · 0.48 eV',
      why: 'Photon energy = 1,240/500 = 2.48 eV. Maximum kinetic energy = 2.48 − 2.0 = 0.48 eV.',
    },
  ],
  faq: [
    {
      q: 'Do I need AP Physics 1 before AP Physics 2?',
      a: 'It is strongly recommended. AP Physics 2 continues where Physics 1 ends (its units are numbered 9–15), and ideas such as forces, energy and momentum are used throughout.',
    },
    {
      q: 'What topics are on the AP Physics 2 exam?',
      a: 'Seven units with close to equal weight: thermodynamics, electric force, field and potential, electric circuits, magnetism and electromagnetism, geometric optics, waves and physical optics, and modern physics.',
    },
  ],
};
