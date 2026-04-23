import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
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
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <div className={styles.logoIcon}> <a href="./assets/logo.png"></a></div>

        <div className={styles.logoText}>
          GrowOne India
          <span>Est. 2012 · Pune, Maharashtra</span>
        </div>
      </Link>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <Link to="/products" className={styles.link}>Products</Link>
        <Link to="/about" className={styles.link}>About Us</Link>
        <button className={styles.linkBtn} onClick={() => scrollToSection('reviews')}>Reviews</button>
        <button className={styles.linkBtn} onClick={() => scrollToSection('terms')}>Terms & Conditions</button>
        <button className={`${styles.linkBtn} ${styles.cta}`} onClick={() => scrollToSection('notify')}>
          🔔 Notify Me
        </button>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
        <span className={menuOpen ? styles.barOpen : ''}></span>
      </button>
    </nav>
  );
}
