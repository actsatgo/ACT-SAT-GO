import { numericValuesEqual } from '@/lib/numericAnswer'

// Grades a stored answer against a question's answer key. Shared by section
// scoring (submit route) and visit-level time analytics, so both always agree
// on what "correct" means.

export type AnswerJson = { key?: string; keys?: string[]; value?: number; values?: number[] } | null

export function isAnswerCorrect(given: unknown, correct: unknown): boolean {
  if (!given || !correct) return false;
  const g = given as AnswerJson;
  const c = correct as AnswerJson;
  if (!g || !c) return false;
  
  // Numeric (supports fraction answers, decimal-equivalent with tolerance).
  // A question may accept several distinct correct values — matches if the
  // given answer equals any one of them.
  if (c.value !== undefined) {
    if (g.value === undefined) return false;
    if (Array.isArray(c.values) && c.values.length > 0) {
      return c.values.some((v) => numericValuesEqual(g.value, v));
    }
    return numericValuesEqual(g.value, c.value);
  }

  // MSQ — order-independent, case-insensitive
  if (Array.isArray(c.keys)) {
    if (!Array.isArray(g.keys)) return false;
    const gKeys = g.keys.map((k) => String(k).toUpperCase().trim()).sort();
    const cKeys = c.keys.map((k) => String(k).toUpperCase().trim()).sort();
    return JSON.stringify(gKeys) === JSON.stringify(cKeys);
  }
  
  // MCQ — case-insensitive
  if (c.key !== undefined) {
    if (g.key === undefined) return false;
    return String(g.key).toUpperCase().trim() === String(c.key).toUpperCase().trim();
  }
  
  return false;
}
