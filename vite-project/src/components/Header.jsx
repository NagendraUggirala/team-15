import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Header({ user, onLogout }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navigate = useNavigate()
  const location = useLocation()

  // Listen to window scroll to apply glass backdrop effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAnchorClick = (selector) => {
    setMobileMenuOpen(false)
    
    // If not on landing page, navigate home first, then scroll
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.querySelector(selector)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      const element = document.querySelector(selector)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleLogoutClick = () => {
    setMobileMenuOpen(false)
    // Pass standard navigate to logout handler to return user home
    onLogout(navigate)
  }

  return (
    <nav className={`header-nav ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
        <div className="brand-icon">A</div>
        <span>AURA</span>
      </Link>

      <button 
        className="menu-toggle" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <span className="nav-link" onClick={() => handleAnchorClick('#features')}>
            Features
          </span>
        </li>
        <li>
          <span className="nav-link" onClick={() => handleAnchorClick('#pricing')}>
            Pricing
          </span>
        </li>
        <li>
          <span className="nav-link" onClick={() => handleAnchorClick('#newsletter')}>
            Contact
          </span>
        </li>
      </ul>

      <div className={`nav-actions ${mobileMenuOpen ? 'active' : ''}`}>
        {user ? (
          <>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginRight: '0.5rem' }}>
              Hi, <strong>{user.name.split(' ')[0]}</strong>
            </span>
            <button className="btn btn-outline" onClick={handleLogoutClick}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link 
              to="/signin" 
              className="btn btn-ghost"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
