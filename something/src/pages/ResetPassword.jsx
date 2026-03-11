import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './AuthPages.css';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [validToken, setValidToken] = useState(true);
  const token = searchParams.get('token');

  useEffect(() => {
    // Verify token validity
    const verifyToken = async () => {
      if (!token) {
        setValidToken(false);
        return;
      }
      
      try {
        await axios.get(`http://localhost:8080/verify-reset-token?token=${token}`);
        setValidToken(true);
      } catch (err) {
        setValidToken(false);
        setError('Invalid or expired reset link');
      }
    };
    
    verifyToken();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      await axios.post('http://localhost:8080/reset-password', {
        token,
        newPassword: formData.password
      });
      
      setSuccess(true);
      setLoading(false);
      
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(err.response?.data || 'Failed to reset password. Please try again.');
      setLoading(false);
    }
  };

  if (!validToken) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <Link to="/" className="auth-logo">
            <span className="logo-icon">🛒</span>
            <span className="logo-text">SMARTCART</span>
          </Link>
          
          <div className="auth-card">
            <div className="error-message">
              <div className="error-icon">✕</div>
              <h2>Invalid Reset Link</h2>
              <p>This password reset link is invalid or has expired.</p>
              <Link to="/forgot-password" className="btn-auth-primary">
                Request New Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
              <h2>Password Reset Successful</h2>
              <p>Your password has been successfully reset.</p>
              <p className="text-muted">Redirecting to login page...</p>
              <Link to="/login" className="btn-auth-primary">
                Sign in Now
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
          <h1 className="auth-title">Create new password</h1>
          <p className="auth-subtitle">
            We'll ask for this password whenever you sign in.
          </p>
          
          {error && <div className="alert alert-danger">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group-auth">
              <label className="auth-label">New password</label>
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
              <label className="auth-label">Confirm new password</label>
              <input
                type="password"
                className="auth-input"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter password"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-auth-primary"
              disabled={loading}
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
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

export default ResetPassword;
