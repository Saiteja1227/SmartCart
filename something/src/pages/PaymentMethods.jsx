import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../pages/AccountPage.css';

const PaymentMethods = () => {
  return (
    <>
      <Navbar />
      <div className="account-page">
        <div className="account-container">
          <div className="breadcrumb">
            <Link to="/account">Your Account</Link> › Payment Options
          </div>
          <h1 className="account-heading">Your Payment Methods</h1>
          
          <div className="content-card">
            <div className="payment-section">
              <h3>Saved Payment Methods</h3>
              <p className="text-muted">You haven't added any payment methods yet.</p>
              
              <div className="payment-options">
                <div className="payment-option-card">
                  <div className="payment-icon">💳</div>
                  <h4>Credit or Debit Card</h4>
                  <button className="btn btn-outline-primary">Add Card</button>
                </div>
                
                <div className="payment-option-card">
                  <div className="payment-icon">🏦</div>
                  <h4>Net Banking</h4>
                  <button className="btn btn-outline-primary">Link Bank</button>
                </div>
                
                <div className="payment-option-card">
                  <div className="payment-icon">📱</div>
                  <h4>UPI</h4>
                  <button className="btn btn-outline-primary">Add UPI</button>
                </div>
                
                <div className="payment-option-card">
                  <div className="payment-icon">💰</div>
                  <h4>Wallets</h4>
                  <button className="btn btn-outline-primary">Link Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
