import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import SEO from '../components/SEO/SEO'
import { getCityBySlug, CITIES } from '../data/cities'

// Pick up to 4 nearby cities (different slug, same or adjacent county preferred)
function getNearbyCity(currentSlug) {
  const others = CITIES.filter(c => c.slug !== currentSlug)
  // Prefer same county first, then just take the first few
  const current = getCityBySlug(currentSlug)
  const sameCounty = others.filter(c => c.county === current.county)
  const pool = sameCounty.length >= 4 ? sameCounty : [...sameCounty, ...others.filter(c => c.county !== current.county)]
  return pool.slice(0, 4)
}

const SERVICES = [
  { label: 'SAT Prep', to: '/services#sat', desc: 'Targeted strategies to maximise your SAT score.' },
  { label: 'ACT Prep', to: '/services#act', desc: 'Comprehensive ACT coaching across all sections.' },
  { label: 'Math Tutoring', to: '/services#math', desc: 'Algebra through Calculus and beyond.' },
  { label: 'English & Writing', to: '/services#english', desc: 'Essay writing, grammar, and reading comprehension.' },
  { label: 'Science Tutoring', to: '/services#science', desc: 'Biology, Chemistry, Physics and more.' },
]

const STATS = [
  { value: '95%', label: 'Student Success Rate' },
  { value: '+280 pts', label: 'Average SAT Score Improvement' },
  { value: '1,000+', label: 'Students Tutored' },
]

const STEPS = [
  {
    number: '01',
    title: 'Book a Free Consultation',
    desc: 'Schedule a no-obligation 30-minute call. We listen first — no sales pressure.',
  },
  {
    number: '02',
    title: 'Get Matched with Your Tutor',
    desc: 'We pair you with an expert who fits your schedule, learning style, and goals.',
  },
  {
    number: '03',
    title: 'Start Achieving Results',
    desc: 'Begin personalised sessions and track measurable progress from day one.',
  },
]

