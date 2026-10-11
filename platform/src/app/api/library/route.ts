import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireRole, requireUser } from '@/lib/auth'
import { STORAGE_NOT_CONFIGURED, isLibraryAdmin, libraryStorage } from '@/lib/library'

export const dynamic = 'force-dynamic'

const ASSIGNEE_SELECT = { select: { user: { select: { id: true, name: true, email: true, role: true } } } }

// GET /api/library
// Admins get every document with its assignees; students and tutors get only
// the documents assigned to them (no assignee list).
export async function GET(request: NextRequest) {
  const auth = await requireUser(request)
  if (auth instanceof NextResponse) return auth
  const user = auth

  try {
    if (isLibraryAdmin(user)) {
      const docs = await prisma.libraryDocument.findMany({
        orderBy: { createdAt: 'desc' },
        include: { assignments: ASSIGNEE_SELECT, uploadedBy: { select: { name: true } } },
      })
      return NextResponse.json({
        documents: docs.map(({ assignments, uploadedBy, storagePath: _p, ...d }) => ({
          ...d,
          uploadedByName: uploadedBy?.name ?? null,
          assignees: assignments.map((a) => a.user),
        })),
      })
    }

    const rows = await prisma.libraryAssignment.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
      include: { document: true },
    })
    return NextResponse.json({
      documents: rows.map(({ document: { storagePath: _p, uploadedById: _u, ...d }, createdAt }) => ({
        ...d,
        assignedAt: createdAt,
      })),
    })
  } catch (error) {
    console.error('GET /api/library:', error)
    return NextResponse.json({ error: 'Failed to load the library' }, { status: 500 })
  }
}

// POST /api/library — admin only.
// Body: { title, description?, path, fileName } where `path` came from
// POST /api/library/upload-url and the PDF is already uploaded there.
export async function POST(request: NextRequest) {
  const auth = await requireRole(request, ['ADMIN', 'SUPER_ADMIN'])
  if (auth instanceof NextResponse) return auth

  let body: { title?: string; description?: string | null; path?: string; fileName?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const path = String(body.path ?? '')
  const fileName = String(body.fileName ?? '').trim()
  const title = String(body.title ?? '').trim() || fileName.replace(/\.pdf$/i, '')
  if (!path.startsWith('documents/') || path.includes('..') || !title) {
    return NextResponse.json({ error: 'title and a valid upload path are required' }, { status: 400 })
  }

  const storage = await libraryStorage()
  if (!storage) return NextResponse.json({ error: STORAGE_NOT_CONFIGURED }, { status: 503 })

  // Confirm the upload really landed (and read its size from Storage, not the client).
  const slash = path.lastIndexOf('/')
  const { data: listed, error: listErr } = await storage.list(path.slice(0, slash), { search: path.slice(slash + 1) })
  const object = listed?.find((o) => o.name === path.slice(slash + 1))
  if (listErr || !object) {
    return NextResponse.json({ error: 'The uploaded file was not found — please upload it again' }, { status: 400 })
  }
  const sizeBytes = Number((object.metadata as { size?: number } | null)?.size ?? 0)

  try {
    const doc = await prisma.libraryDocument.create({
      data: {
        title,
        description: body.description?.trim() || null,
        fileName: fileName || path.slice(slash + 1),
        storagePath: path,
        sizeBytes,
        uploadedById: auth.id,
      },
    })
    const { storagePath: _p, ...rest } = doc
    return NextResponse.json({ document: { ...rest, uploadedByName: auth.name, assignees: [] } }, { status: 201 })
  } catch (error) {
    console.error('POST /api/library:', error)
    return NextResponse.json({ error: 'Failed to save the document' }, { status: 500 })
  }
}
