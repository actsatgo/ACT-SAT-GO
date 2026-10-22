import type { ApSubject } from './types';

export const US_GOVERNMENT: ApSubject = {
  slug: 'us-government',
  guideSlug: 'ap-us-government-and-politics-exam-guide-act-sat-go',
  name: 'AP United States Government and Politics',
  metaTitle: 'AP US Government Exam Guide 2027: Format, Units, Cases & FRQs | ACT SAT GO',
  description:
    'The AP US Government and Politics exam explained: 55 multiple-choice and 4 free-response questions, all 5 units, the 14 required Supreme Court cases and 9 foundational documents, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP US Government and Politics exam is 3 hours: 55 multiple-choice questions in 80 minutes and 4 free-response questions in 100 minutes, each worth half your score. The course has 9 required foundational documents and 14 required Supreme Court cases, and they appear throughout the exam. Questions rarely ask "what is X?": they ask how X applies to a new scenario. About 72–76% of students score 3 or higher.',
  examDate: 'Tuesday, May 4, 2027 (morning session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '80 min multiple choice + 100 min free response' },
    { value: '55 + 4', label: 'multiple-choice + free-response questions' },
    { value: '14 cases', label: 'plus 9 foundational documents' },
    { value: '72–76%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '50%', timing: '1 hr 20 min · 55 questions', what: 'Individual questions and sets on quantitative data, text excerpts, visuals and Supreme Court cases. Apply concepts to scenarios and compare documents.' },
    { section: 'II · Free response', weight: '50%', timing: '1 hr 40 min · 4 questions', what: 'Concept application, quantitative analysis, SCOTUS comparison and an argument essay. Each is worth 12.5% of the exam score.' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written responses, in College Board's Bluebook app. Practice typing timed answers before May." },
    { title: 'Know the documents and cases', text: 'The course has 9 required foundational documents (such as the Declaration of Independence, the Constitution and Federalist No. 10) and 14 required Supreme Court cases.' },
  ],
  mcq: {
    intro: '55 questions in 80 minutes gives you about 1 minute 27 seconds per question. Stimulus-based sets (graphs, excerpts, maps) take longer, so pace yourself. Wrong answers lose no points.',
    tips: [
      'Read graphs for the claim they support. Many questions ask what a chart shows, not what you think is true.',
      'Know each required case by its facts, the constitutional clause involved and the holding.',
      'Match the concept to the scenario: federalism, checks and balances, or separation of powers?',
      'Watch the exact wording: "formal" (in the Constitution) vs "informal" (developed through practice) powers.',
      'Eliminate extreme answers with words like "always", "never" and "only".',
      'Flag and move on after 2 minutes. Return once the quick points are banked.',
    ],
  },
  units: [
    { name: 'Foundations of American Democracy', weight: '15–22%', about: 'Where the Constitution came from and how power is divided.', skills: 'Explain popular sovereignty, limited government and natural rights; compare the Articles of Confederation and the Constitution; explain federalism, separation of powers and checks and balances; use Federalist 10 and 51 and Brutus 1.' },
    { name: 'Interactions Among Branches of Government', weight: '25–36%', about: 'How Congress, the president, the courts and the bureaucracy work.', skills: 'Explain congressional powers and procedures; formal and informal presidential powers; judicial review (Federalist 78, Marbury v. Madison); bureaucratic discretion and oversight.' },
    { name: 'Civil Liberties & Civil Rights', weight: '13–18%', about: 'Rights protected from government, and equal protection.', skills: 'Apply the Bill of Rights and selective incorporation; free speech, religion and press cases; due process; equal protection; the civil rights movement and Letter from Birmingham Jail.' },
    { name: 'American Political Ideologies & Beliefs', weight: '10–15%', about: 'How people form political views.', skills: 'Explain political socialization; read and evaluate polls; compare liberal, conservative and libertarian ideas; link ideology to economic and social policy.' },
    { name: 'Political Participation', weight: '20–27%', about: 'Voting, parties, interest groups, elections and media.', skills: 'Explain voting rights and turnout; the roles of parties, interest groups and the media; campaign finance (Citizens United); the Electoral College and election rules.' },
  ],
  unitsNote: 'Unit 2 (Congress, the presidency, the courts and the bureaucracy) is about a third of the multiple-choice section. The 14 required cases: Marbury v. Madison, McCulloch v. Maryland, United States v. Lopez, Engel v. Vitale, Wisconsin v. Yoder, Tinker v. Des Moines, Schenck v. United States, New York Times v. United States, Gideon v. Wainwright, McDonald v. Chicago, Brown v. Board of Education, Citizens United v. FEC, Baker v. Carr and Shaw v. Reno.',
  frq: {
    title: 'The 4 free-response questions',
    intro: '100 minutes, 4 questions, each worth 12.5% of your score. The four question types are the same every year.',
    types: [
      { label: 'Q1 · Concept', title: 'Concept application', text: 'Read a scenario and explain how it connects to a political process, institution or behavior, then describe an effect or interaction.', tip: 'Name the concept, then link it to a detail in the scenario.' },
      { label: 'Q2 · Data', title: 'Quantitative analysis', text: 'Describe the data in a chart, identify a trend, draw a conclusion, and explain how it relates to a political principle.', tip: 'Quote specific numbers from the chart; vague trends score less.' },
      { label: 'Q3 · SCOTUS', title: 'SCOTUS comparison', text: "Compare a non-required case you're given with one of the 14 required cases: the facts, the clause, and how the holdings relate.", tip: 'Name the constitutional clause the two cases share.' },
      { label: 'Q4 · Argument', title: 'Argument essay', text: 'Take a position, support it with two pieces of evidence (one from a foundational document), and respond to an opposing view.', tip: "Use a document from the list in the prompt; it's required for full credit." },
    ],
    timePlan: "About 20 minutes each for Q1–Q3 and 40 minutes for the argument essay. In the essay, the rebuttal is a separate point: name an opposing view and explain why it's weaker.",
  },
  habits: [
    'Answer each lettered part separately and in order.',
    'Name the concept, then apply it to the scenario.',
    "Quote numbers from charts; don't describe vaguely.",
    'In SCOTUS questions, name the shared constitutional clause.',
    'Stuck? Define the concept accurately; it can still earn a point.',
  ],
  traps: [
    { title: 'Incorporation confusion', text: 'The Bill of Rights originally limited only the federal government. Selective incorporation through the 14th Amendment applies most of it to the states.' },
    { title: 'Formal vs informal powers', text: 'Formal powers are written in the Constitution (veto); informal ones developed in practice (executive orders, signing statements).' },
    { title: 'Liberties vs rights', text: 'Civil liberties protect individuals from government; civil rights protect against discrimination and ensure equal treatment.' },
    { title: 'Mixing up the case clause', text: 'Tinker is free speech; Engel is the establishment clause; Yoder is free exercise. Know which is which.' },
    { title: 'House vs Senate powers', text: 'The House starts revenue bills and impeaches; the Senate confirms appointments, ratifies treaties and tries impeachments.' },
    { title: 'Describing instead of explaining', text: '"Explain" needs a how or why. Describing what happened is not enough.' },
    { title: 'Ignoring the chart', text: 'In Q2, answers must use the data shown, not general knowledge.' },
    { title: 'Missing the rebuttal', text: 'In the argument essay, responding to an opposing view is a separate rubric point.' },
    { title: 'Interest groups vs parties', text: 'Parties try to win elections and control government; interest groups try to influence policy.' },
    { title: 'Federalism terms', text: 'Categorical grants come with strings; block grants give states flexibility; unfunded mandates require action without money.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 1: foundations', text: 'Founding documents, federalism and the Constitution. Make flashcards for the 9 foundational documents.' },
    { when: 'Nov – Jan', focus: 'Unit 2: the branches', text: 'Congress, the presidency, the courts and the bureaucracy. Practice concept application questions.' },
    { when: 'Feb – Mar', focus: 'Units 3–4: rights and beliefs', text: 'Civil liberties, civil rights, ideology and polling. Practice SCOTUS comparisons with required cases.' },
    { when: 'April', focus: 'Unit 5 and timed practice', text: 'Elections, parties, interest groups and media. Write timed argument essays.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'All four free-response types under timing. Review all 14 cases and 9 documents.' },
  ],
  scores: { threePlus: '72–76%', fives: '23–24%' },
  practice: [
    {
      topic: 'Unit 1 · Federalism',
      question: 'In McCulloch v. Maryland (1819), the Supreme Court relied mainly on which constitutional provision to uphold the national bank?',
      choices: ['The necessary and proper clause', 'The commerce clause', 'The Tenth Amendment', 'The supremacy clause alone'],
      answer: 'A',
      why: 'Chief Justice Marshall held that the necessary and proper clause allows Congress to use implied powers, such as creating a bank, to carry out its enumerated powers.',
    },
    {
      topic: 'Unit 2 · Presidency',
      question: 'Which is an informal power of the president?',
      choices: ['Vetoing legislation', 'Issuing executive orders', 'Serving as commander in chief', 'Granting pardons'],
      answer: 'B',
      why: 'Executive orders are not listed in the Constitution; they developed in practice. The other powers are formal powers in Article II.',
    },
    {
      topic: 'Unit 3 · Speech',
      question: 'Students wear black armbands at school to protest a war. Under Tinker v. Des Moines, the school can ban this only if:',
      choices: ['the speech would cause substantial disruption of school activities', 'the protest is unpopular', 'the students are under 18', 'the war has been declared by Congress'],
      answer: 'A',
      why: 'Tinker protects student symbolic speech unless it substantially disrupts school activities.',
    },
  ],
  faq: [
    {
      q: 'Which Supreme Court cases do I need for AP Gov?',
      a: 'The 14 required cases: Marbury v. Madison, McCulloch v. Maryland, United States v. Lopez, Engel v. Vitale, Wisconsin v. Yoder, Tinker v. Des Moines, Schenck v. United States, New York Times v. United States, Gideon v. Wainwright, McDonald v. Chicago, Brown v. Board of Education, Citizens United v. FEC, Baker v. Carr and Shaw v. Reno. Know each one\'s facts, clause and holding.',
    },
    {
      q: 'What is the SCOTUS comparison question?',
      a: "Free-response Q3 gives you a case that is not on the required list and asks you to compare it with one of the 14 required cases: their facts, the constitutional clause they share, and how the holdings relate.",
    },
  ],
};
