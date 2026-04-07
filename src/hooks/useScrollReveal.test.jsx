import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import useScrollReveal from './useScrollReveal'

describe('useScrollReveal', () => {
  beforeEach(() => {
    const mockObserver = {
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    }
    vi.stubGlobal('IntersectionObserver', vi.fn(() => mockObserver))
  })

  it('returns a ref and initial isVisible=false', () => {
    const { result } = renderHook(() => useScrollReveal())
    const [ref, isVisible] = result.current
    expect(isVisible).toBe(false)
    expect(ref).toBeDefined()
  })
})
