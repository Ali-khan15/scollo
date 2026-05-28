import React, { useState } from 'react';
import './Subpages.css';
import { PhoneIcon, MailIcon, LocationIcon, ClockIcon, CheckCircleIcon, ArrowRightIcon } from '../components/Icons';

const SERVICE_OPTIONS = [
  'Painting',
  'Sheetrock',
  'Pressure Wash',
  'Commercial',
  'Residential',
  'Epoxy Floors',
  'Other / Multiple Services',
];

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: '',
    location: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sending to info@Scollopaintco.com:', form);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', service: '', details: '', location: '' });
    }, 4000);
  };

  return (
    <div className="subpage-container">
      {/* Hero */}
      <div className="subpage-hero">
        <div className="container">
          <span className="eyebrow">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Have a project in mind or need a quote? Our team is ready to help.</p>
        </div>
      </div>

      <div className="subpage-content">
        <div className="container">
          <div className="contact-grid">

            {/* ── Left: Contact Info ── */}
            <div className="contact-info">
              <h2>Contact Information</h2>

              <div className="contact-item">
                <h3><PhoneIcon size={18} /> Phone</h3>
                <p><a href="tel:+1XXXXXXXXXX">+1 XXX XXX XXXX</a></p>
              </div>

              <div className="contact-item">
                <h3><MailIcon size={18} /> Email</h3>
                <p>
                  <a href="mailto:info@Scollopaintco.com">
                    info@Scollopaintco.com
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <h3><LocationIcon size={18} /> Location</h3>
                <p>Your City / State Here</p>
              </div>

              <div className="contact-item">
                <h3><ClockIcon size={18} /> Business Hours</h3>
                <p>Monday – Saturday: 8:00 AM – 6:00 PM</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', marginTop: '4px' }}>Sunday: Closed</p>
              </div>

              <div className="contact-closing">
                <p>
                  At Scollo Framing and Finish, we are committed to providing reliable service
                  and quality results you can depend on.
                </p>
              </div>
            </div>

            {/* ── Right: Quote Form ── */}
            <div className="contact-form-wrap">
              <h2>Request a Quote</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.6rem' }}>
                Fill out the form and we will get back to you as soon as possible.
              </p>

              {sent ? (
                <div className="success-msg">
                  <div style={{ marginBottom: '16px', color: 'var(--primary-gold)' }}><CheckCircleIcon size={64} /></div>
                  <h2>Message Sent!</h2>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="page-contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Service Required *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service…</option>
                        {SERVICE_OPTIONS.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Location / Project Address</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="City, State or full address"
                      value={form.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Project Details *</label>
                    <textarea
                      name="details"
                      rows="5"
                      required
                      placeholder="Describe your project, scope, timeline, and any specific requirements…"
                      value={form.details}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '18px' }}>
                    Send Request <ArrowRightIcon size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
