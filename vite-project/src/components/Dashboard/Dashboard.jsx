
const MOCK_METRICS = [
  {
    id: 1,
    title: 'Gross Ledger Volume',
    value: '$1,248,930.00',
    change: '+14.8%',
    isPositive: true,
    color: 'var(--primary)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
    )
  },
  {
    id: 2,
    title: 'Active Drone Routes',
    value: '184 deliveries',
    change: '+22.4%',
    isPositive: true,
    color: 'var(--accent)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
    )
  },
  {
    id: 3,
    title: 'Neuro-Secure Nodes',
    value: '84,920 registered',
    change: '+6.2%',
    isPositive: true,
    color: 'var(--secondary)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
    )
  },
  {
    id: 4,
    title: 'Recycling Loop Efficiency',
    value: '95.4% rate',
    change: '-0.3%',
    isPositive: false,
    color: '#f59e0b',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
    )
  }
];

const RECENT_TRANSACTIONS = [
  {
    id: 'TXN-9024',
    node: 'Orion-Net-4',
    item: 'CogniFit VR Lens',
    price: '$599.00',
    status: 'Completed',
    statusColor: 'success',
    timestamp: '10:52:14 AM'
  },
  {
    id: 'TXN-9023',
    node: 'Luna-Client-9',
    item: 'AuraSync Smart Jacket',
    price: '$249.99',
    status: 'In-Transit',
    statusColor: 'warning',
    timestamp: '10:48:02 AM'
  },
  {
    id: 'TXN-9022',
    node: 'Nebula-Node-12',
    item: 'Synapse Core Earbuds',
    price: '$299.99',
    status: 'Completed',
    statusColor: 'success',
    timestamp: '10:35:50 AM'
  },
  {
    id: 'TXN-9021',
    node: 'Nova-Operator-1',
    item: 'Quantum Portal Display',
    price: '$1,250.00',
    status: 'Flagged',
    statusColor: 'danger',
    timestamp: '10:14:18 AM'
  }
];

