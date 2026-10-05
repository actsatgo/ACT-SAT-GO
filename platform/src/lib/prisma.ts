import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

function createPrismaClient() {
  const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    max: Number(process.env.DB_POOL_MAX ?? 10),
    // pg's default idle timeout is 10s, so on a quiet server almost every
    // request after a short pause paid for a brand-new TCP + TLS + auth
    // handshake to the remote database (several round trips). Keep warm
    // connections around longer and use TCP keepalive so they stay usable.
    idleTimeoutMillis: Number(process.env.DB_POOL_IDLE_MS ?? 300_000),
    keepAlive: true,
  })
  // An idle client dropped by the server (e.g. a pooler restart) emits 'error'
  // on the pool; without a listener that would crash the process.
  pool.on('error', (err) => {
    console.error('[prisma] idle pg client error:', err.message)
  })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({
    adapter,
    // Default is 5s, which large test saves (~100 statements in one
    // transaction) exceed on high-latency connections to the remote DB.
    transactionOptions: { maxWait: 10000, timeout: 60000 },
  })
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient()
globalForPrisma.prisma = prisma
