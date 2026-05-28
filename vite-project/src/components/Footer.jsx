import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate();

  const handleAnchorClick = (selector) => {
    navigate('/');
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand-col">
          <Link to="/" className="nav-brand" style={{ display: 'inline-flex' }}>
            <div className="brand-icon">A</div>
            <span>AURA</span>
          </Link>
          <p className="footer-desc">
            An advanced, premium data dashboard platform powering development, modern operations, and collaborative cloud analytics.
          </p>
          <div className="footer-socials">
            {/* Twitter / X */}
            <a href="https://x.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Follow us on X">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Visit GitHub repository">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
              </svg>
            </a>
            {/* Discord */}
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Join our Discord community">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 .074.074 0 00-.062-.016c-.167-.386-.405-.875-.619-1.25a.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-col-title">Product</h3>
          <ul className="footer-links">
            <li><span className="footer-link" onClick={() => handleAnchorClick('#features')}>Features</span></li>
            <li><span className="footer-link" onClick={() => handleAnchorClick('#pricing')}>Pricing</span></li>
            <li><Link to="/signup" className="footer-link">Registration</Link></li>
            <li><Link to="/signin" className="footer-link">Session Access</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-col-title">Resources</h3>
          <ul className="footer-links">
            <li><a href="https://vite.dev/" target="_blank" rel="noreferrer" className="footer-link">Documentation</a></li>
            <li><a href="https://react.dev/" target="_blank" rel="noreferrer" className="footer-link">Developer Guides</a></li>
            <li><Link to="/" className="footer-link">System Status</Link></li>
            <li><span className="footer-link" onClick={() => handleAnchorClick('#features')}>Security Controls</span></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-col-title">Company</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">About Us</Link></li>
            <li><Link to="/" className="footer-link">Press Room</Link></li>
            <li><Link to="/" className="footer-link">Careers Portfolio</Link></li>
            <li><Link to="/" className="footer-link">Customer Stories</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-col-title">Legal</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Privacy Charter</Link></li>
            <li><Link to="/" className="footer-link">Terms of Service</Link></li>
            <li><Link to="/" className="footer-link">Cookie Settings</Link></li>
            <li><Link to="/" className="footer-link">End User License</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AURA Technologies Inc. All rights reserved.</p>
        <p>Designed for secure multi-tenant cloud operations.</p>
      </div>
    </footer>
  );
}
