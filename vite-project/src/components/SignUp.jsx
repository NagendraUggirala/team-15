import { useState, useEffect } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'

export default function SignUp({ onLogin }) {
  const { prepopulatedEmail, triggerAlert } = useOutletContext()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: 'None', colorClass: '' })

  // Fill in email if it was prepopulated from the landing page CTA
  useEffect(() => {
    if (prepopulatedEmail) {
      setEmail(prepopulatedEmail)
    }
  }, [prepopulatedEmail])

  // Simple password strength scoring algorithm
  useEffect(() => {
    if (!password) {
      setPasswordStrength({ score: 0, label: 'None', colorClass: '' })
      return
    }

    let score = 0
    if (password.length >= 6) score += 1
    if (password.length >= 8) score += 1
    if (/[0-9]/.test(password)) score += 1
    if (/[^A-Za-z0-9]/.test(password)) score += 1
    if (/[A-Z]/.test(password)) score += 1

    let label = 'Weak'
    let colorClass = 'weak'
    if (score >= 4) {
      label = 'Strong Password'
      colorClass = 'strong'
    } else if (score >= 2) {
      label = 'Medium Strength'
      colorClass = 'medium'
    }

    setPasswordStrength({ score, label, colorClass })
  }, [password])

  const validateForm = () => {
    const newErrors = {}
    if (!name.trim()) {
      newErrors.name = 'Full name is required.'
    }
    
    if (!email) {
      newErrors.email = 'Work email is required.'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email format.'
    }

    if (!password) {
      newErrors.password = 'Password is required.'
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.'
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = 'You must accept the terms & privacy charter.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) {
      triggerAlert('Please correct the highlighted onboarding fields.', 'error')
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      const mockUserData = {
        name: name,
        email: email,
        avatar: ''
      }
      onLogin(mockUserData, navigate)
      triggerAlert('Account provisioned successfully! Welcome to AURA.', 'success')
    }, 1200)
  }

  // Quick social login handlers
  const handleSocialLogin = (platform) => {
    setIsLoading(true)
    triggerAlert(`Redirecting to ${platform} Onboarding Secure Channel...`, 'info')
    
    setTimeout(() => {
      setIsLoading(false)
      const mockUserData = {
        name: `New ${platform} Developer`,
        email: `onboard.${platform.toLowerCase()}@aura.io`,
        avatar: ''
      }
      onLogin(mockUserData, navigate)
      triggerAlert(`Account created via ${platform} successfully!`, 'success')
    }, 1500)
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
            Begin your multi-tenant analytics <span>deployment today</span>
          </h2>
          <p className="auth-branding-desc">
            Instantly set up custom database sandboxes, isolate metrics keys, and integrate dashboards into existing server pipelines in seconds.
          </p>
        </div>

        <div className="auth-testimonial-box">
          <p className="auth-quote">
            "We migrated our client reporting dashboards to AURA in three days. The strength validator gave us peace of mind and custom client partitioning is incredibly simple."
          </p>
          <p className="auth-author">
            Marcus Sterling <span>— Chief Technology Officer at CloudScale</span>
          </p>
        </div>
      </div>

      {/* RHS - Registration Card Panel */}
      <div className="auth-panel">
        <div className="auth-card">
          <div className="auth-header">
            <h2 className="auth-title">Create Account</h2>
            <p className="auth-subtitle">
              Already have an account? 
              <Link to="/signin" style={{ color: 'var(--primary)', fontWeight: 600, paddingLeft: '4px', textDecoration: 'none' }}>Sign In</Link>
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

          {/* Registration Form */}
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name-input">Full User Name</label>
              <div className="input-wrapper">
                <input 
                  type="text" 
                  id="name-input"
                  className={`form-input ${errors.name ? 'error-state' : ''}`}
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    if (errors.name) setErrors(prev => ({ ...prev, name: '' }))
                  }}
                  disabled={isLoading}
                />
              </div>
              {errors.name && <span className="form-error">⚠️ {errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email-input">Professional Work Email</label>
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
              <label className="form-label" htmlFor="password-input">Account Password</label>
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

              {/* Password strength visualization rendering */}
              {password && (
                <div className="password-strength-container">
                  <div className="strength-bars">
                    <div className={`strength-bar ${passwordStrength.score >= 1 ? passwordStrength.colorClass : ''}`}></div>
                    <div className={`strength-bar ${passwordStrength.score >= 3 ? passwordStrength.colorClass : ''}`}></div>
                    <div className={`strength-bar ${passwordStrength.score >= 4 ? passwordStrength.colorClass : ''}`}></div>
                  </div>
                  <span className="strength-label">
                    Password Security: <strong>{passwordStrength.label}</strong>
                  </span>
                </div>
              )}
            </div>

            <div className="form-group" style={{ marginTop: '0.25rem' }}>
              <label className="checkbox-label" htmlFor="terms-check">
                <input 
                  type="checkbox" 
                  id="terms-check"
                  checked={agreeTerms}
                  onChange={(e) => {
                    setAgreeTerms(e.target.checked)
                    if (errors.agreeTerms) setErrors(prev => ({ ...prev, agreeTerms: '' }))
                  }}
                  disabled={isLoading}
                />
                <span style={{ fontSize: '0.85rem' }}>
                  I accept the AURA <button type="button" style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', padding: 0 }} onClick={() => triggerAlert('Terms shown inside modal.', 'info')}>Terms of Service</button> and <button type="button" style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', textDecoration: 'underline', padding: 0 }} onClick={() => triggerAlert('Privacy policy charter.', 'info')}>Privacy Policy</button>
                </span>
              </label>
              {errors.agreeTerms && <span className="form-error">⚠️ {errors.agreeTerms}</span>}
            </div>

            <button 
              type="submit" 
              className="btn btn-accent" 
              style={{ height: '46px', marginTop: '0.5rem' }}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-overlay">
                  <div className="loading-spinner"></div>
                  <span>Provisioning Account...</span>
                </div>
              ) : (
                'Create Account Securely'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
