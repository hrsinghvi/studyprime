import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SAT Prep Tutoring',
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
    'Expert SAT prep tutoring in Fremont & Bay Area. Average +280 point score increase. 95% success rate.',
  url: 'https://studyprime.net/sat-prep',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much can I improve my SAT score with Study Prime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our students see an average improvement of 280 points. Many students reach 1500+ with our structured prep program, depending on starting score and study commitment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many tutoring sessions do I need to prepare for the SAT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We typically recommend 12–20 sessions over 2–3 months for meaningful score gains. Students who are closer to test day may follow an accelerated 8-session intensive track.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer in-person SAT tutoring in Fremont?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer both in-person sessions in the Fremont/Bay Area and fully online sessions via video call, giving you the flexibility to choose what works best.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does your SAT prep program cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our program covers every section of the digital SAT: Reading & Writing (including grammar and evidence-based analysis) and Math (algebra, advanced math, geometry, and data analysis). We also include timed practice tests and strategy coaching.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should my child start SAT prep?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ideally, students begin 3–6 months before their target test date. Starting in sophomore or early junior year gives the most time to refine skills and retake if needed.',
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

export default function SATPage() {
  return (
    <>
      <SEO
        title="SAT Prep Tutoring Fremont & Bay Area"
        description="Expert SAT prep tutoring in Fremont & Bay Area. Average +280 point score increase. 95% success rate. Free consultation."
        canonical="/sat-prep"
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <div style={{ paddingTop: '40px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-block', background: 'var(--accent-subtle)', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, padding: '4px 14px', borderRadius: '999px', marginBottom: '20px', border: '1px solid var(--accent-subtle-2)' }}>
              SAT Prep Tutoring
            </div>
            <h1 style={{ marginBottom: '20px' }}>
              SAT Prep Tutoring in the Bay Area: Score 1500+ with Study Prime
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '36px' }}>
              Personalized, one-on-one SAT coaching from expert tutors who know the digital SAT inside and out. Our students gain an average of 280 points — and we'll build a plan tailored to you.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link to="/results" className="btn-secondary">See Student Results</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Study Prime for SAT */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Why Study Prime for SAT Prep?</h2>
          <p style={pStyle}>
            Not all SAT tutoring is equal. At Study Prime, every student is matched with a tutor who specializes in the digital SAT — not a generalist who covers everything. Our tutors have scored in the 99th percentile and understand exactly where points are lost and how to win them back.
          </p>
          <p style={pStyle}>
            We don't rely on textbooks and practice sets alone. Each student gets a diagnostic assessment in their first session so we can identify precise skill gaps — whether that's comma splices in Reading & Writing or systems of equations in Math. From there, every session is targeted and efficient.
          </p>
          <p style={pStyle}>
            Our approach is built around the way the College Board actually tests. We teach pattern recognition, pacing strategies, and elimination techniques that apply directly to the adaptive digital format. Students walk into test day knowing exactly what to expect.
          </p>
        </div>
      </section>

      {/* Our SAT Prep Process */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Our SAT Prep Process</h2>
          <p style={pStyle}>
            We start with a full diagnostic — a timed, scored practice SAT that mirrors the real test format. This gives us a clear baseline and pinpoints exactly which question types and content areas need the most attention. No guesswork, no wasted sessions.
          </p>
          <p style={pStyle}>
            From the diagnostic, we build a personalized study plan broken into phases: foundational skill-building, targeted practice by question type, timed section drills, and finally full-length mock tests with review. Students progress at their own pace, but with clear milestones and accountability check-ins along the way.
          </p>
          <p style={pStyle}>
            Between sessions, students receive curated practice assignments drawn from official College Board materials. After each full mock test, we review every missed question together — because understanding why an answer is wrong is just as important as knowing the right one.
          </p>
          <div style={cardGridStyle}>
            {[
              { step: '01', title: 'Diagnostic Test', desc: 'Full practice SAT to establish your baseline and identify gaps.' },
              { step: '02', title: 'Custom Study Plan', desc: 'Personalized roadmap targeting your weakest areas first.' },
              { step: '03', title: 'Weekly Sessions', desc: 'One-on-one coaching with targeted drills and strategy work.' },
              { step: '04', title: 'Mock Tests & Review', desc: 'Timed full-length tests followed by detailed score analysis.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={cardStyle}>
                <div style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px' }}>{step}</div>
                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{title}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>What's Included in Our SAT Program</h2>
          <p style={pStyle}>
            Every Study Prime SAT student receives a complete, structured prep experience. Sessions cover all components of the digital SAT — Reading & Writing (text structure, purpose, transitions, grammar conventions) and Math (linear equations, quadratics, geometry, statistics, and word problems).
          </p>
          <p style={pStyle}>
            Beyond content review, we focus heavily on test strategy: how to handle the adaptive module system, how to manage time under pressure, and which question types to prioritize when running low on time. These meta-skills alone can be worth 50–100 points for many students.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginTop: '8px' }}>
            {[
              'Full diagnostic assessment',
              'Personalized study plan',
              'Weekly 60-minute sessions',
              'Official College Board practice materials',
              'Reading & Writing deep dives',
              'Math concept coaching',
              'Timed full-length mock tests',
              'Score analysis after every test',
              'Ongoing progress reports',
              'Test-day strategy coaching',
            ].map((item) => (
              <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SAT Score Improvements */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>SAT Score Improvements That Speak for Themselves</h2>
          <p style={pStyle}>
            Our results are driven by our methodology. Because we personalize every study plan and focus on the specific question types each student struggles with, our students see consistent, measurable gains — not just marginal improvements.
          </p>
          <p style={pStyle}>
            Students who start in the 1100–1200 range typically reach 1350–1450 with a full prep cycle. Those already scoring 1300+ commonly break into the 1500s. We're proud of these outcomes because they translate directly into better college options and merit scholarship opportunities.
          </p>
          <div style={cardGridStyle}>
            {[
              { stat: '+280', label: 'Average score increase' },
              { stat: '95%', label: 'Students who hit their target score' },
              { stat: '1500+', label: 'Score milestone reached by top students' },
              { stat: '3–6 mo', label: 'Typical prep timeline' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ ...cardStyle, textAlign: 'center' }}>
                <div style={statNumberStyle}>{stat}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{label}</div>
              </div>
            ))}
          </div>
          <p style={{ ...pStyle, marginTop: '24px' }}>
            Want to see individual student stories?{' '}
            <Link to="/results" style={{ color: 'var(--accent)', fontWeight: 600 }}>Browse our results page</Link> to read real score gains from Bay Area students.
          </p>
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
          <h2 style={h2Style}>Explore More at Study Prime</h2>
          <p style={pStyle}>
            SAT prep is just one part of what we do. Study Prime also offers expert tutoring in a range of subjects and serves students across the Bay Area.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link to="/act-prep" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>ACT Prep Tutoring →</Link>
            <Link to="/math-tutoring" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>Math Tutoring →</Link>
            <Link to="/tutoring/fremont" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>Tutoring in Fremont →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>Ready to Raise Your SAT Score?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Book a free 30-minute consultation. We'll review your goals, run a quick diagnostic, and build a plan to get you to 1500+.
          </p>
          <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
