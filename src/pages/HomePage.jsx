import { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import ResultsCarousel from '../components/ResultsCarousel/ResultsCarousel'
import Stats from '../components/Stats/Stats'

function HomeCalendly() {
  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      const s = document.querySelector('script[src*="calendly"]')
      if (s) document.body.removeChild(s)
    }
  }, [])

  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <h2>Get Started Today</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginTop: '8px' }}>
            Book a free 30-minute consultation and we'll match you with the right tutor.
          </p>
        </div>
      </div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/help-studyprime/30min?primary_color=13ae53&text_color=ffffff&background_color=262731"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ResultsCarousel />
      <Stats />
      <HomeCalendly />
    </>
  )
}
