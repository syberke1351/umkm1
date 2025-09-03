import React, { useState, useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import './Products.css';

const Products = () => {
  const { products, loading } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    let filtered = products;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const price = parseFloat(product.price?.replace(/[^\d]/g, '') || 0);
      switch (priceRange) {
        case 'under-500':
          filtered = filtered.filter(product => {
            const productPrice = parseFloat(product.price?.replace(/[^\d]/g, '') || 0);
            return productPrice < 500000;
          });
          break;
        case '500-1000':
          filtered = filtered.filter(product => {
            const productPrice = parseFloat(product.price?.replace(/[^\d]/g, '') || 0);
            return productPrice >= 500000 && productPrice <= 1000000;
          });
          break;
        case 'over-1000':
          filtered = filtered.filter(product => {
            const productPrice = parseFloat(product.price?.replace(/[^\d]/g, '') || 0);
            return productPrice > 1000000;
          });
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, priceRange]);

  const handleWhatsAppOrder = (product) => {
    const message = `Halo, saya tertarik dengan produk ${product.name || 'Sepatu Stride'}. Bisa tolong berikan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6289506147763?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const categories = ['all', 'running', 'casual', 'formal', 'sport'];
  const priceRanges = [
    { value: 'all', label: 'Semua Harga' },
    { value: 'under-500', label: 'Di bawah Rp 500rb' },
    { value: '500-1000', label: 'Rp 500rb - 1jt' },
    { value: 'over-1000', label: 'Di atas Rp 1jt' }
  ];

  if (loading) {
    return (
      <div className="products-loading">
        <div className="loading-spinner"></div>
        <p>Memuat produk...</p>
      </div>
    );
  }

  return (
    <div className="products">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero-container">
          <h1>Koleksi Stride</h1>
          <p>Temukan sepatu impian Anda dari koleksi terlengkap kami</p>
        </div>
      </section>

      {/* Filters */}
      <section className="products-filters">
        <div className="filters-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>🔍</button>
          </div>
          
          <div className="filter-group">
            <label>Kategori:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">Semua Kategori</option>
              {categories.slice(1).map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Harga:</label>
            <select 
              value={priceRange} 
              onChange={(e) => setPriceRange(e.target.value)}
            >
              {priceRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section">
        <div className="products-container">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <h3>Tidak ada produk ditemukan</h3>
              <p>Coba ubah filter pencarian Anda</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((product, index) => (
                <div key={product.id || index} className="product-card">
                  <div className="product-image">
                    <img 
                      src={product.image || `https://images.pexels.com/photos/${1598505 + index}/pexels-photo-${1598505 + index}.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`} 
                      alt={product.name || `Product ${index + 1}`} 
                    />
                    <div className="product-overlay">
                      <button 
                        className="quick-view-btn"
                        onClick={() => handleWhatsAppOrder(product)}
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name || `Stride Product ${index + 1}`}</h3>
                    <p className="product-category">{product.category || 'Casual'}</p>
                    <p className="product-description">
                      {product.description || 'Sepatu berkualitas tinggi dengan desain modern dan nyaman untuk aktivitas sehari-hari.'}
                    </p>
                    <div className="product-colors">
                      {(product.colors || ['#2a5ea9', '#499bcf', '#d5cecb']).map((color, colorIndex) => (
                        <div 
                          key={colorIndex} 
                          className="color-option" 
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                    <div className="product-footer">
                      <span className="product-price">{product.price || 'Rp 500.000'}</span>
                      <button 
                        className="order-btn"
                        onClick={() => handleWhatsAppOrder(product)}
                      >
                        Pesan via WhatsApp
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="products-cta">
        <div className="cta-container">
          <h2>Tidak Menemukan yang Anda Cari?</h2>
          <p>Hubungi kami untuk konsultasi produk yang sesuai dengan kebutuhan Anda</p>
          <button 
            className="cta-button"
            onClick={() => handleWhatsAppOrder({ name: 'Konsultasi Produk' })}
          >
            Konsultasi Sekarang
          </button>
        </div>
      </section>
    </div>
  );
};

export default Products;