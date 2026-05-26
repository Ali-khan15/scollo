import React from 'react';
import './Subpages.css';
import { TradeIcons } from '../components/TradeIcons';

const services = [
  {
    icon: TradeIcons.framing,
    title: 'Framing',
    description:
      'Precision metal and wood framing for walls, ceilings, and structural systems — built for strength, speed, and long-term performance.',
    image: '/images/img_62.jpeg',
  },
  {
    icon: TradeIcons.finishing,
    title: 'Finishing',
    description:
      'Expert surface finishing including taping, mudding, sanding, and texturing to deliver smooth, paint-ready walls and ceilings.',
    image: '/images/img_5.jpeg',
  },
  {
    icon: TradeIcons.backing,
    title: 'Backing',
    description:
      'Structural backing and blocking installation to support fixtures, cabinetry, handrails, and other wall-mounted elements.',
    image: '/images/img_22.jpeg',
  },
  {
    icon: TradeIcons.sheathing,
    title: 'Sheathing',
    description:
      'Exterior wall and roof sheathing installation using OSB and plywood panels for a strong, weather-resistant building envelope.',
    image: '/images/img_43.jpeg',
  },
  {
    icon: TradeIcons.trusses,
    title: 'Trusses',
    description:
      'Professional roof and floor truss installation ensuring structural integrity, proper load distribution, and code compliance.',
    image: '/images/img_63.jpeg',
  },
  {
    icon: TradeIcons.stucco,
    title: 'Stucco',
    description:
      'Interior and exterior stucco application delivering durable, textured, and visually appealing finishes for any surface.',
    image: '/images/img_10.jpeg',
  },
  {
    icon: TradeIcons.insulation,
    title: 'Insulation',
    description:
      'High-performance insulation installation for walls, ceilings, and floors — improving energy efficiency and acoustic comfort.',
    image: '/images/img_20.jpeg',
  },
  {
    icon: TradeIcons.hanging,
    title: 'Hanging',
    description:
      'Precise drywall hanging and sheetrock installation for residential and commercial projects, ready for finishing.',
    image: '/images/img_12.jpeg',
  },
];

const OurServices = () => (
  <div className="subpage-container">
    {/* Hero */}
    <div className="subpage-hero">
      <div className="container">
        <span className="eyebrow">What We Do</span>
        <h1><span className="grad-text">Our Services</span></h1>
        <p>
          At Scollo Framing and Finish, we deliver expert framing, finishing, and structural services —
          from trusses and sheathing to stucco, insulation, and drywall hanging.
        </p>
      </div>
    </div>

    {/* Service Cards */}
    <div className="subpage-content">
      <div className="container">
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div
                className="service-card-image"
                style={service.image ? { backgroundImage: `url(${service.image})` } : { backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {!service.image && <span style={{ color: '#ffffff', opacity: 0.5, fontSize: '0.9rem', zIndex: 2 }}>Photo Coming Soon</span>}
                <div className="service-card-overlay" />
                <span className="service-card-icon">{service.icon}</span>
              </div>
              <div className="service-card-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



    {/* CTA Split */}
    <section className="split-section">
      <div className="split-content">
        <span className="eyebrow">Ready to Start?</span>
        <h2>Quality you can <span className="grad-text">trust,</span> results you can see.</h2>
        <p>Contact us today for a detailed consultation on your next project.</p>
        <a href="/get-quote" className="btn-primary">Get A Quote</a>
      </div>
      <div className="split-bg" style={{ backgroundImage: 'url(/images/img_22.jpeg)' }} />
    </section>
  </div>
);

export default OurServices;
