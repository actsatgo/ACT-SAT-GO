import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireUser } from '@/lib/auth'
import { STORAGE_NOT_CONFIGURED, isLibraryAdmin, libraryStorage } from '@/lib/library'

export const dynamic = 'force-dynamic'

// GET /api/library/:documentId/file — the PDF bytes, for the in-app viewer.
// Admins can open any document; students and tutors only ones assigned to them.
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ documentId: string }> },
) {
  const auth = await requireUser(request)
  if (auth instanceof NextResponse) return auth
  const { documentId } = await params

  const doc = await prisma.libraryDocument.findUnique({ where: { id: documentId } })
  if (!doc) return NextResponse.json({ error: 'Document not found' }, { status: 404 })

  if (!isLibraryAdmin(auth)) {
    const assigned = await prisma.libraryAssignment.findUnique({
      where: { documentId_userId: { documentId, userId: auth.id } },
      select: { id: true },
    })
    if (!assigned) return NextResponse.json({ error: 'This document is not assigned to you' }, { status: 403 })
  }

  const storage = await libraryStorage()
  if (!storage) return NextResponse.json({ error: STORAGE_NOT_CONFIGURED }, { status: 503 })

  const { data, error } = await storage.download(doc.storagePath)
  if (error || !data) {
    console.error('GET /api/library/[documentId]/file:', error)
    return NextResponse.json({ error: 'The PDF could not be loaded' }, { status: 502 })
  }

  return new NextResponse(await data.arrayBuffer(), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline',
      'Cache-Control': 'private, no-store',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
