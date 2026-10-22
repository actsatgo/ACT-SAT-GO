import type { ApSubject } from './types';

export const MUSIC_THEORY: ApSubject = {
  slug: 'music-theory',
  guideSlug: 'ap-music-theory-exam-guide-act-sat-go',
  name: 'AP Music Theory',
  metaTitle: 'AP Music Theory Exam Guide 2027: Format, Dictation & Sight-Singing | ACT SAT GO',
  description:
    'The AP Music Theory exam explained: 75 multiple-choice questions, 7 written tasks and 2 sight-singing melodies, all 8 units from fundamentals to form, part-writing rules, common traps and a study plan to May 2027.',
  updated: '2026-10-22',
  intro:
    'The AP Music Theory exam combines 75 multiple-choice questions (45%), 7 written free-response tasks (45%) and 2 recorded sight-singing melodies (10%). More than half of the exam involves listening to recorded music, and you write notation by hand. Part-writing follows 18th-century voice-leading rules, and every task type is the same each year, so you can practice each one on purpose. About 59–61% of students score 3 or higher.',
  examDate: 'Monday, May 10, 2027 (afternoon session)',
  length: 'about 2 hours 40 minutes',
  glance: [
    { value: '75 Q', label: 'multiple choice, about 42 of them aural' },
    { value: '7 + 2', label: 'written tasks + sight-singing melodies' },
    { value: '8 units', label: 'fundamentals to secondary function and form' },
    { value: '59–61%', label: 'scored 3 or higher in recent years' },
  ],
  structure: [
    { section: 'I · Multiple choice', weight: '45%', timing: 'about 80 min · 75 questions', what: 'About 41–43 aural questions on recorded music (about 45 min) and 32–34 non-aural questions on printed scores (35 min).' },
    { section: 'IIA · Written free response', weight: '45%', timing: '7 tasks', what: '2 melodic dictations, 2 harmonic dictations, 1 figured-bass part-writing, 1 Roman-numeral part-writing and 1 melody harmonization.' },
    { section: 'IIB · Sight-singing', weight: '10%', timing: '2 melodies', what: 'Sing two short diatonic melodies (4–8 measures). You get 75 seconds to practice and 30 seconds to perform each one, recorded.' },
  ],
  formatNotes: [
    { title: 'Listen carefully, write by hand', text: 'Recorded music is played during the exam, and you write notation by hand. Practice dictation with a timer and the exact number of playings used on the exam.' },
    { title: 'Common-practice style', text: 'Part-writing follows 18th-century voice-leading rules: avoid parallel fifths and octaves, resolve leading tones, and keep voices in range.' },
  ],
  mcq: {
    intro: "75 questions in about 80 minutes, split between listening to recorded music and reading printed scores. More than half are aural, so strong ear training (intervals, chord qualities, cadences) is the biggest single lever on your score. Aural questions can't be replayed on demand. Wrong answers lose no points.",
    tips: [
      'Listen for the bass line first when identifying chords and cadences.',
      'Sing the tonic in your head before every aural question.',
      'Know your cadences: authentic, plagal, half and deceptive.',
      'For score questions, check the key signature and look for accidentals that signal modulation or secondary dominants.',
      'Count intervals carefully: size first, then quality.',
      'Never leave a blank. There is no penalty for guessing.',
    ],
  },
  units: [
    { name: 'Music Fundamentals I', weight: '', about: 'Pitch, major scales, rhythm and meter.', skills: 'Read treble, bass, alto and tenor clefs; write major scales and key signatures; identify simple and compound meter.' },
    { name: 'Music Fundamentals II', weight: '', about: 'Minor scales, melody, timbre and texture.', skills: 'Write the three forms of minor scales; identify intervals; describe melody, timbre and texture.' },
    { name: 'Music Fundamentals III', weight: '', about: 'Triads and seventh chords.', skills: 'Spell and identify triads and seventh chords in all inversions; use Roman and figured-bass symbols.' },
    { name: 'Harmony & Voice Leading I', weight: '', about: 'Chord function, cadence and phrase.', skills: 'Identify tonic and dominant function; name cadence types; write four-part harmony with correct voice leading.' },
    { name: 'Harmony & Voice Leading II', weight: '', about: 'Progressions and predominant function.', skills: 'Use predominant chords; follow common progressions; avoid parallel fifths and octaves.' },
    { name: 'Harmony & Voice Leading III', weight: '', about: 'Embellishments, motives and devices.', skills: 'Identify non-chord tones; use cadential 6/4 chords; recognize motivic development and sequences.' },
    { name: 'Harmony & Voice Leading IV', weight: '', about: 'Secondary function.', skills: 'Spell and resolve secondary dominants and leading-tone chords; identify tonicization.' },
    { name: 'Modes & Form', weight: '', about: 'Modes, phrase structure and form.', skills: 'Identify modes; describe phrase relationships (periods); recognize binary, ternary and other forms.' },
  ],
  unitsNote: "College Board doesn't publish unit weights for Music Theory. The course builds from fundamentals to harmony and form, and every later unit depends on fluent interval, scale and chord spelling from Units 1–3.",
  frq: {
    title: 'The free-response tasks',
    intro: 'Seven written tasks (45%) and two sung melodies (10%). Each task type is the same every year, so you can practice each one on purpose.',
    types: [
      { label: 'MD ×2', title: 'Melodic dictation', text: 'Notate a melody played several times, given the key, meter and first note.', tip: 'Write the rhythm first, then the scale degrees.' },
      { label: 'HD ×2', title: 'Harmonic dictation', text: 'Notate the soprano and bass lines and give Roman numerals for a short progression.', tip: 'Bass line and cadence first; they anchor everything else.' },
      { label: 'PW ×2', title: 'Part-writing', text: 'Write four-part harmony from a figured bass or a Roman-numeral progression, following voice-leading rules.', tip: 'Check for parallels and resolve the leading tone up.' },
      { label: 'HM', title: 'Melody harmonization', text: 'Choose chords to harmonize a given melody, with a bass line and Roman numerals, ending with an appropriate cadence.', tip: 'Plan the cadence before choosing the opening chords.' },
      { label: 'Sing ×2', title: 'Sight-singing', text: 'Sing two short diatonic melodies, recorded. You may sing aloud during the 75-second preparation.', tip: 'Keep going after a mistake. Stopping costs more than a wrong note.' },
    ],
    timePlan: 'For each sight-singing melody: about 10 seconds to find the tonic, 65 seconds to practice and 30 seconds to perform. Keep a steady tempo; rhythm counts as much as pitch.',
  },
  habits: [
    'Write the bass line and cadence first.',
    'Check every pair of voices for parallel 5ths and 8ves.',
    'Resolve the leading tone and chordal sevenths.',
    'Keep each voice within its range.',
    'Stuck in dictation? Notate rhythm; it still earns credit.',
  ],
  traps: [
    { title: 'Parallel 5ths and 8ves', text: 'Two voices moving in parallel perfect fifths or octaves is the most common part-writing error.' },
    { title: 'Unresolved leading tone', text: 'In an outer voice, the leading tone should resolve up to tonic at a cadence.' },
    { title: 'Doubling the leading tone', text: 'Never double the leading tone; it creates parallel octaves when both resolve.' },
    { title: 'Voice crossing and spacing', text: 'Keep voices in order (S above A above T) and adjacent upper voices within an octave.' },
    { title: 'Wrong minor-key harmony', text: 'In minor, raise the leading tone in V and vii°, using harmonic minor.' },
    { title: 'Interval quality', text: 'Count size first, then check quality: major, minor, perfect, augmented or diminished.' },
    { title: 'Mixing up cadences', text: 'V–I authentic; IV–I plagal; ends on V half; V–vi deceptive.' },
    { title: 'Rhythm last in dictation', text: 'Getting the rhythm right first anchors the pitches and earns points on its own.' },
    { title: 'Stopping when sight-singing', text: 'Keep a steady beat and recover. Stopping or restarting costs points.' },
    { title: 'Ignoring the key signature', text: 'Check the key before every score question; accidentals often signal secondary chords.' },
  ],
  roadmap: [
    { when: 'Sep – Oct', focus: 'Units 1–3: fundamentals', text: 'Clefs, scales, intervals, triads and seventh chords. Start daily ear training and sight-singing.' },
    { when: 'Nov – Dec', focus: 'Units 4–5: harmony', text: 'Chord function, cadences and four-part writing. Begin melodic dictation practice.' },
    { when: 'Jan – Feb', focus: 'Unit 6: embellishments', text: 'Non-chord tones, cadential 6/4 and figured bass. Begin harmonic dictation.' },
    { when: 'Mar – Apr', focus: 'Units 7–8: secondary function + form', text: 'Secondary dominants, modes and form. Take timed aural and non-aural sets.' },
    { when: 'Early May', focus: 'Full practice', text: 'All free-response task types under timing. Record yourself sight-singing and review it.' },
  ],
  scores: { threePlus: '59–61%', fives: '18–19%' },
  practice: [
    {
      topic: 'Intervals',
      question: 'What is the interval from F♯ up to D?',
      choices: ['Major 6th', 'Augmented 5th', 'Diminished 7th', 'Minor 6th'],
      answer: 'D · Minor 6th',
      why: 'F to D is a major 6th (F G A B C D). Raising F to F♯ shrinks it by a half step: a minor 6th.',
    },
    {
      topic: 'Chords',
      question: 'The notes B♭–D–F–A♭ form which seventh chord?',
      choices: ['Major seventh', 'Minor seventh', 'Dominant seventh', 'Half-diminished seventh'],
      answer: 'C · Dominant seventh',
      why: 'B♭–D–F is a major triad, and A♭ is a minor seventh above B♭. Major triad + minor 7th = dominant seventh.',
    },
    {
      topic: 'Secondary function',
      question: 'In D major, which chord is V/V?',
      choices: ['E major', 'A major', 'B minor', 'G major'],
      answer: 'A · E major',
      why: 'V in D major is A major. The V of A is E major (E–G♯–B), which tonicizes A.',
    },
  ],
  faq: [
    {
      q: 'Do I need to play an instrument for AP Music Theory?',
      a: "It helps but isn't required. You do need to read music in several clefs, and the exam includes two recorded sight-singing melodies (10% of your score), so daily singing and ear-training practice matter more than instrument skill.",
    },
    {
      q: 'What is sight-singing on the AP Music Theory exam?',
      a: 'You sing two short diatonic melodies (4–8 measures). For each one you get 75 seconds to practice, aloud if you like, and 30 seconds to perform while being recorded. Keeping a steady tempo and recovering from mistakes earns the most points.',
    },
  ],
};
