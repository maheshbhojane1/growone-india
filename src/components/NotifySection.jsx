import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import styles from './NotifySection.module.css';

export default function NotifySection() {
  const showToast = useToast();
  const [form, setForm] = useState({ name: '', phone: '', location: '', crop: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      showToast('⚠️ Please fill Name & WhatsApp Number', '#e53e3e');
      // after click input filed be clear and focus on name input field
      handleChange({ target: { name: 'name', value: '' } });
      handleChange({ target: { name: 'phone', value: '' } });
      handleChange({ target: { name: 'location', value: '' } });
      handleChange({ target: { name: 'crop', value: '' } });
      handleChange({ target: { name: 'message', value: '' } });
      return;
    }
    const text = encodeURIComponent(
      `Hello GrowOne India! 🌱\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location || 'Not specified'}\nCrop: ${form.crop || 'Not specified'}\n\nMessage: ${form.message || 'Interested in your products!'}`
    );
    window.open(`https://wa.me/918857827941?text=${text}`, '_blank');
    showToast('💬 Opening WhatsApp…');
  };

  return (
    <section className={styles.section} id="notify">
      <div className={styles.layout}>
        <div className={styles.left}>
          <div className="section-tag" style={{ background: 'rgba(93,194,130,0.15)', color: 'var(--green-300)' }}>
            Connect With Us
          </div>
          <h2 className="section-title" style={{ color: 'white' }}>
            Get Crop Advice Directly on{' '}
            <em style={{ fontStyle: 'italic', color: '#25D366' }}>WhatsApp</em>
          </h2>
          <p className="section-sub">
            Fill the form and our agronomist will connect with you personally. Ask us anything —
            from product selection to crop problem diagnosis.
          </p>
          <div className={styles.perks}>
            {[
              'Reply within 2 hours on business days',
              'Free personalized crop nutrition advice',
              'Exclusive WhatsApp-only discount codes',
              'Seasonal offers & new product alerts',
            ].map((p) => (
              <div key={p} className={styles.perk}>
                <span className={styles.perkCheck}>✅</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.formBox}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Full Name *</label>
              <input name="name" type="text" placeholder="Ramesh Shinde" value={form.name} onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label>WhatsApp Number *</label>
              <input name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>State / District</label>
            <input name="location" type="text" placeholder="Kolhapur, Maharashtra" value={form.location} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Primary Crop</label>
            <select name="crop" value={form.crop} onChange={handleChange}>
              <option value="">Select your main crop</option>
              {['Sugarcane', 'Cotton', 'Soybean', 'Wheat', 'Paddy / Rice',
                'Tomato / Vegetables', 'Grapes / Fruits', 'Onion / Garlic', 'Other'].map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className={styles.formGroup}>
            <label>Your Query / Message</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your crop issue or what products you need…"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button className={styles.waBtn} onClick={handleSubmit}>
            <span>💬</span> Send Message on WhatsApp
          </button>
          <p className={styles.disclaimer}>
            By connecting, you agree to our Terms & Conditions. Your details are never shared.
          </p>
        </div>
      </div>
    </section>
  );
}
