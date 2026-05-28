import { useState, useEffect } from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'

export default function LandingPage() {
  const { setPrepopulatedEmail, triggerAlert } = useOutletContext()
  const navigate = useNavigate()

  const [heroEmail, setHeroEmail] = useState('')
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false)
  
  // Interactive Dashboard Mockup State
  const [activeTab, setActiveTab] = useState('overview')
  const [metricMultiplier, setMetricMultiplier] = useState(1.0)
  const [animateChart, setAnimateChart] = useState(false)

  // Trigger chart scale-up on tab changes
  useEffect(() => {
    setAnimateChart(true)
    const t = setTimeout(() => setAnimateChart(false), 500)
    return () => clearTimeout(t)
  }, [activeTab])

  const handleHeroSubmit = (e) => {
    e.preventDefault()
    if (!heroEmail.trim()) {
      triggerAlert('Please enter a valid email to get started.', 'error')
      return
    }
    setPrepopulatedEmail(heroEmail)
    navigate('/signup')
    triggerAlert('Pre-populated your email! Complete your signup.', 'info')
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) {
      triggerAlert('Please enter a valid email address.', 'error')
      return
    }
    setNewsletterLoading(true)
    setTimeout(() => {
      setNewsletterLoading(false)
      setNewsletterSubscribed(true)
      triggerAlert('Subscribed to AURA newsletter successfully!', 'success')
    }, 1200)
  }

  // Live dashboard mockup dynamic data
  const getDashboardData = () => {
    const baseData = {
      overview: {
        revenue: '$24,892.40',
        revenueTrend: '+12.5%',
        revenueTrendUp: true,
        conversion: '3.42%',
        conversionTrend: '+0.8%',
        conversionTrendUp: true,
        users: '14,290',
        usersTrend: '+28.4%',
        usersTrendUp: true,
        chartHeights: [60, 80, 45, 95, 70, 85, 100]
      },
      analytics: {
        revenue: '$18,340.10',
        revenueTrend: '-2.4%',
        revenueTrendUp: false,
        conversion: '4.89%',
        conversionTrend: '+1.6%',
        conversionTrendUp: true,
        users: '9,120',
        usersTrend: '+18.1%',
        usersTrendUp: true,
        chartHeights: [40, 50, 75, 60, 95, 55, 80]
      },
      team: {
        revenue: '$6,552.30',
        revenueTrend: '+24.1%',
        revenueTrendUp: true,
        conversion: '2.11%',
        conversionTrend: '-0.3%',
        conversionTrendUp: false,
        users: '5,170',
        usersTrend: '+42.6%',
        usersTrendUp: true,
        chartHeights: [85, 90, 80, 70, 60, 75, 95]
      }
    }
    
    const selected = baseData[activeTab]
    return {
      ...selected,
      // Apply manual multiplier if user clicks metrics
      revenue: `$${(parseFloat(selected.revenue.replace(/[^0-9.]/g, '')) * metricMultiplier).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      users: Math.floor(parseInt(selected.users.replace(/,/g, '')) * metricMultiplier).toLocaleString()
    }
  }

  const db = getDashboardData()

  return (
    <div className="landing-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          ✨ Brand New AURA 2.0 Release is Live
        </div>
        <h1 className="hero-title">
          Modern analytics suite for <span>collaborative teams</span>
        </h1>
        <p className="hero-subtitle">
          Bring your products, operations, and multi-tenant telemetry into a single, cohesive ecosystem. No complex configuration, absolute security, and lightning fast dashboard execution.
        </p>

        {/* Dynamic CTA Form */}
        <form onSubmit={handleHeroSubmit} className="hero-actions" style={{ maxWidth: '600px', margin: '0 auto 4rem' }}>
          <div className="cta-input-group" style={{ width: '100%' }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="cta-input"
              value={heroEmail}
              onChange={(e) => setHeroEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Get Started Free
            </button>
          </div>
        </form>

        {/* Live Interactive Product Mockup Dashboard */}
        <div className="mockup-container">
          <div className="mockup-header-bar">
            <div className="mockup-dots">
              <div className="mockup-dot red"></div>
              <div className="mockup-dot yellow"></div>
              <div className="mockup-dot green"></div>
            </div>
            <div className="mockup-address">https://app.aura.io/dashboard</div>
            <div style={{ width: '32px' }}></div>
          </div>
          
          <div className="mockup-content">
            {/* Sidebar panel */}
            <div className="mockup-sidebar">
              <h4 className="sidebar-title">Analytics Engine</h4>
              <ul className="sidebar-menu">
                <li 
                  className={`sidebar-item ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('overview'); setMetricMultiplier(1.0); }}
                >
                  📊 Core Overview
                </li>
                <li 
                  className={`sidebar-item ${activeTab === 'analytics' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('analytics'); setMetricMultiplier(1.0); }}
                >
                  📈 Custom Telemetry
                </li>
                <li 
                  className={`sidebar-item ${activeTab === 'team' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('team'); setMetricMultiplier(1.0); }}
                >
                  👥 Team Workspace
                </li>
              </ul>
              
              <div style={{ marginTop: 'auto', padding: '0.75rem', background: 'var(--bg-tertiary)', borderRadius: '8px', fontSize: '0.75rem' }}>
                <p style={{ color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '4px' }}>⚡ Performance Status</p>
                <p style={{ color: 'var(--success)', fontWeight: 'bold' }}>● Operational 99.98%</p>
              </div>
            </div>

            {/* Main Workspace panel */}
            <div className="dashboard-panel">
              <div className="dashboard-header">
                <h3 className="dashboard-title">
                  {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard
                </h3>
                <div className="dashboard-btn-group">
                  <button 
                    className={`dashboard-pill ${metricMultiplier === 1.0 ? 'active' : ''}`}
                    onClick={() => setMetricMultiplier(1.0)}
                  >
                    1x Scale
                  </button>
                  <button 
                    className={`dashboard-pill ${metricMultiplier === 1.5 ? 'active' : ''}`}
                    onClick={() => {
                      setMetricMultiplier(1.5)
                      triggerAlert('Metrics updated to 1.5x scale projection!', 'info')
                    }}
                  >
                    1.5x Growth Proj.
                  </button>
                </div>
              </div>

              {/* Dynamic metrics row */}
              <div className="metrics-row">
                <div className="metric-card" style={{ cursor: 'pointer' }} onClick={() => setMetricMultiplier(prev => prev + 0.1)}>
                  <span className="metric-label">ARR Revenue</span>
                  <span className="metric-value">{db.revenue}</span>
                  <span className={`metric-trend ${db.revenueTrendUp ? 'up' : 'down'}`}>
                    {db.revenueTrendUp ? '▲' : '▼'} {db.revenueTrend}
                  </span>
                </div>
                <div className="metric-card">
                  <span className="metric-label">Avg Conversion</span>
                  <span className="metric-value">{db.conversion}</span>
                  <span className={`metric-trend ${db.conversionTrendUp ? 'up' : 'down'}`}>
                    {db.conversionTrendUp ? '▲' : '▼'} {db.conversionTrend}
                  </span>
                </div>
                <div className="metric-card">
                  <span className="metric-label">Active Profiles</span>
                  <span className="metric-value">{db.users}</span>
                  <span className={`metric-trend ${db.usersTrendUp ? 'up' : 'down'}`}>
                    {db.usersTrendUp ? '▲' : '▼'} {db.usersTrend}
                  </span>
                </div>
              </div>

              {/* Dynamic Bar chart representation */}
              <div className="chart-container">
                <div className="chart-header">
                  <span>Weekly Operations Telemetry</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Live Interactive Sync</span>
                </div>
                <div className="chart-bars">
                  {db.chartHeights.map((height, i) => (
                    <div key={i} className="chart-bar-wrapper">
                      <div 
                        className="chart-bar" 
                        style={{ 
                          height: animateChart ? '5px' : `${height * 0.9}px`,
                          transition: 'height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                      ></div>
                      <span className="chart-bar-label">{['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <span className="section-badge">Platform Pillars</span>
          <h2 className="section-title">Core capabilities designed for performance</h2>
          <p className="section-desc">
            Explore premium integrations engineered specifically to handle high-velocity multi-tenant workloads.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">⚡</div>
            <h3 className="feature-title">Microsecond Telemetry</h3>
            <p className="feature-text">Sync server payloads with sub-millisecond lag. Active browser sockets guarantee instant screen updates.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">📊</div>
            <h3 className="feature-title">Dynamic Visualizers</h3>
            <p className="feature-text">Beautiful responsive graphs, interactive metrics grids, and downloadable analytical charts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">🔒</div>
            <h3 className="feature-title">Biometric Shielding</h3>
            <p className="feature-text">Enterprise-grade multi-factor security, active token encryption, and comprehensive security logging.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">🌐</div>
            <h3 className="feature-title">Global Multi-Tenancy</h3>
            <p className="feature-text">Isolate and scale customer workspaces. Perfect sandbox models for complex team partitions.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">⚙️</div>
            <h3 className="feature-title">Robust Developers API</h3>
            <p className="feature-text">Extend and orchestrate pipelines via standard JSON responses, clean webhooks, and REST paradigms.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-wrapper">🎨</div>
            <h3 className="feature-title">Glassmorphic System</h3>
            <p className="feature-text">Beautiful harmony between light and dark configurations. Custom variables ensure complete brand match.</p>
          </div>
        </div>
      </section>

      {/* Pricing Grid Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-header">
          <span className="section-badge">Flexible Pricing Tiers</span>
          <h2 className="section-title">A plan for every step of your project</h2>
          <p className="section-desc">
            Scale seamlessly from local development tasks to full production scale multi-tenant architectures.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Starter Plan */}
          <div className="pricing-card">
            <h3 className="pricing-name">Free Starter</h3>
            <p className="pricing-desc">Perfect for testing local sandboxes and prototypes.</p>
            <div className="pricing-price">$0<span>/month</span></div>
            <p className="pricing-period">Forever free tier</p>
            <ul className="pricing-features">
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> Up to 3 user workspaces</li>
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> 500 MB secure cloud storage</li>
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> Standard socket connection</li>
              <li className="pricing-feature" style={{ opacity: 0.5 }}><span className="pricing-feature-check">✕</span> Priority support drawer</li>
            </ul>
            <Link to="/signup" className="btn btn-outline" style={{ marginTop: 'auto' }}>
              Sign Up Free
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card premium">
            <span className="pricing-badge">Popular Choice</span>
            <h3 className="pricing-name">Professional Growth</h3>
            <p className="pricing-desc">Designed for scaling business operations and API access.</p>
            <div className="pricing-price">$29<span>/month</span></div>
            <p className="pricing-period">Billed annually, cancel anytime</p>
            <ul className="pricing-features">
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> Unlimited active workspaces</li>
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> 50 GB secure cloud storage</li>
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> Hyper-speed socket sockets</li>
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> 24/7 dedicated email support</li>
            </ul>
            <Link to="/signup" className="btn btn-primary" style={{ marginTop: 'auto' }}>
              Start 14-Day Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card">
            <h3 className="pricing-name">Global Enterprise</h3>
            <p className="pricing-desc">Bespoke SLA metrics, custom telemetry pipelines, and dedicated clusters.</p>
            <div className="pricing-price">$99<span>/month</span></div>
            <p className="pricing-period">For global high-velocity operations</p>
            <ul className="pricing-features">
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> Dedicated isolated server nodes</li>
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> 1 TB biometric encrypted vaults</li>
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> Custom integrations assistance</li>
              <li className="pricing-feature"><span className="pricing-feature-check">✓</span> Real-time dedicated SLA manager</li>
            </ul>
            <Link to="/signup" className="btn btn-outline" style={{ marginTop: 'auto' }}>
              Contact Enterprise
            </Link>
          </div>
        </div>
      </section>

      {/* Mock Newsletter Banner Section */}
      <section id="newsletter" className="cta-section">
        <div className="cta-box">
          <h2 className="cta-title">Ready to accelerate your workflow?</h2>
          <p className="cta-desc">
            Subscribe to our weekly design updates and release notes to stay ahead of performance trends.
          </p>
          
          {newsletterSubscribed ? (
            <div style={{ animation: 'slide-up 0.4s ease-out', padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', display: 'inline-block', color: 'var(--success)' }}>
              🎉 <strong>Thank you for subscribing!</strong> Check your email address for a verification code.
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="cta-input-group">
              <input 
                type="email" 
                placeholder="Enter your professional email" 
                className="cta-input"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterLoading}
              />
              <button type="submit" className="btn btn-accent" style={{ minWidth: '120px' }} disabled={newsletterLoading}>
                {newsletterLoading ? (
                  <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                  </div>
                ) : (
                  'Subscribe'
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
