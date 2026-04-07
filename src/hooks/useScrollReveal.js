import { useRef, useEffect, useState } from 'react'

export default function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: options.threshold ?? 0.1, ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, isVisible]
}
