import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireRole } from '@/lib/auth'
import { libraryStorage } from '@/lib/library'

export const dynamic = 'force-dynamic'

// PATCH /api/library/:documentId — admin only. Body: { title?, description? }
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ documentId: string }> },
) {
  const auth = await requireRole(request, ['ADMIN', 'SUPER_ADMIN'])
  if (auth instanceof NextResponse) return auth
  const { documentId } = await params

  let body: { title?: string; description?: string | null }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }
  if (body.title !== undefined && !String(body.title).trim()) {
    return NextResponse.json({ error: 'Title cannot be empty' }, { status: 400 })
  }

  try {
    const doc = await prisma.libraryDocument.update({
      where: { id: documentId },
      data: {
        ...(body.title !== undefined ? { title: String(body.title).trim() } : {}),
        ...(body.description !== undefined ? { description: body.description?.trim() || null } : {}),
      },
    })
    const { storagePath: _p, ...rest } = doc
    return NextResponse.json({ document: rest })
  } catch (error) {
    console.error('PATCH /api/library/[documentId]:', error)
    return NextResponse.json({ error: 'Document not found' }, { status: 404 })
  }
}

// DELETE /api/library/:documentId — admin only. Removes the document, its
// assignments (cascade) and the stored PDF.
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ documentId: string }> },
) {
  const auth = await requireRole(request, ['ADMIN', 'SUPER_ADMIN'])
  if (auth instanceof NextResponse) return auth
  const { documentId } = await params

  try {
    const doc = await prisma.libraryDocument.delete({ where: { id: documentId } })
    const storage = await libraryStorage()
    if (storage) {
      const { error } = await storage.remove([doc.storagePath])
      if (error) console.warn('[library] stored PDF not removed:', doc.storagePath, error.message)
    }
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('DELETE /api/library/[documentId]:', error)
    return NextResponse.json({ error: 'Document not found' }, { status: 404 })
  }
}
