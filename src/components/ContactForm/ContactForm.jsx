import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useToast } from '../../context/ToastContext'
import './ContactForm.css'

const GRADE_OPTIONS = [
  'Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade',
  '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade',
  '10th Grade', '11th Grade', '12th Grade', 'College',
]

const TOPIC_OPTIONS = [
  'SAT Prep', 'ACT Prep', 'Math', 'English', 'Science', 'Biology',
  'Chemistry', 'Physics', 'History', 'Writing', 'Reading Comprehension', 'AP Courses',
]

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export { validateEmail }

export default function ContactForm() {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)
  const [topicSearch, setTopicSearch] = useState('')
  const [topicOpen, setTopicOpen] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    topics: [],
    message: '',
  })

  const [errors, setErrors] = useState({})

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!validateEmail(form.email)) next.email = 'Please enter a valid email'
    if (!form.grade) next.grade = 'Please select a grade'
    if (form.topics.length === 0) next.topics = 'Please select at least one topic'
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function handleBlur(e) {
    const { name } = e.target
    const validationErrors = validate()
    if (validationErrors[name]) {
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] }))
    }
  }

  function toggleTopic(topic) {
    setForm(prev => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter(t => t !== topic)
        : [...prev.topics, topic],
    }))
    if (errors.topics) setErrors(prev => ({ ...prev, topics: '' }))
    setTopicSearch('')
  }

  function removeTopic(topic) {
    setForm(prev => ({ ...prev, topics: prev.topics.filter(t => t !== topic) }))
  }

  const filteredTopics = TOPIC_OPTIONS.filter(t =>
    t.toLowerCase().includes(topicSearch.toLowerCase())
  )

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    const { error } = await supabase.from('contact_submissions').insert([{
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      grade: form.grade,
      topics: form.topics,
      message: form.message.trim() || null,
    }])
    setLoading(false)

    if (error) {
      addToast('Something went wrong. Please try again.', 'error')
    } else {
      addToast('Your inquiry has been sent! We\'ll be in touch within 24 hours.', 'success')
      setForm({ name: '', email: '', phone: '', grade: '', topics: [], message: '' })
      setErrors({})
    }
  }

  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header">
          <h2 id="contact-heading">Get Started Today</h2>
          <p className="contact-section__subtitle">
            Fill out the form and we'll schedule your first consultation.
          </p>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact inquiry form"
        >
          {/* Name */}
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Jane Smith"
              autoComplete="name"
              aria-required="true"
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
            />
            {errors.name && (
              <span id="contact-name-error" className="form-error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="jane@example.com"
              autoComplete="email"
              aria-required="true"
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
            />
            {errors.email && (
              <span id="contact-email-error" className="form-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="contact-phone" className="form-label">
              Phone <span className="form-label__optional">(optional)</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className="form-input"
              value={form.phone}
              onChange={handleChange}
              placeholder="(415) 555-0123"
              autoComplete="tel"
            />
          </div>

          {/* Grade */}
          <div className="form-group">
            <label htmlFor="contact-grade" className="form-label">
              Student Grade <span aria-hidden="true">*</span>
            </label>
            <select
              id="contact-grade"
              name="grade"
              className={`form-input ${errors.grade ? 'error' : ''}`}
              value={form.grade}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-describedby={errors.grade ? 'contact-grade-error' : undefined}
            >
              <option value="">Select grade level</option>
              {GRADE_OPTIONS.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            {errors.grade && (
              <span id="contact-grade-error" className="form-error" role="alert">
                {errors.grade}
              </span>
            )}
          </div>

          {/* Topics */}
          <div className="form-group">
            <label className="form-label" id="topics-label">
              Topics to Study <span aria-hidden="true">*</span>
            </label>

            {/* Selected pills */}
            {form.topics.length > 0 && (
              <div className="topic-pills" aria-label="Selected topics">
                {form.topics.map(topic => (
                  <span key={topic} className="topic-pill">
                    {topic}
                    <button
                      type="button"
                      className="topic-pill__remove"
                      onClick={() => removeTopic(topic)}
                      aria-label={`Remove ${topic}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Searchable dropdown */}
            <div className="topic-dropdown">
              <input
                type="text"
                className={`form-input ${errors.topics ? 'error' : ''}`}
                placeholder="Search or select subjects..."
                value={topicSearch}
                onChange={e => setTopicSearch(e.target.value)}
                onFocus={() => setTopicOpen(true)}
                onBlur={() => setTimeout(() => setTopicOpen(false), 150)}
                aria-labelledby="topics-label"
                aria-haspopup="listbox"
                aria-expanded={topicOpen ? 'true' : 'false'}
                aria-describedby={errors.topics ? 'contact-topics-error' : undefined}
              />
              {topicOpen && (
                <ul className="topic-dropdown__list" role="listbox" aria-labelledby="topics-label">
                  {filteredTopics.length === 0 ? (
                    <li className="topic-dropdown__empty" aria-disabled="true">No subjects match</li>
                  ) : filteredTopics.map(topic => (
                    <li
                      key={topic}
                      role="option"
                      aria-selected={form.topics.includes(topic)}
                      className={`topic-dropdown__option ${form.topics.includes(topic) ? 'topic-dropdown__option--selected' : ''}`}
                      onMouseDown={() => toggleTopic(topic)}
                    >
                      {topic}
                      {form.topics.includes(topic) && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8l4 4 6-6" stroke="#13ae53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {errors.topics && (
              <span id="contact-topics-error" className="form-error" role="alert">
                {errors.topics}
              </span>
            )}
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="contact-message" className="form-label">
              Message <span className="form-label__optional">(optional)</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="form-input contact-form__textarea"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us more about your goals and needs..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="btn-primary contact-form__submit"
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <svg className="contact-form__spinner" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"/>
                </svg>
                Sending...
              </>
            ) : (
              'Send Inquiry'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}
