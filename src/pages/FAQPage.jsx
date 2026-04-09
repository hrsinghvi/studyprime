import FAQ, { FAQS } from '../components/FAQ/FAQ'
import SEO from '../components/SEO/SEO'

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://studyprime.net' },
      { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://studyprime.net/faq' },
    ],
  }

  return (
    <div style={{ paddingTop: '40px' }}>
      <SEO
        title="Tutoring FAQ | SAT, ACT & K-12 Questions Answered"
        description="Answers to the most common questions about Study Prime tutoring. SAT prep, ACT prep, subject tutoring, pricing, scheduling, and what to expect."
        canonical="/faq"
        schema={[faqSchema, breadcrumbSchema]}
      />

      <div className="container" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '8px' }}>Frequently Asked Questions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 60px' }}>
          Everything you need to know about Study Prime tutoring, SAT prep, ACT prep, and more.
          Can't find your answer?{' '}
          <a href="/contact" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Contact us directly.</a>
        </p>
      </div>

      <FAQ />
    </div>
  )
}
