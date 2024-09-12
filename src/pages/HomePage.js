import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo-container">
          <img src="/images/logo.png" alt="Software Developers Club Logo" className="logo-image" />
          <h1 className="club-name">Software Developers Club</h1>
        </div>
        <button className="login-button">
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        </button>
      </header>

      <section className="carousel-section">
        <div className="carousel-overlay">
          <h1>Welcome to the Software Developers Club</h1>
          <button className="login-button">
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          </button>
        </div>
        <Carousel className="carousel-container" showThumbs={false} autoPlay infiniteLoop>
          <div>
            <img src="/images/community1.jpg" alt="Software Community 1" />
          </div>
          <div>
            <img src="/images/community2.jpg" alt="Software Community 2" />
          </div>
          <div>
            <img src="/images/community3.jpg" alt="Software Community 3" />
          </div>
        </Carousel>
      </section>

      <section className="welcome-section">
      <section className="welcome-section">
  <p>
    We are a community of passionate developers who collaborate, learn, and grow together. 
    Join us to enhance your skills, contribute to exciting projects, and network with 
    like-minded individuals. Together, we can build a better future for the software industry.
    Our club offers numerous opportunities to engage in meaningful projects, attend workshops, 
    and participate in hackathons. Whether you are a beginner or an experienced developer, 
    there is always something new to learn and contribute.
  </p>
</section>

      </section>

      <footer className="footer">
        © 2024 Software Developers Club
      </footer>
    </div>
  );
};

export default HomePage;
