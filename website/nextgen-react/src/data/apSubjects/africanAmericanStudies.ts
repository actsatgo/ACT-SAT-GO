import type { ApSubject } from './types';

export const AFRICAN_AMERICAN_STUDIES: ApSubject = {
  slug: 'african-american-studies',
  guideSlug: 'ap-african-american-studies-exam-guide-act-sat-go',
  name: 'AP African American Studies',
  metaTitle: 'AP African American Studies Exam Guide 2027: Format, Units & Project | ACT SAT GO',
  description:
    'The AP African American Studies exam explained: 60 source-based multiple-choice questions, 3 short answers, the DBQ, the individual student project, all 4 units, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'Your AP African American Studies score combines a source-based exam with an individual research project. On exam day you get 60 multiple-choice questions in 70 minutes (60%), a 10-minute project validation question (1.5%), and 3 short answers plus a document-based question in 85 minutes (30%). The project, a presentation with an oral defense done in class, is the other 8.5%. The exam is interdisciplinary, drawing on history, literature, the arts, geography and politics. About 77–79% of students score 3 or higher.',
  examDate: 'Thursday, May 6, 2027 (afternoon session)',
  length: '2 hours 45 minutes',
  glance: [
    { value: '2 hr 45', label: 'multiple choice, project validation and free response' },
    { value: '60 + 4', label: 'multiple-choice + written questions (3 SAQs and a DBQ)' },
    { value: '4 units', label: 'early Africa to the 2000s' },
    { value: '77–79%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '60%', timing: '1 hr 10 min · 60 questions', what: 'Sets of 3–4 questions built on primary and secondary sources: texts, images, maps and data.' },
    { section: 'IB · Project validation', weight: '1.5%', timing: '10 min · 1 question', what: 'A short written response to one oral defense question about your individual student project.' },
    { section: 'II · Free response', weight: '30%', timing: '1 hr 25 min · 4 questions', what: '3 short-answer questions (40 min, 18%): text-based, visual-based and thematic. 1 document-based question (45 min, 12%) using 5 documents.' },
    { section: 'Individual student project', weight: '8.5%', timing: 'About 3 weeks in class', what: 'Research a topic of your choice, then give a presentation and an oral defense, scored by your teacher.' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook app. Practice typing timed answers before May." },
    { title: 'Interdisciplinary sources', text: 'Questions draw on history, literature, the arts, geography and politics. Many sources are creative works such as poems, songs and paintings: read them like a historian and a critic at once.' },
  ],
  mcq: {
    intro: '60 questions in 70 minutes gives you about 1 minute 10 seconds per question. Every set starts with a source, so read the source line carefully. Wrong answers lose no points.',
    tips: [
      'Read the source line first: author, date and type tell you the context.',
      'Identify the claim or purpose of each source before reading the questions.',
      'Connect sources to broader developments: what was happening at the time?',
      'For images and art, describe what you see before interpreting it.',
      'Eliminate answers that are true but irrelevant to this specific source.',
      'Never leave a blank. Guess and flag at about one minute.',
    ],
  },
  units: [
    { name: 'Origins of the African Diaspora', weight: '20–25%', about: 'About 900 BCE to the 16th century.', skills: 'Explain the diversity of early African societies, including Aksum, Mali and Great Zimbabwe; trade networks; religious traditions; and the field of African American Studies itself.' },
    { name: 'Freedom, Enslavement & Resistance', weight: '30–35%', about: '16th century to 1865.', skills: "Explain the transatlantic slave trade and the Middle Passage; slavery's laws and economy; forms of resistance; slave narratives; abolition and the Civil War." },
    { name: 'The Practice of Freedom', weight: '20–25%', about: '1865 to the 1940s.', skills: "Explain Reconstruction and its amendments; Jim Crow; Black women's leadership; the Great Migration; the Harlem Renaissance; debates over strategies for advancement." },
    { name: 'Movements & Debates', weight: '20–25%', about: '1940s to the 2000s.', skills: 'Explain the civil rights and Black Power movements; links to anticolonial movements; the Black Arts Movement; music and culture; contemporary debates and Afrofuturism.' },
  ],
  unitsNote: "Unit 2 (16th century to 1865) is the largest. Don't neglect Unit 1: early African societies and the diaspora appear more often than many students expect.",
  frq: {
    title: 'Free response and the project',
    intro: '85 minutes for 3 short answers and a document-based question, plus the individual student project you complete in class.',
    types: [
      { label: 'SAQ · 18%', title: 'Short-answer questions', text: 'Three questions in 40 minutes: one text-based, one visual-based and one thematic (no source). Answer each part with a claim and specific explanation.', tip: "Use the source's details, then connect them to a broader development." },
      { label: 'DBQ · 12%', title: 'Document-based question', text: 'Write an argument using evidence from 5 documents in 45 minutes. Analyze their perspectives and connect them to the broader context.', tip: 'Group documents by idea, not by number.' },
      { label: 'Project · 8.5%', title: 'Individual student project', text: 'Choose a topic, research it with credible sources, and give a presentation with an oral defense in class, over about 3 weeks.', tip: 'Pick a topic narrow enough to research deeply in three weeks.' },
      { label: 'Validation · 1.5%', title: 'Project validation', text: 'On exam day you answer one of your oral defense questions in writing in 10 minutes, confirming the project is your own work.', tip: 'Review your project and sources the night before.' },
    ],
    timePlan: 'About 13 minutes for each short answer and 45 minutes for the DBQ. Your project must be your own: teachers and tutors can teach research skills, not do the research.',
  },
  habits: [
    'Underline every task verb in the prompt before you plan.',
    'Write a defensible thesis in your first paragraph.',
    'Back every claim with specific evidence, then explain it.',
    'Keep 2 minutes to reread and fix unclear sentences.',
    'Stuck? Answer each part separately, in order. Partial credit is real.',
  ],
  traps: [
    { title: 'Starting with enslavement', text: 'Unit 1 covers centuries of African empires, trade and culture before the slave trade.' },
    { title: 'One African American experience', text: 'Experiences differed by region, era, gender, class and religion. Avoid generalizations.' },
    { title: 'Ignoring the source type', text: 'A poem, a speech and a census table make claims in different ways. Name the type in your analysis.' },
    { title: 'Summary instead of analysis', text: 'Explain what a source shows and why it matters, not just what it says.' },
    { title: 'No context', text: 'Connect each source to the developments of its time.' },
    { title: 'Treating debates as one view', text: 'Leaders disagreed, as Booker T. Washington and W.E.B. Du Bois did. Show the range of positions.' },
    { title: 'Vague evidence', text: 'Name specific people, organizations, laws and works.' },
    { title: 'Unanswered parts', text: 'Each SAQ part scores separately. Label (a), (b), (c) and answer each one.' },
    { title: 'Project left too late', text: 'The project is 8.5% plus validation. Plan your topic and sources early.' },
    { title: 'Diaspora forgotten', text: 'The course includes the Caribbean, Latin America and Africa, not only the United States.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 1: origins', text: 'African societies, trade networks and the diaspora. Practice analyzing maps and art.' },
    { when: 'Nov – Jan', focus: 'Unit 2: enslavement and resistance', text: 'The slave trade, slavery, resistance and abolition. Start short-answer practice.' },
    { when: 'Feb – Mar', focus: 'Unit 3 and your project', text: 'Reconstruction, Jim Crow, the Great Migration and the Harlem Renaissance. Complete your individual project.' },
    { when: 'April', focus: 'Unit 4: movements', text: 'Civil rights, Black Power, the arts and contemporary debates. Write timed DBQs.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'Full multiple-choice sets and all written questions under timing. Review your project sources.' },
  ],
  scores: { threePlus: '77–79%', fives: '17–20%' },
  practice: [
    {
      topic: 'Unit 1 · Early Africa',
      question: 'The wealth of the Mali Empire in the 1300s came mainly from:',
      choices: ['Atlantic plantation agriculture', 'control of trans-Saharan trade in gold and salt', 'trade with the Americas', 'coal mining'],
      answer: 'B',
      why: "Mali controlled trans-Saharan routes trading West African gold for Saharan salt, the source of rulers' wealth, such as Mansa Musa's.",
    },
    {
      topic: 'Unit 3 · Debates',
      question: 'W.E.B. Du Bois criticized Booker T. Washington mainly because Washington:',
      choices: [
        'opposed all education for African Americans',
        'called for immediate armed revolution',
        'emphasized vocational training while accepting segregation for the time being',
        'supported moving to Africa',
      ],
      answer: 'C',
      why: 'Washington stressed vocational training and economic progress while temporarily accepting segregation; Du Bois demanded full civil rights and higher education.',
    },
    {
      topic: 'Unit 4 · Strategies',
      question: 'The Montgomery Bus Boycott (1955–1956) is best described as an example of:',
      choices: ['armed self-defense', 'a court case argued by the NAACP alone', 'a Black Power separatist campaign', 'nonviolent economic pressure'],
      answer: 'D',
      why: 'Boycotting buses applied nonviolent economic pressure until the Supreme Court ruled bus segregation unconstitutional.',
    },
  ],
  faq: [
    {
      q: 'What is the AP African American Studies project?',
      a: 'An individual research project you complete in about 3 weeks of class time: you choose a topic, research it with credible sources, and give a presentation with an oral defense, scored by your teacher (8.5%). On exam day you answer one oral defense question in writing (1.5%).',
    },
    {
      q: 'Is AP African American Studies a history course?',
      a: 'It is interdisciplinary. Sources come from history, literature, the arts, geography and politics, and the course covers Africa, the Caribbean and Latin America as well as the United States.',
    },
  ],
};
