import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { requireRole } from '@/lib/auth'
import { LIBRARY_MAX_BYTES, STORAGE_NOT_CONFIGURED, libraryStorage } from '@/lib/library'

export const dynamic = 'force-dynamic'

// POST /api/library/upload-url — admin only.
// Body: { fileName, sizeBytes }. Returns a one-time signed upload URL for the
// private library bucket; the browser uploads the PDF straight to Storage, then
// calls POST /api/library with the returned `path` to create the document.
export async function POST(request: NextRequest) {
  const auth = await requireRole(request, ['ADMIN', 'SUPER_ADMIN'])
  if (auth instanceof NextResponse) return auth

  let body: { fileName?: string; sizeBytes?: number }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const fileName = String(body.fileName ?? '').trim()
  const sizeBytes = Number(body.sizeBytes ?? 0)
  if (!fileName.toLowerCase().endsWith('.pdf')) {
    return NextResponse.json({ error: 'Only PDF files can be uploaded' }, { status: 400 })
  }
  if (!Number.isFinite(sizeBytes) || sizeBytes <= 0 || sizeBytes > LIBRARY_MAX_BYTES) {
    return NextResponse.json({ error: 'PDF must be between 1 byte and 50MB' }, { status: 400 })
  }

  const storage = await libraryStorage()
  if (!storage) return NextResponse.json({ error: STORAGE_NOT_CONFIGURED }, { status: 503 })

  const cleanName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_')
  const path = `documents/${randomUUID()}_${cleanName}`
  const { data, error } = await storage.createSignedUploadUrl(path)
  if (error || !data) {
    console.error('POST /api/library/upload-url:', error)
    return NextResponse.json({ error: 'Could not prepare the upload' }, { status: 500 })
  }
  return NextResponse.json({ path: data.path, token: data.token, signedUrl: data.signedUrl })
}
