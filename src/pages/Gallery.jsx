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
      { url: '/images/trusses_1.jpeg',   caption: 'Truss Installation' },
      { url: '/images/trusses_2.jpeg',   caption: 'Roof Truss Structure' },
      { url: '/images/trusses_3.jpeg',   caption: 'Truss Framework' },
      { url: '/images/trusses_4.jpeg',   caption: 'Engineered Trusses' },
      { url: '/images/trusses_5.jpeg',   caption: 'Truss Detail' },
      { url: '/images/trusses_6.jpeg',   caption: 'Roof Structure' },
      { url: '/images/trusses_7.jpeg',   caption: 'Truss System' },
      { url: '/images/trusses_8.jpeg',   caption: 'Ceiling Joists' },
      { url: '/images/trusses_new_1.jfif', caption: 'Truss Update' },
      { url: '/images/trusses_new_2.jfif', caption: 'Truss Gallery' },
      { url: '/images/trusses_new_3.jfif', caption: 'Truss Gallery' },
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
      { url: '/images/img_20.jpeg',          caption: 'Insulation Installation' },
      { url: '/images/img_48.jpeg',          caption: 'Wall Insulation' },
      { url: '/images/img_5.jpeg',           caption: 'Commercial Insulation' },
      { url: '/images/insulation_new_1.jfif', caption: 'Insulation Detail' },
      { url: '/images/insulation_new_2.jfif', caption: 'Insulation System' },
    ],
  },
  {
    id: 'hanging',
    title: 'Hanging',
    icon: TradeIcons.hanging,
    description: 'Professional drywall and hanging services completed with precision and efficiency.',
    images: [
      { url: '/images/hanging_new_1.jfif', caption: 'Drywall Hanging' },
      { url: '/images/hanging_new_2.jfif', caption: 'Panel Installation' },
      { url: '/images/hanging_new_3.jfif', caption: 'Ceiling Hanging' },
      { url: '/images/hanging_new_4.jfif', caption: 'Sheetrock Detail' },
      { url: '/images/hanging_new_5.jfif', caption: 'Wall Hanging' },
    ],
  },
];

/* ── Responsive visible count ── */
function useVisibleCount() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  });
  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 768) setVisible(1);
      else if (window.innerWidth <= 1100) setVisible(2);
      else setVisible(3);
    };
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return visible;
}

/* ── Service Slider Component ── */
const ServiceSlider = ({ section }) => {
  const VISIBLE = useVisibleCount();
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const touchCurrentX = useRef(null);

  const total = section.images.length;
  const maxIndex = Math.max(0, total - VISIBLE);

  useEffect(() => {
    setCurrent(prev => Math.min(prev, maxIndex));
  }, [VISIBLE, maxIndex]);

  const go = (dir) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDragOffset(0);
    setCurrent(prev => {
      let next = prev + dir;
      if (next > maxIndex) next = 0;
      if (next < 0) next = maxIndex;
      return next;
    });
    setTimeout(() => setIsTransitioning(false), 480);
  };

  // Auto-play
  useEffect(() => {
    if (isPaused || total <= VISIBLE) return;
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [maxIndex, isTransitioning, isPaused, total, VISIBLE]);

  // Touch — track live drag position for real-time feedback
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    touchCurrentX.current = e.touches[0].clientX;
    const rawDiff = touchCurrentX.current - touchStartX.current;
    // Resist dragging past edges
    const atStart = current === 0 && rawDiff > 0;
    const atEnd = current === maxIndex && rawDiff < 0;
    setDragOffset(atStart || atEnd ? rawDiff * 0.2 : rawDiff);
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - (touchCurrentX.current ?? touchStartX.current);
    if (Math.abs(diff) > 50) {
      go(diff > 0 ? 1 : -1);
    } else {
      // Snap back
      setIsTransitioning(true);
      setDragOffset(0);
      setTimeout(() => setIsTransitioning(false), 300);
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
    setIsPaused(false);
  };

  const slideWidthPct = 100 / VISIBLE;
  const baseOffset = -(current * slideWidthPct);
  // Convert pixel drag to percentage of viewport
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 375;
  const dragPct = (dragOffset / viewportWidth) * 100;
  const totalOffset = baseOffset + dragPct;

  const trackStyle = {
    transform: `translate3d(${totalOffset}%, 0, 0)`,
    transition: isTransitioning || dragOffset === 0
      ? 'transform 0.48s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      : 'none',
    willChange: 'transform',
  };

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
            disabled={total <= VISIBLE || isTransitioning}
            aria-label="Previous"
          >
            <ArrowLeftIcon size={18} />
          </button>
          <span className="slider-count">
            {total > 0 ? `${current + 1} / ${total}` : '0 / 0'}
          </span>
          <button
            className="slider-arrow"
            onClick={() => go(1)}
            disabled={total <= VISIBLE || isTransitioning}
            aria-label="Next"
          >
            <ArrowRightIcon size={18} />
          </button>
        </div>
      </div>

      {/* Slider Track */}
      <div
        className="gallery-slider-viewport"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'pan-y' }}
      >
        {section.images.length > 0 ? (
          <div
            className="gallery-slider-track"
            ref={trackRef}
            style={trackStyle}
          >
            {section.images.map((img, i) => (
              <div className="gallery-slide" key={i}>
                <div
                  className="gallery-slide-img"
                  style={{ backgroundImage: `url(${img.url})` }}
                  aria-label={img.caption || 'Gallery Image'}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-slide-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', height: '320px' }}>
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
