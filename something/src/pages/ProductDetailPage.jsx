import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleAddToCart = () => {
    if (user) {
      addToCart(product);
      alert('Product added to cart!');
    } else {
      alert('Please login to add items to cart');
      navigate('/login');
    }
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mt-5 text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.image || 'https://via.placeholder.com/500'}
              className="img-fluid rounded"
              alt={product.name}
            />
          </div>
          <div className="col-md-6">
            <h2>{product.name}</h2>
            <p className="text-muted">
              <span className="badge bg-secondary">{product.category}</span>
            </p>
            <h3 className="text-primary">${product.price}</h3>
            <p className="mt-4">{product.description}</p>
            <button className="btn btn-primary btn-lg mt-3" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
