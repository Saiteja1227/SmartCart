import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../pages/AccountPage.css';

const SecuritySettings = () => {
  return (
    <>
      <Navbar />
      <div className="account-page">
        <div className="account-container">
          <div className="breadcrumb">
            <Link to="/account">Your Account</Link> › Login & Security
          </div>
          <h1 className="account-heading">Login & Security</h1>
          
          <div className="content-card">
            <div className="security-section">
              <div className="security-item">
                <div className="security-info">
                  <h4>Name</h4>
                  <p>John Doe</p>
                </div>
                <button className="btn btn-outline-primary btn-sm">Edit</button>
              </div>
              
              <div className="security-item">
                <div className="security-info">
                  <h4>Email</h4>
                  <p>john.doe@example.com</p>
                </div>
                <button className="btn btn-outline-primary btn-sm">Edit</button>
              </div>
              
              <div className="security-item">
                <div className="security-info">
                  <h4>Mobile Number</h4>
                  <p>+91 9876543210</p>
                </div>
                <button className="btn btn-outline-primary btn-sm">Edit</button>
              </div>
              
              <div className="security-item">
                <div className="security-info">
                  <h4>Password</h4>
                  <p>••••••••</p>
                </div>
                <button className="btn btn-outline-primary btn-sm">Change</button>
              </div>
              
              <div className="security-item">
                <div className="security-info">
                  <h4>Two-Step Verification</h4>
                  <p className="text-muted">Not enabled</p>
                </div>
                <button className="btn btn-outline-primary btn-sm">Turn On</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecuritySettings;
