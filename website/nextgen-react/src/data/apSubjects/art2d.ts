import { artPortfolio } from './art';

export const ART_2D = artPortfolio({
  slug: '2-d-art-and-design',
  guideSlug: 'ap-2-d-art-and-design-exam-guide-act-sat-go',
  name: 'AP 2-D Art and Design',
  skills: '2-D design skills',
  media: '2-D work includes graphic design, photography, collage, fabric and fashion design, illustration, painting and printmaking.',
  skillCards: [
    { name: 'Elements', about: 'Point, line, shape, color, value, texture and space.' },
    { name: 'Principles', about: 'Unity, variety, balance, emphasis, contrast and rhythm.' },
    { name: 'Hierarchy', about: 'Leading the eye through a composition.' },
    { name: 'Figure-ground', about: 'The relationship between subject and space.' },
  ],
  selectedImages: '5 digital images',
  photoTip: "Use even light, a neutral background, sharp focus and true color. Crop out everything that isn't the artwork.",
  scores: { threePlus: '83–85%', fives: '12%' },
  practice: [
    {
      topic: 'Inquiry',
      question: 'Which is the strongest guiding inquiry for a Sustained Investigation?',
      choices: ['Photos of my city', 'Graphic design', 'My summer vacation', 'How can color temperature change the mood of the same street at different times?'],
      answer: 'D',
      why: 'It is an open, exploratory question about a specific design choice (color temperature and mood). The others are subjects or themes.',
    },
    {
      topic: 'Design principles',
      question: 'An asymmetrical composition that still feels stable shows:',
      choices: ['radial balance', 'informal (asymmetrical) balance', 'pattern', 'unity through repetition only'],
      answer: 'B',
      why: 'Asymmetrical (informal) balance distributes visual weight unevenly but still feels stable.',
    },
    {
      topic: 'Evidence',
      question: 'Which image best shows revision?',
      choices: ['Two versions of a poster, the second with clearer hierarchy after feedback', 'A photo of your sketchbook cover', 'A list of materials', 'A copy of a famous logo'],
      answer: 'A',
      why: 'A before-and-after showing a change in response to feedback is clear evidence of revision.',
    },
  ],
  faq: [
    {
      q: 'Can photography be submitted for AP 2-D Art and Design?',
      a: 'Yes. The 2-D portfolio accepts graphic design, photography, collage, fabric and fashion design, illustration, painting and printmaking. Any photo of someone else\'s work used as a reference must be significantly transformed and cited.',
    },
  ],
});
