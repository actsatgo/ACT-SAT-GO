import type { ApSubject } from './types';

// AP Macroeconomics and AP Microeconomics share the same exam structure and free-response format.

export const ECON_STRUCTURE: ApSubject['structure'] = [
  { section: 'I · Multiple choice', weight: 'about 66%', timing: '1 hr 10 min · 60 questions', what: 'Define principles, explain outcomes and determine the results of scenarios, often using graphs and tables.' },
  { section: 'II · Free response', weight: 'about 33%', timing: '1 hr, including a 10-min reading period · 3 questions', what: '1 long question (half of the section score) and 2 short questions (a quarter each). Make assertions, explain, calculate and draw graphs.' },
];

export const ECON_FORMAT_NOTES: ApSubject['formatNotes'] = [
  { title: 'Click in Bluebook, write on paper', text: 'You answer multiple-choice questions and read the free-response questions in the Bluebook app, then handwrite free-response answers (and draw graphs) in a paper booklet.' },
  { title: 'Four-function calculator allowed', text: 'A four-function calculator is permitted on both sections. Most calculations are simple; the hard part is knowing which formula applies.' },
];

export const ECON_MCQ: ApSubject['mcq'] = {
  intro: '60 questions in 70 minutes gives you 1 minute 10 seconds per question. Sketch a quick graph in the scratch area for any shift question. Wrong answers lose no points.',
  tips: [
    'Draw the graph for every shift question, even a rough one, and label which curve moves.',
    'Separate shifts from movements: a price change moves along a curve; other factors shift it.',
    'Watch "ceteris paribus": change only what the question says changed.',
    'Use formulas quickly and estimate where you can.',
    'Check signs and directions: an increase vs a decrease is where most errors happen.',
    'Move on at 90 seconds and come back to flagged questions.',
  ],
};

export const ECON_FRQ_INTRO =
  'One hour, including a 10-minute reading period, for 1 long and 2 short questions. The long question is half of the free-response score and each short question a quarter. Graphs earn many of the points.';

export const ECON_GRAPH_RULES: ApSubject['frq']['types'] = [
  { label: 'Graph', title: 'Graph rules', text: 'Label both axes, every curve, and equilibrium values (P₁, Q₁). Show shifts with arrows and new labels (P₂, Q₂).', tip: 'An unlabeled graph usually earns no points, even if it is shaped correctly.' },
  { label: 'Explain', title: 'Show the cause', text: 'When asked to explain, give the economic reason, not just the result: "because the cost of borrowing falls…".', tip: 'Results alone earn the "identify" point but not the "explain" point.' },
];

export const ECON_TIME_PLAN =
  '10 minutes of reading, about 25 minutes for the long question and 12–13 minutes for each short one. Use the reading period to plan graphs.';

export const ECON_HABITS: string[] = [
  'Label every axis, curve and equilibrium.',
  'Show shifts with arrows and new labels (P₂, Q₂).',
  'Answer each part separately and in order.',
  'Explain the cause, not just the result.',
  'Stuck? A correctly labeled graph still earns points.',
];
