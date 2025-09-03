import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useProducts } from '../../hooks/useProducts';
import './Dashboard.css';

const UserDashboard = () => {
  const { currentUser, logout } = useAuth();
  const { products } = useProducts();
  const [favorites, setFavorites] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Load user favorites and order history from localStorage
    const savedFavorites = JSON.parse(localStorage.getItem(`favorites_${currentUser?.uid}`) || '[]');
    const savedOrders = JSON.parse(localStorage.getItem(`orders_${currentUser?.uid}`) || '[]');
    setFavorites(savedFavorites);
    setOrderHistory(savedOrders);
  }, [currentUser]);

  const toggleFavorite = (productId) => {
    const newFavorites = favorites.includes(productId)
      ? favorites.filter(id => id !== productId)
      : [...favorites, productId];
    
    setFavorites(newFavorites);
    localStorage.setItem(`favorites_${currentUser.uid}`, JSON.stringify(newFavorites));
  };

  const handleWhatsAppOrder = (product) => {
    const message = `Halo, saya ${currentUser.displayName} tertarik dengan produk ${product.name}. Bisa tolong berikan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6289506147763?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Add to order history
    const newOrder = {
      id: Date.now(),
      productId: product.id,
      productName: product.name,
      date: new Date().toISOString(),
      status: 'Inquiry Sent'
    };
    
    const newOrderHistory = [newOrder, ...orderHistory];
    setOrderHistory(newOrderHistory);
    localStorage.setItem(`orders_${currentUser.uid}`, JSON.stringify(newOrderHistory));
  };

  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <h2>Dashboard</h2>
            <p>Selamat datang, {currentUser?.displayName}!</p>
          </div>
          
          <nav className="sidebar-nav">
            <a href="#overview" className="nav-item active">
              <span className="nav-icon">📊</span>
              Overview
            </a>
            <a href="#favorites" className="nav-item">
              <span className="nav-icon">❤️</span>
              Favorit Saya
            </a>
            <a href="#orders" className="nav-item">
              <span className="nav-icon">📦</span>
              Riwayat Pesanan
            </a>
            <a href="#profile" className="nav-item">
              <span className="nav-icon">👤</span>
              Profil
            </a>
          </nav>

          <button onClick={logout} className="logout-btn">
            Logout
          </button>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          {/* Overview Section */}
          <section id="overview" className="dashboard-section">
            <h2>Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">❤️</div>
                <div className="stat-info">
                  <h3>{favorites.length}</h3>
                  <p>Produk Favorit</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📦</div>
                <div className="stat-info">
                  <h3>{orderHistory.length}</h3>
                  <p>Total Inquiry</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🛍️</div>
                <div className="stat-info">
                  <h3>{products.length}</h3>
                  <p>Produk Tersedia</p>
                </div>
              </div>
            </div>
          </section>

          {/* Favorites Section */}
          <section id="favorites" className="dashboard-section">
            <h2>Produk Favorit</h2>
            {favoriteProducts.length === 0 ? (
              <div className="empty-state">
                <p>Belum ada produk favorit</p>
                <a href="/products" className="cta-link">Jelajahi Produk</a>
              </div>
            ) : (
              <div className="products-grid">
                {favoriteProducts.map((product, index) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <img 
                        src={product.image || `https://images.pexels.com/photos/${1598505 + index}/pexels-photo-${1598505 + index}.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop`} 
                        alt={product.name} 
                      />
                      <button 
                        className="favorite-btn active"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        ❤️
                      </button>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="product-price">{product.price}</p>
                      <button 
                        className="order-btn"
                        onClick={() => handleWhatsAppOrder(product)}
                      >
                        Pesan Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Orders Section */}
          <section id="orders" className="dashboard-section">
            <h2>Riwayat Inquiry</h2>
            {orderHistory.length === 0 ? (
              <div className="empty-state">
                <p>Belum ada riwayat inquiry</p>
                <a href="/products" className="cta-link">Mulai Belanja</a>
              </div>
            ) : (
              <div className="orders-list">
                {orderHistory.map((order) => (
                  <div key={order.id} className="order-card">
                    <div className="order-info">
                      <h3>{order.productName}</h3>
                      <p>Tanggal: {new Date(order.date).toLocaleDateString('id-ID')}</p>
                      <span className="order-status">{order.status}</span>
                    </div>
                    <button 
                      className="reorder-btn"
                      onClick={() => {
                        const product = products.find(p => p.id === order.productId);
                        if (product) handleWhatsAppOrder(product);
                      }}
                    >
                      Hubungi Lagi
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Profile Section */}
          <section id="profile" className="dashboard-section">
            <h2>Profil Saya</h2>
            <div className="profile-card">
              <div className="profile-avatar">
                <img 
                  src={`https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop`} 
                  alt="Profile" 
                />
              </div>
              <div className="profile-info">
                <h3>{currentUser?.displayName}</h3>
                <p>{currentUser?.email}</p>
                <span>Member sejak {new Date(currentUser?.metadata?.creationTime).toLocaleDateString('id-ID')}</span>
              </div>
              <div className="profile-actions">
                <button className="edit-profile-btn">Edit Profil</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;