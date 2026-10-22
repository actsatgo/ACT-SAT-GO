import type { ApSubject } from './types';

export const STATISTICS: ApSubject = {
  slug: 'statistics',
  guideSlug: 'ap-statistics-exam-guide-act-sat-go',
  name: 'AP Statistics',
  metaTitle: 'AP Statistics Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Statistics exam explained: 42 multiple-choice and 4 free-response questions in 3 hours, all 5 units with weightings, the inference playbook, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Statistics exam is 3 hours and fully digital: 42 multiple-choice questions in 90 minutes and 4 free-response questions in 90 minutes, each worth half your score. A graphing calculator is allowed throughout, Bluebook has a built-in Desmos calculator, and a formula sheet and tables are provided. Free-response answers are scored on communication: context, conditions and clear conclusions. About 60–62% of students score 3 or higher.',
  examDate: 'Tuesday, May 11, 2027 (afternoon session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '90 min multiple choice + 90 min free response' },
    { value: '42 + 4', label: 'multiple-choice + free-response questions' },
    { value: '5 units', label: 'data, probability, inference, regression' },
    { value: '60–62%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '50%', timing: '1 hr 30 min · 42 questions', what: 'Questions across all 5 units, testing the 4 statistical practices. Many use data displays, study descriptions or computer output. Calculator permitted.' },
    { section: 'II · Free response', weight: '50%', timing: '1 hr 30 min · 4 questions', what: 'Q1 formulating questions and collecting data; Q2 analyzing data and interpreting results; Q3 inference; Q4 a multi-content question that combines ideas. Calculator permitted.' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook app, which has a built-in Desmos graphing calculator. Practice typing timed answers before May." },
    { title: 'Formulas and tables are provided', text: 'A formula sheet and statistical tables (normal, t, chi-square) are available. Knowing when to use each formula matters more than memorizing it.' },
  ],
  mcq: {
    intro: '42 questions in 90 minutes gives you a little over 2 minutes per question. Many questions are about interpreting studies and output, not heavy calculation. Wrong answers lose no points.',
    tips: [
      'Identify the procedure first: one or two samples? Proportions or means? Test or interval?',
      'Watch the wording of interpretations. "95% confident" describes the method, not a 95% chance for this interval.',
      'Sketch the normal curve and shade before computing any probability.',
      'Read computer output carefully: slope, intercept, s, r and r², and what each means in context.',
      'Eliminate absolute words like "proves" and "always" in study-design questions.',
      'Flag and move on after 3 minutes. Return once the quick points are banked.',
    ],
  },
  units: [
    { name: 'Exploring One-Variable Data & Collecting Data', weight: '20–30%', about: 'Describing distributions and designing good studies.', skills: 'Describe shape, center, spread and unusual features in context; use z-scores and the normal model; identify sampling methods and bias; design experiments with random assignment, control and blocking.' },
    { name: 'Probability, Random Variables & Distributions', weight: '15–25%', about: 'Chance, simulation and the distributions that model it.', skills: 'Use probability rules and two-way tables; test independence; run simulations; find the mean and SD of discrete random variables; use binomial models; describe sampling distributions.' },
    { name: 'Inference for Categorical Data: Proportions', weight: '15–25%', about: 'Intervals and tests for proportions, plus chi-square.', skills: 'Check conditions; build and interpret confidence intervals; carry out significance tests for one and two proportions; interpret p-values, Type I and II errors and power.' },
    { name: 'Inference for Quantitative Data: Means', weight: '10–20%', about: 'Intervals and tests for means using t-procedures.', skills: 'Choose between one-sample, paired and two-sample t-procedures; check conditions; build intervals and run tests; interpret results in context.' },
    { name: 'Regression Analysis', weight: '10–20%', about: 'Relationships between two quantitative variables.', skills: 'Describe scatterplots; interpret slope, intercept, r and r²; use residuals and residual plots; identify influential points; make predictions and avoid extrapolation.' },
  ],
  unitsNote: 'Unit 1, describing data and designing studies, is the biggest unit and underpins everything else; inference (Units 3–4) together is a similar share. Every question tests one of the four statistical practices: formulate questions, collect data, analyze data and interpret results.',
  frq: {
    title: 'The 4 free-response questions',
    intro: '90 minutes, 4 questions, with credit for each part, so complete, clear communication matters.',
    types: [
      { label: 'Q1', title: 'Questions and collecting data', text: 'Pose an investigative question, then plan a sample or experiment and explain how it avoids bias.', tip: 'Name the treatments, random assignment and response variable explicitly.' },
      { label: 'Q2', title: 'Analyzing and interpreting', text: 'Describe distributions or relationships, compute probabilities or statistics, and interpret them in context.', tip: 'Compare center, spread, shape and outliers using comparative words.' },
      { label: 'Q3', title: 'Inference', text: 'Carry out a test or interval: state hypotheses and parameter, name the procedure, check conditions, calculate, and conclude in context.', tip: 'Link the p-value to α and to the claim in one sentence.' },
      { label: 'Q4', title: 'Multi-content', text: 'Pulls together several units in an unfamiliar setting. Rewards careful reasoning more than recall.', tip: 'Read the whole question before starting; later parts often hint at earlier ones.' },
    ],
    timePlan: 'About 20 minutes for Q1, 22 for Q2 and 24 each for Q3 and Q4. Every answer needs context: "the mean is 12" scores less than "the mean wait time is 12 minutes".',
  },
  habits: [
    'Define every parameter and variable in context.',
    'Check conditions with numbers, not just names.',
    'Show formulas, not only calculator results.',
    'Never say a test "proves" or "accepts" H₀.',
    'Stuck? Name the procedure; that alone can earn credit.',
  ],
  traps: [
    { title: 'No context', text: 'Every description and conclusion must mention the variable and the population in the problem.' },
    { title: 'Wrong confidence interval interpretation', text: '"We are 95% confident the interval captures the true proportion," not "95% of students…" or "95% chance".' },
    { title: '"Accepting" the null', text: 'You fail to reject H₀. A large p-value is not evidence that H₀ is true.' },
    { title: 'Causation from observation', text: 'Only randomized experiments support cause-and-effect conclusions.' },
    { title: 'Conditions without numbers', text: '"Large counts" needs np̂ ≥ 10 and n(1 − p̂) ≥ 10 shown with values.' },
    { title: 'Paired vs two-sample', text: 'Before-and-after on the same subjects is paired. Use the differences.' },
    { title: 'Practical significance', text: 'A tiny p-value means a result is unlikely to be chance alone, not that the effect is large or important.' },
    { title: 'Residual sign', text: 'Residual = actual − predicted. A negative residual means the model overestimated.' },
    { title: 'Bias vs variability', text: 'A bigger sample reduces variability, not bias from a flawed sampling method.' },
    { title: 'Calculator-speak', text: '"normalcdf(…)" alone may not earn credit. Name the distribution, parameters and boundary.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 1: describing data and study design', text: 'Distributions, the normal model, sampling and experiments. Write one "describe and compare" paragraph each week.' },
    { when: 'Nov – Dec', focus: 'Unit 2: probability and random variables', text: 'Probability rules, simulation, random variables, binomial models and sampling distributions.' },
    { when: 'Jan – Mar', focus: 'Units 3–4: inference', text: 'Intervals and tests, Type I and II errors, power and chi-square. One full inference question every week.' },
    { when: 'April', focus: 'Unit 5 + timed sections', text: 'Regression and residual analysis, then full timed multiple-choice and free-response sets.' },
    { when: 'Early May', focus: 'Communication polish', text: 'Rewrite weak answers using rubric language. Review the traps list.' },
  ],
  scores: { threePlus: '60–62%', fives: 'about 17%' },
  practice: [
    {
      topic: 'Unit 3 · Confidence intervals',
      question: 'A 95% confidence interval for a population proportion is (0.42, 0.50). Which statement is correct?',
      choices: [
        'If we repeated the sampling many times, about 95% of intervals made this way would capture p',
        'There is a 95% probability that p is between 0.42 and 0.50',
        '95% of sample proportions fall between 0.42 and 0.50',
        'p is definitely between 0.42 and 0.50',
      ],
      answer: 'A',
      why: '"95% confident" describes the method: about 95% of intervals built this way capture the true proportion. Any single interval either contains p or it does not.',
    },
    {
      topic: 'Unit 5 · Residuals',
      question: 'The least-squares line is ŷ = 12 + 3.5x. For x = 8, the observed value is 38. What is the residual, and what does it mean?',
      choices: ['−2; the line overestimates', '2; the line underestimates', '−2; the line underestimates', '40; the predicted value'],
      answer: 'A',
      why: 'The predicted value is 12 + 3.5(8) = 40. Residual = actual − predicted = 38 − 40 = −2, so the line overestimates.',
    },
    {
      topic: 'Unit 4 · Choosing a procedure',
      question: 'Each of 15 students takes a pretest and a posttest. Which procedure estimates the mean improvement?',
      choices: [
        'Two-sample t-interval for μ₁ − μ₂',
        'Two-proportion z-interval',
        'Chi-square test for independence',
        'Paired t-interval for the mean difference',
      ],
      answer: 'D',
      why: 'The same students are measured twice, so the data are paired. Work with each student\'s difference and use a paired t-interval.',
    },
  ],
  faq: [
    {
      q: 'Can I use a calculator on the AP Statistics exam?',
      a: 'Yes. A graphing calculator is allowed on both sections, Bluebook includes a built-in Desmos graphing calculator, and a formula sheet with normal, t and chi-square tables is provided.',
    },
    {
      q: 'Why is the AP Statistics pass rate lower than other math exams?',
      a: 'Free-response answers are scored on communication as much as calculation. Many points are lost for missing context, conditions checked without numbers, or wrong interpretations of confidence intervals and p-values.',
    },
  ],
};
