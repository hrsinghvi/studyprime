import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Study Prime',
  url: 'https://studyprime.net',
  logo: 'https://studyprime.net/og-image.jpg',
  foundingDate: '2020',
  description:
    'Study Prime is a Bay Area tutoring company specializing in SAT prep, ACT prep, and K–12 academic tutoring. We match students with expert tutors who have scored in the 95th percentile or above, delivering personalized instruction and measurable results.',
  areaServed: {
    '@type': 'State',
    name: 'California',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Fremont',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://studyprime.net/contact',
  },
  sameAs: [
    'https://www.google.com/maps?cid=studyprime',
    'https://www.yelp.com/biz/study-prime',
    'https://www.facebook.com/studyprime',
    'https://www.instagram.com/studyprime',
  ],
}

// ─── Shared style tokens ────────────────────────────────────────────────────
const sectionStyle = {
  padding: '72px 0',
  borderBottom: '1px solid rgba(122, 125, 133, 0.2)',
}

const h2Style = {
  fontSize: '1.875rem',
  fontWeight: 700,
  marginBottom: '20px',
  color: 'var(--text-primary)',
}

const pStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1.0625rem',
  lineHeight: 1.75,
  marginBottom: '16px',
  maxWidth: '760px',
}

const accentLineStyle = {
  width: '48px',
  height: '3px',
  background: 'var(--accent)',
  borderRadius: '2px',
  marginBottom: '24px',
}

const cardStyle = {
  background: 'var(--bg-secondary)',
  borderRadius: 'var(--radius-md)',
  padding: '28px 24px',
  border: '1px solid rgba(122, 125, 133, 0.2)',
}

