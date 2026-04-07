import Services from '../components/Services/Services'

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <div className="container" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '8px' }}>Our Services</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto 60px' }}>
          Expert tutoring tailored to every student's needs and goals.
        </p>
      </div>
      <Services />
    </div>
  )
}
