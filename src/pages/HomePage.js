import React, { useState, useEffect } from 'react';
import '../styles.css'; // Import existing styles

const slides = [
  {
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    alt: 'First slide',
    caption: 'Join our community of skilled software developers.',
  },
  {
    image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg',
    alt: 'Second slide',
    caption: 'Collaborate, learn, and grow with like-minded peers.',
  },
  {
    image: 'https://images.pexels.com/photos/6212801/pexels-photo-6212801.jpeg',
    alt: 'Third slide',
    caption: 'Access exclusive members-only resources and events.',
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 2000); // 2000ms = 2 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="container page">
      <h1>Welcome to Software Developers Kenya Club</h1>
      <p>Explore our features and join our community.</p>

      {/* Carousel */}
      <div className="carousel">
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#10094;
        </button>
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          className="slide-image"
        />
        <div className="caption">{slides[currentSlide].caption}</div>
        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="landing-info">
        <h2>Why Join Us?</h2>
        <p>
          As a member of Software Developers Kenya Club, you get the opportunity to
          connect with top developers, access exclusive learning resources, and
          collaborate on exciting projects.
        </p>
        <a href="/signup" className="join-btn">Join Now</a>
      </div>
    </div>
  );
};

export default HomePage;
