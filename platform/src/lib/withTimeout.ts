/**
 * Rejects with a TimeoutError if `promise` hasn't settled within `ms`.
 *
 * Database calls have no timeout of their own, so one stuck query used to keep
 * a request open forever (the Time Analysis page spun endlessly). This bounds
 * how long a request waits; the underlying query is not cancelled.
 */
export class TimeoutError extends Error {
  constructor(label: string, ms: number) {
    super(`${label} timed out after ${ms}ms`)
    this.name = 'TimeoutError'
  }
}

export function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new TimeoutError(label, ms)), ms)
  })
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer))
}
