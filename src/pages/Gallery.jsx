import React, { useState, useRef, useEffect } from 'react';
import './Gallery.css';
import './Subpages.css';

import { TradeIcons } from '../components/TradeIcons';
import { ArrowLeftIcon, ArrowRightIcon } from '../components/Icons';

/* ── Service sections with curated image assignments ── */
const SERVICE_SECTIONS = [
  {
    id: 'framing',
    title: 'Framing',
    icon: TradeIcons.framing,
    description: 'Precision structural framing solutions for commercial and residential construction projects.',
    images: [
      { url: '/images/framing_1.jpeg', caption: 'Structural Framing' },
      { url: '/images/framing_2.jpeg', caption: 'Commercial Framing' },
      { url: '/images/framing_3.jpeg', caption: 'Framing Detail' },
      { url: '/images/framing_4.jpeg', caption: 'Metal Framing' },
    ],
  },
  {
    id: 'finishing',
    title: 'Finishing',
    icon: TradeIcons.finishing,
    description: 'Professional finishing services focused on craftsmanship, detail, and long-lasting quality.',
    images: [
      { url: '/images/img_26.jpeg', caption: 'Interior Finish' },
      { url: '/images/img_27.jpeg', caption: 'Exterior Coat' },
      { url: '/images/img_28.jpeg', caption: 'Precision Detail' },
      { url: '/images/img_29.jpeg', caption: 'Commercial Finish' },
      { url: '/images/img_30.jpeg', caption: 'Residential Finish' },
      { url: '/images/img_31.jpeg', caption: 'High-End Finish' },
      { url: '/images/img_64.jpeg', caption: 'Scaffold Work' },
      { url: '/images/img_65.jpeg', caption: 'High Ceiling Finish' },
      { url: '/images/img_66.jpeg', caption: 'Ceiling Detail' },
      { url: '/images/img_67.jpeg', caption: 'Archway Finish' },
      { url: '/images/img_82.jpeg', caption: 'High Gloss Finish' },
    ],
  },
  {
    id: 'backing',
    title: 'Backing',
    icon: TradeIcons.backing,
    description: 'Reliable backing installation solutions designed for structural support and durability.',
    images: [
      { url: '/images/backing_1.jpeg',  caption: 'Structural Backing' },
      { url: '/images/backing_2.jpeg',  caption: 'Wall Backing' },
      { url: '/images/backing_3.jpeg',  caption: 'Commercial Backing' },
      { url: '/images/backing_4.jpeg',  caption: 'Support System' },
      { url: '/images/backing_5.jpeg',  caption: 'Backing Detail' },
      { url: '/images/backing_6.jpeg',  caption: 'Precision Backing' },
      { url: '/images/backing_7.jpeg',  caption: 'Backing Installation' },
      { url: '/images/backing_8.jpeg',  caption: 'Backing Framework' },
      { url: '/images/backing_9.jpeg',  caption: 'Backing Support' },
      { url: '/images/backing_10.jpeg', caption: 'Backing Finish' },
    ],
  },
  {
    id: 'sheathing',
    title: 'Sheathing',
    icon: TradeIcons.sheathing,
    description: 'High-quality wall and roof sheathing systems installed to industry standards.',
    images: [
      { url: '/images/sheathing_1.jpeg',  caption: 'Wall Sheathing' },
      { url: '/images/sheathing_2.jpeg',  caption: 'Panel Installation' },
      { url: '/images/sheathing_3.jpeg',  caption: 'Sheathing Detail' },
      { url: '/images/sheathing_4.jpeg',  caption: 'Commercial Sheathing' },
      { url: '/images/sheathing_5.jpeg',  caption: 'Exterior Sheathing' },
      { url: '/images/sheathing_6.jpeg',  caption: 'Roof Sheathing' },
      { url: '/images/sheathing_7.jpeg',  caption: 'Sheathing System' },
      { url: '/images/sheathing_8.jpeg',  caption: 'Panel System' },
      { url: '/images/sheathing_9.jpeg',  caption: 'Sheathing Installation' },
      { url: '/images/sheathing_10.jpeg', caption: 'Sheathing Finish' },
    ],
  },
  {
    id: 'trusses',
    title: 'Trusses',
    icon: TradeIcons.trusses,
    description: 'Engineered truss installation for strong, dependable structural performance.',
    images: [
      { url: '/images/trusses_1.jpeg', caption: 'Truss Installation' },
      { url: '/images/trusses_2.jpeg', caption: 'Roof Truss Structure' },
      { url: '/images/trusses_3.jpeg', caption: 'Truss Framework' },
      { url: '/images/trusses_4.jpeg', caption: 'Engineered Trusses' },
      { url: '/images/trusses_5.jpeg', caption: 'Truss Detail' },
      { url: '/images/trusses_6.jpeg', caption: 'Roof Structure' },
      { url: '/images/trusses_7.jpeg', caption: 'Truss System' },
      { url: '/images/trusses_8.jpeg', caption: 'Ceiling Joists' },
    ],
  },
  {
    id: 'stucco',
    title: 'Stucco',
    icon: TradeIcons.stucco,
    description: 'Durable and visually appealing stucco applications for exterior protection and finish.',
    images: [
      { url: '/images/stucco_1.jpeg', caption: 'Exterior Stucco Texture' },
      { url: '/images/stucco_2.jpeg', caption: 'Luxury Home Exterior' },
      { url: '/images/stucco_3.jpeg', caption: 'Residential Construction' },
      { url: '/images/stucco_4.jpeg', caption: 'Residential Construction' },
      { url: '/images/stucco_5.jpeg', caption: 'Interior Stucco Wall' },
      { url: '/images/stucco_6.jpeg', caption: 'Exterior Corner Detail' },
      { url: '/images/stucco_7.jpeg', caption: 'Large Scale Construction' },
      { url: '/images/stucco_8.jpeg', caption: 'Stucco & Metal Framing' },
    ],
  },
  {
    id: 'insulation',
    title: 'Insulation',
    icon: TradeIcons.insulation,
    description: 'Energy-efficient insulation solutions for residential and commercial properties.',
    images: [
      { url: '/images/img_20.jpeg', caption: 'Insulation Installation' },
      { url: '/images/img_48.jpeg', caption: 'Wall Insulation' },
      { url: '/images/img_5.jpeg',  caption: 'Commercial Insulation' },
    ],
  },
  {
    id: 'hanging',
    title: 'Hanging',
    icon: TradeIcons.hanging,
    description: 'Professional drywall and hanging services completed with precision and efficiency.',
    images: [
      { url: '/images/hanging_1.jpeg', caption: 'Drywall Hanging' },
      { url: '/images/hanging_2.jpeg', caption: 'Panel Installation' },
      { url: '/images/hanging_3.jpeg', caption: 'Ceiling Hanging' },
      { url: '/images/hanging_4.jpeg', caption: 'Sheetrock Detail' },
      { url: '/images/hanging_5.jpeg', caption: 'Wall Hanging' },
      { url: '/images/hanging_6.jpeg', caption: 'Commercial Hanging' },
      { url: '/images/hanging_7.jpeg', caption: 'Precision Hanging' },
      { url: '/images/hanging_8.jpeg', caption: 'Hanging Finish' },
    ],
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
