import type { ApSubject } from './types';

export const LATIN: ApSubject = {
  slug: 'latin',
  guideSlug: 'ap-latin-exam-guide-act-sat-go',
  name: 'AP Latin',
  metaTitle: 'AP Latin Exam Guide 2027: Format, Vergil, Pliny & FRQs | ACT SAT GO',
  description:
    'The AP Latin exam explained: 52 multiple-choice and 5 free-response questions, the revised Vergil and Pliny syllabus, the course project passages, translation and essay tips, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    "The AP Latin exam is about 3 hours: 52 multiple-choice questions in 65 minutes and 5 free-response questions in 1 hour 55 minutes, each worth half your score. The revised course pairs Vergil's Aeneid with Pliny the Younger's Letters (Caesar is no longer on the syllabus), plus unseen sight passages and a set of project passages that change every year. Two in-class checkpoints count for 2% of your score. About 59–73% of students score 3 or higher.",
  examDate: 'Friday, May 14, 2027 (afternoon session)',
  length: 'about 3 hours',
  glance: [
    { value: '3 hrs', label: '65 min multiple choice + 115 min free response' },
    { value: '52 + 5', label: 'multiple-choice + free-response questions' },
    { value: '6 units', label: 'Pliny, Vergil and the project passages' },
    { value: '59–73%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '50%', timing: '1 hr 5 min · 52 questions', what: 'Discrete questions, short sets and long sets on syllabus passages and unseen (sight) passages, plus Roman history and culture.' },
    { section: 'II · Free response', weight: '50%', timing: '1 hr 55 min · 5 questions', what: 'A set of short-answer questions on a syllabus passage, a literal translation, a short analytical essay, and two short essays on the year\'s course project passages.' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the translation and essays, in College Board's Bluebook app. Practice typing timed answers, including macrons if your teacher uses them, before May." },
    { title: 'Two in-class checkpoints', text: 'A summary-writing task and an interpretive product, completed during the year, count for 2% of your final AP score. Check the deadlines with your teacher.' },
  ],
  mcq: {
    intro: '52 questions in 65 minutes gives you about 1 minute 15 seconds per question, including reading time for each passage. Know the syllabus passages very well, but practice sight reading weekly: unseen passages can\'t be memorized. Wrong answers lose no points.',
    tips: [
      'Find the main verb first, then its subject and object.',
      'Use endings, not word order, to decide case and function.',
      'Know your grammar labels: ablative absolute, indirect statement, purpose and result clauses, gerundives.',
      'For scansion, mark syllables long by nature and by position before counting feet.',
      'Read the whole sentence before choosing a translation; context decides meaning.',
      'Never leave a blank. There is no penalty for guessing.',
    ],
  },
  units: [
    { name: "Teacher's Choice: Latin Prose", weight: '', about: 'Forms, syntax and reading fluency.', skills: 'Review forms and syntax; read longer prose passages to build reading speed.' },
    { name: 'Pliny: The Eruption of Vesuvius', weight: '', about: 'Letters 6.16 and 6.20.', skills: 'Read the two letters about Mount Vesuvius (79 CE) and the death of Pliny the Elder.' },
    { name: 'Pliny: Other Letters', weight: '', about: 'Roman social life and values.', skills: 'Read letters on the supernatural, Trajan and Calpurnia; connect them to Roman society.' },
    { name: "Teacher's Choice Poetry + Aeneid 1–2", weight: '', about: 'Meter and the opening of the epic.', skills: 'Learn dactylic hexameter; read Aeneas, Juno and the fall of Troy.' },
    { name: 'Aeneid 4, 6, 7, 11, 12', weight: '', about: 'The heart of the epic.', skills: "Read Dido and Aeneas, the underworld, war in Italy and the poem's ending." },
    { name: "Course Project + Teacher's Choice", weight: '', about: "The year's project passages.", skills: 'Read, translate and analyze the four project passages, which are new each year and appear in the two short essays.' },
  ],
  unitsNote: "College Board doesn't publish unit weights. Expect the syllabus passages (Vergil and Pliny) to carry most of the exam, with sight reading close behind. Using older review books? The revised course no longer includes Caesar's De Bello Gallico.",
  frq: {
    title: 'The 5 free-response questions',
    intro: '115 minutes for 5 questions. Translation rewards literal accuracy; the essays reward Latin evidence with clear interpretation.',
    types: [
      { label: 'SA', title: 'Short-answer set', text: '6–8 questions on a syllabus passage about grammar, meaning, context and style.', tip: 'Quote the exact Latin words that support each answer.' },
      { label: 'Tr', title: 'Literal translation', text: 'Translate a syllabus passage as literally as possible. Each segment is scored for accuracy.', tip: "Keep every word's case, tense and number; don't paraphrase." },
      { label: 'AE', title: 'Short analytical essay', text: 'Interpret a syllabus passage, supporting your argument with Latin cited and translated or closely paraphrased.', tip: 'Cite line numbers and analyze style, not just content.' },
      { label: 'SE', title: 'Two short essays', text: "Summarize and interpret prose and poetry from the year's course project passages.", tip: 'Prepare the project passages as thoroughly as the syllabus.' },
    ],
    timePlan: 'About 20 minutes for the short answers, 15 for the translation, 35 for the analytical essay and 45 for the two short essays. In translation, literal beats elegant: every case ending and tense must show in your English.',
  },
  habits: [
    'Cite Latin for every claim, with line numbers.',
    'Translate or closely paraphrase every citation.',
    'Keep translations literal: case, tense, number.',
    'Prepare project passages as well as the syllabus.',
    'Stuck? Translate what you can; each segment scores.',
  ],
  traps: [
    { title: 'Reading in English word order', text: 'Latin word order is flexible. Use endings to find the subject and object.' },
    { title: 'Ablative confusion', text: 'Ablatives can show means, manner, time, place or cause. Context decides which.' },
    { title: 'Missing an ablative absolute', text: 'A noun and participle in the ablative, set off from the main clause, usually form an ablative absolute.' },
    { title: 'Indirect statement', text: 'After verbs of saying or thinking, look for an accusative subject and an infinitive.' },
    { title: 'Purpose vs result', text: 'Both use ut + subjunctive. A tam, ita or tantus in the main clause usually signals result.' },
    { title: 'Free translation', text: "Paraphrasing loses points. Keep each word's grammatical form visible." },
    { title: 'Elision in scansion', text: 'A final vowel or vowel + m elides before a word starting with a vowel or h.' },
    { title: 'Essays without Latin', text: 'Every claim in an essay needs Latin evidence, cited and translated.' },
    { title: 'Studying old syllabus texts', text: 'Caesar is no longer on the syllabus. Focus on Vergil and Pliny.' },
    { title: 'Ignoring sight reading', text: 'Unseen passages appear on the exam. Practice weekly.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: prose', text: "Grammar review and Pliny's Vesuvius letters. Start a vocabulary list from the syllabus." },
    { when: 'Nov – Dec', focus: 'Unit 3: Pliny', text: "Pliny's other letters and Roman society. Practice literal translation weekly." },
    { when: 'Jan – Feb', focus: 'Unit 4: Aeneid 1–2 and meter', text: 'Dactylic hexameter and the opening books. Begin analytical essays.' },
    { when: 'Mar – Apr', focus: 'Units 5–6: Vergil and the project', text: "Aeneid 4, 6, 7, 11 and 12 and the year's project passages. Complete the in-class checkpoints." },
    { when: 'Early May', focus: 'Full timed sections', text: 'Sight passages, translation and essays under timing.' },
  ],
  scores: { threePlus: '59–73%', fives: '13–20%' },
  practice: [
    {
      topic: 'Aeneid 1.1–4 · Translation',
      question: 'Arma virumque canō, Trōiae quī prīmus ab ōrīs / Ītaliam, fātō profugus, Lāvīniaque vēnit… The best translation of "fātō profugus" is:',
      choices: ['fleeing from fate', 'an exile by fate', 'the fate of the exile', 'fated to flee'],
      answer: 'B · an exile by fate',
      why: 'Profugus means "exile"; fātō is an ablative of cause or means: "an exile by fate".',
    },
    {
      topic: 'Pliny, Letters 6.16 · Syntax',
      question: 'Petis ut tibi avunculī meī exitum scrībam… The clause "ut tibi… exitum scrībam" is best described as:',
      choices: ['A result clause', 'An indirect command', 'A temporal clause', 'An indirect question'],
      answer: 'B · An indirect command',
      why: 'After a verb of asking (petis), ut + subjunctive forms an indirect command.',
    },
    {
      topic: 'Pliny, Letters 6.16 · Syntax',
      question: '…quō vērius trādere posterīs possīs. This clause is best described as:',
      choices: ['a result clause', 'an ablative absolute', 'a relative purpose clause using quō with a comparative', 'a conditional sentence'],
      answer: 'C',
      why: 'Quō + a comparative (vērius) + subjunctive introduces a purpose clause: "so that you may more truthfully hand down…".',
    },
  ],
  faq: [
    {
      q: 'Is Caesar still on the AP Latin exam?',
      a: "No. The revised course pairs Vergil's Aeneid with Pliny the Younger's Letters, plus teacher-chosen readings, sight passages and yearly project passages. Older review books built around Caesar's De Bello Gallico are out of date.",
    },
    {
      q: 'What are the AP Latin project passages?',
      a: 'Four passages chosen by College Board for each year, unique to that exam. You read, translate and analyze them in Unit 6, and the two short essays on the exam ask you to summarize and interpret them.',
    },
  ],
};
