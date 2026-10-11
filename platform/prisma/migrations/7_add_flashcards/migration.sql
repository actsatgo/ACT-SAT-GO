-- Flashcards: tutor-made decks (topic + info + front/back cards) shared with students.
-- Idempotent (IF NOT EXISTS) so it is safe if the tables were already created at runtime.

CREATE TABLE IF NOT EXISTS "FlashcardDeck" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT,
    "subject" TEXT,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "FlashcardDeck_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "FlashcardCard" (
    "id" TEXT NOT NULL,
    "deckId" TEXT NOT NULL,
    "front" TEXT NOT NULL,
    "back" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,
    CONSTRAINT "FlashcardCard_pkey" PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "FlashcardShare" (
    "id" TEXT NOT NULL,
    "deckId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "sharedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "viewedAt" TIMESTAMP(3),
    "lastStudiedAt" TIMESTAMP(3),
    "knownCardIds" JSONB,
    CONSTRAINT "FlashcardShare_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "FlashcardDeck_createdById_idx" ON "FlashcardDeck"("createdById");

CREATE INDEX IF NOT EXISTS "FlashcardCard_deckId_idx" ON "FlashcardCard"("deckId");

CREATE INDEX IF NOT EXISTS "FlashcardShare_studentId_idx" ON "FlashcardShare"("studentId");

CREATE UNIQUE INDEX IF NOT EXISTS "FlashcardShare_deckId_studentId_key" ON "FlashcardShare"("deckId", "studentId");

DO $$ BEGIN
  ALTER TABLE "FlashcardDeck" ADD CONSTRAINT "FlashcardDeck_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "FlashcardCard" ADD CONSTRAINT "FlashcardCard_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "FlashcardDeck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "FlashcardShare" ADD CONSTRAINT "FlashcardShare_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "FlashcardDeck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  ALTER TABLE "FlashcardShare" ADD CONSTRAINT "FlashcardShare_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
