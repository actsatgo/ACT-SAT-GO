import { artPortfolio } from './art';

export const ART_3D = artPortfolio({
  slug: '3-d-art-and-design',
  guideSlug: 'ap-3-d-art-and-design-exam-guide-act-sat-go',
  name: 'AP 3-D Art and Design',
  skills: '3-D design skills',
  media: '3-D work includes sculpture, ceramics, architecture, installation, jewelry, fashion and product design, and more.',
  skillCards: [
    { name: 'Form & volume', about: 'Mass, shape and space in three dimensions.' },
    { name: 'Materials', about: 'Structure, surface and how materials behave.' },
    { name: 'Space', about: 'Positive and negative space; viewpoints.' },
    { name: 'Principles', about: 'Balance, rhythm, emphasis and scale.' },
  ],
  selectedImages: '5 works × 2 views = 10 images',
  photoTip: 'Show each work from two views that reveal its form in space. Use even light and a neutral background so depth and surface read clearly.',
  scores: { threePlus: '72–75%', fives: '7%' },
  practice: [
    {
      topic: 'Portfolio structure',
      question: 'How many images are required for 3-D Selected Works?',
      choices: ['5', '10', '15', '20'],
      answer: 'B · 10',
      why: 'Five works, each shown in two views: 5 × 2 = 10 images.',
    },
    {
      topic: '3-D concepts',
      question: 'The empty spaces within and around a sculpture are called:',
      choices: ['positive space', 'texture', 'negative space', 'value'],
      answer: 'C · negative space',
      why: 'Negative space is the empty space within and around a form.',
    },
    {
      topic: 'Process',
      question: 'A small, quick model used to test a sculpture idea is a:',
      choices: ['collage', 'maquette', 'monoprint', 'storyboard'],
      answer: 'B · maquette',
      why: 'A maquette is a small preliminary model. Several maquettes testing materials for the same form are strong evidence of experimentation.',
    },
  ],
  faq: [
    {
      q: 'Why does AP 3-D Art and Design need two views of each work?',
      a: 'Selected Works are shown in two views each (10 images for 5 works) because one photo cannot show form and space in three dimensions. Choose angles that reveal depth, structure and surface.',
    },
  ],
});
