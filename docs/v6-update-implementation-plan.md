# The Golden Method — V6 Update Implementation Plan
**Date:** April 2026
**Goal:** Fully align the website with the `golden-method-dev-brief-v6-claude.md` and `golden-method-dev-brief-v6-gpt.md` requirements.

## 1. Global Vocabulary Scrub
We must remove all "tutoring" and "school-like" language to maintain the premium "consulting" position.

*   **Tutor/Tutoring** ➔ Consultant / Coach / Consulting
*   **Learning** ➔ Progress / Growth / Development / Practice
*   **Lesson** ➔ Session
*   **Class/Classes** ➔ Program / Group / Group Session
*   **Students** ➔ People / Individuals / Participants (Use "students" sparingly for general references only)
*   **Drilling/Exercise** ➔ Practice / Communication / Expression

**Target Files:**
- `src/components/AboutSection.jsx`
- `src/components/FAQ.jsx`
- `src/components/ProgramModal.jsx`
- `src/components/ProgramsSection.jsx`
- `src/components/ReviewsSection.jsx`
- `src/components/MethodSection.jsx`

## 2. Component-Specific Updates

### Hero Section (`src/components/Hero.jsx`)
- [ ] **Badge:** Change to ALL CAPS: `ACCEPTING STUDENTS FOR SUMMER BREAK 2026`.
- [ ] **Headline:** Ensure it is separate from the subheadline.
- [ ] **Subheadline:** Wording: `Most just haven't been taught how to say it in English.` Style: Gold and italic.
- [ ] **Support Line:** Update to: `The problem isn't knowledge — it's expression.`

### Method Section (`src/components/MethodSection.jsx`)
- [ ] **Step 1:** `We Find Out Where Students Are` — In the first session, we have a real conversation — no tests.
- [ ] **Step 2:** `We Help Them Speak Clearly` — Students practise speaking in full sentences about things they already know.
- [ ] **Step 3:** `Progress Doesn't Stop After the Session` — As students grow, we introduce bigger topics. English improves everywhere — not just in sessions.

### About Section (`src/components/AboutSection.jsx`)
- [ ] **Refine Text:** Remove "tutoring systems" reference. Use: "My job is to unlock what's already there — not fill gaps."

### Reviews Section (`src/components/ReviewsSection.jsx`)
- [ ] **Scrub Review Text:** Replace "tutors" with "consultants" or "other services".
- [ ] **Label:** Ensure label is `WHAT CLIENTS SAY` (GPT) or `WHAT PARENTS SAY` (Claude). *Decision: Use WHAT CLIENTS SAY for premium feel.*

### Contact Form (`src/components/ContactForm.jsx`)
- [ ] **Success Message:** Ensure it matches: `Enquiry received. We'll be in touch within 24 hours.`

## 3. Technical & Style Cleanup
- [ ] **CSS:** Rename `.program-modal-pkg-lessons` to `.program-modal-pkg-sessions` in `src/styles.css` and `ProgramModal.jsx`.
- [ ] **Legacy Files:** Remove `script.js` and any other unused legacy files if they are not needed for the React build.

## 4. Final Review
- [ ] No pricing (dollar signs) on the homepage or in modals.
- [ ] Short, simple sentences (max 1-2 per section).
- [ ] Visual polish: consistent spacing and "gold italic" accents.
