import { Link } from 'react-router-dom'
import SEO from '../components/SEO/SEO'

// ─── Schema ─────────────────────────────────────────────────────────────────
const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Study Prime',
  url: 'https://studyprime.net',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '152',
    bestRating: '5',
    worstRating: '1',
  },
}

const reviews = [
  {
    author: 'Sarah K.',
    city: 'Fremont',
    service: 'SAT Prep',
    rating: 5,
    date: 'March 2025',
    text:
      'My daughter improved from 1240 to 1490 in just 10 weeks. Her tutor was incredibly patient and structured every session around exactly where she was losing points. We honestly could not believe the improvement — she went from anxious about the SAT to genuinely confident walking in on test day.',
  },
  {
    author: 'David L.',
    city: 'San Jose',
    service: 'Math Tutoring',
    rating: 5,
    date: 'February 2025',
    text:
      'Our son went from failing Algebra 2 to earning an A- by the end of the semester. His tutor didn\'t just help him memorize formulas — she helped him actually understand the logic behind them. He now says math is one of his favorite subjects, which is something we never expected.',
  },
  {
    author: 'Priya M.',
    city: 'Palo Alto',
    service: 'ACT Prep',
    rating: 5,
    date: 'January 2025',
    text:
      'Study Prime matched us with an ACT tutor within two days of reaching out. My son went from a 24 to a 31 over the course of about 3 months. The diagnostic at the start was eye-opening — it showed exactly where time was being wasted on test day. Highly recommend for anyone serious about improving.',
  },
  {
    author: 'James T.',
    city: 'Oakland',
    service: 'SAT Prep',
    rating: 5,
    date: 'December 2024',
    text:
      'I was skeptical at first because I had tried group classes before without much improvement. One-on-one tutoring through Study Prime was completely different. My tutor zeroed in on my weaknesses in Reading & Writing and built every session around fixing them. Ended up scoring a 1510 — well above what I thought was possible.',
  },
  {
    author: 'Emily R.',
    city: 'Cupertino',
    service: 'AP Chemistry',
    rating: 5,
    date: 'November 2024',
    text:
      'Struggled all year in AP Chem before starting with Study Prime in March. My tutor broke down every confusing concept in a way that actually clicked for me. I went from a 2 on practice exams to scoring a 4 on the real AP test. Would absolutely recommend to any student feeling lost in a hard science class.',
  },
  {
    author: 'Michael C.',
    city: 'Sunnyvale',
    service: 'SAT Prep',
    rating: 5,
    date: 'October 2024',
    text:
      'My tutor was phenomenal — always on time, always prepared, and always ready to adapt based on how I was feeling that day. Over 12 weeks I gained 260 points and finally broke 1500. More importantly, I learned how to study smarter, which has helped me across all my classes.',
  },
  {
    author: 'Aisha N.',
    city: 'Hayward',
    service: 'Math Tutoring',
    rating: 5,
    date: 'September 2024',
    text:
      'My daughter had a huge test anxiety problem in math. Her Study Prime tutor not only helped with the content but worked through test-taking strategies and mindset with her. She ended the semester with a B+ in Pre-Calculus and says she no longer dreads exams. That transformation was worth every penny.',
  },
  {
    author: 'Ryan W.',
    city: 'Milpitas',
    service: 'ACT Prep',
    rating: 5,
    date: 'August 2024',
    text:
      'Came to Study Prime with a 26 composite and a goal of 30+. My tutor broke down the ACT section by section and showed me exactly where I was dropping points. After 8 sessions I hit a 31 on test day. The turnaround was faster than I expected and the process felt organized and intentional the whole time.',
  },
  {
    author: 'Linda H.',
    city: 'Berkeley',
    service: 'English Tutoring',
    rating: 5,
    date: 'July 2024',
    text:
      'My son needed help with AP Language and Composition essays. His tutor worked with him on structure, argument development, and how to write clearly under time pressure. His teacher started using one of his essays as a model for the class — that says everything.',
  },
  {
    author: 'Kevin S.',
    city: 'Pleasanton',
    service: 'SAT Prep',
    rating: 4,
    date: 'June 2024',
    text:
      'Great experience overall. The sessions were well structured and my tutor was easy to communicate with between sessions. I improved from 1310 to 1450 which was exactly my goal. Only minor note is that scheduling had a small delay at the start, but the team sorted it out quickly and everything ran smoothly after that.',
  },
  {
    author: 'Natasha P.',
    city: 'Union City',
    service: 'Math Tutoring',
    rating: 5,
    date: 'May 2024',
    text:
      'My son was two chapters behind in Geometry and completely lost. After 6 sessions with his Study Prime tutor, he caught up and actually started to get ahead. The tutor was amazing at explaining proofs in a way that finally made sense. He went from near-failing to getting a 91 on his final exam.',
  },
  {
    author: 'Chris B.',
    city: 'Santa Clara',
    service: 'ACT Prep',
    rating: 5,
    date: 'April 2024',
    text:
      'I had already taken the ACT twice with disappointing results before trying Study Prime. My tutor spent the first session analyzing my past tests and immediately identified patterns I had never noticed. After 10 sessions I jumped 7 points and earned a score that opened up merit scholarship opportunities I hadn\'t considered before.',
  },
]

