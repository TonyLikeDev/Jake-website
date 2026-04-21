# 🐛 BUG: Mobile sections overlapping each other

**Severity:** High — page is unusable on mobile
**Platform:** Mobile (iOS Safari, screen ~15:33 / 15:34 timestamp in screenshots)
**URL tested:** `172.16.12.164` (local dev)
**Page:** The Golden Method – main landing page

---

## What's happening (observed)

Multiple page sections are rendering **on top of each other** instead of stacking vertically one after another. The page has no proper section separation on mobile.

### Screenshot 1 — Top of page
Visible overlapping elements in a single viewport:
- **Sticky header** "The Golden Method" (with hamburger menu)
- About Jake paragraph: "I've worked with people for 8+ years. My job is to unlock what's already there..."
- Second About paragraph: "Most tutoring systems treat students like empty vessels..."
- Third About paragraph: "People already have thoughts, opinions, and knowledge..."
- Section title: **"WHAT CLIENTS SAY"** (in gold) — overlapping the paragraph above
- Main heading: **"Real feedback from people who've gone through the process."** — overlapping body text
- "I recruit and train every consultant..." text
- "No cherry-picked one-liners..." text
- Filter tabs: `All` / `Group Sessions` / `1-on-1` / `IELTS`
- Stats section text "Years" bleeding through
- Stats label "CONSULTING EXPERIENCE"

All of these are stacked on top of each other at the same vertical position → unreadable.

### Screenshot 2 — Stats + testimonial
- Stats section ("1,00..." Participants, "7,00..." Hours) is partially covered by the testimonial carousel card
- Testimonial card (with `<` and `>` slider arrows) is overlapping the stats section instead of sitting below it in its own section
- Filter tabs are also overlapping with the "Years" text above them

---

## Expected behavior

Each section should be:
1. In its own vertical space (no overlap)
2. Separated by proper margin/padding
3. Stacked in order: Header → About Jake → Stats → What Clients Say (testimonials) → Filter tabs → ...
4. Sticky header should have solid background so content doesn't bleed through when scrolling behind it

---

## Likely causes (to investigate)

- [ ] **Sections using `position: absolute` or `fixed`** without proper parent container / without being properly confined → they collapse onto the same spot
- [ ] **Missing or wrong `height` / `min-height`** on section wrappers on mobile breakpoints
- [ ] **`z-index` stacking** issue — the testimonial carousel and stats section are competing for the same layer
- [ ] **Flexbox/grid layout breaking at mobile breakpoint** — possibly a desktop layout leaking into mobile (e.g. side-by-side columns collapsing without changing to flex-column)
- [ ] **Sticky header transparent background** — the header should have a solid fill so scrolled content doesn't show through it
- [ ] **Carousel component (testimonials)** positioned absolutely over another section instead of being a block-level section on its own

---

## Suggested fixes (in order)

1. **Audit section containers** — each major section (About, Stats, Testimonials, Packages, Form, etc.) should be a block-level element in normal document flow, not absolutely positioned.
2. **Check the mobile breakpoint CSS** — make sure multi-column desktop layouts switch to `flex-direction: column` (or equivalent) on mobile.
3. **Fix the sticky header** — give it an opaque background color so content scrolling behind it is hidden.
4. **Fix the testimonial carousel** — it should be contained inside the "What Clients Say" section, not overlaying the stats.
5. **Add vertical spacing between sections** — at least a consistent `margin-block` or `padding-block` value (e.g. 48–64px on mobile).

---

## Test checklist after fixing

- [ ] Header doesn't show content bleeding through it when scrolling
- [ ] About → Stats → Testimonials → Filter tabs → (next sections) all stack cleanly with visible gaps
- [ ] Testimonial carousel stays inside its section and doesn't overlap stats
- [ ] All text is legible, no layers of text on top of each other
- [ ] Filter tabs (`All` / `Group Sessions` / `1-on-1` / `IELTS`) are visible and tappable as their own row
- [ ] Tested on real device, not just browser dev tools mobile emulator

---

## Screenshots
- `1776760815062_217ddda5cad34b8d12c2.jpg` — top-of-page overlap
- `1776760815065_2465509947efc6b19ffe.jpg` — testimonial overlapping stats
