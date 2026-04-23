# 🌱 GrowOne India — React Website

A complete fertilizer brand website built with **React 18 + React Router v6**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```

Runs at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── App.js                    # Root app with routing
├── index.js                  # Entry point
├── index.css                 # Global CSS variables & resets
│
├── context/
│   └── ToastContext.js       # Global toast notification system
│
├── data/
│   └── products.js           # All 12 product data objects
│
├── components/
│   ├── Navbar.jsx / .css     # Fixed navbar with About Us + mobile menu
│   ├── Footer.jsx / .css     # Full multi-column footer
│   ├── HeroSection.jsx       # Full-screen hero
│   ├── MarqueeStrip.jsx      # Auto-scrolling brand strip
│   ├── ProductCard.jsx       # Reusable product card
│   ├── NotifySection.jsx     # WhatsApp connect form
│   └── TermsSection.jsx      # Terms & Conditions grid
│
└── pages/
    ├── Home.jsx              # Full homepage (all sections assembled)
    ├── Home.module.css
    ├── Products.jsx          # Products listing with filters
    ├── Products.module.css
    ├── ProductDetail.jsx     # Individual product detail page
    ├── ProductDetail.module.css
    ├── About.jsx             # Full About Us page
    └── About.module.css
```

---

## 🗺️ Pages & Routes

| Route | Page | Opens in |
|-------|------|----------|
| `/` | Home (all sections) | Same tab |
| `/products` | All Products + filter | New tab link from navbar |
| `/products/:id` | Product Detail | Opens from product card |
| `/about` | About Us full page | New tab link from navbar |

---

## 🧩 Sections on Homepage

1. **Hero** — Full-screen farming visual with CTA + stats
2. **Brand Marquee Strip** — Scrolling certifications
3. **About Preview** — Short intro with "Read full story →" link to `/about`
4. **Products Preview** — 6 featured products → "View All" → `/products`
5. **Why Us** — 4 feature cards
6. **Reviews** — 6 verified farmer testimonials
7. **Blog** — 6 Kisan Knowledge Hub posts
8. **Certifications** — ISO, NPOP, ICAR, Make in India
9. **Notify / WhatsApp** — Contact form that opens WhatsApp
10. **Terms & Conditions** — 4-card legal grid

---

## ✏️ How to Edit

### Change WhatsApp number
In `src/components/NotifySection.jsx`, find:
```js
window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
```
Replace `919999999999` with your actual number (country code + number, no spaces).

### Add / edit products
Edit `src/data/products.js`. Each product has:
- `id`, `name`, `cat` (npk/organic/micro/specialty)
- `emoji`, `colorBg` (gradient string), `badge`, `price`, `unit`
- `rating`, `reviews`, `desc`, `how[]`, `specs{}`, `glance[]`

### Change colors / theme
All color variables are in `src/index.css` under `:root { ... }`.

### Change company info / navbar
- Navbar: `src/components/Navbar.jsx`
- Footer: `src/components/Footer.jsx`
- About page content: `src/pages/About.jsx`

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^18.2.0 | UI framework |
| react-dom | ^18.2.0 | DOM rendering |
| react-router-dom | ^6.22.0 | Client-side routing |
| react-scripts | 5.0.1 | CRA build tooling |

---

## 🌐 Fonts Used

- **Playfair Display** — Display headings (Google Fonts)
- **DM Sans** — Body text (Google Fonts)

---

Made with 🌱 for GrowOne India | Pune, Maharashtra
