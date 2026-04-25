import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import products from '../data/products';
import styles from './ProductDetail.module.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const showToast = useToast();
  const product = products.find((p) => p.id === parseInt(id));

  const [activeTab, setActiveTab] = useState('desc');
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <main style={{ paddingTop: 72, padding: '120px 5%', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <button className="btn-primary" onClick={() => navigate('/products')} style={{ marginTop: 20 }}>
          Back to Products
        </button>
      </main>
    );
  }

  const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 ? '½' : '');

  const scrollToNotify = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  };

  return (
    <main style={{ paddingTop: 72 }}>
      <div className="inner-hero">
        <button className="back-btn" onClick={() => navigate('/products')}>← Back to Products</button>
        <h1>{product.name}</h1>
        <p>{product.cat.toUpperCase()} · GrowOne India</p>
      </div>

      <div className={styles.wrap}>
        <div className={styles.grid}>
          {/* Left column */}
          <div>
            {/* <div className={styles.imgBox} style={{ background: product.colorBg }}>
              <span className={styles.imgEmoji}>{product.emoji}</span>
            </div> */}
            <div className={styles.imgBox}>
  {product.image ? (
    <img
      src={product.image}
      alt={product.name}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        padding: '16px',
        borderRadius: '20px',
      }}
    />
  ) : (
    <span style={{ fontSize: '9rem' }}>{product.emoji}</span>
  )}
</div>
            <div className={styles.glanceBox}>
              <div className={styles.glanceTitle}>At a Glance</div>
              <div className={styles.glanceGrid}>
                {product.glance.map((g) => (
                  <div key={g} className={styles.glancePill}>{g}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className={styles.stars}>{stars}</div>
            {/* <div className={styles.ratingCount}>
              {product.rating}/5 ({product.reviews.toLocaleString('en-IN')} reviews)
            </div>
            <div className={styles.price}>
              {product.price} <sub>/ {product.unit}</sub>
            </div> */}

            {/* Tabs */}
            <div className={styles.tabs}>
              {[
                { key: 'desc', label: 'Description' },
                { key: 'how', label: 'How to Use' },
                { key: 'specs', label: 'Specs' },
              ].map((t) => (
                <button
                  key={t.key}
                  className={`${styles.tab} ${activeTab === t.key ? styles.tabActive : ''}`}
                  onClick={() => setActiveTab(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className={styles.tabContent}>
              {activeTab === 'desc' && <p>{product.desc}</p>}
              {activeTab === 'how' && (
                <ul className={styles.howList}>
                  {product.how.map((h) => <li key={h}>{h}</li>)}
                </ul>
              )}
              {activeTab === 'specs' && (
                <table className={styles.specsTable}>
                  <tbody>
                    {Object.entries(product.specs).map(([k, v]) => (
                      <tr key={k}>
                        <td className={styles.specKey}>{k}</td>
                        <td><strong>{v}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Qty + CTA */}
            <div className={styles.purchase}>
              <div className={styles.qtyLabel}>Quantity</div>
              <div className={styles.qtyControl}>
                <button className={styles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <span className={styles.qtyNum}>{qty}</span>
                <button className={styles.qtyBtn} onClick={() => setQty(qty + 1)}>+</button>
                <span className={styles.qtyUnit}>{product.unit}</span>
              </div>
              <div className={styles.ctaRow}>
                <button
                  className={styles.addToCart}
                  onClick={() => showToast('🛒 Added to cart! Connect on WhatsApp to confirm.')}
                >
                  🛒 Add to Cart
                </button>
                <button className="btn-outline" onClick={scrollToNotify}>
                  💬 WhatsApp Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
