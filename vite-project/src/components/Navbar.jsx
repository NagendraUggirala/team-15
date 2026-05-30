import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container">
        {/* Futuristic Brand Logo */}
        <NavLink className="navbar-brand text-white d-flex align-items-center gap-2" to="/">
          <span className="p-2 rounded-3 bg-gradient d-flex align-items-center justify-content-center" 
                style={{ 
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  boxShadow: '0 4px 12px var(--primary-glow)'
                }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4 text-white" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
          </span>
          <span style={{ letterSpacing: '1px' }}>
            NEX<span className="text-gradient">SHOP</span>
          </span>
        </NavLink>

        {/* Toggler Button */}
        <button 
          className="navbar-toggler border-0 text-white" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ filter: 'invert(1)' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Action Bar */}
          <div className="d-flex align-items-center gap-3">
            {/* Dynamic Interactive Cart Badge */}
            <div className="position-relative d-none d-md-flex align-items-center justify-content-center p-2 rounded-circle glass-panel" 
                 style={{ width: '40px', height: '40px', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag text-white" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
                    style={{ fontSize: '0.65rem', padding: '3px 6px', boxShadow: '0 0 8px rgba(220, 53, 69, 0.6)' }}>
                3
              </span>
            </div>

            {/* Login Navigation Button */}
            <NavLink to="/login" className="btn-premium d-inline-flex gap-2 align-items-center">
              <span>Sign In</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
