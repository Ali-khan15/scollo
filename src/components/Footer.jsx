import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/* Social icon SVGs */
const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com',  icon: <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'Facebook',  href: 'https://facebook.com',  icon: <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
  { label: 'Instagram', href: 'https://instagram.com', icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: 'YouTube',   href: 'https://youtube.com',    icon: <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
  { label: 'Twitter/X', href: 'https://twitter.com',   icon: <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg> },
];

const navCols = [
  {
    label: 'Company',
    links: [
      { label: 'Home',          to: '/' },
      { label: 'About Us',      to: '/about' },
      { label: 'Our Services',  to: '/our-services' },
      { label: 'Gallery',       to: '/gallery' },
    ],
  },
  {
    label: 'Services',
    links: [
      { label: 'Commercial',    to: '/our-services' },
      { label: 'Resident',      to: '/our-services' },
      { label: 'Dry wall',      to: '/our-services' },
      { label: 'Framing',       to: '/our-services' },
      { label: 'Epoxy floor',   to: '/our-services' },
      { label: 'Wall covering', to: '/our-services' },
      { label: 'Power wash',    to: '/our-services' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { label: 'Get Quote',       to: '/get-quote' },
      { label: 'Contact Us',      to: '/contact-us' },
    ],
  },
];

const Footer = () => {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer className="Scollo-footer">

      {/* ── Top bar: Let's Build Together ── */}
      <div className="footer-top-bar">
        <div className="container">
          <div className="footer-top-inner">
            <div className="footer-brand">
              <h2>Let's Build Together</h2>
              <div className="footer-brand-actions">
                <Link to="/our-services" className="btn-primary">View Our Services</Link>
                <a href="#talk" className="footer-talk-link">Let's Talk</a>
              </div>
            </div>

            <div className="footer-contact-col">
              <h3>Need to Reach Us?</h3>
              <a href="#contact" className="btn-primary" style={{ display: 'inline-block', marginBottom: '28px' }}>Contact Us</a>
              <div className="footer-socials">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-icon"
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mid: Nav + Subscribe ── */}
      <div className="footer-mid">
        <div className="container">
          <div className="footer-mid-inner">
            {navCols.map(col => (
              <div className="footer-nav-col" key={col.label}>
                <h4>{col.label}</h4>
                <ul className="footer-nav-list">
                  {col.links.map(l => (
                    <li key={l.label}>
                      {l.to.startsWith('/') ? (
                        <Link to={l.to}>{l.label}</Link>
                      ) : (
                        <a href={l.to}>{l.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-subscribe">
              <h4>Stay Connected</h4>
              <p>Follow us on social media and reach out for any project inquiries. We are always ready to help you build your vision.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Use</a>
              <a href="#accessibility">Accessibility</a>
            </div>
            <span className="footer-copyright">
              © {new Date().getFullYear()} Scollo Framing and Finish All Rights Reserved.
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
