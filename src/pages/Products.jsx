import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import styles from './Products.module.css';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'NPK Blends', value: 'npk' },
  { label: 'Bio-Organic', value: 'organic' },
  { label: 'Micronutrients', value: 'micro' },
  { label: 'Specialty Crops', value: 'specialty' },
];

export default function Products() {
  const [active, setActive] = useState('all');
  const navigate = useNavigate();

  const filtered = active === 'all' ? products : products.filter((p) => p.cat === active);

  return (
    <main style={{ paddingTop: 72 }}>
      <div className="inner-hero">
        <button className="back-btn" onClick={() => navigate('/')}>← Back to Home</button>
        <h1>🛒 All Products</h1>
        <p>12 expertly crafted fertilizers — find the perfect match for your crop, soil type, and season.</p>
      </div>

      <div className={styles.filterBar}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={`${styles.filterBtn} ${active === f.value ? styles.filterActive : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </main>
  );
}
