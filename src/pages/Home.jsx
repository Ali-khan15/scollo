import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { TradeIcons } from '../components/TradeIcons';
import { HomeIcon, ShieldCheckIcon, ArrowRightIcon, MissionIcon } from '../components/Icons';
import './Home.css';

/* ── Scroll-reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  });
}

/* ── Stats counter ── */
function useCounter(end, duration = 1800, start = false) {
  const ref = useRef(null);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = Math.floor(eased * end).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return ref;
}

function StatCounter({ value, suffix = '', label }) {
  const [started, setStarted] = React.useState(false);
  const elRef = useCounter(value, 1800, started);
  const wrapRef = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); io.disconnect(); } },
      { threshold: 0.5 }
    );
    if (wrapRef.current) io.observe(wrapRef.current);
    return () => io.disconnect();
  }, []);
  return (
    <div className="stat-item" ref={wrapRef}>
      <span className="stat-number"><span ref={elRef}>0</span>{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ── Data ── */
const PROJECTS = [
  { cat: 'Framing',    title: 'Luxury Residential Framing',    loc: 'Jacksonville, FL',    img: '/images/project_framing.jfif',    cls: 'p-card-1' },
  { cat: 'Stucco',     title: 'Commercial Stucco Exterior',    loc: 'Miami, FL',           img: '/images/project_stucco.jfif',     cls: 'p-card-2' },
  { cat: 'Sheathing',  title: 'Commercial Wall Sheathing',     loc: 'Tampa, FL',           img: '/images/project_sheathing.jfif',  cls: 'p-card-3' },
  { cat: 'Insulation', title: 'Residential Insulation',        loc: 'Orlando, FL',         img: '/images/project_insulation.jfif', cls: 'p-card-4' },
  { cat: 'Finishing',  title: 'Government Building Finishing', loc: 'Fort Lauderdale, FL', img: '/images/project_finishing.jfif',  cls: 'p-card-5' },
];

const SERVICES = [
  { icon: TradeIcons.framing,    title: 'Framing',    desc: 'Precision structural framing solutions for commercial and residential construction projects.' },
  { icon: TradeIcons.finishing,  title: 'Finishing',  desc: 'Professional finishing services focused on craftsmanship, detail, and long-lasting quality.' },
  { icon: TradeIcons.backing,    title: 'Backing',    desc: 'Reliable backing installation solutions designed for structural support and durability.' },
  { icon: TradeIcons.sheathing,  title: 'Sheathing',  desc: 'High-quality wall and roof sheathing systems installed to industry standards.' },
  { icon: TradeIcons.trusses,    title: 'Trusses',    desc: 'Engineered truss installation for strong, dependable structural performance.' },
  { icon: TradeIcons.stucco,     title: 'Stucco',     desc: 'Durable and visually appealing stucco applications for exterior protection and finish.' },
  { icon: TradeIcons.insulation, title: 'Insulation', desc: 'Energy-efficient insulation solutions for residential and commercial properties.' },
  { icon: TradeIcons.hanging,    title: 'Hanging',    desc: 'Professional drywall and hanging services completed with precision and efficiency.' },
];

const WHY_US = [
  {
    badge: '20+',
    title: '20+ Years of Experience',
    desc: 'Decades of experience across luxury residential, commercial, and government construction projects.',
  },
  {
    badge: <HomeIcon size={22} />,
    title: 'Florida Born & Family Owned',
    desc: 'A local company deeply connected to the Florida community and committed to its growth.',
  },
  {
    badge: <ShieldCheckIcon size={22} />,
    title: 'Licensed & Accountable',
    desc: 'State licensed professionals focused on safety, quality, and doing things the right way.',
  },
  {
    badge: '12',
    title: 'Warranty Backed Work',
    desc: 'All projects include a 12-month workmanship warranty for complete peace of mind.',
  },
];

/* ════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════ */
const Home = () => {
  useReveal();

  return (
    <>
      {/* ── 1. HERO ── */}
      <Hero />

      {/* ── 2. ABOUT / WHO WE ARE ── */}
      <section className="who-section">
        <div className="container">
          <div className="who-inner">
            <div className="who-text reveal-left">
              <span className="eyebrow">Who We Are</span>
              <h2>Built on <span className="grad-text">Family Values.</span> Driven by Quality.</h2>
              <p>
                For more than 20 years, Scollo Construction has delivered high-quality residential,
                commercial, and government construction projects throughout Florida.
              </p>
              <p>
                As a family-based company with deep ties to the community, we believe in accountability,
                professionalism, and doing things the right way. Florida means everything to us, and our
                mission is to help it grow through dependable construction services built on trust.
              </p>
              <p>
                All completed projects are backed by a <strong>12-month workmanship warranty</strong> in
                accordance with Florida building code requirements.
              </p>
              <Link to="/about" className="btn-primary">Learn About Us</Link>
            </div>
            <div className="who-mosaic reveal-right">
              <div className="who-mosaic-item tall" style={{ backgroundImage: 'url(/images/img_43.jpeg)' }} />
              <div className="who-mosaic-item" style={{ backgroundImage: 'url(/images/img_20.jpeg)' }} />
              <div className="who-mosaic-item" style={{ backgroundImage: 'url(/images/img_12.jpeg)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. STATS ── */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCounter value={20}  suffix="+"    label="Years of Excellence" />
            <StatCounter value={100} suffix="+"    label="Projects Completed" />
            <StatCounter value={1}   suffix=""     label="State Licensed Company" />
            <StatCounter value={12}  suffix=" Mo"  label="Workmanship Warranty" />
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED WORK ── */}
      <section className="featured-work-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Our Recent Projects</span>
            <h2>Our <span className="grad-text">Recent Projects</span></h2>
            <p>
              Explore recent framing, stucco, insulation, sheathing, and finishing projects
              completed throughout Florida.
            </p>
          </div>
        </div>
        <div className="container" style={{ paddingBottom: 0 }}>
          <div className="projects-masonry">
            {PROJECTS.map((p, i) => (
              <Link to="/gallery" key={i} className={`p-card ${p.cls}`}>
                <div className="p-card-bg" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="p-card-overlay" />
                <div className="p-card-info">
                  <span className="p-card-cat">{p.cat}</span>
                  <div className="p-card-title">{p.title}</div>
                  <div className="p-card-loc">{p.loc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="featured-work-cta">
          <Link to="/gallery" className="btn-primary">View All Projects</Link>
        </div>
      </section>

      {/* ── 5. SERVICES OVERVIEW ── */}
      <section className="solving-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">What We Do</span>
            <h2><span className="grad-text">Our Construction Services</span></h2>
            <p>We provide professional commercial and residential construction services across Florida.</p>
          </div>
          <div className="solving-grid">
            {SERVICES.map((s, i) => (
              <div className="solving-card" key={i}>
                <div className="solving-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/our-services" className="learn-link">Learn More <ArrowRightIcon size={14} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TRUST SECTION ── */}
      <section className="trust-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Contractors &amp; Clients Trust <span className="grad-text">Scollo Construction</span></h2>
          </div>
          <div className="trust-grid">
            {[
              { badge: '20+', title: '20+ Years Experience', desc: 'Serving Florida with proven construction expertise across residential, commercial, and government projects.' },
              { badge: '🏠', title: 'Family-Owned Business', desc: 'Built on trust, relationships, and community values rooted in over two decades of Florida construction.' },
              { badge: '✓', title: 'State Licensed', desc: 'Committed to quality, safety, and full accountability on every project we undertake.' },
              { badge: '↕', title: 'Jacksonville to Miami', desc: 'Serving clients throughout the entire state of Florida with dependable construction services.' },
              { badge: '12', title: '12-Month Warranty', desc: 'Standing behind every completed project with a full workmanship warranty for peace of mind.' },
            ].map((item, i) => (
              <div className="trust-card reveal" key={i}>
                <span className="trust-card-badge">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHY CHOOSE US ── */}
      <section className="home-approach-section">
        <div className="home-approach-image">
          <img src="/images/img_63.jpeg" alt="Scollo Construction team at work in Florida" />
        </div>
        <div className="home-approach-content reveal-right">
          <span className="eyebrow">Why Choose Us</span>
          <h2>Why Contractors &amp; Clients Trust <span style={{ color: 'var(--primary-gold)' }}>Scollo Construction</span></h2>
          <div className="why-blocks">
            {WHY_US.map((item, i) => (
              <div className="why-block" key={i}>
                <span className="why-block-badge">{item.badge}</span>
                <div className="why-block-body">
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/get-quote" className="btn-primary">Request Consultation</Link>
        </div>
      </section>

      {/* ── 7. FAMILY-ORIENTED SECTION ── */}
      <section className="family-section reveal">
        <div className="container">
          <div className="family-inner">
            <div className="family-text">
              <span className="eyebrow">Our Story</span>
              <h2>Family-Owned. <span className="grad-text">Florida Proud.</span></h2>
              <p>
                Scollo Construction is more than a construction company — we are a Florida family
                with deep roots in the communities we serve.
              </p>
              <p>
                For over 20 years, our family has been committed to helping Florida grow through
                quality construction, honest business practices, and strong community relationships.
              </p>
              <p>
                We believe that every project deserves the same care, attention, and accountability
                that we would expect for our own family. Those values guide everything we do —
                from luxury residential homes to commercial developments and government projects
                throughout Florida.
              </p>
              <Link to="/about" className="btn-primary">Our Story</Link>
            </div>
            <div className="family-image">
              <div className="family-img-placeholder">
                <span>Family Photo Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. MISSION STATEMENT ── */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-inner reveal">
            <div className="mission-icon-wrap">
              <MissionIcon size={48} />
            </div>
            <span className="eyebrow">Our Mission</span>
            <h2>Built on Purpose. <span className="grad-text">Driven by Values.</span></h2>
            <p className="mission-statement">
              Our mission is to provide exceptional commercial and residential construction services
              throughout Florida while building lasting relationships based on trust, accountability,
              family values, and quality craftsmanship.
            </p>
            <p className="mission-sub">
              We are committed to delivering projects that stand the test of time, supporting the
              communities we serve, and maintaining the highest standards of professionalism in
              every project we undertake. As a Florida-born company, we take pride in helping
              shape the future of our state through responsible construction and long-term
              community involvement.
            </p>
          </div>
        </div>
      </section>

      {/* ── 9. COMMUNITY / FLORIDA CTA ── */}
      <section className="community-section">
        <div className="community-bg" style={{ backgroundImage: 'url(/images/img_92.jpeg)' }} />
        <div className="community-overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 5 }}>
          <div className="community-content reveal">
            <span className="eyebrow">Our Community</span>
            <h2>Building Florida the Right Way</h2>
            <p>
              Scollo Construction takes pride in being part of Florida's grassroots community.
              We believe strong communities are built through accountability, trust, and quality
              workmanship that lasts for generations.
            </p>
            <p style={{ marginTop: '16px', color: 'rgba(255,255,255,0.75)', fontSize: '1.7rem', lineHeight: 1.6 }}>
              Our goal is not only to build structures — but to become a lasting pillar within
              the communities we serve.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '36px' }}>
              <Link to="/gallery"   className="btn-primary">View Our Work</Link>
              <Link to="/get-quote" className="btn-primary" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff' }}>Request Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. CONTACT CTA ── */}
      <section style={{ backgroundColor: '#ffffff', padding: '100px 0', textAlign: 'center' }}>
        <div className="container reveal">
          <span className="eyebrow" style={{ color: 'var(--primary-gold)', display: 'block', marginBottom: '16px' }}>Get In Touch</span>
          <h2 style={{ fontSize: 'clamp(3.2rem, 5vw, 5.2rem)', textTransform: 'uppercase', marginBottom: '24px', lineHeight: 1.05 }}>
            Let's Build Something <span className="grad-text">That Lasts</span>
          </h2>
          <p style={{ fontSize: '1.8rem', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Whether you're planning a commercial development, luxury residential build, or government
            project, Scollo Construction is ready to deliver dependable results backed by experience
            and professionalism.
          </p>
          <Link to="/get-quote" className="btn-primary">Request Consultation</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
