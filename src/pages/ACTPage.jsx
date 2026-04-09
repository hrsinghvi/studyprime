import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ACT Prep Tutoring',
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
    'Professional ACT prep tutoring across the Bay Area. Expert tutors, proven strategies. Schedule a free consultation today.',
  url: 'https://studyprime.net/act-prep',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a good ACT score for college admissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A composite score of 28 or above is generally competitive at most four-year universities. A 32+ is considered excellent and is competitive at top-tier schools. Our goal is to help every student reach a 34+ composite with consistent prep.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is ACT tutoring at Study Prime structured?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We begin with a full-length timed ACT diagnostic to identify your baseline composite and subscores. From there, we build a custom plan targeting your lowest-scoring sections first, with a mix of content review, strategy drills, and full practice tests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should my student take the SAT or the ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both tests are accepted equally by all U.S. colleges. The best choice depends on the student\'s strengths. The ACT has a science section and slightly more emphasis on speed, while the SAT favors careful reading and analytical reasoning. We offer free diagnostic tests for both so you can compare scores objectively.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does ACT prep take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most students see meaningful gains in 10–16 sessions over 2–3 months. Students who begin prep further in advance (4–6 months before the test) tend to see the highest gains as there is more time to build and reinforce skills.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cover the ACT Science section?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The ACT Science section is less about memorized biology or chemistry and more about interpreting data, reading graphs, and understanding experimental design. We teach specific reading strategies that make this section approachable even for students who don\'t consider themselves science-oriented.',
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

export default function ACTPage() {
  return (
    <>
      <SEO
        title="ACT Prep Tutoring Bay Area"
        description="Professional ACT prep tutoring across the Bay Area. Expert tutors, proven strategies. Schedule a free consultation today."
        canonical="/act-prep"
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <div style={{ paddingTop: '40px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-block', background: 'var(--accent-subtle)', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, padding: '4px 14px', borderRadius: '999px', marginBottom: '20px', border: '1px solid var(--accent-subtle-2)' }}>
              ACT Prep Tutoring
            </div>
            <h1 style={{ marginBottom: '20px' }}>
              ACT Prep Tutoring in the Bay Area: Reach a 34+ Composite Score
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '36px' }}>
              Expert, one-on-one ACT coaching designed around your unique strengths and weaknesses. Our tutors build targeted strategies for every section so you walk in prepared and confident.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
              <Link to="/results" className="btn-secondary">See Student Results</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why ACT at Study Prime */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Why ACT at Study Prime?</h2>
          <p style={pStyle}>
            The ACT is a demanding, fast-paced test that rewards speed as much as accuracy. Scoring 34+ requires not just content mastery but efficient time management across four rigorous sections — English, Math, Reading, and Science. Our tutors are ACT specialists who have coached hundreds of Bay Area students through this exact challenge.
          </p>
          <p style={pStyle}>
            We don't just drill practice problems. We teach you how to read the test itself: identifying the question type in under five seconds, applying the right strategy, and moving on without second-guessing. This systematic approach is what separates students who plateau from those who break through to the 30s and beyond.
          </p>
          <p style={pStyle}>
            Every Study Prime student starts with a real diagnostic ACT, scored and reviewed in detail. From that baseline, we design a prep plan that's efficient, measurable, and specific to how you test — because a student weak in ACT Science needs a different plan than one struggling with ACT Reading pace.
          </p>
        </div>
      </section>

      {/* Our ACT Approach */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Our ACT Approach</h2>
          <p style={pStyle}>
            We cover all four sections of the ACT with section-specific strategies that match how the test is actually structured. For ACT English, we focus on grammar rules most commonly tested — punctuation, sentence structure, and rhetorical skills. For ACT Math, we review pre-calculus concepts, coordinate geometry, and trigonometry with attention to the question types that appear most frequently.
          </p>
          <p style={pStyle}>
            ACT Reading is all about pace and passage strategy. We teach students how to prioritize question types, navigate different passage styles (literary narrative vs. social science vs. natural science), and avoid the traps that make students lose time rereading. ACT Science is similarly strategic — students learn to interpret data representations and spot the key variables in experiments without getting lost in scientific jargon.
          </p>
          <p style={pStyle}>
            Between each content phase, we run timed section drills under real test conditions. This builds both accuracy and stamina so that by the time you take the real test, the pacing feels natural rather than forced.
          </p>
          <div style={cardGridStyle}>
            {[
              { section: 'English', desc: 'Grammar rules, punctuation, sentence structure, and rhetorical skills.' },
              { section: 'Math', desc: 'Algebra, geometry, trigonometry, and strategic calculator use.' },
              { section: 'Reading', desc: 'Passage strategies, active reading, and pace management techniques.' },
              { section: 'Science', desc: 'Data interpretation, experimental design, and scientific reasoning.' },
            ].map(({ section, desc }) => (
              <div key={section} style={cardStyle}>
                <div style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' }}>ACT {section}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACT vs SAT */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>ACT vs SAT: Which Test is Right for You?</h2>
          <p style={pStyle}>
            Choosing between the ACT and SAT is one of the most important decisions in a student's test prep journey. Both exams are accepted at every major college in the United States, but they test slightly different skill sets and reward different types of thinkers.
          </p>
          <p style={pStyle}>
            The ACT tends to favor students who are fast, methodical readers and who are comfortable with a wider range of math topics including trigonometry. It also has a Science section that tests data analysis rather than scientific knowledge — a distinction that surprises many students. The digital SAT, by contrast, is more adaptive and places higher emphasis on reasoning through complex passages and layered math concepts.
          </p>
          <p style={pStyle}>
            We recommend taking a free diagnostic for both tests before committing. Many students perform significantly better on one format. We can help you compare your results and determine which test gives you the best path to your target score.{' '}
            <Link to="/sat-prep" style={{ color: 'var(--accent)', fontWeight: 600 }}>Learn about our SAT prep program</Link> if you're weighing both options.
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>ACT Success Metrics</h2>
          <p style={pStyle}>
            Our ACT students consistently see composite score gains that open new college and scholarship doors. Whether you're starting at a 22 and aiming for a 28, or already at a 30 and pushing for a 34+, our program is calibrated to your goal.
          </p>
          <div style={cardGridStyle}>
            {[
              { stat: '34+', label: 'Target composite score for top students' },
              { stat: '+5.2', label: 'Average composite score gain' },
              { stat: '93%', label: 'Students who reach their target composite' },
              { stat: '10–16', label: 'Sessions for full prep cycle' },
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
          <h2 style={h2Style}>More from Study Prime</h2>
          <p style={pStyle}>
            Study Prime offers comprehensive tutoring services across the Bay Area. Explore more of what we do.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link to="/sat-prep" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>SAT Prep Tutoring →</Link>
            <Link to="/tutoring/san-jose" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>Tutoring in San Jose →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>Ready to Boost Your ACT Score?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Book a free consultation and take a diagnostic test. We'll identify exactly where your points are going and build a plan to get you to 34+.
          </p>
          <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
