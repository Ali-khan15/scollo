import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const socials = [
  { label: 'LinkedIn',  href: 'https://linkedin.com',  icon: <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { label: 'Facebook',  href: 'https://facebook.com',  icon: <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
  { label: 'Instagram', href: 'https://instagram.com', icon: <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
  { label: 'YouTube',   href: 'https://youtube.com',   icon: <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg> },
  { label: 'Twitter/X', href: 'https://twitter.com',   icon: <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg> },
];

const Footer = () => (
  <footer className="Scollo-footer">

    {/* ── Gradient accent line ── */}
    <div className="footer-accent-line" />

    {/* ── CTA Bar ── */}
    <div className="footer-cta-bar">
      <div className="container">
        <div className="footer-cta-inner">
          <div>
            <h2>Let's Build Something <span style={{ color: 'var(--primary-gold)' }}>That Lasts</span></h2>
            <p>Florida Born. Family Owned. Community Focused.</p>
          </div>
          <div className="footer-cta-actions">
            <Link to="/our-services" className="btn-primary">View Our Services</Link>
            <a href="#contact" className="footer-cta-link">Get in Touch →</a>
          </div>
        </div>
      </div>
    </div>

    {/* ── Main Footer Body ── */}
    <div className="footer-body">
      <div className="container">
        <div className="footer-body-inner">

          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-wrap">
              <img src="/logo-removebg-preview (1).png" alt="Scollo Construction" className="footer-logo" />
            </Link>
            <p className="footer-tagline">
              A Florida-born, family-owned construction company delivering quality
              residential, commercial, and government projects throughout Florida
              for over 20 years.
            </p>
            <div className="footer-contact-list">
              <a href="tel:+15619063823" className="footer-contact-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.03 1.22 2 2 0 012 .04h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg>
                +1 (561) 906-3823
              </a>
              <a href="mailto:info@scolloframing&finishing.com" className="footer-contact-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@scolloframing&amp;finishing.com
              </a>
              <span className="footer-contact-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="15" height="15"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Florida, USA
              </span>
            </div>
            <div className="footer-socials">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="social-icon" aria-label={s.label} target="_blank" rel="noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="footer-nav-col">
            <h4>Company</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/our-services">Our Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Services</h4>
            <ul className="footer-nav-list">
              <li><Link to="/our-services">Framing</Link></li>
              <li><Link to="/our-services">Finishing</Link></li>
              <li><Link to="/our-services">Backing</Link></li>
              <li><Link to="/our-services">Sheathing</Link></li>
              <li><Link to="/our-services">Trusses</Link></li>
              <li><Link to="/our-services">Stucco</Link></li>
              <li><Link to="/our-services">Insulation</Link></li>
              <li><Link to="/our-services">Hanging</Link></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Quick Links</h4>
            <ul className="footer-nav-list">
              <li><Link to="/get-quote">Get a Quote</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
            <div className="footer-badges">
              <span className="footer-badge">State Licensed</span>
              <span className="footer-badge">20+ Years</span>
              <span className="footer-badge">Family Owned</span>
              <span className="footer-badge">12-Mo Warranty</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* ── Bottom Bar ── */}
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom-inner">
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#accessibility">Accessibility</a>
          </div>
          <span className="footer-copyright">
            © {new Date().getFullYear()} Scollo Construction. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
