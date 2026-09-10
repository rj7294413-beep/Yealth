# Yealth - Student Living & Hostel Discovery Platform

> India's leading student accommodation network helping college students explore verified hostels, PGs, and student apartments near university hubs with zero brokerage.

---

## 🚀 Live Preview & Quick Start

Yealth is built as a **100% Static One-Page Web Application** (Zero Backend, Zero external build tools required).

### Option 1: Direct Browser Launch
Simply double-click `index.html` to open it directly in any web browser (Chrome, Edge, Safari, Firefox).

### Option 2: Local HTTP Server (Python)
If you prefer running a local development server:
```bash
python -m http.server 8080
```
Then visit: [http://localhost:8080](http://localhost:8080)

---

## 🎨 Design System & Theme (OYO-Inspired)

- **Brand Primary Red:** `#EE2E24` (Logo accent, badges, highlights, secondary buttons)
- **Brand Action Green:** `#1AB64F` / `#22C55E` (Floating search pill CTA, WhatsApp buttons, Verified badges)
- **Hero Dark Surface:** `#0B0F13` / `#000000` (High-contrast hero section with ambient glow)
- **Footer Slate Charcoal:** `#4F585D` / `#384044` (Comprehensive directory footer)
- **Background Surface:** `#F8F9FA`
- **Typography:** Plus Jakarta Sans & Inter

---

## 📱 Features & Conversions

1. **Top Navigation Bar:**
   - Bold red Yealth wordmark with student living emblem
   - "Yealth for Campuses" partnership modal
   - "List your PG / Property" onboarding modal & WhatsApp trigger
   - One-tap phone link (`tel:+919110155081`)
   - Direct green WhatsApp chat button

2. **City Quick-Filter Bar:**
   - Horizontally scrollable strip of top university hubs: *All Cities, Bangalore, Delhi / NCR, Kota, Pune, Mumbai, Hyderabad, Dehradun, Chandigarh*
   - Dynamically updates room cards and search bar inputs

3. **High-Contrast Hero & OYO Floating Search Pill:**
   - Location / University Hub input (with quick hub recommendations)
   - Move-in Month dropdown (Immediate, Next Semester, October, November...)
   - Room Type selector (All Types, Single Private, Twin Sharing, Triple Sharing)
   - Solid Green `#1AB64F` button formatting a WhatsApp inquiry:
     `https://wa.me/919110155081?text=Hi%20Yealth,%20I%20am%20looking%20for%20a%20[RoomType]%20in%20[Location]%20moving%20in%20by%20[Month].`

4. **"Yealth-Serviced" Amenity Banner:**
   - Fully Furnished Rooms (ergonomic desk, mattress, wardrobe)
   - Home-style 4-time meals (breakfast, lunch, snacks, dinner)
   - High-speed 100 Mbps Wi-Fi
   - Daily housekeeping & laundry
   - 24/7 CCTV & biometric security
   - Free physical property visit scheduler

5. **Curated Student Accommodations Grid:**
   - Filter tabs: *All Accommodations, Near Coaching Hubs, Girls Only, Boys Only, Co-Living*
   - Cards with real student room photos, proximity badge, verified badge, rating, pricing, original price strike-through, and zero-brokerage tag
   - Direct WhatsApp visit scheduler + phone call button
   - Modal drawer with full amenities breakdown and chef meal info

6. **Promotional Deals Banner:**
   - "Yealth Semester Starter: Verified PGs Under ₹5,999/mo" with direct WhatsApp claim action

7. **Deals & Lead Capture Bar:**
   - Email subscription input with instant toast alert notification

8. **Comprehensive Directory Footer:**
   - Property owner acquisition banner ("List Your Property")
   - 4-column structured directory (About Us, Students, Contact & Support, Legal & Policies)
   - 30+ clickable SEO student search keywords across India

9. **Floating WhatsApp Quick Action & Mobile Sticky Bar:**
   - Floating pulse-animated WhatsApp bubble
   - Fixed mobile-only bottom bar: `[ Call Us Now ]` & `[ WhatsApp Us ]`

---

## 📁 File Structure

```
WebSite/
├── index.html                  # Semantic single-page HTML layout
├── README.md                   # Project documentation & run guide
├── css/
│   └── custom.css              # OYO tokens, animations, pulse, high-contrast footer
└── src/
    ├── config/
    │   └── siteConfig.js       # Centralized contact numbers, emails, and operating hubs
    ├── data/
    │   └── properties.js       # Verified student stays dataset across 8 major hubs
    ├── utils/
    │   └── whatsapp.js         # WhatsApp deep link generator logic
    └── app.js                  # State management, dynamic filtering, modals & toast engine
```

---

## 📞 Central Contact Configuration

- **Phone Display:** `+91 9110155081`
- **Phone Raw:** `+919110155081`
- **Email:** `yealtthh@gmail.com`
- **WhatsApp:** `919110155081` (wa.me link format)
