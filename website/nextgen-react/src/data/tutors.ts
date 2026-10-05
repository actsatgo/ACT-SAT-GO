// Lead tutor profiles shown on the homepage and program pages.
// Parents buy the tutor, not the company: add 4–6 real profiles here (with each
// tutor's written permission) and the "Meet your tutors" section appears
// automatically. It stays hidden while this list is empty — never publish
// placeholder people.
//
// Example:
// {
//   name: 'Jane Doe',
//   photo: '/tutors/jane-doe.webp',        // put the file in public/tutors/
//   role: 'Lead Digital SAT Math Tutor',
//   education: 'B.S. Mathematics, University of Michigan',
//   scores: 'SAT 1580 (800 Math)',
//   experience: '7 years teaching US students · 300+ students',
//   specialty: 'Turning 650 Math scores into 750+',
//   exams: ['SAT', 'ACT'],
// },

export interface Tutor {
  name: string;
  photo?: string;
  role: string;
  education: string;
  scores?: string;
  experience: string;
  specialty?: string;
  exams: string[];
}

export const TUTORS: Tutor[] = [];
