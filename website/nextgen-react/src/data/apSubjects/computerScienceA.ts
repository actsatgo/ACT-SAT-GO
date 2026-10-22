import type { ApSubject } from './types';

export const COMPUTER_SCIENCE_A: ApSubject = {
  slug: 'computer-science-a',
  guideSlug: 'ap-computer-science-a-exam-guide-act-sat-go',
  name: 'AP Computer Science A',
  metaTitle: 'AP Computer Science A Exam Guide 2027: Format, Units & FRQs | ACT SAT GO',
  description:
    'The AP Computer Science A (CSA) exam explained: 42 multiple-choice and 4 Java free-response questions, the new 4-unit course, the four FRQ types, Java traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Computer Science A exam is 3 hours: 42 multiple-choice questions in 90 minutes (55% of your score) and 4 free-response questions in 90 minutes (45%) where you write real Java. It is fully digital, and you type your code in the Bluebook editor. The course now has 4 units, and data collections (arrays, ArrayLists and 2D arrays) is the biggest. About 66–67% of students score 3 or higher, and about 25–26% earn a 5.',
  examDate: 'Wednesday, May 12, 2027 (afternoon session)',
  length: '3 hours',
  glance: [
    { value: '3 hrs', label: '90 min multiple choice + 90 min free response' },
    { value: '42 + 4', label: 'multiple-choice + Java free-response questions' },
    { value: '4 units', label: 'objects to data collections' },
    { value: '66–67%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '55%', timing: '1 hr 30 min · 42 questions', what: 'Mostly stand-alone questions, plus 1–2 small sets of 2 questions that share a code segment. You read, trace and evaluate Java code.' },
    { section: 'II · Free response', weight: '45%', timing: '1 hr 30 min · 4 questions', what: 'Write Java methods, a constructor and a full class: Q1 Methods & Control Structures, Q2 Class Design, Q3 Data Analysis with ArrayList, Q4 2D Array. The same four types every year.' },
  ],
  formatNotes: [
    { title: 'You type your code in Bluebook', text: "Both sections are taken in College Board's Bluebook app. Free-response code is typed into the built-in editor (no autocomplete) and submitted automatically. The Java Quick Reference is available inside Bluebook." },
    { title: 'The current course: 4 units, 25 FRQ points', text: "The course is organized into 4 large units. Free-response questions total 25 points, Q1 Part B asks you to call String methods, and Q3 is about ArrayList. Inheritance is no longer in the course." },
  ],
  mcq: {
    intro: '42 questions in 90 minutes gives you a little over 2 minutes per question. Most of that time goes into tracing loops and method calls, so practice tracing on paper under a timer. Wrong answers lose no points.',
    tips: [
      "Build a trace table: one column per variable, one row per loop pass. Don't do it in your head.",
      'Check the loop bounds first. < vs <= and starting at 0 vs 1 decide most answers.',
      'Watch integer division: 7 / 2 is 3, not 3.5.',
      'Use the Java Quick Reference to confirm method names and return types.',
      'For "which code works for all cases", try an empty list, one element and a negative number.',
      'Flag and move on after 3 minutes. Come back once the easy points are banked.',
    ],
  },
  units: [
    { name: 'Using Objects & Methods', weight: '15–25%', about: 'Variables, data types, expressions, and calling methods on objects someone else wrote.', skills: 'Use int, double and boolean; cast and spot integer division; use %; call static and instance methods; use the Math class; create objects with new; use String methods such as substring, indexOf, equals and compareTo.' },
    { name: 'Selection & Iteration', weight: '25–35%', about: 'Making decisions and repeating work.', skills: "Write and simplify boolean expressions (including De Morgan's laws and short-circuiting); use if / else if; write while and for loops; nest loops; loop through Strings; build sum, min/max, count and digit-extraction algorithms." },
    { name: 'Class Creation', weight: '10–18%', about: 'Designing your own classes: what objects store and what they can do.', skills: 'Write a class header, private instance variables and constructors; write accessor, mutator and other methods; explain static variables and methods; reason about scope and this; pass and return object references (and spot aliasing).' },
    { name: 'Data Collections', weight: '30–40%', about: 'Storing and processing lots of data. The biggest unit and the heart of the exam.', skills: 'Create and traverse arrays, ArrayLists and 2D arrays (row-major and column-major); use wrapper classes; read data from text files; trace linear and binary search; trace selection, insertion and merge sort; trace recursive methods; discuss data privacy and bias.' },
  ],
  unitsNote: 'Units 2 and 4 together are well over half of the multiple-choice section: loops, arrays, ArrayLists and 2D arrays are where most points live. Unit 3 is the smallest slice there, but it gets a whole free-response question. Using old review books? Skip the inheritance chapters.',
  frq: {
    title: 'The 4 free-response questions',
    intro: '90 minutes, 4 questions, 25 raw points (45% of your score). The question types never change, and every question tests your ability to write working Java code.',
    types: [
      { label: 'Q1 · 7 pts', title: 'Methods & Control Structures', text: "Write two methods (or a constructor and a method) for a class you're given. Part A needs loops or if statements plus calls to the class's own methods; Part B needs String methods.", tip: 'Practice substring boundaries, indexOf returning -1, and building a String in a loop.' },
      { label: 'Q2 · 7 pts', title: 'Class Design', text: 'Write a complete class from a description and a table of example calls: header, instance variables, constructor and the required methods.', tip: 'Turn the example table into instance variables and exact method headers.' },
      { label: 'Q3 · 5 pts', title: 'Data Analysis with ArrayList', text: 'Write one method that uses, analyzes or changes data stored in an ArrayList, usually a list of objects you access through getter methods.', tip: 'Know get, size, add and remove, and how to remove safely while looping.' },
      { label: 'Q4 · 6 pts', title: '2D Array', text: 'Write one method that uses, analyzes or changes data in a 2D array, such as finding a row or column that meets a condition, or counting neighbors.', tip: 'grid.length is the rows; grid[0].length is the columns.' },
    ],
    timePlan: 'Skim for 3 minutes, then about 20 minutes per question, leaving 6 minutes to check. Rubric points are given for individual correct pieces (the loop, the condition, the return), so a half-finished method can still earn most of the points.',
  },
  habits: [
    'Read the examples table before writing anything.',
    "Use methods the question gives you. Don't rewrite them.",
    'Trace your code with one example from the question.',
    'No imports, comments or main needed.',
    'Stuck? Write the header and the loop anyway.',
  ],
  traps: [
    { title: 'Integer division', text: '7 / 2 is 3. Cast first if you need a decimal: (double) 7 / 2 is 3.5.' },
    { title: 'Comparing Strings with ==', text: '== checks whether two references point to the same object. Use s1.equals(s2) for content.' },
    { title: 'Looping one step too far', text: 'i <= arr.length crashes with an ArrayIndexOutOfBoundsException. The last index is length - 1.' },
    { title: 'Removing while looping forward', text: 'After list.remove(i), everything shifts left and the next item is skipped. Loop backwards instead.' },
    { title: 'length, length() or size()?', text: 'Arrays: arr.length. Strings: s.length(). ArrayLists: list.size().' },
    { title: "substring's end is exclusive", text: '"HELLO".substring(1, 3) is "EL": it stops before index 3.' },
    { title: 'Rows and columns swapped', text: 'grid.length is the number of rows; grid[0].length is the number of columns.' },
    { title: 'Redeclaring in the constructor', text: 'int count = start; makes a new local variable. Write count = start;.' },
    { title: 'Printing instead of returning', text: "If the method's header says int or boolean, it must return a value on every path." },
    { title: 'Leaving a free-response blank', text: 'Points are given for each correct piece. A header plus a sensible loop can still score.' },
  ],
  roadmap: [
    { when: 'Sep – Nov', focus: 'Units 1–2: foundations', text: 'Types, casting, String methods, if statements, while and for loops. Trace 5 short code snippets a week and write one small program each weekend.' },
    { when: 'Dec – Jan', focus: 'Unit 3: build classes', text: 'Write classes with constructors, getters and methods. Do one Class Design and one Methods & Control Structures question every week.' },
    { when: 'Feb – Mar', focus: 'Unit 4: data collections', text: 'Arrays, ArrayLists, 2D arrays, searching, sorting and recursion. Add ArrayList and 2D array free-response practice as you finish each topic.' },
    { when: 'April', focus: 'Timed practice in Bluebook', text: 'Open the Bluebook test preview. Take one full multiple-choice set and one full free-response set under real timing, and log every mistake by unit.' },
    { when: 'Early May', focus: 'Fix weak spots', text: 'Redo every question you missed. Review the Java traps and the Quick Reference methods.' },
  ],
  scores: { threePlus: '66–67%', fives: '25–26%' },
  practice: [
    {
      topic: 'Unit 1 · String methods',
      question: 'String s = "PROGRAMMING"; What does System.out.println(s.substring(3, 7) + s.indexOf("M")); print?',
      choices: ['GRAMM6', 'GRAM6', 'GRAM7', 'OGRA6'],
      answer: 'B · GRAM6',
      why: 'Indexes start at 0. substring(3, 7) takes indexes 3–6, "GRAM" (index 7 is excluded). The first "M" is at index 6.',
    },
    {
      topic: 'Unit 2 · Boolean logic',
      question: 'Which expression is equivalent to !(x > 5 || y <= 2) for all integers x and y?',
      choices: ['x <= 5 || y > 2', 'x < 5 && y > 2', 'x > 5 && y <= 2', 'x <= 5 && y > 2'],
      answer: 'D',
      why: "De Morgan's law: !(A || B) becomes !A && !B. The opposite of x > 5 is x <= 5, and the opposite of y <= 2 is y > 2.",
    },
    {
      topic: 'Unit 4 · Sorting',
      question: 'The array {5, 2, 9, 1, 7} is sorted into ascending order using selection sort. What does it look like after the first two passes of the outer loop?',
      choices: ['{1, 2, 9, 5, 7}', '{1, 2, 5, 9, 7}', '{2, 5, 9, 1, 7}', '{1, 2, 5, 7, 9}'],
      answer: 'A',
      why: 'Pass 1: the smallest value 1 swaps with 5, giving {1, 2, 9, 5, 7}. Pass 2: the smallest remaining value 2 is already in place, so nothing changes. Choice C is what insertion sort gives after two passes.',
    },
  ],
  faq: [
    {
      q: 'Is inheritance still on the AP Computer Science A exam?',
      a: 'No. The current 4-unit course no longer includes inheritance (superclasses, subclasses, super and polymorphism). Spend that study time on ArrayList and 2D array practice instead.',
    },
    {
      q: 'Do you write code by hand on the AP CSA exam?',
      a: "No. The exam is fully digital: you type your Java free-response answers into the Bluebook app's built-in editor, which has no autocomplete. Practice in the Bluebook test preview before May.",
    },
  ],
};
