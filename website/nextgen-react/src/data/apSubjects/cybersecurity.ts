import type { ApSubject } from './types';

export const CYBERSECURITY: ApSubject = {
  slug: 'cybersecurity',
  guideSlug: 'ap-cybersecurity-exam-guide-act-sat-go',
  name: 'AP Cybersecurity',
  metaTitle: 'AP Cybersecurity Exam Guide 2027: Format, Units & Log Analysis | ACT SAT GO',
  description:
    'The new AP Cybersecurity exam explained: 60 multiple-choice questions and one in-depth analysis question, all 5 units from passwords to encryption, the CIA triad, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'AP Cybersecurity is a new AP Career Kickstart course. The exam is 2 hours 10 minutes: 60 multiple-choice questions in 80 minutes (70% of your score) and one in-depth analysis question in 50 minutes (30%), built on real-world security data such as policies, firewall rules, system logs and access permissions. The course teaches adversarial thinking: understanding how attackers work so you can defend systems. National score history is still building.',
  examDate: 'Wednesday, May 5, 2027 (morning session)',
  length: '2 hours 10 minutes',
  glance: [
    { value: '2 hr 10', label: '80 min multiple choice + 50 min free response' },
    { value: '60 + 1', label: 'multiple-choice + analysis question' },
    { value: '5 units', label: 'people, spaces, networks, devices, data' },
    { value: '70%', label: 'of your score from multiple choice' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '70%', timing: '1 hr 20 min · 60 questions', what: 'Individual questions and sets of 2–4 questions. Apply security concepts to real situations: identify vulnerabilities, recommend controls, and detect attacks.' },
    { section: 'II · Free response', weight: '30%', timing: '50 min · 1 question', what: 'An analysis prompt built on multiple sources such as security policies, firewall configurations, system logs and access permissions. Cite evidence and explain your reasoning.' },
  ],
  formatNotes: [
    { title: 'Everything happens in Bluebook', text: "You answer every question, including the written analysis, in College Board's Bluebook app. Practice typing timed answers before May." },
    { title: 'Think like an adversary, act ethically', text: 'The course teaches how attackers work so you can defend systems. Always practice only on systems you are authorized to use.' },
  ],
  mcq: {
    intro: '60 questions in 80 minutes gives you 1 minute 20 seconds per question. Many questions describe a scenario and ask for the best control or the most likely attack. Every unit is tested through the same skills: analyze risk, mitigate it, and detect attacks. Wrong answers lose no points.',
    tips: [
      'Identify the asset being protected first, then the threat and the vulnerability.',
      'Use the CIA triad: is confidentiality, integrity or availability at risk?',
      'Pick the most direct control: the one that addresses the specific vulnerability described.',
      'Read logs line by line: timestamps, IP addresses, users and repeated failures are clues.',
      'Think defense in depth: layered controls beat a single control.',
      'Never leave a blank. There is no penalty for guessing.',
    ],
  },
  units: [
    { name: 'Introduction to Security', weight: '', about: 'People, passwords and adversaries.', skills: 'Explain the CIA triad; strengthen authentication (strong passwords, multifactor); recognize social engineering such as phishing; describe types of cyber adversaries.' },
    { name: 'Securing Spaces', weight: '', about: 'Locks, cameras and access.', skills: 'Identify physical vulnerabilities and threats; recommend controls such as badges, locks and cameras; detect physical breaches with adversarial thinking.' },
    { name: 'Securing Networks', weight: '', about: 'Firewalls, segmentation and traffic.', skills: 'Explain network segmentation; configure and evaluate firewall rules; analyze network logs for indicators of compromise.' },
    { name: 'Securing Devices', weight: '', about: 'Computers, phones and IoT.', skills: 'Harden devices with updates, least privilege and anti-malware; analyze device logs for signs of compromise.' },
    { name: 'Securing Applications & Data', weight: '', about: 'Access control and encryption.', skills: 'Apply access controls and permissions; use encryption and hashing to protect data; detect attacks on applications and data such as injection.' },
  ],
  unitsNote: "Unit weights aren't published yet. College Board organizes the course around four skills applied across every unit: analyze risk, mitigate risk, detect attacks, and collaborate (including with AI). Because the course is new, released questions are still limited.",
  frq: {
    title: 'The analysis question',
    intro: '50 minutes for one in-depth question worth 30% of your score. You analyze several technical sources and explain a security situation with evidence.',
    types: [
      { label: 'Src', title: 'Read every source', text: 'You may see a security policy, firewall rules, system logs or a permissions table. Each one holds evidence.', tip: 'Annotate: mark anything that breaks the policy or looks unusual.' },
      { label: 'Risk', title: 'Identify the risk', text: 'Explain what could go wrong, which asset is at risk, and which part of the CIA triad is affected.', tip: 'Name the specific line or setting that creates the vulnerability.' },
      { label: 'Fix', title: 'Recommend controls', text: 'Recommend specific controls and explain how each reduces the risk you identified.', tip: '"Enable MFA for admin accounts" beats "improve security".' },
      { label: 'Det', title: 'Detect and explain', text: 'Use log evidence to explain whether an attack occurred, what kind, and how you know.', tip: 'Quote timestamps, IPs or usernames as evidence.' },
    ],
    timePlan: 'About 10 minutes to read the sources, 5 to plan, 30 to write and 5 to check. Every claim needs evidence from a source: a log line, a rule number or a permission setting.',
  },
  habits: [
    'Read every source before writing.',
    'Quote log lines, rules or settings as evidence.',
    'Use the CIA triad to describe impact.',
    'Recommend specific, named controls.',
    'Explain how each control reduces the risk.',
  ],
  traps: [
    { title: 'Vague controls', text: '"Improve security" earns nothing. Name the control and how it works.' },
    { title: 'Encryption vs hashing', text: 'Encryption is reversible with a key; hashing is one-way and used for passwords and integrity checks.' },
    { title: 'Authentication vs authorization', text: 'Authentication proves who you are; authorization decides what you may access.' },
    { title: 'Ignoring the policy', text: 'Compare logs and configurations against the stated policy to find violations.' },
    { title: 'Firewall rule order', text: 'Firewalls usually apply the first matching rule, so a broad "allow" above a "deny" can override it.' },
    { title: 'Single point of defense', text: "Defense in depth layers controls so one failure doesn't expose everything." },
    { title: 'Least privilege forgotten', text: 'Users should have only the access they need. Excess permissions are a common vulnerability.' },
    { title: 'Missing the human factor', text: 'Many attacks begin with social engineering. Training is a control too.' },
    { title: 'No evidence', text: 'In the free-response question, every claim needs evidence from a source.' },
    { title: 'Unauthorized practice', text: "Never test attacks on systems you don't own or have permission to use." },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Unit 1: foundations', text: 'CIA triad, authentication, social engineering and adversaries. Build a vocabulary list.' },
    { when: 'Nov – Dec', focus: 'Unit 2: physical security', text: 'Physical security assessments and controls. Practice asset-threat-vulnerability analysis.' },
    { when: 'Jan – Feb', focus: 'Unit 3: networks', text: 'Segmentation, firewall rules and network log analysis. Start free-response practice.' },
    { when: 'Mar – Apr', focus: 'Units 4–5: devices + data', text: 'Device hardening, access control and encryption. Take timed multiple-choice sets.' },
    { when: 'Early May', focus: 'Full timed sections', text: 'Full 60-question sets and the 50-minute analysis question under timing.' },
  ],
  practice: [
    {
      topic: 'Unit 1 · CIA triad',
      question: "A ransomware attack encrypts a hospital's patient records so staff can't open them. Which part of the CIA triad is most directly affected?",
      choices: ['Availability', 'Confidentiality', 'Integrity', 'Authentication'],
      answer: 'A · Availability',
      why: "Encrypting the data so staff can't access it attacks availability. (Data may also be stolen, but the main effect is lost access.)",
    },
    {
      topic: 'Unit 3 · Firewalls',
      question: 'A firewall applies the first rule that matches. Rule 1: ALLOW any source, any port. Rule 2: DENY any source, port 23 (Telnet). Rule 3: ALLOW any source, port 443 (HTTPS). What is the problem?',
      choices: ['HTTPS is blocked', 'Telnet is allowed only from trusted IPs', 'There is no problem', 'Rule 1 allows all traffic, so rule 2 never blocks Telnet'],
      answer: 'D',
      why: 'With first-match processing, rule 1 allows everything, so the Telnet deny rule is never reached.',
    },
    {
      topic: 'Unit 5 · Hashing',
      question: 'Why do secure systems store password hashes instead of passwords?',
      choices: ["If the database is stolen, attackers don't directly see the passwords", 'Hashes are easier to read', 'Hashes can be reversed with a key', 'Hashes make logins faster'],
      answer: 'A',
      why: "Hashing is one-way, so a stolen database doesn't directly reveal passwords (especially with salting).",
    },
  ],
  faq: [
    {
      q: 'Do I need coding experience for AP Cybersecurity?',
      a: 'No. The course focuses on security concepts and analysis: the CIA triad, authentication, physical and network security, device hardening, access control and encryption. Reading logs, firewall rules and permission tables matters more than writing code.',
    },
  ],
};
