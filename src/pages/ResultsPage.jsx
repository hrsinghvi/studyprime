import ResultsCarousel from '../components/ResultsCarousel/ResultsCarousel'
import Stats from '../components/Stats/Stats'

export default function ResultsPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <div className="container" style={{ paddingTop: '40px', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '8px' }}>Student Results</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '560px', margin: '0 auto 60px' }}>
          Real results from real students across the Bay Area.
        </p>
      </div>
      <Stats />
      <ResultsCarousel />
    </div>
  )
}
