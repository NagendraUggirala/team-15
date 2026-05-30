import React from 'react';
import { useLocation } from 'react-router-dom';

const Topbar = () => {
  const location = useLocation();
  const userEmail = localStorage.getItem('userEmail') || 'orion@nebula.io';

  // Get active title based on routing path
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Overview Dashboard';
      case '/dashboard/products':
        return 'Product Inventory Manager';
      default:
        return 'Control Console';
    }
  };

  return (
    <header className="custom-navbar px-4 d-flex align-items-center justify-content-between" 
            style={{ 
              height: '80px', 
              background: 'rgba(255,255,255,0.85) !important', 
              position: 'sticky', 
              top: 0,
              zIndex: 90,
              borderBottom: '1px solid rgba(0,0,0,0.06)'
            }}>
      
      {/* Title */}
      <div>
        <h1 className="h4 fw-extrabold text-dark mb-0" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.3px' }}>
          {getPageTitle()}
        </h1>
        <span className="text-muted small" style={{ fontSize: '0.75rem' }}>
          Real-time synchronized data packet node
        </span>
      </div>

      {/* Action items */}
      <div className="d-flex align-items-center gap-4">
        
        {/* Latency Tracker Indicator */}
        <div className="d-none d-md-flex align-items-center gap-2 px-3 py-1.5 rounded-pill bg-dark" 
             style={{ background: 'rgba(0,0,0,0.03) !important', border: '1px solid rgba(0,0,0,0.04)' }}>
          <span className="rounded-circle pulse-glow-element" 
                style={{ 
                  background: 'var(--accent)', 
                  width: '8px', 
                  height: '8px',
                  boxShadow: '0 0 8px var(--accent)'
                }}></span>
          <span className="text-muted small fw-semibold" style={{ fontSize: '0.75rem', color: 'var(--text-muted) !important' }}>
            Quantum link: <span className="text-gradient-accent">2 ms</span>
          </span>
        </div>

        {/* Notifications Icon Bell */}
        <div className="position-relative p-2 rounded-circle glass-panel d-flex align-items-center justify-content-center" 
             style={{ width: '40px', height: '40px', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.08) !important' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                style={{ fontSize: '0.65rem', padding: '3.5px 6px', boxShadow: '0 0 8px rgba(220, 53, 69, 0.4)' }}>
            4
          </span>
        </div>

        {/* Dynamic Avatar */}
        <div className="d-flex align-items-center gap-3 border-start ps-4 border-secondary border-opacity-10">
          <div className="rounded-circle bg-gradient d-flex align-items-center justify-content-center text-white fw-bold" 
               style={{ 
                 background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                 width: '40px', 
                 height: '40px'
               }}>
            {userEmail.charAt(0).toUpperCase()}
          </div>
          <div className="d-none d-lg-block text-start">
            <div className="fw-bold text-dark small" style={{ lineHeight: '1.2' }}>
              {userEmail.split('@')[0]}
            </div>
            <span className="badge rounded-pill bg-gradient text-white py-1 px-2 mt-0.5" 
                  style={{ 
                    fontSize: '0.65rem',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))' 
                  }}>
              OPERATOR
            </span>
          </div>
        </div>

      </div>

    </header>
  );
};

export default Topbar;
