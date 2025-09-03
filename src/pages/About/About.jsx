import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <h1>About Stride</h1>
          <p>Melangkah Bersama Menuju Masa Depan Fashion</p>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="vision-mission">
        <div className="vision-mission-container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="card-icon">👁️</div>
              <h2>Visi</h2>
              <p>
                Menjadi brand sepatu lokal terdepan yang menginspirasi generasi muda Indonesia 
                untuk tampil percaya diri dengan gaya yang autentik dan berkualitas tinggi, 
                sambil melestarikan nilai-nilai budaya lokal dalam setiap langkah.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h2>Misi</h2>
              <ul>
                <li>Menghadirkan sepatu berkualitas tinggi dengan desain yang inovatif dan trendy</li>
                <li>Mendukung industri kreatif lokal melalui kolaborasi dengan desainer Indonesia</li>
                <li>Memberikan pengalaman berbelanja yang memuaskan dengan pelayanan terbaik</li>
                <li>Menggunakan bahan-bahan ramah lingkungan dalam proses produksi</li>
                <li>Membangun komunitas pecinta fashion yang saling mendukung dan menginspirasi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history">
        <div className="history-container">
          <h2>Sejarah Stride</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Awal Mula</h3>
                <p>
                  Stride didirikan oleh sekelompok anak muda Indonesia yang memiliki passion 
                  terhadap fashion dan kualitas. Dimulai dari sebuah garasi kecil di Bogor, 
                  dengan visi untuk menciptakan sepatu lokal yang tidak kalah dengan brand internasional.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h3>Ekspansi Pertama</h3>
                <p>
                  Membuka toko fisik pertama di Jakarta dan meluncurkan platform online. 
                  Koleksi pertama "Urban Explorer" mendapat sambutan luar biasa dari 
                  konsumen muda Indonesia.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h3>Inovasi Berkelanjutan</h3>
                <p>
                  Memperkenalkan teknologi "EcoComfort" - sol sepatu yang terbuat dari 
                  bahan daur ulang. Berkolaborasi dengan 50+ UMKM lokal untuk mendukung 
                  ekonomi kreatif Indonesia.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Pengakuan Nasional</h3>
                <p>
                  Meraih penghargaan "Best Local Brand" dari Indonesia Fashion Week. 
                  Membuka 15 cabang di seluruh Indonesia dan melayani lebih dari 
                  100,000 pelanggan setia.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Era Digital</h3>
                <p>
                  Meluncurkan platform digital terbaru dengan teknologi AR untuk virtual 
                  try-on. Memulai ekspansi ke pasar Asia Tenggara dengan tetap mempertahankan 
                  identitas Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="values-container">
          <h2>Nilai-Nilai Kami</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Berkomitmen pada praktik ramah lingkungan dalam setiap aspek produksi</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>Membangun komunitas yang kuat dan saling mendukung sesama pecinta fashion</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Innovation</h3>
              <p>Terus berinovasi dalam desain dan teknologi untuk memberikan yang terbaik</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Quality</h3>
              <p>Tidak pernah berkompromi dengan kualitas dalam setiap produk yang kami hasilkan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="team-container">
          <h2>Tim Kami</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" alt="CEO" />
              <h3>Ahmad Rizki</h3>
              <p>Founder & CEO</p>
              <span>Visioner di balik Stride dengan pengalaman 10+ tahun di industri fashion</span>
            </div>
            <div className="team-member">
              <img src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" alt="Designer" />
              <h3>Sari Indah</h3>
              <p>Head of Design</p>
              <span>Desainer berbakat yang menciptakan koleksi-koleksi ikonik Stride</span>
            </div>
            <div className="team-member">
              <img src="https://images.pexels.com/photos/2182968/pexels-photo-2182968.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" alt="Production" />
              <h3>Budi Santoso</h3>
              <p>Head of Production</p>
              <span>Ahli produksi yang memastikan setiap sepatu dibuat dengan standar tertinggi</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;