import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import { categoryIcons, generateProductImage } from '../assets/productImages';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    fetchProducts();
    // Auto-rotate banner every 5 seconds
    const interval = setInterval(() => {
      setCurrentBanner(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Set demo products if API fails
      setProducts([
        { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 2999, rating: 4.5, image: generateProductImage('Electronics', 'Headphones', 0) },
        { id: 2, name: 'Smart Watch', category: 'Electronics', price: 4999, rating: 4.8, image: generateProductImage('Electronics', 'Watch', 1) },
        { id: 3, name: 'Running Shoes', category: 'Fashion', price: 1999, rating: 4.3, image: generateProductImage('Fashion', 'Shoes', 0) },
        { id: 4, name: 'Office Chair', category: 'Home', price: 5999, rating: 4.6, image: generateProductImage('Home', 'Chair', 0) },
        { id: 5, name: 'Laptop Backpack', category: 'Fashion', price: 1499, rating: 4.4, image: generateProductImage('Fashion', 'Backpack', 1) },
        { id: 6, name: 'Coffee Maker', category: 'Home', price: 2499, rating: 4.5, image: generateProductImage('Home', 'Appliance', 1) },
        { id: 7, name: 'Thriller Novel', category: 'Books', price: 299, rating: 4.7, image: generateProductImage('Books', 'Novel', 0) },
        { id: 8, name: 'Yoga Mat', category: 'Sports', price: 799, rating: 4.2, image: generateProductImage('Sports', 'Mat', 0) },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const banners = [
    {
      title: "Ultimate Brand Sale",
      subtitle: "Under ₹999",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "🎉"
    },
    {
      title: "Flash Deals",
      subtitle: "Up to 70% Off",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "⚡"
    },
    {
      title: "New Arrivals",
      subtitle: "Shop The Latest",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: "✨"
    }
  ];

  const getProductsByCategory = (category) => {
    return products.filter(p => p.category === category).slice(0, 4);
  };

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <>
      <Navbar />
      
      {/* Hero Banner Carousel */}
      <div className="hero-banner" style={{ background: banners[currentBanner].gradient }}>
        <div className="banner-content">
          <div className="banner-icon">{banners[currentBanner].icon}</div>
          <h1 className="banner-title">{banners[currentBanner].title}</h1>
          <p className="banner-subtitle">{banners[currentBanner].subtitle}</p>
          <Link to="/products" className="btn btn-light btn-lg">
            Shop Now <i className="fas fa-arrow-right ms-2"></i>
          </Link>
        </div>
        <div className="banner-indicators">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentBanner ? 'active' : ''}`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>
        <button className="banner-nav prev" onClick={() => setCurrentBanner(prev => (prev - 1 + 3) % 3)}>‹</button>
        <button className="banner-nav next" onClick={() => setCurrentBanner(prev => (prev + 1) % 3)}>›</button>
      </div>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="home-container">
          {/* Card Grid Sections */}
          <div className="card-grid">
            {/* Recently Viewed / Pick up where you left off */}
            <div className="section-card">
              <h3 className="section-title">Continue Shopping</h3>
              <div className="mini-products">
                {products.slice(0, 4).map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} className="mini-product">
                    <img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} />
                    <p className="mini-product-name">{product.name}</p>
                  </Link>
                ))}
              </div>
              <Link to="/products" className="see-more">See more</Link>
            </div>

            {/* Categories / Keep shopping for */}
            <div className="section-card">
              <h3 className="section-title">Shop by Category</h3>
              <div className="mini-products">
                {categories.slice(0, 4).map((category, idx) => (
                  <Link to={`/products?category=${category}`} key={idx} className="mini-product">
                    <div className="category-icon-wrapper">
                      <span className="category-icon-large">{categoryIcons[category] || '📦'}</span>
                    </div>
                    <p className="mini-product-name">{category}</p>
                  </Link>
                ))}
              </div>
              <Link to="/products" className="see-more">Browse all categories</Link>
            </div>

            {/* Deals Section */}
            <div className="section-card">
              <h3 className="section-title">Today's Deals</h3>
              <div className="mini-products">
                {products.slice(4, 8).map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} className="mini-product">
                    <img src={product.image || 'https://via.placeholder.com/150'} alt={product.name} />
                    <p className="mini-product-name">{product.name}</p>
                    <p className="mini-product-price">${product.price}</p>
                  </Link>
                ))}
              </div>
              <Link to="/products" className="see-more">See more deals</Link>
            </div>

            {/* Promotional Card */}
            <div className="section-card promo-card">
              <h3 className="section-title">Get wholesale prices</h3>
              <p className="promo-text">Save more on bulk orders</p>
              <div className="promo-image">
                <img src="https://via.placeholder.com/300x200?text=Business+Savings" alt="Business" />
              </div>
              <button className="btn btn-primary mt-3">Register now</button>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="featured-section">
            <h2 className="section-heading">Featured Products</h2>
            <div className="products-grid">
              {products.slice(0, 8).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-4">
              <Link to="/products" className="btn btn-outline-primary btn-lg">View All Products</Link>
            </div>
          </div>

          {/* Category-wise Products */}
          {categories.slice(0, 2).map((category, idx) => {
            const categoryProducts = getProductsByCategory(category);
            if (categoryProducts.length === 0) return null;
            
            return (
              <div key={idx} className="category-section">
                <h2 className="section-heading">{category}</h2>
                <div className="products-horizontal">
                  {categoryProducts.map(product => (
                    <div key={product.id} className="product-card-horizontal">
                      <Link to={`/product/${product.id}`}>
                        <img src={product.image || 'https://via.placeholder.com/200'} alt={product.name} />
                        <h5>{product.name}</h5>
                        <p className="price">${product.price}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default HomePage;
