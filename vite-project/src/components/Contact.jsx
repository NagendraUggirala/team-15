import React, { useState } from 'react';

const FAQS = [
  {
    id: 1,
    question: 'How do I initiate a product return for a bio-synced jacket?',
    answer: 'Simply access your digital receipt inside your neural link or device and tap "De-synchronize Fiber Profile." A collection drone will arrive at your balcony coordinates within 30 minutes to collect the item. All returned clothing is recycled at the molecular level to protect ecosystem cycles.'
  },
  {
    id: 2,
    question: 'What happens if a delivery drone encounters severe weather?',
    answer: 'Our aerospace fleet operates on a decentralized grid. If wind velocity or atmospheric precipitation exceeds predefined safety parameters, drones dynamically reroute to the nearest automated ground transit hub, ensuring zero product exposure. You will receive an updated spatial coordinates beacon in real-time.'
  },
  {
    id: 3,
    question: 'Are neural brainwave transactions 100% secure?',
    answer: 'Absolutely. Every neuro-transaction is validated by a secure three-factor quantum cryptographic signature. This verifies distinct biometric heartbeat patterns alongside cognitive validation, preventing any possibility of biometric spoofing or unauthorized ledger modifications.'
  },
  {
    id: 4,
    question: 'Can I project multiple items simultaneously in my spatial fitting room?',
    answer: 'Yes! The Quantum Portal Display supports up to five simultaneous active holograms. You can compare different color palettes, view matching accessory options, and inspect overall coordinates. Simply toggle the "Overlay Mode" on your control console.'
  }
];

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="page-container">
      {/* Background Glows */}
      <div className="glow-bg glow-primary" style={{ left: '20%', top: '50%' }}></div>
      <div className="glow-bg glow-secondary" style={{ right: '20%', top: '10%' }}></div>

      <div className="container">
        
        {/* Page Title */}
        <div className="text-center mb-5 pb-3">
          <span className="badge rounded-pill px-3 py-2 mb-3 float-element" 
                style={{ 
                  background: 'rgba(20, 184, 166, 0.15)', 
                  border: '1px solid rgba(20, 184, 166, 0.3)',
                  color: 'var(--accent)',
                  fontWeight: '600'
                }}>
            NEURAL COMMUNICATION HUB
          </span>
          <h1 className="display-4 fw-bold" style={{ fontFamily: 'var(--font-display)' }}>
            Get in Touch with <span className="text-gradient">NexShop Support</span>
          </h1>
          <p className="text-muted mx-auto col-md-8">
            Connect with our localized AI support agents or transmit queries directly to our subterranean autonomous logistics centers.
          </p>
        </div>

        {/* Contact Form and Information Grid */}
        <div className="row g-5 mb-5 pb-4">
          
          {/* Info Side */}
          <div className="col-lg-5">
            <h3 className="h4 fw-bold text-white mb-4">Support Beacons</h3>
            
            <div className="d-flex flex-column gap-4">
              <div className="p-4 glass-panel border-0 d-flex gap-3 align-items-start" 
                   style={{ background: 'linear-gradient(135deg, rgba(20,22,34,0.6), rgba(9,10,15,0.85))' }}>
                <span className="p-3 rounded-4 bg-dark bg-opacity-70 text-gradient d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div>
                  <h4 className="h6 fw-bold text-white mb-1">Neuro-Communication Freq</h4>
                  <p className="text-muted small mb-0">Direct brainwave channel: 184.9 MHz</p>
                  <p className="text-muted small">Hotline: +1 (800) 999-NEXUS</p>
                </div>
              </div>

              <div className="p-4 glass-panel border-0 d-flex gap-3 align-items-start" 
                   style={{ background: 'linear-gradient(135deg, rgba(20,22,34,0.6), rgba(9,10,15,0.85))' }}>
                <span className="p-3 rounded-4 bg-dark bg-opacity-70 text-gradient-accent d-flex align-items-center justify-content-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div>
                  <h4 className="h6 fw-bold text-white mb-1">Laser Spatial Stream</h4>
                  <p className="text-muted small mb-0">Hologram Channel ID: nexshop-support-node-4</p>
                  <p className="text-muted small">Email: quantum-support@nexshop.io</p>
                </div>
              </div>

              <div className="p-4 glass-panel border-0 d-flex gap-3 align-items-start" 
                   style={{ background: 'linear-gradient(135deg, rgba(20,22,34,0.6), rgba(9,10,15,0.85))' }}>
                <span className="p-3 rounded-4 bg-dark bg-opacity-70 d-flex align-items-center justify-content-center" style={{ color: 'var(--secondary)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div>
                  <h4 className="h6 fw-bold text-white mb-1">Logistics Coordinate Base</h4>
                  <p className="text-muted small mb-0">Silo 12, Sub-level 4, Silicon Valley Metro</p>
                  <p className="text-muted small">Grid: 37.7749° N, 122.4194° W</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="col-lg-7">
            <div className="p-5 glass-panel rounded-5 position-relative border-0" 
                 style={{ 
                   background: 'linear-gradient(145deg, rgba(20,22,34,0.8), rgba(9,10,15,0.95))',
                   boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
                 }}>
              
              {isSubmitted ? (
                <div className="text-center py-5">
                  <div className="mx-auto rounded-circle bg-success bg-opacity-10 d-flex align-items-center justify-content-center mb-4 pulse-glow-element" 
                       style={{ width: '80px', height: '80px', border: '2px solid rgba(40, 167, 69, 0.4)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="#28a745" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="fw-bold text-white mb-3">Transmission Transferred</h3>
                  <p className="text-muted mx-auto col-md-10 mb-4">
                    Your transmission was securely logged to our quantum ledger. An AI concierge agent will establish a direct neuro-link shortly.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="btn-premium px-4 py-2">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="h4 fw-bold text-white mb-4">Transmit a Support Inquiry</h3>
                  
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label className="text-muted small mb-2 fw-semibold">Your Neural Alias</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Neo Carter"
                          className="form-control bg-dark border-secondary border-opacity-25 text-white px-4 py-3 rounded-3"
                          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label className="text-muted small mb-2 fw-semibold">Spatial Mail Terminal</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. neo@cyber.io"
                          className="form-control bg-dark border-secondary border-opacity-25 text-white px-4 py-3 rounded-3"
                          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label className="text-muted small mb-2 fw-semibold">Inquiry Vector (Subject)</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Biometric return verification"
                      className="form-control bg-dark border-secondary border-opacity-25 text-white px-4 py-3 rounded-3"
                      style={{ border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>

                  <div className="form-group mb-4">
                    <label className="text-muted small mb-2 fw-semibold">Encrypted Message Packet</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your inquiry details..."
                      className="form-control bg-dark border-secondary border-opacity-25 text-white px-4 py-3 rounded-3"
                      style={{ border: '1px solid rgba(255,255,255,0.1)', resize: 'none' }}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-premium w-100 py-3 rounded-3 d-flex align-items-center justify-content-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span>Transmitting Packet...</span>
                      </>
                    ) : (
                      <>
                        <span>Broadcast Transmission</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQs Accordion Section */}
        <section className="my-5 py-4">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Interactive <span className="text-gradient">Protocol Q&A</span>
            </h2>
            <p className="text-muted">Common queries regarding our spatial and physical logistics networks</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="d-flex flex-column gap-3">
                {FAQS.map(faq => (
                  <div key={faq.id} 
                       className="glass-panel border-0 rounded-4 overflow-hidden transition-smooth"
                       style={{ background: 'rgba(18, 20, 29, 0.55)' }}>
                    
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-100 text-start p-4 border-0 bg-transparent text-white fw-bold d-flex justify-content-between align-items-center"
                      style={{ fontSize: '1.05rem', outline: 'none' }}
                    >
                      <span>{faq.question}</span>
                      <span className="p-1 rounded-circle bg-dark text-gradient d-flex align-items-center justify-content-center transition-smooth" 
                            style={{ 
                              transform: activeFaq === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                              width: '32px',
                              height: '32px'
                            }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                    </button>

                    <div className="transition-smooth" 
                         style={{ 
                           maxHeight: activeFaq === faq.id ? '200px' : '0px',
                           opacity: activeFaq === faq.id ? 1 : 0,
                           transition: 'all 0.4s ease-out',
                           overflow: 'hidden'
                         }}>
                      <div className="p-4 pt-0 text-muted border-top border-secondary border-opacity-10 small" style={{ lineHeight: '1.6' }}>
                        {faq.answer}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;
