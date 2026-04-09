import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'English Tutoring Bay Area',
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
    'Professional English tutoring for K-12 students in the Bay Area. Writing, reading comprehension, and grammar mastery.',
  url: 'https://studyprime.net/english-tutoring',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does English tutoring at Study Prime include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our English tutoring covers essay writing, reading comprehension, grammar and mechanics, literary analysis, and vocabulary development. We tailor sessions to the student\'s current class assignments and long-term goals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with college application essays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer dedicated college application essay coaching, including brainstorming, drafting, revision, and polishing for the Common App personal statement and supplemental essays. We help students find their authentic voice while crafting a compelling narrative.',
      },
    },
    {
      '@type': 'Question',
      name: 'My child struggles to write structured essays. Can tutoring help?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Essay structure — including thesis development, paragraph organization, and coherent argumentation — is one of the most teachable writing skills. We break essay writing down into concrete steps and practice each component before putting it all together.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you help with AP English Language or AP Literature?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer tutoring for both AP English Language & Composition and AP English Literature & Composition, including rhetorical analysis, free-response essays, literary analysis, and timed writing practice calibrated to AP scoring standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do online English tutoring sessions work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Online sessions are conducted via video call with a shared document editor so tutor and student can work on writing in real time. Students share drafts before sessions so the tutor arrives prepared with targeted feedback. It works seamlessly for writing, reading analysis, and grammar review.',
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

export default function EnglishPage() {
  return (
    <>
      <SEO
        title="English Tutoring Bay Area | Writing & Reading"
        description="Professional English tutoring for K-12 students in the Bay Area. Writing, reading comprehension, and grammar mastery."
        canonical="/english-tutoring"
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <div style={{ paddingTop: '40px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div style={{ maxWidth: '760px' }}>
            <div style={{ display: 'inline-block', background: 'var(--accent-subtle)', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 600, padding: '4px 14px', borderRadius: '999px', marginBottom: '20px', border: '1px solid var(--accent-subtle-2)' }}>
              English Tutoring
            </div>
            <h1 style={{ marginBottom: '20px' }}>
              English Tutoring in the Bay Area: Writing, Reading & Grammar Excellence
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '640px', marginBottom: '36px' }}>
              From crafting persuasive essays to mastering literary analysis, our English tutors help Bay Area students communicate with clarity, precision, and confidence at every grade level.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary">Book a Free Session</Link>
              <Link to="/results" className="btn-secondary">See Student Results</Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We Cover */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>What Our English Tutoring Covers</h2>
          <p style={pStyle}>
            English is one of those subjects where progress is sometimes invisible until it suddenly isn't — and then a student's grade, their confidence in class discussions, and their ability to handle college-level reading all shift at once. We work on the foundational skills that make that shift happen deliberately rather than by accident.
          </p>
          <p style={pStyle}>
            Our tutors work across all areas of English Language Arts: argumentative and analytical essay writing, reading comprehension and inference, grammar and sentence mechanics, literary analysis, vocabulary in context, and timed writing under test conditions. Whether your student needs help with a specific assignment or wants a comprehensive writing program, we can build around their needs.
          </p>
          <div style={cardGridStyle}>
            {[
              { area: 'Essay Writing', desc: 'Thesis development, argument structure, evidence integration, and revision.' },
              { area: 'Reading Comprehension', desc: 'Active reading strategies, inference, main idea, and author\'s purpose.' },
              { area: 'Grammar & Mechanics', desc: 'Punctuation, sentence structure, modifier placement, and clarity.' },
              { area: 'Literary Analysis', desc: 'Theme, characterization, symbolism, and evidence-based textual interpretation.' },
            ].map(({ area, desc }) => (
              <div key={area} style={cardStyle}>
                <div style={{ color: 'var(--accent)', fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' }}>{area}</div>
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
          <h2 style={h2Style}>Our Approach to English Instruction</h2>
          <p style={pStyle}>
            Writing is one of the hardest skills to teach well because it requires both structured technique and individual voice. We teach technique explicitly — how to build a thesis, how to structure body paragraphs, how to transition between ideas — while always making space for the student's own perspective and style. The goal is never to write like a template; it's to write clearly and compellingly.
          </p>
          <p style={pStyle}>
            For reading comprehension, we teach active reading strategies that translate across every genre and grade level. Students learn to annotate purposefully, identify the author's central claim, and distinguish strong evidence from weak evidence. These skills are directly applicable to in-class Socratic seminars, reading quizzes, and standardized tests like the SAT and ACT.
          </p>
          <p style={pStyle}>
            Grammar instruction at Study Prime is integrated rather than isolated. We don't make students memorize rules in a vacuum — we teach grammar in the context of their own writing, which makes the lessons stick. Students see exactly how a misplaced modifier or a comma splice undermines their credibility as a writer, and they fix it in real time.
          </p>
        </div>
      </section>

      {/* AP & College Prep */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>AP English & College Application Writing</h2>
          <p style={pStyle}>
            For students taking AP English Language & Composition or AP English Literature & Composition, we offer specialized tutoring that mirrors the AP exam format. This includes rhetorical analysis essays, argument synthesis, close reading of prose and poetry, and timed writing practice with feedback calibrated to the AP rubric.
          </p>
          <p style={pStyle}>
            We also offer dedicated college application essay coaching for rising seniors. The personal statement and supplemental essays are among the most important writing tasks a student will tackle, yet most students have very little experience writing in a personal, reflective voice. We walk students through every step of the process: brainstorming topics, finding the right story angle, drafting, and revision — usually across three to five focused sessions.
          </p>
          <p style={pStyle}>
            Students who work with us on college essays often note that the process itself helped them understand themselves better. A well-crafted personal statement isn't just good for admissions — it's a genuine piece of writing to be proud of.
          </p>
        </div>
      </section>

      {/* Results */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Results Our English Students See</h2>
          <p style={pStyle}>
            Students who work consistently with a Study Prime English tutor typically move up a full letter grade within one semester. More importantly, they report feeling less anxious about writing assignments and more capable of tackling challenging texts independently. Those gains persist long after tutoring ends.
          </p>
          <div style={cardGridStyle}>
            {[
              { stat: '1–2', label: 'Letter grades improved per semester' },
              { stat: '3–5', label: 'Sessions to complete a strong college essay' },
              { stat: '4 or 5', label: 'AP English score target for our students' },
              { stat: 'K–12+', label: 'Grade levels supported' },
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
          <h2 style={h2Style}>Explore More Study Prime Services</h2>
          <p style={pStyle}>
            Strong English skills complement every other subject. Explore how our tutoring programs work together.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <Link to="/math-tutoring" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>Math Tutoring →</Link>
            <Link to="/sat-prep" style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9375rem' }}>SAT Prep (Reading & Writing) →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>Ready to Strengthen Your Writing & Reading?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Book a free consultation today. We'll discuss your student's current challenges and design a program that builds lasting English skills.
          </p>
          <Link to="/contact" className="btn-primary">Book a Free Consultation</Link>
        </div>
      </section>
    </>
  )
}
