import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onClose, onOrder }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#000');
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '40');
  const [quantity, setQuantity] = useState(1);

  const handleOrder = () => {
    const orderDetails = {
      ...product,
      selectedColor,
      selectedSize,
      quantity
    };
    onOrder(orderDetails);
  };

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="product-detail-content">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
            <div className="product-gallery">
              <img src={product.image} alt={product.name} className="active" />
              <img src={product.image} alt={product.name} />
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className="product-detail-info">
            <div className="product-header">
              <span className="product-category">{product.category}</span>
              <h1>{product.name}</h1>
              <div className="product-rating">
                <div className="stars">★★★★★</div>
                <span>(4.8 • 127 reviews)</span>
              </div>
            </div>

            <div className="product-price-section">
              <span className="current-price">{product.price}</span>
              <span className="original-price">Rp 650.000</span>
              <span className="discount">-15%</span>
            </div>

            <div className="product-description">
              <h3>Deskripsi Produk</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-options">
              <div className="color-selection">
                <h4>Pilih Warna:</h4>
                <div className="color-options">
                  {product.colors?.map((color, index) => (
                    <button
                      key={index}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              <div className="size-selection">
                <h4>Pilih Ukuran:</h4>
                <div className="size-options">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="quantity-selection">
                <h4>Jumlah:</h4>
                <div className="quantity-controls">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= (product.stock || 10)}
                  >
                    +
                  </button>
                </div>
                <span className="stock-info">Stok tersedia: {product.stock || 10}</span>
              </div>
            </div>

            <div className="product-actions">
              <button className="order-btn-primary" onClick={handleOrder}>
                <span>💬</span>
                Pesan via WhatsApp
              </button>
              <button className="wishlist-btn">
                <span>❤️</span>
                Tambah ke Wishlist
              </button>
            </div>

            <div className="product-features">
              <div className="feature-item">
                <span className="feature-icon">🚚</span>
                <div>
                  <strong>Gratis Ongkir</strong>
                  <p>Untuk pembelian di atas Rp 500.000</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔄</span>
                <div>
                  <strong>Tukar Ukuran</strong>
                  <p>7 hari garansi tukar ukuran</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <div>
                  <strong>Kualitas Terjamin</strong>
                  <p>Garansi 6 bulan untuk cacat produksi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;