import type { ApSubject } from './types';
import { ECON_FORMAT_NOTES, ECON_FRQ_INTRO, ECON_GRAPH_RULES, ECON_HABITS, ECON_MCQ, ECON_STRUCTURE, ECON_TIME_PLAN } from './economics';

export const MICROECONOMICS: ApSubject = {
  slug: 'microeconomics',
  guideSlug: 'ap-microeconomics-exam-guide-act-sat-go',
  name: 'AP Microeconomics',
  metaTitle: 'AP Microeconomics Exam Guide 2027: Format, Units, Graphs & FRQs | ACT SAT GO',
  description:
    'The AP Microeconomics exam explained: 60 multiple-choice and 3 free-response questions, all 6 units, the cost, monopoly and market graphs you must draw, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Microeconomics exam is 2 hours 10 minutes: 60 multiple-choice questions in 70 minutes (about two-thirds of your score) and 3 free-response questions in 1 hour (about one-third). The free-response section is short but graph-heavy, so drawing correctly labeled graphs is essential. Supply and demand, costs and perfect competition, and imperfect competition make up most of the exam. About 68% of students score 3 or higher.',
  examDate: 'Tuesday, May 4, 2027 (afternoon session)',
  length: '2 hours 10 minutes',
  glance: [
    { value: '2 hr 10', label: '70 min multiple choice + 1 hr free response' },
    { value: '60 + 3', label: 'multiple-choice + free-response questions' },
    { value: '6 units', label: 'basic concepts to market failure' },
    { value: '68%', label: 'scored 3 or higher in recent years' },
  ],
  structure: ECON_STRUCTURE,
  formatNotes: ECON_FORMAT_NOTES,
  mcq: ECON_MCQ,
  units: [
    { name: 'Basic Economic Concepts', weight: '12–15%', about: 'Scarcity, trade-offs and choices.', skills: 'Explain scarcity and opportunity cost; production possibilities curves; comparative advantage and terms of trade; marginal analysis and consumer choice.' },
    { name: 'Supply & Demand', weight: '20–25%', about: 'How markets set prices.', skills: 'Shift supply and demand; calculate elasticities; consumer and producer surplus; effects of taxes, subsidies, price ceilings and floors; international trade.' },
    { name: 'Production, Cost & the Perfect Competition Model', weight: '22–25%', about: 'How firms decide what to produce.', skills: 'Calculate marginal product and cost curves; short-run and long-run costs; profit maximization (MR = MC); short-run and long-run equilibrium in perfect competition.' },
    { name: 'Imperfect Competition', weight: '15–22%', about: 'Monopoly, oligopoly and market power.', skills: 'Analyze monopoly pricing and deadweight loss; price discrimination; monopolistic competition; oligopoly and game theory (payoff matrices, Nash equilibrium).' },
    { name: 'Factor Markets', weight: '10–13%', about: 'Labor and other inputs.', skills: 'Calculate marginal revenue product; hire where MRP = MRC; compare perfectly competitive labor markets with monopsony; the least-cost rule.' },
    { name: 'Market Failure & the Role of Government', weight: '8–13%', about: 'When markets get it wrong.', skills: 'Analyze positive and negative externalities; public goods; corrective taxes and subsidies; income inequality and the Lorenz curve.' },
  ],
  unitsNote: 'Units 2–4 make up most of the exam, so master the cost curves and the monopoly graph. Graphs to draw from memory: supply and demand, cost curves, side-by-side perfect competition, monopoly, monopolistic competition, the labor market and externalities.',
  frq: {
    title: 'The 3 free-response questions',
    intro: ECON_FRQ_INTRO,
    types: [
      { label: 'Long · 50%', title: 'Long question', text: "A multi-part scenario, usually about a firm in perfect competition or a monopoly. Draw the firm's graph, find profit-maximizing output, shade profit or loss, and analyze a change.", tip: 'Draw one large, clearly labeled graph and reuse it for later parts.' },
      { label: 'Short · 25% each', title: 'Two short questions', text: 'Focused questions on one area, such as a payoff matrix, an externality, elasticity or a labor market.', tip: 'Each part asks for one thing. Answer it directly, then explain.' },
      ...ECON_GRAPH_RULES,
    ],
    timePlan: ECON_TIME_PLAN,
  },
  habits: ECON_HABITS,
  traps: [
    { title: 'Price from MR', text: 'A monopoly sets quantity where MR = MC, then charges the price on the demand curve above that quantity.' },
    { title: 'Change in demand vs quantity demanded', text: 'A price change moves along the curve; income, tastes and related goods shift it.' },
    { title: 'Shut-down rule', text: 'In the short run, a firm shuts down only if price is below minimum AVC, not ATC.' },
    { title: 'Long-run perfect competition', text: 'Economic profit is zero in the long run: P = MC = minimum ATC.' },
    { title: 'Elasticity and revenue', text: 'If demand is elastic, lowering price raises total revenue; if inelastic, raising price raises revenue.' },
    { title: 'Tax incidence', text: 'The more inelastic side of the market bears more of a tax, regardless of who pays it legally.' },
    { title: 'Externality curves', text: 'Negative externality: MSC is above MPC, so the market overproduces. Positive: MSB is above MPB, so it underproduces.' },
    { title: 'Nash equilibrium', text: "Check each player's best response to the other's choice. A dominant strategy is best no matter what the other does." },
    { title: 'Monopsony wage', text: 'A monopsony hires where MRP = MRC but pays the lower wage from the labor supply curve.' },
    { title: 'Unlabeled graphs', text: 'An unlabeled or mislabeled graph usually earns no points.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–2: foundations', text: 'Opportunity cost, PPCs, supply and demand, elasticity and government intervention.' },
    { when: 'Nov – Dec', focus: 'Unit 3: costs', text: 'Production, cost curves and perfect competition. Draw side-by-side firm and market graphs daily.' },
    { when: 'Jan – Feb', focus: 'Unit 4: market power', text: 'Monopoly, monopolistic competition, oligopoly and game theory. Start one free-response question per week.' },
    { when: 'Mar – Apr', focus: 'Units 5–6: factors and market failure', text: 'Labor markets, externalities and public goods. Begin full timed sections.' },
    { when: 'Early May', focus: 'Graph drills', text: 'Draw all seven graphs from memory and label them fully. Review the traps list.' },
  ],
  scores: { threePlus: '68%', fives: '19–22%' },
  practice: [
    {
      topic: 'Unit 4 · Monopoly',
      question: 'A monopoly faces demand P = 100 − 2Q and constant MC = $20. What is its profit-maximizing price?',
      choices: ['$20', '$40', '$60', '$80'],
      answer: 'C · $60',
      why: 'MR = 100 − 4Q. Setting MR = MC gives Q = 20. Price comes from demand: 100 − 2(20) = $60. Choice A is MC (= MR), not price.',
    },
    {
      topic: 'Unit 2 · Elasticity',
      question: 'When the price of a good rises from $8 to $12, quantity demanded falls from 120 to 80. Using the midpoint method, demand is:',
      choices: ['perfectly inelastic', 'relatively inelastic', 'relatively elastic', 'unit elastic'],
      answer: 'D · unit elastic',
      why: 'Midpoint: %ΔQ = −40/100 = −40%; %ΔP = 4/10 = 40%. |E| = 1, so demand is unit elastic.',
    },
    {
      topic: 'Unit 3 · Short run',
      question: "A perfectly competitive firm's price is below its average total cost but above its average variable cost. In the short run it should:",
      choices: ['shut down immediately', 'raise its price', 'produce where ATC is at its minimum', 'continue producing where P = MC, while making an economic loss'],
      answer: 'D',
      why: 'If P is above AVC, producing covers all variable costs and part of fixed costs, so the firm loses less than by shutting down.',
    },
  ],
  faq: [
    {
      q: 'Which graphs do I need for AP Microeconomics?',
      a: 'Supply and demand (with taxes and price controls), cost curves, side-by-side perfect competition firm and market graphs, monopoly, monopolistic competition, the labor market (competitive and monopsony) and externalities. Label every axis and curve.',
    },
    {
      q: 'Is there math on the AP Microeconomics exam?',
      a: 'Simple math: elasticities, profit, surplus and deadweight-loss triangles, marginal revenue product and payoff matrices. A four-function calculator is allowed on both sections.',
    },
  ],
};
