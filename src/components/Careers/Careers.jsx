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
      'Scored in the 95th percentile or higher on the SAT or ACT',
      'Strong communication and patience',
      'Flexible scheduling — evenings and weekends required',
    ],
    compensation: '$20–$40/hour depending on experience',
  },
  {
    id: 'math-tutor',
    title: 'Math Tutor (Elementary, Middle & High School)',
    location: 'Bay Area, CA',
    type: 'Part-time',
    shortDesc: 'Help students from elementary through high school master math.',
    fullDesc: 'Join our team helping students at every level build confidence and mastery in mathematics. You will cover topics ranging from basic arithmetic through pre-algebra, geometry, algebra, and up to pre-calculus and calculus, working to identify gaps and build genuine understanding.',
    requirements: [
      '1+ years experience teaching or tutoring math preferred',
      'Experience working with K-12 students',
      'Patience, enthusiasm, and genuine love for teaching',
    ],
    compensation: '$20–$40/hour depending on experience',
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
    compensation: '$20–$40/hour depending on experience',
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
    compensation: '$20–$40/hour depending on experience',
  },
]

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [headerRef, headerVisible] = useScrollReveal()

  return (
    <section className="careers" aria-labelledby="careers-heading">
      <div className="container">
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

      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </section>
  )
}
