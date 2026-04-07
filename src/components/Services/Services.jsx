import useScrollReveal from '../../hooks/useScrollReveal'
import './Services.css'

const SERVICES = [
  {
    title: 'SAT Prep',
    description: 'Targeted SAT preparation with full-length practice tests, score analysis, and personalized strategy. Average student improvement: 200+ points.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="12" width="32" height="24" rx="3" stroke="#13ae53" strokeWidth="2"/>
        <path d="M16 20h16M16 26h10" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="36" cy="34" r="6" fill="#262731" stroke="#13ae53" strokeWidth="2"/>
        <path d="M33.5 34l2 2 3.5-3.5" stroke="#13ae53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'ACT Prep',
    description: 'Comprehensive ACT coaching covering English, Math, Reading, and Science. Strategic timing and question techniques that actually work.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M10 36L24 12l14 24H10z" stroke="#13ae53" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M17 28h14" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Mathematics',
    description: 'From arithmetic to calculus — we meet students where they are. Clear explanations, real practice, and the confidence to solve hard problems.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M12 24h24M24 12v24" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 14l4 4M30 14l4 4M14 34l4-4M30 34l4-4" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'English & Writing',
    description: 'Essay structure, grammar, literary analysis, and reading comprehension. For assignments, standardized tests, and college applications.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M14 14h20v24H14z" stroke="#13ae53" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M19 20h10M19 25h10M19 30h6" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 8l6 6-14 14-7 1 1-7L30 8z" stroke="#13ae53" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Science',
    description: 'Biology, Chemistry, and Physics tutoring aligned to your curriculum. Concept clarity, lab prep, and exam strategies for high school science.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M20 10v14l-8 14h24L28 24V10H20z" stroke="#13ae53" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M20 10h8" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="32" r="1.5" fill="#13ae53"/>
        <circle cx="28" cy="34" r="1.5" fill="#13ae53"/>
      </svg>
    ),
  },
  {
    title: 'Languages',
    description: 'Spanish, French, Mandarin, and more. Conversational practice, grammar foundations, and AP Language exam preparation.',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="14" stroke="#13ae53" strokeWidth="2"/>
        <path d="M24 10c0 0-6 6-6 14s6 14 6 14M24 10c0 0 6 6 6 14s-6 14-6 14M10 24h28" stroke="#13ae53" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="services" aria-labelledby="services-heading">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h2 id="services-heading">What We Offer</h2>
          <div className="section-underline" />
        </div>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <article
      ref={ref}
      className={`service-card reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="service-card__icon" aria-hidden="true">
        {service.icon}
      </div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.description}</p>
    </article>
  )
}
