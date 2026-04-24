import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import MarqueeStrip from '../components/MarqueeStrip';
import ProductCard from '../components/ProductCard';
import NotifySection from '../components/NotifySection';
import TermsSection from '../components/TermsSection';
import products from '../data/products';
import styles from './Home.module.css';
import logoWhite from '../assets/logo-white.svg';


/* ── About Preview ─────────────────────────────── */
function AboutPreview() {
  const navigate = useNavigate();
  return (
    <section className={styles.aboutSection} id="about-preview">
      <div className={styles.aboutGrid}>
        <div className={styles.aboutImgWrap}>
          <div className={styles.aboutImgBox}> 
            <img src={logoWhite} alt="GrowOne India" style={{ height: '42px', width: 'auto' }} />

          </div>
          <div className={styles.aboutFloatTag}>🏆 Kisan Ratna<br />Award 2023</div>
        </div>
        <div>
          {/* <div className="section-tag">About Us</div> */}
          <h2 className="section-title">
            Born from the <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Heart</em> of Indian Farming
          </h2>
          <p className={styles.aboutPara}>
            Founded in 2020 in Pune, GrowOne India started with a simple belief —{' '}
            <strong>every Indian farmer deserves world-class nutrition for their crops without breaking the bank.</strong>{' '}
            We blend traditional Indian agro-wisdom with modern biotechnology.
          </p>
          <p className={styles.aboutParaSm}>
            Our team has developed formulas that work with India's diverse soil — from
            the black cotton soil of Vidarbha to the red laterite of Karnataka. We are not just a fertilizer
            company; we are <em>partners in your harvest.</em> <br /> 
      
             Our mission is to promote sustainable farming by offering eco-friendly products that help farmers improve productivity while maintaining soil health. At GrowOne India, we are committed to contributing toward a future of chemical-free food and environmentally responsible agriculture in India.
          </p>
          <div className={styles.valueGrid}>
            {[
              ['🌿 Organic First', 'Zero synthetic chemicals. Pure bio-nutrition that heals the soil.'],
              ['💡 Research-Driven', 'In-house agronomists continuously refining our formulas.'],
              ['🤝 Farmer-First', 'Affordable pricing, bulk discounts, and crop-specific advice.'],
              ['🌍 Planet Care', 'Reducing chemical runoff, protecting groundwater & biodiversity.'],
            ].map(([title, text]) => (
              <div key={title} className={styles.valueCard}>
                <div className={styles.valueTitle}>{title}</div>
                <div className={styles.valueText}>{text}</div>
              </div>
            ))}
          </div>
          <button className={styles.readMore} onClick={() => navigate('/about')}>
            Read our full story →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ── Products Preview ──────────────────────────── */
function ProductsPreview() {
  const navigate = useNavigate();
  return (
    <section className={styles.productsSection} id="products-home">
      <div className="section-header">
        <div className="section-tag">Our Products</div>
        <h2 className="section-title">
          Fertilizers for Every <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Crop &amp; Season</em>
        </h2>
        <p className="section-sub">
          From nitrogen-boost blends to micronutrient mixes — find the perfect formula for your field.
        </p>
      </div>
      <div className={styles.productsGrid}>
        {products.slice(0, 6).map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
      <div className={styles.viewAll}>
        <button className="btn-primary" onClick={() => navigate('/products')}>
          View All 12 Products →
        </button>
      </div>
    </section>
  );
}

/* ── Why Us ────────────────────────────────────── */
function WhyUs() {
  const WHY = [
    { icon: '🔬', title: 'Lab-Tested Formulas', text: 'Every batch tested across 6 parameters before it leaves our facility in Pune.' },
    { icon: '🚛', title: 'Pan-India Delivery', text: 'Same-day dispatch from 12 warehouses across Maharashtra, UP, Karnataka & MP.' },
    { icon: '📱', title: 'WhatsApp Support', text: 'Connect directly with a qualified agronomist 7 days a week via WhatsApp.' },
    { icon: '💰', title: 'Kisan Savings Plan', text: 'Subscribe seasonally and save up to 35%. Bulk orders get dedicated pricing.' },
  ];
  return (
    <section className={styles.whySection}>
      <div className="section-header">
        <div className="section-tag" style={{ background: 'rgba(93,194,130,0.15)', color: 'var(--green-300)' }}>
          Why Choose Us
        </div>
        <h2 className="section-title" style={{ color: 'white' }}>
          The GrowOne <em style={{ fontStyle: 'italic', color: 'var(--green-400)' }}>Difference</em>
        </h2>
        <p className="section-sub">Science-backed, farmer-proven, planet-friendly — everything your harvest needs.</p>
      </div>
      <div className={styles.whyGrid}>
        {WHY.map((w) => (
          <div key={w.title} className={styles.whyCard}>
            <div className={styles.whyIcon}>{w.icon}</div>
            <h3>{w.title}</h3>
            <p>{w.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Reviews ───────────────────────────────────── */
function ReviewsSection() {
  const REVIEWS = [
    { initials: 'RS', name: 'Ramesh Shinde', loc: 'Kolhapur, Maharashtra', rating: 5, text: "GrowOne's GoldHarvest NPK completely transformed my sugarcane field. I saw a 38% jump in yield this season. This is not marketing — I have compared it with my previous harvests myself." },
    { initials: 'PK', name: 'Prakash Kumar', loc: 'Nashik, Maharashtra', rating: 5, text: 'Meri tomato crop ke liye SoilRevive Organic ne kamaal kar diya. Soil pH bilkul sahi hua aur plants disease-resistant bhi hue. GrowOne se WhatsApp pe guidance bhi milta hai — bahut helpful team!' },
    { initials: 'SP', name: 'Sunita Patil', loc: 'Amravati, Maharashtra', rating: 4, text: 'I have been using GrowOne products for 3 seasons on my cotton farm. The AquaSurge micro-nutrient pack was a game changer during the dry spell. Saved my crop when water was scarce.' },
    { initials: 'VT', name: 'Vikas Thakur', loc: 'Mandi, Himachal Pradesh', rating: 5, text: 'As an organic farmer in Himachal, finding NPOP-certified inputs is very hard. GrowOne\'s BioShield Neem Cake is my go-to. Works as pest deterrent AND soil nutrition. Perfect for apple orchards.' },
    { initials: 'DR', name: 'Dinesh Raut', loc: 'Yavatmal, Maharashtra', rating: 5, text: 'Delivery was super fast — reached my village in Vidarbha within 2 days. Packaging is excellent, no spillage. GrowOne\'s customer service helped me choose the right product for my black soil.' },
    { initials: 'MN', name: 'Meena Nair', loc: 'Thrissur, Kerala', rating: 5, text: 'I switched from chemical fertilizers to GrowOne 2 years ago. Not only is the yield better but my soil health score improved dramatically. I will never go back to chemicals.' },
  ];
  return (
    <section className={styles.reviewsSection} id="reviews">
      <div className="section-header">
        <div className="section-tag">Farmer Reviews</div>
        <h2 className="section-title">
          Real Results from <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Real Farmers</em>
        </h2>
        <p className="section-sub">Straight from the fields — unfiltered feedback from our growing community.</p>
      </div>
      <div className={styles.reviewsGrid}>
        {REVIEWS.map((r) => (
          <div key={r.name} className={styles.reviewCard}>
            <div className={styles.reviewStars}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
            <p className={styles.reviewText}>{r.text}</p>
            <div className={styles.reviewer}>
              <div className={styles.avatar}>{r.initials}</div>
              <div>
                <div className={styles.reviewerName}>
                  {r.name}
                  <span className={styles.verifiedBadge}>✓ Verified</span>
                </div>
                <div className={styles.reviewerLoc}>📍 {r.loc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Blog ──────────────────────────────────────── */
function BlogSection() {
  const POSTS = [
    { emoji: '🌾', bg: 'linear-gradient(135deg,#e8f8ee,#c5ecd4)', tag: 'Soil Health', title: 'Understanding Your Soil\'s NPK: A Farmer\'s Guide', excerpt: 'Before you fertilize, you must know what your soil is saying. Here\'s how to read KVK soil reports and choose the right blend.', date: 'Apr 15, 2025', read: '5 min' },
    { emoji: '🍅', bg: 'linear-gradient(135deg,#faf7f0,#f5e8d0)', tag: 'Crop Tip', title: 'Kharif Season Checklist: Getting Your Field Ready', excerpt: 'A step-by-step pre-monsoon plan for soil conditioning, pH balancing, and first fertilizer application timing.', date: 'Mar 28, 2025', read: '7 min' },
    { emoji: '💧', bg: 'linear-gradient(135deg,#e6f1fb,#b5d4f4)', tag: 'Water Management', title: 'Drip Irrigation + Bio-Fertilizer: The Best Combo', excerpt: 'Combining drip systems with our AquaSurge range can reduce water use by 40% while maintaining yield.', date: 'Mar 10, 2025', read: '6 min' },
    { emoji: '🌞', bg: 'linear-gradient(135deg,#faeeda,#fac775)', tag: 'Government Schemes', title: 'PM-KISAN & Fertilizer Subsidy 2025: Full Guide', excerpt: 'Full breakdown of the latest subsidy rates, eligibility, and how to claim benefits on bio-organic fertilizers.', date: 'Feb 20, 2025', read: '8 min' },
    { emoji: '🐛', bg: 'linear-gradient(135deg,#faece7,#f5c4b3)', tag: 'Pest Control', title: 'Natural Pest Defence: How Neem Cake Protects Crops', excerpt: 'Neem Cake isn\'t just fertilizer — it\'s your field\'s first line of natural pest defence. Here\'s the science behind it.', date: 'Feb 4, 2025', read: '4 min' },
    { emoji: '♻️', bg: 'linear-gradient(135deg,#eaf3de,#c0dd97)', tag: 'Sustainability', title: 'From Chemical to Organic: One Farmer\'s 3-Year Journey', excerpt: 'Suresh Patil from Osmanabad shares his honest journey — the challenges, the rewards, and what he wishes he knew earlier.', date: 'Jan 18, 2025', read: '10 min' },
  ];
  return (
    <section className={styles.blogSection}>
      <div className="section-header">
        <div className="section-tag">Kisan Knowledge Hub</div>
        <h2 className="section-title">
          Grow Smarter with Our <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Blog</em>
        </h2>
        <p className="section-sub">Expert guides, crop tips, soil science, and government scheme updates — all in one place.</p>
      </div>
      <div className={styles.blogGrid}>
        {POSTS.map((p) => (
          <div key={p.title} className={styles.blogCard}>
            <div className={styles.blogImg} style={{ background: p.bg }}>{p.emoji}</div>
            <div className={styles.blogBody}>
              <div className={styles.blogTag}>{p.tag}</div>
              <div className={styles.blogTitle}>{p.title}</div>
              <div className={styles.blogExcerpt}>{p.excerpt}</div>
              <div className={styles.blogMeta}>
                <span>📅 {p.date}</span>
                <span className={styles.blogRead}>{p.read} read →</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Certifications ────────────────────────────── */
function CertSection() {
  const CERTS = [
    { icon: '🏅', name: 'ISO 9001:2015', body: 'Quality Management' },
    { icon: '🌿', name: 'NPOP Certified', body: 'National Programme for Organic' },
    { icon: '🌍', name: 'ISO 14001:2015', body: 'Environmental Management' },
    { icon: '🇮🇳', name: 'Make in India', body: 'Govt. Recognized' },
    { icon: '🔬', name: 'ICAR Approved', body: 'Research Validated' },
  ];
  return (
    <section className={styles.certSection}>
      <div className="section-header" style={{ textAlign: 'center' }}>
        <div className="section-tag">Certifications & Trust</div>
        <h2 className="section-title" style={{ maxWidth: 480, margin: '0 auto 14px' }}>
          Backed by Industry's <em style={{ fontStyle: 'italic', color: 'var(--green-600)' }}>Highest Standards</em>
        </h2>
      </div>
      <div className={styles.certGrid}>
        {CERTS.map((c) => (
          <div key={c.name} className={styles.certCard}>
            <div className={styles.certIcon}>{c.icon}</div>
            <div className={styles.certName}>{c.name}</div>
            <div className={styles.certBody}>{c.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Home Page ─────────────────────────────────── */
export default function Home() {
  return (
    <main style={{ paddingTop: 0 }}>
      <HeroSection />
      <MarqueeStrip />
      <AboutPreview />
      <ProductsPreview />
      <WhyUs />
      <ReviewsSection />
      <BlogSection />
      <CertSection />
      <NotifySection />
      <TermsSection />
    </main>
  );
}
