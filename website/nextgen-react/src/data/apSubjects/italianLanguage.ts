import { worldLanguage } from './languages';

export const ITALIAN_LANGUAGE = worldLanguage({
  slug: 'italian-language',
  guideSlug: 'ap-italian-language-and-culture-exam-guide-act-sat-go',
  language: 'Italian',
  examDate: 'Monday, May 3, 2027 (afternoon session)',
  scores: { threePlus: '69–75%', fives: '19–25%' },
  range: 'Use passato prossimo, imperfetto, presente and futuro, plus connectors such as inoltre, però and per questo: variety in your speaking raises your score.',
  practice: [
    {
      topic: 'Grammatica · Congiuntivo',
      question: 'Completa: "Penso che il progetto ___ molto utile."',
      choices: ['è', 'sarà', 'era', 'sia'],
      answer: 'D · sia',
      why: '"Penso che" expresses opinion and requires the congiuntivo: sia.',
    },
    {
      topic: 'Grammatica · Passato',
      question: 'Completa: "Da bambina, Giulia ___ spesso in biblioteca, ma l\'anno scorso ___ un corso nuovo."',
      choices: ['è andata / apriva', 'andrà / aprirà', 'andava / ha aperto', 'va / apre'],
      answer: 'C · andava / ha aperto',
      why: 'A repeated past habit takes the imperfetto; a completed action last year takes the passato prossimo.',
    },
    {
      topic: 'Grammatica · Condizionale',
      question: 'Completa: "Se avessi tempo, ___ come volontario in biblioteca."',
      choices: ['lavoro', 'lavorerò', 'lavorerei', 'lavoravo'],
      answer: 'C · lavorerei',
      why: 'A hypothetical "se" clause with the congiuntivo imperfetto takes the condizionale.',
    },
  ],
  faq: [
    {
      q: 'How hard is AP Italian Language?',
      a: 'In recent years about 69–75% of students scored 3 or higher and 19–25% earned a 5. The project presentation and Q&A are 35% of the score, so steady speaking practice pays off.',
    },
  ],
});
