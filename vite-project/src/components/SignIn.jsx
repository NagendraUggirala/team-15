import { useState } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'

export default function SignIn({ onLogin }) {
  const { triggerAlert } = useOutletContext()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // Validate form entries client-side
  const validateForm = () => {
    const newErrors = {}
    if (!email) {
      newErrors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email format.'
    }
    
    if (!password) {
      newErrors.password = 'Password is required.'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) {
      triggerAlert('Please correct the highlighted errors.', 'error')
      return
    }

    setIsLoading(true)
    // Simulate API authorization response latency
    setTimeout(() => {
      setIsLoading(false)
      const mockUserData = {
        name: email.split('@')[0].toUpperCase(),
        email: email,
        avatar: ''
      }
      onLogin(mockUserData, navigate)
      triggerAlert('Logged in successfully! Welcome to AURA dashboard.', 'success')
    }, 1200)
  }

  // Quick social login handlers
  const handleSocialLogin = (platform) => {
    setIsLoading(true)
    triggerAlert(`Redirecting to ${platform} Authorization Secure Channel...`, 'info')
    
    setTimeout(() => {
      setIsLoading(false)
      const mockUserData = {
        name: `${platform.toUpperCase()} User`,
        email: `social.${platform.toLowerCase()}@aura.io`,
        avatar: ''
      }
      onLogin(mockUserData, navigate)
      triggerAlert(`Authorized via ${platform} successfully!`, 'success')
    }, 1500)
  }

  const handleForgotPassword = () => {
    if (!email) {
      triggerAlert('Please type your email address first so we can send a reset code.', 'error')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      triggerAlert('Please type a valid email format first.', 'error')
      return
    }
    
    triggerAlert(`Password recovery token sent to ${email}! Check spam directory.`, 'success')
  }

  return (
    <div className="auth-page">
      {/* LHS - Branding Marketing Column */}
      <div className="auth-branding">
        <Link to="/" className="auth-brand-logo" style={{ textDecoration: 'none' }}>
          <div className="brand-icon">A</div>
          <span>AURA</span>
        </Link>
        
        <div className="auth-branding-main">
          <h2 className="auth-branding-title">
            Secure cloud dashboards for <span>advanced engineering</span>
          </h2>
          <p className="auth-branding-desc">
            Access multi-tenant data logs, monitor container execution status, and sync team profiles securely under global authentication vaults.
          </p>
        </div>

        <div className="auth-testimonial-box">
          <p className="auth-quote">
            "AURA transformed how our security operations center monitors API telemetry. Forms are smooth, updates are instant, and MFA controls work flawlessly!"
          </p>
          <p className="auth-author">
            Elizabeth Vance <span>— Director of Cloud Architecture at TechCorp</span>
          </p>
        </div>
      </div>

      {/* RHS - Login Credentials Panel */}
      <div className="auth-panel">
        <div className="auth-card">
          <div className="auth-header">
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">
              Don't have an account yet? 
              <Link to="/signup" style={{ color: 'var(--primary)', fontWeight: 600, paddingLeft: '4px', textDecoration: 'none' }}>Sign Up</Link>
            </p>
          </div>

          {/* Social Access drawer */}
          <div className="auth-social-group">
            <button 
              type="button" 
              className="btn-social" 
              onClick={() => handleSocialLogin('Google')}
              disabled={isLoading}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-7.989 0-4.41 3.529-7.989 7.859-7.989 2.47 0 4.12 1.019 5.06 1.919l2.42-2.33C17.67 1.95 15.19 1 12.24 1 6.033 1 12.24s5.033 11.24 11.24 11.24c5.89 0 9.87-4.11 9.87-10.02 0-.67-.07-1.18-.16-1.685H12.24z"/>
              </svg>
              Google
            </button>
            <button 
              type="button" 
              className="btn-social" 
              onClick={() => handleSocialLogin('GitHub')}
              disabled={isLoading}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
              GitHub
            </button>
          </div>

          <div className="auth-divider">Or credentials</div>

          {/* Core Credentials Form */}
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="email-input">Work Email Address</label>
              <div className="input-wrapper">
                <input 
                  type="email" 
                  id="email-input"
                  className={`form-input ${errors.email ? 'error-state' : ''}`}
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors(prev => ({ ...prev, email: '' }))
                  }}
                  disabled={isLoading}
                />
              </div>
              {errors.email && <span className="form-error">⚠️ {errors.email}</span>}
            </div>

            <div className="form-group">
              <div className="form-helper-row">
                <label className="form-label" htmlFor="password-input">Security Password</label>
                <button 
                  type="button" 
                  className="forgot-btn" 
                  onClick={handleForgotPassword}
                  disabled={isLoading}
                >
                  Forgot password?
                </button>
              </div>
              <div className="input-wrapper">
                <input 
                  type="password" 
                  id="password-input"
                  className={`form-input ${errors.password ? 'error-state' : ''}`}
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors(prev => ({ ...prev, password: '' }))
                  }}
                  disabled={isLoading}
                />
              </div>
              {errors.password && <span className="form-error">⚠️ {errors.password}</span>}
            </div>

            <div className="form-group" style={{ marginTop: '0.25rem' }}>
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                <span>Keep me signed in for 30 days</span>
              </label>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ height: '46px', marginTop: '0.5rem' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-overlay">
                  <div className="loading-spinner"></div>
                  <span>Authenticating...</span>
                </div>
              ) : (
                'Sign In securely'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
