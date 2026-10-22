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

export const US_HISTORY: ApSubject = {
  slug: 'us-history',
  guideSlug: 'ap-us-history-exam-guide-act-sat-go',
  name: 'AP United States History',
  metaTitle: 'APUSH Exam Guide 2027: Format, Periods, DBQ & LEQ | ACT SAT GO',
  description:
    'The AP US History (APUSH) exam explained: 55 multiple-choice questions, 3 short answers, the DBQ and the long essay, all 9 periods with weightings, the rubrics and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP US History exam is 3 hours 15 minutes and fully digital: 55 source-based multiple-choice questions (40%), 3 short-answer questions (20%), a document-based question (25%) and a long essay (15%). It covers American history from 1491 to the present, with Periods 3–8 (1754–1980) making up most of the exam. The DBQ and long essay use fixed rubrics, so learning them is the fastest way to raise your score. About 74% of students score 3 or higher.',
  examDate: 'Friday, May 7, 2027 (morning session)',
  length: '3 hours 15 minutes',
  glance: [
    { value: '3 hr 15', label: 'fully digital, in Bluebook' },
    { value: '4 tasks', label: 'multiple choice, short answer, DBQ, long essay' },
    { value: '9 periods', label: 'from 1491 to the present' },
    { value: '74%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'IA · Multiple choice', weight: '40%', timing: '55 min · 55 questions', what: 'Sets of usually 3–4 questions built around a primary or secondary source: texts, images, charts or maps.' },
    { section: 'IB · Short answer', weight: '20%', timing: '40 min · 3 questions', what: 'Q1 (secondary source or sources) and Q2 (primary source) are required; then choose Q3 or Q4 (no source). Each has three parts.' },
    { section: 'II · Document-based question', weight: '25%', timing: '60 min, including a 15-min reading period · 1 essay', what: 'Write an argument using 7 documents plus your own knowledge. The DBQ covers 1754–1980.' },
    { section: 'II · Long essay', weight: '15%', timing: '40 min · 1 essay', what: 'Choose one of three prompts, each covering a different span of time periods, and write an argument.' },
  ],
  formatNotes: HISTORY_FORMAT_NOTES,
  mcq: {
    title: 'Multiple choice and short answer',
    intro: '55 multiple-choice questions in 55 minutes (one minute each), then 3 short-answer questions in 40 minutes. Most questions use a source, and wrong answers lose no points.',
    tips: HISTORY_MCQ_TIPS,
  },
  unitLabel: 'Period',
  unitsTitle: 'The 9 periods, in plain English',
  units: [
    { name: '1491–1607', weight: '4–6%', about: 'Contact and colonization.', skills: 'Native American societies before contact; the Columbian Exchange; Spanish colonization and the encomienda system.' },
    { name: '1607–1754', weight: '6–8%', about: 'The colonial era.', skills: 'Differences between colonial regions; Atlantic trade and slavery; mercantilism; the Great Awakening and Enlightenment ideas.' },
    { name: '1754–1800', weight: '10–17%', about: 'Revolution and a new republic.', skills: "The Seven Years' War; causes and effects of the Revolution; the Articles of Confederation; the Constitution and the first party system." },
    { name: '1800–1848', weight: '10–17%', about: 'A growing democracy.', skills: 'Jeffersonian and Jacksonian democracy; the market revolution; the Second Great Awakening and reform; Indian Removal.' },
    { name: '1844–1877', weight: '10–17%', about: 'Expansion, Civil War and Reconstruction.', skills: 'Manifest Destiny and the Mexican-American War; the sectional crisis; the Civil War; Reconstruction and its end.' },
    { name: '1865–1898', weight: '10–17%', about: 'The Gilded Age.', skills: 'Industrialization and big business; immigration and urbanization; labor unions; Populism and the West.' },
    { name: '1890–1945', weight: '10–17%', about: 'Progressives, world wars and the New Deal.', skills: 'Imperialism; the Progressive Era; World War I; the 1920s; the Great Depression and New Deal; World War II.' },
    { name: '1945–1980', weight: '10–17%', about: 'Cold War America.', skills: 'The Cold War and containment; the civil rights movement; the Great Society; Vietnam; social movements and the rise of conservatism.' },
    { name: '1980–present', weight: '4–6%', about: 'Modern America.', skills: 'The Reagan era; the end of the Cold War; globalization and technology; debates over the role of government; responses to terrorism.' },
  ],
  unitsNote: 'Periods 3–8 (1754–1980) each carry 10–17% and together make up most of the exam. Every task also tests the historical thinking skills: sourcing, contextualization, comparison, and causation and continuity and change over time.',
  frq: {
    title: 'The DBQ and the long essay',
    intro: HISTORY_FRQ_INTRO,
    types: HISTORY_FRQ_TYPES,
    timePlan: HISTORY_FRQ_TIME_PLAN,
  },
  habits: HISTORY_HABITS,
  traps: HISTORY_TRAPS,
  roadmap: [
    { when: 'Sep – Oct', focus: 'Periods 1–3: colonial to republic', text: 'Contact, colonial regions and the Revolution. Practice sourcing on one document a day.' },
    { when: 'Nov – Dec', focus: 'Periods 4–5: a growing nation', text: 'Jacksonian era, reform, expansion, the Civil War and Reconstruction. Write your first short answers.' },
    { when: 'Jan – Feb', focus: 'Periods 6–7: industry and empire', text: 'Gilded Age, Progressives, the World Wars and the New Deal. Write a timed DBQ every two weeks.' },
    { when: 'Mar – Apr', focus: 'Periods 8–9: modern America', text: 'Cold War, civil rights and recent history. Alternate DBQs and long essays.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'Practice the full Section I and both essays under timing. Review the rubric and the traps list.' },
  ],
  scores: { threePlus: 'about 74%', fives: 'about 14%' },
  practice: [
    {
      topic: 'Period 3 · Causation',
      question: 'Which development most directly increased tensions between Britain and its North American colonies after 1763?',
      choices: [
        'The arrival of the first enslaved Africans in Virginia',
        'The Louisiana Purchase',
        'The ratification of the Constitution',
        "British efforts to tax the colonies to pay debts from the Seven Years' War",
      ],
      answer: 'D',
      why: 'Debt from the Seven Years\' War led Parliament to pass the Sugar, Stamp and Townshend Acts, provoking "no taxation without representation" protests.',
    },
    {
      topic: 'Period 7 · Argumentation',
      question: "Which piece of evidence best supports the claim that the New Deal permanently expanded the federal government's role in the economy?",
      choices: [
        'The Civilian Conservation Corps ended in 1942',
        'Social Security continued to provide benefits long after the 1930s',
        'The Supreme Court struck down the NRA in 1935',
        'Unemployment remained high until World War II',
      ],
      answer: 'B',
      why: "Social Security's long-term survival shows lasting federal involvement. The other choices show programs ending, limits on the New Deal or its shortfalls.",
    },
    {
      topic: 'Period 8 · Causation',
      question: 'Which was a major effect of the Supreme Court\'s decision in Brown v. Board of Education (1954)?',
      choices: [
        'It immediately ended segregation in all Southern schools',
        'It guaranteed voting rights for all African Americans',
        'It created the Equal Employment Opportunity Commission',
        'It overturned the "separate but equal" doctrine of Plessy v. Ferguson for public schools',
      ],
      answer: 'D',
      why: 'Brown ruled school segregation unconstitutional, overturning Plessy for schools. Desegregation itself was slow and resisted.',
    },
  ],
  faq: [
    {
      q: 'Is the APUSH exam handwritten or typed?',
      a: "Typed. The AP US History exam is fully digital: every multiple-choice question, short answer and essay is completed in College Board's Bluebook app, and responses submit automatically at the end.",
    },
    {
      q: 'How is the APUSH DBQ scored?',
      a: 'Out of 7 points: 1 for a thesis, 1 for contextualization, 3 for evidence (using at least 4 documents, plus outside evidence) and 2 for analysis and reasoning, including sourcing at least 2 documents and the complexity point.',
    },
  ],
};
