import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <section className="contact-content">
        <form className="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>
      <footer className="contact-footer">
        <p>Address: 34567</p>
        <p>Email: josephirungu890@gmail.com</p>
        <p>Phone: 0790771314</p>
      </footer>
    </div>
  );
};

export default ContactPage;