import { worldLanguage } from './languages';

export const JAPANESE_LANGUAGE = worldLanguage({
  slug: 'japanese-language',
  guideSlug: 'ap-japanese-language-and-culture-exam-guide-act-sat-go',
  language: 'Japanese',
  examDate: 'Tuesday, May 11, 2027 (morning session)',
  scores: { threePlus: '72–75%', fives: '43–47%' },
  range: 'Use です/ます forms, connectors such as それに、でも and ですから, and at least one 〜によると to cite a source.',
  storyAndEmail: true,
  practice: [
    {
      topic: '文法 · 経験',
      question: '「日本へ行った___があります。」',
      choices: ['こと', 'もの', 'ところ', 'ため'],
      answer: 'A · こと',
      why: 'Past tense + ことがある expresses past experience: "I have been to Japan."',
    },
    {
      topic: '助数詞',
      question: '「本を三___買いました。」',
      choices: ['枚', '本', '冊', '匹'],
      answer: 'C · 冊',
      why: '冊 is the counter for books.',
    },
    {
      topic: 'メール · 敬語',
      question: '先生にメールを書くとき、どの表現が一番ていねいですか。',
      choices: ['明日、来る？', '明日、来るの？', '明日、いらっしゃいますか。', '明日、来いよ。'],
      answer: 'C',
      why: 'いらっしゃいますか is honorific (sonkeigo), appropriate for a teacher.',
    },
  ],
  faq: [
    {
      q: 'Do I need keigo for AP Japanese?',
      a: 'Yes, for register. The email task rewards an appropriate greeting, polite forms and closing, and honorific expressions such as いらっしゃいます show range when writing to a teacher.',
    },
  ],
});
