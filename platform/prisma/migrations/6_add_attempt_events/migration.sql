-- Append-only test-player event log used for visit-level time analytics.

-- CreateTable
CREATE TABLE IF NOT EXISTS "AttemptEvent" (
    "id" BIGSERIAL NOT NULL,
    "attemptId" TEXT NOT NULL,
    "seq" INTEGER NOT NULL,
    "eventType" VARCHAR(16) NOT NULL,
    "questionId" TEXT,
    "tMs" INTEGER NOT NULL,
    "choice" JSONB,
    "clientWall" TIMESTAMP(3),
    "receivedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AttemptEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "AttemptEvent_attemptId_seq_key" ON "AttemptEvent"("attemptId", "seq");

-- AddForeignKey
DO $$ BEGIN
  ALTER TABLE "AttemptEvent" ADD CONSTRAINT "AttemptEvent_attemptId_fkey" FOREIGN KEY ("attemptId") REFERENCES "TestAttempt"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
