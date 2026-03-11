import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <nav className="amazon-navbar">
      <div className="navbar-main">
        <div className="navbar-container">
          {/* Logo */}
          <Link className="navbar-logo" to="/">
            <img src="/logo.svg" alt="SmartCart" className="logo-img" />
          </Link>

          {/* Search Bar */}
          <form className="navbar-search" onSubmit={handleSearch}>
            <select className="search-category">
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home</option>
              <option value="books">Books</option>
              <option value="sports">Sports</option>
            </select>
            <input
              type="text"
              className="search-input"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </form>

          {/* Right Side Nav */}
          <div className="navbar-right">
            {user ? (
              <>
                <Link to="/account" className="nav-item">
                  <span className="nav-line1">Hello, {user.username}</span>
                  <span className="nav-line2"><strong>Account & Lists</strong></span>
                </Link>
                <Link to="/my-orders" className="nav-item">
                  <span className="nav-line1">Returns</span>
                  <span className="nav-line2"><strong>& Orders</strong></span>
                </Link>
              </>
            ) : (
              <Link to="/login" className="nav-item">
                <span className="nav-line1">Hello, Sign in</span>
                <span className="nav-line2"><strong>Account & Lists</strong></span>
              </Link>
            )}
            
            <Link to="/cart" className="nav-item cart-item">
              <div className="cart-icon-wrapper">
                <span className="cart-count">{cartItems.length}</span>
                <span className="cart-icon">🛒</span>
              </div>
              <span className="cart-text">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="navbar-secondary">
        <div className="navbar-container">
          <button className="nav-all-btn">☰ All</button>
          <div className="nav-links">
            <Link to="/products">Today's Deals</Link>
            <Link to="/products">Customer Service</Link>
            <Link to="/products">Gift Ideas</Link>
            <Link to="/products">Registry</Link>
            <Link to="/products">Sell</Link>
            {user && (
              <>
                <Link to="/account">Your Account</Link>
                {user?.role === 'ADMIN' && (
                  <Link to="/admin" className="admin-link">Admin Dashboard</Link>
                )}
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
