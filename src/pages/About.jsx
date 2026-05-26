import React from 'react';
import { Link } from 'react-router-dom';
import './Subpages.css';

const COMMITMENT = [
  'Delivering quality results',
  'Meeting deadlines',
  'Clear communication',
  'Long-lasting workmanship',
];

const SPECIALTIES = [
  'Commercial construction finishing',
  'Resident interior & exterior services',
  'Dry wall installation and finishing',
  'Metal and wood framing',
  'Epoxy floor coatings',
  'Wall covering & custom treatments',
  'Power wash and surface restoration',
];

const About = () => (
  <>
    {/* Hero */}
    <section className="subpage-hero">
      <div className="container">
        <span className="eyebrow">About Us</span>
        <h1>About <span className="grad-text">Scollo Framing and Finish</span></h1>
        <p>
          A trusted provider of professional painting and finishing services — dedicated to delivering quality
          workmanship and dependable service for every project, no matter the size.
        </p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="split-section">
      <div className="split-bg" style={{ backgroundImage: 'url(/images/img_65.jpeg)' }} />
      <div className="split-content">
        <span className="eyebrow">Who We Are</span>
        <h2>Built on <span className="grad-text">Experience</span> and Commitment to Excellence</h2>
        <p>
          With hands-on experience and a strong commitment to excellence, we help clients turn their
          ideas into vibrant, well-crafted results. Scollo Framing and Finish is more than a contractor —
          we're a partner you can count on from the first tape to the final coat.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section style={{ padding: '100px 0', background: '#fff' }}>
      <div className="container">
        <div className="about-mv-grid">
          <div className="about-mv-card">
            <div className="about-mv-icon">🎯</div>
            <h2><span className="grad-text">Our Mission</span></h2>
            <p>
              To provide reliable, high-quality painting and finishing services with professionalism,
              precision, and customer satisfaction at the core of everything we do.
            </p>
          </div>
          <div className="about-mv-card">
            <div className="about-mv-icon">🔭</div>
            <h2><span className="grad-text">Our Vision</span></h2>
            <p>
              To be recognized as a leading name in painting and finishing services, known for
              quality, trust, and long-lasting results.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="split-section">
      <div className="split-content light">
        <span className="eyebrow">What We Do</span>
        <h2>We Specialize In</h2>
        <ul className="about-list">
          {SPECIALTIES.map((item, i) => (
            <li key={i}><span className="why-check">✓</span> {item}</li>
          ))}
        </ul>
        <Link to="/our-services" className="btn-primary">View All Services</Link>
      </div>
      <div className="split-bg" style={{ backgroundImage: 'url(/images/img_68.jpeg)' }} />
    </section>

    {/* Our Commitment */}
    <section className="split-section">
      <div className="split-bg" style={{ backgroundImage: 'url(/images/img_71.jpeg)' }} />
      <div className="split-content">
        <span className="eyebrow">Our Commitment</span>
        <h2>What You Can Always Expect From Us</h2>
        <ul className="about-list">
          {COMMITMENT.map((item, i) => (
            <li key={i}><span className="why-check">✓</span> {item}</li>
          ))}
        </ul>
        <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
      </div>
    </section>

    {/* CTA */}
    <section style={{ backgroundColor: 'var(--bg-light)', padding: '100px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(3.2rem,5vw,5.2rem)', textTransform: 'uppercase', marginBottom: '24px' }}>
          Ready to <span className="grad-text">Paint With Us?</span>
        </h2>
        <p style={{ fontSize: '1.9rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}>
          Let's talk about how Scollo Framing and Finish can be the right partner for your next project.
        </p>
        <a href="#contact" className="btn-primary">Contact Us Today</a>
      </div>
    </section>
  </>
);

export default About;
