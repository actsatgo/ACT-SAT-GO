import type { ApSubject } from './types';

export const COMPARATIVE_GOVERNMENT: ApSubject = {
  slug: 'comparative-government',
  guideSlug: 'ap-comparative-government-and-politics-exam-guide-act-sat-go',
  name: 'AP Comparative Government and Politics',
  metaTitle: 'AP Comparative Government Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Comparative Government and Politics exam explained: 55 multiple-choice and 4 free-response questions, the six core countries, all 5 units, the four FRQ types, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Comparative Government and Politics exam is 2 hours 30 minutes: 55 multiple-choice questions in 1 hour and 4 free-response questions in 90 minutes, each worth half your score. Everything is about comparing how six countries are governed: China, Iran, Mexico, Nigeria, Russia and the United Kingdom. Political institutions is the biggest unit. About 70–72% of students score 3 or higher.',
  examDate: 'Friday, May 14, 2027 (morning session)',
  length: '2 hours 30 minutes',
  glance: [
    { value: '2 hr 30', label: '1 hr multiple choice + 90 min free response' },
    { value: '55 + 4', label: 'multiple-choice + free-response questions' },
    { value: '6 countries', label: 'China, Iran, Mexico, Nigeria, Russia, UK' },
    { value: '70–72%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '50%', timing: '1 hr · 55 questions', what: 'Questions on concepts and the six core countries, including sets built on data, maps and text passages.' },
    { section: 'II · Free response', weight: '50%', timing: '1 hr 30 min · 4 questions', what: 'Conceptual analysis, quantitative analysis, comparative analysis and an argument essay, each worth 11–14% of the exam score.' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook app. Practice typing timed answers before May." },
    { title: 'The six core countries', text: 'Every question draws on China, Iran, Mexico, Nigeria, Russia and the UK. They range from democracies to authoritarian regimes, so you can compare institutions, elections and policies across systems.' },
  ],
  mcq: {
    intro: '55 questions in 60 minutes gives you just over 1 minute per question. Knowing country facts well is what makes this pace possible. Wrong answers lose no points.',
    tips: [
      'Know the vocabulary precisely: legitimacy, sovereignty, authority, power, state, nation, regime.',
      'Classify each country as democratic, hybrid or authoritarian, and be ready to explain why.',
      'Read charts as evidence for a claim. Look at the axes and the time period first.',
      'Compare systems: presidential, parliamentary and semi-presidential; single-member districts and proportional representation.',
      'Eliminate answers about the wrong country. Many wrong choices are true of a different country.',
      'Flag and move on after 90 seconds.',
    ],
  },
  units: [
    { name: 'Political Systems, Regimes & Governments', weight: '18–27%', about: 'What kind of state each country is.', skills: 'Compare democratic and authoritarian regimes; explain sources of legitimacy and stability; describe federal and unitary systems; measure democracy with indicators.' },
    { name: 'Political Institutions', weight: '22–33%', about: 'Executives, legislatures and courts.', skills: 'Compare presidential, parliamentary and semi-presidential systems; explain term limits and removal; describe legislative independence; compare judicial independence and review.' },
    { name: 'Political Culture & Participation', weight: '11–18%', about: 'How citizens relate to government.', skills: 'Explain political socialization and ideology; compare civil rights and liberties; analyze social movements and how governments respond to cleavages.' },
    { name: 'Party & Electoral Systems & Citizen Organizations', weight: '13–18%', about: 'Elections, parties and interest groups.', skills: 'Compare single-member district and proportional representation systems; explain party systems; describe pluralist and corporatist interest groups.' },
    { name: 'Political & Economic Changes & Development', weight: '16–24%', about: 'How globalization and policy reshape states.', skills: 'Explain economic liberalization, privatization and globalization; analyze responses to economic change, social policy and environmental challenges.' },
  ],
  unitsNote: 'Political institutions is the biggest unit, so learn how each country organizes its executive, legislature and courts first. A comparison grid helps: rows for each concept (executive, legislature, elections, parties, civil society), columns for the six countries.',
  frq: {
    title: 'The 4 free-response questions',
    intro: '90 minutes, 4 questions: Q1 is worth 11% of your score, Q2 and Q3 12.5% each and Q4 14%. The four question types are the same every year.',
    types: [
      { label: 'Q1 · Concept', title: 'Conceptual analysis', text: 'Define or describe a political concept, then explain it and apply it to a situation.', tip: 'Definitions must be precise; the rest of the answer builds on them.' },
      { label: 'Q2 · Data', title: 'Quantitative analysis', text: 'Describe data from a chart or table, identify a pattern, and draw a conclusion linked to a political concept.', tip: 'Use exact numbers and compare at least two data points.' },
      { label: 'Q3 · Compare', title: 'Comparative analysis', text: 'Compare how two of the six countries handle a concept, explaining a similarity or difference and its effect.', tip: 'Give a specific fact for each country, not a general claim.' },
      { label: 'Q4 · Argument', title: 'Argument essay', text: 'Build an argument with a claim, two pieces of evidence from course countries, reasoning, and a response to an opposing view.', tip: 'Choose the side you can support with the most specific country evidence.' },
    ],
    timePlan: 'About 10 minutes for Q1, 20 each for Q2 and Q3, and 40 for Q4. In comparisons, write "whereas" sentences: "The UK has a fused executive, whereas Mexico…".',
  },
  habits: [
    'Answer each lettered part separately and in order.',
    'Define concepts precisely before applying them.',
    'Use a specific fact for every country you name.',
    'Quote numbers from charts and compare them.',
    'Stuck? Define the concept; it can still earn a point.',
  ],
  traps: [
    { title: 'State vs nation', text: "A state is a political unit with sovereignty; a nation is a group sharing identity. They don't always match." },
    { title: 'Legitimacy vs power', text: 'Legitimacy is acceptance of the right to rule; a regime can have power without legitimacy.' },
    { title: 'Wrong executive type', text: 'UK: parliamentary. Mexico and Nigeria: presidential. Russia: semi-presidential. Know each one.' },
    { title: "Iran's two leaders", text: 'The Supreme Leader outranks the elected president and controls key institutions.' },
    { title: "China's elections", text: 'China has local elections and a legislature, but the Communist Party controls candidates and decisions.' },
    { title: 'Federal vs unitary', text: 'Mexico, Nigeria and Russia are federal; the UK, China and Iran are unitary (the UK with devolution).' },
    { title: 'Vague comparisons', text: '"Both countries have elections" isn\'t a comparison. Explain a specific similarity or difference and why it matters.' },
    { title: 'Ignoring the chart', text: "In Q2, use the data shown. General knowledge alone won't earn the points." },
    { title: 'Missing the opposing view', text: 'The argument essay needs a counterargument and a rebuttal.' },
    { title: 'Out-of-date facts', text: 'Leaders and policies change. Focus on how institutions work, not who is in office.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 1 with the UK and Mexico', text: 'Regimes, legitimacy and sovereignty. Start your comparison grid with the two democracies.' },
    { when: 'Nov – Dec', focus: 'Unit 2 with Nigeria and Russia', text: 'Executives, legislatures and courts. Practice comparative analysis questions.' },
    { when: 'Jan – Feb', focus: 'Unit 3 with China and Iran', text: 'Political culture, civil society and social movements. Practice data questions.' },
    { when: 'Mar – Apr', focus: 'Units 4–5: elections and change', text: 'Electoral systems, parties, globalization and economic policy. Write timed argument essays.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'All four free-response types under timing. Review your comparison grid.' },
  ],
  scores: { threePlus: '70–72%', fives: '15–16%' },
  practice: [
    {
      topic: 'Unit 1 · Legitimacy',
      question: 'A government that bases its legitimacy mainly on economic growth and improving living standards is relying on:',
      choices: ['rational-legal legitimacy through elections', 'traditional legitimacy', 'performance legitimacy', 'charismatic legitimacy'],
      answer: 'C',
      why: 'Performance legitimacy comes from delivering results, such as economic growth. The Chinese government relies heavily on it.',
    },
    {
      topic: 'Unit 4 · Electoral systems',
      question: 'Compared with proportional representation, single-member district plurality systems tend to:',
      choices: ['produce more parties in the legislature', 'favor two large parties and produce single-party majorities', 'guarantee seats in exact proportion to votes', 'require coalition governments'],
      answer: 'B',
      why: "Duverger's law: winner-take-all districts discourage small parties, tending to produce two-party systems and single-party majorities.",
    },
    {
      topic: 'Unit 2 · Judiciary',
      question: "Which country's highest court has the weakest power of judicial review over national legislation?",
      choices: ['United Kingdom', 'Mexico', 'Nigeria', 'Russia (formally)'],
      answer: 'A · United Kingdom',
      why: "Because of parliamentary sovereignty, UK courts can't strike down acts of Parliament, though they can issue declarations of incompatibility.",
    },
  ],
  faq: [
    {
      q: 'Which countries are on the AP Comparative Government exam?',
      a: 'Six core countries: China, Iran, Mexico, Nigeria, Russia and the United Kingdom. Every question draws on them, and the free-response questions ask you to use specific facts about them.',
    },
    {
      q: 'Is AP Comparative Government hard?',
      a: 'It is fact-heavy rather than conceptually difficult: success comes from knowing each country\'s executive type, federal or unitary system, electoral system and key institutions precisely. About 70–72% of students score 3 or higher.',
    },
  ],
};
