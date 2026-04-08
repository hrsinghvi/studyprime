import { Link } from 'react-router-dom'
import './Footer.css'

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/results', label: 'Results' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Careers' },
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">

        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Study Prime home">
            Study<span className="footer__logo-accent">Prime</span>
          </Link>
          <p className="footer__tagline">Expert tutoring for students K–12 in the Bay Area.</p>
        </div>

        {/* Nav */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__col-heading">Pages</p>
          {FOOTER_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="footer__link">
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact */}
        <div className="footer__contact">
          <p className="footer__col-heading">Contact</p>
          <a href="mailto:help.studyprime@gmail.com" className="footer__contact-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
              <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            help.studyprime@gmail.com
          </a>
          <a href="tel:+19255536591" className="footer__contact-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6.6 10.8a15.4 15.4 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2c1.2.4 2.5.6 3.8.6a1 1 0 011 1V21a1 1 0 01-1 1C10.6 22 2 13.4 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.4.2 2.7.6 3.9a1 1 0 01-.3 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            +1 (925) 553-6591
          </a>
          <div className="footer__contact-item footer__contact-item--address">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{flexShrink: 0, marginTop: '2px'}}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.8"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
            </svg>
            <span>4077 Lakemont Ct<br />San Jose, CA 95148</span>
          </div>
        </div>

      </div>

      <div className="footer__bottom container">
        <p className="footer__copy">© {new Date().getFullYear()} Study Prime. All rights reserved.</p>
        <div className="footer__legal-links">
          <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
          <Link to="/terms" className="footer__legal-link">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  )
}
