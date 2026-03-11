import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../pages/AccountPage.css';

const AddressesPage = () => {
  const [addresses] = useState([
    {
      id: 1,
      name: 'Home',
      fullName: 'John Doe',
      addressLine: '123, MG Road, Chandarlagan',
      city: 'Venkatareddy',
      pincode: '521182',
      phone: '+91 9876543210',
      isDefault: true
    }
  ]);

  return (
    <>
      <Navbar />
      <div className="account-page">
        <div className="account-container">
          <div className="breadcrumb">
            <Link to="/account">Your Account</Link> › Your Addresses
          </div>
          <h1 className="account-heading">Your Addresses</h1>
          
          <div className="addresses-grid">
            <div className="add-address-card">
              <div className="add-icon">+</div>
              <h3>Add Address</h3>
              <button className="btn btn-outline-primary">Add New Address</button>
            </div>
            
            {addresses.map(address => (
              <div key={address.id} className="address-card">
                {address.isDefault && <span className="default-badge">Default</span>}
                <h4>{address.name}</h4>
                <p><strong>{address.fullName}</strong></p>
                <p>{address.addressLine}</p>
                <p>{address.city} - {address.pincode}</p>
                <p>Phone: {address.phone}</p>
                <div className="address-actions">
                  <button className="btn-link">Edit</button>
                  <button className="btn-link">Remove</button>
                  {!address.isDefault && <button className="btn-link">Set as Default</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressesPage;
