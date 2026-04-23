import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 350);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logoWrap}>
            <div className={styles.logoIcon}>🌱</div>
            <div className={styles.logoText}>
              GrowOne India
              <span>Est. 2012 · Pune, MH</span>
            </div>
          </Link>
          <p>Nourishing Indian farms with science-backed, eco-certified bio-organic fertilizers since 2012. From Pune to the paddy fields of Punjab — we grow with you.</p>
          <div className={styles.socials}>
            <a className={styles.socialBtn} href="#facebook" aria-label="Facebook">📘</a>
            <a className={styles.socialBtn} href="#instagram" aria-label="Instagram">📸</a>
            <a className={styles.socialBtn} href="#twitter" aria-label="Twitter">🐦</a>
            <a className={styles.socialBtn} href="#youtube" aria-label="YouTube">▶️</a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Products</h4>
          <Link to="/products">All Products</Link>
          <Link to="/products">Bio-Organic Range</Link>
          <Link to="/products">NPK Blends</Link>
          <Link to="/products">Micronutrients</Link>
          <Link to="/products">Specialty Crops</Link>
        </div>

        <div className={styles.col}>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <button onClick={() => scrollTo('reviews')}>Reviews</button>
          <a href="#careers">Careers</a>
          <a href="#press">Press & Media</a>
          <button onClick={() => scrollTo('notify')}>Contact Us</button>
        </div>

        <div className={styles.col}>
          <h4>Support</h4>
          <button onClick={() => scrollTo('terms')}>Terms & Conditions</button>
          <a href="#privacy">Privacy Policy</a>
          <a href="#shipping">Shipping Policy</a>
          <a href="#returns">Return Policy</a>
          <button onClick={() => scrollTo('notify')}>WhatsApp Help</button>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© 2025 GrowOne India Pvt. Ltd. All rights reserved. | CIN: U01111MH2012PTC234567</span>
        <span>Made with 🌱 in Pune, India</span>
      </div>
    </footer>
  );
}
