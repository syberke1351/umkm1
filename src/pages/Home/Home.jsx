import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import './Home.css';

const Home = () => {
  const { products } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Get first 6 products for featured section
    setFeaturedProducts(products.slice(0, 6));
  }, [products]);

  const brandLogos = [
    "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=115&h=77&fit=crop",
    "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
    "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=152&h=115&fit=crop",
    "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=146&h=40&fit=crop",
    "https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=125&h=102&fit=crop",
    "https://images.pexels.com/photos/1598509/pexels-photo-1598509.jpeg?auto=compress&cs=tinysrgb&w=126&h=73&fit=crop",
    "https://images.pexels.com/photos/1464623/pexels-photo-1464623.jpeg?auto=compress&cs=tinysrgb&w=136&h=100&fit=crop",
    "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=125&h=41&fit=crop"
  ];

  const testimonials = [
    {
      name: "Sundar Pichai",
      position: "CEO Google",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=51&h=51&fit=crop",
      review: "STRIDE terasa modern, nyaman, dan dibuat dengan visi. Ini bukan sekadar sepatu, melainkan sebuah langkah menuju inovasi global."
    },
    {
      name: "Alexey Miller",
      position: "CEO Gazprom",
      avatar: "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=51&h=51&fit=crop",
      review: "Sepatu STRIDE mengesankan dengan kualitas dan keandalannya. Seperti dalam energi, di sini penting kekuatan dan perspektif jangka panjang."
    },
    {
      name: "Oliver Blume",
      position: "CEO Volkswagen Group",
      avatar: "https://images.pexels.com/photos/2182968/pexels-photo-2182968.jpeg?auto=compress&cs=tinysrgb&w=51&h=51&fit=crop",
      review: "STRIDE — это сочетание технологии и стиля. Как в цифровом мире, так и в моде, инновации определяют будущее."
    }
  ];

  const advantages = [
    {
      number: "1",
      title: "Top Notch Quality",
      description: "At Stride we take pride in offering the finest footwear crafted with precision and dedication. Step into unmatched comfort, durability, and style."
    },
    {
      number: "2",
      title: "Innovative Design",
      description: "Our design team constantly pushes boundaries to create shoes that are not just functional, but also fashion-forward and trendsetting."
    },
    {
      number: "3",
      title: "Sustainable Materials",
      description: "We're committed to environmental responsibility, using eco-friendly materials and sustainable manufacturing processes."
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-subtitle">FEEL THE EXPERIENCE</span>
              <h1 className="hero-title">
                SEPATU BERBICARA<br />
                LEBIH KERAS<br />
                DARIPADA KATA-KATA
              </h1>
              <p className="hero-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <Link to="/products" className="hero-button">
                Temukan Sekarang
              </Link>
              <div className="hero-rating">
                <span className="star">★</span>
                <span>4.5 Rating</span>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-circle">
                <span className="hero-local">LOCAL</span>
              </div>
              <img 
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=693&h=684&fit=crop" 
                alt="Stride Shoes" 
                className="hero-shoe"
              />
              <div className="hero-mini-products">
                <div className="mini-product">
                  <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=115&h=96&fit=crop" alt="Product 1" />
                </div>
                <div className="mini-product">
                  <img src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=166&h=166&fit=crop" alt="Product 2" />
                </div>
                <div className="mini-product">
                  <img src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=127&h=116&fit=crop" alt="Product 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brands Section */}
      <section className="brands">
        <div className="brands-container">
          <h2>Top Brands</h2>
          <p>temukan sepatu impian Anda dari 5000+ koleksi</p>
          <div className="brands-grid">
            {brandLogos.map((logo, index) => (
              <div key={index} className="brand-logo">
                <img src={logo} alt={`Brand ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="showcase">
        <div className="showcase-container">
          <div className="showcase-image">
            <img src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=766&h=1049&fit=crop" alt="Showcase" />
          </div>
          <div className="showcase-content">
            <div className="showcase-card">
              <h3>Lokal: Melangkah dengan Gaya dan Nyaman.</h3>
              <p>
                Di Lokal, kami lebih dari sekadar brand yang menjual kembali sepatu; 
                kami adalah kurator gaya dan kualitas. Dengan hasrat yang mendalam 
                terhadap footwear, kami memilih setiap pasangnya dengan cermat, 
                memastikan setiap langkah Anda adalah sebuah langkah penuh percaya diri 
                yang mengedepankan gaya.
              </p>
              <Link to="/products" className="showcase-button">
                Beli Sekarang
              </Link>
            </div>
            <div className="showcase-grid">
              <img src="https://images.pexels.com/photos/1464624/pexels-photo-1464624.jpeg?auto=compress&cs=tinysrgb&w=337&h=470&fit=crop" alt="Showcase 2" />
              <img src="https://images.pexels.com/photos/1464623/pexels-photo-1464623.jpeg?auto=compress&cs=tinysrgb&w=337&h=470&fit=crop" alt="Showcase 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Stride Divider */}
      <section className="stride-divider">
        <div className="stride-text">
          {['STRIDE', 'STRIDE', 'STRIDE', 'STRIDE', 'STRIDE'].map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
        <div className="stride-dots">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="dot"></div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="advantages">
        <div className="advantages-container">
          <div className="advantages-content">
            <h2>At Local Shoes</h2>
            <h3>Have Advantage :</h3>
            <div className="advantages-list">
              {advantages.map((advantage, index) => (
                <div key={index} className="advantage-item">
                  <div className="advantage-number">{advantage.number}</div>
                  <div className="advantage-text">
                    <h4>{advantage.title}</h4>
                    <p>{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="advantages-visual">
            <div className="product-detail-card">
              <div className="product-image">
                <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=339&h=233&fit=crop" alt="Featured Product" />
              </div>
              <h4>BRODO- Running Active Venturi</h4>
              <p>Color: White | Rp 500rb/-</p>
              <div className="color-options">
                <div className="color-option blue"></div>
                <div className="color-option light-blue"></div>
                <div className="color-option beige"></div>
                <div className="color-option light-beige"></div>
              </div>
              <div className="product-stats">
                <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=34&h=34&fit=crop" alt="User" />
                <span>1000+ People Bought</span>
              </div>
            </div>
            <div className="review-card">
              <img src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=67&h=67&fit=crop" alt="Reviewer" />
              <div className="review-content">
                <span className="verified">Verified Customer</span>
                <h5>Best Shoes Ever!!</h5>
                <div className="stars">★★★★★</div>
                <p>Ini adalah ultimate embodiment dari style, comfort, dan durability...</p>
                <div className="review-product">
                  <strong>Nike Air A5000</strong>
                  <span>Color: White</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Collection */}
      <section className="collection">
        <div className="collection-container">
          <h2>Local Collection</h2>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-image">
                  <img src={product.image || `https://images.pexels.com/photos/${1598505 + index}/pexels-photo-${1598505 + index}.jpeg?auto=compress&cs=tinysrgb&w=339&h=236&fit=crop`} alt={product.name} />
                </div>
                <h3>{product.name || `Product ${index + 1}`}</h3>
                <p>Color: {product.color || 'White'} | {product.price || 'Rp 500rb/-'}</p>
                <button className="favorite-btn">♡</button>
              </div>
            ))}
          </div>
          <Link to="/products" className="view-more-btn">
            View More
          </Link>
        </div>
      </section>

      {/* Customer Opinion */}
      <section className="testimonials">
        <div className="testimonials-container">
          <h2>Customer Opinion</h2>
          <p>
            At Stride we take pride in offering the finest footwear crafted 
            with precision and dedication. Step into unmatched comfort, 
            durability, and style.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <h4>Best Shoes</h4>
                <div className="rating">★★★★★</div>
                <p>"{testimonial.review}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="#reviews" className="see-all-reviews">
            See All Review
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-preview">
        <div className="contact-container">
          <div className="contact-card">
            <h2>Contact us</h2>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <strong>No telepon</strong>
                  <p>+6289506147763</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <p>Jl. Raya Cikampak Cicadas, RT.1/RW.1, Cicadas, Kec. Ciampea, Kabupaten Bogor, Jawa Barat 16620</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <strong>Opening hours</strong>
                  <p>Everyday, 8:00 Am to 22:00 Pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <img src="https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=1014&h=737&fit=crop" alt="Map" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;