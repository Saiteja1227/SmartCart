import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../pages/AccountPage.css';

const ProfileSettings = () => {
  return (
    <>
      <Navbar />
      <div className="account-page">
        <div className="account-container">
          <div className="breadcrumb">
            <Link to="/account">Your Account</Link> › Profile Settings
          </div>
          <h1 className="account-heading">Profile Settings</h1>
          
          <div className="content-card">
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="your.email@example.com" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="+91 1234567890" />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="date" className="form-control" />
              </div>
              <button className="btn btn-primary">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
