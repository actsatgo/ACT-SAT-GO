import type { ApSubject } from './types';

export const ENGLISH_LANGUAGE: ApSubject = {
  slug: 'english-language',
  guideSlug: 'ap-english-language-and-composition-exam-guide-act-sat-go',
  name: 'AP English Language and Composition',
  metaTitle: 'AP Lang Exam Guide 2027: Format, Essays & Rubric | ACT SAT GO',
  description:
    'The AP English Language and Composition exam explained: 45 multiple-choice questions and 3 essays (synthesis, rhetorical analysis, argument), the 6-point rubric, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP English Language and Composition exam is about 3 hours 15 minutes and fully digital: about 45 multiple-choice questions on reading and revising nonfiction (45% of the score), then three essays (55%): synthesis, rhetorical analysis and argument. Each essay is scored out of 6, and commentary, explaining how your evidence supports your claim, is where most points are won or lost. About 74–75% of students score 3 or higher.',
  examDate: 'Wednesday, May 12, 2027 (morning session)',
  length: 'about 3 hours 15 minutes',
  glance: [
    { value: '3 hr 15', label: 'fully digital, in Bluebook' },
    { value: '45 + 3', label: 'multiple-choice questions + essays' },
    { value: '0–6', label: 'score for each essay, on the same rubric' },
    { value: '74–75%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '45%', timing: 'about 1 hr · 45 questions', what: '23–25 reading questions on nonfiction passages, and 20–22 writing questions where you revise and evaluate drafts.' },
    { section: 'II · Free response', weight: '55%', timing: '2 hr 15 min, including a 15-min reading period · 3 essays', what: "Synthesis: argue using at least 3 of 6 sources. Rhetorical analysis: explain how a writer's choices achieve a purpose. Argument: defend a position with your own evidence." },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the essays, in College Board's Bluebook app. Responses are submitted automatically at the end, so practice typing timed essays before May." },
    { title: 'Each essay is scored 0–6', text: 'Up to 1 point for thesis, 4 for evidence and commentary, and 1 for sophistication.' },
  ],
  mcq: {
    intro: 'About 45 questions in roughly an hour, about 1 minute 20 seconds each. Reading questions ask how a writer builds an argument; writing questions ask how to improve a draft. Nearly half the section is about revising writing, so practice it like a writer, not just a reader.',
    tips: [
      "Read for the argument: identify the writer's claim and purpose in the first pass.",
      "For revision questions, read the sentences before and after. The best choice fits the paragraph's purpose.",
      'Pay attention to the question\'s goal: "to provide evidence", "to qualify the claim", "to transition".',
      'Eliminate choices that are true but irrelevant to the specific purpose asked.',
      'Know rhetorical terms: concession, rebuttal, anecdote, appeal, juxtaposition.',
      'Never leave a blank. Wrong answers lose no points, so guess, flag and move on.',
    ],
  },
  unitLabel: 'Skill',
  unitsTitle: 'The 4 skills, in plain English',
  units: [
    { name: 'Rhetorical situation', weight: '', about: 'Who is writing, to whom, about what, and why.', skills: "Identify the writer's purpose, audience, exigence (what prompted the writing) and context, and explain how they shape the writer's choices." },
    { name: 'Claims & evidence', weight: '', about: 'What the writer argues and how it is supported.', skills: 'Identify and evaluate claims; judge whether evidence is relevant and sufficient; integrate sources into your own writing.' },
    { name: 'Reasoning & organization', weight: '', about: 'How an argument is put together.', skills: 'Explain lines of reasoning; use transitions; organize paragraphs; recognize methods of development such as comparison, cause and effect, and definition.' },
    { name: 'Style', weight: '', about: 'How word choice and syntax create effects.', skills: 'Analyze diction, syntax, tone and figurative language; explain how stylistic choices affect the audience; control your own style for effect.' },
  ],
  unitsNote: 'The course is organized into 9 units, but they all build these four skills. AP Lang has no required reading list: read a wide mix of nonfiction (op-eds, speeches, essays and long-form journalism) and notice how each writer persuades.',
  frq: {
    title: 'The 3 essays',
    intro: '2 hours 15 minutes for three essays, including a 15-minute reading period for the synthesis sources. Each essay is scored out of 6: thesis (1) + evidence and commentary (4) + sophistication (1).',
    types: [
      { label: 'Q1 · synthesis', title: 'Synthesis essay', text: 'Read 6 sources on an issue, then write an argument that uses at least 3 of them as evidence for your own position.', tip: "Your argument leads; sources support it. Don't summarize them in order." },
      { label: 'Q2 · rhetorical analysis', title: 'Rhetorical analysis essay', text: "Read a nonfiction passage and explain how the writer's choices help achieve a purpose for an audience.", tip: 'Analyze choices (what the writer does) and effects (why it works), not devices in isolation.' },
      { label: 'Q3 · argument', title: 'Argument essay', text: 'Take a position on an open-ended claim and support it with your own evidence: history, current events, reading or experience.', tip: 'Specific, well-explained evidence beats many vague examples.' },
    ],
    timePlan: '15 minutes reading the sources, then about 40 minutes for each essay, in any order. The sophistication point rewards nuance: acknowledge complexity, tensions or the limits of your own argument.',
  },
  habits: [
    'Underline every task verb in the prompt before you plan.',
    'Write a defensible thesis in your first paragraph.',
    'Back every claim with specific evidence, then explain it.',
    'Keep 2 minutes to reread and fix unclear sentences.',
    'Running short? Finish all three essays; a complete essay beats a polished fragment.',
  ],
  traps: [
    { title: 'Device hunting', text: '"The author uses imagery" earns nothing alone. Explain how a choice serves the writer\'s purpose.' },
    { title: 'Summary instead of analysis', text: 'Retelling what the writer says is not analysis. Focus on how and why they say it.' },
    { title: 'Thesis restates the prompt', text: 'A thesis must make a defensible claim with a line of reasoning, not repeat the question.' },
    { title: 'Source summary in synthesis', text: "Use sources as evidence for your argument; don't walk through them one by one." },
    { title: 'Too few sources', text: 'The synthesis essay needs at least 3 sources to reach the top evidence scores.' },
    { title: 'Vague evidence in argument', text: '"Many people believe…" is weak. Use specific examples and explain them.' },
    { title: 'No commentary', text: 'After every piece of evidence, explain how it supports your claim.' },
    { title: 'Ignoring the audience', text: "Rhetorical analysis is about the writer's audience. Mention who they are and why the choices fit them." },
    { title: 'Writing about ethos, pathos and logos only', text: 'The appeals are a start, not an analysis. Name specific choices.' },
    { title: 'Running out of time', text: 'Watch the clock; three completed essays score better than two polished ones.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Rhetorical situation and claims', text: 'Read op-eds and speeches daily. Write short paragraphs analyzing one choice and its effect.' },
    { when: 'Nov – Dec', focus: 'Rhetorical analysis essay', text: 'A timed rhetorical analysis every two weeks. Practice commentary until it is longer than your quotes.' },
    { when: 'Jan – Feb', focus: 'Argument essay', text: 'Build a bank of specific evidence from history, current events and reading. Write timed argument essays.' },
    { when: 'Mar – Apr', focus: 'Synthesis and revision questions', text: 'Synthesis essays with 6 sources, plus reading and writing multiple-choice sets.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'All three essays in one sitting. Review the rubric and the traps list.' },
  ],
  scores: { threePlus: '74–75%', fives: '13–15%' },
  practice: [
    {
      topic: 'Writing · Transitions',
      question: 'A draft reads: "Recycling programs reduce landfill waste. ___, many towns have cut them to save money." Which transition is best?',
      choices: ['Therefore', 'Nevertheless', 'Similarly', 'For example'],
      answer: 'B · Nevertheless',
      why: 'The second sentence contrasts with the first: the programs work, yet towns cut them. "Nevertheless" signals that contrast.',
    },
    {
      topic: 'Writing · Evidence',
      question: 'A writer argues that later school start times improve student health. Which evidence would be most persuasive to school administrators?',
      choices: [
        "A student's personal story about feeling tired",
        'A quotation from a famous novelist about sleep',
        'A list of countries with different school hours',
        'A multi-district study linking later start times to fewer absences and better grades',
      ],
      answer: 'D',
      why: 'Administrators respond to broad, measurable outcomes. A multi-district study is more persuasive than one anecdote.',
    },
    {
      topic: 'Reading · Purpose',
      question: "A speech to a graduating class opens with a joke about the speaker's own failed first job. The joke most likely aims to:",
      choices: [
        "establish the speaker's authority through credentials",
        'distract from the main message',
        'build rapport and make a later lesson about failure feel personal',
        'present statistical evidence',
      ],
      answer: 'C',
      why: 'Self-deprecating humor builds rapport (ethos) and sets up a lesson about resilience.',
    },
  ],
  faq: [
    {
      q: 'Is the AP Lang exam typed or handwritten?',
      a: "Typed. AP English Language and Composition is fully digital: the multiple-choice questions and all three essays are completed in College Board's Bluebook app.",
    },
    {
      q: 'Are there required books for AP English Language?',
      a: 'No. AP Lang has no required reading list. The exam uses unseen nonfiction passages and sources, so the best preparation is reading a wide mix of op-eds, speeches, essays and journalism and practicing timed essays.',
    },
  ],
};
