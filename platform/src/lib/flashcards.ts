import { randomUUID } from 'crypto'
import { NextResponse } from 'next/server'
import type { User } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { redis } from '@/lib/redis'

// Flashcards — shared rules for the /api/flashcards routes.
//
// Who can do what:
//  - TUTOR: create decks; edit/delete/share only their own decks; share only
//    with students assigned to them.
//  - ADMIN / SUPER_ADMIN: everything, with any student.
//  - STUDENT: read decks shared with them and save their own study progress.

export const LIMITS = {
  title: 120,
  topic: 120,
  subject: 60,
  description: 5000,
  cardText: 2000,
  cards: 200,
}

export const isAdmin = (u: User) => u.role === 'ADMIN' || u.role === 'SUPER_ADMIN'
export const canAuthor = (u: User) => isAdmin(u) || u.role === 'TUTOR'

export function canManageDeck(u: User, deck: { createdById: string }) {
  return isAdmin(u) || deck.createdById === u.id
}

export const json = (body: unknown, status = 200) => NextResponse.json(body, { status })

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

/**
 * Keeps only the student ids this user may share with: any active student for
 * admins, the tutor's assigned students for tutors.
 */
export async function allowedStudentIds(u: User, requested: unknown): Promise<string[]> {
  const ids = Array.isArray(requested) ? [...new Set(requested.filter((x): x is string => typeof x === 'string'))] : []
  if (ids.length === 0) return []
  if (isAdmin(u)) {
    const rows = await prisma.user.findMany({
      where: { id: { in: ids }, role: 'STUDENT', deletedAt: null },
      select: { id: true },
    })
    return rows.map((r) => r.id)
  }
  const rows = await prisma.tutorAssignment.findMany({
    where: { tutorId: u.id, studentId: { in: ids }, student: { deletedAt: null } },
    select: { studentId: true },
  })
  return rows.map((r) => r.studentId)
}

/** In-app notification (same Redis list the notification bell reads) + durable DB copy. */
export async function notifyStudentsOfDeck(
  studentIds: string[],
  deck: { id: string; title: string; topic: string; cardCount: number },
  sharedBy: string,
) {
  const title = 'New flashcards to study'
  const body = `${sharedBy} shared "${deck.title}" (${deck.cardCount} card${deck.cardCount === 1 ? '' : 's'} on ${deck.topic}).`
  await Promise.all(
    studentIds.map(async (userId) => {
      try {
        await prisma.notification.create({
          data: { userId, type: 'TUTOR_ANNOUNCEMENT', title, body, link: `/flashcards/${deck.id}`, read: false },
        })
      } catch (e) {
        console.error('[flashcards] DB notification failed', e)
      }
      try {
        const notifId = randomUUID()
        const n = { id: notifId, userId, type: 'TUTOR_ANNOUNCEMENT', title, body, link: `/flashcards/${deck.id}`, read: false, createdAt: new Date().toISOString() }
        await redis.set(`notif:${notifId}`, JSON.stringify(n), { ex: 2_592_000 }) // 30 days
        await redis.lpush(`user_notifs:${userId}`, notifId)
      } catch (e) {
        console.error('[flashcards] in-app notification failed', e)
      }
    }),
  )
}

export function knownCount(known: unknown, cardIds: Set<string>): number {
  return Array.isArray(known) ? known.filter((id) => typeof id === 'string' && cardIds.has(id)).length : 0
}
