import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GooeyFilter } from '../ui/GooeyFilter'
import { PixelTrail } from '../ui/PixelTrail'
import { useScreenSize } from '../../hooks/useScreenSize'
import './Hero.css'

export default function Hero() {
  const [scrollHint, setScrollHint] = useState(false)
  const screenSize = useScreenSize()

  useEffect(() => {
    const timer = setTimeout(() => setScrollHint(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" aria-label="Hero">
      <GooeyFilter id="hero-gooey" strength={5} />
      <div
        className="hero__pixel-trail"
        style={{ filter: 'url(#hero-gooey)' }}
        aria-hidden="true"
      >
        <PixelTrail
          pixelSize={screenSize.lessThan('md') ? 20 : 28}
          fadeDuration={600}
          delay={200}
          pixelClassName="hero__pixel-dot"
        />
      </div>

      <div className="hero__grid-overlay" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__badge" aria-hidden="true">
          <span className="hero__badge-dot" />
          Bay Area's Premier Tutoring Service
        </div>

        <h1 className="hero__title">
          Your Path to{' '}
          <em className="serif hero__title-accent">
            {'Excellence'.split('').map((char, i) => (
              <span
                key={i}
                className="hero__letter"
                style={{ animationDelay: `${300 + i * 60}ms` }}
              >
                {char}
              </span>
            ))}
          </em>
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
