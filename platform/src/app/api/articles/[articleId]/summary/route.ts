import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'
import { ensureArticleTables } from '@/lib/articleTables'
import { json, notifyUsers } from '@/lib/studentSharing'
import { LIMITS, MAX_COPIED_RATIO, STATUS, copiedRatio, wordCount } from '@/lib/articles'

// PUT /api/articles/:articleId/summary  { summary: string, submit?: boolean }
// The assigned student saves a draft (submit=false) or submits their summary
// as proof of reading. A submission must reach the article's minimum length
// and be mostly in the student's own words. Approved summaries are locked.

export async function PUT(request: NextRequest, { params }: { params: Promise<{ articleId: string }> }) {
  const { articleId } = await params
  try {
    const user = await getCurrentUser(request)
    if (!user) return json({ error: 'Authentication required' }, 401)
    if (user.role !== 'STUDENT') return json({ error: 'Only students write summaries' }, 403)
    await ensureArticleTables()

    const assignment = await prisma.articleAssignment.findUnique({
      where: { articleId_studentId: { articleId, studentId: user.id } },
      select: {
        id: true, status: true, openedAt: true,
        article: { select: { id: true, title: true, body: true, minSummaryWords: true, createdById: true } },
      },
    })
    if (!assignment) return json({ error: 'This article has not been assigned to you' }, 403)
    if (assignment.status === STATUS.APPROVED) {
      return json({ error: 'Your summary was already approved and can no longer be changed' }, 409)
    }

    const body = (await request.json().catch(() => null)) as { summary?: unknown; submit?: unknown } | null
    if (typeof body?.summary !== 'string') return json({ error: 'summary is required' }, 400)
    const summary = body.summary.replace(/\r\n/g, '\n').trim()
    if (summary.length > LIMITS.summary) {
      return json({ error: `Summary must be at most ${LIMITS.summary.toLocaleString()} characters` }, 400)
    }
    const words = wordCount(summary)
    const submit = body.submit === true
    const { article } = assignment

    if (!submit) {
      if (assignment.status === STATUS.SUBMITTED) {
        return json({ error: 'Your summary is waiting for review — you can edit it if your tutor asks for changes' }, 409)
      }
      await prisma.articleAssignment.update({
        where: { id: assignment.id },
        data: { summary, summaryWordCount: words, openedAt: assignment.openedAt ?? new Date() },
      })
      return json({ status: assignment.status, summaryWordCount: words, saved: true })
    }

    if (assignment.status === STATUS.SUBMITTED) return json({ error: 'Your summary was already submitted' }, 409)
    if (words < article.minSummaryWords) {
      return json({ error: `Your summary needs at least ${article.minSummaryWords} words (you have ${words})` }, 400)
    }
    const ratio = copiedRatio(summary, article.body)
    if (ratio >= MAX_COPIED_RATIO) {
      return json({
        error: `About ${Math.round(ratio * 100)}% of your summary is copied word-for-word from the article. Write it in your own words.`,
        copiedRatio: ratio,
      }, 400)
    }

    const now = new Date()
    const updated = await prisma.articleAssignment.update({
      where: { id: assignment.id },
      data: {
        summary,
        summaryWordCount: words,
        copiedRatio: ratio,
        status: STATUS.SUBMITTED,
        submittedAt: now,
        submissionCount: { increment: 1 },
        openedAt: assignment.openedAt ?? now,
      },
      select: { status: true, submittedAt: true, submissionCount: true },
    })
    await notifyUsers([article.createdById], {
      title: updated.submissionCount > 1 ? 'Revised summary submitted' : 'Article summary submitted',
      body: `${user.name || 'A student'} submitted a ${words}-word summary of "${article.title}".`,
      link: `/articles/${article.id}`,
    })
    return json({ ...updated, summaryWordCount: words, copiedRatio: ratio })
  } catch (err) {
    console.error('PUT /api/articles/[articleId]/summary:', err)
    return json({ error: 'Failed to save your summary' }, 500)
  }
}
