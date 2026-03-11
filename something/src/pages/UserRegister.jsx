import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './AuthPages.css';

const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      await axios.post('http://localhost:8080/register', {
        username: formData.name,
        email: formData.email,
        password: formData.password
      });
      
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data || 'Registration failed. Username may already exist.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <Link to="/" className="auth-logo">
          <img src="/logo.svg" alt="SmartCart" style={{ height: '50px' }} />
        </Link>
        
        <div className="auth-card">
          <h1 className="auth-title">Create account</h1>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group-auth">
              <label className="auth-label">Your name</label>
              <input
                type="text"
                className="auth-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="First and last name"
              />
            </div>
            
            <div className="form-group-auth">
              <label className="auth-label">Email</label>
              <input
                type="email"
                className="auth-input"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
              />
            </div>
            
            <div className="form-group-auth">
              <label className="auth-label">Password</label>
              <input
                type="password"
                className="auth-input"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="At least 6 characters"
              />
              <small className="form-text">
                Passwords must be at least 6 characters.
              </small>
            </div>
            
            <div className="form-group-auth">
              <label className="auth-label">Re-enter password</label>
              <input
                type="password"
                className="auth-input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm password"
              />
            </div>
            
            <button type="submit" className="btn-auth-primary">
              Create your SMARTCART account
            </button>
          </form>
          
          <div className="auth-footer-text">
            <p>
              By creating an account, you agree to SMARTCART's{' '}
              <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice</a>.
            </p>
          </div>
          
          <div className="auth-divider">
            <span>Already have an account?</span>
          </div>
          
          <Link to="/login" className="btn-auth-secondary">
            Sign in
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

export default UserRegister;