const statNumberStyle = {
  fontSize: '2.5rem',
  fontWeight: 700,
  color: 'var(--accent)',
  lineHeight: 1,
  marginBottom: '8px',
}

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '24px',
  marginTop: '32px',
}

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Study Prime | Expert Bay Area Tutoring Team"
        description="Meet the Study Prime team. Expert tutors with 95th percentile scores, 95% student success rate, and a mission to help Bay Area students excel."
        canonical="/about"
        schema={organizationSchema}
      />

      {/* ── Hero ── */}
      <div style={{ paddingTop: '40px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div style={{ maxWidth: '800px' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'var(--accent-subtle)',
                color: 'var(--accent)',
                fontSize: '0.875rem',
                fontWeight: 600,
                padding: '4px 14px',
                borderRadius: '999px',
                marginBottom: '20px',
                border: '1px solid var(--accent-subtle-2)',
              }}
            >
              About Study Prime
            </div>
            <h1 style={{ marginBottom: '20px' }}>
              About Study Prime: Bay Area's Premier Tutoring Service
            </h1>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.125rem',
                lineHeight: 1.7,
                maxWidth: '680px',
                marginBottom: '36px',
              }}
            >
              Founded in Fremont, Study Prime was built on a simple belief: every Bay Area student
              deserves access to expert, personalized instruction — not generic lesson plans or
              overworked group classes. We're here to unlock each student's academic potential
              through one-on-one coaching, real accountability, and tutors who genuinely care
              about results.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">
                Book a Free Consultation
              </Link>
              <Link to="/results" className="btn-secondary">
                See Student Results
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Our Mission ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Our Mission</h2>
          <p style={pStyle}>
            Study Prime exists because too many talented Bay Area students are left behind by
            one-size-fits-all tutoring. We started with a clear mission: to give every student a
            tutor who knows them, understands their specific gaps, and builds a plan that works for
            their learning style. Academic success shouldn't depend on which zip code you live in
            or which prep company your parents can afford — it should come from having the right
            person in your corner.
          </p>
          <p style={pStyle}>
            What makes us different is our obsession with personalization and accountability.
            We don't hand students a textbook and call it tutoring. Every Study Prime engagement
            starts with a diagnostic, produces a written plan, and tracks progress session by
            session. Our expert tutors bring subject mastery, test-taking strategy, and real
            mentorship. The result is a 95% student success rate and score improvements that
            students and parents can actually see.
          </p>
        </div>
      </section>

      {/* ── Our Tutors ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Our Tutors: The Study Prime Standard</h2>
          <p style={pStyle}>
            Every tutor at Study Prime clears a rigorous bar before working with a single student.
            For SAT and ACT coaches, that means scoring in the 95th percentile or above — we don't
            hire based on enthusiasm alone. For subject tutors, it means demonstrated mastery through
            coursework, professional experience, or a combination of both. Academic credentials
            matter, but so does the ability to explain a concept clearly to a frustrated
            15-year-old.
          </p>
          <p style={pStyle}>
            Beyond qualifications, all Study Prime tutors complete a background check and a
            structured onboarding process that covers our methodology, student communication
            standards, and how to deliver progress reports. We don't believe in placing tutors and
            walking away — we actively coach our team so that the quality you experience in session
            one is the same quality you get in session twenty.
          </p>

          {/* Callout box */}
          <div
            style={{
              background: 'var(--accent-subtle)',
              border: '1px solid var(--accent-subtle-2)',
              borderRadius: 'var(--radius-md)',
              padding: '28px 32px',
              marginTop: '28px',
              maxWidth: '680px',
            }}
          >
            <div
              style={{
                color: 'var(--accent)',
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}
            >
              The Study Prime Tutor Standard
            </div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {[
                '95th+ percentile SAT / ACT score required for test-prep tutors',
                'Subject mastery verified through coursework or professional experience',
                'Cleared background check before first session',
                'Structured onboarding covering methodology and student communication',
                'Ongoing performance reviews and student feedback tracking',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Our Approach: Personalized, Proven, Results-Driven</h2>
          <p style={pStyle}>
            Most tutoring services hand you a curriculum and follow it from page one to the end.
            At Study Prime, we start by listening. Before writing a single lesson plan, we want to
            understand where the student is today, where they want to go, and what's been getting
            in the way. That context shapes everything.
          </p>
          <p style={pStyle}>
            From there, every session is purposeful. We aren't going through motions — we're
            targeting the specific gaps that are holding a student back. Our approach is built on
            three phases:
          </p>
          <div style={{ ...cardGridStyle, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {[
              {
                step: '01',
                title: 'Assessment',
                desc: 'We start with a diagnostic to establish a baseline and pinpoint exact skill gaps. No guesswork — we know precisely where to focus.',
              },
              {
                step: '02',
                title: 'Personalized Plan',
                desc: 'We build a written, phase-by-phase study plan targeting your weakest areas first, with clear milestones and session-by-session objectives.',
              },
              {
                step: '03',
                title: 'Ongoing Coaching',
                desc: 'Sessions are adaptive. As a student improves, the plan evolves. Progress reports keep students and parents aligned every step of the way.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} style={cardStyle}>
                <div
                  style={{
                    color: 'var(--accent)',
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    marginBottom: '8px',
                  }}
                >
                  {step}
                </div>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    marginBottom: '8px',
                    color: 'var(--text-primary)',
                  }}
                >
                  {title}
                </div>
                <div
                  style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Results ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Our Results: The Numbers Speak</h2>
          <p style={pStyle}>
            We track outcomes carefully because results are the only metric that matters. Across
            every subject and every grade level, Study Prime students consistently hit their goals —
            whether that's a 300-point SAT gain, a semester turnaround, or finally understanding
            calculus before finals.
          </p>
          <div style={cardGridStyle}>
            {[
              { stat: '95%', label: 'Student success rate' },
              { stat: '+280', label: 'Average SAT point improvement' },
              { stat: '1,000+', label: 'Students tutored' },
              { stat: '4.9/5', label: 'Average rating' },
              { stat: '150+', label: 'Verified reviews' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ ...cardStyle, textAlign: 'center' }}>
                <div style={statNumberStyle}>{stat}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{label}</div>
              </div>
            ))}
          </div>
          <p style={{ ...pStyle, marginTop: '24px' }}>
            Want to read individual student stories?{' '}
            <Link to="/results" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Browse our results page
            </Link>{' '}
            to see real score gains from Bay Area students.
          </p>
        </div>
      </section>

      {/* ── Serving the Bay Area ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Serving the Bay Area</h2>
          <p style={pStyle}>
            Study Prime serves students across the entire Bay Area, both online and in-person.
            Whether you're in the South Bay, East Bay, or Peninsula, we can match you with the right
            tutor. Our home base is Fremont — you can learn more about what we offer locally on our{' '}
            <Link to="/tutoring/fremont" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              Fremont tutoring page
            </Link>
            {' '}— but our reach extends well beyond.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            {[
              'Fremont',
              'San Jose',
              'Oakland',
              'Palo Alto',
              'Sunnyvale',
              'Santa Clara',
              'Milpitas',
              'Union City',
              'Newark',
              'Hayward',
              'Berkeley',
              'Cupertino',
              'Mountain View',
              'Pleasanton',
              'Dublin',
            ].map((city) => (
              <span
                key={city}
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid rgba(122, 125, 133, 0.25)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '6px 14px',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>Get Started Today</h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.0625rem',
              maxWidth: '520px',
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}
          >
            Book a free 20-minute consultation. We'll learn about your goals, answer your
            questions, and match you with the right tutor — no commitment required.
          </p>
          <Link to="/contact" className="btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
