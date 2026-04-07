import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Services from '../components/Services/Services'
import './ServicesPage.css'

const SERVICE_FAQS = [
  {
    question: 'What SAT tutoring services does Study Prime offer in the Bay Area?',
    answer: 'Study Prime offers one-on-one SAT prep tutoring in the Bay Area with personalized strategy sessions, full-length timed practice tests, detailed score analysis, and targeted drills for Math, Reading, and Writing. Our SAT tutors have scored in the 95th percentile or above and average student improvement is 200+ points.',
  },
  {
    question: 'How does ACT tutoring at Study Prime work?',
    answer: 'Our ACT tutoring covers all four sections — English, Math, Reading, and Science — plus the optional Essay. Each student gets a customized study plan based on their diagnostic results. Sessions focus on timing strategies, question pattern recognition, and subject-specific techniques that directly improve ACT scores.',
  },
  {
    question: 'Do you offer math tutoring for K–12 students?',
    answer: 'Yes. Study Prime provides math tutoring for all K–12 grade levels, from elementary arithmetic through Algebra, Geometry, Pre-Calculus, and AP Calculus. Tutors identify each student\'s exact gaps and build from foundational understanding up to grade-level mastery.',
  },
  {
    question: 'Can Study Prime help with college application essays and English writing?',
    answer: 'Absolutely. Our English & Writing tutoring covers essay structure, thesis development, grammar, literary analysis, and reading comprehension. We work with students on school assignments, AP English, standardized test writing sections, and college application personal statements.',
  },
  {
    question: 'What science subjects do you tutor?',
    answer: 'We tutor Biology, Chemistry, and Physics for middle and high school students. Sessions are aligned to your specific curriculum and teacher — covering concept clarity, lab prep, and proven exam strategies. We also prep students for AP Biology, AP Chemistry, and AP Physics.',
  },
  {
    question: 'Is tutoring available online or in-person in the Bay Area?',
    answer: 'Both options are available. In-person tutoring is offered throughout the Bay Area, including San Jose, Fremont, Cupertino, Sunnyvale, and surrounding cities. Online sessions use video call with shared digital whiteboards and are just as effective as in-person sessions.',
  },
  {
    question: 'How quickly will my student see results?',
    answer: 'Most students see measurable improvement within 4–8 weeks of consistent sessions. For SAT and ACT prep, we recommend starting at least 3 months before the test date. Subject tutoring improvements — such as grade increases and better test scores — are often visible within the first 2–3 weeks.',
  },
  {
    question: 'How much does tutoring cost at Study Prime?',
    answer: 'Tutoring rates are $20–$40 per hour depending on the subject and tutor experience level. We offer session packages for better per-session value. Contact us for a full pricing breakdown tailored to your specific needs and schedule.',
  },
]

export default function ServicesPage() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: SERVICE_FAQS.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'services-faq-schema'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    return () => {
      const s = document.getElementById('services-faq-schema')
      if (s) document.head.removeChild(s)
    }
  }, [])

  return (
    <div style={{ paddingTop: '40px' }}>
      <div className="container" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '8px' }}>Our Services</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto 60px' }}>
          Expert tutoring tailored to every student's needs and goals.
        </p>
      </div>

      <Services />

      {/* SEO FAQ Section */}
      <section className="services-faq" aria-labelledby="services-faq-heading">
        <div className="container">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <h2 id="services-faq-heading">Frequently Asked Questions About Our Tutoring Services</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', marginTop: '12px', maxWidth: '640px', margin: '12px auto 0' }}>
              Everything you need to know about SAT prep, ACT coaching, and K–12 subject tutoring in the Bay Area.
            </p>
          </div>

          <div className="services-faq__list">
            {SERVICE_FAQS.map(({ question, answer }) => (
              <div key={question} className="services-faq__item">
                <h3 className="services-faq__question">{question}</h3>
                <p className="services-faq__answer">{answer}</p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px' }}>
            <Link to="/contact" className="btn-primary">
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
