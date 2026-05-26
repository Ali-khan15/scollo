import React, { useState } from 'react';
import './Subpages.css';

const OFFICES = [
  { region: 'Southwest', city: 'Austin', state: 'TX', addr: '4350 Metric Dr, Austin, TX 78749', phone: '+1 (512) 345-6789', email: 'austin@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-03/478x600-2.jpg' },
  { region: 'Southwest', city: 'Dallas',  state: 'TX', addr: '2801 Network Blvd, Dallas, TX 75039', phone: '+1 (972) 234-5678', email: 'dallas@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x532.jpg' },
  { region: 'Southwest', city: 'Houston', state: 'TX', addr: '2103 CityWest Blvd, Houston, TX 77042', phone: '+1 (713) 456-7890', email: 'houston@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-03/Circa-Resort-133.jpg' },
  { region: 'Southwest', city: 'Phoenix', state: 'AZ', addr: '4600 E Washington St, Phoenix, AZ 85034', phone: '+1 (602) 567-8901', email: 'phoenix@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2024-07/South-Mountain-CC-08.jpg' },
  { region: 'Southwest', city: 'Las Vegas', state: 'NV', addr: '8359 Arville St, Las Vegas, NV 89139', phone: '+1 (702) 678-9012', email: 'lasvegas@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x916.jpg' },
  { region: 'Pacific',   city: 'Los Angeles', state: 'CA', addr: '18881 Von Karman Ave, Irvine, CA 92612', phone: '+1 (949) 789-0123', email: 'la@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x1464-2.jpg' },
  { region: 'Pacific',   city: 'San Diego', state: 'CA', addr: '4365 Executive Dr, San Diego, CA 92121', phone: '+1 (858) 890-1234', email: 'sandiego@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-03/968x1464.jpg' },
  { region: 'Pacific',   city: 'San Francisco', state: 'CA', addr: '2000 Sierra Point Pkwy, Brisbane, CA 94005', phone: '+1 (415) 901-2345', email: 'sf@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-03/478x600-3.jpg' },
  { region: 'Central',   city: 'St. Louis', state: 'MO', addr: '1341 N Rock Hill Rd, St. Louis, MO 63124', phone: '+1 (314) 012-3456', email: 'stlouis@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2024-07/CONFIDENTIAL_SO-Core_8206.jpg' },
  { region: 'Central',   city: 'Kansas City', state: 'MO', addr: '8900 Ward Pkwy, Kansas City, MO 64114', phone: '+1 (816) 123-4567', email: 'kc@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-05/NorPac_Core_3E6A0740.jpg' },
  { region: 'East',      city: 'Atlanta', state: 'GA', addr: '3340 Peachtree Rd NE, Atlanta, GA 30326', phone: '+1 (404) 234-5678', email: 'atlanta@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-04/Loma-Linda-Campus-5.jpg' },
  { region: 'East',      city: 'Charlotte', state: 'NC', addr: '214 N Tryon St, Charlotte, NC 28202', phone: '+1 (704) 345-6789', email: 'charlotte@Scollopaintco.com', img: 'https://www.mccarthy.com/sites/default/files/2023-03/1098x452-2.jpg' },
];

const REGIONS = ['All Regions', 'Southwest', 'Pacific', 'Central', 'East'];

const REGION_DATA = [
  { name: 'Southwest', cities: ['Austin', 'Dallas', 'Houston', 'Phoenix', 'Las Vegas'] },
  { name: 'Pacific',   cities: ['Los Angeles', 'San Diego', 'San Francisco', 'Sacramento', 'San Jose'] },
  { name: 'Central',   cities: ['St. Louis', 'Kansas City', 'Omaha'] },
  { name: 'East',      cities: ['Atlanta', 'Charlotte'] },
];

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3-8.57A2 2 0 012.18 1H5.17a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);

const Offices = () => {
  const [activeRegion, setActiveRegion] = useState('All Regions');

  const filtered = activeRegion === 'All Regions'
    ? OFFICES
    : OFFICES.filter(o => o.region === activeRegion);

  return (
    <>
      {/* Map Hero */}
      <section className="map-hero" style={{ position: 'relative' }}>
        <div className="map-bg" />
        <div className="map-hero-overlay" />
        <div className="container">
          <div className="map-hero-content">
            <span className="eyebrow">Where We Build</span>
            <h2>National Reach, Local Focus</h2>
            <p>As a community-based builder with national expertise, we are able to nimbly cover the entire U.S. — and positively impact every community where we build.</p>
          </div>
        </div>
      </section>

      {/* Region list */}
      <section className="region-section">
        <div className="container">
          <div className="regions-list">
            {REGION_DATA.map(r => (
              <div className="region-col" key={r.name}>
                <h3>{r.name}</h3>
                <ul>
                  {r.cities.map(c => (
                    <li key={c}><a href={`#${c.toLowerCase().replace(/\s/g,'-')}`}>{c}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Cards */}
      <section className="office-cards-section">
        <div className="container">
          {/* Filter */}
          <div className="state-filter">
            <label htmlFor="region-select">Filter by Region:</label>
            <select
              id="region-select"
              value={activeRegion}
              onChange={e => setActiveRegion(e.target.value)}
            >
              {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          <div className="offices-grid">
            {filtered.map(o => (
              <div className="office-card" key={o.city} id={o.city.toLowerCase().replace(/\s/g,'-')}>
                <div className="office-card-bg" style={{ backgroundImage: `url(${o.img})` }} />
                <div className="office-card-overlay" />
                <div className="office-card-info">
                  <h3>{o.city}, {o.state}</h3>
                  <div className="office-meta">{o.addr}</div>
                  <div className="office-contact-links">
                    <a href={`tel:${o.phone}`}><PhoneIcon /> {o.phone}</a>
                    <a href={`mailto:${o.email}`}><MailIcon /> Email</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Offices;