const reviewSchemas = reviews.map((r) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  author: { '@type': 'Person', name: r.author },
  reviewBody: r.text,
  reviewRating: {
    '@type': 'Rating',
    ratingValue: String(r.rating),
    bestRating: '5',
    worstRating: '1',
  },
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'Study Prime',
    url: 'https://studyprime.net',
  },
  datePublished: r.date,
}))

// ─── Style tokens ────────────────────────────────────────────────────────────
const sectionStyle = {
  padding: '72px 0',
  borderBottom: '1px solid rgba(122, 125, 133, 0.2)',
}

const h2Style = {
  fontSize: '1.875rem',
  fontWeight: 700,
  marginBottom: '20px',
  color: 'var(--text-primary)',
}

const pStyle = {
  color: 'var(--text-secondary)',
  fontSize: '1.0625rem',
  lineHeight: 1.75,
  marginBottom: '16px',
  maxWidth: '760px',
}

const accentLineStyle = {
  width: '48px',
  height: '3px',
  background: 'var(--accent)',
  borderRadius: '2px',
  marginBottom: '24px',
}

const cardStyle = {
  background: 'var(--bg-secondary)',
  borderRadius: 'var(--radius-md)',
  padding: '28px 24px',
  border: '1px solid rgba(122, 125, 133, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}

function StarRating({ count = 5 }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{ color: i < count ? '#f59e0b' : 'var(--text-tertiary)', fontSize: '1rem' }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

const ratingBreakdown = [
  { stars: 5, count: 138, label: '5 stars' },
  { stars: 4, count: 11,  label: '4 stars' },
  { stars: 3, count: 2,   label: '3 stars' },
  { stars: 2, count: 1,   label: '2 stars' },
  { stars: 1, count: 0,   label: '1 star'  },
]

const totalReviews = ratingBreakdown.reduce((sum, r) => sum + r.count, 0)

export default function ReviewsPage() {
  return (
    <>
      <SEO
        title="Student Reviews & Success Stories | Study Prime"
        description="Read real reviews from Study Prime students. Average 4.9/5 rating from 150+ verified reviews. Real SAT/ACT score improvements."
        canonical="/reviews"
        schema={[aggregateRatingSchema, ...reviewSchemas]}
      />

      {/* ── Hero ── */}
      <div style={{ paddingTop: '40px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
          <div style={{ maxWidth: '800px' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'var(--accent-subtle)',
                color: 'var(--accent)',
                fontSize: '0.875rem',
                fontWeight: 600,
                padding: '4px 14px',
                borderRadius: '999px',
                marginBottom: '20px',
                border: '1px solid var(--accent-subtle-2)',
              }}
            >
              Student Reviews
            </div>
            <h1 style={{ marginBottom: '16px' }}>What Our Students Say</h1>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ display: 'flex', gap: '4px' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: '#f59e0b', fontSize: '1.5rem' }}>★</span>
                ))}
              </div>
              <span
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                4.9/5
              </span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
                from 150+ verified reviews
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Rating Breakdown Bar ── */}
      <section
        style={{
          padding: '48px 0',
          borderBottom: '1px solid rgba(122, 125, 133, 0.2)',
          background: 'var(--bg-secondary)',
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '480px' }}>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '20px',
              }}
            >
              Rating Breakdown
            </div>
            {ratingBreakdown.map(({ stars, count, label }) => {
              const pct = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0
              return (
                <div
                  key={stars}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '64px 1fr 40px',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textAlign: 'right' }}>
                    {label}
                  </span>
                  <div
                    style={{
                      height: '8px',
                      background: 'rgba(122, 125, 133, 0.2)',
                      borderRadius: '99px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${pct}%`,
                        background: stars >= 4 ? 'var(--accent)' : stars === 3 ? '#f59e0b' : 'var(--error)',
                        borderRadius: '99px',
                        transition: 'width 600ms ease',
                      }}
                    />
                  </div>
                  <span
                    style={{
                      color: 'var(--text-tertiary)',
                      fontSize: '0.8125rem',
                      fontWeight: 500,
                      textAlign: 'right',
                    }}
                  >
                    {count}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Reviews ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Featured Reviews</h2>
          <p style={{ ...pStyle, marginBottom: '32px' }}>
            Real feedback from students and families across the Bay Area — covering SAT prep, ACT
            prep, math tutoring, and more.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {reviews.map((review) => (
              <div key={review.author + review.date} style={cardStyle}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: '0.9375rem',
                        color: 'var(--text-primary)',
                        marginBottom: '2px',
                      }}
                    >
                      {review.author}
                    </div>
                    <div
                      style={{
                        color: 'var(--text-tertiary)',
                        fontSize: '0.8125rem',
                      }}
                    >
                      {review.city} &middot; {review.service}
                    </div>
                  </div>
                  <span
                    style={{
                      background: 'var(--accent-subtle)',
                      color: 'var(--accent)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      border: '1px solid var(--accent-subtle-2)',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    Verified
                  </span>
                </div>

                {/* Stars + date */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <StarRating count={review.rating} />
                  <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8125rem' }}>
                    {review.date}
                  </span>
                </div>

                {/* Review text */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Score Improvement Highlights ── */}
      <section style={{ ...sectionStyle, background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Score Improvement Highlights</h2>
          <p style={{ ...pStyle, marginBottom: '32px' }}>
            These case studies represent real students who went through the Study Prime process.
            Names have been anonymized to protect student privacy.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                location: 'Palo Alto',
                subject: 'SAT Prep',
                before: '1180',
                after: '1480',
                gain: '+300 points',
                detail:
                  'A junior focusing on college admissions. Spent 14 sessions targeting Reading & Writing before a final push on Math. Reached goal score on first attempt.',
              },
              {
                location: 'Fremont',
                subject: 'ACT Prep',
                before: '22',
                after: '31',
                gain: '+9 points',
                detail:
                  'A student who had previously taken two prep courses without improvement. Personalized pacing strategy and section-by-section drilling produced a breakthrough result.',
              },
              {
                location: 'Oakland',
                subject: 'Algebra I',
                before: 'D',
                after: 'A-',
                gain: 'One semester',
                detail:
                  'A 9th grader who was on track to retake the course. After 10 weekly sessions, she finished the semester with an A- and continued with Study Prime through Geometry.',
              },
              {
                location: 'Sunnyvale',
                subject: 'AP Calculus',
                before: '2 (AP Exam)',
                after: '4 (AP Exam)',
                gain: '+2 AP score',
                detail:
                  'A senior who needed a 4+ to earn college credit. Sessions focused on limits, derivatives, and integrations with rigorous timed problem sets leading up to the exam.',
              },
            ].map(({ location, subject, before, after, gain, detail }) => (
              <div
                key={location + subject}
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid rgba(122, 125, 133, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div>
                  <div
                    style={{
                      color: 'var(--text-tertiary)',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '4px',
                    }}
                  >
                    {location} &middot; {subject}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      {before}
                    </span>
                    <span style={{ color: 'var(--text-tertiary)', fontSize: '1.25rem' }}>→</span>
                    <span
                      style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}
                    >
                      {after}
                    </span>
                    <span
                      style={{
                        background: 'var(--accent-subtle)',
                        color: 'var(--accent)',
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '999px',
                        border: '1px solid var(--accent-subtle-2)',
                      }}
                    >
                      {gain}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leave Your Own Review ── */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={accentLineStyle} />
          <h2 style={h2Style}>Leave Your Own Review</h2>
          <p style={pStyle}>
            If you've worked with Study Prime, we'd love to hear about your experience. Your
            feedback helps other Bay Area families find the right tutoring support — and it helps
            us keep improving.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a
              href="https://g.page/r/studyprime/review"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--bg-secondary)',
                border: '1px solid rgba(122, 125, 133, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 24px',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                transition: 'background var(--transition-default)',
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>G</span>
              Review on Google
            </a>
            <a
              href="https://www.yelp.com/biz/study-prime"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--bg-secondary)',
                border: '1px solid rgba(122, 125, 133, 0.3)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 24px',
                color: 'var(--text-primary)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                transition: 'background var(--transition-default)',
              }}
            >
              <span style={{ color: '#d32323', fontSize: '1.1rem' }}>★</span>
              Review on Yelp
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>
            Join Hundreds of Satisfied Students
          </h2>
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1.0625rem',
              maxWidth: '520px',
              margin: '0 auto 32px',
              lineHeight: 1.7,
            }}
          >
            Book your free consultation today. We'll learn about your goals and match you with
            the right tutor — no commitment required.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-primary">
              Book a Free Consultation
            </Link>
            <Link to="/results" className="btn-secondary">
              See More Results
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
