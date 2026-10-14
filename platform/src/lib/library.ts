import { createAdminClient } from '@/lib/supabase/admin'
import type { User } from '@prisma/client'

/**
 * ASG Library storage helpers.
 *
 * PDFs live in a PRIVATE Supabase Storage bucket. Nothing in it has a public
 * URL: the admin's browser uploads straight to Storage with a one-time signed
 * upload URL (so big PDFs never pass through this server's 10MB proxy body
 * limit), and every read goes through GET /api/library/:id/file, which checks
 * the caller is an admin or has the document assigned.
 */
export const LIBRARY_BUCKET = 'library'
export const LIBRARY_MAX_BYTES = 50 * 1024 * 1024 // 50MB (Supabase free-plan per-file cap)

export function isLibraryAdmin(user: Pick<User, 'role'>): boolean {
  return user.role === 'ADMIN' || user.role === 'SUPER_ADMIN'
}

let bucketReady = false

// Returns a service-role Storage client with the private bucket in place, or
// null when SUPABASE_SERVICE_ROLE_KEY isn't configured.
export async function libraryStorage() {
  const client = createAdminClient()
  if (!client) return null
  if (!bucketReady) {
    try {
      const { data: buckets } = await client.storage.listBuckets()
      if (!buckets?.some((b) => b.name === LIBRARY_BUCKET)) {
        await client.storage.createBucket(LIBRARY_BUCKET, {
          public: false,
          allowedMimeTypes: ['application/pdf'],
          fileSizeLimit: LIBRARY_MAX_BYTES,
        })
      }
      bucketReady = true
    } catch (err) {
      console.warn('[library] could not verify/create the storage bucket:', err)
    }
  }
  return client.storage.from(LIBRARY_BUCKET)
}

export const STORAGE_NOT_CONFIGURED =
  'File storage is not configured on the server (SUPABASE_SERVICE_ROLE_KEY is missing).'
