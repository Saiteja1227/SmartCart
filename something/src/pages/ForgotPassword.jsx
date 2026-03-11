import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AuthPages.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Call backend API to send reset email
      const response = await axios.post('http://localhost:8080/forgot-password', { email });
      
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data || 'Failed to send reset email. Please try again.');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <Link to="/" className="auth-logo">
            <span className="logo-icon">🛒</span>
            <span className="logo-text">SMARTCART</span>
          </Link>
          
          <div className="auth-card">
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Check your email</h2>
              <p>
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="text-muted">
                The link will expire in 1 hour. If you don't see the email, check your spam folder.
              </p>
              <Link to="/login" className="btn-auth-primary">
                Back to Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <Link to="/" className="auth-logo">
          <span className="logo-icon">🛒</span>
          <span className="logo-text">SMARTCART</span>
        </Link>
        
        <div className="auth-card">
          <h1 className="auth-title">Password assistance</h1>
          <p className="auth-subtitle">
            Enter the email address associated with your SMARTCART account.
          </p>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group-auth">
              <label className="auth-label">Email</label>
              <input
                type="email"
                className="auth-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@email.com"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-auth-primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Continue'}
            </button>
          </form>
          
          <div className="auth-footer-text">
            <p>
              Remember your password? <Link to="/login">Sign in</Link>
            </p>
          </div>
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

export default ForgotPassword;
