import React, { useState } from 'react'
import useScrollReveal from '../../hooks/useScrollReveal'
import './FAQ.css'

const FAQS = [
  {
    question: 'How long does it take to see results?',
    answer: 'Most students see meaningful improvement within 4-8 weeks of consistent sessions. For standardized test prep, we recommend starting at least 3 months before your test date for the best results. Subject tutoring improvements are often visible within 2-3 weeks.',
  },
  {
    question: 'What subjects do you tutor?',
    answer: 'We offer tutoring in SAT and ACT prep, Mathematics (K-12 through calculus), English and Language Arts, Biology, Chemistry, Physics, History, and Languages including Spanish, French, and Mandarin. If your subject is not listed, contact us and we will do our best to match you with the right tutor.',
  },
  {
    question: 'How are your tutors qualified?',
    answer: 'All Study Prime tutors are rigorously vetted. They hold bachelor\'s degrees or higher in their subject areas, have demonstrated teaching ability, and score in the 95th percentile or above on any standardized test they teach. We also conduct ongoing quality reviews to ensure consistently excellent sessions.',
  },
  {
    question: 'Do you offer group sessions?',
    answer: 'We offer small group sessions of 2-4 students for select SAT and ACT prep programs. Group sessions offer a more affordable option while maintaining a high level of personalization. Contact us to ask about current group availability.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our rates vary by subject and session type. One-on-one tutoring starts at competitive Bay Area rates with no long-term contracts required. We offer session packages that provide better per-session value. Contact us for a full pricing breakdown tailored to your needs.',
  },
  {
    question: 'Can I schedule a free consultation?',
    answer: 'Yes. We offer a free 20-minute consultation to discuss your goals, assess your current standing, and match you with the right tutor. Fill out the contact form and we will schedule a time that works for you.',
  },
  {
    question: 'Do you guarantee score improvements?',
    answer: 'We stand behind our methods. Students who complete our full SAT or ACT prep program and follow through on all practice and homework consistently see significant score improvements. While we cannot guarantee a specific score, our 95% success rate speaks for itself.',
  },
  {
    question: 'Online vs. in-person tutoring — which do you offer?',
    answer: 'We offer both online and in-person tutoring throughout the Bay Area. Online sessions are conducted via video call with shared digital whiteboards and document tools. Many students and families prefer the flexibility of online, while others value the in-person connection. Both formats are equally effective.',
  },
  {
    question: 'How do I get started?',
    answer: 'Fill out the contact form on our Contact page with your name, email, grade level, and subjects. We will reach out within 24 hours to schedule your free consultation and match you with a tutor.',
  },
  {
    question: 'What if I am not satisfied?',
    answer: 'Your satisfaction matters to us. If you are not happy with a session, let us know and we will work to find a better tutor match or adjust our approach. We take feedback seriously and are committed to making things right.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  const answerId = `faq-answer-${index}`
  const questionId = `faq-question-${index}`

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__trigger"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="faq-item__question">{faq.question}</span>
        <svg
          className="faq-item__chevron"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div
        className="faq-item__body"
        id={answerId}
        hidden={!isOpen}
      >
        <p className="faq-item__answer">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ({ limit }) {
  const [openIndex, setOpenIndex] = useState(null)
  const [headerRef, headerVisible] = useScrollReveal()

  const displayFaqs = limit ? FAQS.slice(0, limit) : FAQS

  function toggle(index) {
    setOpenIndex(prev => prev === index ? null : index)
  }

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header reveal ${headerVisible ? 'visible' : ''}`}
        >
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <p className="faq__subtitle">Everything you need to know</p>
        </div>

        <div className="faq__list">
          {displayFaqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export { FAQS }
