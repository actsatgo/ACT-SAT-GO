import type { ApSubject } from './types';
import { PHYSICS_C_STRUCTURE, PHYSICS_FORMAT_NOTES, PHYSICS_FRQ, PHYSICS_HABITS, PHYSICS_MCQ } from './physics';

export const PHYSICS_C_MECHANICS: ApSubject = {
  slug: 'physics-c-mechanics',
  guideSlug: 'ap-physics-c-mechanics-exam-guide-act-sat-go',
  name: 'AP Physics C: Mechanics',
  metaTitle: 'AP Physics C: Mechanics Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Physics C: Mechanics exam explained: 42 multiple-choice and 4 free-response questions, all 7 calculus-based units, the four FRQ types, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Physics C: Mechanics exam is 3 hours: 42 multiple-choice questions in 85 minutes and 4 free-response questions in 95 minutes, each worth half your score. It is a calculus-based course, so expect derivatives, integrals and simple differential equations in every unit. Forces and energy carry the most weight, and rotation together is just as large. A calculator and an equation sheet are allowed throughout. About 72–73% of students score 3 or higher.',
  examDate: 'Monday, May 3, 2027 (morning session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '85 min multiple choice + 95 min free response' },
    { value: '42 + 4', label: 'multiple-choice + free-response questions' },
    { value: '7 units', label: 'kinematics to oscillations, with calculus' },
    { value: '72–73%', label: 'scored 3 or higher in recent years' },
  ],
  structure: PHYSICS_C_STRUCTURE,
  formatNotes: PHYSICS_FORMAT_NOTES,
  mcq: PHYSICS_MCQ,
  units: [
    { name: 'Kinematics', weight: '10–15%', about: 'Describing motion with calculus.', skills: 'Differentiate and integrate position, velocity and acceleration; handle non-constant acceleration; analyze 2D and projectile motion; use relative velocity.' },
    { name: 'Force & Translational Dynamics', weight: '20–25%', about: "Newton's laws, including drag.", skills: "Apply Newton's laws to systems; handle velocity-dependent drag with differential equations; analyze circular motion and gravitation; find the center of mass." },
    { name: 'Work, Energy & Power', weight: '15–25%', about: 'Energy as an integral.', skills: 'Calculate work as ∫F·dx; relate force and potential energy (F = −dU/dx); use conservation of energy; calculate power as dW/dt.' },
    { name: 'Linear Momentum', weight: '10–20%', about: 'Impulse, collisions and the center of mass.', skills: 'Use impulse as ∫F dt; apply conservation of momentum in collisions and explosions; track center-of-mass motion.' },
    { name: 'Torque & Rotational Dynamics', weight: '10–15%', about: 'How things turn.', skills: 'Calculate rotational inertia by integration and the parallel-axis theorem; apply Στ = Iα; analyze static equilibrium.' },
    { name: 'Energy & Momentum of Rotating Systems', weight: '10–15%', about: 'Rolling, spinning and orbits.', skills: 'Use rotational kinetic energy and rolling without slipping; apply conservation of angular momentum; analyze orbits.' },
    { name: 'Oscillations', weight: '10–15%', about: 'Simple harmonic motion.', skills: 'Derive and solve the SHM differential equation; find periods for springs and physical pendulums; track energy in oscillators.' },
  ],
  unitsNote: 'Forces and energy carry the most weight, but rotation (Units 5–6) together is as large as either. Calculus is expected throughout, ideally from AP Calculus taken before or alongside this course.',
  frq: PHYSICS_FRQ,
  habits: PHYSICS_HABITS,
  traps: [
    { title: 'Constant-acceleration equations everywhere', text: 'If acceleration changes with time or position, integrate instead of using the kinematic equations.' },
    { title: 'Missing the chain rule', text: 'For a(x), use a = v dv/dx. Many students get stuck trying to integrate with respect to time.' },
    { title: 'Wrong axis for I', text: 'Rotational inertia depends on the axis. Use the parallel-axis theorem: I = I(cm) + Md².' },
    { title: 'Sign of potential energy', text: 'F = −dU/dx. Forces point "downhill" on a U(x) graph.' },
    { title: 'Rolling friction does work', text: 'In rolling without slipping, static friction does no work on the object.' },
    { title: 'Angular momentum of a point', text: 'A particle moving in a straight line can have angular momentum about a point: L = r × p.' },
    { title: 'Centripetal force on diagrams', text: 'Never draw "Fc". A real force (tension, gravity, normal) provides it.' },
    { title: 'Forgetting limits of integration', text: 'Use definite integrals with physical limits, or solve for the constant with an initial condition.' },
    { title: 'Physical pendulum period', text: 'T = 2π√(I/(mgd)), where d is the distance from the pivot to the center of mass.' },
    { title: 'Plugging in too early', text: 'Derive symbolically first. Many questions ask for answers "in terms of" given quantities.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: motion and forces', text: "Calculus-based kinematics, Newton's laws, drag and circular motion. Practice setting up differential equations." },
    { when: 'Nov – Dec', focus: 'Units 3–4: conservation', text: 'Work integrals, potential energy curves, momentum and center of mass. Start one free-response question per week.' },
    { when: 'Jan – Feb', focus: 'Units 5–6: rotation', text: 'Rotational inertia by integration, torque, rolling and angular momentum.' },
    { when: 'Mar – Apr', focus: 'Unit 7 and timed practice', text: 'SHM, physical pendulums and energy. Begin full timed sections in April.' },
    { when: 'Early May', focus: 'Free-response drills', text: 'All four question types under timing, with a focus on derivations.' },
  ],
  scores: { threePlus: '72–73%', fives: '20–22%' },
  practice: [
    {
      topic: 'Unit 1 · Variable acceleration',
      question: 'A particle starts at x = 0 with velocity 2 m/s, and its acceleration is a = 6t (m/s²). What is its position at t = 2 s?',
      choices: ['8 m', '10 m', '12 m', '16 m'],
      answer: 'C · 12 m',
      why: "v = ∫6t dt = 3t² + 2, so x = ∫v dt = t³ + 2t. At t = 2: 8 + 4 = 12 m. Using x = ½at² is wrong because a isn't constant.",
    },
    {
      topic: 'Unit 3 · Potential energy',
      question: "A particle's potential energy is U(x) = 2x³ − 6x (J). At x = 2 m, the force on it is:",
      choices: ['18 N in the −x direction', '18 N in the +x direction', '4 N in the −x direction', '0 N'],
      answer: 'A',
      why: 'F = −dU/dx = −(6x² − 6) = −(24 − 6) = −18 N, so 18 N in the −x direction.',
    },
    {
      topic: 'Unit 6 · Rolling',
      question: 'A solid sphere (I = ⅖MR²) rolls without slipping from rest down a ramp, dropping 1.4 m vertically. What is its speed at the bottom?',
      choices: ['3.7 m/s', '4.4 m/s', '5.2 m/s', '6.2 m/s'],
      answer: 'B · 4.4 m/s',
      why: 'mgh = ½mv² + ½(⅖mR²)(v/R)² = 0.7mv², so v = √(gh/0.7) = √19.6 ≈ 4.4 m/s.',
    },
  ],
  faq: [
    {
      q: 'Do I need calculus for AP Physics C: Mechanics?',
      a: 'Yes. You should be comfortable with derivatives, integrals and simple differential equations, ideally from AP Calculus taken before or alongside the course.',
    },
    {
      q: 'What is the difference between AP Physics 1 and AP Physics C: Mechanics?',
      a: 'Both cover mechanics, but Physics 1 is algebra-based and includes fluids, while Physics C: Mechanics uses calculus throughout (variable forces, drag, rotational inertia by integration) and goes deeper on fewer topics.',
    },
  ],
};
