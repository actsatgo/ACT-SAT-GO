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

export const EUROPEAN_HISTORY: ApSubject = {
  slug: 'european-history',
  guideSlug: 'ap-european-history-exam-guide-act-sat-go',
  name: 'AP European History',
  metaTitle: 'AP European History Exam Guide 2027: Format, Units, DBQ & LEQ | ACT SAT GO',
  description:
    'The AP European History (AP Euro) exam explained: 55 multiple-choice questions, 3 short answers, the DBQ and the long essay, all 9 units from 1450 to the present, the rubrics and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP European History exam is 3 hours 15 minutes and fully digital: 55 source-based multiple-choice questions (40%), 3 short-answer questions (20%), a document-based question (25%) and a long essay (15%). It covers European history from about 1450 to the present, and all nine units carry the same 10–15% weight, so there is no unit to skip. The essays use fixed rubrics. About 73–74% of students score 3 or higher.',
  examDate: 'Tuesday, May 4, 2027 (afternoon session)',
  length: '3 hours 15 minutes',
  glance: [
    { value: '3 hr 15', label: 'fully digital, in Bluebook' },
    { value: '4 tasks', label: 'multiple choice, short answer, DBQ, long essay' },
    { value: '9 units', label: 'from about 1450 to the present' },
    { value: '73–74%', label: 'scored 3 or higher in recent years' },
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
    { name: 'Renaissance & Exploration', weight: '10–15%', about: 'c. 1450–1648.', skills: 'Italian and Northern Renaissance; humanism; the printing press; new monarchies; causes and effects of exploration and the Columbian Exchange.' },
    { name: 'Age of Reformation', weight: '10–15%', about: 'c. 1450–1648.', skills: "Luther, Calvin and the Protestant Reformation; the Catholic Reformation; wars of religion; the Thirty Years' War." },
    { name: 'Absolutism & Constitutionalism', weight: '10–15%', about: 'c. 1648–1815.', skills: 'Louis XIV and absolutism; the English Civil War and Glorious Revolution; the Dutch Republic; Russia under Peter the Great.' },
    { name: 'Scientific, Philosophical & Political Developments', weight: '10–15%', about: 'c. 1648–1815.', skills: 'The Scientific Revolution; the Enlightenment; enlightened absolutism; changes in population, agriculture and consumer culture.' },
    { name: 'Conflict, Crisis & Reaction in the Late 18th Century', weight: '10–15%', about: 'c. 1648–1815.', skills: 'The French Revolution and its phases; Napoleon; the Congress of Vienna; Romanticism.' },
    { name: 'Industrialization & Its Effects', weight: '10–15%', about: 'c. 1815–1914.', skills: 'The spread of industrialization; social classes and urban life; liberalism, socialism and Marxism; the revolutions of 1848.' },
    { name: '19th-Century Perspectives & Political Developments', weight: '10–15%', about: 'c. 1815–1914.', skills: 'Nationalism; Italian and German unification; new imperialism; Darwin and modern thought; mass politics.' },
    { name: '20th-Century Global Conflicts', weight: '10–15%', about: 'c. 1914–present.', skills: 'World War I; the Russian Revolution; interwar crises and fascism; World War II and the Holocaust.' },
    { name: 'Cold War & Contemporary Europe', weight: '10–15%', about: 'c. 1914–present.', skills: 'The Cold War division of Europe; decolonization; European integration and the EU; the collapse of communism; recent challenges.' },
  ],
  unitsNote: 'All nine units carry the same 10–15% range, so spread your review evenly and prioritize the ones you know least. Every task also tests the historical thinking skills: sourcing, contextualization, comparison, and causation and continuity and change over time.',
  frq: {
    title: 'The DBQ and the long essay',
    intro: HISTORY_FRQ_INTRO,
    types: HISTORY_FRQ_TYPES,
    timePlan: HISTORY_FRQ_TIME_PLAN,
  },
  habits: HISTORY_HABITS,
  traps: HISTORY_TRAPS,
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: 1450–1648', text: 'Renaissance, exploration and Reformation. Practice sourcing religious and political documents.' },
    { when: 'Nov – Dec', focus: 'Units 3–5: 1648–1815', text: 'Absolutism, the Scientific Revolution, the Enlightenment and the French Revolution. Write your first DBQ.' },
    { when: 'Jan – Feb', focus: 'Units 6–7: 1815–1914', text: 'Industrialization, ideologies, nationalism and imperialism. A timed DBQ every two weeks.' },
    { when: 'Mar – Apr', focus: 'Units 8–9: 1914–present', text: 'World wars, the Cold War and European integration. Alternate DBQs and long essays.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'Full Section I and both essays under timing. Review the rubric and traps list.' },
  ],
  scores: { threePlus: '73–74%', fives: '14–16%' },
  practice: [
    {
      topic: 'Unit 2 · Continuity and change',
      question: 'The Peace of Westphalia (1648) is significant mainly because it:',
      choices: [
        "restored the pope's authority over all of Europe",
        'recognized the sovereignty of states and largely ended the era of major religious wars',
        'unified Germany under Prussia',
        "ended the Hundred Years' War",
      ],
      answer: 'B',
      why: "Westphalia ended the Thirty Years' War and established the principle of state sovereignty, reducing religion as a cause of major wars between states.",
    },
    {
      topic: 'Unit 5 · Sourcing',
      question: '"What is the Third Estate? Everything. What has it been until now in the political order? Nothing. What does it want to be? Something." (Abbé Sieyès, pamphlet, January 1789). The pamphlet was written mainly to:',
      choices: [
        'defend the privileges of the clergy',
        'call for the restoration of absolute monarchy',
        'argue that commoners deserved greater political power on the eve of the Estates-General',
        "support Napoleon's rise to power",
      ],
      answer: 'C',
      why: 'Sieyès argued that the Third Estate, the vast majority of the population, deserved real political power as the Estates-General met.',
    },
    {
      topic: 'Unit 7 · Comparison',
      question: 'The unifications of Italy and Germany were similar in that both:',
      choices: [
        'were achieved entirely through peaceful votes',
        'created communist states',
        'were opposed by nationalists',
        'were led by a powerful state using diplomacy and war (Piedmont-Sardinia and Prussia)',
      ],
      answer: 'D',
      why: 'Cavour (Piedmont-Sardinia) and Bismarck (Prussia) used diplomacy and short wars to unify their nations.',
    },
  ],
  faq: [
    {
      q: 'What years does AP European History cover?',
      a: 'From about 1450 (the Renaissance) to the present, in nine units that each make up 10–15% of the exam. The DBQ can come from any point between 1450 and 2001.',
    },
    {
      q: 'Is AP Euro harder than APUSH?',
      a: 'They use the same exam format and rubrics. AP Euro covers more countries and starts earlier, but its units are evenly weighted, so a steady unit-by-unit plan works well. About 73–74% of students score 3 or higher.',
    },
  ],
};
