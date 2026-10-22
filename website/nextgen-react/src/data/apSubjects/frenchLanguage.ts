import { worldLanguage } from './languages';

export const FRENCH_LANGUAGE = worldLanguage({
  slug: 'french-language',
  guideSlug: 'ap-french-language-and-culture-exam-guide-act-sat-go',
  language: 'French',
  examDate: 'Thursday, May 6, 2027 (morning session)',
  scores: { threePlus: '71–74%', fives: '14–15%' },
  range: 'Use the passé composé, imparfait, présent and futur, plus connectors such as de plus, cependant and c\'est pourquoi: variety in your speaking raises your score.',
  practice: [
    {
      topic: 'Grammaire · Subjonctif',
      question: 'Complétez : « Il faut que nous ___ nos déchets. »',
      choices: ['réduisons', 'réduirons', 'réduisions', 'avons réduit'],
      answer: 'C · réduisions',
      why: '"Il faut que" requires the subjunctive: nous réduisions.',
    },
    {
      topic: 'Grammaire · Passé',
      question: "Complétez : « Quand j'___ petit, mon grand-père ___ toujours tout lui-même. »",
      choices: ['ai été / a réparé', 'étais / a réparé', 'serai / réparera', 'étais / réparait'],
      answer: 'D · étais / réparait',
      why: 'A background state and a habitual past action (toujours) both take the imparfait.',
    },
    {
      topic: 'Grammaire · Conditionnel',
      question: "Complétez : « Si j'avais un vélo cassé, je l'___ au café de réparation. »",
      choices: ['apporte', 'apporterai', 'apporterais', 'apportais'],
      answer: 'C · apporterais',
      why: 'A "si" clause with the imparfait takes the conditional in the result clause.',
    },
  ],
  faq: [
    {
      q: 'How hard is AP French Language?',
      a: 'About 71–74% of students score 3 or higher and 14–15% earn a 5. The project presentation and Q&A are 35% of the score, so steady speaking practice and a well-researched PPR matter as much as grammar.',
    },
  ],
});
