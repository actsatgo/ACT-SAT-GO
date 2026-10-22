import type { FaqItem } from '../faq';
import type { ApSubject } from './types';

// The AP world language exams (Spanish, French, German, Italian, Chinese, Japanese) now share one
// project-based format. Chinese and Japanese replace the argumentative essay with a story and an email.

interface LanguageOptions {
  slug: string;
  guideSlug: string;
  /** "Spanish", "French"... */
  language: string;
  examDate: string;
  scores: { threePlus: string; fives: string };
  /** A line about the grammar and connectors a strong speaker shows, from the guide's self-check. */
  range: string;
  practice: ApSubject['practice'];
  faq: FaqItem[];
  /** Chinese and Japanese: story narration + email instead of the argumentative essay. */
  storyAndEmail?: boolean;
}

export function worldLanguage(o: LanguageOptions): ApSubject {
  const name = `AP ${o.language} Language and Culture`;
  const community = `${o.language}-speaking`;
  const story = o.storyAndEmail;
  const writingTask: ApSubject['structure'][number] = story
    ? { section: 'Q3–4 · Story narration + email', weight: '7.5% + 7.5%', timing: '30 min total', what: 'Story narration: write a story based on a series of pictures. Email response: reply to an email from a friend or community member.' }
    : { section: 'Q3 · Argumentative essay', weight: '15%', timing: '55 min', what: 'Write a persuasive essay using three sources with different viewpoints: two print sources and one audio source (heard twice).' };
  const writingTypes: ApSubject['frq']['types'] = story
    ? [
        { label: 'Q3 · 7.5%', title: 'Story narration', text: 'Write a story based on a series of pictures, with a beginning, middle and end.', tip: 'Use time words and connectors to link the pictures.' },
        { label: 'Q4 · 7.5%', title: 'Email response', text: 'Read an email and write a reply that responds to every question and request in it.', tip: 'Use an appropriate greeting, register and closing.' },
      ]
    : [{ label: 'Q3 · 15%', title: 'Argumentative essay', text: 'Read two print sources, listen to an audio source twice, then write a persuasive essay that takes a position and cites all three sources.', tip: 'State your thesis in the first paragraph and cite each source by number.' }];

  return {
    slug: o.slug,
    guideSlug: o.guideSlug,
    name,
    metaTitle: `AP ${o.language} Language Exam Guide 2027: Project, Format & Themes | ACT SAT GO`,
    description: `The AP ${o.language} Language and Culture exam explained: the new course project and presentation, the project Q&A, ${story ? 'story narration and email' : 'the argumentative essay'}, 55 listening and reading questions, the 6 themes, common traps and a study plan to May 2027.`,
    updated: '2026-10-22',
    intro: `The AP ${o.language} Language and Culture exam now centers on a research project you complete during the year about a ${community} community. Your score combines a 3-minute project presentation (20%), a project Q&A (15%), ${story ? 'two written tasks, a story narration and an email (15%)' : 'an argumentative essay (15%)'} and 55 listening and reading questions (50%). Speaking about your project is the single biggest part, at 35%, and you submit your Personalized Project Reference (PPR) in late April. About ${o.scores.threePlus} of students score 3 or higher.`,
    examDate: o.examDate,
    length: story ? 'about 2 hours 30 minutes' : 'about 3 hours',
    glance: [
      { value: '35%', label: 'speaking about your project' },
      { value: '55 Q', label: 'listening + reading multiple choice (50%)' },
      { value: '6 themes', label: 'families to global contexts' },
      { value: o.scores.threePlus, label: 'scored 3 or higher in recent years' },
    ],
    structure: [
      { section: 'Q1 · Project presentation', weight: '20%', timing: '3 min prep + 3 min speaking', what: `Deliver a spoken presentation in ${o.language} answering the project prompt, using your Personalized Project Reference (PPR).` },
      { section: 'Q2 · Project Q&A', weight: '15%', timing: '4 questions · 40 s each', what: 'Answer four pre-recorded questions about your project research.' },
      writingTask,
      {
        section: 'II · Multiple choice',
        weight: '50%',
        timing: story ? 'about 65 min · 55 questions' : '80 min · 55 questions',
        what: `Listening: 25 questions (${story ? '25' : '40'} min, 25%) on audio sources. Reading: 30 questions (40 min, 25%) on print texts.`,
      },
    ],
    formatNotes: [
      { title: 'Everything happens in Bluebook', text: `You answer every question, including the spoken and written responses, in College Board's Bluebook app.${o.language === 'Chinese' ? ' For the written tasks you can type with Pinyin (simplified or traditional) or Bopomofo input.' : ''} Test your headphones and microphone before exam day.` },
      { title: 'Submit your PPR by late April', text: 'Your Personalized Project Reference is a structured outline of your research and sources. Submit it in the AP Digital Portfolio by the late-April deadline; you can see it during the presentation.' },
    ],
    mcq: {
      kicker: 'Section II',
      title: 'Listening and reading',
      intro: `55 questions in about ${story ? '65' : '80'} minutes. Listening questions use authentic audio such as interviews, podcasts and announcements; reading questions use articles, ads, charts and literary texts. Wrong answers lose no points.`,
      tips: [
        'Preview the questions before each audio plays, so you know what to listen for.',
        'Take short notes while listening: names, numbers, opinions and the main idea.',
        'Read the introduction line of each text; it tells you the source and purpose.',
        "Don't translate word for word. Use context to infer the meaning of unknown words.",
        "Watch for paraphrase. Correct answers rarely repeat the text's exact words.",
        `Listen to ${o.language} podcasts or news for 10 minutes a day to train your ear for natural speed.`,
      ],
    },
    unitLabel: 'Theme',
    unitsTitle: 'The 6 themes',
    units: [
      { name: 'Families & Communities', weight: '', about: 'How families and communities live and change.', skills: `Explore family values, traditions and how communities are changing in ${community} communities.` },
      { name: 'Language & Culture', weight: '', about: 'Identity and expression.', skills: 'Explore how language, media and technology shape identity and cultural expression.' },
      { name: 'Art & Creativity', weight: '', about: 'Art, music and literature.', skills: "Explore how art, music and literature reflect a community's history and values." },
      { name: 'Science & Technology', weight: '', about: 'Innovation and daily life.', skills: 'Explore how scientific and technological change affects daily life and society.' },
      { name: 'Contemporary Life', weight: '', about: 'How people live today.', skills: 'Explore education, work, leisure, popular culture and changing lifestyles.' },
      { name: 'Global Contexts', weight: '', about: 'Issues that cross borders.', skills: 'Explore how global issues such as the environment, migration and health affect communities.' },
    ],
    unitsNote: `Your project connects research to one of these themes, using authentic ${o.language}-language sources: research the prompt, build your PPR, submit it by late April, then present for 3 minutes and answer 4 questions on exam day.`,
    frq: {
      kicker: 'Section I',
      title: story ? 'The project tasks and the written tasks' : 'The project tasks and the essay',
      intro: `Two spoken tasks about your project, then ${story ? 'two written tasks in 30 minutes' : 'one argumentative essay'}. Together they are 50% of your score.`,
      types: [
        { label: 'Q1 · 20%', title: 'Project presentation', text: 'Answer the project prompt using what you learned. Organize clearly: introduction, main findings with examples from your sources, and a conclusion.', tip: 'Aim for 2:45–3:00 so you use the full time.' },
        { label: 'Q2 · 15%', title: 'Project Q&A', text: 'Respond to four recorded questions that ask you to explain, extend or reflect on your research, 40 seconds each.', tip: 'Answer directly in the first sentence, then add one detail or example.' },
        ...writingTypes,
      ],
      timePlan: `For the presentation: about 1 minute to review your PPR, 2 to plan two or three key findings with an example each, then 3 minutes speaking. ${o.range}`,
    },
    habits: [
      'Answer the question in your first sentence.',
      'Use connectors to organize ideas.',
      'Vary tenses and sentence structures.',
      'Self-correct briefly, then keep going.',
      'Use every second of speaking time.',
    ],
    traps: [
      { title: 'A memorized script', text: 'The presentation should sound natural. Know your findings well rather than reciting word for word.' },
      { title: 'Missing the PPR deadline', text: "Without a submitted Personalized Project Reference, you won't have your outline during the presentation." },
      { title: 'Too short', text: 'Stopping at 1:30 of a 3-minute presentation limits your score. Use the full time.' },
      { title: 'Ignoring the Q&A question', text: 'Answer exactly what is asked first; then elaborate.' },
      { title: 'Long silences', text: `Use fillers in ${o.language} and keep going rather than stopping.` },
      { title: 'Only one tense', text: 'Showing past, present and future tenses demonstrates range.' },
      { title: 'Word-for-word translation', text: 'Think in phrases, not single words, to avoid unnatural sentences.' },
      story
        ? { title: 'Wrong register in the email', text: 'Match formality to the recipient: a teacher needs polite forms; a friend can be casual.' }
        : { title: 'Summarizing sources', text: 'Use sources as evidence for your position rather than summarizing them one by one.' },
      { title: 'Skipping notes while listening', text: 'Brief notes on names, numbers and opinions make audio questions much easier.' },
      { title: 'Cultural facts without insight', text: "Explain what a practice or product shows about a community's perspectives." },
    ],
    roadmap: [
      { when: 'Sep – Oct', focus: 'Themes 1–2: foundations', text: 'Families, communities, language and culture. Start daily listening practice and short speaking recordings.' },
      { when: 'Nov – Dec', focus: 'Themes 3–4: build skills', text: `Art and technology. Practice listening and reading sets, and ${story ? 'story narration and emails' : 'short argumentative paragraphs'}.` },
      { when: 'Jan – Mar', focus: 'Research and your PPR', text: 'Research the project prompt with authentic sources, then build your Personalized Project Reference.' },
      { when: 'April', focus: 'Submit and rehearse', text: 'Submit the PPR in the AP Digital Portfolio by the late-April deadline. Rehearse the 3-minute presentation and the Q&A.' },
      { when: 'Early May', focus: 'Timed practice', text: `Full listening and reading sets and timed ${story ? 'writing tasks' : 'essays'}. Record and review your presentation.` },
    ],
    scores: o.scores,
    practice: o.practice,
    faq: [
      {
        q: `What is the AP ${o.language} Language project?`,
        a: `A research project you complete during the year about a ${community} community, using authentic ${o.language}-language sources. You submit a Personalized Project Reference (PPR) by late April, then give a 3-minute presentation and answer four questions about it on exam day. Together those are 35% of your score.`,
      },
      ...o.faq,
    ],
  };
}
