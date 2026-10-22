import type { ApSubject } from './types';

export const ENGLISH_LITERATURE: ApSubject = {
  slug: 'english-literature',
  guideSlug: 'ap-english-literature-and-composition-exam-guide-act-sat-go',
  name: 'AP English Literature and Composition',
  metaTitle: 'AP English Literature Exam Guide 2027: Format, Essays & Skills | ACT SAT GO',
  description:
    'The AP English Literature and Composition exam explained: 55 multiple-choice questions on prose and poetry, the poetry, prose and literary argument essays, the 0–6 rubric, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP English Literature exam is 3 hours: 55 multiple-choice questions on prose and poetry passages in 1 hour (45% of your score) and three literary analysis essays in 2 hours (55%). The essays are poetry analysis, prose fiction analysis and a literary argument about a novel or play you choose, each scored 0–6. It is fully digital in Bluebook. About 73–74% of students score 3 or higher.',
  examDate: 'Wednesday, May 5, 2027 (morning session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '1 hr multiple choice + 2 hrs for three essays' },
    { value: '55 + 3', label: 'multiple-choice questions + essays' },
    { value: '6 big ideas', label: 'character to literary argumentation' },
    { value: '73–74%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '45%', timing: '1 hr · 55 questions', what: '5 sets of 8–13 questions on passages of prose fiction, drama and poetry. At least 2 sets are prose and at least 2 are poetry.' },
    { section: 'II · Free response', weight: '55%', timing: '2 hrs · 3 essays', what: 'Poetry analysis, prose fiction analysis, and a literary argument analyzing a concept in a novel or play of your choice (from a list of about 40 suggested titles or a comparable work).' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the essays, in College Board's Bluebook app. Responses are submitted automatically at the end, so practice typing timed essays before May." },
    { title: 'Each essay is scored 0–6', text: 'Up to 1 point for thesis, 4 for evidence and commentary, and 1 for sophistication. Your interpretation, supported by close reading, earns the points.' },
  ],
  mcq: {
    intro: '55 questions in 60 minutes, a little over 1 minute each including time to read five passages. Poetry is at least two of the five sets, so regular practice reading poems closely is one of the fastest ways to gain points. Wrong answers lose no points.',
    tips: [
      'Read the whole passage first, marking shifts in tone, speaker or time.',
      'Answer "line" questions by rereading the lines plus one line before and after.',
      'Know your terms: apostrophe, enjambment, caesura, irony, paradox, unreliable narrator.',
      'Choose the most precise answer, not the one that is broadly true.',
      'Watch extreme tone words: "furious" and "ecstatic" are rarely right in literary passages.',
      'Pace yourself: about 12 minutes per passage set.',
    ],
  },
  unitLabel: 'Big idea',
  unitsTitle: 'The 6 big ideas, in plain English',
  units: [
    { name: 'Character', weight: '', about: 'Who the people in the work are, and why they act.', skills: "Explain how characters' choices, contradictions and changes reveal values and conflicts in the work." },
    { name: 'Setting', weight: '', about: 'Time, place and atmosphere.', skills: 'Explain how time, place and atmosphere shape characters and meaning.' },
    { name: 'Structure', weight: '', about: 'How the work is built.', skills: 'Analyze plot order, contrasts and shifts, and in poetry, line breaks, stanzas and form.' },
    { name: 'Narration', weight: '', about: 'Who tells the story, and how much they know.', skills: 'Explain how point of view, narrator reliability and distance shape what readers know.' },
    { name: 'Figurative language', weight: '', about: 'Language that means more than it says.', skills: 'Interpret imagery, metaphor, symbol and irony, and how they build meaning.' },
    { name: 'Literary argumentation', weight: '', about: 'Writing your own interpretation.', skills: 'Write an interpretation with a defensible thesis, specific textual evidence and commentary.' },
  ],
  unitsNote: 'The course has 9 units rotating through Short Fiction (Units 1, 4, 7), Poetry (Units 2, 5, 8) and Longer Fiction or Drama (Units 3, 6, 9). Each cycle goes deeper into the same six skills.',
  frq: {
    title: 'The 3 essays',
    intro: '2 hours for three essays, about 40 minutes each. Each essay is scored out of 6 with the same rubric rows: thesis (1), evidence and commentary (4) and sophistication (1).',
    types: [
      { label: 'Q1 · 6 pts', title: 'Poetry analysis', text: "Analyze how a poet uses literary elements and techniques to convey a complex idea, such as a speaker's conflicted feelings.", tip: 'Track how the poem changes from beginning to end.' },
      { label: 'Q2 · 6 pts', title: 'Prose fiction analysis', text: 'Analyze how an author uses literary elements to develop a character, relationship or idea in a passage.', tip: 'Focus on two or three choices that build one interpretation.' },
      { label: 'Q3 · 6 pts', title: 'Literary argument', text: "Choose a novel or play and argue how a concept from the prompt (such as a character's isolation) contributes to the work's meaning.", tip: 'Prepare 3–4 works you know well; specific scenes beat plot summary.' },
    ],
    timePlan: 'About 40 minutes per essay, spending 5–8 minutes of each block reading and planning. Your thesis should answer "so what?": what the details reveal about the work\'s meaning.',
  },
  habits: [
    'Underline every task verb in the prompt before you plan.',
    'Write a defensible thesis in your first paragraph.',
    'Back every claim with specific evidence, then explain it.',
    'Keep 2 minutes to reread and fix unclear sentences.',
    'Stuck? Answer each part separately, in order. Partial credit is real.',
  ],
  traps: [
    { title: 'Speaker = poet', text: 'Refer to "the speaker" in poems and "the narrator" in prose. They are not automatically the author.' },
    { title: 'Plot summary', text: "Retelling what happens isn't analysis. Explain how a detail creates meaning." },
    { title: 'Device lists', text: '"The poet uses imagery, diction and tone" earns nothing without explaining effects.' },
    { title: 'Vague thesis', text: '"The author uses literary devices to convey meaning" restates the prompt. Name the meaning.' },
    { title: 'Ignoring shifts', text: 'Changes in tone, time or perspective are often the key to a passage.' },
    { title: 'Unprepared literary argument', text: 'Choosing a work you barely remember leads to vague evidence. Prepare 3–4 works.' },
    { title: 'Movie memories', text: 'Film versions often change plots. Use evidence from the text itself.' },
    { title: 'Long quotes', text: 'Short, embedded quotations followed by commentary work better than long block quotes.' },
    { title: 'Overreading', text: "Interpretations must be supported by the text; avoid claims the passage can't back up." },
    { title: 'Running out of time', text: 'Three complete essays score better than two polished and one unfinished.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: short fiction and poetry', text: 'Character, setting and basic poetic analysis. Annotate one short story and one poem each week.' },
    { when: 'Nov – Dec', focus: 'Unit 3 and your essay works', text: 'Start building notes on 3–4 novels or plays for the literary argument essay.' },
    { when: 'Jan – Feb', focus: 'Units 4–6: deeper analysis', text: 'Narration, structure and figurative language. Timed poetry and prose essays every two weeks.' },
    { when: 'Mar – Apr', focus: 'Units 7–9: complexity', text: 'Irony, paradox and ambiguity. Practice multiple-choice passage sets under timing.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'All three essays in one sitting. Review your notes on prepared works.' },
  ],
  scores: { threePlus: '73–74%', fives: '16%' },
  practice: [
    {
      topic: 'Prose · Characterization',
      question: 'A new principal "parked in the visitor space, though his name was already painted on the curb beside it, and stood for a long minute looking at the building as if it might change its mind about him." His choice of parking space most strongly suggests that he:',
      choices: ['did not notice the sign', 'feels uncertain about claiming his new position', 'wants to show off to the staff', 'plans to leave the school quickly'],
      answer: 'B',
      why: 'Avoiding the space with his own name implies hesitation about stepping into his role.',
    },
    {
      topic: 'Prose · Figurative language',
      question: 'In the same passage, the phrase "as if it might change its mind about him" is an example of:',
      choices: ['personification', 'hyperbole', 'alliteration', 'understatement'],
      answer: 'A · personification',
      why: "Giving the building the ability to \"change its mind\" is personification, and it reflects the principal's anxiety.",
    },
    {
      topic: 'Poetry · Structure',
      question: 'A poem about a grandmother\'s button tin ends: "When I was small I thought she loved the buttons. / Now I think she was counting what was lost." The shift between these lines primarily emphasizes:',
      choices: [
        "the difference between a child's and an adult's understanding",
        "the speaker's growing frustration with the grandmother",
        "a change in the poem's setting from city to country",
        "the speaker's decision to sew the buttons back on",
      ],
      answer: 'A',
      why: '"When I was small" and "Now I think" contrast two stages of understanding: the child sees a hobby; the adult sees grief.',
    },
  ],
  faq: [
    {
      q: 'What books should I use for the AP Lit literary argument essay?',
      a: 'Prepare 3–4 novels or plays you know deeply: characters, key scenes, themes and a few short quotations. The prompt lists about 40 suggested titles, but you may use any comparable work of literary merit.',
    },
    {
      q: 'What is the difference between AP English Language and AP English Literature?',
      a: 'AP Lang is about rhetoric and argument in nonfiction. AP Lit is about interpreting fiction, drama and poetry: its essays analyze a poem, a prose passage and a novel or play you choose.',
    },
  ],
};
