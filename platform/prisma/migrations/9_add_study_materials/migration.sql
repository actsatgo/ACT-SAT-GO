-- Protected study materials: view-only PDFs shared by tutors/admins.
-- Idempotent (IF NOT EXISTS) so it is safe if the tables were already created at runtime.

CREATE TABLE IF NOT EXISTS "StudyMaterial" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "subject" TEXT,
    "fileName" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "pageCount" INTEGER NOT NULL,
    "pageSizes" JSONB NOT NULL,
    "storagePath" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "StudyMaterial_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "StudyMaterialShare" (
    "id" TEXT NOT NULL,
    "materialId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "sharedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "viewedAt" TIMESTAMP(3),
    "lastPage" INTEGER,
    CONSTRAINT "StudyMaterialShare_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "StudyMaterial_createdById_idx" ON "StudyMaterial"("createdById");

CREATE INDEX IF NOT EXISTS "StudyMaterialShare_userId_idx" ON "StudyMaterialShare"("userId");

CREATE UNIQUE INDEX IF NOT EXISTS "StudyMaterialShare_materialId_userId_key" ON "StudyMaterialShare"("materialId", "userId");

DO $$ BEGIN
  ALTER TABLE "StudyMaterial" ADD CONSTRAINT "StudyMaterial_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "StudyMaterialShare" ADD CONSTRAINT "StudyMaterialShare_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "StudyMaterial"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "StudyMaterialShare" ADD CONSTRAINT "StudyMaterialShare_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
