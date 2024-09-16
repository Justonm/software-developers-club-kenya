import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://software-database.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setError(null);
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        throw new Error('Failed to submit form.');
      }
    } catch (err) {
      setError('Error submitting form. Please try again later.');
      console.error(err);
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>

      <section className="contact-content">
        {isSubmitted ? (
          <p className="success-message">Your message has been sent successfully!</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        )}

        {error && <p className="error-message">{error}</p>}
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
