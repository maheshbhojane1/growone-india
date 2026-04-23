import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bgGrid}></div>
      <div className={styles.bgLeaves}>🌾</div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          Trusted by 50,000+ Farmers Across India
        </div>

        <h1 className={styles.heading}>
          Nourish the <em>Soil,</em><br />Feed the Nation
        </h1>

        <p className={styles.subText}>
          GrowOne India brings next-generation bio-organic fertilizers crafted from nature's finest nutrients —
          designed to maximize your yield, enrich your soil, and protect the planet for future generations.
        </p>

        <div className={styles.btns}>
          <button className={styles.btnPrimary} onClick={() => navigate('/products')}>
            🛒 Shop Products
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('about-preview')}>
            Who We Are ↓
          </button>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNum}>50K+</div>
            <div className={styles.statLbl}>Active Farmers</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>18</div>
            <div className={styles.statLbl}>Product Range</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>12+</div>
            <div className={styles.statLbl}>Years of Trust</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>4.8★</div>
            <div className={styles.statLbl}>Avg Rating</div>
          </div>
        </div>
      </div>

      <div className={styles.floatCard}>
        <h3>🌱 Why GrowOne?</h3>
        {[
          ['🧪', '100% Bio-Organic Formula'],
          ['🌾', 'Proven 40% Yield Increase'],
          ['♻️', 'Eco-Certified & Sustainable'],
          ['🚜', 'Works on All Soil Types'],
          ['📞', '24/7 Agronomist Support'],
        ].map(([icon, text]) => (
          <div key={text} className={styles.featurePill}>
            <span className={styles.pillIcon}>{icon}</span>
            <span className={styles.pillText}>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
