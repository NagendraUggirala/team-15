import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authSuccess, setAuthSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate futuristic secure neural handshake
    setTimeout(() => {
      setIsSubmitting(false);
      setAuthSuccess(true);
      
      // Set session items in local storage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      
      // Navigate to secure dashboard area after success
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 2000);
  };

  return (
    <div className="page-container d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 82px)' }}>
      {/* Dynamic Background Highlights */}
      <div className="glow-bg glow-primary" style={{ width: '400px', height: '400px', top: '25%', left: '30%', filter: 'blur(100px)' }}></div>
      <div className="glow-bg glow-secondary" style={{ width: '400px', height: '400px', bottom: '25%', right: '30%', filter: 'blur(100px)' }}></div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            
            {/* Glassmorphism Login Container */}
            <div className="card glass-panel border-0 p-5 rounded-5 overflow-hidden" 
                 style={{ 
                   background: 'linear-gradient(145deg, rgba(20,22,34,0.85), rgba(9,10,15,0.95))',
                   boxShadow: '0 30px 60px rgba(0, 0, 0, 0.7)',
                   border: '1px solid rgba(255, 255, 255, 0.08) !important'
                 }}>
              
              {/* Status Header */}
              {authSuccess ? (
                <div className="text-center py-5">
                  <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4 pulse-glow-element" 
                       style={{ 
                         width: '90px', 
                         height: '90px', 
                         background: 'rgba(20, 184, 166, 0.15)',
                         border: '2px solid var(--accent)',
                       }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="var(--accent)" strokeWidth="3" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  
                  <h3 className="fw-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>Handshake Verified</h3>
                  <p className="text-muted small">Synchronizing biometric credentials with quantum ledger...</p>
                  
                  <div className="mt-4 spinner-border text-gradient" role="status" style={{ 
                    borderImage: 'linear-gradient(135deg, var(--primary), var(--secondary)) 1',
                    width: '24px', 
                    height: '24px' 
                  }}>
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <>
                  {/* Brand logo in login */}
                  <div className="text-center mb-4">
                    <span className="p-3 rounded-4 bg-gradient d-inline-flex align-items-center justify-content-center mb-3 float-element" 
                          style={{ 
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            boxShadow: '0 8px 24px var(--primary-glow)'
                          }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cart4 text-white" viewBox="0 0 16 16">
                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                      </svg>
                    </span>
                    <h2 className="fw-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.5px' }}>
                      Establish Secure Link
                    </h2>
                    <p className="text-muted small">Enter credentials to synchronize with your shopping portal</p>
                  </div>

                  <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                    
                    {/* Email Input */}
                    <div className="form-group">
                      <label className="text-muted small mb-2 fw-semibold">Spatial Mail Node</label>
                      <div className="position-relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. neo@cyber.io"
                          className="form-control bg-dark border-secondary border-opacity-25 text-white px-4 py-3 rounded-3"
                          style={{ 
                            border: '1px solid rgba(255,255,255,0.1)',
                            paddingLeft: '45px'
                          }}
                        />
                        <span className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Password Input */}
                    <div className="form-group">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <label className="text-muted small fw-semibold mb-0">Ledger Password Key</label>
                        <span className="small text-gradient-accent fw-bold" style={{ cursor: 'pointer' }}>Reset Key</span>
                      </div>
                      
                      <div className="position-relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="form-control bg-dark border-secondary border-opacity-25 text-white px-4 py-3 rounded-3"
                          style={{ 
                            border: '1px solid rgba(255,255,255,0.1)',
                            paddingLeft: '45px',
                            paddingRight: '45px'
                          }}
                        />
                        <span className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                        </span>
                        
                        {/* Eye Toggle Visibility Icon */}
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="position-absolute end-0 top-50 translate-middle-y me-3 border-0 bg-transparent text-muted p-0"
                          style={{ outline: 'none' }}
                        >
                          {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Checkbox Options */}
                    <div className="d-flex align-items-center justify-content-between my-2 small">
                      <div className="form-check d-flex align-items-center gap-2">
                        <input type="checkbox" id="remember" className="form-check-input bg-dark border-secondary" style={{ cursor: 'pointer' }} />
                        <label htmlFor="remember" className="form-check-label text-muted" style={{ cursor: 'pointer' }}>Keep sync active</label>
                      </div>
                    </div>

                    {/* Authenticate Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-premium w-100 py-3 rounded-3 d-flex align-items-center justify-content-center gap-2 mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          <span>Initializing Sync Handshake...</span>
                        </>
                      ) : (
                        <>
                          <span>Establish Neural Link</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L9.793 8.5H1.5a.5.5 0 0 1 0-1h8.293L7.146 5.354a.5.5 0 1 1 .708-.708l3 3z"/>
                          </svg>
                        </>
                      )}
                    </button>

                    {/* Mock Sign up option */}
                    <div className="text-center mt-3 small text-muted">
                      New node explorer? <span className="text-gradient fw-bold" style={{ cursor: 'pointer' }}>Provision credentials</span>
                    </div>

                  </form>
                </>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