export default function LocalCityPage() {
  const { city } = useParams()
  const cityData = getCityBySlug(city)

  if (!cityData) return <Navigate to="/404" replace />

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [city])

  const { name, county, blurb, zip, nearbySchools } = cityData
  const nearbyCities = getNearbyCity(city)

  const schoolList = nearbySchools.join(', ')
  const metaDescription = `Study Prime offers expert SAT, ACT, and K-12 tutoring in ${name}, CA (${county}). Serving students at ${nearbySchools[0]}${nearbySchools[1] ? `, ${nearbySchools[1]}` : ''} and more. Free consultation available.`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Study Prime',
    description: `Expert SAT, ACT, and K-12 tutoring services in ${name}, CA`,
    url: 'https://studyprime.net',
    telephone: '+1-510-555-0100',
    image: 'https://studyprime.net/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: name,
      addressRegion: 'CA',
      postalCode: zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cityData.lat,
      longitude: cityData.lng,
    },
    areaServed: {
      '@type': 'City',
      name: `${name}, CA`,
    },
    serviceType: ['SAT Prep', 'ACT Prep', 'Math Tutoring', 'English Tutoring', 'Science Tutoring'],
    priceRange: '$$',
    openingHours: 'Mo-Su 09:00-21:00',
  }

  return (
    <>
      <SEO
        title={`Tutoring in ${name} | SAT, ACT & K-12`}
        description={metaDescription}
        canonical={`/tutoring/${city}`}
        schema={localBusinessSchema}
      />

      {/* ── Hero ── */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(122,125,133,0.2)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <p style={{
              color: 'var(--accent)',
              fontSize: '0.875rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              {county}
            </p>
            <h1 style={{ marginBottom: '20px' }}>
              Expert Tutoring in{' '}
              <span style={{ color: 'var(--accent)' }}>{name}</span>, CA
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.25rem',
              lineHeight: 1.6,
              marginBottom: '36px',
              maxWidth: '600px',
            }}>
              Study Prime brings personalised SAT, ACT, and K-12 tutoring to {name} — {blurb}. Our expert tutors help students reach their full academic potential.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                Book Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section style={{ padding: '60px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center',
          }}>
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1.1,
                  marginBottom: '8px',
                }}>
                  {value}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 1: Why City ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '32px' }}>
              Why {name} Students Choose Study Prime
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: 1.8,
              marginBottom: '24px',
            }}>
              {name} is {blurb}, and its students face some of the most competitive academic environments in California. Whether you are aiming for a top UC school, preparing for the SAT or ACT, or simply looking to strengthen your foundation in math or science, Study Prime has the expertise and track record to help you succeed.
            </p>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: 1.8,
            }}>
              We are proud to serve students at {schoolList} and schools throughout {county}. Our tutors are carefully vetted subject-matter experts who understand the local curriculum and college admissions landscape. Every study plan is built around the individual student — not a one-size-fits-all curriculum.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Services ── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Services in {name}</h2>
            <div className="section-underline" style={{ marginTop: '16px' }} />
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              marginTop: '16px',
              maxWidth: '560px',
              margin: '16px auto 0',
            }}>
              Tailored programmes for every subject and every goal.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginTop: '48px',
          }}>
            {SERVICES.map(({ label, to, desc }) => (
              <Link
                key={label}
                to={to}
                style={{
                  display: 'block',
                  background: 'var(--bg-primary)',
                  border: '1px solid rgba(122,125,133,0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px 24px',
                  transition: 'border-color var(--transition-default), transform var(--transition-default)',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(122,125,133,0.2)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '4px',
                  background: 'var(--accent)',
                  borderRadius: '2px',
                  marginBottom: '16px',
                }} />
                <h4 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>{label}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{desc}</p>
                <span style={{
                  display: 'inline-block',
                  marginTop: '16px',
                  color: 'var(--accent)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                }}>
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Proven Results ── */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="results-grid"
          >
            <div>
              <h2 style={{ marginBottom: '24px' }}>Proven Results</h2>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.125rem',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}>
                Our tutors have helped over 1,000 Bay Area students achieve meaningful score improvements and academic breakthroughs. We are not satisfied until you see measurable progress.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.8 }}>
                Students in {name} trust Study Prime because our methods are data-driven, our tutors are passionate, and our results speak for themselves.
              </p>
              <Link
                to="/results"
                className="btn-secondary"
                style={{ marginTop: '32px', display: 'inline-flex' }}
              >
                See Student Results
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { stat: '95%', desc: 'of students meet or exceed their target score' },
                { stat: '+280 pts', desc: 'average SAT score improvement after 10 sessions' },
                { stat: '1,000+', desc: 'Bay Area students successfully tutored' },
                { stat: '4.9 / 5', desc: 'average tutor rating across all subjects' },
              ].map(({ stat, desc }) => (
                <div
                  key={stat}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid rgba(122,125,133,0.2)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <span style={{
                    color: 'var(--accent)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    minWidth: '90px',
                  }}>
                    {stat}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: How to Get Started ── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>How to Get Started in {name}</h2>
            <div className="section-underline" style={{ marginTop: '16px' }} />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            marginTop: '52px',
          }}>
            {STEPS.map(({ number, title, desc }) => (
              <div
                key={number}
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid rgba(122,125,133,0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '36px 28px',
                  position: 'relative',
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  color: 'var(--accent-subtle)',
                  lineHeight: 1,
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}>
                  {number}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                  {title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(19,174,83,0.08) 0%, transparent 70%)',
        borderTop: '1px solid rgba(19,174,83,0.15)',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '16px' }}>
            Ready to Excel in {name}?
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.125rem',
            maxWidth: '520px',
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Book your free 30-minute consultation today. No commitment, no pressure — just an honest conversation about your goals.
          </p>
          <Link to="/contact" className="btn-primary" style={{ fontSize: '1.0625rem', padding: '14px 40px' }}>
            Book Free Consultation
          </Link>
        </div>
      </section>

      {/* ── Nearby Cities ── */}
      <section style={{ padding: '48px 0', borderTop: '1px solid rgba(122,125,133,0.2)' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '16px' }}>
            Nearby areas we also serve:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {nearbyCities.map(c => (
              <Link
                key={c.slug}
                to={`/tutoring/${c.slug}`}
                style={{
                  display: 'inline-block',
                  padding: '8px 18px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid rgba(122,125,133,0.3)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  transition: 'border-color var(--transition-fast), color var(--transition-fast)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(122,125,133,0.3)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive two-col fix */}
      <style>{`
        @media (max-width: 768px) {
          .results-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  )
}
