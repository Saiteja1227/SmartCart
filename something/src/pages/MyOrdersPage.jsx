import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/orders/user/${user.id}`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      'Pending': 'warning',
      'Shipped': 'info',
      'Delivered': 'success',
      'Cancelled': 'danger'
    };
    return badges[status] || 'secondary';
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2 className="mb-4">My Orders</h2>
        
        {orders.length === 0 ? (
          <div className="text-center mt-5">
            <h4>No orders yet</h4>
          </div>
        ) : (
          <div className="row">
            {orders.map(order => (
              <div key={order.id} className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <p><strong>Order ID:</strong> #{order.id}</p>
                        <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                      </div>
                      <div className="col-md-3">
                        <p><strong>Total Amount:</strong> ${order.totalAmount?.toFixed(2)}</p>
                      </div>
                      <div className="col-md-3">
                        <p>
                          <strong>Status:</strong>{' '}
                          <span className={`badge bg-${getStatusBadge(order.status)}`}>
                            {order.status}
                          </span>
                        </p>
                      </div>
                      <div className="col-md-3">
                        <button className="btn btn-outline-primary btn-sm">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyOrdersPage;
