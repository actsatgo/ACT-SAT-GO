import type { ApSubject } from './types';

export const COMPUTER_SCIENCE_PRINCIPLES: ApSubject = {
  slug: 'computer-science-principles',
  guideSlug: 'ap-computer-science-principles-exam-guide-act-sat-go',
  name: 'AP Computer Science Principles',
  metaTitle: 'AP Computer Science Principles Exam Guide 2027: Exam & Create Task | ACT SAT GO',
  description:
    'The AP Computer Science Principles (CSP) exam explained: the 70-question multiple-choice exam, the Create performance task and written responses, the 5 Big Ideas, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'Your AP Computer Science Principles score combines a 2-hour, 70-question multiple-choice exam (70%) with the Create performance task (30%): a program you build in 9 hours of class time, plus 60 minutes of written responses about it on exam day. The Create task components are due April 30, 2027, at 11:59 p.m. ET. Algorithms and programming is the biggest Big Idea, but impact of computing is the quickest to improve. About 62–63% of students score 3 or higher.',
  examDate: 'Friday, May 14, 2027 (morning session)',
  length: '3 hours on exam day',
  glance: [
    { value: '70%', label: '70 multiple-choice questions in 2 hours' },
    { value: '30%', label: 'Create task: program, video, PPR + written responses' },
    { value: '5 Big Ideas', label: 'from creative development to impact' },
    { value: '62–63%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '70%', timing: '2 hrs · 70 questions', what: '57 single-select questions, 5 single-select questions based on a reading passage about a computing innovation, and 8 multiple-select questions where you choose exactly 2 answers.' },
    { section: 'II · Create task: project', weight: '30% (with the written responses)', timing: '9 hours in class · due April 30', what: 'Build a program of your choice. Submit your program code, a video of it running, and your Personalized Project Reference (screenshots of key code segments).' },
    { section: 'II · Create task: written responses', weight: 'Part of the 30%', timing: '60 min on exam day · 2 questions', what: 'Answer 2 written-response questions (4 prompts in total) about the program you built, using your Personalized Project Reference.' },
  ],
  formatNotes: [
    { title: 'The exam is taken in Bluebook', text: "The whole exam is taken in College Board's Bluebook app. An exam reference sheet explains the AP pseudocode used in questions, so you don't need to memorize the notation." },
    { title: 'Your project has a late-April deadline', text: 'Code, video and Personalized Project Reference are uploaded to the AP Digital Portfolio and must be marked "submitted as final" by April 30, 2027, at 11:59 p.m. ET.' },
  ],
  mcq: {
    title: 'The multiple-choice exam',
    intro: '70 questions in 120 minutes gives you about 1 minute 40 seconds per question. Most of the time pressure comes from code-tracing questions, so practice those under a timer. Wrong answers lose no points.',
    tips: [
      "Trace code on paper. Write each variable's value after every line, especially inside loops.",
      'AP lists start at index 1, not 0 like Python or Java. This is a common trap.',
      'REPEAT UNTIL checks first. If the condition is already true, the body never runs.',
      'For multiple-select questions, test each option on its own as true or false before choosing your two.',
      'Reading-passage questions reward careful reading. Find the line that proves your answer.',
      "Don't leave anything blank. There is no penalty for wrong answers.",
    ],
  },
  unitLabel: 'Big idea',
  unitsTitle: 'The 5 Big Ideas',
  units: [
    { name: 'Creative Development', weight: '10–13%', about: 'How programs are designed, built, tested and improved, often by teams.', skills: "Describe a program's purpose, inputs and outputs; explain how collaboration helps; find and fix syntax, logic and run-time errors; choose good test cases." },
    { name: 'Data', weight: '17–22%', about: 'How computers store information in binary and turn data into useful information.', skills: 'Convert binary and decimal; explain overflow and rounding errors; compare lossless and lossy compression; explain metadata; describe cleaning, filtering and finding patterns in data.' },
    { name: 'Algorithms & Programming', weight: '30–35%', about: 'Writing and reading code: variables, conditions, loops, lists and procedures.', skills: 'Trace selection and iteration; work with lists; use procedures with parameters; compare algorithm efficiency; explain binary search, simulations and heuristics; recognize undecidable problems.' },
    { name: 'Computer Systems & Networks', weight: '11–15%', about: 'How the internet moves data, and how work is split across computers.', skills: 'Explain packets, protocols and routing; explain why redundancy makes the internet fault tolerant; calculate sequential, parallel and distributed run times and speedup.' },
    { name: 'Impact of Computing', weight: '21–26%', about: 'The effects of computing on people and society, good and bad.', skills: 'Discuss the digital divide and bias; explain crowdsourcing, licensing and intellectual property; recognize phishing, malware and keylogging, and the role of encryption and multifactor authentication.' },
  ],
  unitsNote: 'Algorithms & Programming is the biggest area, but Impact of Computing is the second largest and the quickest to improve: it is mostly reading and reasoning, with no code to trace.',
  frq: {
    title: 'The Create performance task',
    intro: 'You get 9 hours of class time to build a program of your choice, then answer written questions about it on exam day. Every item below is a College Board requirement.',
    types: [
      { label: 'Code', title: 'Six program requirements', text: 'Input; at least one list that manages complexity; a procedure you wrote with one or more parameters; an algorithm in that procedure using sequencing, selection and iteration; calls to the procedure; output based on input.', tip: 'Would the program be harder to write without the list? If not, it isn\'t managing complexity.' },
      { label: 'Video', title: 'A 1-minute video', text: 'At most 1 minute and 30 MB, in .webm, .mp4, .wmv, .avi or .mov. Show input, some functionality and output, with no voice narration and nothing that identifies you.', tip: 'Record with captions only, then check the file size before submitting.' },
      { label: 'PPR', title: 'Personalized Project Reference', text: 'Your only notes on exam day: two code segments for your procedure (its definition and a call) and two for your list (where data is stored and where it is used).', tip: 'No comments or extra text: College Board warns it can score 0 for the whole task.' },
      { label: 'Exam day', title: 'Written responses', text: '60 minutes for 2 questions (4 prompts) about your own program: how your algorithm works, how you tested it, and what changes if part of the code is removed.', tip: 'Use the exact procedure and list names from your PPR.' },
    ],
    timePlan: 'For the 9 in-class hours: about 1 hour to plan, 5 to build and test, 1 for the video, 1 for the PPR and 1 for a final check. Mark all three components "submitted as final" well before April 30: uploading alone isn\'t enough.',
  },
  habits: [
    'Answer every part of the prompt in order.',
    'Talk about your program, not definitions.',
    'Use the exact names from your PPR.',
    'Give specific inputs and outputs for testing prompts.',
    'Practice each prompt type in 8 minutes or less.',
  ],
  traps: [
    { title: 'Comments in the PPR', text: 'Comments or extra text in the Personalized Project Reference can score 0 on the Create task. Screenshot clean code only.' },
    { title: 'A parameter that does nothing', text: "The parameter must affect what the procedure does. An unused parameter doesn't meet the requirement." },
    { title: 'Iteration outside the procedure', text: 'Sequencing, selection and iteration must all be inside the procedure you write about.' },
    { title: "A list that doesn't manage complexity", text: "If a few separate variables would work just as well, your list isn't doing its job." },
    { title: 'A video that breaks the rules', text: 'Over 1 minute, voice narration, or your name or face on screen. Check it against the checklist.' },
    { title: 'Forgetting "submit as final"', text: "Uploading isn't enough. All three components must be marked final before the deadline." },
    { title: 'Starting list indexes at 0', text: 'In AP pseudocode the first item is list[1]. Python and Java habits cost points.' },
    { title: 'Misreading REPEAT UNTIL', text: 'The condition is checked before each pass, and the loop stops as soon as it is true.' },
    { title: 'One answer on multiple-select', text: 'Eight questions need exactly two answers, and you need both right to earn the point.' },
    { title: 'Underestimating Big Idea 5', text: 'Impact of Computing is about a quarter of the multiple-choice section. Review bias, the digital divide, licensing, privacy and security.' },
  ],
  roadmap: [
    { when: 'Sep – Dec', focus: 'Big Ideas 1 and 3: foundations', text: 'Variables, conditions, loops, lists and procedures. Trace 5 short pseudocode snippets a week, and get used to lists starting at index 1.' },
    { when: 'Jan – Feb', focus: 'Big Ideas 2, 4 and 5', text: 'Binary, compression, networks and the impact of computing. Build two small programs that meet all six code requirements as a rehearsal.' },
    { when: 'Mar – Apr', focus: 'Create task', text: 'Complete your program in class. Record the video, build a clean PPR, and mark everything final well before April 30.' },
    { when: 'Late April', focus: 'Timed multiple-choice sets', text: 'Take a full 70-question practice set in 120 minutes. Review every miss by Big Idea.' },
    { when: 'Early May', focus: 'Written-response drills', text: 'Write timed answers to practice prompts using your own PPR, 8 minutes each.' },
  ],
  scores: { threePlus: '62–63%', fives: '10–11%' },
  practice: [
    {
      topic: 'Big Idea 3 · Boolean logic',
      question: 'Which expression is true if and only if exactly one of the Boolean variables p and q is true?',
      choices: ['(p OR q) AND NOT (p AND q)', '(p AND q) OR NOT (p OR q)', 'NOT p OR NOT q', '(p OR q) AND (p AND q)'],
      answer: 'A',
      why: 'This is "exclusive or": at least one is true, but not both. Choice C is also true when both are false, and B is true when both are equal.',
    },
    {
      topic: 'Big Idea 3 · Efficiency',
      question: 'A sorted list contains 500 numbers. What is the greatest number of list elements a binary search would examine to find a value or determine it is absent?',
      choices: ['8', '9', '250', '500'],
      answer: 'B · 9',
      why: 'Binary search halves the remaining list each step. 2⁸ = 256 < 500 ≤ 512 = 2⁹, so at most 9 elements are examined.',
    },
    {
      topic: 'Big Idea 5 · Bias in data',
      question: 'A city trains a model to decide where to send repair crews, using complaints filed through a smartphone app. Which change would most directly reduce bias in the results?',
      choices: [
        'Add phone-in and in-person reporting so residents without smartphones are counted',
        'Use a faster server to process complaints',
        'Encrypt the complaint data',
        'Collect more complaints from the neighborhoods that already report most',
      ],
      answer: 'A',
      why: 'The data under-represents residents without smartphones (the digital divide). Adding other reporting methods fixes who is counted. Choice D makes the bias worse.',
    },
  ],
  lengthFaq: {
    q: 'How long is the AP Computer Science Principles exam?',
    a: 'The exam-day session is about 3 hours: 2 hours for 70 multiple-choice questions (70% of your score) and 60 minutes for the Create task written responses. The Create project itself is built earlier, in 9 hours of class time, and is due April 30, 2027.',
  },
  faq: [
    {
      q: 'When is the AP CSP Create task due in 2027?',
      a: 'Your program code, video and Personalized Project Reference must be marked "submitted as final" in the AP Digital Portfolio by April 30, 2027, at 11:59 p.m. ET. Uploading alone isn\'t enough.',
    },
    {
      q: 'What programming language does AP Computer Science Principles use?',
      a: 'Any language your class uses for the Create task. Exam questions use AP pseudocode, explained on a reference sheet. Remember that AP lists start at index 1.',
    },
  ],
};
