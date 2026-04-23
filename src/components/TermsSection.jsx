import React from 'react';
import styles from './TermsSection.module.css';

const TERMS = [
  {
    icon: '🛒',
    title: 'Purchase & Ordering',
    items: [
      'All orders are subject to product availability and confirmation via WhatsApp/email within 24 hours.',
      'Prices are inclusive of GST (18%). Freight charges apply for orders below ₹2,000.',
      'Bulk orders (above 100 kg) require advance payment of 30%.',
      'GrowOne India reserves the right to cancel fraudulent or suspicious orders.',
      'Seasonal pricing may vary without prior notice; offers are time-limited.',
    ],
  },
  {
    icon: '🚛',
    title: 'Shipping & Delivery',
    items: [
      'Delivery timelines: 2–5 business days for Maharashtra; 5–9 days for other states.',
      'Free shipping on orders above ₹3,500 (within India only).',
      'We are not liable for delays caused by acts of nature, strikes, or government restrictions.',
      'Products must be inspected upon delivery. Damage claims must be raised within 48 hours.',
    ],
  },
  {
    icon: '🔄',
    title: 'Returns & Refunds',
    items: [
      'Unopened products may be returned within 7 days of delivery with original packaging.',
      'Opened products are non-returnable unless found defective upon testing.',
      'Refunds are processed within 7–10 business days to the original payment method.',
      'Defective product claims require photo/video evidence and lot number from the package.',
    ],
  },
  {
    icon: '🔐',
    title: 'Privacy & Data',
    items: [
      'We collect name, phone, and location only for service and delivery purposes.',
      'Your data is never sold to third parties or advertisers.',
      'WhatsApp communications are used solely for order/query resolution.',
      'You may request deletion of your data by emailing privacy@growindia.in anytime.',
    ],
  },
];

export default function TermsSection() {
  return (
    <section className={styles.section} id="terms">
      <div className={styles.header}>
        <div className="section-tag">Legal</div>
        <h2 className="section-title">
          Terms &amp; <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Conditions</em>
        </h2>
        <p className="section-sub">
          Please read these terms before purchasing or using GrowOne India products.
        </p>
      </div>
      <div className={styles.grid}>
        {TERMS.map((t) => (
          <div key={t.title} className={styles.card}>
            <h3>{t.icon} {t.title}</h3>
            <ul>
              {t.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
