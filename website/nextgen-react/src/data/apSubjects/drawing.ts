import { artPortfolio } from './art';

export const DRAWING = artPortfolio({
  slug: 'drawing',
  guideSlug: 'ap-drawing-exam-guide-act-sat-go',
  name: 'AP Drawing',
  skills: 'drawing skills',
  media: 'Drawing includes painting, printmaking, illustration, animation, fibers and other mark-making media.',
  skillCards: [
    { name: 'Mark-making', about: 'Line quality, gesture and expressive marks.' },
    { name: 'Value & light', about: 'Light and shade to create form and mood.' },
    { name: 'Space & depth', about: 'Perspective, overlap and scale.' },
    { name: 'Composition', about: 'Arranging the surface with purpose.' },
  ],
  selectedImages: '5 digital images',
  photoTip: "Use even light, a neutral background, sharp focus and true color, with no glare on graphite or charcoal. Crop out everything that isn't the artwork.",
  scores: { threePlus: '83–84%', fives: '16–17%' },
  practice: [
    {
      topic: 'Inquiry',
      question: 'Which is the strongest guiding inquiry for a Sustained Investigation?',
      choices: ['My dog', 'Drawings of flowers', 'Things I like', 'How can changes in line weight show emotional tension in portraits?'],
      answer: 'D',
      why: 'It is an open, exploratory question about a specific drawing decision. The others are subjects or themes.',
    },
    {
      topic: 'Drawing skills',
      question: 'Which best describes the drawing skill of using light and shade to create the illusion of form?',
      choices: ['Gesture', 'Collage', 'Value and modeling', 'Typography'],
      answer: 'C · Value and modeling',
      why: 'Value and modeling use light and shade to suggest three-dimensional form.',
    },
    {
      topic: 'Revision',
      question: 'Which statement best shows revision in written evidence?',
      choices: ['"I finished the drawing."', '"After critique, I reduced detail in the background so the figure\'s gesture became the focus."', '"I like this one most."', '"It took three hours."'],
      answer: 'B',
      why: 'It names a specific change and the reason for it, which is clear evidence of revision.',
    },
  ],
  faq: [
    {
      q: 'Can painting be submitted for AP Drawing?',
      a: 'Yes. AP Drawing includes painting, printmaking, illustration, animation, fibers and other mark-making media. What matters is how well the work shows drawing skills such as mark-making, value, space and composition.',
    },
  ],
});
