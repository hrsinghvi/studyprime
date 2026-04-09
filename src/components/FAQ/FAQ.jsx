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
    answer: 'We offer tutoring in SAT and ACT prep, Mathematics (K-12 through calculus), English and Language Arts, Biology, Chemistry, Physics, and History. If your subject is not listed, contact us and we will do our best to match you with the right tutor.',
  },
  {
    question: 'How are your tutors qualified?',
    answer: 'Every Study Prime tutor has personally excelled in the subject they teach — our SAT and ACT tutors have scored in the 95th percentile or above, and our subject tutors have mastered their field through years of hands-on experience. We only bring on tutors who know their subject inside and out, so students learn from someone who has truly been there.',
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
    answer: 'Yes. We offer a free 30-minute consultation to discuss your goals, assess your current standing, and match you with the right tutor. Fill out the contact form and we will schedule a time that works for you.',
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
  {
    question: 'How much can I improve my SAT score with tutoring?',
    answer: 'On average, Study Prime students improve their SAT score by 280 points over a full prep program. Students starting below 1100 often see gains of 200–350 points, while students already above 1300 typically gain 100–180 additional points. Results depend on starting score, commitment to practice, and time invested. Students who complete all assigned practice work and attend sessions consistently see the strongest gains.',
  },
  {
    question: 'How do I choose between the SAT and ACT?',
    answer: 'Both tests are accepted equally by all U.S. colleges and universities. The SAT emphasizes evidence-based reading and data analysis, while the ACT includes a science section and moves at a faster pace. We recommend taking one official practice test for each exam. Most students perform similarly on both, but some have a clear preference. Our tutors can help you analyze your practice results and choose the test that plays to your strengths.',
  },
  {
    question: 'What grade levels do you work with?',
    answer: 'We tutor students from 4th grade through 12th grade, as well as college students who need subject support. Our most common students are middle schoolers building foundational skills and high schoolers preparing for SAT, ACT, or AP exams. We also work with students who are homeschooled or need academic acceleration.',
  },
  {
    question: 'How are sessions structured?',
    answer: 'Each session typically begins with a review of the previous session\'s material and any assigned practice. The tutor then introduces new concepts, works through problems with the student, and assigns targeted practice for the week. Sessions are adapted based on how the student is progressing — if something clicks quickly, we move forward; if a concept needs more time, we stay until it is mastered.',
  },
  {
    question: 'How many sessions per week do you recommend?',
    answer: 'For SAT or ACT prep, we typically recommend 1-2 sessions per week for 8-12 weeks, paired with 3-5 hours of independent practice between sessions. For subject tutoring, 1 session per week is effective for most students who are keeping up with classwork. Students who are significantly behind may benefit from 2 sessions per week initially.',
  },
  {
    question: 'Do you tutor for AP exams?',
    answer: 'Yes. We offer tutoring for AP Calculus AB/BC, AP Statistics, AP Chemistry, AP Biology, AP Physics, AP English Language and Composition, and AP US History. Our AP tutors have scored 5s on these exams and understand exactly what College Board expects.',
  },
  {
    question: 'Can you help with college essay writing?',
    answer: 'Yes. Our English tutors can help students brainstorm, draft, and refine their college application essays, including the Common App personal statement and supplemental essays. We focus on helping students find their authentic voice while making the essay compelling and polished.',
  },
  {
    question: 'Do you work with students with learning differences?',
    answer: 'Yes. Several of our tutors have experience working with students who have ADHD, dyslexia, or other learning differences. We adapt our teaching pace, style, and materials to match how each student learns best. Please let us know about any learning accommodations when you contact us so we can find the right tutor match.',
  },
  {
    question: 'What areas of the Bay Area do you serve?',
    answer: 'Study Prime serves the entire Bay Area, including Fremont, San Francisco, Oakland, Berkeley, San Jose, Mountain View, Palo Alto, Sunnyvale, Cupertino, Livermore, Pleasanton, Dublin, San Ramon, Walnut Creek, Hayward, Union City, San Mateo, Redwood City, Menlo Park, and more. Online tutoring is available to students anywhere in California.',
  },
  {
    question: 'How long are tutoring sessions?',
    answer: 'Standard sessions are 60 minutes. For intensive test prep or students who need more focused work, 90-minute sessions are also available. We do not recommend sessions shorter than 60 minutes, as it does not provide enough time to review, teach, and practice effectively.',
  },
  {
    question: 'What materials do I need for sessions?',
    answer: 'For in-person sessions, students should bring their current textbook or test prep materials, a notebook, and a calculator (for math). For online sessions, a stable internet connection, webcam, and microphone are required. We provide all supplemental practice materials — students do not need to purchase any additional books or resources.',
  },
  {
    question: 'How do you track student progress?',
    answer: 'We track progress through practice test scores, session notes, and regular check-ins with both students and parents. After every few sessions, we provide a brief progress update highlighting strengths, areas for improvement, and next steps. For standardized test prep, we administer full practice tests every 3-4 weeks to measure score improvement accurately.',
  },
  {
    question: 'Is tutoring available on weekends?',
    answer: 'Yes. We offer sessions 7 days a week, including weekends and evenings. Many of our Bay Area students prefer weekend sessions since school and activities fill weekdays. You can choose your preferred schedule when you contact us, and we will match you with a tutor whose availability fits yours.',
  },
  {
    question: 'How is Study Prime different from other tutoring services?',
    answer: 'Three things set Study Prime apart. First, tutor quality — we only hire tutors who have personally excelled in what they teach, not just anyone with a college degree. Second, personalization — we do not use one-size-fits-all curricula; every student gets a customized plan based on their assessment. Third, results — our 95% success rate and average +280 SAT point improvement reflect what happens when quality tutors use proven methods with committed students.',
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
