import { worldLanguage } from './languages';

export const GERMAN_LANGUAGE = worldLanguage({
  slug: 'german-language',
  guideSlug: 'ap-german-language-and-culture-exam-guide-act-sat-go',
  language: 'German',
  examDate: 'Friday, May 7, 2027 (morning session)',
  scores: { threePlus: '68–72%', fives: '21–24%' },
  range: 'Use Perfekt, Präsens and Futur, correct verb-final word order after weil and dass, and connectors such as außerdem, deshalb and trotzdem.',
  practice: [
    {
      topic: 'Grammatik · Wortstellung',
      question: 'Welcher Satz ist richtig?',
      choices: [
        'Ich gehe in den Garten, weil ich mag die Natur.',
        'Ich gehe in den Garten, weil mag ich die Natur.',
        'Weil ich mag die Natur, ich gehe in den Garten.',
        'Ich gehe in den Garten, weil ich die Natur mag.',
      ],
      answer: 'D',
      why: '"Weil" sends the conjugated verb to the end of the clause: "weil ich die Natur mag".',
    },
    {
      topic: 'Grammatik · Dativ',
      question: 'Ergänzen Sie: „Jonas hilft ___ Nachbarin beim Gießen.“',
      choices: ['die', 'den', 'der', 'das'],
      answer: 'C · der',
      why: '"Helfen" takes the dative, and the feminine dative article is "der".',
    },
    {
      topic: 'Grammatik · Konjunktiv II',
      question: 'Ergänzen Sie: „Wenn ich mehr Zeit hätte, ___ ich auch im Garten mitmachen.“',
      choices: ['würde', 'werde', 'wurde', 'wird'],
      answer: 'A · würde',
      why: 'A hypothetical with "wenn… hätte" takes "würde" + infinitive (Konjunktiv II).',
    },
  ],
  faq: [
    {
      q: 'What grammar matters most on AP German?',
      a: 'Word order (verb-second in main clauses, verb-final after weil and dass), cases (especially dative verbs like helfen), Perfekt with haben or sein, and Konjunktiv II for hypotheticals. Show them naturally in your presentation and writing.',
    },
  ],
});
