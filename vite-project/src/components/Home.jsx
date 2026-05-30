import React, { useState, useMemo } from 'react';

// Sample futuristic products / concepts
const SHOPPING_CONCEPTS = [
  {
    id: 1,
    title: 'AuraSync Smart Jacket',
    category: 'Wearables',
    price: '249.99',
    description: 'Thermo-regulating fibers with embedded bio-sensors that synchronize with your mood and environment to shift color and temperature.',
    rating: 4.9,
    glowColor: 'var(--primary)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shirt"><path d="M15.4 7H9.6L7 2.5a.5.5 0 0 0-.5-.2H2v3a1 1 0 0 0 1 1h2.3l.7 8.8a1 1 0 0 0 1 .9h10a1 1 0 0 0 1-.9l.7-8.8H19a1 1 0 0 0 1-1v-3h-4.5a.5.5 0 0 0-.5.2L15.4 7z"/></svg>
    )
  },
  {
    id: 2,
    title: 'CogniFit VR Lens',
    category: 'Neuro-Tech',
    price: '599.00',
    description: 'Ultra-thin, zero-latency micro-display contact lenses providing real-time AI spatial overlays and direct visual product testing.',
    rating: 4.8,
    glowColor: 'var(--secondary)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-glasses"><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13 5 5c.2-.7.9-1 1.5-1h11c.7 0 1.3.3 1.5 1l2.5 8"/></svg>
    )
  },
  {
    id: 3,
    title: 'Quantum Portal Display',
    category: 'Future Home',
    price: '1,250.00',
    description: 'Holographic ambient projector projecting virtual storefronts and virtual fashion fitting rooms right into your living room space.',
    rating: 5.0,
    glowColor: 'var(--accent)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-projector"><path d="M5 7 3 5"/><path d="M9 6V3"/><path d="m13 7 2-2"/><circle cx="9" cy="13" r="3"/><path d="M12 13h7a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3"/><path d="M5 19h8"/></svg>
    )
  },
  {
    id: 4,
    title: 'PulseBand Biosync',
    category: 'Wearables',
    price: '189.50',
    description: 'A futuristic wristband that tracks kinetic activity and matches custom nutritional energy-bars customized uniquely for you.',
    rating: 4.7,
    glowColor: 'var(--primary)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-watch"><circle cx="12" cy="12" r="6"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M16 12h-4v-4"/></svg>
    )
  },
  {
    id: 5,
    title: 'Synapse Core Earbuds',
    category: 'Neuro-Tech',
    price: '299.99',
    description: 'Neural ear interfaces decoding audio dynamically through bone conduction while translating environment ads into interactive offers.',
    rating: 4.9,
    glowColor: 'var(--secondary)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
    )
  },
  {
    id: 6,
    title: 'Ambient Solar Charger',
    category: 'Future Home',
    price: '95.00',
    description: 'Elegantly styled solar capture panels disguised as premium wall art, designed to charge all NexShop home devices.',
    rating: 4.6,
    glowColor: 'var(--accent)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    )
  }
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [purchasedItems, setPurchasedItems] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  // Handle category filter Selection
  const categories = ['All', 'Wearables', 'Neuro-Tech', 'Future Home'];

  const filteredConcepts = useMemo(() => {
    return SHOPPING_CONCEPTS.filter(concept => {
      const matchesCategory = selectedCategory === 'All' || concept.category === selectedCategory;
      const matchesSearch = concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            concept.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleBuy = (title) => {
    setPurchasedItems(prev => ({
      ...prev,
      [title]: (prev[title] || 0) + 1
    }));
    setAlertMessage(`"${title}" successfully simulated in checkout!`);
    setTimeout(() => setAlertMessage(''), 3000);
  };

  return (
    <div className="page-container">
      {/* Decorative Glow Elements */}
      <div className="glow-bg glow-primary"></div>
      <div className="glow-bg glow-secondary"></div>

      <div className="container">
        
        {/* Dynamic Alerts */}
        {alertMessage && (
          <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
            <div className="glass-panel border-0 text-white p-3 rounded-4 float-element d-flex align-items-center gap-3" 
                 style={{ 
                   background: 'rgba(20, 184, 166, 0.9)', 
                   boxShadow: '0 8px 32px rgba(20, 184, 166, 0.4)',
                   border: '1px solid rgba(255, 255, 255, 0.2) !important'
                 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="text-white">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div className="fw-semibold">{alertMessage}</div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="row align-items-center mb-5 pb-4">
          <div className="col-lg-7 text-center text-lg-start">
            <div className="badge rounded-pill px-3 py-2 mb-3 float-element" 
                 style={{ 
                   background: 'rgba(99, 102, 241, 0.15)', 
                   border: '1px solid rgba(99, 102, 241, 0.3)',
                   color: 'var(--primary)',
                   fontSize: '0.85rem',
                   letterSpacing: '1px',
                   fontWeight: '600'
                 }}>
              NEXT-GEN RETAIL METAVERSE
            </div>
            
            <h1 className="display-4 fw-extrabold mb-3" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.15' }}>
              The Future of <br />
              <span className="text-gradient">Intelligent Shopping</span>
            </h1>
            
            <p className="text-muted fs-5 mb-4 col-xl-10" style={{ fontWeight: '400' }}>
              Experience hyper-personalized immersive commerce powered by neural interfaces, holographic displays, and automated drone networks.
            </p>
            
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
              <a href="#catalog" className="btn-premium">
                Explore The Catalog
              </a>
              <a href="#features" className="btn-premium-outline">
                How It Works
              </a>
            </div>
          </div>
          
          <div className="col-lg-5 mt-5 mt-lg-0 text-center position-relative">
            <div className="p-4 glass-panel float-element" 
                 style={{ 
                   position: 'relative', 
                   boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                   background: 'linear-gradient(145deg, rgba(20,22,34,0.8), rgba(9,10,15,0.9))'
                 }}>
              <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3 border-secondary border-opacity-10">
                <span className="fw-bold fs-5 text-gradient-accent">Live Hologram Engine</span>
                <span className="badge bg-success rounded-pill px-2 py-1 pulse-glow-element" style={{ fontSize: '0.7rem' }}>ONLINE</span>
              </div>
              
              <div className="py-5 text-center position-relative">
                {/* Floating holographic representation */}
                <div className="text-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" fill="none" stroke="url(#hologramGrad)" strokeWidth="1.5" className="float-element" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="hologramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" />
                        <stop offset="100%" stopColor="var(--secondary)" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                
                <h5 className="mb-1 text-white">Quantum Commerce Node</h5>
                <p className="text-muted small">AI Agent Generating Custom Offers...</p>
                
                <div className="mt-4 p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px dashed var(--border-color)' }}>
                  <div className="d-flex justify-content-between small mb-2 text-muted">
                    <span>Virtual Fit accuracy</span>
                    <span className="text-white">99.8%</span>
                  </div>
                  <div className="progress" style={{ height: '6px', background: 'rgba(255,255,255,0.05)' }}>
                    <div className="progress-bar bg-gradient" role="progressbar" style={{ 
                      width: '99.8%', 
                      background: 'linear-gradient(90deg, var(--primary), var(--accent))' 
                    }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Catalog Section */}
        <section id="catalog" className="pt-5 mb-5 pb-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Next-Gen <span className="text-gradient">Inventory Store</span>
            </h2>
            <p className="text-muted">Simulate purchase of advanced concepts with automated neuro-transactions</p>
          </div>

          {/* Interactive Filters and Search */}
          <div className="row justify-content-between align-items-center mb-4 g-3">
            <div className="col-md-7">
              <div className="d-flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`btn px-4 py-2 rounded-pill fs-6 transition-smooth ${
                      selectedCategory === cat
                        ? 'btn-premium'
                        : 'glass-panel text-muted hover-text-white'
                    }`}
                    style={{ border: selectedCategory === cat ? 'none' : '1px solid var(--border-color)' }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-md-5">
              <div className="position-relative">
                <input
                  type="text"
                  placeholder="Search futuristic technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control bg-dark border-secondary border-opacity-25 text-white px-4 py-3 rounded-pill"
                  style={{ 
                    boxShadow: 'none', 
                    paddingRight: '45px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    background: 'rgba(18, 20, 29, 0.45) !important'
                  }}
                />
                <span className="position-absolute end-0 top-50 translate-middle-y me-4 text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Catalog Grid */}
          <div className="row g-4">
            {filteredConcepts.length > 0 ? (
              filteredConcepts.map((concept) => (
                <div className="col-md-6 col-lg-4" key={concept.id}>
                  <div className="card glass-panel h-100 p-4 border-0 d-flex flex-column justify-content-between position-relative overflow-hidden"
                       style={{ 
                         background: 'linear-gradient(135deg, rgba(20,22,34,0.7), rgba(9,10,15,0.85))'
                       }}>
                    
                    {/* Corner decorative light element */}
                    <div style={{
                      position: 'absolute',
                      top: '-20px',
                      right: '-20px',
                      width: '60px',
                      height: '60px',
                      background: concept.glowColor,
                      filter: 'blur(30px)',
                      opacity: '0.3',
                      borderRadius: '50%'
                    }}></div>

                    <div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <span className="p-3 rounded-4 d-flex align-items-center justify-content-center text-white" 
                              style={{ 
                                background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                boxShadow: `0 4px 15px ${concept.glowColor}1b`,
                                color: concept.glowColor
                              }}>
                          {concept.icon}
                        </span>
                        <span className="badge rounded-pill bg-dark text-muted border border-secondary border-opacity-10 px-3 py-2 small">
                          {concept.category}
                        </span>
                      </div>

                      <h4 className="fw-bold mb-2 text-white h5">{concept.title}</h4>
                      <p className="text-muted small mb-4">{concept.description}</p>
                    </div>

                    <div>
                      <div className="d-flex align-items-center justify-content-between border-top pt-3 border-secondary border-opacity-10 mt-3">
                        <div>
                          <div className="text-muted small">Neural Price</div>
                          <div className="fw-bold fs-5 text-white">${concept.price}</div>
                        </div>

                        <button 
                          onClick={() => handleBuy(concept.title)} 
                          className="btn-premium px-3 py-2 rounded-3 fs-7"
                          style={{
                            borderRadius: '10px !important',
                            padding: '8px 16px',
                            background: `linear-gradient(135deg, ${concept.glowColor}, var(--secondary))`
                          }}
                        >
                          Buy Now
                        </button>
                      </div>
                      
                      {purchasedItems[concept.title] && (
                        <div className="text-center mt-2 small text-gradient-accent fw-semibold">
                          Purchased: {purchasedItems[concept.title]} units
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div className="text-muted fs-4">No futuristic products found matching your search.</div>
                <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="btn-premium mt-3">Reset Filters</button>
              </div>
            )}
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section id="features" className="pt-5 pb-3">
          <div className="p-5 glass-panel rounded-5" style={{ background: 'linear-gradient(135deg, rgba(20,22,34,0.6), rgba(9,10,15,0.8))' }}>
            <div className="row g-4 justify-content-between align-items-center">
              <div className="col-lg-5">
                <div className="badge rounded-pill bg-gradient px-3 py-2 mb-3" style={{ background: 'linear-gradient(135deg, var(--accent), var(--primary))' }}>
                  THE FUTURE ARCHITECTURE
                </div>
                <h3 className="display-6 fw-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                  How NexShop <br />
                  <span className="text-gradient">Redefines Commerce</span>
                </h3>
                <p className="text-muted mb-4">
                  By converging augmented spatial reality, neural profiling, and automated machine-to-machine checkout, we have engineered an frictionless, immersive retail hub.
                </p>
                <div className="d-flex align-items-center gap-3">
                  <div className="fs-1 fw-bold text-gradient">99%</div>
                  <div className="text-muted small">Faster delivery loops using decentralized solar drone fleets.</div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <div className="p-4 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-10 h-100">
                      <h5 className="text-white fw-bold mb-2">AR fitting Room</h5>
                      <p className="text-muted small mb-0">Project exact garments on your real-time virtual clone matching physical weight.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-4 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-10 h-100">
                      <h5 className="text-white fw-bold mb-2">Neural Checkout</h5>
                      <p className="text-muted small mb-0">Synchronize payments securely through secure brainwave verification.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-4 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-10 h-100">
                      <h5 className="text-white fw-bold mb-2">Drone Balcony Drop</h5>
                      <p className="text-muted small mb-0">Sub-minute silent automated flying vehicles placing orders directly on your balcony.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="p-4 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-10 h-100">
                      <h5 className="text-white fw-bold mb-2">Sustainable Circle</h5>
                      <p className="text-muted small mb-0">Biodegradable dynamic materials that disassemble and recycle when worn down.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
