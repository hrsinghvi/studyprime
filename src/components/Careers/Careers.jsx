import { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import JobCard from './JobCard'
import ApplyModal from './ApplyModal'
import './Careers.css'

export const JOBS = [
  {
    id: 'sat-act-specialist',
    title: 'SAT/ACT Specialist',
    location: 'Bay Area, CA',
    type: 'Full-time',
    shortDesc: 'Experienced SAT/ACT tutors to join our Bay Area team.',
    fullDesc: 'We are seeking expert SAT/ACT tutors who are passionate about helping students reach their full potential. You will work one-on-one with students to develop personalized strategies, administer practice tests, and track measurable score improvements.',
    requirements: [
      '2+ years of SAT/ACT tutoring experience',
      'Scored in the 95th percentile or higher on the SAT or ACT',
      'Bachelor\'s degree required',
      'Strong communication and patience',
      'Flexible scheduling — evenings and weekends required',
    ],
    compensation: '$40–$70/hour depending on experience',
  },
  {
    id: 'math-tutor',
    title: 'Math Tutor (Elementary & Middle School)',
    location: 'Bay Area, CA',
    type: 'Part-time',
    shortDesc: 'Help elementary and middle school students master math fundamentals.',
    fullDesc: 'Join our team helping younger students build confidence and mastery in mathematics. You will cover topics from basic arithmetic through pre-algebra and geometry, working to identify and close gaps while building genuine understanding.',
    requirements: [
      'Bachelor\'s degree in Math, Education, or related field preferred',
      'Experience working with K-8 students',
      'Patience, enthusiasm, and genuine love for teaching',
      'Minimum 10 hours/week availability',
    ],
    compensation: '$35–$55/hour depending on experience',
  },
  {
    id: 'english-tutor',
    title: 'English & Language Arts Tutor',
    location: 'Bay Area, CA',
    type: 'Part-time',
    shortDesc: 'Specialize in writing, reading comprehension, and literature analysis.',
    fullDesc: 'We are looking for a skilled English tutor who can help students at all levels improve their writing, reading comprehension, and analytical skills. Sessions range from essay drafting to AP Literature exam preparation.',
    requirements: [
      'Strong writing and communication skills',
      'Experience tutoring or teaching English/Language Arts',
      'Ability to explain complex literary concepts clearly',
      'Minimum 10 hours/week availability',
    ],
    compensation: '$35–$55/hour depending on experience',
  },
  {
    id: 'science-tutor',
    title: 'Science Tutor (Biology, Chemistry, Physics)',
    location: 'Bay Area, CA',
    type: 'Part-time',
    shortDesc: 'Tutor high school science with hands-on, engaging methods.',
    fullDesc: 'We need science tutors who can make complex topics engaging and accessible for high school students. You will tutor in one or more of Biology, Chemistry, and Physics, covering coursework and AP exam preparation with clear, example-based explanations.',
    requirements: [
      'Bachelor\'s degree in a science field',
      'Experience with high school science curriculum',
      'Laboratory experience preferred',
      'Flexible scheduling available',
    ],
    compensation: '$38–$60/hour depending on experience and subject',
  },
]

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="careers" aria-labelledby="careers-heading">
      <div className="container">
        <div className="careers__layout">
          {/* Left: Job listings */}
          <div className="careers__listings">
            <div
              ref={headerRef}
              className={`reveal ${headerVisible ? 'visible' : ''}`}
            >
              <h2 id="careers-heading">Join Our Team</h2>
              <p className="careers__subtitle">
                We're hiring passionate tutors. Help us change education.
              </p>
            </div>

            <div className="careers__jobs">
              {JOBS.map((job, i) => (
                <JobCard
                  key={job.id}
                  job={job}
                  index={i}
                  onViewDetails={() => setSelectedJob(job)}
                />
              ))}
            </div>
          </div>

          {/* Right: CTA */}
          <aside className="careers__cta" aria-label="Join our team call to action">
            <h3 className="careers__cta-title">Passionate About Education?</h3>
            <p className="careers__cta-body">
              We're looking for tutors who care about student success. Apply now to
              join a team making a real difference in Bay Area students' lives.
            </p>
            <button
              className="btn-primary careers__cta-btn"
              onClick={() => setSelectedJob(JOBS[0])}
            >
              Apply Now
            </button>
          </aside>
        </div>
      </div>

      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  )
}
