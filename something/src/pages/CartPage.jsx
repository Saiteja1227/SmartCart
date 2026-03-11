import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <>
        <Navbar />
        <div className="container mt-5 text-center">
          <h3>Please login to view your cart</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">Shopping Cart</h2>
        
        {cartItems.length === 0 ? (
          <div className="text-center mt-5">
            <h4>Your cart is empty</h4>
            <button className="btn btn-primary mt-3" onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col-md-8">
                {cartItems.map(item => (
                  <div key={item.id} className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <img
                          src={item.image || 'https://via.placeholder.com/150'}
                          className="img-fluid rounded-start"
                          alt={item.name}
                          style={{ height: '150px', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text text-muted">{item.description}</p>
                          <p className="card-text">
                            <strong>Price: ${item.price}</strong>
                          </p>
                          <div className="d-flex align-items-center gap-3">
                            <div className="btn-group">
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <button className="btn btn-outline-secondary" disabled>
                                {item.quantity}
                              </button>
                              <button
                                className="btn btn-outline-secondary"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Order Summary</h5>
                    <hr />
                    <div className="d-flex justify-content-between mb-2">
                      <span>Items:</span>
                      <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <strong>Total:</strong>
                      <strong>${getCartTotal().toFixed(2)}</strong>
                    </div>
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => navigate('/checkout')}
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
