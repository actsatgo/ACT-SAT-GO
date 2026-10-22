import type { ApSubject } from './types';

export const ENVIRONMENTAL_SCIENCE: ApSubject = {
  slug: 'environmental-science',
  guideSlug: 'ap-environmental-science-exam-guide-act-sat-go',
  name: 'AP Environmental Science',
  metaTitle: 'AP Environmental Science Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Environmental Science (APES) exam explained: 80 multiple-choice and 3 free-response questions, all 9 units with weightings, the three FRQ types, APES math, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Environmental Science exam is 2 hours 40 minutes: 80 multiple-choice questions in 90 minutes (60% of your score) and 3 free-response questions in 70 minutes (40%). It is fully digital, and a calculator is allowed throughout. Global change is the single biggest unit, and one free-response question always needs math with your setup and units shown. About 69% of students score 3 or higher.',
  examDate: 'Thursday, May 13, 2027 (afternoon session)',
  length: '2 hours 40 minutes',
  glance: [
    { value: '2 hr 40', label: '90 min multiple choice + 70 min free response' },
    { value: '80 + 3', label: 'multiple-choice + free-response questions' },
    { value: '9 units', label: 'ecosystems to global change' },
    { value: '69%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '60%', timing: '1 hr 30 min · 80 questions', what: 'Individual questions and sets built on tables, charts, graphs, models, maps and short texts. Explain concepts, analyze data and propose solutions.' },
    { section: 'II · Free response', weight: '40%', timing: '1 hr 10 min · 3 questions', what: 'Q1 Design an investigation. Q2 Analyze an environmental problem and propose a solution. Q3 Analyze a problem and propose a solution using calculations.' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook testing app. Practice typing timed answers before May." },
    { title: 'Calculator allowed, but show your math', text: 'A calculator is permitted on the whole exam. On calculation questions you must still show your setup and units to earn the points.' },
  ],
  mcq: {
    intro: '80 questions in 90 minutes gives you about 1 minute 7 seconds per question, so speed matters more here than on most AP science exams. Wrong answers lose no points.',
    tips: [
      "Keep moving. At about 1 minute per question, don't let one data set eat five minutes.",
      'Read the axes and units first on every graph or table.',
      'Know the classic examples: eutrophication, ozone depletion, acid rain, the tragedy of the commons.',
      'Choose the most specific answer that is directly supported by the data shown.',
      'Watch for "most likely" and "best": several choices may be true, but only one is best.',
      'Never leave a blank. Guess and flag, then return if time allows.',
    ],
  },
  units: [
    { name: 'The Living World: Ecosystems', weight: '6–8%', about: 'How energy and matter move through nature.', skills: 'Describe biomes; trace carbon, nitrogen, phosphorus and water cycles; calculate energy flow with the 10% rule.' },
    { name: 'The Living World: Biodiversity', weight: '6–8%', about: 'Why variety matters.', skills: 'Explain genetic, species and ecosystem diversity; ecosystem services; island biogeography; ecological succession.' },
    { name: 'Populations', weight: '10–15%', about: 'How populations grow and change.', skills: 'Compare r- and K-selected species; read survivorship curves and age-structure diagrams; calculate growth rate and doubling time; explain demographic transition.' },
    { name: 'Earth Systems & Resources', weight: '10–15%', about: 'The physical planet.', skills: 'Explain plate tectonics, soil formation, atmosphere layers, global wind patterns, watersheds and El Niño.' },
    { name: 'Land & Water Use', weight: '10–15%', about: 'Farming, forestry, mining and cities.', skills: 'Compare agricultural practices, irrigation, pest control, forestry, mining and urbanization; explain the tragedy of the commons and sustainable methods.' },
    { name: 'Energy Resources & Consumption', weight: '10–15%', about: 'Where our energy comes from.', skills: 'Compare fossil fuels, nuclear and renewables; explain how electricity is generated; calculate energy use and cost; describe efficiency and conservation.' },
    { name: 'Atmospheric Pollution', weight: '7–10%', about: 'Air quality.', skills: 'Identify primary and secondary pollutants; explain photochemical smog, thermal inversions, acid deposition and indoor pollution; describe Clean Air Act controls.' },
    { name: 'Aquatic & Terrestrial Pollution', weight: '7–10%', about: 'Water, soil and waste.', skills: 'Explain eutrophication, dissolved oxygen, sewage treatment, bioaccumulation and biomagnification, LD50 and solid waste.' },
    { name: 'Global Change', weight: '15–20%', about: 'Climate, ozone and biodiversity loss.', skills: 'Explain stratospheric ozone depletion, the greenhouse effect and climate change impacts, ocean acidification, invasive species and endangered species.' },
  ],
  unitsNote: 'Global change is the single biggest unit, and Units 3–6 together are about half of the multiple-choice section. Laws and treaties appear often: know the purpose of the Montreal Protocol, Clean Air Act, Clean Water Act, Endangered Species Act and CITES.',
  frq: {
    title: 'The 3 free-response questions',
    intro: '70 minutes for 3 questions, each worth 10 points (30 raw points, 40% of your score). The three question types are the same every year.',
    types: [
      { label: 'Q1', title: 'Design an investigation', text: 'Identify a research question, hypothesis, variables and controls, then describe data collection and explain results for an environmental scenario.', tip: 'Name the independent variable, dependent variable and one specific control.' },
      { label: 'Q2', title: 'Analyze a problem and propose a solution', text: 'Describe environmental concepts shown in a diagram or data, explain effects, and propose and justify a solution.', tip: 'A solution needs an action and how it reduces the problem.' },
      { label: 'Q3', title: 'Analyze a problem with calculations', text: 'Use calculations (percent change, unit conversion, energy, population growth) to analyze a scenario, then propose and justify a solution.', tip: 'Show setup and units at every step; the answer alone may earn nothing.' },
    ],
    timePlan: 'Skim for 3 minutes, then about 22 minutes per question. When a question asks you to "identify", one word can do it; "explain" needs a full cause-and-effect sentence.',
  },
  habits: [
    'Match the task verb: identify, describe, explain, justify.',
    'Show setup and units for every calculation.',
    "Give one specific example per point; extras aren't scored.",
    'Propose solutions with an action and a reason.',
    'Stuck? Answer the other lettered parts; each scores separately.',
  ],
  traps: [
    { title: 'Ozone vs climate change', text: 'Stratospheric ozone depletion increases UV-B reaching Earth. It is not the main cause of global warming.' },
    { title: 'Good vs bad ozone', text: 'Stratospheric ozone protects us; ground-level ozone is a secondary pollutant in photochemical smog.' },
    { title: 'Eutrophication sequence', text: "Nutrients → algal bloom → algae die → decomposers use O₂ → hypoxia → fish die-off. Don't skip the decomposers." },
    { title: 'Bioaccumulation vs biomagnification', text: 'Bioaccumulation builds up in one organism over time; biomagnification increases up a food chain.' },
    { title: 'Vague solutions', text: '"Reduce pollution" earns nothing. Name a specific action and explain how it works.' },
    { title: 'Doubling time', text: 'Rule of 70: doubling time ≈ 70 ÷ growth rate in percent. Use 2, not 0.02.' },
    { title: 'Renewable vs clean', text: 'Biomass and hydroelectric are renewable but still have environmental impacts. Nuclear is low-carbon but not renewable.' },
    { title: 'Correlation as cause', text: 'Data showing two trends together doesn\'t prove one causes the other. Say "is associated with".' },
    { title: 'Missing units', text: 'A calculation answer without units or a setup may score zero on Q3.' },
    { title: 'Too many examples', text: 'If asked for one example, only the first one is scored. Make it your best.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–3: the living world', text: 'Ecosystems, cycles, biodiversity and population dynamics. Learn the rule of 70 and percent change early.' },
    { when: 'Nov – Dec', focus: 'Units 4–5: Earth and land', text: 'Earth systems, soil, agriculture, water use and urbanization. Start one free-response question per week.' },
    { when: 'Jan – Feb', focus: 'Unit 6: energy', text: 'Fossil fuels, nuclear and renewables. Practice energy and cost calculations (Q3 style).' },
    { when: 'Mar – Apr', focus: 'Units 7–9: pollution and global change', text: 'Air, water and land pollution, then climate change and biodiversity loss. Begin timed 80-question sets.' },
    { when: 'Early May', focus: 'Free-response drills', text: 'All three question types under timing. Review laws, treaties and the traps list.' },
  ],
  scores: { threePlus: '69%', fives: '13%' },
  practice: [
    {
      topic: 'Unit 3 · Population growth',
      question: 'A country has a crude birth rate of 30 per 1,000 and a crude death rate of 10 per 1,000, with no migration. What is its approximate doubling time?',
      choices: ['20 years', '35 years', '50 years', '70 years'],
      answer: 'B · 35 years',
      why: 'Growth rate = (30 − 10)/1,000 = 2% per year. Rule of 70: 70 ÷ 2 = 35 years.',
    },
    {
      topic: 'Unit 7 · Smog',
      question: 'Photochemical smog in a city usually peaks in the early afternoon. What best explains this timing?',
      choices: [
        'Nighttime cooling traps pollutants',
        'Rain washes pollutants out in the morning',
        'Morning traffic releases NOx and VOCs, and sunlight drives reactions that form ozone',
        'Power plants only operate in the afternoon',
      ],
      answer: 'C',
      why: 'Morning commute emissions of NOx and VOCs react in sunlight, forming ground-level ozone, which peaks after midday.',
    },
    {
      topic: 'Unit 2 · Island biogeography',
      question: 'According to island biogeography theory, which island would be expected to have the highest species richness?',
      choices: ['Large island close to the mainland', 'Small island far from the mainland', 'Small island close to the mainland', 'Large island far from the mainland'],
      answer: 'A',
      why: 'Large islands have more habitats and lower extinction rates; nearby islands receive more immigrants. Both increase species richness.',
    },
  ],
  faq: [
    {
      q: 'Is there math on the AP Environmental Science exam?',
      a: 'Yes. Free-response Q3 always needs calculations such as percent change, unit conversions, energy use and cost, and population doubling time. A calculator is allowed, but you must show your setup and units to earn points.',
    },
    {
      q: 'Is the AP Environmental Science exam digital?',
      a: 'Yes. APES is fully digital in the Bluebook app: you answer multiple-choice questions and type your free-response answers there, and responses are submitted automatically at the end.',
    },
  ],
};
