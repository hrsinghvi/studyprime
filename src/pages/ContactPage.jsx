import { useEffect } from 'react'

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  }, [])

  return (
    <div style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '40px' }}>
          <h2>Schedule a Free Consultation</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginTop: '8px' }}>
            Book a free 30-minute session and we'll match you with the right tutor.
          </p>
        </div>
      </div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/help-studyprime/30min?primary_color=13ae53&text_color=ffffff&background_color=262731"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </div>
  )
}
