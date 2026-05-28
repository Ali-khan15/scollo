import React, { useState, useRef, useEffect } from 'react';
import './Gallery.css';
import './Subpages.css';

import { TradeIcons } from '../components/TradeIcons';
import { ArrowLeftIcon, ArrowRightIcon } from '../components/Icons';

/* ── Service sections with curated image assignments ── */
const SERVICE_SECTIONS = [
  {
    id: 'commercial',
    title: 'Commercial',
    icon: TradeIcons.framing,
    description: 'Large-scale framing and finishing solutions for business and retail properties.',
    images: [
      { url: '/images/img_1.jpeg',  caption: 'Commercial Building' },
      { url: '/images/img_2.jpeg',  caption: 'Retail Interior' },
      { url: '/images/img_3.jpeg',  caption: 'Large Facility' },
      { url: '/images/img_5.jpeg',  caption: 'Office Space' },
      { url: '/images/img_6.jpeg',  caption: 'Industrial Finish' },
      { url: '/images/img_7.jpeg',  caption: 'Project Management' },
      { url: '/images/img_8.jpeg',  caption: 'Scale Work' },
      { url: '/images/img_9.jpeg',  caption: 'Precision Results' },
      { url: '/images/img_10.jpeg', caption: 'Corporate Project' },
      { url: '/images/img_11.jpeg', caption: 'High-Volume Paint' },
      { url: '/images/img_12.jpeg', caption: 'Complex Environment' },
      { url: '/images/img_13.jpeg', caption: 'Quality Assurance' },
    ],
  },
  {
    id: 'resident',
    title: 'Resident',
    icon: TradeIcons.stucco,
    description: 'Personalized interior and exterior services for your home — quality you can live with.',
    images: [
      { url: '/images/img_39.jpeg', caption: 'Interior Refresh' },
      { url: '/images/img_48.jpeg', caption: 'Garage Finish' },
      { url: '/images/img_60.jpeg', caption: 'Exterior Zip System' },
      { url: '/images/img_87.jpeg', caption: 'Clean Bathroom' },
      { url: '/images/img_92.jpeg', caption: 'Spiral Staircase' },
    ],
  },
  {
    id: 'dry-wall',
    title: 'Dry wall',
    icon: TradeIcons.drywall,
    description: 'Seamless dry wall installation, taping, and finishing for smooth, solid walls and ceilings.',
    images: [
      { url: '/images/img_14.jpeg', caption: 'Sheetrock Installation' },
      { url: '/images/img_15.jpeg', caption: 'Panel Hanging' },
      { url: '/images/img_16.jpeg', caption: 'Corner Beading' },
      { url: '/images/img_17.jpeg', caption: 'Tape & Mud' },
      { url: '/images/img_18.jpeg', caption: 'Ceiling Work' },
      { url: '/images/img_19.jpeg', caption: 'Smooth Finish' },
      { url: '/images/img_20.jpeg', caption: 'Large Panel Work' },
      { url: '/images/img_21.jpeg', caption: 'Sheetrock Detail' },
      { url: '/images/img_22.jpeg', caption: 'Ceiling Mudding' },
      { url: '/images/img_23.jpeg', caption: 'Wall System' },
      { url: '/images/img_24.jpeg', caption: 'Board & Finish' },
      { url: '/images/img_25.jpeg', caption: 'Corner Bead Finish' },
      { url: '/images/img_34.jpeg', caption: 'Patch Work' },
      { url: '/images/img_35.jpeg', caption: 'Mudding Detail' },
      { url: '/images/img_36.jpeg', caption: 'Commercial Sheetrock' },
      { url: '/images/img_37.jpeg', caption: 'Recessed Detail' },
      { url: '/images/img_42.jpeg', caption: 'Ceiling Scraping' },
      { url: '/images/img_43.jpeg', caption: 'Ceiling Prep' },
      { url: '/images/img_44.jpeg', caption: 'Mudding Ceiling' },
      { url: '/images/img_45.jpeg', caption: 'Wall Leveling' },
      { url: '/images/img_46.jpeg', caption: 'Room Prep' },
      { url: '/images/img_47.jpeg', caption: 'Soffit Mudding' },
    ],
  },
  {
    id: 'framing',
    title: 'Framing',
    icon: TradeIcons.framing,
    description: 'Expert metal and wood framing for structural excellence.',
    images: [
      { url: '/images/img_38.jpeg', caption: 'Office Framing' },
      { url: '/images/img_59.jpeg', caption: 'Curved Metal Framing' },
      { url: '/images/img_61.jpeg', caption: 'Metal Stud Framing' },
      { url: '/images/img_62.jpeg', caption: 'Commercial Framing' },
      { url: '/images/img_63.jpeg', caption: 'Large Space Framing' },
      { url: '/images/img_68.jpeg', caption: 'High Angle Ceiling' },
      { url: '/images/img_69.jpeg', caption: 'Roof Structure' },
      { url: '/images/img_70.jpeg', caption: 'Ceiling Joists' },
      { url: '/images/img_71.jpeg', caption: 'Framed Opening' },
      { url: '/images/img_72.jpeg', caption: 'Exposed Beam' },
      { url: '/images/img_73.jpeg', caption: 'Ladder Work' },
      { url: '/images/img_74.jpeg', caption: 'Framing Detail' },
    ],
  },
  {
    id: 'epoxy-floor',
    title: 'Epoxy floor',
    icon: TradeIcons.flooring,
    description: 'Durable and decorative epoxy floor coatings for any surface.',
    images: [
      { url: '/images/epoxy_floor.jpg', caption: 'High-Gloss Epoxy Finish' },
    ],
  },
  {
    id: 'wall-covering',
    title: 'Wall covering',
    icon: TradeIcons.painting,
    description: 'Professional wall covering and high-quality painting finishes.',
    images: [
      { url: '/images/img_26.jpeg', caption: 'Interior Finish' },
      { url: '/images/img_27.jpeg', caption: 'Exterior Coat' },
      { url: '/images/img_28.jpeg', caption: 'Precision Cut-In' },
      { url: '/images/img_29.jpeg', caption: 'Commercial Paint' },
      { url: '/images/img_30.jpeg', caption: 'Residential Paint' },
      { url: '/images/img_31.jpeg', caption: 'High-End Finish' },
      { url: '/images/img_32.jpeg', caption: 'Color Application' },
      { url: '/images/img_33.jpeg', caption: 'Spray Paint Detail' },
      { url: '/images/img_40.jpeg', caption: 'Wall Skimming' },
      { url: '/images/img_41.jpeg', caption: 'Surface Prep' },
      { url: '/images/img_64.jpeg', caption: 'Scaffold Painting' },
      { url: '/images/img_65.jpeg', caption: 'High Ceiling Paint' },
      { url: '/images/img_66.jpeg', caption: 'Ceiling Mudding' },
      { url: '/images/img_67.jpeg', caption: 'Archway Painting' },
      { url: '/images/img_82.jpeg', caption: 'High Gloss Finish' },
    ],
  },
  {
    id: 'power-wash',
    title: 'Power wash',
    icon: TradeIcons.waterproofing,
    description: 'Deep cleaning and restoration for exteriors and driveways.',
    images: [],
  },
];

