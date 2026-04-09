import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Math Tutoring Bay Area',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Study Prime',
    url: 'https://studyprime.net',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fremont',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
  },
  areaServed: ['Fremont', 'San Jose', 'Oakland', 'Bay Area'],
  description:
    'Expert math tutoring for K-12 through AP Calculus in the Bay Area. Personalized lessons. Book a free session today.',
  url: 'https://studyprime.net/math-tutoring',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What grade levels do you tutor for math?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We tutor all grade levels from elementary math through K-12 and into AP/honors courses including Pre-Calculus, AP Calculus AB/BC, AP Statistics, and college-level math. Every student is matched with a tutor whose expertise fits their current coursework.',
      },
    },
    {
      '@type': 'Question',
      name: 'My child struggles with math anxiety. Can you help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Math anxiety is extremely common and very addressable with the right approach. Our tutors are trained to slow down, rebuild confidence from fundamentals, and create a judgment-free environment where students feel safe asking questions. Confidence and competence build together.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly will my child improve with math tutoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most students see measurable improvement in 4–6 sessions when attending consistently. Foundational gaps that have built up over time may take longer to fully address, but students almost always report feeling more confident in class within the first few weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you follow the school curriculum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work in sync with your child\'s current school assignments, tests, and curriculum. We can help with homework, prepare for upcoming exams, and also fill in foundational gaps from prior years that are affecting current performance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer AP Calculus tutoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer dedicated tutoring for AP Calculus AB and BC, including limits, derivatives, integrals, series, and exam preparation. Our AP tutors are experienced with the AP exam format and College Board scoring rubrics.',
      },
    },
  ],
}

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

const cardGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '24px',
  marginTop: '32px',
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

const faqItemStyle = {
  background: 'var(--bg-secondary)',
  borderRadius: 'var(--radius-md)',
  padding: '24px',
  marginBottom: '16px',
  border: '1px solid rgba(122, 125, 133, 0.2)',
}

export default function MathPage() {
  return (
    <>
      <SEO
        title="Math Tutoring Bay Area | K-12 Through Calculus"
        description="Expert math tutoring for K-12 through AP Calculus in the Bay Area. Personalized lessons. Book a free session today."
        canonical="/math-tutoring"
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <div style={{ paddingTop: '40px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-block', background: 'var(--accent-subtle)', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, padding: '4px 14px', borderRadius: '999px', marginBottom: '20px', border: '1px solid var(--accent-subtle-2)' }}>
              Math Tutoring
            </div>
            <h1 style={{ marginBottom: '20px' }}>
              Math Tutoring in the Bay Area: From Algebra to Calculus
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '36px' }}>
              Personalized math tutoring for every level — from middle school fractions to AP Calculus BC. We meet your student exactly where they are and build from there.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Book a Free Session</Link>
              <Link to="/results" className="btn-secondary">See Student Results</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Subjects Covered */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Math Subjects We Cover</h2>
          <p style={pStyle}>
            Our math tutors cover the full K-12 spectrum and beyond. Whether your student is learning multiplication tables in elementary school, navigating the abstract world of Algebra II in high school, or tackling college-level calculus, we have a tutor with deep expertise in that exact material.
          </p>
          <p style={pStyle}>
            We specialize in the courses where students most commonly fall behind: the transition from arithmetic to algebra in middle school, the jump from Algebra II to Pre-Calculus, and the conceptual leap into AP Calculus. These are the moments where confidence either breaks or gets built — and we're here to make sure it gets built.
          </p>
          <div style={cardGridStyle}>
            {[
              { level: 'Elementary', subjects: 'Arithmetic, fractions, decimals, basic geometry' },
              { level: 'Middle School', subjects: 'Pre-Algebra, Algebra I, ratios, statistics' },
              { level: 'High School', subjects: 'Algebra II, Geometry, Trigonometry, Pre-Calculus' },
              { level: 'AP & Honors', subjects: 'AP Calculus AB/BC, AP Statistics, Honors courses' },
            ].map(({ level, subjects }) => (
              <div key={level} style={cardStyle}>
                <div style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' }}>{level}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{subjects}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Our Approach to Math Tutoring</h2>
          <p style={pStyle}>
            Math is a subject where foundational gaps compound over time. A student who struggles with fractions in 6th grade will hit a wall in Algebra I; gaps in algebraic thinking will create problems in Pre-Calculus. Our tutors are trained to identify these upstream gaps and address them alongside current coursework — so students aren't just keeping up, they're actually understanding.
          </p>
          <p style={pStyle}>
            Every tutoring engagement begins with a short diagnostic conversation and a few targeted problems to identify where the student's conceptual understanding breaks down. We don't assume — we ask, observe, and listen. From there, sessions are structured to interleave concept explanation, worked examples, guided practice, and independent problem-solving with immediate feedback.
          </p>
          <p style={pStyle}>
            We also work closely with school curricula. If a big test is coming up, we shift to focused exam prep. If a student is working on a long-term project or studying for AP exams, we plan sessions accordingly. Flexibility is built into how we work.
          </p>
        </div>
      </section>

      {/* Building Confidence */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Building Confidence in Math</h2>
          <p style={pStyle}>
            Math anxiety is real — and it's one of the most common things we see in new students. A student who has been told they're "not a math person" or has struggled on tests for years often carries a belief that math is simply not for them. We work to dismantle that belief through repeated small wins.
          </p>
          <p style={pStyle}>
            Our tutors are patient, encouraging, and clear communicators. We never make students feel embarrassed for not knowing something. We celebrate progress explicitly — pointing out when a student solves a problem type they couldn't crack two weeks ago. Over time, this reframes math from a source of stress into a subject they can actually enjoy and excel in.
          </p>
          <p style={pStyle}>
            Many of our students arrive dreading math and leave with it as one of their stronger subjects. Building that confidence is just as important to us as improving the grade on the report card.
          </p>
        </div>
      </section>

      {/* Results */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Results from Our Math Students</h2>
          <p style={pStyle}>
            Our math tutoring outcomes speak for themselves. Students who work consistently with a Study Prime tutor see average grade improvements of 1–2 full letter grades within one semester. AP Calculus students routinely earn scores of 4 or 5 on the AP exam, and many students who arrived struggling to pass now tutor peers themselves.
          </p>
          <div style={cardGridStyle}>
            {[
              { stat: '1–2', label: 'Letter grade improvement per semester' },
              { stat: '89%', label: 'AP Calculus students scoring 4 or 5' },
              { stat: '4–6', label: 'Sessions to see measurable confidence gains' },
              { stat: 'K–12+', label: 'Grade levels we cover' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ ...cardStyle, textAlign: 'center' }}>
                <div style={statNumberStyle}>{stat}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} style={faqItemStyle}>
              <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{faq.name}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{faq.acceptedAnswer.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section style={{ ...sectionStyle, borderBottom: 'none' }}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>More Study Prime Tutoring Services</h2>
          <p style={pStyle}>
            We offer expert tutoring across all core academic subjects. Explore our other programs below.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link to="/science-tutoring" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>Science Tutoring →</Link>
            <Link to="/sat-prep" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>SAT Prep Tutoring →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>Ready to Improve Your Math Grade?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Book a free consultation. We'll assess your current level, identify gaps, and create a personalized plan to get you where you need to be.
          </p>
          <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
