-- Articles: tutor-assigned reading with a student summary as proof of reading.
-- Idempotent (IF NOT EXISTS) so it is safe if the tables were already created at runtime.

CREATE TABLE IF NOT EXISTS "Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "topic" TEXT,
    "subject" TEXT,
    "body" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "minSummaryWords" INTEGER NOT NULL DEFAULT 50,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "ArticleAssignment" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueAt" TIMESTAMP(3),
    "openedAt" TIMESTAMP(3),
    "status" VARCHAR(16) NOT NULL DEFAULT 'ASSIGNED',
    "summary" TEXT,
    "summaryWordCount" INTEGER NOT NULL DEFAULT 0,
    "copiedRatio" DOUBLE PRECISION,
    "submittedAt" TIMESTAMP(3),
    "submissionCount" INTEGER NOT NULL DEFAULT 0,
    "feedback" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "reviewedById" TEXT,
    CONSTRAINT "ArticleAssignment_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "Article_createdById_idx" ON "Article"("createdById");

CREATE INDEX IF NOT EXISTS "ArticleAssignment_studentId_idx" ON "ArticleAssignment"("studentId");

CREATE UNIQUE INDEX IF NOT EXISTS "ArticleAssignment_articleId_studentId_key" ON "ArticleAssignment"("articleId", "studentId");

DO $$ BEGIN
  ALTER TABLE "Article" ADD CONSTRAINT "Article_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "ArticleAssignment" ADD CONSTRAINT "ArticleAssignment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "ArticleAssignment" ADD CONSTRAINT "ArticleAssignment_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "ArticleAssignment" ADD CONSTRAINT "ArticleAssignment_reviewedById_fkey" FOREIGN KEY ("reviewedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
