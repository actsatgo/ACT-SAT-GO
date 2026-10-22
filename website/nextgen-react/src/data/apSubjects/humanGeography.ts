import type { ApSubject } from './types';

export const HUMAN_GEOGRAPHY: ApSubject = {
  slug: 'human-geography',
  guideSlug: 'ap-human-geography-exam-guide-act-sat-go',
  name: 'AP Human Geography',
  metaTitle: 'AP Human Geography Exam Guide 2027: Format, Units, Models & FRQs | ACT SAT GO',
  description:
    'The AP Human Geography (APHG) exam explained: 60 multiple-choice and 3 free-response questions, all 7 units, the models you must know with their limitations, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Human Geography exam is 2 hours 15 minutes: 60 multiple-choice questions in 1 hour and 3 free-response questions in 75 minutes, each worth half your score. Many questions are built around maps, data and images, and the free-response questions follow a fixed pattern: no stimulus, one stimulus, then two. Units 2–7 each carry about the same weight. About 65–66% of students score 3 or higher.',
  examDate: 'Monday, May 3, 2027 (morning session)',
  length: '2 hours 15 minutes',
  glance: [
    { value: '2 hr 15', label: '1 hr multiple choice + 75 min free response' },
    { value: '60 + 3', label: 'multiple-choice + free-response questions' },
    { value: '7 units', label: 'thinking geographically to development' },
    { value: '65–66%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '50%', timing: '1 hr · 60 questions', what: 'Analyze geographic concepts, data from maps, charts and graphs, and spatial relationships at different scales.' },
    { section: 'II · Free response', weight: '50%', timing: '1 hr 15 min · 3 questions', what: 'Q1 has no stimulus (text only), Q2 uses one stimulus (data, image or map) and Q3 uses two stimuli. Each question has several parts (A–G).' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook app. Practice typing timed answers before May." },
    { title: 'Scale and patterns matter', text: 'Human Geography asks where things are and why there. Practice explaining patterns at local, regional, national and global scales.' },
  ],
  mcq: {
    intro: '60 questions in 60 minutes, exactly one minute each. Maps and charts take longer, so answer vocabulary questions quickly. Wrong answers lose no points.',
    tips: [
      'Read the map title, legend and scale before the question.',
      'Match the model to the clue: stages and birth rates mean the demographic transition; zones and rings mean urban models.',
      'Know your vocabulary precisely: relocation vs expansion diffusion; push vs pull factors.',
      'Think about scale: an answer can be true globally but false locally.',
      'Eliminate extreme words like "always" and "only".',
      'Move on at one minute and come back to flagged maps.',
    ],
  },
  units: [
    { name: 'Thinking Geographically', weight: '8–10%', about: 'Maps, data and spatial ideas.', skills: 'Read maps and projections; use GIS, GPS and data; explain scale, region, distance decay and human-environment interaction.' },
    { name: 'Population & Migration', weight: '12–17%', about: 'Where people live and why they move.', skills: 'Use population pyramids, density and the demographic transition model; explain Malthus; push-pull factors and types of migration.' },
    { name: 'Cultural Patterns & Processes', weight: '12–17%', about: 'How culture spreads and changes.', skills: 'Explain cultural landscapes; types of diffusion; the spread of languages and religions; globalization and acculturation.' },
    { name: 'Political Patterns & Processes', weight: '12–17%', about: 'States, nations and boundaries.', skills: 'Distinguish state, nation and nation-state; boundary types; federal and unitary states; devolution and supranationalism.' },
    { name: 'Agriculture & Rural Land Use', weight: '12–17%', about: 'How and where food is produced.', skills: "Explain the agricultural revolutions; von Thünen's model; commercial and subsistence farming; the Green Revolution; food systems and sustainability." },
    { name: 'Cities & Urban Land Use', weight: '12–17%', about: 'How cities are organized.', skills: 'Apply urban models (Burgess, Hoyt, Harris-Ullman, Latin American, African, Southeast Asian); central place theory; the rank-size rule; urban challenges and sustainability.' },
    { name: 'Industrial & Economic Development', weight: '12–17%', about: 'Why some places are richer than others.', skills: "Explain the Industrial Revolution's spread; economic sectors; measures of development (GDP, HDI, GII); Rostow and Wallerstein; Weber's location theory." },
  ],
  unitsNote: "Units 2–7 each carry about the same weight, so balance your review, and Unit 1's map skills and scale ideas appear inside every other unit. Learn every model with one limitation: the demographic transition, von Thünen, Burgess, Rostow, Wallerstein and Weber. Free-response questions often ask where a model fails to explain the real world.",
  frq: {
    title: 'The 3 free-response questions',
    intro: '75 minutes, 3 questions of 7 parts each, all worth the same 7 points. The stimulus pattern is the same every year: none, one, then two.',
    types: [
      { label: 'Q1 · text only', title: 'No stimulus', text: 'A scenario or concept with no map or chart. You define, describe, explain and apply concepts from memory.', tip: 'Use precise vocabulary and a real-world example for each part.' },
      { label: 'Q2 · one stimulus', title: 'One stimulus', text: 'A map, chart, image or table to interpret, then connect to concepts and explain patterns.', tip: 'Quote specific data from the stimulus in your answer.' },
      { label: 'Q3 · two stimuli', title: 'Two stimuli', text: 'Two sources to compare and connect, often at different scales or time periods.', tip: 'Refer to both stimuli, and say which one you are using.' },
    ],
    timePlan: 'About 25 minutes per question. Each part has a task verb (identify, describe, explain, compare): do exactly what it asks.',
  },
  habits: [
    'Match the task verb in each part exactly.',
    'Use precise vocabulary from the course.',
    'Give a real place as an example when asked.',
    'Refer to the stimulus by name in Q2 and Q3.',
    'Stuck? Define the key term; it can still earn a point.',
  ],
  traps: [
    { title: 'Nation vs state', text: 'A state is a political unit with sovereignty; a nation is a group with a shared culture. A nation-state is where they match.' },
    { title: 'Types of diffusion', text: 'Relocation diffusion spreads by people moving; expansion diffusion (hierarchical, contagious, stimulus) spreads while staying in place.' },
    { title: 'Arithmetic vs physiological density', text: 'Physiological density is people per unit of arable land, so it reveals pressure on farmland.' },
    { title: 'Push vs pull', text: 'Push factors make people leave; pull factors attract them to a destination.' },
    { title: 'Wrong urban model', text: 'Burgess has rings, Hoyt has sectors, Harris-Ullman has multiple nuclei. Know which is which.' },
    { title: 'Ignoring scale', text: 'A pattern at one scale may disappear at another. Name the scale you are discussing.' },
    { title: 'Development measures', text: 'GDP measures output; HDI adds education and life expectancy; GII measures gender inequality.' },
    { title: 'Model without limits', text: 'For any model, be ready to give one assumption it makes that the real world breaks.' },
    { title: 'Vague examples', text: '"Some countries" scores less than naming a specific country or city.' },
    { title: 'Describing instead of explaining', text: '"Explain" needs a reason why; describing what happens is not enough.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: foundations', text: 'Maps, scale, population and migration. Learn the demographic transition model with examples.' },
    { when: 'Nov – Dec', focus: 'Units 3–4: culture and politics', text: 'Diffusion, language, religion, boundaries and devolution. Start one free-response question per week.' },
    { when: 'Jan – Feb', focus: 'Unit 5: agriculture', text: 'Agricultural revolutions, von Thünen and food systems. Practice model limitations.' },
    { when: 'Mar – Apr', focus: 'Units 6–7: cities and development', text: 'Urban models and economic development. Begin timed 60-question sets.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'All three free-response types under timing. Review the models and the traps list.' },
  ],
  scores: { threePlus: '65–66%', fives: '17–19%' },
  practice: [
    {
      topic: 'Unit 3 · Diffusion',
      question: 'A new fashion trend starts in major global cities and then spreads to smaller cities and towns. This is an example of:',
      choices: ['relocation diffusion', 'contagious diffusion', 'stimulus diffusion', 'hierarchical diffusion'],
      answer: 'D',
      why: 'Hierarchical diffusion spreads from places of higher status or size to lower ones, skipping places in between.',
    },
    {
      topic: 'Unit 5 · Von Thünen',
      question: "In von Thünen's model, which activity is located closest to the market?",
      choices: ['Ranching', 'Grain farming', 'Dairy and market gardening', 'Forestry for firewood'],
      answer: 'C',
      why: 'Perishable, high-value products such as dairy and vegetables are produced closest to the market to reduce spoilage and transport time.',
    },
    {
      topic: 'Unit 6 · Rank-size rule',
      question: "Under the rank-size rule, if a country's largest city has 6 million people, about how many live in its third-largest city?",
      choices: ['1 million', '2 million', '3 million', '4 million'],
      answer: 'B · 2 million',
      why: 'Rank-size: the nth city has 1/n the population of the largest. 6 million ÷ 3 = 2 million.',
    },
  ],
  faq: [
    {
      q: 'Which models do I need to know for AP Human Geography?',
      a: "The demographic transition model, von Thünen's agricultural model, the urban models (Burgess, Hoyt, Harris-Ullman and the regional models), Rostow's stages, Wallerstein's world-systems theory and Weber's least cost theory, each with one limitation.",
    },
    {
      q: 'Is AP Human Geography a good first AP class?',
      a: 'Yes, many students take it in 9th or 10th grade. It needs no math beyond reading charts, but it rewards precise vocabulary and real-world examples.',
    },
  ],
};
