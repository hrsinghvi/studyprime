import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/results', label: 'Results' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Work With Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [navigate])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  async function handleSignOut() {
    await signOut()
    navigate('/')
  }

  return (
    <>
      <header className="navbar" role="banner">
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo" aria-label="Study Prime home">
            Study <span className="navbar__logo-accent">Prime</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="navbar__actions">
            {user ? (
              <button
                className="btn-secondary navbar__btn"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/sign-in" className="btn-secondary navbar__btn">
                  Sign In
                </Link>
                <Link to="/contact" className="btn-primary navbar__btn">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="navbar__mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="navbar__mobile-actions">
            {user ? (
              <button className="btn-secondary" onClick={handleSignOut} style={{ width: '100%' }}>
                Sign Out
              </button>
            ) : (
              <>
                <Link
                  to="/sign-in"
                  className="btn-secondary"
                  style={{ display: 'block', textAlign: 'center' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/contact"
                  className="btn-primary"
                  style={{ display: 'block', textAlign: 'center' }}
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
