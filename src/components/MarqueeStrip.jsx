import React from 'react';
import styles from './MarqueeStrip.module.css';

const ITEMS = [
  'GrowOne India', 'Bio-Organic Certified', 'ISO 14001 : 2015',
  'NPOP Certified', 'Made in India', '50,000+ Farmers',
  'Pune, Maharashtra', 'Soil Health Champions',
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className={styles.strip}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
