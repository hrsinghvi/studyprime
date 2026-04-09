import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Science Tutoring Bay Area',
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
    'Expert science tutoring for Bay Area students. Biology, chemistry, and physics from experienced tutors.',
  url: 'https://studyprime.net/science-tutoring',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What science subjects do you tutor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We tutor Biology, Chemistry, Physics, Earth Science, Environmental Science, and AP versions of all these courses. Our tutors are subject-matter specialists, so students get matched with someone who knows their exact course material deeply.',
      },
    },
    {
      '@type': 'Question',
      name: 'My child is failing chemistry. Can you help them catch up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Chemistry is one of the most common courses students fall behind in, often due to gaps in foundational math skills (stoichiometry, dimensional analysis) or abstract concept areas (atomic structure, equilibrium). We diagnose the gaps and address them systematically, starting from where the student actually is rather than where the class assumes they are.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer AP Biology, AP Chemistry, and AP Physics tutoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer AP tutoring for AP Biology, AP Chemistry, AP Physics 1, AP Physics 2, and AP Physics C. Our AP science tutors are experienced with College Board standards and exam structure, including free-response question strategies and lab-based reasoning.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is physics tutoring different from other science tutoring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physics requires strong mathematical reasoning and the ability to translate word problems into equations. Our physics tutors focus not just on the formulas but on conceptual understanding — why an object accelerates, what energy conservation really means in context — so students can solve problems they\'ve never seen before rather than just memorizing worked examples.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can science tutoring help prepare for the SAT or ACT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, indirectly. Strong science reasoning skills help with the ACT Science section, which tests data interpretation and experimental design rather than memorized facts. Students who have worked with our science tutors tend to approach ACT Science passages with greater confidence.',
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

const faqItemStyle = {
  background: 'var(--bg-secondary)',
  borderRadius: 'var(--radius-md)',
  padding: '24px',
  marginBottom: '16px',
  border: '1px solid rgba(122, 125, 133, 0.2)',
}

export default function SciencePage() {
  return (
    <>
      <SEO
        title="Science Tutoring Bay Area | Biology, Chemistry, Physics"
        description="Expert science tutoring for Bay Area students. Biology, chemistry, and physics from experienced tutors."
        canonical="/science-tutoring"
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <div style={{ paddingTop: '40px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-block', background: 'var(--accent-subtle)', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, padding: '4px 14px', borderRadius: '999px', marginBottom: '20px', border: '1px solid var(--accent-subtle-2)' }}>
              Science Tutoring
            </div>
            <h1 style={{ marginBottom: '20px' }}>
              Science Tutoring in the Bay Area: Biology, Chemistry & Physics
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '36px' }}>
              Expert, one-on-one science tutoring from subject specialists who make complex concepts click. Whether your student is struggling with stoichiometry or needs AP Physics coaching, we're here.
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
          <h2 style={h2Style}>Science Subjects We Cover</h2>
          <p style={pStyle}>
            Science is a broad domain, and not all science tutors are equal. At Study Prime, we match every student with a tutor who has deep expertise in their specific course — a chemistry specialist for chemistry, a physics expert for physics. This matters because each science discipline has its own conceptual framework, vocabulary, and problem-solving approach.
          </p>
          <p style={pStyle}>
            We cover the full range of high school and AP science courses, from introductory Biology to AP Chemistry and both AP Physics 1/2 and AP Physics C (Mechanics and Electricity & Magnetism). We also tutor Earth Science and Environmental Science for students in middle school and early high school.
          </p>
          <div style={cardGridStyle}>
            {[
              { subject: 'Biology', desc: 'Cell biology, genetics, evolution, ecology, and AP Biology exam prep.' },
              { subject: 'Chemistry', desc: 'Stoichiometry, thermodynamics, equilibrium, organic chemistry, and AP Chem.' },
              { subject: 'Physics', desc: 'Mechanics, waves, electricity, magnetism, and AP Physics 1/2/C.' },
              { subject: 'Earth & Environmental', desc: 'Earth systems, climate science, ecology, and APES exam prep.' },
            ].map(({ subject, desc }) => (
              <div key={subject} style={cardStyle}>
                <div style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' }}>{subject}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Our Approach to Science Tutoring</h2>
          <p style={pStyle}>
            Science classes often move fast, and students who fall behind on one concept quickly find themselves lost as new topics build on the previous ones. Our tutors are skilled at diagnosing exactly where a student's understanding breaks down — and backing up far enough to rebuild from solid ground without spending time on material the student already knows.
          </p>
          <p style={pStyle}>
            For courses like Chemistry and Physics, a significant part of the challenge is mathematical. Students sometimes understand the concepts qualitatively but struggle when a problem requires setting up equations, tracking units through a multi-step calculation, or interpreting a graph. We address the math and science together, which is where many tutors fall short.
          </p>
          <p style={pStyle}>
            For Biology, the challenge is often volume — the sheer number of terms, pathways, and systems to understand and connect. We teach Biology through conceptual frameworks rather than pure memorization, which means students can reason about questions they haven't seen before rather than blanking when a question is phrased unexpectedly.
          </p>
        </div>
      </section>

      {/* AP Science */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>AP Science Exam Preparation</h2>
          <p style={pStyle}>
            AP science courses are among the most demanding in any high school curriculum, and the exams require both deep content knowledge and specific test-taking strategies. Our AP science tutors are experienced with the College Board's exam formats and scoring rubrics, including the multi-part free-response questions that trip up many students.
          </p>
          <p style={pStyle}>
            For AP Chemistry, we focus heavily on the quantitative reasoning and lab-based analysis that make up a large portion of the exam. For AP Physics, we coach students on how to approach unfamiliar scenarios using conservation laws and fundamental principles rather than formula-matching. For AP Biology, we teach the analytical thinking required for the FRQ section, where students must design experiments and interpret data — skills that go beyond content recall.
          </p>
          <p style={pStyle}>
            Our AP science students consistently score 4s and 5s. More importantly, they arrive at college science courses with a strong conceptual foundation rather than a surface-level familiarity with exam formats.
          </p>
        </div>
      </section>

      {/* Results */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Science Tutoring Results</h2>
          <p style={pStyle}>
            Students who commit to regular science tutoring with Study Prime see consistent, measurable progress. Grades improve, test anxiety decreases, and students develop a genuine understanding of the subject rather than a temporary familiarity that fades after the exam.
          </p>
          <div style={cardGridStyle}>
            {[
              { stat: '1–2', label: 'Letter grades improved per semester' },
              { stat: '87%', label: 'AP science students earning 4 or 5' },
              { stat: '6–8', label: 'Sessions to recover from a major gap' },
              { stat: 'Bio/Chem/Phys', label: 'Core subjects with specialist tutors' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ ...cardStyle, textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', lineHeight: 1, marginBottom: '8px' }}>{stat}</div>
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
          <h2 style={h2Style}>Explore More Study Prime Programs</h2>
          <p style={pStyle}>
            Science and math go hand in hand. Explore our other tutoring programs to build a well-rounded academic foundation.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link to="/math-tutoring" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>Math Tutoring →</Link>
            <Link to="/english-tutoring" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>English Tutoring →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>Ready to Master Biology, Chemistry, or Physics?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Book a free consultation. We'll assess your student's current standing, identify the gaps, and connect them with a specialist tutor who can make science make sense.
          </p>
          <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
