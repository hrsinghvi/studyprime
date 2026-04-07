import { useEffect } from 'react'
import Services from '../components/Services/Services'
import FAQ, { FAQS } from '../components/FAQ/FAQ'

export default function ServicesPage() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ question, answer }) => ({
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
      <FAQ />
    </div>
  )
}
