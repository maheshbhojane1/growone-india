import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './About.module.css';

const TIMELINE = [
  { year: '2012', text: 'Founded in Baramati by Dr. Arvind Kulkarni. First product: SoilRevive Organic.' },
  { year: '2014', text: 'Received NPOP organic certification. Expanded to 3 districts of Maharashtra.' },
  { year: '2016', text: 'Launched GoldHarvest NPK range. Crossed ₹1 Crore revenue milestone.' },
  { year: '2018', text: 'Pan-Maharashtra distribution. Launched Kisan Savings Plan. 10,000 farmers served.' },
  { year: '2020', text: 'ISO 9001 & 14001 certified. Expanded to Karnataka, MP, and Gujarat.' },
  { year: '2022', text: 'Won Kisan Ratna Award. Launched WhatsApp Agronomist Helpline. 30,000+ farmers.' },
  { year: '2024', text: '50,000+ farmers. 12 products. 19 states. ₹38 Crore revenue. Building new R&D lab.' },
];

const TEAM = [
  { initials: 'AK', color: 'var(--green-600)', name: 'Dr. Arvind Kulkarni', role: 'Founder & CEO', bio: 'PhD in Agronomy (IARI). 22 years in soil science. Recipient of Kisan Ratna Award 2023. Father of two farmers.' },
  { initials: 'SP', color: 'var(--earth-700)', name: 'Sunanda Patil', role: 'COO & Co-Founder', bio: 'MBA (IIM Pune). 16 years in agri supply chain. Built GrowOne\'s distribution network across 19 states.' },
  { initials: 'RM', color: 'var(--green-800)', name: 'Dr. Rajiv More', role: 'Head of R&D', bio: 'MSc Biochemistry + PhD Plant Nutrition. Leads a 40-person R&D team. Filed 6 patents in bio-organic formulation.' },
  { initials: 'PP', color: '#4a8c5c', name: 'Pooja Pawar', role: 'Head of Farmer Relations', bio: 'Former KVK extension officer. Manages our 50,000-farmer community and the WhatsApp Agronomist program.' },
  { initials: 'VD', color: 'var(--earth-500)', name: 'Vikas Desai', role: 'VP Sales & Marketing', bio: '15 years in agri-input marketing. Grew GrowOne revenue from ₹1 Cr to ₹38 Cr in a decade.' },
  { initials: 'NJ', color: 'var(--green-700)', name: 'Neha Joshi', role: 'Chief Quality Officer', bio: 'M.Sc. Analytical Chemistry. Oversees ISO, NPOP, and ICAR compliance across all three manufacturing units.' },
];

const MISSION = [
  {
    icon: '🎯', title: 'Our Mission', color: 'var(--green-500)',
    text: 'To make world-class bio-organic nutrition accessible and affordable to every Indian farmer — empowering them to increase yield, reduce costs, and farm sustainably for generations.',
  },
  {
    icon: '🔭', title: 'Our Vision', color: 'var(--gold)',
    text: 'A chemical-free India by 2035 — where every farm is a living ecosystem, every soil thrives, and every farmer prospers through sustainable and intelligent farming practices.',
  },
  {
    icon: '💎', title: 'Our Values', color: 'var(--earth-500)',
    text: 'Integrity in science. Compassion for farmers. Respect for the earth. Innovation without shortcuts. Every product that leaves our unit carries these four values within it.',
  },
];

export default function About() {
  const navigate = useNavigate();

  return (
    <main style={{ paddingTop: 72 }}>
      <div className="inner-hero">
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
        <h1>🌱 About GrowOne India</h1>
        <p>Our story, our people, our promise to every Indian farmer.</p>
      </div>

      {/* Story + Timeline */}
      <section className={styles.section} style={{ background: 'var(--white)' }}>
        <div className={styles.storyGrid}>
          <div>
            <div className="section-tag">Our Story</div>
            <h2 className="section-title">
              From One <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Farm</em> to Fifty Thousand
            </h2>
            <p className={styles.para}>
              GrowOne India was born in 2012 in the farms of Baramati, Pune, where our founder{' '}
              <strong>Dr. Arvind Kulkarni</strong> — an agricultural scientist with a PhD from IARI, New Delhi —
              watched his own family struggle with degrading soil quality from years of synthetic fertilizer overuse.
            </p>
            <p className={styles.para}>
              Dr. Kulkarni partnered with local farmers to test bio-organic formulas in real fields. After 3 years of
              R&amp;D and 47 field trials across 6 districts, GrowOne India was formally incorporated in 2012 with a
              single product — <em>SoilRevive Organic</em> — and a vision to restore Indian soil to its natural fertility.
            </p>
            <p className={styles.para}>
              Today, GrowOne India serves over 50,000 farmers across 19 states, employs 280+ people (85% from farming
              communities), and runs 3 manufacturing units certified to ISO and NPOP standards. Our R&amp;D centre in Pune
              houses 40+ agronomists working every day on the next generation of sustainable farm inputs.
            </p>
          </div>

          <div>
            <div className="section-tag">Our Journey</div>
            <h2 className="section-title" style={{ marginBottom: 28 }}>
              12 Years of <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Growth</em>
            </h2>
            <div className={styles.timeline}>
              {TIMELINE.map((t) => (
                <div key={t.year} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineYear}>{t.year}</div>
                  <div className={styles.timelineText}>{t.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className={styles.section} style={{ background: 'var(--cream)' }}>
        <div className="section-tag">What Drives Us</div>
        <h2 className="section-title">
          Mission, Vision &amp; <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Values</em>
        </h2>
        <div className={styles.missionGrid}>
          {MISSION.map((m) => (
            <div key={m.title} className={styles.missionCard} style={{ borderTopColor: m.color }}>
              <div className={styles.missionIcon}>{m.icon}</div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className={styles.section} style={{ background: 'var(--white)' }}>
        <div className="section-tag">Leadership</div>
        <h2 className="section-title" style={{ marginBottom: 36 }}>
          Meet the <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>People</em> Behind GrowOne
        </h2>
        <div className={styles.teamGrid}>
          {TEAM.map((m) => (
            <div key={m.name} className={styles.teamCard}>
              <div className={styles.teamAvatar} style={{ background: m.color }}>{m.initials}</div>
              <div className={styles.teamName}>{m.name}</div>
              <div className={styles.teamRole}>{m.role}</div>
              <div className={styles.teamBio}>{m.bio}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className={styles.awardsSection}>
        <div className={styles.awardsList}>
          {[
            ['🏆', 'Kisan Ratna Award 2023'],
            ['🎖️', 'Best Agri-Startup Maharashtra 2020'],
            ['🌿', 'NPOP Organic Excellence 2019'],
            ['🔬', 'ICAR Innovation Award 2017'],
          ].map(([icon, name]) => (
            <div key={name} className={styles.awardItem}>
              <span className={styles.awardIcon}>{icon}</span>
              <span className={styles.awardName}>{name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
