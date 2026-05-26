import React from 'react';
import { Link } from 'react-router-dom';
import './Subpages.css';

const PILLARS = [
  {
    title: 'Virtual Design & Construction',
    desc: 'Cutting-edge BIM and VDC tools allow our teams to model, coordinate, and simulate every detail of a project — eliminating surprises before they become problems in the field.',
    icon: <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>,
  },
  {
    title: 'Prefabrication',
    desc: 'By shifting work off-site to controlled environments, we increase safety, enhance quality, and reduce schedule variability with precision-built assemblies.',
    icon: <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
  },
  {
    title: 'Self-Perform',
    desc: 'Self-perform is foundational to who we are. By directly managing concrete, earthwork, and mechanical, we control the schedule and set the standard for safety and quality.',
    icon: <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>,
  },
  {
    title: 'Sustainability',
    desc: 'From LEED certification to net-zero targets, our teams track environmental impact from day one and deliver buildings that meet tomorrow\'s sustainability standards.',
    icon: <svg viewBox="0 0 24 24"><path d="M12 22c4.97 0 9-3.58 9-8 0-4.95-5-8-9-10C8 6 3 9.05 3 14c0 4.42 4.03 8 9 8z"/></svg>,
  },
  {
    title: 'Quality',
    desc: 'Rigorous pre-installation meetings, mock-ups, and continuous inspections ensure that every structure is built precisely as designed, reducing rework and ensuring durability.',
    icon: <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>,
  },
  {
    title: 'Safety Leadership',
    desc: 'The most important thing we do every day is safety. Our commitment to an injury-free environment means empowering every worker to stop unsafe work, no questions asked.',
    icon: <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    title: 'Technology & Innovation',
    desc: 'Fully integrated technology for better project outcomes. From drone surveying to AI-assisted scheduling, we combine innovation with proven construction practices.',
    icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M20 12h2M2 12h2M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41"/></svg>,
  },
  {
    title: 'Collaborative Delivery',
    desc: 'Through Design-Build and CMAR delivery, we bring the entire team together early to align on goals, optimize design, and lock in budget before construction begins.',
    icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
  },
];

const SPLITS = [
  {
    title: 'Prefabrication',
    desc: 'By shifting work off-site to controlled environments, we increase safety, enhance quality, and reduce schedule variability. Our prefabrication strategies integrate seamlessly with our virtual design and construction tools to ensure exact tolerances are met every time.',
    img: 'https://www.mccarthy.com/sites/default/files/2023-03/1098x452-2.jpg',
    imgLeft: false,
    light: true,
    cta: 'Learn More',
  },
  {
    title: 'Self-Perform Work',
    desc: 'Self-perform is foundational to who we are. By directly managing critical path scopes like concrete, earthwork, and mechanical installations, we control the schedule and set the standard for safety and quality on every project.',
    img: 'https://www.mccarthy.com/sites/default/files/2023-03/478x600-3.jpg',
    imgLeft: true,
    light: false,
    cta: 'Learn More',
  },
  {
    title: 'Technology & Virtual Design',
    desc: 'Fully integrated technology for better project outcomes. We combine expertise, process innovation, and technology into services that proactively identify and address challenges — saving time and money on every project.',
    img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x916.jpg',
    imgLeft: false,
    light: true,
    cta: 'Learn More',
  },
  {
    title: 'Safety: Our #1 Priority',
    desc: 'The most important thing we do every day is safety. Our commitment to creating an injury-free environment means empowering every worker to stop unsafe work and utilizing advanced safety technologies to proactively identify hazards before they occur.',
    img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x1464.jpg',
    imgLeft: true,
    light: false,
    cta: 'Our Safety Culture',
  },
  {
    title: 'Quality Built In, Not Inspected In',
    desc: 'Our quality program is deeply embedded in our culture. Through rigorous pre-installation meetings, mock-ups, and continuous inspections, we ensure that every structure is built precisely as designed — reducing rework and ensuring long-term durability.',
    img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x1464-2.jpg',
    imgLeft: false,
    light: true,
    cta: 'Learn More',
  },
  {
    title: 'Collaborative Delivery Models',
    desc: 'A trusted, collaborative partner focused on your goals. Through Design-Build and Construction Management at Risk, we bring the entire design and construction team together early to align on goals and optimize the design before construction begins.',
    img: 'https://www.mccarthy.com/sites/default/files/2024-07/South-Mountain-CC-08.jpg',
    imgLeft: true,
    light: false,
    cta: 'Delivery Methods',
  },
];

const OurApproach = () => (
  <>
    {/* Hero */}
    <section className="subpage-hero">
      <div className="container">
        <span className="eyebrow">How We Work</span>
        <h1>The Best Way to the Best Outcomes</h1>
        <p>We bring the right people, passion, and resources together to create the best project outcomes. It's not just what we do — it's how we do it.</p>
      </div>
    </section>

    {/* Pillars overview grid */}
    <section className="approach-pillars">
      <div className="container">
        <h2 className="pillar-header">
          Our Approach Pillars
        </h2>
        <div className="pillars-grid">
          {PILLARS.map((p, i) => (
            <div className="pillar-card" key={i}>
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Alternating split sections */}
    {SPLITS.map((s, i) => (
      <section className="split-section" key={i}>
        {s.imgLeft ? (
          <>
            <div className="split-bg" style={{ backgroundImage: `url(${s.img})` }} />
            <div className={`split-content ${s.light ? 'light' : ''}`}>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <a href="#more" className="btn-primary">{s.cta}</a>
            </div>
          </>
        ) : (
          <>
            <div className={`split-content ${s.light ? 'light' : ''}`}>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <a href="#more" className="btn-primary">{s.cta}</a>
            </div>
            <div className="split-bg" style={{ backgroundImage: `url(${s.img})` }} />
          </>
        )}
      </section>
    ))}

    {/* CTA Banner */}
    <section style={{ backgroundColor: 'var(--bg-light)', padding: '100px 0', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(3.6rem,5vw,5.6rem)', textTransform: 'uppercase', marginBottom: '24px' }}>
          Ready to Start Your Next Project?
        </h2>
        <p style={{ fontSize: '2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
          Let's talk about how Scollo Framing and Finish can deliver certainty on your next project.
        </p>
        <a href="#contact" className="btn-primary">Let's Talk</a>
      </div>
    </section>
  </>
);

export default OurApproach;
