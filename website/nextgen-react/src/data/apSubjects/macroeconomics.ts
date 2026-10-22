import type { ApSubject } from './types';
import { ECON_FORMAT_NOTES, ECON_FRQ_INTRO, ECON_GRAPH_RULES, ECON_HABITS, ECON_MCQ, ECON_STRUCTURE, ECON_TIME_PLAN } from './economics';

export const MACROECONOMICS: ApSubject = {
  slug: 'macroeconomics',
  guideSlug: 'ap-macroeconomics-exam-guide-act-sat-go',
  name: 'AP Macroeconomics',
  metaTitle: 'AP Macroeconomics Exam Guide 2027: Format, Units, Graphs & FRQs | ACT SAT GO',
  description:
    'The AP Macroeconomics exam explained: 60 multiple-choice and 3 free-response questions, all 6 units, the graphs you must draw from memory, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Macroeconomics exam is 2 hours 10 minutes: 60 multiple-choice questions in 70 minutes (about two-thirds of your score) and 3 free-response questions in 1 hour (about one-third). The free-response section is short but graph-heavy, so drawing correctly labeled graphs is essential. Units 3–5 (AD-AS, money and banking, and policy) make up most of the exam. About 66–67% of students score 3 or higher.',
  examDate: 'Friday, May 7, 2027 (afternoon session)',
  length: '2 hours 10 minutes',
  glance: [
    { value: '2 hr 10', label: '70 min multiple choice + 1 hr free response' },
    { value: '60 + 3', label: 'multiple-choice + free-response questions' },
    { value: '6 units', label: 'basic concepts to the open economy' },
    { value: '66–67%', label: 'scored 3 or higher in recent years' },
  ],
  structure: ECON_STRUCTURE,
  formatNotes: ECON_FORMAT_NOTES,
  mcq: ECON_MCQ,
  units: [
    { name: 'Basic Economic Concepts', weight: '5–10%', about: 'Scarcity and markets.', skills: 'Explain scarcity and opportunity cost; production possibilities curves; comparative advantage; supply, demand and market equilibrium.' },
    { name: 'Economic Indicators & the Business Cycle', weight: '12–17%', about: 'Measuring the economy.', skills: 'Calculate GDP, real vs nominal GDP and the GDP deflator; the unemployment rate and its types; CPI and inflation; describe the business cycle.' },
    { name: 'National Income & Price Determination', weight: '17–27%', about: 'Aggregate demand and supply.', skills: 'Use aggregate demand and supply; short-run and long-run equilibrium; spending and tax multipliers; recessionary and inflationary gaps; fiscal policy.' },
    { name: 'Financial Sector', weight: '18–23%', about: 'Money, banks and the central bank.', skills: 'Explain money and its functions; bank balance sheets and the money multiplier; the money market and loanable funds market; monetary policy tools.' },
    { name: 'Long-Run Consequences of Stabilization Policies', weight: '20–30%', about: 'What policy does over time.', skills: 'Combine fiscal and monetary policy; the Phillips curve; money growth and inflation; government deficits, debt and crowding out; economic growth.' },
    { name: 'Open Economy: International Trade & Finance', weight: '10–13%', about: 'Trade and currencies.', skills: 'Use balance of payments accounts; the foreign exchange market; how interest rates and policy affect exchange rates and net exports.' },
  ],
  unitsNote: 'Units 3–5 make up most of the exam, so master the AD-AS and money market graphs first. Graphs to draw from memory: PPC, AD-AS, the money market, loanable funds, the Phillips curve, foreign exchange, and supply and demand.',
  frq: {
    title: 'The 3 free-response questions',
    intro: ECON_FRQ_INTRO,
    types: [
      { label: 'Long · 50%', title: 'Long question', text: 'A multi-part scenario, usually about an economy in a recession or inflationary gap. Draw AD-AS, choose a policy, and trace its effects through the money market, loanable funds or foreign exchange.', tip: 'Draw one large, clearly labeled graph and reuse it for later parts.' },
      { label: 'Short · 25% each', title: 'Two short questions', text: 'Focused questions on one area, such as a bank balance sheet calculation, the Phillips curve or the foreign exchange market.', tip: 'Each part asks for one thing. Answer it directly, then explain.' },
      ...ECON_GRAPH_RULES,
    ],
    timePlan: ECON_TIME_PLAN,
  },
  habits: ECON_HABITS,
  traps: [
    { title: 'Fiscal vs monetary', text: 'Fiscal policy is government spending and taxes (Congress and the President). Monetary policy is the money supply and interest rates (the Fed).' },
    { title: 'Nominal vs real', text: 'Real values adjust for inflation. Real interest rate ≈ nominal rate − inflation.' },
    { title: 'Movement vs shift of AD', text: 'A change in the price level moves along AD. Changes in C, I, G or net exports shift it.' },
    { title: 'Money market vs loanable funds', text: 'The money market sets the nominal rate (money supply and demand). Loanable funds sets the real rate (saving and borrowing).' },
    { title: 'Money multiplier', text: 'Money multiplier = 1 ÷ reserve requirement. It applies to excess reserves, not total deposits.' },
    { title: 'Tax multiplier', text: 'The tax multiplier is −MPC/MPS, smaller in absolute value than the spending multiplier.' },
    { title: 'Long-run vs short-run Phillips curve', text: 'The long-run Phillips curve is vertical at the natural rate of unemployment.' },
    { title: 'Crowding out', text: 'Government borrowing raises the real interest rate in the loanable funds market, reducing private investment.' },
    { title: 'Appreciation effects', text: 'A stronger currency makes exports more expensive and imports cheaper, so net exports fall.' },
    { title: 'Unlabeled graphs', text: 'An unlabeled or mislabeled graph usually earns no points.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: foundations', text: 'Scarcity, PPCs, supply and demand, GDP, unemployment and inflation.' },
    { when: 'Nov – Dec', focus: 'Unit 3: AD-AS', text: 'Aggregate demand and supply, gaps, multipliers and fiscal policy. Draw AD-AS from memory daily.' },
    { when: 'Jan – Feb', focus: 'Unit 4: money', text: 'Banks, money creation, the money market and monetary policy. Start one free-response question per week.' },
    { when: 'Mar – Apr', focus: 'Units 5–6: policy and the open economy', text: 'The Phillips curve, deficits, crowding out and exchange rates. Begin full timed sections.' },
    { when: 'Early May', focus: 'Graph drills', text: 'Draw all seven graphs from memory and trace policy chains. Review the traps list.' },
  ],
  scores: { threePlus: '66–67%', fives: '19–20%' },
  practice: [
    {
      topic: 'Unit 3 · Multipliers',
      question: 'If the MPC is 0.8, what is the maximum change in real GDP from a $20 billion increase in taxes?',
      choices: ['An $80 billion decrease', 'A $100 billion decrease', 'A $20 billion decrease', 'A $16 billion decrease'],
      answer: 'A',
      why: 'Tax multiplier = −MPC/MPS = −0.8/0.2 = −4, and −4 × $20 billion = an $80 billion decrease. Choice B uses the spending multiplier.',
    },
    {
      topic: 'Unit 4 · Money creation',
      question: 'A bank receives a $1,000 cash deposit. The reserve requirement is 10%. What is the maximum increase in the money supply from new loans across the banking system?',
      choices: ['$900', '$1,000', '$9,000', '$10,000'],
      answer: 'C · $9,000',
      why: "Required reserves are $100, so excess reserves are $900. The money multiplier is 1/0.1 = 10, so $900 × 10 = $9,000 in new loans. (The $1,000 deposit itself doesn't change M1.)",
    },
    {
      topic: 'Unit 6 · Exchange rates',
      question: "If U.S. interest rates rise relative to other countries', what happens to the U.S. dollar and net exports?",
      choices: ['The dollar depreciates; net exports rise', 'The dollar appreciates; net exports rise', 'There is no effect on the dollar', 'The dollar appreciates; net exports fall'],
      answer: 'D',
      why: 'Higher interest rates attract foreign financial investment, increasing demand for dollars. The dollar appreciates, making exports dearer and imports cheaper.',
    },
  ],
  faq: [
    {
      q: 'Which graphs do I need for AP Macroeconomics?',
      a: 'Seven, drawn from memory with full labels: the production possibilities curve, AD-AS, the money market, loanable funds, the Phillips curve, the foreign exchange market, and supply and demand.',
    },
    {
      q: 'Should I take AP Macro or AP Micro?',
      a: 'They are separate exams with the same format. Macro studies the whole economy (GDP, inflation, policy); Micro studies markets, firms and consumers. Many students take both, often Micro first.',
    },
  ],
};
