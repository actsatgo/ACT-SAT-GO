import type { ApSubject } from './types';
import {
  HISTORY_FORMAT_NOTES,
  HISTORY_FRQ_INTRO,
  HISTORY_FRQ_TIME_PLAN,
  HISTORY_FRQ_TYPES,
  HISTORY_HABITS,
  HISTORY_MCQ_TIPS,
  HISTORY_TRAPS,
} from './history';

export const WORLD_HISTORY: ApSubject = {
  slug: 'world-history',
  guideSlug: 'ap-world-history-modern-exam-guide-act-sat-go',
  name: 'AP World History: Modern',
  metaTitle: 'AP World History Exam Guide 2027: Format, Units, DBQ & LEQ | ACT SAT GO',
  description:
    'The AP World History: Modern exam explained: 55 multiple-choice questions, 3 short answers, the DBQ and the long essay, all 9 units from 1200 to the present, the rubrics and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP World History: Modern exam is 3 hours 15 minutes and fully digital: 55 source-based multiple-choice questions (40%), 3 short-answer questions (20%), a document-based question (25%) and a long essay (15%). It covers world history from about 1200 to the present, and Units 3–6 (about 1450–1900: empires, oceanic exchange, revolutions and industrialization) carry the most weight. The DBQ and long essay use fixed rubrics. About 64–66% of students score 3 or higher.',
  examDate: 'Thursday, May 6, 2027 (morning session)',
  length: '3 hours 15 minutes',
  glance: [
    { value: '3 hr 15', label: 'fully digital, in Bluebook' },
    { value: '4 tasks', label: 'multiple choice, short answer, DBQ, long essay' },
    { value: '9 units', label: 'from c. 1200 to the present' },
    { value: '64–66%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'IA · Multiple choice', weight: '40%', timing: '55 min · 55 questions', what: 'Sets of usually 3–4 questions built around a primary or secondary source: texts, images, charts or maps.' },
    { section: 'IB · Short answer', weight: '20%', timing: '40 min · 3 questions', what: 'Q1 (secondary source or sources) and Q2 (primary source) are required; then choose Q3 or Q4 (no source). Each has three parts.' },
    { section: 'II · Document-based question', weight: '25%', timing: '60 min, including a 15-min reading period · 1 essay', what: 'Write an argument using 7 documents plus your own knowledge. The DBQ covers 1450–2001.' },
    { section: 'II · Long essay', weight: '15%', timing: '40 min · 1 essay', what: 'Choose one of three prompts, each covering a different span of time periods, and write an argument.' },
  ],
  formatNotes: HISTORY_FORMAT_NOTES,
  mcq: {
    title: 'Multiple choice and short answer',
    intro: '55 multiple-choice questions in 55 minutes (one minute each), then 3 short-answer questions in 40 minutes. Most questions use a source, and wrong answers lose no points.',
    tips: HISTORY_MCQ_TIPS,
  },
  units: [
    { name: 'The Global Tapestry', weight: '8–10%', about: 'c. 1200–1450.', skills: 'Song China; Dar al-Islam; South and Southeast Asia; states in the Americas and Africa; feudal Europe.' },
    { name: 'Networks of Exchange', weight: '8–10%', about: 'c. 1200–1450.', skills: 'The Silk Roads; the Mongol Empire; Indian Ocean and trans-Saharan trade; the spread of religions, technologies and disease.' },
    { name: 'Land-Based Empires', weight: '12–15%', about: 'c. 1450–1750.', skills: 'The Ottoman, Safavid, Mughal and Qing empires; how rulers legitimized and consolidated power; gunpowder empires.' },
    { name: 'Transoceanic Interconnections', weight: '12–15%', about: 'c. 1450–1750.', skills: 'Maritime exploration; the Columbian Exchange; the Atlantic slave trade; colonial labor systems; resistance to European expansion.' },
    { name: 'Revolutions', weight: '12–15%', about: 'c. 1750–1900.', skills: "The Enlightenment; the American, French, Haitian and Latin American revolutions; nationalism; the Industrial Revolution's origins." },
    { name: 'Consequences of Industrialization', weight: '12–15%', about: 'c. 1750–1900.', skills: 'New imperialism; resistance to imperialism; migration; economic imperialism; global effects of industrial growth.' },
    { name: 'Global Conflict', weight: '8–10%', about: 'c. 1900–present.', skills: 'Causes and effects of World War I; the interwar period and Great Depression; totalitarian states; World War II and genocide.' },
    { name: 'Cold War & Decolonization', weight: '8–10%', about: 'c. 1900–present.', skills: 'Superpower rivalry and proxy wars; decolonization in Asia and Africa; new states; movements for civil rights and independence.' },
    { name: 'Globalization', weight: '8–10%', about: 'c. 1900–present.', skills: 'Advances in technology and medicine; environmental change; economic globalization; social movements; international organizations.' },
  ],
  unitsNote: 'Units 3–6 (about 1450–1900) carry the most weight, and that is where most essays come from too. Every task also tests the historical thinking skills: sourcing, contextualization, comparison, and causation and continuity and change over time.',
  frq: {
    title: 'The DBQ and the long essay',
    intro: HISTORY_FRQ_INTRO,
    types: HISTORY_FRQ_TYPES,
    timePlan: HISTORY_FRQ_TIME_PLAN,
  },
  habits: HISTORY_HABITS,
  traps: HISTORY_TRAPS,
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: c. 1200–1450', text: 'States and trade networks before 1450. Practice comparison: two empires, one similarity, one difference.' },
    { when: 'Nov – Dec', focus: 'Units 3–4: c. 1450–1750', text: 'Land-based empires and oceanic exchange. Write your first short answers and a practice DBQ.' },
    { when: 'Jan – Feb', focus: 'Units 5–6: c. 1750–1900', text: 'Revolutions, industrialization and imperialism. A timed DBQ every two weeks.' },
    { when: 'Mar – Apr', focus: 'Units 7–9: c. 1900–present', text: 'World wars, Cold War, decolonization and globalization. Alternate DBQs and long essays.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'Full Section I and both essays under timing. Review the rubric and the traps list.' },
  ],
  scores: { threePlus: '64–66%', fives: 'about 14%' },
  practice: [
    {
      topic: 'Unit 2 · Comparison',
      question: 'Trade in the Indian Ocean before 1450 differed from trade along the Silk Roads mainly because Indian Ocean trade:',
      choices: [
        'was controlled by a single empire',
        'moved only luxury goods',
        'had no role in spreading religion',
        'relied on monsoon winds and carried larger quantities of bulk goods',
      ],
      answer: 'D',
      why: 'Monsoon winds allowed predictable sea routes that could carry bulk goods. Overland Silk Road trade focused more on high-value luxury goods.',
    },
    {
      topic: 'Unit 4 · Causation',
      question: 'Which factor best explains the rapid growth of the Atlantic slave trade after 1600?',
      choices: [
        'Demand for labor on plantations in the Americas after Indigenous populations collapsed',
        'The decline of sugar plantations',
        'The end of the Columbian Exchange',
        'Industrial factories in Africa',
      ],
      answer: 'A',
      why: 'Disease and harsh labor collapsed Indigenous populations; plantation owners, especially in sugar, turned to enslaved Africans for labor.',
    },
    {
      topic: 'Unit 8 · Comparison',
      question: 'Independence movements in India and in Algeria differed most in that:',
      choices: [
        'Algeria gained independence before India',
        'India remained a French colony',
        "India's independence was largely achieved through nonviolent mass protest, while Algeria's involved a long armed war",
        'Neither movement was influenced by nationalism',
      ],
      answer: 'C',
      why: "India's movement used mass nonviolent protest under Gandhi; Algeria fought a long, violent war against France (1954–1962).",
    },
  ],
  faq: [
    {
      q: 'What years does AP World History: Modern cover?',
      a: 'About 1200 to the present, in 9 units. The DBQ covers 1450–2001, and Units 3–6 (about 1450–1900) carry the most weight on the multiple-choice section.',
    },
    {
      q: 'Is the AP World History exam typed?',
      a: "Yes. AP World History: Modern is fully digital, and every answer, including the short answers, DBQ and long essay, is completed in College Board's Bluebook app.",
    },
  ],
};
