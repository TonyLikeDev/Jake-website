# The Golden Method — Wireframe 2.5 Update Brief

**Site:** tonylikedev.github.io/Jake-website  
**Document:** Changes from Wireframe 1 → Wireframe 2.5  
**Date:** April 2026

---

## Priority Key

| Symbol | Meaning |
|--------|---------|
| 🔴 | Must do before launch |
| 🟡 | Important |
| 🟢 | Nice to have |

---

## 🔴 Must Do

### Hero

- **Fix headline grammar**  
  Current: *"Students already knows more than they think."*  
  Fix: *"Students Already Know More Than They Think"*  
  This is the first thing every visitor reads — fix immediately.

- **Replace support line**  
  Current: *"We take what students are already learning across subjects and help them communicate it effectively in English."*  
  Replace with: *"Most students don't struggle with understanding — they struggle with expression."*

### Programs

- **Delete Lesson Packages section from homepage entirely**  
  WF2.5 is explicit: *"Packages only inside program pages. Do NOT show on homepage."*  
  The current live site has a full Lesson Packages section. Delete it.  
  Packages will live inside each `/programs/*` page only.

### About

- **Rewrite About section in first-person plural**  
  WF2.5: *"Use 'we' (team positioning)"*  
  Every instance of "I / my / me" must shift to "we / our / us".  
  Example: *"I don't teach English. I help students find their voice in it."*  
  → *"We don't teach English. We help students find their voice in it."*

- **Update experience stat**  
  Current: *"8+ Years Teaching"*  
  Replace with: *"20+ Years Combined Experience"*

### Form

- **Replace calendar date picker with availability checkboxes**  
  WF2.5: *"User submits availability via form"* — manual scheduling follows.  
  A date picker implies booking a slot, which contradicts the manual scheduling model.  
  Replace with:
  - Day-of-week checkboxes: Mon / Tue / Wed / Thu / Fri / Sat / Sun
  - Time preference dropdown: Morning / Afternoon / Evening

---

## 🟡 Important

### Hero

- **Fix contradicting stat**  
  Current stat: *"1-on-1 Always, never group"*  
  This directly contradicts Group Classes listed as the first program.  
  Change to: *"Individual focus, always"* or *"Personalised, always"*

### Programs

- **Update IELTS card description**  
  WF2.5 sharpens IELTS positioning to *"Score-focused preparation"*.  
  Update the card copy to emphasise score improvement outcomes, not just exam structure.

- **Add scarcity signal to 1-on-1 with Jake card**  
  WF2.5 adds *"Premium, limited"* to Jake's tier.  
  Add a small badge or note: *"Limited availability"* to the card.

### About

- **Add IELTS/TOEFL specialist mention**  
  WF2.5: *"Includes IELTS/TOEFL specialists"*  
  Add one line to About copy: *"Our team includes dedicated IELTS and TOEFL specialists."*

- **Replace or remove the stock photo**  
  With the shift to a team, the single Unsplash headshot of an unknown man is inconsistent and undermines trust.
**Decision needed from client — choose one:**
  - [ ] Use a real team photo
  - [ ] Use Jake's photo with a caption (*"Jake, lead tutor"*)
  - [ ] Remove the photo and go text-forward

  The Unsplash stock image must be removed regardless of which option is chosen.

### Our Difference

- **Add a 4th differentiator as the lead point**  
  WF2.5 adds: *"Students know more than they can express"*  
  This root insight should be the first block in the Our Difference section, setting up the three existing points.

### Form

- **Add optional "When do you want to start?" field**  
  WF2.5: *"Optional: When do you want to start?"*  
  Add as an optional dropdown at the bottom of the form.  
  Suggested options: ASAP / 1–2 weeks / 1 month / Flexible

---

## 🟢 Nice to Have

### User Flow

- **Confirm /programs/* page routing scope**  
  WF2.5 flow: *Land → Understand → Choose program → Go to program page → View packages → Submit trial request → Manual scheduling*  
  The four "Learn More" buttons on program cards need a destination.  
  Confirm with developer: build `/programs/*` pages now, or keep as placeholders?

- **Add Packages link through program pages in footer/nav**  
  Since packages are removed from the homepage, users must find them via program pages.  
  Ensure the footer "Programs" link is prominent.  
  Each program page needs its own Packages section when built.

---

## Side-by-Side Diff

| Section | Live site / WF1 | Wireframe 2.5 | Action |
|---------|----------------|---------------|--------|
| Hero headline | "Students already knows…" (grammar error) | "Students Already Know More Than They Think" | Fix grammar |
| Hero support line | "We take what students are already learning across subjects…" | "Most students don't struggle with understanding — they struggle with expression." | Replace copy |
| About voice | First person — "I / my / me" | Team voice — "we / our / us" | Rewrite About section |
| About experience stat | "8+ Years Teaching" (solo) | "20+ Years Combined Experience" (team) | Update stat |
| IELTS/TOEFL specialists | Not mentioned | Add mention of specialist staff | One new line in About |
| About photo | Unsplash stock headshot | Team photo, Jake with caption, or no photo | Client decision needed |
| Packages on homepage | Full Packages section visible | Removed — program pages only | Delete section from homepage |
| IELTS program card | Exam-focused preparation | Score-focused preparation | Update card copy |
| 1-on-1 Jake card | Premium tier | Premium, limited availability | Add limited availability badge |
| Our Difference | 3 points | 4 points — "Students know more than they can express" added first | Add new lead differentiator |
| Form availability | Calendar date picker | Day/time checkboxes (manual scheduling) | Replace calendar widget |
| Form start date | Not present | Optional: "When do you want to start?" | Add optional dropdown |
| User flow | Packages on homepage | Homepage → program page → packages → form | Remove packages; build program pages |

---

## Dev Rules (from WF2.5)

These are non-negotiable constraints confirmed in the wireframe.

1. **No pricing on homepage**  
   No price, "from" amount, or cost reference anywhere on the homepage — including FAQ answers. Pricing lives inside `/programs/*` pages only.

2. **No packages on homepage**  
   The Packages section is deleted from the homepage. It appears only inside individual program pages.

3. **Trial is request-based, not instant booking**  
   No Calendly, no calendar embed, no auto-scheduling. The form collects availability preferences. The tutor follows up manually to schedule.

4. **Use "we" throughout — team positioning**  
   All public-facing copy uses "we / our / us". Jake can be named individually only in the 1-on-1 with Jake program card and any direct quotes.

5. **Keep UI clean and premium**  
   No cluttered elements, no discount language, no excessive badges. High-trust, high-value aesthetic throughout.

6. **Program pages are the decision point**  
   Each program card links to its own `/programs/*` page. Those pages contain full program detail and packages. The homepage is for discovery; program pages are for conversion.

---

*Brief compiled from Wireframe 2.5 · Cross-referenced with live site audit · The Golden Method*