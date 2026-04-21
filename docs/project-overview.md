# The Golden Method - Project Overview

**Generated**: 2026-04-19  
**Live URL**: https://thegoldenmethod.vercel.app/

---

## What Is This Project?

A single-page React landing site for **The Golden Method** — a premium English tutoring service founded by Jake. The site's core message: students already know more than they can express, so the method focuses on unlocking expression and confidence rather than rote grammar drills.

---

## Tech Stack

| Layer       | Choice                          |
|-------------|---------------------------------|
| Framework   | React 18.2                      |
| Build tool  | Vite 6.4                        |
| Styling     | Custom vanilla CSS (1,300+ lines, CSS variables) |
| Fonts       | Cormorant Garamond (headings) + Inter (body) via cdnjs |
| Routing     | None — anchor-based scroll navigation |
| State mgmt  | React hooks only (no Redux/Context) |
| Deployment  | Vercel                          |

No backend, no database, no API integrations. The contact form is client-side only (shows a success message but does not actually submit data anywhere).

---

## Directory Structure

```
├── index.html              # Entry point, SEO/OG meta tags, font imports
├── vite.config.js           # Minimal Vite + React plugin config
├── package.json             # "golden-method" — react, react-dom, vite
├── styles.css               # Global stylesheet (root-level copy)
├── script.js                # Legacy vanilla JS utilities
├── src/
│   ├── main.jsx             # React DOM render
│   ├── App.jsx              # Root component, global state
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed nav, language toggle, hamburger
│   │   ├── MobileMenu.jsx   # Mobile overlay menu
│   │   ├── Hero.jsx         # Landing hero + CTAs
│   │   ├── TrustBar.jsx     # 4 trust indicators
│   │   ├── MethodSection.jsx    # "How It Works" (3 steps)
│   │   ├── ProgramsSection.jsx  # 4 program cards grid
│   │   ├── ProgramModal.jsx     # Detailed program info + pricing tiers
│   │   ├── ApproachSection.jsx  # "What Makes This Different" (3 cards)
│   │   ├── AboutSection.jsx     # Jake's bio + stats
│   │   ├── ReviewsSection.jsx   # Filterable testimonials + video cards
│   │   ├── VideoModal.jsx       # Video testimonial modal
│   │   ├── TrialCTA.jsx         # Call-to-action banner
│   │   ├── ContactForm.jsx      # Multi-field inquiry form
│   │   ├── FAQ.jsx              # 6 accordion Q&As
│   │   └── Footer.jsx          # Links + copyright
│   └── hooks/
│       └── useReveal.js     # IntersectionObserver scroll animations
├── public/img/              # about.jpg, thumbnail.jpg/png
├── dist/                    # Production build output
├── docs/                    # Documentation
└── Web-Information/         # Content documentation
```

---

## Page Sections (top to bottom)

| #  | Section          | Anchor          | Purpose |
|----|------------------|-----------------|---------|
| 1  | Navbar           | —               | Fixed nav, language toggle (EN/中), CTA button |
| 2  | Hero             | `#hero`         | Headline, badge ("Accepting Students for summer break 2026"), 2 CTAs |
| 3  | Trust Bar        | `#trust`        | 4 trust signals (No Commitment, Expression First, Individual Focus, 10+ Years) |
| 4  | How It Works     | `#how-it-works` | 3-step method (Identify → Build Expression → Continued Progress) |
| 5  | Programs         | `#programs`     | 4 cards: Group, 1-on-1 Consultant, 1-on-1 with Jake, IELTS |
| 6  | Approach         | `#approach`     | 3 philosophy cards |
| 7  | About            | `#about`        | Jake's bio, stats (8+ yrs, 1000+ students, 7000+ hrs) |
| 8  | Reviews          | `#reviews`      | Filterable tabs (All/Group/1-on-1/IELTS), star ratings, video testimonials |
| 9  | Trial CTA        | `#trial`        | Call-to-action linking to contact form |
| 10 | Contact Form     | `#contact`      | Full inquiry form (name, age, level, goals, schedule, etc.) |
| 11 | FAQ              | `#faq`          | 6 accordion items |
| 12 | Footer           | —               | Brand, nav links, copyright |

---

## Design System

**Color palette** (CSS custom properties):
- `--gold: #C9973A` / `--gold-light: #d4b060` / `--gold-pale: #f5edda`
- `--dark: #13121F` / `--dark-soft: #1e1e30` / `--charcoal: #2a2a3e`
- `--cream: #F5F2EB` / `--cream-dark: #ece7db`

**Typography**: Thin serif headings (Cormorant Garamond 400) + light sans-serif body (Inter 300). Elegant, premium feel.

**Animations**: Scroll-reveal via IntersectionObserver (`useReveal` hook), staggered delays, smooth transitions. Nav gets backdrop blur on scroll.

**Responsive**: Hamburger menu on mobile, grid layouts collapse, container max-width 1200px.

---

## Bilingual Support

Components contain inline English/Chinese content toggled via a `lang` prop (`"en"` or `"zh"`). The toggle lives in the Navbar. All section text is duplicated in both languages within each component file.

---

## State Management

All state lives in `App.jsx` and is passed down via props:

- `mobileOpen` — mobile menu visibility
- `programModal` — which program detail modal is open
- `videoModal` — which video testimonial is playing
- `lang` — current language (`"en"` / `"zh"`)

Components manage their own local state (FAQ accordion, review filters, form fields, etc.).

---

## What's Missing / Not Implemented

- **Form backend** — Contact form shows a success message but sends nothing. Needs an email service (SendGrid, Mailgun) or serverless function.
- **Video content** — Video modal and video testimonial cards are placeholders (Unsplash images, no actual videos).
- **Analytics** — No Google Analytics, Segment, or similar.
- **Testing** — No test files or test framework configured.
- **Accessibility** — Basic semantic HTML and ARIA labels present, but no comprehensive a11y audit.

---

## Build & Run

```bash
npm install          # Install dependencies
npm run dev          # Vite dev server with HMR
npm run build        # Production build → /dist
npm run preview      # Preview production build locally
```
