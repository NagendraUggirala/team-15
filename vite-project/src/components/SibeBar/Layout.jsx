import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = () => {

  return (
    <div className="dashboard-layout" style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Panel Content Wrapper */}
      <div className="main-content-panel d-flex flex-column" 
           style={{ 
             marginLeft: '260px', 
             width: 'calc(100% - 260px)', 
             minHeight: '100vh',
             transition: 'var(--transition-smooth)'
           }}>
        
        {/* Dynamic Header */}
        <Topbar />

        {/* Dynamic Nested Active Subroute Content */}
        <main className="p-4 flex-grow-1" style={{ overflowY: 'auto' }}>
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default Layout;
