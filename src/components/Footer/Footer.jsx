import { Link } from 'react-router-dom'
import './Footer.css'

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/results', label: 'Results' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Careers' },
]

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__left">
          <Link to="/" className="footer__logo" aria-label="Study Prime home">
            Study <span className="footer__logo-accent">Prime</span>
          </Link>
          <p className="footer__copy">
            © {new Date().getFullYear()} Study Prime. All rights reserved.
          </p>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          {FOOTER_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="footer__link">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
