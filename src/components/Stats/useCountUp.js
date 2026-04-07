import { useState, useEffect, useRef } from 'react'

export default function useCountUp(target, duration = 1200, shouldStart = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!shouldStart) return

    let startTime = null

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3)
    }

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutCubic(progress)
      setCount(Math.round(target * eased))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, shouldStart])

  return count
}
