import './ResultsCarousel.css'

const REVIEWS = [
  { name: 'Aiden Park', profile: 'High School Senior, 1520 SAT', stars: 5, text: 'Study Prime completely changed how I approach the SAT. My score went from 1310 to 1520 in four months. The practice tests and weekly feedback were game changers.' },
  { name: 'Maya Rodriguez', profile: 'High School Junior, 34 ACT', stars: 5, text: 'I went from a 28 to a 34 on the ACT. My tutor was incredibly patient and broke down the science section in a way that finally made sense. Could not recommend more.' },
  { name: 'James Liu', profile: '10th Grade, AP Chemistry', stars: 5, text: 'My chemistry grade went from a C to an A in six weeks. The tutor explained concepts I had been confused about for months in just one session. Genuinely impressive.' },
  { name: 'Sofia Chen', profile: '8th Grade, Math', stars: 5, text: 'My daughter struggled with algebra for two years. After three months with Study Prime, she is confident and her grade went from a D to a B+. Incredible transformation.' },
  { name: 'Ethan Nguyen', profile: 'High School Senior, 1490 SAT', stars: 5, text: 'The tutors actually care about your progress. They tailor every session to exactly what you need. My SAT went up 180 points in three months of working together.' },
  { name: 'Priya Patel', profile: 'High School Junior, AP Biology', stars: 5, text: 'AP Bio was overwhelming until I started working with Study Prime. My tutor helped me build a study system and I ended up scoring a 5 on the exam.' },
  { name: 'Lucas Thompson', profile: '9th Grade, English', stars: 5, text: 'My son always struggled with writing essays. His English tutor taught him a clear structure and now he actually enjoys writing. His teacher noticed the difference immediately.' },
  { name: 'Hannah Kim', profile: 'High School Senior, 1540 SAT', stars: 5, text: 'From 1380 to 1540 in five months. The personalized approach made all the difference. I knew exactly which areas to focus on and the progress was steady the whole time.' },
  { name: 'Carlos Martinez', profile: '11th Grade, Spanish AP', stars: 5, text: 'My Spanish AP tutor helped me go from conversational to truly fluent in academic Spanish. I scored a 4 on the AP exam and felt totally prepared walking in.' },
  { name: 'Zoe Williams', profile: 'High School Junior, 32 ACT', stars: 5, text: 'I had taken the ACT twice and plateaued at 29. After eight sessions with Study Prime, I hit a 32. The timing strategies for the math section alone were worth it.' },
  { name: 'Raj Sharma', profile: '7th Grade, Math', stars: 5, text: 'My son was really behind in math and losing confidence fast. His tutor was patient, encouraging, and found ways to make the material click. He is now ahead of his class.' },
  { name: 'Emma Johnson', profile: 'High School Senior, 1500 SAT', stars: 5, text: 'I started Study Prime four months before my test with a 1290. My final score was 1500. The reading and writing sections improved the most thanks to focused practice each week.' },
  { name: 'David Okafor', profile: '10th Grade, Physics', stars: 5, text: 'Physics was my worst subject. My tutor turned it around by connecting equations to real examples. I went from failing to getting the highest grade on the final exam.' },
  { name: 'Isabella Torres', profile: 'High School Junior, 33 ACT', stars: 5, text: 'Study Prime helped me raise my ACT from 27 to 33 in under three months. The sessions were focused and my tutor always came prepared with a clear plan for improvement.' },
  { name: 'Noah Chang', profile: '12th Grade, Calculus', stars: 5, text: 'AP Calculus was the hardest class I had ever taken. My tutor broke every concept down from scratch and I finished the year with an A and a 5 on the AP exam.' },
]

function StarRating({ count }) {
  return (
    <div className="review-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#13ae53" aria-hidden="true">
          <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z"/>
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="review-card__header">
        <div>
          <p className="review-card__name">{review.name}</p>
          <p className="review-card__profile">{review.profile}</p>
        </div>
        <StarRating count={review.stars} />
      </div>
      <p className="review-card__text">{review.text}</p>
    </article>
  )
}

export default function ResultsCarousel() {
  return (
    <section className="carousel-section" aria-labelledby="results-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="results-heading">See What Our Students Say</h2>
          <p className="carousel-section__meta">15+ reviews &mdash; 4.9/5 average rating</p>
          <div className="section-underline" style={{ marginTop: '16px' }} />
        </div>
      </div>

      <div className="carousel-wrapper" aria-label="Student reviews carousel">
        <div className="carousel-track">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
