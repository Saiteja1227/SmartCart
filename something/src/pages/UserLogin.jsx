import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import './AuthPages.css';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send email in both email and username fields for backend compatibility
      const response = await axios.post('http://localhost:8080/login', {
        username: formData.email,  // Try as username first
        email: formData.email,     // Also send as email
        password: formData.password
      });
      
      // Backend returns "Login successful" as a simple string
      // Store email as user identifier
      login({ email: formData.email }, null, false);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      setError(err.response?.data || 'Invalid email or password');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <Link to="/" className="auth-logo">
          <img src="/logo.svg" alt="SmartCart" style={{ height: '50px' }} />
        </Link>
        
        <div className="auth-card">
          <h1 className="auth-title">Sign in</h1>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group-auth">
              <label className="auth-label">Email</label>
              <input
                type="email"
                className="auth-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group-auth">
              <div className="password-header">
                <label className="auth-label">Password</label>
                <Link to="/forgot-password" className="forgot-link">
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                className="auth-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="btn-auth-primary">Sign in</button>
          </form>
          
          <div className="auth-divider">
            <span>New to SMARTCART?</span>
          </div>
          
          <Link to="/register" className="btn-auth-secondary">
            Create your SMARTCART account
          </Link>
        </div>
        
        <div className="auth-footer">
          <div className="footer-links">
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Help</a>
          </div>
          <p className="copyright">© 2026 SMARTCART. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
