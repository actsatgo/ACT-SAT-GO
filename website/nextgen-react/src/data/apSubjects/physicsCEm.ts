import type { ApSubject } from './types';
import { PHYSICS_C_STRUCTURE, PHYSICS_FORMAT_NOTES, PHYSICS_FRQ, PHYSICS_HABITS, PHYSICS_MCQ } from './physics';

export const PHYSICS_C_EM: ApSubject = {
  slug: 'physics-c-electricity-and-magnetism',
  guideSlug: 'ap-physics-c-electricity-and-magnetism-exam-guide-act-sat-go',
  name: 'AP Physics C: Electricity and Magnetism',
  metaTitle: 'AP Physics C: E&M Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    "The AP Physics C: Electricity and Magnetism exam explained: 42 multiple-choice and 4 free-response questions, all 6 calculus-based units from Gauss's law to induction, FRQ types, common traps and a study plan to May 2027.",
  updated: '2026-10-22',
  intro:
    "The AP Physics C: Electricity and Magnetism exam is 3 hours: 42 multiple-choice questions in 85 minutes and 4 free-response questions in 95 minutes, each worth half your score. It covers 6 calculus-based units, and electric fields with Gauss's law and circuits are the largest. Magnetism and induction together are a similar share, so don't leave them to April. A calculator and an equation sheet are allowed throughout. About 73–75% of students score 3 or higher.",
  examDate: 'Wednesday, May 5, 2027 (afternoon session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '85 min multiple choice + 95 min free response' },
    { value: '42 + 4', label: 'multiple-choice + free-response questions' },
    { value: '6 units', label: 'electric fields to induction' },
    { value: '73–75%', label: 'scored 3 or higher in recent years' },
  ],
  structure: PHYSICS_C_STRUCTURE,
  formatNotes: PHYSICS_FORMAT_NOTES,
  mcq: PHYSICS_MCQ,
  unitStart: 8,
  units: [
    { name: "Electric Charges, Fields & Gauss's Law", weight: '15–25%', about: 'Charges and the fields they create.', skills: "Apply Coulomb's law; integrate to find fields of continuous charge distributions; use Gauss's law for spheres, cylinders and planes." },
    { name: 'Electric Potential', weight: '10–20%', about: 'Energy per charge.', skills: 'Relate field and potential (E = −dV/dx); calculate potential of point and continuous charges; find potential energy of charge systems.' },
    { name: 'Conductors & Capacitors', weight: '10–15%', about: 'Storing charge and energy.', skills: 'Describe charge on conductors in equilibrium; calculate capacitance; combine capacitors; include dielectrics; find stored energy.' },
    { name: 'Electric Circuits', weight: '15–25%', about: 'Current, resistance and RC circuits.', skills: "Use Kirchhoff's rules on multi-loop circuits; analyze RC circuits with exponential charging and discharging; calculate power." },
    { name: 'Magnetic Fields & Electromagnetism', weight: '10–20%', about: 'Magnetic forces and the fields of currents.', skills: "Find forces on moving charges and currents; use the Biot-Savart law and Ampère's law for wires and solenoids." },
    { name: 'Electromagnetic Induction', weight: '10–20%', about: 'Changing flux and inductors.', skills: "Apply Faraday's and Lenz's laws; analyze motional emf; describe inductance and LR circuits; analyze LC oscillations qualitatively." },
  ],
  unitsNote: "Units are numbered 8–13 because they continue on from Physics C: Mechanics (Units 1–7), and mechanics ideas such as forces, energy and Newton's laws are used throughout. Expect integrals for continuous charges and differential equations for RC and LR circuits.",
  frq: PHYSICS_FRQ,
  habits: PHYSICS_HABITS,
  traps: [
    { title: 'Field inside a conductor', text: 'In electrostatic equilibrium, E = 0 inside a conductor and any excess charge sits on the surface.' },
    { title: "Gauss's law without symmetry", text: "Gauss's law is always true, but it only gives E easily when symmetry makes E constant on the surface." },
    { title: 'Sign of E = −dV/dx', text: 'The field points toward decreasing potential.' },
    { title: 'Capacitor combinations', text: 'Capacitors add directly in parallel and as reciprocals in series, the opposite of resistors.' },
    { title: 'RC behavior at t = 0 and ∞', text: 'An uncharged capacitor acts like a wire at t = 0 and like an open circuit after a long time.' },
    { title: 'Inductor behavior', text: 'An inductor resists changes in current: open-circuit-like at t = 0, a plain wire after a long time.' },
    { title: 'Right-hand rule for wires', text: 'Thumb along the current; fingers curl in the direction of B around the wire.' },
    { title: "Lenz's law direction", text: 'The induced current opposes the change in flux, not the flux itself.' },
    { title: "Ampère's law path", text: 'Choose a loop where B is constant and parallel to the path, and count only the current enclosed.' },
    { title: 'Plugging in too early', text: 'Derive symbolically first. Many questions ask for answers "in terms of" given quantities.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 8: fields', text: "Coulomb's law, fields of continuous charges by integration, and Gauss's law for every symmetry." },
    { when: 'Nov – Dec', focus: 'Units 9–10: potential and capacitors', text: 'Potential from fields, conductors, capacitance and dielectrics. Start one free-response question per week.' },
    { when: 'Jan – Feb', focus: 'Unit 11: circuits', text: "Kirchhoff's rules and RC circuits with differential equations." },
    { when: 'Mar – Apr', focus: 'Units 12–13: magnetism and induction', text: 'Biot-Savart, Ampère, Faraday, Lenz, inductors and LR circuits. Begin full timed sections in April.' },
    { when: 'Early May', focus: 'Free-response drills', text: 'All four question types under timing, focusing on Gauss and Ampère derivations.' },
  ],
  scores: { threePlus: '73–75%', fives: '24–25%' },
  practice: [
    {
      topic: "Unit 8 · Gauss's law",
      question: 'A uniformly charged solid sphere (radius R, charge Q) has field E₀ at its surface. What is the field at r = R/2?',
      choices: ['E₀/4', 'E₀', '2E₀', 'E₀/2'],
      answer: 'D · E₀/2',
      why: 'Inside a uniform solid sphere, E = Qr/(4πε₀R³) grows linearly with r. Half the radius gives half the surface field.',
    },
    {
      topic: 'Unit 10 · Capacitors',
      question: 'A parallel-plate capacitor is charged and then disconnected from the battery. The plate separation is doubled. What happens to the stored energy?',
      choices: ['It halves', 'It doubles', 'It stays the same', 'It quadruples'],
      answer: 'B · It doubles',
      why: 'Isolated, so Q is constant. Doubling d halves C. U = Q²/(2C), so U doubles; the extra energy comes from the work done pulling the plates apart.',
    },
    {
      topic: "Unit 13 · Faraday's law",
      question: 'The flux through a 50-turn coil is Φ = 0.02t² (Wb per turn). What is the magnitude of the induced emf at t = 3 s?',
      choices: ['0.12 V', '0.18 V', '6.0 V', '9.0 V'],
      answer: 'C · 6.0 V',
      why: 'emf = N dΦ/dt = 50 × 0.04t = 50 × 0.12 = 6.0 V at t = 3 s. Choice A forgets the 50 turns.',
    },
  ],
  faq: [
    {
      q: 'Should I take Physics C: Mechanics before E&M?',
      a: 'Usually, yes. E&M units are numbered 8–13 because they continue from Mechanics, and forces, energy and Newton\'s laws are used throughout. Many schools teach both in one year, Mechanics first.',
    },
    {
      q: 'How much calculus is on AP Physics C: E&M?',
      a: 'A lot: integrating to find fields of continuous charges, E = −dV/dx, and differential equations for RC and LR circuits. Being in or past AP Calculus helps.',
    },
  ],
};
