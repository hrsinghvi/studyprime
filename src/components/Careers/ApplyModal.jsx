import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabase'
import { useToast } from '../../context/ToastContext'
import { validateEmail } from '../ContactForm/ContactForm'

export default function ApplyModal({ job, onClose }) {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  // Close on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Trap body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!validateEmail(form.email)) next.email = 'Please enter a valid email'
    if (!form.message.trim()) next.message = 'Please include a message or cover letter'
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    const { error } = await supabase.from('career_applications').insert([{
      job_title: job.title,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
    }])
    setLoading(false)

    if (error) {
      addToast('Something went wrong. Please try again.', 'error')
    } else {
      addToast('Application submitted! We\'ll be in touch soon.', 'success')
      onClose()
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal">
        <div className="modal__header">
          <div>
            <h2 id="modal-title" className="modal__title">Apply: {job.title}</h2>
            <p className="modal__subtitle">{job.location} &middot; {job.type}</p>
          </div>
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className="modal__job-details">
          <p className="modal__job-desc">{job.fullDesc}</p>
          <ul className="modal__requirements">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
          {job.compensation && (
            <p className="modal__compensation">
              <strong>Compensation:</strong> {job.compensation}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="modal__form" noValidate>
          <div className="form-group">
            <label htmlFor="apply-name" className="form-label">Full Name *</label>
            <input id="apply-name" name="name" type="text" className={`form-input ${errors.name ? 'error' : ''}`} value={form.name} onChange={handleChange} placeholder="Jane Smith" autoComplete="name" />
            {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="apply-email" className="form-label">Email *</label>
            <input id="apply-email" name="email" type="email" className={`form-input ${errors.email ? 'error' : ''}`} value={form.email} onChange={handleChange} placeholder="jane@example.com" autoComplete="email" />
            {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="apply-phone" className="form-label">Phone <span className="form-label__optional">(optional)</span></label>
            <input id="apply-phone" name="phone" type="tel" className="form-input" value={form.phone} onChange={handleChange} placeholder="(415) 555-0123" autoComplete="tel" />
          </div>

          <div className="form-group">
            <label htmlFor="apply-message" className="form-label">Cover Letter / Message *</label>
            <textarea id="apply-message" name="message" className={`form-input ${errors.message ? 'error' : ''}`} style={{ minHeight: '120px', resize: 'vertical' }} value={form.message} onChange={handleChange} placeholder="Tell us about your teaching experience and why you want to join Study Prime..." />
            {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading} aria-busy={loading}>
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
      </div>
    </div>
  )
}
