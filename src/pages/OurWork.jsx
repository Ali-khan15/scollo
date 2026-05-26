import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Subpages.css';

const ALL_PROJECTS = [
  { id: 1, cat: 'Hospitality',  title: 'Circa Resort & Casino',                loc: 'Las Vegas, NV',      img: 'https://www.mccarthy.com/sites/default/files/2023-03/Circa-Resort-133.jpg',             h: 560 },
  { id: 2, cat: 'Healthcare',   title: 'Loma Linda Medical Center',             loc: 'Loma Linda, CA',     img: 'https://www.mccarthy.com/sites/default/files/2023-04/Loma-Linda-Campus-5.jpg',          h: 560 },
  { id: 3, cat: 'Energy',       title: 'Renewable Energy Campus',               loc: 'Phoenix, AZ',        img: 'https://www.mccarthy.com/sites/default/files/2023-05/NorPac_Core_3E6A0740.jpg',         h: 400 },
  { id: 4, cat: 'Education',    title: 'South Mountain Community College',      loc: 'Phoenix, AZ',        img: 'https://www.mccarthy.com/sites/default/files/2024-07/South-Mountain-CC-08.jpg',         h: 400 },
  { id: 5, cat: 'Sports',       title: 'Allegiant Stadium',                     loc: 'Las Vegas, NV',      img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x916.jpg',                     h: 560 },
  { id: 6, cat: 'Healthcare',   title: 'Banner Health Center',                  loc: 'Tucson, AZ',         img: 'https://www.mccarthy.com/sites/default/files/2023-03/478x600-2.jpg',                   h: 400 },
  { id: 7, cat: 'Education',    title: 'UCSB Student Resource Building',        loc: 'Santa Barbara, CA',  img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x532.jpg',                     h: 400 },
  { id: 8, cat: 'Energy',       title: 'Sonoran Solar Energy Center',           loc: 'Tempe, AZ',          img: 'https://www.mccarthy.com/sites/default/files/2024-07/CONFIDENTIAL_SO-Core_8206.jpg',    h: 400 },
];

const CATEGORIES = ['All Projects', 'Hospitality', 'Healthcare', 'Education', 'Energy', 'Sports'];

const OurWork = () => {
  const [active, setActive] = useState('All Projects');

  const filtered = active === 'All Projects'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.cat === active);

  return (
    <>
      {/* Hero Banner */}
      <section className="subpage-hero">
        <div className="container">
          <span className="eyebrow">Our Portfolio</span>
          <h1>Building the <span className="grad-text">Best Outcomes</span> For All Project Stakeholders</h1>
          <p>We combine expertise, process innovation and technology into services that proactively identify and address challenges — saving time and money on every project.</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="ourwork-masonry">
            {filtered.map((p, i) => {
              const cardClass = i === 0 ? 'ow-card-1' : i === 1 ? 'ow-card-2' : (i % 3 === 2 ? 'ow-card-wide' : 'ow-card-half');
              return (
                <div
                  key={p.id}
                  className={`project-card ${cardClass}`}
                >
                  <div className="project-bg" style={{ backgroundImage: `url(${p.img})` }}>
                  </div>
                  <div className="project-overlay" />
                  <div className="project-content">
                    <span className="cat-tag">{p.cat}</span>
                    <h3>{p.title}</h3>
                    <p>{p.loc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="pagination">
            {['01','02','03'].map((n, i) => (
              <button key={n} className={`pg-btn ${i === 0 ? 'active' : ''}`}>{n}</button>
            ))}
            <span style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>...</span>
            <Link to="/our-work" className="pg-next">Next Page →</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
