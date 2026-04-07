import useScrollReveal from '../../hooks/useScrollReveal'
import useCountUp from './useCountUp'
import './Stats.css'

const STATS = [
  {
    value: 280,
    suffix: '+',
    label: 'Average SAT Score Improvement',
    description: 'Points gained by students who complete our full SAT program',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Students Tutored',
    description: 'Bay Area students who have worked with Study Prime tutors',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Success Rate',
    description: 'Of students achieve their target score or grade improvement',
  },
  {
    value: 4.9,
    suffix: '/5',
    label: 'Average Rating',
    description: 'Based on reviews from students and parents across all subjects',
    isDecimal: true,
  },
]

function StatCard({ stat, index }) {
  const [ref, isVisible] = useScrollReveal()
  const count = useCountUp(stat.isDecimal ? 49 : stat.value, 1200, isVisible)
  const display = stat.isDecimal ? (count / 10).toFixed(1) : count.toLocaleString()

  return (
    <article
      ref={ref}
      className={`stat-card reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="stat-card__number" aria-live="polite">
        <span className="serif">{display}</span>
        <span className="stat-card__suffix">{stat.suffix}</span>
      </div>
      <h3 className="stat-card__label">{stat.label}</h3>
      <p className="stat-card__desc">{stat.description}</p>
    </article>
  )
}

export default function Stats() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="stats" aria-labelledby="stats-heading">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h2 id="stats-heading">
            The <em className="serif">Results</em> Speak
          </h2>
          <div className="section-underline" style={{ width: '80px' }} />
        </div>

        <div className="stats__grid">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
