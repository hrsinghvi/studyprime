import useScrollReveal from '../../hooks/useScrollReveal'

export default function JobCard({ job, index, onViewDetails }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <article
      ref={ref}
      className={`job-card reveal ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="job-card__header">
        <div>
          <h3 className="job-card__title">{job.title}</h3>
          <p className="job-card__location">{job.location}</p>
        </div>
        <span className="job-card__badge">{job.type}</span>
      </div>
      <p className="job-card__desc">{job.shortDesc}</p>
      <button
        className="job-card__link"
        onClick={onViewDetails}
        aria-label={`View details for ${job.title}`}
      >
        View Details →
      </button>
    </article>
  )
}
