import React from 'react';
import { Link } from 'react-router-dom';
import './Subpages.css';
import { MissionIcon, VisionIcon, CheckIcon } from '../components/Icons';

const SPECIALTIES = [
  'Commercial framing & structural systems',
  'Residential framing & finishing',
  'Wall sheathing & backing',
  'Roof & floor truss installation',
  'Stucco application & exterior finish',
  'Insulation installation',
  'Drywall hanging & finishing',
];

const COMMITMENT = [
  'Delivering quality results on every project',
  'Meeting deadlines and staying on schedule',
  'Clear communication throughout the build',
  'Long-lasting workmanship backed by warranty',
];

const About = () => (
  <>
    {/* Hero */}
    <section className="subpage-hero">
      <div className="container">
        <span className="eyebrow">About Us</span>
        <h1>About <span className="grad-text">Scollo Construction</span></h1>
        <p>
          A Florida-born, family-owned construction company committed to delivering quality
          residential, commercial, and government construction services built on trust,
          accountability, and over 20 years of experience.
        </p>
      </div>
    </section>

    {/* Who We Are */}
    <section className="split-section">
      <div className="split-bg" style={{ backgroundImage: 'url(/images/img_63.jpeg)' }} />
      <div className="split-content">
        <span className="eyebrow">Who We Are</span>
        <h2>Building Florida the Right Way for <span className="grad-text">Over 20 Years</span></h2>
        <p>
          For more than 20 years, Scollo Construction has delivered high-quality residential,
          commercial, and government construction projects across Florida.
        </p>
        <p>
          As a family-owned and state-licensed construction company, we take pride in our
          reputation for accountability, integrity, and quality workmanship. From Jacksonville
          to Miami, our team has successfully completed projects ranging from luxury residential
          developments to large-scale commercial and government contracts.
        </p>
        <p>
          Every project is backed by a <strong>12-month workmanship warranty</strong> in
          accordance with Florida building code requirements.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section style={{ padding: '100px 0', background: '#fff' }}>
      <div className="container">
        <div className="about-mv-grid">
          <div className="about-mv-card">
            <div className="about-mv-icon"><MissionIcon /></div>
            <h2><span className="grad-text">Our Mission</span></h2>
            <p>
              To provide exceptional commercial and residential construction services throughout
              Florida while building lasting relationships based on trust, accountability,
              family values, and quality craftsmanship. We are committed to delivering projects
              that stand the test of time and supporting the communities we serve.
            </p>
          </div>
          <div className="about-mv-card">
            <div className="about-mv-icon"><VisionIcon /></div>
            <h2><span className="grad-text">Our Vision</span></h2>
            <p>
              To be recognized as Florida's most trusted family-owned construction company —
              known for quality, integrity, and a genuine commitment to the communities and
              clients we serve across the state.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What We Do */}
    <section className="split-section">
      <div className="split-content light">
        <span className="eyebrow">What We Do</span>
        <h2>Our Construction <span className="grad-text">Specialties</span></h2>
        <ul className="about-list">
          {SPECIALTIES.map((item, i) => (
            <li key={i}><span className="why-check"><CheckIcon size={14} /></span> {item}</li>
          ))}
        </ul>
        <Link to="/our-services" className="btn-primary">View All Services</Link>
      </div>
      <div className="split-bg" style={{ backgroundImage: 'url(/images/framing_1.jpeg)' }} />
    </section>

    {/* Our Commitment */}
    <section className="split-section">
      <div className="split-bg" style={{ backgroundImage: 'url(/images/stucco_1.jpeg)' }} />
      <div className="split-content">
        <span className="eyebrow">Our Commitment</span>
        <h2>What You Can Always <span className="grad-text">Expect From Us</span></h2>
        <ul className="about-list">
          {COMMITMENT.map((item, i) => (
            <li key={i}><span className="why-check"><CheckIcon size={14} /></span> {item}</li>
          ))}
        </ul>
        <Link to="/contact-us" className="btn-primary">Get in Touch</Link>
      </div>
    </section>

    {/* CTA */}
    <section style={{ backgroundColor: 'var(--bg-light)', padding: '100px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(3.2rem,5vw,5.2rem)', textTransform: 'uppercase', marginBottom: '24px' }}>
          Ready to <span className="grad-text">Build With Us?</span>
        </h2>
        <p style={{ fontSize: '1.9rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}>
          Let's talk about how Scollo Construction can be the right partner for your next project across Florida.
        </p>
        <Link to="/contact-us" className="btn-primary">Contact Us Today</Link>
      </div>
    </section>
  </>
);

export default About;
