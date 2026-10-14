import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'
import { ensureFlashcardTables } from '@/lib/flashcardTables'
import { json } from '@/lib/flashcards'

// PUT /api/flashcards/:deckId/progress  { knownCardIds: string[] }
// A student saves which cards they've marked "Got it". Only ids of cards that
// belong to the deck are kept.

export async function PUT(request: NextRequest, { params }: { params: Promise<{ deckId: string }> }) {
  const { deckId } = await params
  try {
    const user = await getCurrentUser(request)
    if (!user) return json({ error: 'Authentication required' }, 401)
    await ensureFlashcardTables()
    const share = await prisma.flashcardShare.findUnique({
      where: { deckId_studentId: { deckId, studentId: user.id } },
      select: { id: true, viewedAt: true },
    })
    if (!share) return json({ error: 'This deck has not been shared with you' }, 403)

    const body = (await request.json().catch(() => null)) as { knownCardIds?: unknown } | null
    if (!Array.isArray(body?.knownCardIds)) return json({ error: 'knownCardIds[] is required' }, 400)
    const cardIds = new Set(
      (await prisma.flashcardCard.findMany({ where: { deckId }, select: { id: true } })).map((c) => c.id),
    )
    const known = [...new Set(body!.knownCardIds.filter((id): id is string => typeof id === 'string' && cardIds.has(id)))]
    const now = new Date()
    await prisma.flashcardShare.update({
      where: { id: share.id },
      data: { knownCardIds: known, lastStudiedAt: now, ...(share.viewedAt ? {} : { viewedAt: now }) },
    })
    return json({ knownCount: known.length, cardCount: cardIds.size })
  } catch (err) {
    console.error('PUT /api/flashcards/[deckId]/progress:', err)
    return json({ error: 'Failed to save progress' }, 500)
  }
}
