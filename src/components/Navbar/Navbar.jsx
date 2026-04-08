import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/results', label: 'Results' },
  { to: '/contact', label: 'Contact' },
  { to: '/careers', label: 'Careers' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  async function handleSignOut() {
    setMenuOpen(false)
    await signOut()
    navigate('/')
  }

  return (
    <>
      <header className="navbar" role="banner">
        <div className="navbar__inner">

          {/* Logo — far left */}
          <Link to="/" className="navbar__logo" aria-label="Study Prime home">
            <img src="/studyprimelogo.png" alt="" className="navbar__logo-img" aria-hidden="true" />
            <span className="navbar__logo-name">StudyPrime</span>
          </Link>

          {/* Nav links — centered */}
          <nav className="navbar__links" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTAs — far right */}
          <div className="navbar__actions">
            {user ? (
              <button className="navbar__btn-signin" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/contact" className="navbar__btn-book">
                  Book Free Consultation
                </Link>
                <Link to="/sign-in" className="navbar__btn-signin">
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Hamburger (mobile) */}
          <button
            className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
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

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
        {...(!menuOpen ? { inert: '' } : {})}
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
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <div className="navbar__mobile-actions">
            {user ? (
              <button className="navbar__btn-signin navbar__mobile-action-btn" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              <>
                <Link to="/sign-in" className="navbar__btn-signin navbar__mobile-action-btn" onClick={() => setMenuOpen(false)}>
                  Sign In
                </Link>
                <Link to="/contact" className="navbar__btn-book navbar__mobile-action-btn" onClick={() => setMenuOpen(false)}>
                  Book Free Consultation
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>

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
