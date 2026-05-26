import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const TRUST_BADGES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    label: 'State Licensed Company',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: '20+ Years Experience',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M12 2L2 19h20L12 2z" />
        <path d="M12 10v5M12 17h.01" />
      </svg>
    ),
    label: 'Jacksonville to Miami',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
      </svg>
    ),
    label: '12-Month Workmanship Warranty',
  },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        <img
          src="/images/img_38.jpeg"
          alt="Scollo Construction — Florida commercial and residential construction"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>

      {/* Vertical accent */}
      <span className={`hero-vertical-text ${isVisible ? 'visible' : ''}`}>
        Quality · Community · Built to Last
      </span>

      {/* Main content */}
      <div className={`container hero-content ${isVisible ? 'fade-in-up' : ''}`}>
        <span className="hero-eyebrow">Scollo Construction · Florida</span>
        <h1>
          Florida's Trusted<br />
          <span style={{ color: 'var(--primary-gold)' }}>Commercial &amp; Residential</span><br />
          Construction Experts
        </h1>
        <p className="hero-sub">
          20+ Years of Experience in Luxury Residential, Commercial, and Government
          Construction Projects Across Florida.
        </p>
        <p className="hero-desc">
          Scollo Construction is a Florida-born, family-owned construction company committed to
          building strong communities through quality craftsmanship, accountability, and integrity.
          From Jacksonville to Miami, we provide dependable construction services built to last.
        </p>
        <div className="hero-buttons">
          <Link to="/gallery"   className="btn-primary">View Our Work</Link>
          <Link to="/get-quote" className="hero-contact-btn">Request Consultation</Link>
        </div>
      </div>

      {/* Trust bar */}
      <div className="hero-trust-bar">
        <div className="container">
          <div className="trust-badges">
            {TRUST_BADGES.map((b, i) => (
              <div className="trust-badge" key={i}>
                <span className="trust-badge-icon">{b.icon}</span>
                <span className="trust-badge-label">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="scroll-indicator" onClick={handleScroll} aria-label="Scroll down">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
};

export default Hero;
