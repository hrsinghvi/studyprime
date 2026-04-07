import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import useCountUp from './useCountUp'

describe('useCountUp', () => {
  it('starts at 0 when shouldStart is false', () => {
    const { result } = renderHook(() => useCountUp(100, 1000, false))
    expect(result.current).toBe(0)
  })

  it('remains 0 when not started', () => {
    const { result, rerender } = renderHook(
      ({ shouldStart }) => useCountUp(100, 1000, shouldStart),
      { initialProps: { shouldStart: false } }
    )
    expect(result.current).toBe(0)
    rerender({ shouldStart: false })
    expect(result.current).toBe(0)
  })

  it('advances toward target when shouldStart transitions to true', async () => {
    const { result, rerender } = renderHook(
      ({ shouldStart }) => useCountUp(100, 500, shouldStart),
      { initialProps: { shouldStart: false } }
    )
    expect(result.current).toBe(0)
    rerender({ shouldStart: true })
    // After a tick, the count should have advanced beyond 0
    await new Promise(r => setTimeout(r, 100))
    expect(result.current).toBeGreaterThan(0)
  })
})
