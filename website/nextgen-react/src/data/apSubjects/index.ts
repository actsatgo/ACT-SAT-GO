import type { FaqItem } from '../faq';
import type { ApSubject } from './types';
import { AFRICAN_AMERICAN_STUDIES } from './africanAmericanStudies';
import { ART_2D } from './art2d';
import { ART_3D } from './art3d';
import { ART_HISTORY } from './artHistory';
import { BIOLOGY } from './biology';
import { BUSINESS_PERSONAL_FINANCE } from './businessPersonalFinance';
import { CALCULUS_AB } from './calculusAb';
import { CALCULUS_BC } from './calculusBc';
import { CHEMISTRY } from './chemistry';
import { CHINESE_LANGUAGE } from './chineseLanguage';
import { COMPARATIVE_GOVERNMENT } from './comparativeGovernment';
import { COMPUTER_SCIENCE_A } from './computerScienceA';
import { COMPUTER_SCIENCE_PRINCIPLES } from './computerSciencePrinciples';
import { CYBERSECURITY } from './cybersecurity';
import { DRAWING } from './drawing';
import { ENGLISH_LANGUAGE } from './englishLanguage';
import { ENGLISH_LITERATURE } from './englishLiterature';
import { ENVIRONMENTAL_SCIENCE } from './environmentalScience';
import { EUROPEAN_HISTORY } from './europeanHistory';
import { FRENCH_LANGUAGE } from './frenchLanguage';
import { GERMAN_LANGUAGE } from './germanLanguage';
import { HUMAN_GEOGRAPHY } from './humanGeography';
import { ITALIAN_LANGUAGE } from './italianLanguage';
import { JAPANESE_LANGUAGE } from './japaneseLanguage';
import { LATIN } from './latin';
import { MACROECONOMICS } from './macroeconomics';
import { MICROECONOMICS } from './microeconomics';
import { MUSIC_THEORY } from './musicTheory';
import { PHYSICS_1 } from './physics1';
import { PHYSICS_2 } from './physics2';
import { PHYSICS_C_EM } from './physicsCEm';
import { PHYSICS_C_MECHANICS } from './physicsCMechanics';
import { PRECALCULUS } from './precalculus';
import { PSYCHOLOGY } from './psychology';
import { RESEARCH } from './research';
import { SEMINAR } from './seminar';
import { SPANISH_LANGUAGE } from './spanishLanguage';
import { SPANISH_LITERATURE } from './spanishLiterature';
import { STATISTICS } from './statistics';
import { US_GOVERNMENT } from './usGovernment';
import { US_HISTORY } from './usHistory';
import { WORLD_HISTORY } from './worldHistory';

export type { ApSubject } from './types';

/** AP subject pages at /ap/:slug, in the same order as the Resources page (AP_GUIDES). */
export const AP_SUBJECTS: ApSubject[] = [
  CALCULUS_AB,
  CALCULUS_BC,
  PRECALCULUS,
  STATISTICS,
  COMPUTER_SCIENCE_A,
  COMPUTER_SCIENCE_PRINCIPLES,
  BIOLOGY,
  CHEMISTRY,
  ENVIRONMENTAL_SCIENCE,
  PHYSICS_1,
  PHYSICS_2,
  PHYSICS_C_MECHANICS,
  PHYSICS_C_EM,
  ENGLISH_LANGUAGE,
  ENGLISH_LITERATURE,
  AFRICAN_AMERICAN_STUDIES,
  COMPARATIVE_GOVERNMENT,
  EUROPEAN_HISTORY,
  HUMAN_GEOGRAPHY,
  MACROECONOMICS,
  MICROECONOMICS,
  PSYCHOLOGY,
  US_GOVERNMENT,
  US_HISTORY,
  WORLD_HISTORY,
  CHINESE_LANGUAGE,
  FRENCH_LANGUAGE,
  GERMAN_LANGUAGE,
  ITALIAN_LANGUAGE,
  JAPANESE_LANGUAGE,
  LATIN,
  SPANISH_LANGUAGE,
  SPANISH_LITERATURE,
  ART_2D,
  ART_3D,
  DRAWING,
  ART_HISTORY,
  MUSIC_THEORY,
  SEMINAR,
  RESEARCH,
  BUSINESS_PERSONAL_FINANCE,
  CYBERSECURITY,
];

export const AP_SUBJECT_BY_SLUG: Record<string, ApSubject> = Object.fromEntries(AP_SUBJECTS.map((s) => [s.slug, s]));

/** Subject page for an AP guide PDF, when one exists. */
export const AP_SUBJECT_BY_GUIDE: Record<string, ApSubject> = Object.fromEntries(AP_SUBJECTS.map((s) => [s.guideSlug, s]));

export const apSubjectPath = (slug: string) => `/ap/${slug}`;

/** The page's FAQ: date, length and scores from the subject data, then its own questions. */
export function apSubjectFaq(s: ApSubject): FaqItem[] {
  return [
    s.dateFaq ?? {
      q: `When is the ${s.name} exam in 2027?`,
      a: `${s.examDate}. Morning sessions start at 8 a.m. and afternoon sessions at 12 p.m. local time; confirm your exact start time with your school's AP coordinator.`,
    },
    s.lengthFaq ?? {
      q: `How long is the ${s.name} exam?`,
      a: `${s.length.charAt(0).toUpperCase()}${s.length.slice(1)}. ${s.structure.map((r) => `${r.section.replace(/^[IVAB]+ · /, '')}: ${r.timing}, ${r.weight} of the score`).join('; ')}.`,
    },
    s.scores
      ? {
          q: `What percent of students pass ${s.name}?`,
          a: `In recent years, ${s.scores.threePlus} of students earned a 3 or higher and ${s.scores.fives} earned a 5. Many colleges accept a 3 or higher for credit or placement, but policies vary, so check each college's AP policy.`,
        }
      : {
          q: `What is a good score on ${s.name}?`,
          a: `${s.name} is a new AP course, so national score history is still building. It is scored on the same 1–5 scale as every AP exam, and many colleges accept a 3 or higher for credit or placement; check each college's AP policy.`,
        },
    ...s.faq,
  ];
}