/* ── Service Slider Component ── */
const ServiceSlider = ({ section }) => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const trackRef = useRef(null);

  const VISIBLE = 3;
  const total = section.images.length;
  const maxIndex = Math.max(0, total - VISIBLE);

  const go = (dir) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(prev => {
      let next = prev + dir;
      if (next > maxIndex) next = 0;
      if (next < 0) next = maxIndex;
      return next;
    });
    setTimeout(() => setAnimating(false), 600);
  };

  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || total <= VISIBLE) return;
    const timer = setInterval(() => {
      go(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex, animating, isPaused, total]);

  const offset = -(current * (100 / VISIBLE));

  return (
    <section 
      className="gallery-service-section" 
      id={section.id}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <div className="gallery-section-header">
        <div className="gallery-section-icon">{section.icon}</div>
        <div className="gallery-section-text">
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
        <div className="gallery-slider-controls">
          <button
            className="slider-arrow"
            onClick={() => go(-1)}
            disabled={total <= VISIBLE}
            aria-label="Previous"
          >
            <ArrowLeftIcon size={18} />
          </button>
          <span className="slider-count">
            {total > 0 ? `${current + 1}–${Math.min(current + VISIBLE, total)} / ${total}` : '0 / 0'}
          </span>
          <button
            className="slider-arrow"
            onClick={() => go(1)}
            disabled={total <= VISIBLE}
            aria-label="Next"
          >
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>

      {/* Slider Track */}
      <div className="gallery-slider-viewport">
        {section.images.length > 0 ? (
          <div
            className="gallery-slider-track"
            ref={trackRef}
            style={{ transform: `translateX(${offset}%)` }}
          >
            {section.images.map((img, i) => (
              <div className="gallery-slide" key={i}>
                <div 
                  className="gallery-slide-img"
                  style={{ backgroundImage: `url(${img.url})` }}
                  aria-label={img.caption || 'Gallery Image'}
                />
                <div className="gallery-slide-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-slide-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', height: '400px', borderRadius: '12px' }}>
            <p style={{ color: '#fff', opacity: 0.7 }}>New project photos coming soon</p>
          </div>
        )}
      </div>

      {/* Dot indicators */}
      {total > VISIBLE && (
        <div className="gallery-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`gallery-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide group ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

/* ── Gallery Page ── */
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const displaySections = activeFilter === 'all' 
    ? SERVICE_SECTIONS 
    : SERVICE_SECTIONS.filter(s => s.id === activeFilter);

  return (
    <div className="subpage-container">
      <div className="subpage-hero">
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h1>Gallery</h1>
          <p>Browse our work by service — precision framing, finishing, and everything in between.</p>
        </div>
      </div>

      <div className="gallery-filter-bar">
        <div className="container">
          <button
            className={`gallery-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            {TradeIcons.all} All Services
          </button>
          {SERVICE_SECTIONS.map((s) => (
            <button
              key={s.id}
              id={`filter-${s.id}`}
              className={`gallery-filter-btn ${activeFilter === s.id ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(s.id);
                document.getElementById(`filter-${s.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
              }}
            >
              {s.icon} {s.title}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-sections-container">
        <div className="gallery-sections-track">
          {displaySections.map((section) => (
            <div className="gallery-section-slide" key={section.id}>
              <ServiceSlider section={section} />
            </div>
          ))}
        </div>
      </div>

      <section className="split-section">
        <div className="split-content">
          <span className="eyebrow">Start Your Project</span>
          <h2>Ready to build something great?</h2>
          <p>Every project in this gallery started with a conversation. Let's talk about yours.</p>
          <a href="/get-quote" className="btn-primary">Get a Free Quote</a>
        </div>
        <div className="split-bg" style={{ backgroundImage: 'url(/images/img_40.jpeg)' }} />
      </section>
    </div>
  );
};

export default Gallery;
