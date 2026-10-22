import type { FaqItem } from '../faq';
import type { ApSubject } from './types';

// AP 2-D Art and Design, 3-D Art and Design and Drawing share one portfolio format:
// a Sustained Investigation (60%) and Selected Works (40%), submitted digitally with no sit-down exam.

const DEADLINE = 'Friday, May 7, 2027, 11:59 p.m. ET';

interface ArtOptions {
  slug: string;
  guideSlug: string;
  name: string;
  /** "2-D design skills", "3-D design skills", "drawing skills". */
  skills: string;
  /** What counts as work in this portfolio. */
  media: string;
  /** Four skill cards, shown as the course's skills. */
  skillCards: { name: string; about: string }[];
  /** Selected Works line for the structure table, e.g. "5 works × 2 views = 10 images". */
  selectedImages: string;
  /** A tip specific to photographing this kind of work. */
  photoTip: string;
  scores: { threePlus: string; fives: string };
  practice: ApSubject['practice'];
  faq: FaqItem[];
}

export function artPortfolio(o: ArtOptions): ApSubject {
  return {
    slug: o.slug,
    guideSlug: o.guideSlug,
    name: o.name,
    metaTitle: `${o.name} Portfolio Guide 2027: Sustained Investigation & Selected Works | ACT SAT GO`,
    description: `The ${o.name} portfolio explained: the 15-image Sustained Investigation (60%), Selected Works (40%), written evidence, ${o.skills}, common traps and a plan to the May 7, 2027 deadline.`,
    updated: '2026-10-22',
    intro: `${o.name} has no timed exam. Your score (1–5) comes from a digital portfolio of your own work and short written statements: a Sustained Investigation of 15 images driven by a question you choose (60%) and five Selected Works that show your strongest ${o.skills} (40%). ${o.media} You upload everything to the AP Digital Portfolio by ${DEADLINE}, and your teacher forwards it to College Board. About ${o.scores.threePlus} of students score 3 or higher.`,
    examDate: DEADLINE,
    dateLabel: 'Portfolio deadline',
    length: 'no timed exam: a portfolio submitted by May 7, 2027',
    glance: [
      { value: '60%', label: 'Sustained Investigation: 15 images' },
      { value: '40%', label: `Selected Works: ${o.selectedImages}` },
      { value: 'May 7', label: 'portfolio deadline, 11:59 p.m. ET' },
      { value: o.scores.threePlus, label: 'scored 3 or higher in recent years' },
    ],
    structure: [
      { section: 'I · Sustained Investigation', weight: '60%', timing: '15 digital images', what: 'A body of work driven by a question you choose. Show practice, experimentation and revision, with written evidence of your inquiry and how the work developed.' },
      { section: 'II · Selected Works', weight: '40%', timing: o.selectedImages, what: `Five finished works that show ${o.skills} and synthesis of materials, processes and ideas. Each has a short written description of ideas, materials and processes.` },
    ],
    formatNotes: [
      { title: 'A portfolio, not a sit-down exam', text: 'You upload images and written evidence to the AP Digital Portfolio, and your teacher forwards it to College Board before the deadline. Finish early so there is time for both steps.' },
      { title: 'Scored by experts', text: 'Portfolios are scored by at least four experienced AP Art and Design teachers or college faculty, trained to apply the same rubric. Each section is scored separately.' },
    ],
    mcq: {
      kicker: 'Section I · 60%',
      title: 'Sustained Investigation',
      intro: `The heart of the portfolio: 15 images that show an inquiry-driven body of work and how it grew through practice, experimentation and revision. Readers look at your inquiry, your practice and revision, how materials and ideas come together, and your ${o.skills}. You briefly identify the inquiry and describe how it developed, and list materials and processes for each image.`,
      tips: [
        'Ask an open question you can explore in many ways, not a single theme you illustrate once.',
        'Show process images: sketches, tests and failed attempts count as evidence of experimentation.',
        'Let the work change. Readers reward visible growth and new directions.',
        'Connect images so the 15 read as one investigation, not 15 separate projects.',
        `Push your ${o.skills} across the body of work.`,
        'Write briefly and specifically: name the decisions you made and why.',
      ],
    },
    unitLabel: 'Skill',
    unitsTitle: `The ${o.skills} readers look for`,
    units: o.skillCards.map((c) => ({ name: c.name, weight: '', about: c.about, skills: `show ${c.name.toLowerCase()} across your Sustained Investigation and Selected Works.` })),
    unitsNote: 'The course is organized around three big ideas: investigate materials, processes and ideas; make art and design through practice, experimentation and revision; and present your work with clear written statements that explain your growth.',
    frq: {
      kicker: 'Section II · 40%',
      title: 'Selected Works',
      intro: `Five works that show your strongest ${o.skills}. They can come from your Sustained Investigation, or be completely separate. Readers look for skill and a strong synthesis of materials, processes and ideas.`,
      types: [
        { label: 'Show', title: 'Your five strongest works', text: 'Choose finished works that best show skill and synthesis, not your favorite subjects.', tip: 'Ask someone honest which five are weakest.' },
        { label: 'Write', title: 'A short written description', text: 'For each work, briefly identify the ideas, materials and processes used, plus citations for any sources or pre-existing works.', tip: 'Be specific: "graphite and charcoal on toned paper", not just "drawing".' },
        { label: 'Photo', title: 'Photograph carefully', text: o.photoTip, tip: 'Poor photos can hide strong work.' },
        { label: 'Cite', title: 'Original work', text: "Work must be your own. If you use a photo or another artist's work as a reference, you must transform it significantly and cite it.", tip: 'Copying a photo without transformation can disqualify a work.' },
      ],
      timePlan: `Work back from the deadline: about 2 weeks to select works, 1–2 weeks to photograph, 1 week to write and 1 week to upload and check. The deadline is ${DEADLINE}.`,
    },
    habits: [
      'Photograph process and finished work as you go.',
      'Keep a sketchbook or log of every decision.',
      'Write evidence in plain, specific language.',
      'Cite any reference images or sources.',
      'Get honest feedback on your weakest five images.',
    ],
    traps: [
      { title: 'Theme instead of inquiry', text: '"Nature" is a theme. "How can texture show the passage of time?" is an inquiry that drives work.' },
      { title: 'No visible growth', text: "Fifteen similar finished works don't show practice, experimentation or revision." },
      { title: 'Hiding process', text: 'Sketches and tests are evidence. Include and label them.' },
      { title: 'Vague writing', text: '"I explored my feelings" says little. Name materials, decisions and changes.' },
      { title: 'Copying photos', text: "Work based on others' images must be significantly transformed and cited." },
      { title: 'Poor photography', text: 'Blurry, glare-filled or badly cropped images hide your skill.' },
      { title: 'Disconnected works', text: 'Your investigation should read as one connected body of work.' },
      { title: 'Weak Selected Works', text: 'Choose the five works that best show skill and synthesis, not just your favorites.' },
      { title: 'Ignoring composition', text: 'Readers judge composition and design decisions, not just technique.' },
      { title: 'Missing the deadline', text: 'Upload, write and submit early; your teacher must also forward the portfolio.' },
    ],
    roadmap: [
      { when: 'Sep – Oct', focus: 'Explore skills and possible inquiries', text: 'Experiment with materials and processes. Fill a sketchbook and brainstorm several possible questions.' },
      { when: 'Nov – Dec', focus: 'Choose your inquiry', text: "Pick the question you'll investigate and start making connected work. Photograph everything." },
      { when: 'Jan – Mar', focus: 'Practice, experiment, revise', text: 'Build toward 15 images. Get feedback, revise, and let the investigation change direction.' },
      { when: 'April', focus: 'Choose Selected Works', text: 'Pick your five strongest works. Photograph them carefully and draft the written descriptions.' },
    ],
    roadmapEnd: { when: 'May 7, 2027', focus: 'Portfolio deadline', text: `Upload images and writing to the AP Digital Portfolio and submit by 11:59 p.m. ET. Scores are released in July.` },
    scores: o.scores,
    practice: o.practice,
    dateFaq: {
      q: `When is the ${o.name} portfolio due in 2027?`,
      a: `Portfolios are due in the AP Digital Portfolio by ${DEADLINE}. Your teacher must also forward your portfolio to College Board, so finish early. Check College Board for any changes.`,
    },
    lengthFaq: {
      q: `Is there a written exam for ${o.name}?`,
      a: 'No. There is no timed test. Your score comes entirely from the digital portfolio: the Sustained Investigation (60%) and Selected Works (40%), each with short written statements.',
    },
    faq: [
      {
        q: 'What is a Sustained Investigation?',
        a: 'A body of 15 images driven by a question you choose, showing practice, experimentation and revision over the year. You also write briefly about your inquiry and how the work developed. It is 60% of your score.',
      },
      ...o.faq,
    ],
  };
}
