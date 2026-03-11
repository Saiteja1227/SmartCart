import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../components/AdminSidebar';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    pendingOrders: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [products, orders] = await Promise.all([
        axios.get('http://localhost:8080/api/products'),
        axios.get('http://localhost:8080/api/orders')
      ]);

      const totalRevenue = orders.data.reduce((sum, order) => sum + order.totalAmount, 0);
      const pendingOrders = orders.data.filter(order => order.status === 'Pending').length;

      setStats({
        totalProducts: products.data.length,
        totalOrders: orders.data.length,
        totalRevenue,
        pendingOrders
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div className="d-flex">
      <div style={{ width: '250px' }}>
        <AdminSidebar />
      </div>
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">Admin Dashboard</h2>
        
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="card bg-primary text-white">
              <div className="card-body">
                <h5 className="card-title">Total Products</h5>
                <h2>{stats.totalProducts}</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body">
                <h5 className="card-title">Total Orders</h5>
                <h2>{stats.totalOrders}</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-info text-white">
              <div className="card-body">
                <h5 className="card-title">Total Revenue</h5>
                <h2>${stats.totalRevenue.toFixed(2)}</h2>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-warning text-white">
              <div className="card-body">
                <h5 className="card-title">Pending Orders</h5>
                <h2>{stats.pendingOrders}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
