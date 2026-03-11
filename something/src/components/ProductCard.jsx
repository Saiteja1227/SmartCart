import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { generateProductImage } from '../assets/productImages';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const handleAddToCart = () => {
    if (user) {
      addToCart(product);
      alert('✅ Product added to cart!');
    } else {
      alert('⚠️ Please login to add items to cart');
    }
  };

  // Generate product image based on category
  const productImage = product.image || generateProductImage(product.category || 'Electronics', product.name, product.id);

  // Calculate discount badge if there's a comparison price
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : null;

  return (
    <div className="card h-100 shadow-sm product-card">
      <div className="position-relative">
        <img
          src={productImage}
          className="card-img-top"
          alt={product.name}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        {discount && (
          <span className="position-absolute top-0 end-0 badge bg-danger m-2">
            {discount}% OFF
          </span>
        )}
        {product.stock < 10 && product.stock > 0 && (
          <span className="position-absolute top-0 start-0 badge bg-warning text-dark m-2">
            Only {product.stock} left!
          </span>
        )}
      </div>
      <div className="card-body d-flex flex-column">
        <div className="mb-2">
          <span className="badge bg-secondary">{product.category}</span>
          {product.rating && (
            <span className="ms-2 text-warning">
              {'⭐'.repeat(Math.round(product.rating))}
              <small className="text-muted ms-1">({product.rating})</small>
            </span>
          )}
        </div>
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted small">{product.description?.substring(0, 80)}{product.description?.length > 80 ? '...' : ''}</p>
        
        <div className="mt-auto">
          <div className="mb-2">
            <h4 className="text-primary d-inline mb-0">₹{product.price}</h4>
            {product.originalPrice && (
              <span className="text-muted text-decoration-line-through ms-2 small">₹{product.originalPrice}</span>
            )}
          </div>
          <div className="d-flex gap-2">
            <Link to={`/product/${product.id}`} className="btn btn-outline-primary btn-sm flex-grow-1">
              <i className="fas fa-eye me-1"></i> View
            </Link>
            <button onClick={handleAddToCart} className="btn btn-primary btn-sm flex-grow-1">
              <i className="fas fa-shopping-cart me-1"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
