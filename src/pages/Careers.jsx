import React from 'react';
import { Link } from 'react-router-dom';
import './Subpages.css';

const CAREER_TRACKS = [
  {
    title: 'Craft Professionals',
    desc: 'Innovation in the field starts with the best builders. Start or advance your field career with the most skilled craft workforce in the industry.',
    cta: 'Craft Resources',
    href: '#craft',
    img: '/images/img_63.jpeg',
  },
  {
    title: 'Experienced Professionals',
    desc: 'Bring your expertise to our growing regional teams and experience the difference an owner-focused firm makes on your career.',
    cta: 'Search Openings',
    href: '#openings',
    img: '/images/img_65.jpeg',
  },
];

const CAREER_PATHS = [
  {
    title: 'Recent Grads',
    desc: 'Jumpstart your career with our rigorous training programs and hands-on site experiences geared toward new industry professionals.',
    cta: 'College Recruiting',
    img: '/images/img_70.jpeg',
    imgLeft: false,
    light: true,
  },
  {
    title: 'Veterans',
    desc: 'We value the leadership, dedication, and technical discipline that military veterans bring to our construction projects every day.',
    cta: 'Veteran Opportunities',
    img: '/images/img_71.jpeg',
    imgLeft: true,
    light: false,
  },
  {
    title: 'Internships',
    desc: 'Our summer internship program places students in real project environments where they contribute alongside experienced professionals from day one.',
    cta: 'Learn About Internships',
    img: '/images/img_72.jpeg',
    imgLeft: false,
    light: true,
  },
];

const Careers = () => (
  <>
    {/* Hero */}
    <section className="subpage-hero">
      <div className="container">
        <span className="eyebrow">Join Our Team</span>
        <h1>Build Your Career With Us</h1>
        <p>Scollo Framing and Finish is a special place to build a career — whether you're just starting out or have spent decades in the industry. As a family-oriented company, we're all invested in each other's success.</p>
      </div>
    </section>

    {/* Dual CTA Cards */}
    <section style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="careers-cta-grid">
          {CAREER_TRACKS.map((t, i) => (
            <a href={t.href} className="career-cta-card" key={i}>
              <div className="cta-bg" style={{ backgroundImage: `url(${t.img})` }} />
              <div className="cta-overlay" />
              <div className="career-cta-content">
                <h2>{t.title}</h2>
                <p>{t.desc}</p>
                <span className="btn-primary">{t.cta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="careers-stats-bar">
      <div className="container">
        <div className="careers-stats-inner">
          <div className="careers-stat">
            <span className="careers-stat-num">8+</span>
            <span className="careers-stat-label">Skilled Craft Experts</span>
          </div>
          <div className="careers-stat">
            <span className="careers-stat-num">#1</span>
            <span className="careers-stat-label">Top Local Contractor</span>
          </div>
          <div className="careers-stat">
            <span className="careers-stat-num">10+</span>
            <span className="careers-stat-label">Years of Excellence</span>
          </div>
        </div>
      </div>
    </section>

    {/* Video / Culture Section */}
    <section className="careers-video-section">
      <div className="container">
        <div className="careers-video-inner">
          <div className="careers-video-text">
            <span className="eyebrow">Our Culture</span>
            <h2>We Accomplish Great Things Together</h2>
            <p>At Scollo Framing and Finish, everyone has a stake in our reputation — and in the success of every project we complete. It fosters a culture of accountability, pride, and shared purpose that sets us apart from every other firm in the industry.</p>
            <a href="#openings" className="btn-primary">Search All Openings</a>
          </div>
          <div className="video-placeholder">
            <img src="/images/img_68.jpeg" alt="Scollo Framing and Finish team at work" />
            <div className="video-play-btn" aria-label="Play video">
              <svg viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Career Path Split Sections */}
    {CAREER_PATHS.map((p, i) => (
      <section className="split-section" key={i}>
        {p.imgLeft ? (
          <>
            <div className="split-bg" style={{ backgroundImage: `url(${p.img})` }} />
            <div className={`split-content ${p.light ? 'light' : ''}`}>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              <a href="#more" className="btn-primary">{p.cta}</a>
            </div>
          </>
        ) : (
          <>
            <div className={`split-content ${p.light ? 'light' : ''}`}>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              <a href="#more" className="btn-primary">{p.cta}</a>
            </div>
            <div className="split-bg" style={{ backgroundImage: `url(${p.img})` }} />
          </>
        )}
      </section>
    ))}

    {/* CTA Banner */}
    <section style={{ backgroundColor: 'var(--bg-light)', padding: '100px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(3.6rem, 5vw, 5.6rem)', textTransform: 'uppercase', marginBottom: '24px' }}>
          Join Our Team
        </h2>
        <p style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Ready to start building the best projects in America with the best team in the industry?
        </p>
        <a href="#search" className="btn-primary">Search All Careers</a>
      </div>
    </section>
  </>
);

export default Careers;
