import { worldLanguage } from './languages';

export const CHINESE_LANGUAGE = worldLanguage({
  slug: 'chinese-language',
  guideSlug: 'ap-chinese-language-and-culture-exam-guide-act-sat-go',
  language: 'Chinese',
  examDate: 'Thursday, May 13, 2027 (afternoon session)',
  scores: { threePlus: '85–89%', fives: '48–55%' },
  range: 'Use time words, connectors such as 另外、但是、所以 and 虽然…但是…, and at least one 比 comparison.',
  storyAndEmail: true,
  practice: [
    {
      topic: '语法 · 否定',
      question: '选择正确的词：“我___去过北京。”',
      choices: ['没', '不', '别', '很'],
      answer: 'A · 没',
      why: 'Past experience with 过 is negated with 没: 我没去过北京.',
    },
    {
      topic: '语法 · 连词',
      question: '“虽然下雨了，___我们还是去上课了。”',
      choices: ['因为', '所以', '但是', '如果'],
      answer: 'C · 但是',
      why: 'The pattern 虽然…但是… means "although… (but)…".',
    },
    {
      topic: '语法 · 比较',
      question: '哪个句子是对的？',
      choices: ['今天比昨天很冷。', '今天比昨天冷多了。', '今天比昨天非常冷。', '今天比昨天太冷。'],
      answer: 'B',
      why: "In 比 comparisons, adverbs such as 很, 非常 and 太 can't be used; add 多了 or 一点 after the adjective instead.",
    },
  ],
  faq: [
    {
      q: 'How do I type Chinese on the AP exam?',
      a: 'The exam is taken in Bluebook, and for the written tasks you can type with Pinyin (simplified or traditional characters) or Bopomofo input. Practice typing timed stories and emails before May.',
    },
  ],
});
