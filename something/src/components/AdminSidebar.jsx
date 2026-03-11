import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const AdminSidebar = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="bg-dark text-white p-3" style={{ minHeight: '100vh' }}>
      <h4 className="mb-4">🛒 SMARTCART Admin</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/admin/dashboard" className="nav-link text-white">
            📊 Dashboard
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/add-product" className="nav-link text-white">
            ➕ Add Product
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/manage-products" className="nav-link text-white">
            📦 Manage Products
          </Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/admin/orders" className="nav-link text-white">
            📋 View Orders
          </Link>
        </li>
        <li className="nav-item mt-4">
          <button onClick={handleLogout} className="btn btn-outline-light w-100">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
