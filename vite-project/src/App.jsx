import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

// Secure Dashboard layouts
import DashboardLayout from './components/SibeBar/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import ProductPage from './components/Dashboard/ProductPage';

// Layout container for public facing shop fronts
const PublicLayout = () => {
  return (
    <div className="app-wrapper">
      {/* Dynamic top navigation bar */}
      <Navbar />
      
      {/* Renders storefront active pages */}
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        
        {/* PUBLIC FRONTEND STORE FRONT LAYOUT */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* SECURE HUB OPERATION DASHBOARD LAYOUT */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductPage />} />
        </Route>

      </Routes>
    </Router>
  );
};

export default App;