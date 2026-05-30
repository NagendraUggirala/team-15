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

         

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
