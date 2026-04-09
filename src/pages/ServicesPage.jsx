import Services from '../components/Services/Services'
import FAQ, { FAQS } from '../components/FAQ/FAQ'
import SEO from '../components/SEO/SEO'

export default function ServicesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <div style={{ paddingTop: '40px' }}>
      <SEO
        title="SAT, ACT & K-12 Tutoring Services Bay Area"
        description="Expert SAT prep, ACT prep, math, English, and science tutoring for Bay Area students. Personalized plans. 95% success rate. Free consultation."
        canonical="/services"
        schema={faqSchema}
      />
      <div className="container" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '8px' }}>Our Services</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto 60px' }}>
          Expert tutoring tailored to every student's needs and goals.
        </p>
      </div>
      <Services />
      <FAQ />
    </div>
  )
}
