import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Layout.css';
import { ArrowRightIcon } from '../components/Icons';

/* ── Contact Modal ── */
const ContactModal = ({ open, onClose }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a production environment, this data would be sent to info@Scollopaintco.com
    console.log('Sending form data to info@Scollopaintco.com:', form);
    setSent(true);
    setTimeout(() => { setSent(false); onClose(); setForm({ name: '', email: '', company: '', message: '' }); }, 2500);
  };

  if (!open) return null;
  return (
    <div className="contact-modal-backdrop" onClick={onClose}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close">✕</button>
        {sent ? (
          <div className="contact-modal-success">
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. A Scollo Framing and Finish team member will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <div className="contact-modal-header">
              <span className="contact-modal-eyebrow">Get In Touch</span>
              <h2>Let's Talk</h2>
              <p>Tell us about your project and we'll connect you with the right team.</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">Full Name *</label>
                  <input id="c-name" type="text" placeholder="John Smith" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email Address *</label>
                  <input id="c-email" type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c-company">Company / Organization</label>
                <input id="c-company" type="text" placeholder="Your Company Name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
              </div>
              <div className="form-group">
                <label htmlFor="c-msg">How Can We Help? *</label>
                <textarea id="c-msg" rows="5" placeholder="Tell us about your project, timeline, and location..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} required />
              </div>
              <button type="submit" className="btn-primary" style={{ fontSize: '1.6rem', padding: '1.6rem 4rem' }}>Send Message <ArrowRightIcon size={14} /></button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();
  const [contactOpen, setContactOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);

  // Listen for #contact anchor clicks globally
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target.closest('a[href="#contact"], button.contact-btn, a.contact-btn');
      if (anchor) { e.preventDefault(); setContactOpen(true); }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  // Also respond to hash on load
  useEffect(() => {
    if (hash === '#contact') { setContactOpen(true); window.history.replaceState(null, '', pathname); }
  }, [hash, pathname]);

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
};

export default Layout;
