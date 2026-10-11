import { allowedStudentIds, canAuthor, canManage, isAdmin, json, notifyUsers } from '@/lib/studentSharing'

// Flashcards — rules for the /api/flashcards routes. Who-can-do-what lives in
// lib/studentSharing.ts (shared with articles).

export { allowedStudentIds, canAuthor, isAdmin, json }
export const canManageDeck = canManage

export const LIMITS = {
  title: 120,
  topic: 120,
  subject: 60,
  description: 5000,
  cardText: 2000,
  cards: 200,
}

export interface CardInput { front: string; back: string }
export interface DeckInput {
  title: string
  topic: string
  description: string | null
  subject: string | null
  cards: CardInput[]
}

/** Validates and normalises a create/update body. Returns an error message or the clean input. */
export function parseDeckInput(body: unknown): { error: string } | { value: DeckInput } {
  const b = (body ?? {}) as Record<string, unknown>
  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')
  const title = str(b.title)
  const topic = str(b.topic)
  const description = str(b.description) || null
  const subject = str(b.subject) || null
  if (!title) return { error: 'Title is required' }
  if (!topic) return { error: 'Topic is required' }
  if (title.length > LIMITS.title) return { error: `Title must be at most ${LIMITS.title} characters` }
  if (topic.length > LIMITS.topic) return { error: `Topic must be at most ${LIMITS.topic} characters` }
  if (subject && subject.length > LIMITS.subject) return { error: `Subject must be at most ${LIMITS.subject} characters` }
  if (description && description.length > LIMITS.description) {
    return { error: `Topic info must be at most ${LIMITS.description} characters` }
  }
  if (!Array.isArray(b.cards)) return { error: 'cards[] is required' }
  const cards: CardInput[] = []
  for (const raw of b.cards as unknown[]) {
    const c = (raw ?? {}) as Record<string, unknown>
    const front = str(c.front)
    const back = str(c.back)
    if (!front && !back) continue // ignore completely empty rows
    if (!front || !back) return { error: 'Every card needs both a front and a back' }
    if (front.length > LIMITS.cardText || back.length > LIMITS.cardText) {
      return { error: `Card text must be at most ${LIMITS.cardText} characters per side` }
    }
    cards.push({ front, back })
  }
  if (cards.length === 0) return { error: 'Add at least one card' }
  if (cards.length > LIMITS.cards) return { error: `A deck can have at most ${LIMITS.cards} cards` }
  return { value: { title, topic, description, subject, cards } }
}

/** Notifies students that a deck was shared with them (links to the deck). */
export async function notifyStudentsOfDeck(
  studentIds: string[],
  deck: { id: string; title: string; topic: string; cardCount: number },
  sharedBy: string,
) {
  await notifyUsers(studentIds, {
    title: 'New flashcards to study',
    body: `${sharedBy} shared "${deck.title}" (${deck.cardCount} card${deck.cardCount === 1 ? '' : 's'} on ${deck.topic}).`,
    link: `/flashcards/${deck.id}`,
  })
}

export function knownCount(known: unknown, cardIds: Set<string>): number {
  return Array.isArray(known) ? known.filter((id) => typeof id === 'string' && cardIds.has(id)).length : 0
}
