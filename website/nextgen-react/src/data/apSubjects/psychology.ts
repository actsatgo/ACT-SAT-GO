import type { ApSubject } from './types';

export const PSYCHOLOGY: ApSubject = {
  slug: 'psychology',
  guideSlug: 'ap-psychology-exam-guide-act-sat-go',
  name: 'AP Psychology',
  metaTitle: 'AP Psychology Exam Guide 2027: Format, Units, AAQ & EBQ | ACT SAT GO',
  description:
    'The AP Psychology exam explained: 75 multiple-choice questions and the two free-response questions (AAQ and EBQ), all 5 units, research methods, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Psychology exam is 2 hours 40 minutes and fully digital: 75 multiple-choice questions in 90 minutes (about two-thirds of the score) and 2 free-response questions in 70 minutes (about one-third), the Article Analysis Question and the Evidence-Based Question. The 5 units carry equal weight, and research methods are tested inside every one. Most questions reward applying concepts to scenarios, not reciting definitions. About 71–74% of students score 3 or higher.',
  examDate: 'Friday, May 14, 2027 (afternoon session)',
  length: '2 hours 40 minutes',
  glance: [
    { value: '2 hr 40', label: '90 min multiple choice + 70 min free response' },
    { value: '75 + 2', label: 'multiple-choice + free-response questions' },
    { value: '5 units', label: 'equal weight, research methods in every one' },
    { value: '71–74%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: 'about 67%', timing: '1 hr 30 min · 75 questions', what: 'Apply concepts and theories to scenarios, evaluate research methods and study designs, and interpret data from tables and graphs.' },
    { section: 'II · Free response', weight: 'about 33%', timing: '1 hr 10 min · 2 questions', what: 'Article Analysis Question (AAQ): analyze a summary of a research study. Evidence-Based Question (EBQ): build an argument using three provided sources.' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook app. Responses are submitted automatically at the end, so practice typing timed answers before May." },
    { title: 'Research methods run through everything', text: 'Expect questions on variables, sampling, operational definitions, statistics and ethics in every unit, not just a single research chapter.' },
  ],
  mcq: {
    intro: '75 questions in 90 minutes gives you 1 minute 12 seconds per question. Most questions are short scenarios asking which concept applies. Wrong answers lose no points.',
    tips: [
      'Find the key detail in the scenario that points to one concept, then match it.',
      'Separate look-alike terms: negative reinforcement vs punishment; proactive vs retroactive interference.',
      'Identify the research design: experiment (random assignment) or correlation (no manipulation).',
      'Read graphs for the variables before reading the question.',
      "Eliminate distractors that are real terms but don't fit the scenario.",
      'Move on at 90 seconds and return to flagged questions.',
    ],
  },
  units: [
    { name: 'Biological Bases of Behavior', weight: '15–25%', about: 'The brain, nervous system, sleep and senses.', skills: 'Explain neurons and neurotransmitters; brain regions and plasticity; the endocrine system; sleep stages and disorders; sensation and sensory thresholds.' },
    { name: 'Cognition', weight: '15–25%', about: 'Perception, memory, thinking and intelligence.', skills: 'Explain perception and attention; memory encoding, storage and retrieval; forgetting; problem-solving, heuristics and biases; intelligence and testing.' },
    { name: 'Development & Learning', weight: '15–25%', about: 'How people grow and learn.', skills: 'Describe physical, cognitive and social development (Piaget, Erikson); attachment; classical and operant conditioning; observational learning.' },
    { name: 'Social Psychology & Personality', weight: '15–25%', about: 'How people affect each other, and who we are.', skills: 'Explain attribution, conformity, obedience and group behavior; prejudice; personality perspectives and assessment; motivation and emotion.' },
    { name: 'Mental & Physical Health', weight: '15–25%', about: 'Stress, disorders and treatment.', skills: 'Explain stress and coping; positive psychology; DSM categories of disorders; biological and psychological treatments and their evidence.' },
  ],
  unitsNote: 'The five units carry the same range, so balance your review. Research methods are tested in every unit: variables and operational definitions; random sampling vs random assignment; statistics (mean, median, standard deviation, correlation, significance); and ethics (informed consent, deception, debriefing, confidentiality).',
  frq: {
    title: 'The 2 free-response questions',
    intro: '70 minutes for 2 questions worth 7 points each. Both are based on sources, so they test how you use evidence, not just definitions.',
    types: [
      { label: 'AAQ · 7 pts', title: 'Article Analysis Question', text: 'Read a summary of a research study. Identify the research method, variables, operational definitions, statistics and ethics, then explain whether the findings can be generalized.', tip: 'Use the exact numbers and terms from the article in your answers.' },
      { label: 'EBQ · 7 pts', title: 'Evidence-Based Question', text: 'Read three sources. Make a claim in response to a prompt, support it with evidence from at least two sources, and explain how each piece of evidence connects to a psychological concept.', tip: "Cite sources by number, and explain the concept; don't just quote." },
    ],
    timePlan: 'About 25 minutes for the AAQ (5 reading, 20 writing) and 45 minutes for the EBQ (10 reading the sources, 35 writing).',
  },
  habits: [
    'Answer each part separately and in order.',
    "Use the study's exact numbers and terms.",
    'Name the psychological concept in every explanation.',
    'In the EBQ, cite at least two different sources.',
    'Stuck? Define the concept accurately and apply it.',
  ],
  traps: [
    { title: 'Negative reinforcement vs punishment', text: 'Negative reinforcement removes something unpleasant to increase a behavior; punishment decreases a behavior.' },
    { title: 'Random sampling vs random assignment', text: 'Random sampling helps generalize to a population; random assignment allows cause-and-effect conclusions.' },
    { title: 'Correlation as causation', text: 'A correlation shows a relationship, not that one variable causes the other.' },
    { title: 'Negative correlation as "weak"', text: 'r = −0.85 is a strong correlation. The sign shows direction, not strength.' },
    { title: 'Proactive vs retroactive interference', text: 'Proactive: old information disrupts new. Retroactive: new information disrupts old.' },
    { title: 'Sensation vs perception', text: 'Sensation detects stimuli; perception organizes and interprets them.' },
    { title: 'Classical vs operant conditioning', text: 'Classical pairs stimuli (involuntary responses); operant uses consequences (voluntary behavior).' },
    { title: 'Validity vs reliability', text: 'Reliability is consistency; validity is measuring what a test claims to measure.' },
    { title: 'Definitions instead of application', text: 'Free-response answers need the concept applied to the specific scenario.' },
    { title: 'Ignoring the sources in the EBQ', text: 'Evidence must come from the provided sources, cited and explained.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 1 + research methods', text: 'Neurons, the brain, sleep and senses. Learn the research-methods vocabulary early.' },
    { when: 'Nov – Dec', focus: 'Unit 2: cognition', text: 'Perception, memory, thinking and intelligence. Start AAQ practice with short study summaries.' },
    { when: 'Jan – Feb', focus: 'Unit 3: development and learning', text: 'Development and learning theories. Practice applying conditioning terms to scenarios.' },
    { when: 'Mar – Apr', focus: 'Units 4–5: people and health', text: 'Social psychology, personality, disorders and treatment. Write timed EBQs.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'Full 75-question sets and both free-response types under timing.' },
  ],
  scores: { threePlus: '71–74%', fives: '14–15%' },
  practice: [
    {
      topic: 'Research methods',
      question: 'A study finds r = −0.72 between hours of social media use and sleep quality. Which conclusion is justified?',
      choices: [
        'Social media use causes poor sleep',
        'There is a weak relationship because r is negative',
        'There is a strong negative relationship between the two variables',
        'Poor sleep causes people to use social media',
      ],
      answer: 'C',
      why: "r = −0.72 shows a strong negative correlation. Correlations don't establish causation in either direction.",
    },
    {
      topic: 'Unit 3 · Conditioning',
      question: 'A driver buckles her seat belt to stop an annoying beeping sound. Buckling up is maintained by:',
      choices: ['positive reinforcement', 'positive punishment', 'extinction', 'negative reinforcement'],
      answer: 'D',
      why: 'Removing an unpleasant stimulus (the beeping) increases the behavior: negative reinforcement.',
    },
    {
      topic: 'Unit 4 · Social psychology',
      question: 'Seeing a classmate trip, Sam thinks "he\'s so clumsy," but when Sam trips he blames the wet floor. This shows:',
      choices: ['the actor-observer bias', 'the mere-exposure effect', 'groupthink', 'social facilitation'],
      answer: 'A',
      why: "The actor-observer bias attributes others' behavior to disposition and our own to the situation.",
    },
  ],
  faq: [
    {
      q: 'What are the AAQ and EBQ on the AP Psychology exam?',
      a: 'They are the two free-response questions, each worth 7 points. The Article Analysis Question (AAQ) asks you to analyze a summary of a research study: method, variables, statistics, ethics and generalizability. The Evidence-Based Question (EBQ) asks you to argue a claim using evidence from at least two of three provided sources, linking each to a psychological concept.',
    },
    {
      q: 'Is the AP Psychology exam typed?',
      a: "Yes. AP Psychology is fully digital, and every answer, including both free-response questions, is completed in College Board's Bluebook app.",
    },
  ],
};
