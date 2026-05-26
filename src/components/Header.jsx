import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 10) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
      setScrolled(scrollY > 60);
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = (mobileOpen || searchOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen, searchOpen]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/our-services', label: 'Our Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  const headerClass = [
    'Scollo-header',
    scrolled ? 'scrolled' : 'transparent',
    (scrollDirection === 'down' && scrolled && !mobileOpen) ? 'hide' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={headerClass}>
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="/logo.png" alt="Scollo Framing and Finish" className="header-logo-img" />
            </Link>
          </div>

          {/* Primary Nav */}
          <nav className="main-nav" aria-label="Main navigation">
            <ul>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={isActive(to) ? 'active' : ''}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Utility Nav */}
          <div className="utility-nav">
            <button
              className="search-btn"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <Link to="/get-quote" className="contact-btn">Get Quote</Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${mobileOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <ul>
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} onClick={() => setMobileOpen(false)}>{label}</Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a href="/contact-us">Contact Us</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
      </nav>

      {/* Search Overlay */}
      <div className={`search-overlay ${searchOpen ? 'open' : ''}`} role="dialog" aria-label="Search">
        <button className="search-close" onClick={() => setSearchOpen(false)} aria-label="Close search">✕</button>
        <div className="search-overlay-inner">
          <input
            type="text"
            placeholder="Search Scollo Framing and Finish..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus={searchOpen}
            aria-label="Search input"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
