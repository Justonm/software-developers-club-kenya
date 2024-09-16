import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <h2>Who We Are</h2>
        <p>
          We are a passionate group of software developers dedicated to building innovative solutions and fostering a collaborative community. Our mission is to empower developers through education, resources, and networking opportunities.
        </p>
        <h2>Our Vision</h2>
        <p>
          Our vision is to be a leading community for software developers where members can learn, grow, and contribute to exciting projects. We aim to create a space where technology enthusiasts can come together and make a positive impact on the world.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Education</li>
          <li>Integrity</li>
        </ul>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 Software Developers Club. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
