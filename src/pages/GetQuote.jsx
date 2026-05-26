import React, { useState } from 'react';
import './Subpages.css';

const GetQuote = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Painting',
    location: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your email service (e.g., Formspree, EmailJS, or your own backend)
    // For demonstration, we'll simulate a successful submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="subpage-container">
        <div className="subpage-hero">
          <div className="container">
            <span className="eyebrow">Thank You</span>
            <h1>Quote Request Received</h1>
            <p>We have received your request and will get back to you within 24-48 hours.</p>
          </div>
        </div>
        <div className="container">
          <div className="success-msg" style={{ margin: '80px 0' }}>
            <h2>We'll be in touch soon!</h2>
            <p>A specialist from Scollo Framing and Finish will review your project details and contact you to discuss the next steps.</p>
            <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '30px' }}>
              Send Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="subpage-container">
      {/* Hero Section */}
      <div className="subpage-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Get a Quote</h1>
          <p>Start your next project with Scollo Framing and Finish Provide your details below and we'll provide a comprehensive estimate.</p>
        </div>
      </div>

      <div className="container">
        <div className="quote-form-container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2>Request an Estimate</h2>
            <p>Tell us about your project goals and we'll help you build them.</p>
          </div>

          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="(123) 456-7890" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Required *</label>
              <select 
                id="service" 
                name="service" 
                required
                value={formData.service}
                onChange={handleChange}
              >
                <option value="Painting">Painting</option>
                <option value="Sheetrock">Sheetrock</option>
                <option value="Pressure Wash">Pressure Wash</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="Epoxy Floors">Epoxy Floors</option>
                <option value="Other">Other / Multiple</option>
              </select>
            </div>

            <div className="form-group full">
              <label htmlFor="location">Project Location *</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                placeholder="City, State" 
                required 
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="form-group full">
              <label htmlFor="details">Project Details *</label>
              <textarea 
                id="details" 
                name="details" 
                placeholder="Please describe your project, approximate dimensions, and any specific requirements..." 
                required
                value={formData.details}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">Submit Quote Request</button>
          </form>

          <div className="contact-closing" style={{ marginTop: '40px' }}>
            <p>Note: For urgent requests, please call us directly at our main office. We aim to respond to all online inquiries within two business days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;

