import React, { useState } from 'react';

const CONCEPTS = [
  {
    id: 'spatial',
    title: 'Spatial Commerce Portals',
    subtitle: 'From 2D Pixels to 3D Light Fields',
    description: 'We believe flat screens are a limitation of the past. Our technology builds spatial portals that project high-resolution, tactile 3D holographic representations of products directly into your home. Customers can inspect fabrics, view dynamic tolerances, and experience product placement in real-time, removing all online shopping ambiguity.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    )
  },
  {
    id: 'biometric',
    title: 'Biometric Dynamic Synthesizers',
    subtitle: 'Tailored for Your Exact Biological Rhythms',
    description: 'The Biometric Smart Cart utilizes subtle biosensing tech to detect metrics like hydration, core temperature, and cognitive load. If you are ordering health supplements, activewear, or food ingredients, NexShop dynamically customizes chemical, textile, or nutritional profiles to suit your immediate physiological state.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    )
  },
  {
    id: 'headless',
    title: 'Autonomous Headless Logistics',
    subtitle: 'Hyper-Decentralized Blockchain Delivery Grid',
    description: 'Our warehouses are fully automated subterranean silos. When a transaction completes on the ledger, robotic loaders sort and package the product. It is immediately handed to a micro-drone flight group. No drivers, no dispatch centers—just peer-to-peer aerospace delivery direct to your custom coordinates.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M2 17h20M2 12h20M2 7h20"/></svg>
    )
  },
  {
    id: 'generative',
    title: 'Generative Intelligent Apparel',
    subtitle: 'Wearable Computational Interfaces',
    description: 'Apparel should adapt to your environment, not vice-versa. Our clothing utilizes flexible grapheme structures that shift insulation coefficients based on ambient temperature, repair minor fabric tears autonomously using micro-molecular binding, and let you modify physical logo layouts via your smartphone.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-warning"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    )
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState('spatial');

  const selectedConcept = CONCEPTS.find(c => c.id === activeTab);

  return (
    <div className="page-container">
      {/* Background Glows */}
      <div className="glow-bg glow-primary" style={{ left: '60%', top: '20%' }}></div>
      <div className="glow-bg glow-secondary" style={{ right: '60%', bottom: '20%' }}></div>

      <div className="container">
        
        {/* Banner Section */}
        <div className="text-center mb-5 pb-3">
          <span className="badge rounded-pill px-3 py-2 mb-3 float-element" 
                style={{ 
                  background: 'rgba(217, 70, 239, 0.15)', 
                  border: '1px solid rgba(217, 70, 239, 0.3)',
                  color: 'var(--secondary)',
                  fontWeight: '600'
                }}>
            DISCOVER OUR BLUEPRINT
          </span>
          <h1 className="display-4 fw-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Future-Proofing <span className="text-gradient">Human Retail</span>
          </h1>
          <p className="text-muted mx-auto col-md-8">
            At NexShop, we are merging cutting-edge science, aerospace fulfillment, and decentralized software to pioneer a beautiful paradigm for transactional shopping.
          </p>
        </div>

        {/* Dynamic Concept Tabs Section */}
        <div className="row g-4 mb-5 align-items-center">
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              {CONCEPTS.map(concept => (
                <button
                  key={concept.id}
                  onClick={() => setActiveTab(concept.id)}
                  className="text-start p-4 border-0 rounded-4 glass-panel transition-smooth w-100 position-relative overflow-hidden"
                  style={{
                    background: activeTab === concept.id ? 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(217,70,239,0.05))' : 'rgba(18,20,29,0.4)',
                    borderLeft: activeTab === concept.id ? '4px solid var(--primary)' : '1px solid var(--border-color)',
                    boxShadow: activeTab === concept.id ? '0 10px 20px rgba(99, 102, 241, 0.15)' : 'none'
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <span className="p-2 rounded-3 bg-dark d-flex align-items-center justify-content-center">
                      {concept.icon}
                    </span>
                    <div>
                      <h4 className="h6 fw-bold mb-0 text-white">{concept.title}</h4>
                      <span className="small text-muted">{concept.subtitle}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="p-5 glass-panel rounded-5 h-100 d-flex flex-column justify-content-center position-relative overflow-hidden"
                 style={{ 
                   background: 'linear-gradient(145deg, rgba(20,22,34,0.8), rgba(9,10,15,0.95))',
                   boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
                 }}>
              
              <div className="glow-bg glow-accent" style={{ top: '20%', right: '10%', opacity: 0.1 }}></div>

              <div className="d-flex align-items-center gap-4 mb-4">
                <span className="p-3 rounded-4 bg-dark bg-opacity-70 d-flex align-items-center justify-content-center" 
                      style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                  {selectedConcept?.icon}
                </span>
                <div>
                  <span className="small text-gradient-accent fw-bold text-uppercase tracking-wider">Active Concept Exploration</span>
                  <h3 className="h4 fw-bold mb-0 text-white mt-1">{selectedConcept?.title}</h3>
                </div>
              </div>

              <h5 className="text-secondary small mb-3 fw-semibold italic">{selectedConcept?.subtitle}</h5>
              <p className="text-muted fs-6 mb-4" style={{ lineHeight: '1.7' }}>
                {selectedConcept?.description}
              </p>

              <div className="p-3 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-10">
                <div className="row text-center g-3">
                  <div className="col-4">
                    <div className="fw-extrabold text-white h5 mb-0">99.9%</div>
                    <span className="small text-muted">Availability</span>
                  </div>
                  <div className="col-4">
                    <div className="fw-extrabold text-white h5 mb-0">Instant</div>
                    <span className="small text-muted">Ledger Sync</span>
                  </div>
                  <div className="col-4">
                    <div className="fw-extrabold text-white h5 mb-0">Carbon -</div>
                    <span className="small text-muted">Eco Positive</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Futuristic Timeline / Milestones */}
        <section className="my-5 pt-4">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Roadmap to <span className="text-gradient">Evolutionary Retail</span>
            </h2>
            <p className="text-muted">A glance into our developmental milestones and active rollouts</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 glass-panel rounded-4 h-100 position-relative border-0"
                   style={{ background: 'linear-gradient(135deg, rgba(20,22,34,0.6), rgba(9,10,15,0.8))' }}>
                <span className="badge rounded-pill bg-success mb-3 px-3 py-1">PHASE 1 - COMPLETED</span>
                <h4 className="fw-bold text-white mb-2 h5">Neural Profiling Protocol</h4>
                <p className="text-muted small">Standardized biometric cart interfaces and localized spatial projectors successfully integrated across initial testing nodes.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 glass-panel rounded-4 h-100 position-relative border-0"
                   style={{ background: 'linear-gradient(135deg, rgba(20,22,34,0.6), rgba(9,10,15,0.8))' }}>
                <span className="badge rounded-pill bg-primary mb-3 px-3 py-1 pulse-glow-element">PHASE 2 - ROLLING OUT</span>
                <h4 className="fw-bold text-white mb-2 h5">Autonomous Balcony Delivery</h4>
                <p className="text-muted small">Deployment of self-navigating solar-drone groups in over 45 smart metropolitan zones. Guaranteed delivery times lowered to 8 minutes.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 glass-panel rounded-4 h-100 position-relative border-0"
                   style={{ background: 'linear-gradient(135deg, rgba(20,22,34,0.6), rgba(9,10,15,0.8))' }}>
                <span className="badge rounded-pill bg-dark mb-3 px-3 py-1 text-muted border border-secondary border-opacity-10">PHASE 3 - RESEARCH</span>
                <h4 className="fw-bold text-white mb-2 h5">Generative Molecule Weaving</h4>
                <p className="text-muted small">Prototyping dynamic apparel that self-assembles and shifts fiber density in real-time, responding directly to cognitive muscle feedback.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Crew / Agents */}
        <section className="pt-4">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Meet The <span className="text-gradient">Commerce Agents</span>
            </h2>
            <p className="text-muted">Dynamic neural agents operating and maintaining NexShop logistics</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card glass-panel border-0 text-center p-4">
                <div className="mx-auto rounded-circle p-2 mb-3 bg-gradient float-element" 
                     style={{ 
                       background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                       width: '80px', 
                       height: '80px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       color: 'white'
                     }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <h5 className="fw-bold text-white mb-1">Aida-09</h5>
                <span className="badge bg-dark text-muted mb-3 border border-secondary border-opacity-10 align-self-center">Neuro-Recommendation Agent</span>
                <p className="text-muted small">Pioneering algorithmic shopping preferences by analyzing neural and environmental visual vibes.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card glass-panel border-0 text-center p-4">
                <div className="mx-auto rounded-circle p-2 mb-3 bg-gradient float-element" 
                     style={{ 
                       background: 'linear-gradient(135deg, var(--secondary), var(--accent))',
                       width: '80px', 
                       height: '80px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       color: 'white'
                     }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h5 className="fw-bold text-white mb-1">Dexter-Grid</h5>
                <span className="badge bg-dark text-muted mb-3 border border-secondary border-opacity-10 align-self-center">Aerospace Drone Director</span>
                <p className="text-muted small">Manages decentralized delivery routing, balancing trajectory wind resistance and drone charge levels.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card glass-panel border-0 text-center p-4">
                <div className="mx-auto rounded-circle p-2 mb-3 bg-gradient float-element" 
                     style={{ 
                       background: 'linear-gradient(135deg, var(--accent), var(--primary))',
                       width: '80px', 
                       height: '80px',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       color: 'white'
                     }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <h5 className="fw-bold text-white mb-1">Cipher-Core</h5>
                <span className="badge bg-dark text-muted mb-3 border border-secondary border-opacity-10 align-self-center">Blockchain Ledger Auditor</span>
                <p className="text-muted small">Monitors peer-to-peer smart transaction verification and quantum cryptography compliance.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
