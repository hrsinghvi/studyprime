import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const [scrollHint, setScrollHint] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setScrollHint(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__content container">
        <h1 className="hero__title">
          Your Path to{' '}
          <em className="serif hero__title-accent">Excellence</em>
        </h1>
        <p className="hero__subtitle">
          Expert SAT, ACT, and subject tutoring for students K–12.
          Proven results. Local Bay Area.
        </p>
        <div className="hero__ctas">
          <Link to="/contact" className="btn-primary hero__cta">
            Schedule a Free Consultation
          </Link>
        </div>
      </div>

      {scrollHint && (
        <div className="hero__scroll-hint" aria-hidden="true">
          <span className="hero__scroll-text">Scroll to see results</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </section>
  )
}
