import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import { generateAvatar } from '../assets/avatars';
import './AccountPage.css';

const AccountPage = () => {
  const { user } = useContext(AuthContext);

  const accountSections = [
    {
      id: 1,
      icon: '📦',
      title: 'Your Orders',
      description: 'Track, return, or buy things again',
      link: '/my-orders',
      color: '#f0f2f2'
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Login & security',
      description: 'Edit login, name, and mobile number',
      link: '/account/security',
      color: '#f0f2f2'
    },
    {
      id: 3,
      icon: '🎁',
      title: 'Your Wishlist',
      description: 'View and manage your wishlist',
      link: '/wishlist',
      color: '#f0f2f2'
    },
    {
      id: 4,
      icon: '📍',
      title: 'Your Addresses',
      description: 'Edit addresses for orders and gifts',
      link: '/account/addresses',
      color: '#f0f2f2'
    },
    {
      id: 5,
      icon: '💳',
      title: 'Payment options',
      description: 'Edit or add payment methods',
      link: '/account/payment',
      color: '#f0f2f2'
    },
    {
      id: 6,
      icon: '👤',
      title: 'Profile Settings',
      description: 'Manage your personal information',
      link: '/account/profile',
      color: '#f0f2f2'
    },
    {
      id: 7,
      icon: '🎫',
      title: 'Gift Cards',
      description: 'View balance or redeem a card',
      link: '/account/gift-cards',
      color: '#f0f2f2'
    },
    {
      id: 8,
      icon: '🎧',
      title: 'Contact Us',
      description: 'Contact our customer service via phone or chat',
      link: '/contact',
      color: '#f0f2f2'
    }
  ];

  const additionalSections = [
    {
      title: 'Ordering and shopping preferences',
      links: [
        { text: 'Leave packaging feedback', url: '#' },
        { text: 'Lists', url: '#' },
        { text: 'Manage saved IDs', url: '#' },
        { text: 'Profile', url: '/account/profile' }
      ]
    },
    {
      title: 'Email alerts, messages, and ads',
      links: [
        { text: 'Advertising preferences', url: '#' },
        { text: 'Communication preferences', url: '#' },
        { text: 'SMS alert preferences', url: '#' },
        { text: 'Message Centre', url: '#' }
      ]
    },
    {
      title: 'More ways to pay',
      links: [
        { text: 'Default Purchase Settings', url: '#' },
        { text: 'SMARTCART Pay', url: '#' },
        { text: 'Coupons', url: '#' }
      ]
    },
    {
      title: 'Digital content and devices',
      links: [
        { text: 'Apps and more', url: '#' },
        { text: 'Content Library', url: '#' },
        { text: 'Devices', url: '#' },
        { text: 'Digital gifts received', url: '#' }
      ]
    },
    {
      title: 'Other accounts',
      links: [
        { text: 'Account Linking', url: '#' },
        { text: 'Seller account', url: user?.role === 'ADMIN' ? '/admin' : '#' },
        { text: 'SMARTCART Web Services', url: '#' }
      ]
    },
    {
      title: 'Shopping programs and rentals',
      links: [
        { text: 'Manage Your SMARTCART Family', url: '#' },
        { text: 'Subscribe & Save', url: '#' },
        { text: 'Shop the Kids Store by age', url: '#' }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="account-page">
        <div className="account-container">
          {/* User Profile Header */}
          <div className="user-profile-header">
            <div className="user-avatar">
              <img 
                src={generateAvatar(user?.username || user?.email || 'User', 120)} 
                alt="User Avatar" 
                className="avatar-img"
              />
            </div>
            <div className="user-info">
              <h1 className="user-name">Hello, {user?.username || user?.email || 'User'}!</h1>
              <p className="user-email">{user?.email}</p>
            </div>
          </div>

          <h1 className="account-heading">Your Account</h1>

          {/* Main Account Cards Grid */}
          <div className="account-cards-grid">
            {accountSections.map(section => (
              <Link
                key={section.id}
                to={section.link}
                className="account-card"
                style={{ backgroundColor: section.color }}
              >
                <div className="account-card-content">
                  <div className="account-card-icon">{section.icon}</div>
                  <div className="account-card-text">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Settings Sections */}
          <div className="additional-sections">
            {additionalSections.map((section, index) => (
              <div key={index} className="settings-section">
                <h3 className="settings-title">{section.title}</h3>
                <ul className="settings-links">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link to={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