const Dashboard = () => {
  return (

    <div className="d-flex flex-column gap-4">

      {/* Decorative subtle background highlights */}
      <div className="glow-bg glow-primary" style={{ top: '20%', right: '10%', opacity: '0.08' }}></div>
      <div className="glow-bg glow-secondary" style={{ bottom: '10%', left: '10%', opacity: '0.08' }}></div>

      {/* Metrics Row */}
      <div className="row g-4">
        {MOCK_METRICS.map((metric) => (
          <div className="col-sm-6 col-xl-3" key={metric.id}>
            <div className="card glass-panel border-0 p-4 h-100 d-flex flex-column justify-content-between">
              
              <div className="d-flex align-items-center justify-content-between mb-3">
                <span className="p-2.5 rounded-3 bg-dark d-flex align-items-center justify-content-center" 
                      style={{ 
                        color: metric.color,
                        background: 'rgba(0,0,0,0.02) !important',
                        border: '1px solid rgba(0,0,0,0.03)'
                      }}>
                  {metric.icon}
                </span>
                <span className={`badge rounded-pill ${metric.isPositive ? 'bg-success' : 'bg-warning'} bg-opacity-10`}
                      style={{ 
                        fontSize: '0.7rem', 
                        padding: '4px 8px', 
                        color: metric.isPositive ? '#10b981 !important' : '#f59e0b !important',
                        background: metric.isPositive ? 'rgba(16, 185, 129, 0.08)' : 'rgba(245, 158, 11, 0.08)'
                      }}>
                  {metric.change}
                </span>
              </div>

              <div>
                <span className="text-muted small fw-medium">{metric.title}</span>
                <h3 className="fw-extrabold text-dark mt-1 mb-0" style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem' }}>
                  {metric.value}
                </h3>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Analytics Chart & Activity Panel */}
      <div className="row g-4">
        
        {/* Animated Custom Chart Card */}
        <div className="col-lg-8">
          <div className="card glass-panel border-0 p-4 h-100 position-relative overflow-hidden">
            
            <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3 border-secondary border-opacity-10">
              <div>
                <h3 className="h5 fw-bold text-dark mb-1">Quantum Transaction Frequency</h3>
                <p className="text-muted small mb-0">Synchronized hourly ledger throughput cycles</p>
              </div>
              
              <div className="d-flex gap-2">
                <span className="badge rounded-pill bg-primary px-3 py-1.5 fs-7" style={{ cursor: 'pointer' }}>24 Hours</span>
                <span className="badge rounded-pill bg-dark px-3 py-1.5 fs-7 text-muted border border-secondary border-opacity-10" style={{ cursor: 'pointer' }}>7 Days</span>
              </div>
            </div>

            {/* Breathtaking custom inline SVG Chart */}
            <div className="position-relative py-3 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
              <svg viewBox="0 0 500 200" className="w-100 h-100 overflow-visible" style={{ maxHeight: '220px' }}>
                <defs>
                  {/* Glowing Fill Gradient */}
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.00" />
                  </linearGradient>
                  {/* Stroke Gradient */}
                  <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--primary)" />
                    <stop offset="50%" stopColor="var(--secondary)" />
                    <stop offset="100%" stopColor="var(--accent)" />
                  </linearGradient>
                  {/* Drop Shadow filter */}
                  <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="var(--primary)" floodOpacity="0.2" />
                  </filter>
                </defs>

                {/* Grid Lines */}
                <line x1="50" y1="20" x2="450" y2="20" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                <line x1="50" y1="60" x2="450" y2="60" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                <line x1="50" y1="100" x2="450" y2="100" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                <line x1="50" y1="140" x2="450" y2="140" stroke="rgba(0,0,0,0.02)" strokeWidth="1" />
                <line x1="50" y1="180" x2="450" y2="180" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" />

                {/* Y Axis Labels */}
                <text x="25" y="25" fill="#94a3b8" fontSize="8" fontWeight="600">100k</text>
                <text x="25" y="65" fill="#94a3b8" fontSize="8" fontWeight="600">75k</text>
                <text x="25" y="105" fill="#94a3b8" fontSize="8" fontWeight="600">50k</text>
                <text x="25" y="145" fill="#94a3b8" fontSize="8" fontWeight="600">25k</text>
                <text x="25" y="184" fill="#94a3b8" fontSize="8" fontWeight="600">0</text>

                {/* X Axis Labels */}
                <text x="50" y="196" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="600">00:00</text>
                <text x="130" y="196" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="600">04:00</text>
                <text x="210" y="196" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="600">08:00</text>
                <text x="290" y="196" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="600">12:00</text>
                <text x="370" y="196" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="600">16:00</text>
                <text x="450" y="196" fill="#94a3b8" fontSize="8" textAnchor="middle" fontWeight="600">20:00</text>

                {/* Glowing area under path */}
                <path d="M50 180 Q110 80 170 130 T290 70 T410 110 L450 60 L450 180 Z" fill="url(#chartGlow)" />

                {/* Main animated chart path curve */}
                <path d="M50 180 Q110 80 170 130 T290 70 T410 110 L450 60" 
                      fill="none" 
                      stroke="url(#strokeGrad)" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      filter="url(#shadow)"
                      style={{
                        strokeDasharray: 1000,
                        strokeDashoffset: 1000,
                        animation: 'drawPath 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards'
                      }}
                />

                {/* Interactive highlight dots */}
                <circle cx="110" cy="80" r="5" fill="var(--primary)" stroke="#ffffff" strokeWidth="2" />
                <circle cx="230" cy="100" r="5" fill="var(--secondary)" stroke="#ffffff" strokeWidth="2" />
                <circle cx="290" cy="70" r="5" fill="var(--accent)" stroke="#ffffff" strokeWidth="2" />
                <circle cx="450" cy="60" r="5" fill="var(--secondary)" stroke="#ffffff" strokeWidth="2" />
              </svg>

              {/* Inline drawing keyframes */}
              <style>{`
                @keyframes drawPath {
                  to { strokeDashoffset: 0; }
                }
              `}</style>
            </div>

          </div>
        </div>

        {/* Node Performance Dial Panel */}
        <div className="col-lg-4">
          <div className="card glass-panel border-0 p-4 h-100 d-flex flex-column justify-content-between">
            <div>
              <h3 className="h5 fw-bold text-dark mb-1">Autonomous Drone Status</h3>
              <p className="text-muted small mb-3">Fulfillment aerospace grid allocation</p>
            </div>

            <div className="text-center py-4 position-relative">
              {/* Circular gauge */}
              <div className="d-inline-block position-relative">
                <svg width="150" height="150" viewBox="0 0 100 100" className="overflow-visible">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="8" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="url(#strokeGrad)" strokeWidth="8" 
                          strokeDasharray="251.2"
                          strokeDashoffset="60"
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="position-absolute top-50 start-50 translate-middle text-center">
                  <span className="display-6 fw-extrabold text-dark" style={{ fontFamily: 'var(--font-display)' }}>84%</span>
                  <div className="text-muted small" style={{ fontSize: '0.65rem', fontWeight: '600' }}>CAPACITY</div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-2 mt-2">
              <div className="d-flex justify-content-between align-items-center small p-2 rounded-3" style={{ background: 'rgba(0,0,0,0.015)' }}>
                <span className="text-muted d-flex align-items-center gap-2 small">
                  <span className="rounded-circle" style={{ width: '8px', height: '8px', background: 'var(--accent)' }}></span>
                  Active Flying Drones
                </span>
                <span className="fw-bold text-dark small">45 units</span>
              </div>
              <div className="d-flex justify-content-between align-items-center small p-2 rounded-3" style={{ background: 'rgba(0,0,0,0.015)' }}>
                <span className="text-muted d-flex align-items-center gap-2 small">
                  <span className="rounded-circle" style={{ width: '8px', height: '8px', background: 'var(--secondary)' }}></span>
                  Docked Charging
                </span>
                <span className="fw-bold text-dark small">8 units</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Recent Ledger Transactions Table */}
      <div className="card glass-panel border-0 p-4">
        
        <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3 border-secondary border-opacity-10">
          <div>
            <h3 className="h5 fw-bold text-dark mb-1">Recent Commerce handshakes</h3>
            <p className="text-muted small mb-0">Decentralized peer-to-peer molecular contracts log</p>
          </div>
          <span className="badge rounded-pill bg-dark px-3 py-1.5 text-muted border border-secondary border-opacity-10 small" style={{ cursor: 'pointer' }}>
            Audited Logs
          </span>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0" style={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
            <thead>
              <tr className="text-muted small border-0" style={{ fontSize: '0.75rem' }}>
                <th className="border-0 bg-transparent ps-3">HASH IDENTIFIER</th>
                <th className="border-0 bg-transparent">SOURCE NODE</th>
                <th className="border-0 bg-transparent">ACQUIRED CONCEPT</th>
                <th className="border-0 bg-transparent">TRANSFER AMOUNT</th>
                <th className="border-0 bg-transparent">LEDGER STATE</th>
                <th className="border-0 bg-transparent pe-3 text-end">TIMESTAMP</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_TRANSACTIONS.map((txn) => (
                <tr key={txn.id} className="glass-panel" 
                    style={{ 
                      background: 'rgba(255,255,255,0.4) !important',
                      border: '1px solid rgba(0,0,0,0.03) !important',
                      boxShadow: 'none !important'
                    }}>
                  <td className="ps-3 fw-bold text-primary small bg-transparent">{txn.id}</td>
                  <td className="text-dark small bg-transparent">{txn.node}</td>
                  <td className="text-dark small bg-transparent">{txn.item}</td>
                  <td className="fw-bold text-dark small bg-transparent">{txn.price}</td>
                  <td className="bg-transparent">
                    <span className={`badge bg-${txn.statusColor} bg-opacity-10 rounded-pill px-2.5 py-1`}
                          style={{
                            fontSize: '0.65rem',
                            color: txn.status === 'Completed' ? '#10b981 !important' : txn.status === 'In-Transit' ? '#f59e0b !important' : '#ef4444 !important',
                            background: txn.status === 'Completed' ? 'rgba(16, 185, 129, 0.08)' : txn.status === 'In-Transit' ? 'rgba(245, 158, 11, 0.08)' : 'rgba(239, 68, 68, 0.08)'
                          }}>
                      {txn.status}
                    </span>
                  </td>
                  <td className="text-muted pe-3 text-end small bg-transparent">{txn.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;
