import ResultsCarousel from '../components/ResultsCarousel/ResultsCarousel'
import Stats from '../components/Stats/Stats'
import SEO from '../components/SEO/SEO'

export default function ResultsPage() {
  return (
    <div style={{ paddingTop: '40px' }}>
      <SEO
        title="Student Results & Score Improvements | Study Prime"
        description="See real score improvements from Study Prime students. Average +280 SAT points, 95% success rate. Real results from Bay Area students in Fremont, San Jose, Oakland & more."
        canonical="/results"
      />
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
