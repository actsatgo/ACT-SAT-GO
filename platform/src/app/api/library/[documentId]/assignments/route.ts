import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireRole } from '@/lib/auth'

export const dynamic = 'force-dynamic'

// PUT /api/library/:documentId/assignments — admin only.
// Body: { userIds: string[] } — replaces who the document is assigned to.
// Only active students and tutors can be assignees (admins already see everything).
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ documentId: string }> },
) {
  const auth = await requireRole(request, ['ADMIN', 'SUPER_ADMIN'])
  if (auth instanceof NextResponse) return auth
  const { documentId } = await params

  let body: { userIds?: unknown }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
  if (!Array.isArray(body.userIds) || body.userIds.some((u) => typeof u !== 'string')) {
    return NextResponse.json({ error: 'userIds must be an array of user ids' }, { status: 400 })
  }
  const requested = [...new Set(body.userIds as string[])]

  try {
    const doc = await prisma.libraryDocument.findUnique({ where: { id: documentId }, select: { id: true } })
    if (!doc) return NextResponse.json({ error: 'Document not found' }, { status: 404 })

    const valid = await prisma.user.findMany({
      where: { id: { in: requested }, role: { in: ['STUDENT', 'TUTOR'] }, deletedAt: null },
      select: { id: true },
    })
    const userIds = valid.map((u) => u.id)

    await prisma.$transaction([
      prisma.libraryAssignment.deleteMany({ where: { documentId, userId: { notIn: userIds } } }),
      prisma.libraryAssignment.createMany({
        data: userIds.map((userId) => ({ documentId, userId, assignedById: auth.id })),
        skipDuplicates: true,
      }),
    ])

    const assignees = await prisma.libraryAssignment.findMany({
      where: { documentId },
      select: { user: { select: { id: true, name: true, email: true, role: true } } },
    })
    return NextResponse.json({ assignees: assignees.map((a) => a.user) })
  } catch (error) {
    console.error('PUT /api/library/[documentId]/assignments:', error)
    return NextResponse.json({ error: 'Failed to update assignments' }, { status: 500 })
  }
}
