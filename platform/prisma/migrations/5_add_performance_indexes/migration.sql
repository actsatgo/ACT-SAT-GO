-- Indexes on hot foreign keys / filters. Postgres does not index FK columns
-- automatically, so per-student attempt/assignment lookups, test question
-- trees (sections -> questions -> child questions) and cascade deletes were
-- doing sequential scans. IF NOT EXISTS keeps this safe to re-run.

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TutorAssignment_studentId_idx" ON "TutorAssignment"("studentId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Question_parentQuestionId_idx" ON "Question"("parentQuestionId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Question_topicId_idx" ON "Question"("topicId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestPackageItem_testId_idx" ON "TestPackageItem"("testId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestSection_testId_idx" ON "TestSection"("testId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestQuestion_sectionId_idx" ON "TestQuestion"("sectionId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestQuestion_questionId_idx" ON "TestQuestion"("questionId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestAttempt_studentId_startedAt_idx" ON "TestAttempt"("studentId", "startedAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestAttempt_testId_idx" ON "TestAttempt"("testId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestAttempt_status_completedAt_idx" ON "TestAttempt"("status", "completedAt");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestAssignment_studentId_idx" ON "TestAssignment"("studentId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "TestAssignment_testId_idx" ON "TestAssignment"("testId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "SectionAttempt_sectionId_idx" ON "SectionAttempt"("sectionId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "AttemptAnswer_questionId_idx" ON "AttemptAnswer"("questionId");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "CheatingLog_attemptId_eventType_idx" ON "CheatingLog"("attemptId", "eventType");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "Notification_userId_idx" ON "Notification"("userId");

