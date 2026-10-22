import type { ApSubject } from './types';

export const BIOLOGY: ApSubject = {
  slug: 'biology',
  guideSlug: 'ap-biology-exam-guide-act-sat-go',
  name: 'AP Biology',
  metaTitle: 'AP Biology Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Biology exam explained: 60 multiple-choice and 6 free-response questions in 3 hours, all 8 units with weightings, FRQ types, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Biology exam is 3 hours long: 60 multiple-choice questions in 90 minutes and 6 free-response questions in 90 minutes, each worth half your score. It covers 8 units from the chemistry of life to ecology, and most points come from reasoning with data, graphs and experiments rather than recalling facts. About 70% of students score 3 or higher.',
  examDate: 'Monday, May 3, 2027 (afternoon session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '90 min multiple choice + 90 min free response' },
    { value: '60 + 6', label: 'multiple-choice + free-response questions' },
    { value: '8 units', label: 'from molecules to ecosystems' },
    { value: '70–71%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    {
      section: 'I · Multiple choice',
      weight: '50%',
      timing: '1 hr 30 min · 60 questions',
      what: 'Individual questions and sets built around data, diagrams and experiments. You explain concepts, analyze visuals, use the scientific method and do calculations.',
    },
    {
      section: 'II · Free response',
      weight: '50%',
      timing: '1 hr 30 min · 6 questions',
      what: '2 long questions (interpreting an experiment; analyzing data with a graph) and 4 short questions (scientific investigation, conceptual analysis, analysis of a model, analysis of data).',
    },
  ],
  formatNotes: [
    {
      title: 'Click in Bluebook, write on paper',
      text: 'You answer multiple-choice questions and read the free-response questions in the Bluebook app, then handwrite free-response answers in a paper booklet.',
    },
    {
      title: 'Calculator + equation sheet',
      text: 'A calculator is allowed on the whole exam, and an equations and formulas sheet is provided (chi-square, Hardy-Weinberg, water potential and more). Practice using it rather than memorizing it.',
    },
  ],
  mcq: {
    intro: '60 questions in 90 minutes gives you 1 minute 30 seconds per question. Data-heavy sets take longer, so move quickly through recall questions. Wrong answers lose no points, so never leave one blank.',
    tips: [
      'Read the graph before the question: axes, units, the independent variable and the control.',
      'Predict before you look at the choices for "what would happen if…" questions.',
      'Follow the energy and the electrons in respiration and photosynthesis questions.',
      'Use the formula sheet for water potential, chi-square and Hardy-Weinberg.',
      'Watch for one-word traps: "always", "only", "directly".',
      'Flag long data sets and return once the quick points are banked.',
    ],
  },
  units: [
    { name: 'Chemistry of Life', weight: '8–11%', about: 'Water and the molecules of life.', skills: "Explain water's properties; relate structure to function in carbohydrates, lipids, proteins and nucleic acids; explain dehydration synthesis and hydrolysis." },
    { name: 'Cells', weight: '10–13%', about: 'Organelles, membranes and transport.', skills: 'Link organelles to functions; explain surface-area-to-volume limits; describe membrane transport; calculate water potential; explain endosymbiosis.' },
    { name: 'Cellular Energetics', weight: '12–16%', about: 'Enzymes, photosynthesis and respiration.', skills: 'Explain enzyme activity and inhibition; trace electrons and energy through photosynthesis and cellular respiration; predict effects of blocking a step.' },
    { name: 'Cell Communication & Cell Cycle', weight: '10–15%', about: 'Signaling and cell division.', skills: 'Describe signal transduction pathways; predict effects of mutations in a pathway; explain feedback; describe mitosis, checkpoints and cancer.' },
    { name: 'Heredity', weight: '8–11%', about: 'How traits pass between generations.', skills: 'Explain meiosis and genetic variation; solve Mendelian and non-Mendelian crosses; use pedigrees; calculate recombination frequency; run chi-square tests.' },
    { name: 'Gene Expression & Regulation', weight: '12–16%', about: 'From DNA to protein, and how genes are switched.', skills: 'Describe replication, transcription and translation; explain operons and eukaryotic regulation; predict effects of mutations; explain biotechnology tools.' },
    { name: 'Natural Selection', weight: '13–20%', about: 'Evolution and its evidence.', skills: 'Explain natural selection, genetic drift and gene flow; use Hardy-Weinberg; read phylogenetic trees; describe speciation and evidence of common ancestry.' },
    { name: 'Ecology', weight: '10–15%', about: 'Organisms, populations and ecosystems.', skills: 'Explain behavior and energy flow; model population growth; describe community interactions, biodiversity and the effects of disruptions.' },
  ],
  unitsNote: 'Natural selection, cellular energetics and gene expression are the biggest units, but every unit appears and the free-response section can pull from any of them. Lab skills (variables, controls, hypotheses, justifying claims with data) count in every unit.',
  frq: {
    intro: '90 minutes for 2 long and 4 short questions. The question types are predictable, so you can practice each one on purpose. Long questions are worth more points than short ones.',
    types: [
      { label: 'Q1 · long', title: 'Interpreting and evaluating experimental results', text: 'Describe a biological concept, identify parts of an experiment, analyze the data and predict results.', tip: 'Name the independent variable, dependent variable and control explicitly.' },
      { label: 'Q2 · long', title: 'Experimental results with graphing', text: 'The same skills as Q1, plus you construct a graph from data, with error bars where asked.', tip: 'Graph checklist: title, labeled axes with units, correct graph type, scale, key.' },
      { label: 'Q3 · short', title: 'Scientific investigation', text: 'Describe or design parts of an experiment: hypotheses, variables, controls and justification.', tip: 'A null hypothesis predicts "no difference" or "no effect".' },
      { label: 'Q4 · short', title: 'Conceptual analysis', text: 'Explain a biological concept and predict the effect of a change to a system.', tip: 'Use cause → effect chains: "If X decreases, then Y…, because…".' },
      { label: 'Q5 · short', title: 'Analysis of a model or visual', text: 'Interpret a diagram or model, explain its limitations, and use it to predict.', tip: 'Point to features in the model when you justify.' },
      { label: 'Q6 · short', title: 'Analysis of data', text: 'Read a graph or table, describe trends, and support a claim with specific numbers.', tip: 'Quote values with units: "rose from 2.1 to 6.4 mg/L".' },
    ],
    timePlan: 'About 25 minutes for each long question and 10 for each short one.',
  },
  habits: [
    'Answer every lettered part, in order, with a label.',
    'Show the equation, the substitution and the units.',
    'Justify with a cause → effect sentence, not a word.',
    "Use the reference sheet; you don't need to memorize it.",
    'Blank part? Write the relationship you would use. It can earn credit.',
  ],
  traps: [
    { title: 'Individuals evolving', text: "Populations evolve; individuals don't. Selection acts on existing variation." },
    { title: '"Needs" in evolution', text: "Organisms don't mutate because they need to. Mutations are random; selection is not." },
    { title: 'Mixing up mitosis and meiosis', text: 'Meiosis makes 4 genetically different haploid cells; crossing over and independent assortment create variation.' },
    { title: 'Water potential signs', text: 'Water moves from higher (less negative) to lower (more negative) water potential. Solute potential is always ≤ 0.' },
    { title: 'Enzymes "used up"', text: 'Enzymes are not consumed. Denaturation changes shape and the active site, which stops function.' },
    { title: 'Graph errors', text: 'Missing axis labels, units, a title, or using a line graph for categories all cost points.' },
    { title: 'Vague justifications', text: '"It affects the cell" scores nothing. Name the molecule, the step and the result.' },
    { title: 'Chi-square misread', text: 'If χ² is less than the critical value, you fail to reject the null hypothesis. Use df = categories − 1.' },
    { title: 'Hardy-Weinberg mix-up', text: 'q² is the recessive phenotype frequency. Take the square root to get q, then p = 1 − q.' },
    { title: 'Ignoring the control', text: 'Compare results to the control group before drawing any conclusion.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: chemistry and cells', text: 'Macromolecules, organelles, membranes and water potential. Learn to read every graph type.' },
    { when: 'Nov – Dec', focus: 'Units 3–4: energy and signals', text: 'Enzymes, photosynthesis, respiration, signaling and the cell cycle. Practice "predict the effect of blocking X".' },
    { when: 'Jan – Feb', focus: 'Units 5–6: genetics', text: 'Heredity, chi-square, gene expression and biotechnology. One free-response question per week.' },
    { when: 'Mar – Apr', focus: 'Units 7–8: evolution and ecology', text: 'Natural selection, Hardy-Weinberg, phylogenies and ecology. Begin timed full sections.' },
    { when: 'Early May', focus: 'Free-response drills', text: 'Two long and four short questions under timing. Review the traps list and the formula sheet.' },
  ],
  scores: { threePlus: '70–71%', fives: '15–19%' },
  practice: [
    {
      topic: 'Unit 3 · Enzymes',
      question: "An inhibitor reduces an enzyme's reaction rate, but the maximum rate (Vmax) is reached again at very high substrate concentration. What best explains this?",
      choices: [
        'The inhibitor competes with the substrate for the active site',
        'The inhibitor binds an allosteric site and permanently changes the active site',
        'The inhibitor denatures the enzyme',
        'The inhibitor is a cofactor the enzyme needs',
      ],
      answer: 'A',
      why: 'Competitive inhibitors compete for the active site, so enough substrate outcompetes them and Vmax is unchanged. Noncompetitive inhibition lowers Vmax.',
    },
    {
      topic: 'Unit 7 · Hardy-Weinberg',
      question: 'In a population of 500 at Hardy-Weinberg equilibrium, 80 individuals show a recessive phenotype. How many individuals are expected to be heterozygous?',
      choices: ['120', '160', '240', '320'],
      answer: 'C · 240',
      why: 'q² = 80/500 = 0.16, so q = 0.4 and p = 0.6. 2pq = 0.48, and 0.48 × 500 = 240.',
    },
    {
      topic: 'Unit 4 · Cell cycle',
      question: 'A cell has a nonfunctional p53 protein. Which outcome is most likely after its DNA is damaged?',
      choices: [
        'The cell stops at the G1 checkpoint and repairs the DNA',
        'The cell undergoes apoptosis immediately',
        'The cell stops making cyclins',
        'The cell continues dividing with damaged DNA',
      ],
      answer: 'D',
      why: 'p53 normally halts the cycle (or triggers apoptosis) after DNA damage. Without it, damaged cells keep dividing, which can lead to cancer.',
    },
  ],
  faq: [
    {
      q: 'Can I use a calculator on the AP Biology exam?',
      a: 'Yes. A four-function, scientific or graphing calculator is allowed on both sections, and an equations and formulas sheet is provided, including chi-square, Hardy-Weinberg and water potential.',
    },
    {
      q: 'What is the biggest unit on the AP Biology exam?',
      a: 'Unit 7, Natural Selection, at 13–20% of the multiple-choice section. Cellular Energetics (Unit 3) and Gene Expression & Regulation (Unit 6) follow at 12–16% each.',
    },
  ],
};
