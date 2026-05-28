import { useOutletContext, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Dashboard() {
  const { user, triggerAlert } = useOutletContext()
  const navigate = useNavigate()

  // Redirect to sign in if no active session
  useEffect(() => {
    if (!user) {
      triggerAlert('Access denied. Please authenticate first.', 'error')
      navigate('/signin')
    }
  }, [user, navigate, triggerAlert])

  if (!user) {
    return null // Render empty while redirecting
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-user-hero">
        <h2 className="dashboard-welcome">Welcome to AURA, {user.name}!</h2>
        <p className="dashboard-subtitle">
          You are logged into the secure telemetry sandbox for **{user.email}**.
        </p>
      </div>

      <div className="dashboard-grid">
        <div className="db-card">
          <div style={{ fontSize: '2rem' }}>📦</div>
          <h3 className="db-card-title">Isolated Clusters</h3>
          <p className="db-card-desc">
            Your team workspace cluster `sandbox-prod-15` is **Healthy**. All 3 data nodes are active.
          </p>
          <button 
            className="btn btn-outline" 
            style={{ marginTop: 'auto', fontSize: '0.8rem' }}
            onClick={() => triggerAlert('Cluster check triggered. 3/3 active nodes.', 'success')}
          >
            Run Node Check
          </button>
        </div>

        <div className="db-card">
          <div style={{ fontSize: '2rem' }}>🔑</div>
          <h3 className="db-card-title">API Gateways</h3>
          <p className="db-card-desc">
            Active connection gateways: **4 configured keys**. Total telemetry volume consumed: 45.2 GB.
          </p>
          <button 
            className="btn btn-outline" 
            style={{ marginTop: 'auto', fontSize: '0.8rem' }}
            onClick={() => triggerAlert('API Keys are valid. Telemetry active.', 'success')}
          >
            Inspect API Keys
          </button>
        </div>

        <div className="db-card">
          <div style={{ fontSize: '2rem' }}>👥</div>
          <h3 className="db-card-title">Team Workspace</h3>
          <p className="db-card-desc">
            Active account collaborators: **12 teammates**. Your account privileges: **Administrator**.
          </p>
          <button 
            className="btn btn-outline" 
            style={{ marginTop: 'auto', fontSize: '0.8rem' }}
            onClick={() => triggerAlert('Audit logs: 12 users verified.', 'success')}
          >
            Verify Access Logs
          </button>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <button 
          className="btn btn-primary" 
          onClick={() => {
            navigate('/')
            triggerAlert('Navigated to landing demo view.', 'info')
          }}
        >
          Return to Product Landing Page
        </button>
      </div>
    </div>
  )
}
