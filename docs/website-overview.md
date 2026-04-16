# The Golden Method - Website Documentation

## What Is This Website?

**The Golden Method** is a premium English tutoring service website. It promotes personalized 1-on-1 and small group English lessons for students aged 6-18. The site targets **parents** looking for high-quality English tutoring for their children.

**Live URL:** https://thegoldenmethod.vercel.app/

---

## Core Philosophy

The teaching approach is called the **Golden Method**, built around **"Expression First"** learning:

- Students already have knowledge, opinions, and ideas — they just need help expressing them in English.
- Lessons focus on conversation and real topics, not grammar drills or vocabulary lists.
- Confidence is built through speaking, not workbooks.
- Grammar and vocabulary are addressed naturally within conversation, not as isolated exercises.

---

## What the Client (Parent) Experiences

When a parent visits the site, they go through the following flow:

### 1. Hero Section
- Sees the main headline and value proposition about expression-first English learning.
- A badge indicates the service is currently accepting students for Summer 2026.
- Two CTAs: "Request a Trial" and "See Programs".

### 2. Trust Bar
- Four trust points are displayed immediately:
  - **No Commitment** — trial lesson with no obligation.
  - **Expression First** — the core teaching method.
  - **Individual Focus** — personalized even in groups.
  - **10+ Years Experience** — per consultant.

### 3. How Lessons Work (Method Section)
- A 3-step process is explained:
  1. **Assessment** — A real conversation (not a test) to find where the student is.
  2. **Clear Speaking** — Practice full sentences on familiar topics with gentle correction.
  3. **Progressive Growth** — Bigger topics and harder ideas over time; improvement extends beyond the classroom.

### 4. Programs Section
- Four programs are presented as cards. Clicking "Learn More" opens a detailed modal for each:

| Program | Format | Key Details |
|---------|--------|-------------|
| **Group Classes** | Max 4 students | Conversation-focused, includes assessment, pathway to 1-on-1 |
| **1-on-1 Consultant** | Individual | Core Golden Method, real-time feedback, flexible pacing |
| **1-on-1 with Jake** | Premium individual | Extended time, priority scheduling, maximum personalization |
| **IELTS Specialist** | Exam-focused | All 4 skills, mock assessments, exam strategies |

- Each program modal also shows **lesson packages**: Starter (20), Growth (30), Mastery (60).

### 5. What Makes This Different (Approach Section)
- Three differentiator cards:
  - The student knows more than they can say.
  - "Say it, then say it better" — expression before correctness.
  - Confidence comes from doing, not drilling.

### 6. About Section
- Information about the team and founder.
- Key stats: 10+ years experience per consultant, 200+ students guided, IELTS/TOEFL specialists on team.

### 7. Reviews & Results Section
- 6 written parent testimonials, filterable by program type (All, 1-on-1, Group, IELTS).
- 3 video testimonial cards (placeholder implementation).

### 8. Trial CTA Section
- Standalone call-to-action encouraging parents to request a free trial lesson / level assessment.

### 9. Contact Form
- A comprehensive enrollment form that collects:
  - Student name, age, current English level
  - Main goals (confidence, academic, IELTS, conversation, other)
  - Available days and preferred time
  - Parent/guardian name, email, phone (optional)
  - Interested program
  - Student's English experience (optional)
  - Desired start timeframe (optional)
  - Extra notes (optional)
- On submit, shows a "Request Sent" confirmation (client-side only, no backend).

### 10. FAQ Section
- 6 accordion items answering common parent questions:
  - How is this different from other tutoring?
  - Is a basic English level okay?
  - How long before seeing results?
  - How do lessons work (online/in-person)?
  - What's the investment?
  - How to track progress?

### 11. Footer
- Brand name, navigation links, copyright.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18.2.0 |
| **Build Tool** | Vite 6.4.2 |
| **Styling** | Single `styles.css` file with CSS custom properties |
| **Fonts** | Cormorant Garamond (headings), Inter (body) |
| **Hosting** | Vercel |
| **Backend** | None (static frontend only) |

---

## Project Structure

```
Jake-website/
├── index.html              # Entry HTML with meta/OG tags
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── styles.css              # All styles (~1400 lines)
├── script.js               # Legacy standalone JS (duplicates React logic)
├── src/
│   ├── main.jsx            # React entry point
│   ├── App.jsx             # Main app component, manages global state
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed navbar with scroll detection
│   │   ├── MobileMenu.jsx  # Fullscreen mobile overlay menu
│   │   ├── Hero.jsx        # Hero section with CTAs
│   │   ├── TrustBar.jsx    # 4 trust/value points
│   │   ├── MethodSection.jsx    # 3-step lesson process
│   │   ├── ProgramsSection.jsx  # 4 program cards
│   │   ├── ProgramModal.jsx     # Detailed program modal
│   │   ├── ApproachSection.jsx  # 3 differentiator cards
│   │   ├── AboutSection.jsx     # About the team/founder
│   │   ├── ReviewsSection.jsx   # Testimonials + video cards
│   │   ├── VideoModal.jsx       # Video testimonial modal
│   │   ├── TrialCTA.jsx         # Call-to-action for trial
│   │   ├── ContactForm.jsx      # Enrollment form
│   │   ├── FAQ.jsx              # Accordion FAQ
│   │   └── Footer.jsx           # Footer with links
│   └── hooks/
│       └── useReveal.js    # IntersectionObserver animation hook
├── public/
│   └── img/                # Images (about photo, etc.)
├── dist/                   # Production build output
└── docs/                   # Documentation
```

---

## Key Interactive Features

| Feature | How It Works |
|---------|-------------|
| **Scroll Reveal Animations** | `useReveal` hook uses IntersectionObserver to fade-in elements as they enter the viewport, with staggered delays |
| **Navbar Scroll Effect** | Navbar gains a blurred background when user scrolls past 50px |
| **Mobile Menu** | Hamburger icon toggles a fullscreen overlay menu |
| **Language Toggle** | Button in nav switches between English/Chinese (UI only, no translations implemented yet) |
| **Program Modals** | Clicking "Learn More" on a program card opens a detailed overlay with features and packages |
| **FAQ Accordion** | Clicking a question expands/collapses the answer with smooth animation |
| **Review Filtering** | Tab buttons filter testimonial cards by program type |
| **Contact Form** | Validates required fields, shows success state on submit, resets after 3 seconds |
| **Smooth Scrolling** | All anchor links scroll smoothly to their target section |

---

## Design System

### Colors
| Variable | Value | Usage |
|----------|-------|-------|
| `--gold` | `#C9973A` | Primary accent, buttons, highlights |
| `--gold-light` | `#d4b060` | Hover states |
| `--gold-pale` | `#f5edda` | Light accent backgrounds |
| `--dark` | `#13121F` | Dark text, dark backgrounds |
| `--cream` | `#F5F2EB` | Main page background |
| `--text` | `#2a2a3e` | Body text |
| `--text-light` | `#6b6b80` | Muted/secondary text |

### Typography
- **Cormorant Garamond** (serif) — headings, section titles, stat numbers
- **Inter** (sans-serif) — body text, buttons, navigation, form elements

### Responsive Breakpoints
- **1024px** — Grid columns reduce
- **768px** — Single column layouts, mobile navigation appears

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Notes

- The **contact form is client-side only** — it shows a success message but does not actually send data to a server.
- The **language toggle** (English/Chinese) exists in the UI but no translations are implemented yet.
- The **`script.js`** file is a legacy standalone version that duplicates React component logic — the React components are the active codebase.
- The **`dist/`** folder contains the last production build and may be out of date with source changes.
