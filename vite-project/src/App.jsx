import { useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './components/LandingPage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import './App.css'

// 🏛️ Layout Component: Renders the Navbar, dynamic Route content, and Footer
function Layout({ user, handleLogout, prepopulatedEmail, setPrepopulatedEmail, alerts, removeAlert, triggerAlert }) {
  const location = useLocation()
  
  // Clean modern UX: Hide footer on Sign In and Sign Up pages for high conversion
  const showFooter = location.pathname !== '/signin' && location.pathname !== '/signup'

  return (
    <div id="app-container">
      {/* Background radial glow layers */}
      <div className="glow-backdrop-1"></div>
      <div className="glow-backdrop-2"></div>

      {/* Global Toast Alert notifications */}
      <div className="toast-container">
        {alerts.map((alert) => (
          <div key={alert.id} className={`toast ${alert.type}`}>
            <span style={{ fontSize: '1.1rem' }}>
              {alert.type === 'success' ? '✓' : alert.type === 'error' ? '✕' : 'ℹ'}
            </span>
            <p>{alert.message}</p>
            <button className="toast-close" onClick={() => removeAlert(alert.id)}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Sticky Top Header Navigation */}
      <Header user={user} onLogout={handleLogout} />

      {/* Main Outlet: Active Route component gets rendered here dynamically */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet context={{ user, handleLogout, prepopulatedEmail, setPrepopulatedEmail, triggerAlert }} />
      </main>

      {/* Structured Footer */}
      {showFooter && <Footer />}
    </div>
  )
}

function App() {
  const [user, setUser] = useState(null)
  const [prepopulatedEmail, setPrepopulatedEmail] = useState('')
  const [alerts, setAlerts] = useState([])

  // Global toaster notifications
  const triggerAlert = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9)
    const newAlert = { id, message, type }
    
    setAlerts((prev) => [...prev, newAlert])
    
    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id))
    }, 4000)
  }

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id))
  }

  // Handle successful logins & register redirects
  const handleLoginSuccess = (userData, navigate) => {
    setUser(userData)
    navigate('/dashboard')
  }

  const handleLogout = (navigate) => {
    setUser(null)
    navigate('/')
    triggerAlert('Logged out of AURA session securely.', 'info')
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Layout route wrapping all children paths */}
        <Route 
          path="/" 
          element={
            <Layout 
              user={user} 
              handleLogout={handleLogout}
              prepopulatedEmail={prepopulatedEmail}
              setPrepopulatedEmail={setPrepopulatedEmail}
              alerts={alerts}
              removeAlert={removeAlert}
              triggerAlert={triggerAlert}
            />
          }
        >
          {/* Sub-routes injected inside <Outlet /> */}
          <Route index element={<LandingPage />} />
          <Route path="signin" element={<SignIn onLogin={handleLoginSuccess} />} />
          <Route path="signup" element={<SignUp onLogin={handleLoginSuccess} />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
