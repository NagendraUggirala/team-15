import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail') || 'orion@nebula.io';

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="position-fixed top-0 start-0 h-100 glass-panel border-0 border-end rounded-0 p-4 d-flex flex-column justify-content-between" 
         style={{ 
           width: '260px', 
           zIndex: 100, 
           background: 'rgba(255, 255, 255, 0.9) !important',
           boxShadow: '4px 0 30px rgba(0, 0, 0, 0.02) !important'
         }}>
      
      <div>
        {/* Brand Header */}
        <div className="d-flex align-items-center gap-2 mb-5 border-bottom pb-4 border-secondary border-opacity-10">
          <span className="p-2 rounded-3 bg-gradient d-flex align-items-center justify-content-center" 
                style={{ 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  boxShadow: '0 4px 12px var(--primary-glow)'
                }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 12V2H4v11h6z"/>
            </svg>
          </span>
          <span className="fw-extrabold text-gradient fs-5" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.5px' }}>
            NEX<span className="text-dark">HUB</span>
          </span>
        </div>

        {/* Navigation Options */}
        <div className="d-flex flex-column gap-2">
          
          <NavLink 
            to="/dashboard" 
            end
            className={({ isActive }) => `nav-link d-flex align-items-center gap-3 px-3 py-3 rounded-4 transition-smooth ${isActive ? 'active' : 'text-muted'}`}
            style={({ isActive }) => ({
              background: isActive ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(219, 39, 119, 0.04))' : 'transparent',
              color: isActive ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: isActive ? '600' : '500'
            })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="9" rx="1"/>
              <rect x="14" y="3" width="7" height="5" rx="1"/>
              <rect x="14" y="12" width="7" height="9" rx="1"/>
              <rect x="3" y="16" width="7" height="5" rx="1"/>
            </svg>
            <span>Overview</span>
          </NavLink>

          <NavLink 
            to="/dashboard/products" 
            className={({ isActive }) => `nav-link d-flex align-items-center gap-3 px-3 py-3 rounded-4 transition-smooth ${isActive ? 'active' : 'text-muted'}`}
            style={({ isActive }) => ({
              background: isActive ? 'linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(219, 39, 119, 0.04))' : 'transparent',
              color: isActive ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: isActive ? '600' : '500'
            })}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className="d-flex align-items-center justify-content-between w-100">
              <span>Products</span>
              <span className="badge rounded-pill bg-primary" style={{ fontSize: '0.65rem', padding: '3px 6px' }}>Store</span>
            </span>
          </NavLink>

          <div className="border-top my-3 border-secondary border-opacity-10"></div>

          <NavLink 
            to="/" 
            className="nav-link d-flex align-items-center gap-3 px-3 py-3 rounded-4 text-muted transition-smooth"
            style={{ fontWeight: '500' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span>Live Storefront</span>
          </NavLink>

          <NavLink 
            to="/contact" 
            className="nav-link d-flex align-items-center gap-3 px-3 py-3 rounded-4 text-muted transition-smooth"
            style={{ fontWeight: '500' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>Support desk</span>
          </NavLink>

        </div>
      </div>

      {/* Profile summary & Logout action */}
      <div className="d-flex flex-column gap-3">
        <div className="p-3 rounded-4 bg-dark d-flex align-items-center gap-3" style={{ background: 'rgba(0,0,0,0.03) !important' }}>
          <div className="rounded-circle bg-gradient d-flex align-items-center justify-content-center text-white fw-bold" 
               style={{ 
                 background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                 width: '38px',
                 height: '38px',
                 fontSize: '0.85rem'
               }}>
            {userEmail.substring(0, 2).toUpperCase()}
          </div>
          <div className="overflow-hidden">
            <div className="text-dark fw-bold small text-truncate">{userEmail.split('@')[0]}</div>
            <div className="text-muted small text-truncate" style={{ fontSize: '0.75rem' }}>{userEmail}</div>
          </div>
        </div>

        <button 
          onClick={handleLogout} 
          className="btn btn-premium-outline w-100 py-2.5 rounded-4 d-flex align-items-center justify-content-center gap-2"
          style={{ border: '1px solid rgba(220, 53, 69, 0.2)', color: '#dc3545' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          <span style={{ color: '#dc3545' }}>Disconnect</span>
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
