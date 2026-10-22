import type { FaqItem } from '../faq';
import type { ApSubject } from './types';
import { BIOLOGY } from './biology';
import { CALCULUS_AB } from './calculusAb';
import { CHEMISTRY } from './chemistry';
import { ENGLISH_LANGUAGE } from './englishLanguage';
import { PHYSICS_1 } from './physics1';
import { PRECALCULUS } from './precalculus';
import { PSYCHOLOGY } from './psychology';
import { STATISTICS } from './statistics';
import { US_HISTORY } from './usHistory';
import { WORLD_HISTORY } from './worldHistory';

export type { ApSubject } from './types';

/** AP subject pages at /ap/:slug, in the order they are listed. */
export const AP_SUBJECTS: ApSubject[] = [
  CALCULUS_AB,
  PRECALCULUS,
  STATISTICS,
  BIOLOGY,
  CHEMISTRY,
  PHYSICS_1,
  ENGLISH_LANGUAGE,
  US_HISTORY,
  WORLD_HISTORY,
  PSYCHOLOGY,
];

export const AP_SUBJECT_BY_SLUG: Record<string, ApSubject> = Object.fromEntries(AP_SUBJECTS.map((s) => [s.slug, s]));

/** Subject page for an AP guide PDF, when one exists. */
export const AP_SUBJECT_BY_GUIDE: Record<string, ApSubject> = Object.fromEntries(AP_SUBJECTS.map((s) => [s.guideSlug, s]));

export const apSubjectPath = (slug: string) => `/ap/${slug}`;

/** The page's FAQ: date, length and scores from the subject data, then its own questions. */
export function apSubjectFaq(s: ApSubject): FaqItem[] {
  return [
    {
      q: `When is the ${s.name} exam in 2027?`,
      a: `${s.examDate}. Morning sessions start at 8 a.m. and afternoon sessions at 12 p.m. local time; confirm your exact start time with your school's AP coordinator.`,
    },
    {
      q: `How long is the ${s.name} exam?`,
      a: `${s.length.charAt(0).toUpperCase()}${s.length.slice(1)}. ${s.structure.map((r) => `${r.section.replace(/^[IVAB]+ · /, '')}: ${r.timing}, ${r.weight} of the score`).join('; ')}.`,
    },
    {
      q: `What percent of students pass ${s.name}?`,
      a: `In recent years, ${s.scores.threePlus} of students earned a 3 or higher and ${s.scores.fives} earned a 5. Many colleges accept a 3 or higher for credit or placement, but policies vary, so check each college's AP policy.`,
    },
    ...s.faq,
  ];
}
