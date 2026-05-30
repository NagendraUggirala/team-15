import React, { useState, useMemo } from 'react';

// Default initial premium items
const INITIAL_PRODUCTS = [
  {
    id: 'PRD-101',
    title: 'AuraSync Smart Jacket',
    category: 'Wearables',
    price: 249.99,
    stock: 45,
    status: 'Active'
  },
  {
    id: 'PRD-102',
    title: 'CogniFit VR Lens',
    category: 'Neuro-Tech',
    price: 599.00,
    stock: 12,
    status: 'Active'
  },
  {
    id: 'PRD-103',
    title: 'Quantum Portal Display',
    category: 'Future Home',
    price: 1250.00,
    stock: 8,
    status: 'Restocking'
  },
  {
    id: 'PRD-104',
    title: 'PulseBand Biosync',
    category: 'Wearables',
    price: 189.50,
    stock: 120,
    status: 'Active'
  },
  {
    id: 'PRD-105',
    title: 'Synapse Core Earbuds',
    category: 'Neuro-Tech',
    price: 299.99,
    stock: 0,
    status: 'Out of Stock'
  }
];

const ProductPage = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Modal toggle state
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    category: 'Wearables',
    price: '',
    stock: '',
    status: 'Active'
  });

  const categories = ['All', 'Wearables', 'Neuro-Tech', 'Future Home'];

  // Handle live search & category filters
  const filteredProducts = useMemo(() => {
    return products.filter(prd => {
      const matchesCategory = selectedCategory === 'All' || prd.category === selectedCategory;
      const matchesSearch = prd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            prd.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, searchQuery, selectedCategory]);

  // Adjust stock item (increase or decrease)
  const adjustStock = (id, amount) => {
    setProducts(prev => prev.map(prd => {
      if (prd.id === id) {
        const newStock = Math.max(0, prd.stock + amount);
        let newStatus = prd.status;
        if (newStock === 0) newStatus = 'Out of Stock';
        else if (newStock > 0 && prd.status === 'Out of Stock') newStatus = 'Active';
        return { ...prd, stock: newStock, status: newStatus };
      }
      return prd;
    }));
  };

  // Delete product action
  const deleteProduct = (id) => {
    if (window.confirm(`Confirm disposal of item node "${id}"?`)) {
      setProducts(prev => prev.filter(prd => prd.id !== id));
    }
  };

  // Submit new product
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.title || !newProduct.price || !newProduct.stock) {
      alert('Please fill out all operational specifications.');
      return;
    }

    const priceNum = parseFloat(newProduct.price);
    const stockNum = parseInt(newProduct.stock, 10);
    
    if (isNaN(priceNum) || isNaN(stockNum)) {
      alert('Price and Stock counts must be numeric parameters.');
      return;
    }

    const generatedId = `PRD-${Math.floor(100 + Math.random() * 900)}`;

    const addedItem = {
      id: generatedId,
      title: newProduct.title,
      category: newProduct.category,
      price: priceNum,
      stock: stockNum,
      status: stockNum === 0 ? 'Out of Stock' : newProduct.status
    };

    setProducts(prev => [addedItem, ...prev]);
    
    // Reset Form
    setNewProduct({
      title: '',
      category: 'Wearables',
      price: '',
      stock: '',
      status: 'Active'
    });
    setShowModal(false);
  };

  return (
    <div className="d-flex flex-column gap-4 position-relative">

      {/* Dynamic Background Glowing nodes */}
      <div className="glow-bg glow-primary" style={{ top: '10%', left: '5%', opacity: '0.08' }}></div>
      <div className="glow-bg glow-accent" style={{ bottom: '20%', right: '5%', opacity: '0.08' }}></div>

      {/* Catalog Search & Actions Header Card */}
      <div className="card glass-panel border-0 p-4">
        <div className="row justify-content-between align-items-center g-3">
          
          <div className="col-md-4">
            <div className="position-relative">
              <input
                type="text"
                placeholder="Filter by hash ID or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control bg-dark border-secondary border-opacity-25 text-white px-4 py-2.5 rounded-pill"
                style={{ 
                  boxShadow: 'none', 
                  paddingRight: '40px',
                  background: 'rgba(0,0,0,0.02) !important',
                  border: '1px solid rgba(0,0,0,0.08)'
                }}
              />
              <span className="position-absolute end-0 top-50 translate-middle-y me-3 text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
          </div>

          <div className="col-md-5">
            <div className="d-flex flex-wrap gap-2 justify-content-md-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn px-3 py-1.5 rounded-pill fs-7 transition-smooth ${selectedCategory === cat ? 'btn-premium' : 'bg-dark text-muted border border-secondary border-opacity-10'}`}
                  style={{
                    border: selectedCategory === cat ? 'none' : '1px solid rgba(0,0,0,0.05)',
                    padding: '6px 16px'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="col-md-3 text-md-end">
            <button onClick={() => setShowModal(true)} className="btn-premium d-inline-flex gap-2 align-items-center fs-7 py-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Provision Node</span>
            </button>
          </div>

        </div>
      </div>

      {/* Product List Table */}
      <div className="card glass-panel border-0 p-4">
        
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3 border-secondary border-opacity-10">
          <div>
            <h3 className="h5 fw-bold text-dark mb-1">Active Ledger Specifications</h3>
            <p className="text-muted small mb-0">Total of {filteredProducts.length} physical catalog nodes mapped</p>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0" style={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
            <thead>
              <tr className="text-muted small border-0" style={{ fontSize: '0.75rem' }}>
                <th className="border-0 bg-transparent ps-3">NODE ID</th>
                <th className="border-0 bg-transparent">MOLECULAR TITLE</th>
                <th className="border-0 bg-transparent">CATEGORY</th>
                <th className="border-0 bg-transparent">ACQUISITION PRICE</th>
                <th className="border-0 bg-transparent">QUANTUM STOCK</th>
                <th className="border-0 bg-transparent">LEDGER STATE</th>
                <th className="border-0 bg-transparent pe-3 text-end">OPERATIONS</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((prd) => (
                  <tr key={prd.id} className="glass-panel" 
                      style={{ 
                        background: 'rgba(255,255,255,0.4) !important',
                        border: '1px solid rgba(0,0,0,0.03) !important',
                        boxShadow: 'none !important'
                      }}>
                    <td className="ps-3 fw-bold text-primary small bg-transparent">{prd.id}</td>
                    <td className="text-dark fw-semibold small bg-transparent">{prd.title}</td>
                    <td className="bg-transparent">
                      <span className="badge rounded-pill bg-dark text-muted border border-secondary border-opacity-10 px-2.5 py-1 small" style={{ fontSize: '0.65rem' }}>
                        {prd.category}
                      </span>
                    </td>
                    <td className="fw-bold text-dark small bg-transparent">${prd.price.toFixed(2)}</td>
                    <td className="text-dark small bg-transparent fw-medium">
                      <div className="d-flex align-items-center gap-2">
                        <button onClick={() => adjustStock(prd.id, -1)} className="btn btn-sm btn-dark p-0 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '22px', height: '22px', border: '1px solid rgba(0,0,0,0.08)' }}>-</button>
                        <span>{prd.stock} units</span>
                        <button onClick={() => adjustStock(prd.id, 1)} className="btn btn-sm btn-dark p-0 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '22px', height: '22px', border: '1px solid rgba(0,0,0,0.08)' }}>+</button>
                      </div>
                    </td>
                    <td className="bg-transparent">
                      <span className="badge rounded-pill px-2.5 py-1"
                            style={{
                              fontSize: '0.65rem',
                              color: prd.status === 'Active' ? '#10b981 !important' : prd.status === 'Restocking' ? '#f59e0b !important' : '#ef4444 !important',
                              background: prd.status === 'Active' ? 'rgba(16, 185, 129, 0.08)' : prd.status === 'Restocking' ? 'rgba(245, 158, 11, 0.08)' : 'rgba(239, 68, 68, 0.08)'
                            }}>
                        {prd.status}
                      </span>
                    </td>
                    <td className="pe-3 text-end bg-transparent">
                      <button 
                        onClick={() => deleteProduct(prd.id)} 
                        className="btn btn-sm btn-outline-danger p-2 rounded-circle"
                        style={{ width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                        title="Dispose Node"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-5 text-muted small bg-transparent">
                    No active product nodes match your current search/filter coordinates.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>

      {/* STATE CONTROLLED MODAL OVERLAY */}
      {showModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
             style={{ 
               backgroundColor: 'rgba(9, 10, 15, 0.4)', 
               backdropFilter: 'blur(8px)',
               zIndex: 2000
             }}>
          
          <div className="card glass-panel p-5 border-0 rounded-5" 
               style={{ 
                 width: '500px', 
                 maxWidth: '90%', 
                 background: '#ffffff !important',
                 boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15) !important'
               }}>
            
            <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3 border-secondary border-opacity-10">
              <h3 className="h5 fw-bold text-dark mb-0">Provision New Catalog Node</h3>
              <button onClick={() => setShowModal(false)} className="btn-close border-0 bg-transparent fs-5 text-muted p-0" style={{ outline: 'none' }}>×</button>
            </div>

            <form onSubmit={handleAddProduct} className="d-flex flex-column gap-3">
              
              <div className="form-group">
                <label className="text-muted small mb-2 fw-semibold">Molecular Item Title</label>
                <input
                  type="text"
                  required
                  value={newProduct.title}
                  onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                  placeholder="e.g. AeroGraphene Cape"
                  className="form-control px-4 py-2.5 rounded-3"
                />
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-muted small mb-2 fw-semibold">Classification Vector</label>
                    <select
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                      className="form-select bg-dark border-secondary border-opacity-25 text-white px-4 py-2.5 rounded-3"
                      style={{ 
                        border: '1px solid rgba(0,0,0,0.08)',
                        background: 'rgba(0,0,0,0.03) !important',
                        color: 'var(--text-primary) !important'
                      }}
                    >
                      <option value="Wearables">Wearables</option>
                      <option value="Neuro-Tech">Neuro-Tech</option>
                      <option value="Future Home">Future Home</option>
                    </select>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-muted small mb-2 fw-semibold">Acquisition Cost ($)</label>
                    <input
                      type="number"
                      step="0.01"
                      min="0.01"
                      required
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      placeholder="e.g. 199.99"
                      className="form-control px-4 py-2.5 rounded-3"
                    />
                  </div>
                </div>
              </div>

              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-muted small mb-2 fw-semibold">Quantum Quantity</label>
                    <input
                      type="number"
                      min="0"
                      required
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                      placeholder="e.g. 50"
                      className="form-control px-4 py-2.5 rounded-3"
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="text-muted small mb-2 fw-semibold">Initial Ledger State</label>
                    <select
                      value={newProduct.status}
                      onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
                      className="form-select bg-dark border-secondary border-opacity-25 text-white px-4 py-2.5 rounded-3"
                      style={{ 
                        border: '1px solid rgba(0,0,0,0.08)',
                        background: 'rgba(0,0,0,0.03) !important',
                        color: 'var(--text-primary) !important'
                      }}
                    >
                      <option value="Active">Active</option>
                      <option value="Restocking">Restocking</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3 justify-content-end mt-4 pt-2 border-top border-secondary border-opacity-10">
                <button type="button" onClick={() => setShowModal(false)} className="btn btn-premium-outline px-4 py-2 rounded-3 fs-7">Cancel</button>
                <button type="submit" className="btn-premium px-4 py-2 rounded-3 fs-7">Verify Specification</button>
              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
};

export default ProductPage;
