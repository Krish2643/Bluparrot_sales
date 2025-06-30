import React, { useState } from 'react';
import './ContactSection.css';
import Parrot from "../components/Images/Rectangle 5766.png";
import axios from 'axios';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    designation: '',
    message: '',
    consent: false // New field for consent
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value // Handle checkbox change
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Check if consent is given
    if (!formData.consent) {
      setError('You must provide permission to send updates.');
      setLoading(false);
      return;
    }

    try {
      await axios.post('https://bluparrot.in:5000/send-email', formData);
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        designation: '',
        message: '',
        consent: false // Reset consent
      });
      setSuccess('Email sent successfully!');
    } catch (err) {
      setError('Error sending email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <div style={{ textAlign: 'left', color: '#F4F4F4', fontFamily: 'Gothic A1' }} className="contact-text">
          <h2>Write to us</h2>
          <p>
            We've been catalysts for growth and transformation across industries.
            Your vision is our next challenge. Share your goals, and let's create
            something extraordinary together.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              style={{ borderBottom: '1px solid white' }}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              required
            />
            <input
              style={{ borderBottom: '1px solid white' }}
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
            />
          </div>
          <input
            style={{ borderBottom: '1px solid white' }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail Id *"
            required
          />
          <input
            style={{ borderBottom: '1px solid white' }}
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name *"
            required
          />
          <input
            style={{ borderBottom: '1px solid white' }}
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation *"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you? *"
            required
          ></textarea>
          <div className="checkbox-group">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              id="consent"
            />
            <label htmlFor="consent">
              I agree to receive updates and emails.
            </label>
          </div>
          <button type="submit" className="send-button" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </div>
      <div className="Image-Container">
        <img src={Parrot} alt="Parrot" loading="lazy" />
      </div>
    </section>
  );
};

export default ContactSection;
