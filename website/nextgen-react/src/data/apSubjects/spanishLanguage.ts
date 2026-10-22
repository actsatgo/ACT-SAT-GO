import { worldLanguage } from './languages';

export const SPANISH_LANGUAGE = worldLanguage({
  slug: 'spanish-language',
  guideSlug: 'ap-spanish-language-and-culture-exam-guide-act-sat-go',
  language: 'Spanish',
  examDate: 'Thursday, May 13, 2027 (morning session)',
  scores: { threePlus: '83–85%', fives: '21–22%' },
  range: 'Use the past, present and future tenses and connectors such as además, sin embargo and por eso: variety in your speaking raises your score.',
  practice: [
    {
      topic: 'Gramática · Subjuntivo',
      question: 'Completa: "Es importante que los jóvenes ___ las tradiciones de su familia."',
      choices: ['conocen', 'conocieron', 'conocerán', 'conozcan'],
      answer: 'D · conozcan',
      why: '"Es importante que" expresses an impersonal judgment, which requires the present subjunctive.',
    },
    {
      topic: 'Gramática · Pretérito / imperfecto',
      question: 'Completa: "Cuando yo ___ niño, siempre ___ al mercado con mi abuela."',
      choices: ['era / iba', 'fui / fui', 'era / fui', 'fui / iba'],
      answer: 'A · era / iba',
      why: 'Both verbs describe background and habitual past actions, so both take the imperfect.',
    },
    {
      topic: 'Gramática · Condicional',
      question: 'Completa: "Si tuviera más tiempo, ___ en el mercado los sábados."',
      choices: ['trabajo', 'trabaje', 'trabajé', 'trabajaría'],
      answer: 'D · trabajaría',
      why: 'A hypothetical "si" clause with the imperfect subjunctive (tuviera) takes the conditional in the result clause.',
    },
  ],
  faq: [
    {
      q: 'Can heritage speakers take AP Spanish Language?',
      a: 'Yes, and many do well. The exam still rewards preparation: organized presentations, a range of tenses, formal register in writing and well-sourced arguments, so practice the task formats rather than relying on fluency alone.',
    },
  ],
});
