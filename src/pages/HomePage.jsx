import { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import ResultsCarousel from '../components/ResultsCarousel/ResultsCarousel'
import Stats from '../components/Stats/Stats'
import SEO from '../components/SEO/SEO'

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
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Study Prime',
    url: 'https://studyprime.net',
    description: 'Expert SAT, ACT, and K-12 subject tutoring across the Bay Area. 95% success rate. Average +280 SAT point improvement.',
    areaServed: 'Bay Area, CA',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tutoring Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SAT Prep Tutoring', url: 'https://studyprime.net/sat-prep' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ACT Prep Tutoring', url: 'https://studyprime.net/act-prep' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Math Tutoring', url: 'https://studyprime.net/math-tutoring' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'English Tutoring', url: 'https://studyprime.net/english-tutoring' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Science Tutoring', url: 'https://studyprime.net/science-tutoring' } },
      ],
    },
  }

  return (
    <>
      <SEO
        title="Expert SAT, ACT & K-12 Tutoring Bay Area"
        description="Study Prime: Bay Area's top tutoring service. Expert SAT prep, ACT prep, and K-12 subject tutoring. 95% success rate, average +280 SAT points. Free consultation."
        canonical="/"
        schema={homeSchema}
      />
      <Hero />
      <Stats />
      <Services ctaLabel="Learn More" ctaTo="/services" />
      <ResultsCarousel />
      <HomeCalendly />
    </>
  )
}
