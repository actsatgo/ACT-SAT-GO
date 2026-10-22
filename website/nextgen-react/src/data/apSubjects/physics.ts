import type { ApSubject } from './types';

/** Format, multiple-choice and free-response content shared by the AP Physics C exams. */
export const PHYSICS_C_STRUCTURE: ApSubject['structure'] = [
  { section: 'I · Multiple choice', weight: '50%', timing: '1 hr 25 min · 42 questions', what: 'Single questions and short sets built around a stimulus such as a diagram, graph or data table. Calculator allowed.' },
  { section: 'II · Free response', weight: '50%', timing: '1 hr 35 min · 4 questions', what: 'Four question types: Mathematical Routines, Translation Between Representations, Experimental Design and Analysis, and Qualitative/Quantitative Translation.' },
];

export const PHYSICS_FORMAT_NOTES: ApSubject['formatNotes'] = [
  { title: 'Click in Bluebook, write on paper', text: 'You answer multiple-choice questions and read the free-response questions in the Bluebook app, then handwrite free-response answers in a paper booklet.' },
  { title: 'Equation sheet + calculator', text: 'A table of equations and constants is provided, and a calculator is allowed throughout. Knowing when an equation applies, and its conditions, matters more than memorizing it.' },
];

export const PHYSICS_MCQ: ApSubject['mcq'] = {
  intro: '42 questions in 85 minutes gives you about 2 minutes per question. Many questions test reasoning with symbols and graphs rather than plugging in numbers. Wrong answers lose no points.',
  tips: [
    'Draw a diagram for every question: forces, fields, circuits or rays. It prevents sign errors.',
    'Check limiting cases. What happens if a mass is zero or an angle is 90°? Wrong choices often fail this test.',
    'Use units to eliminate answer choices with the wrong dimensions.',
    'Read graphs as relationships: slope and area under the curve both have physical meaning.',
    'Work symbolically first, then plug in numbers only if needed.',
    'Flag and move on after 3 minutes. Return once the quick points are banked.',
  ],
};

export const PHYSICS_FRQ: ApSubject['frq'] = {
  title: 'The 4 free-response questions',
  intro: '95 minutes, 4 questions. The four question types are the same every year, so you can practice each on purpose. Mathematical Routines and lab questions are typically worth the most points.',
  types: [
    { label: 'MR', title: 'Mathematical Routines', text: 'Use equations and principles to derive expressions and calculate quantities, often starting symbolically.', tip: 'Start from a fundamental equation and show each substitution.' },
    { label: 'TBR', title: 'Translation Between Representations', text: 'Draw a free-body diagram, energy bar chart or graph, then write equations that are consistent with it.', tip: 'Arrows on free-body diagrams start on the object and are labeled.' },
    { label: 'LAB', title: 'Experimental Design and Analysis', text: 'Design a procedure, choose what to graph to get a straight line (linearize), then use the slope to find a quantity.', tip: 'Linearize: graph the quantities that make y = mx a straight line.' },
    { label: 'QQT', title: 'Qualitative/Quantitative Translation', text: 'Explain a situation in words with physics reasoning, then derive an equation that agrees with your explanation.', tip: 'Make sure your words and your equation predict the same trend.' },
  ],
  timePlan: 'About 25 minutes for MR, 22 for TBR, 25 for LAB and 23 for QQT. Points are given for derivations: "plugging in" without a starting equation often loses credit.',
};

export const PHYSICS_HABITS: string[] = [
  'Answer every lettered part, in order, with a label.',
  'Show the equation, the substitution and the units.',
  'Justify with a cause → effect sentence, not a word.',
  "Use the reference sheet; you don't need to memorize it.",
  'Blank part? Write the relationship you would use. It can earn credit.',
];
