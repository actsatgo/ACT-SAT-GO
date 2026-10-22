import type { ApSubject } from './types';

export const BUSINESS_PERSONAL_FINANCE: ApSubject = {
  slug: 'business-with-personal-finance',
  guideSlug: 'ap-business-with-personal-finance-exam-guide-act-sat-go',
  name: 'AP Business with Personal Finance',
  metaTitle: 'AP Business with Personal Finance Exam Guide 2027: Format & Units | ACT SAT GO',
  description:
    'The new AP Business with Personal Finance exam explained: 60 multiple-choice and 4 free-response questions, the Business Canvas Project, all 5 units with weights, key formulas, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'AP Business with Personal Finance is a new AP Career Kickstart course. The exam is 2 hours 40 minutes: 60 multiple-choice questions in 70 minutes (60%), one question on the Business Canvas Project you complete in class (25 minutes, 15%), and three scenario questions on personal finance, a business concept and a business decision (65 minutes, 25%). Finance, personal and business, is the biggest unit, and a calculator is allowed. National score history is still building.',
  examDate: 'Tuesday, May 4, 2027 (morning session)',
  length: '2 hours 40 minutes',
  glance: [
    { value: '2 hr 40', label: '70 min multiple choice + 90 min free response' },
    { value: '60 + 4', label: 'multiple-choice + free-response questions' },
    { value: '15%', label: 'on your own Business Canvas Project' },
    { value: '25–35%', label: 'saving, borrowing and business finance' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '60%', timing: '1 hr 10 min · 60 questions', what: 'Sets of 3–4 questions built on stimulus materials: business narratives, data visualizations, financial statements and job descriptions.' },
    { section: 'II-A · Business Canvas Project', weight: '15%', timing: '25 min · 1 question', what: 'Answer questions about your own Business Canvas Project: pitch your product, explain how hypothesis testing informed a decision, and explain an entrepreneurial challenge.' },
    { section: 'II-B · Free response', weight: '25%', timing: '1 hr 5 min · 3 questions', what: 'Q2 Personal Finance, Q3 Business Concept (analyze data for planning) and Q4 Business Decision (set criteria and recommend one of two options).' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook app. A calculator is permitted. Practice typing timed answers before May." },
    { title: 'Business and your own finances', text: 'The course connects how businesses start and grow with personal finance: budgeting, saving, borrowing, credit and investing for your own goals.' },
  ],
  mcq: {
    intro: '60 questions in 70 minutes gives you 1 minute 10 seconds per question. Every set starts with a stimulus, so read it carefully once. Business math is usually simple arithmetic; the hard part is choosing the right numbers. Wrong answers lose no points.',
    tips: [
      'Read the stimulus once, closely: note the business, its goal and the key numbers.',
      'Check units and time periods in financial data: monthly vs annual, thousands vs millions.',
      'Know key formulas: profit, break-even, gross margin, simple and compound interest, ROI.',
      'Match the concept to the scenario: target market, competitive advantage, opportunity cost.',
      'Eliminate extreme answers with "always" or "never".',
      'Never leave a blank. There is no penalty for guessing.',
    ],
  },
  units: [
    { name: 'Businesses, Competition & New Ideas', weight: '20–30%', about: 'Where businesses come from.', skills: 'Explain types of businesses and competition; identify customer problems; use the Business Model Canvas; test ideas with hypotheses.' },
    { name: 'Marketing', weight: '20–30%', about: 'Reaching the right customers.', skills: 'Define target markets; analyze the marketing mix (product, price, place, promotion); interpret customer data and research.' },
    { name: 'Personal Saving & Borrowing + Business Finance', weight: '25–35%', about: 'Money, for you and for a business.', skills: 'Compare savings and loans; calculate simple and compound interest; understand credit scores; read income statements and balance sheets; calculate profit and break-even.' },
    { name: 'Management & Strategy', weight: '15–20%', about: 'Running and steering a business.', skills: 'Explain leadership, hiring and organizational structure; analyze strategic plans; make decisions using criteria and data.' },
    { name: 'Personal Goals, Budgeting & Investing', weight: 'Project', about: 'Assessed through a course project.', skills: 'Build a budget, set financial goals and compare investment options through the Financial Advisor Project, advising a fictional household.' },
  ],
  unitsNote: 'Units 1–4 are tested in multiple choice; Unit 5 is assessed through a course project. Finance (Unit 3) is the biggest unit, so make sure you can read an income statement, compare loans and calculate interest quickly.',
  frq: {
    title: 'The 4 free-response questions',
    intro: '90 minutes in total: 25 minutes for your Business Canvas question (15% of your score), then 65 minutes for three scenario questions (25% together).',
    types: [
      { label: 'Q1', title: 'Business Canvas Project', text: 'Pitch the product idea from your own project, explain how you used hypothesis testing to make a decision, and explain how an entrepreneurial challenge could threaten its viability.', tip: 'Review your canvas and test results before exam day.' },
      { label: 'Q2', title: 'Personal Finance', text: 'Interpret financial data such as a budget, loan or savings plan, and explain how a person can reach a goal.', tip: 'Show calculations step by step with labeled numbers.' },
      { label: 'Q3', title: 'Business Concept', text: 'Analyze business data, such as sales trends or customer research, to inform a strategic plan.', tip: 'Quote specific numbers from the data in your answer.' },
      { label: 'Q4', title: 'Business Decision', text: 'Establish criteria and use them to recommend one of two alternatives, justifying your choice.', tip: 'State your criteria first, then compare both options against each one.' },
    ],
    timePlan: '25 minutes for Q1, then about 21–22 minutes each for Q2–Q4. In decision questions, criteria come first: a recommendation without criteria is just an opinion.',
  },
  habits: [
    'Answer each lettered part separately and in order.',
    'Show every calculation with labels and units.',
    'Quote specific numbers from the stimulus.',
    'Set criteria before making a recommendation.',
    'Stuck? Define the concept and apply it to the scenario.',
  ],
  traps: [
    { title: 'Revenue vs profit', text: 'Revenue is money coming in; profit is revenue minus costs.' },
    { title: 'Simple vs compound interest', text: 'Compound interest earns interest on interest; over time it grows much faster.' },
    { title: 'APR is per year', text: 'A 24% APR is about 2% per month. Convert before calculating monthly interest.' },
    { title: 'Fixed vs variable costs', text: "Fixed costs (rent) don't change with output; variable costs (ingredients) do." },
    { title: 'Break-even confusion', text: 'Break-even units = fixed costs ÷ (price − variable cost per unit).' },
    { title: 'Target market too broad', text: '"Everyone" is not a target market. Define who is most likely to buy.' },
    { title: 'Opinion without criteria', text: 'Business decisions need criteria and evidence, not personal preference.' },
    { title: 'Ignoring the stimulus', text: 'Answers must use the data and scenario provided.' },
    { title: 'Forgetting opportunity cost', text: 'Every choice gives up the next-best alternative. Name it.' },
    { title: 'Unprepared canvas question', text: 'Q1 is about your own project. Review your hypotheses and results.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 1 + start your canvas', text: 'Businesses, competition and the Business Model Canvas. Choose your product idea and first hypotheses.' },
    { when: 'Nov – Dec', focus: 'Unit 2: marketing', text: 'Target markets, the marketing mix and customer research. Test your canvas hypotheses with real people.' },
    { when: 'Jan – Feb', focus: 'Unit 3: finance', text: 'Saving, borrowing, credit and business financial statements, the biggest unit. Drill interest and break-even calculations.' },
    { when: 'Mar – Apr', focus: 'Unit 4 + Unit 5 project', text: 'Management and strategy; the budgeting and investing project. Practice decision questions.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'Full multiple-choice sets and all four free-response types. Review your Business Canvas results.' },
  ],
  practice: [
    {
      topic: 'Unit 3 · Compound interest',
      question: '$1,000 is deposited at 5% interest compounded annually. About how much is in the account after 3 years?',
      choices: ['$1,050.00', '$1,150.00', '$1,157.63', '$1,500.00'],
      answer: 'C · $1,157.63',
      why: '$1,000 × 1.05³ = $1,157.63. Choice B is simple interest ($50 × 3 years).',
    },
    {
      topic: 'Unit 3 · Credit',
      question: 'A credit card balance of $2,000 has a 24% APR. Approximately how much interest is charged in one month if no payment is made?',
      choices: ['$4', '$24', '$40', '$480'],
      answer: 'C · $40',
      why: 'Monthly rate ≈ 24% ÷ 12 = 2%, and 2% of $2,000 = $40.',
    },
    {
      topic: 'Unit 3 · Financial statements',
      question: 'A business has revenue of $80,000 and cost of goods sold of $50,000. What is its gross margin?',
      choices: ['30%', '37.5%', '62.5%', '160%'],
      answer: 'B · 37.5%',
      why: 'Gross margin = (revenue − COGS) ÷ revenue = 30,000 ÷ 80,000 = 37.5%.',
    },
  ],
  faq: [
    {
      q: 'What is the Business Canvas Project?',
      a: 'A project you complete in class: you develop a product idea with the Business Model Canvas and test your assumptions with real customers. On the exam, Q1 (25 minutes, 15% of your score) asks you to pitch the idea, explain how hypothesis testing informed a decision, and explain an entrepreneurial challenge.',
    },
    {
      q: 'What is AP Career Kickstart?',
      a: "College Board's set of career-focused AP courses, including AP Business with Personal Finance and AP Cybersecurity. They use the same 1–5 scoring as every AP exam and can earn college credit or placement.",
    },
  ],
};
