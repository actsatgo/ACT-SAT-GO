import type { ApSubject } from './types';

// AP US History, AP World History: Modern and AP European History share the same exam structure,
// rubrics and question types, so their common content lives here.

export const HISTORY_FORMAT_NOTES: ApSubject['formatNotes'] = [
  { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook app. Responses are submitted automatically at the end, so practice typing timed answers before May." },
  { title: 'Essays use the same rubric every year', text: 'The DBQ (7 points) and long essay (6 points) are scored on thesis, contextualization, evidence and analysis.' },
];

export const HISTORY_MCQ_TIPS: string[] = [
  'Read the source line first: author, date and audience tell you the context before you read the text.',
  'Answer the question asked. "Which development most directly caused…" means a cause, not just a related event.',
  'For short answers, use ACE: Answer the question, Cite specific evidence, Explain how it supports your answer.',
  'One part, one paragraph. Label each short-answer part (a), (b), (c) and answer in 2–3 sentences.',
  'Be specific: name people, laws, events and dates. Vague answers rarely earn the point.',
  'Never leave a blank. Guess, flag and move on at the one-minute mark.',
];

export const HISTORY_FRQ_TYPES: ApSubject['frq']['types'] = [
  { label: 'DBQ · 7 pts', title: 'Document-based question', text: 'Use at least 4 documents to support an argument for full evidence credit, add one piece of outside evidence, and explain sourcing for at least 2 documents.', tip: 'Group documents into 2–3 categories that each prove part of your thesis.' },
  { label: 'LEQ · 6 pts', title: 'Long essay question', text: 'No documents: the evidence comes from your own knowledge. Choose the prompt carefully, then argue a clear line of reasoning.', tip: 'Pick the prompt for which you know the most specific evidence.' },
  { label: 'Thesis · 1 pt', title: 'A historically defensible claim', text: 'One or two sentences that make a claim and set out a line of reasoning, in the introduction or conclusion.', tip: '"Although X, Y mainly because A and B" shows complexity from the start.' },
  { label: 'Context · 1 pt', title: 'Contextualization', text: 'Describe broader developments before, during or after the period that relate to the prompt, in several sentences.', tip: "Write it as your opening paragraph so you don't forget it." },
];

export const HISTORY_FRQ_INTRO =
  '100 minutes for two essays, both scored with fixed rubrics. The DBQ rubric is 7 points: thesis 1, contextualization 1, evidence 3, analysis and reasoning 2. The long essay uses the same rows with 2 evidence points (6 in total).';

export const HISTORY_FRQ_TIME_PLAN =
  '15 minutes reading the documents, 45 minutes writing the DBQ, 5 minutes planning the long essay and 35 minutes writing it. The complexity point is the hardest: earn it by analyzing multiple variables, qualifying your argument or connecting across periods.';

export const HISTORY_HABITS: string[] = [
  'Underline every task verb in the prompt before you plan.',
  'Write a defensible thesis in your first paragraph.',
  'Back every claim with specific evidence, then explain it.',
  'Keep 2 minutes to reread and fix unclear sentences.',
  'Stuck? Answer each part separately, in order. Partial credit is real.',
];

export const HISTORY_TRAPS: ApSubject['traps'] = [
  { title: 'Restating the prompt as a thesis', text: 'A thesis must take a position and give reasons. Repeating the question earns no point.' },
  { title: 'Listing documents', text: '"Document 1 says… Document 2 says…" is summary. Use documents as evidence for your argument.' },
  { title: 'Sourcing by labeling', text: '"The author is a merchant" isn\'t enough. Explain how that affects the document\'s message.' },
  { title: 'One-sentence context', text: 'Contextualization needs several sentences about the broader situation, connected to the prompt.' },
  { title: 'Outside evidence from the documents', text: 'Outside evidence must be a specific fact that is not in any document.' },
  { title: 'Wrong time period', text: "Evidence from outside the prompt's dates doesn't count. Check the years before writing." },
  { title: 'Vague SAQ answers', text: 'Short answers need a specific example and an explanation, not a general statement.' },
  { title: 'Running out of time on the DBQ', text: 'Watch the clock. A rushed long essay costs more than a slightly shorter DBQ.' },
  { title: 'Presentism', text: 'Judge events by their own time\'s context, and avoid "always" or "never" claims.' },
  { title: 'Skipping the conclusion', text: 'A conclusion is a second chance to state the thesis or earn the complexity point.' },
];
