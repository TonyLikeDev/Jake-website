# The Golden Method — Developer Update Brief
## Wireframe 2.5

**Live site:** tonylikedev.github.io/Jake-website  
**Date:** April 2026

---

## Purpose

This brief lists every change required to bring the live site in line with Wireframe 2.5. It is organized by section, includes a side-by-side diff table, and closes with the non-negotiable dev rules that apply to the whole site.

| Priority | Meaning |
|----------|---------|
| **MUST DO** | Required before launch |
| **IMPORTANT** | Strong recommendation |
| **NICE TO HAVE** | Polish when time allows |

---

## Section 1 — Hero

| Priority | Type | Issue / Change |
|----------|------|----------------|
| **MUST DO** | CHANGED | **Fix headline grammar error** — Live site reads "Students already knows more than they think." — subject-verb disagreement. WF2.5 specifies: "Students Already Know More Than They Think". This is the first thing every visitor reads. **Action:** Change "already knows" to "Already Know". |
| **MUST DO** | CHANGED | **Replace support line** — Current: "We take what students are already learning across subjects..." WF2.5 replaces this with a sharper, more specific line. **Action:** Replace with: "Most students don't struggle with understanding — they struggle with expression." |
| **IMPORTANT** | CHANGED | **"1-on-1 Always, never group" stat contradicts Group Classes program** — The stats block says "1-on-1 Always, never group" but Group Classes is the first program listed below. Parents will notice this inconsistency immediately. **Action:** Change stat label to: "Individual focus, always" or "Personalized, always". |

---

## Section 2 — Programs

| Priority | Type | Issue / Change |
|----------|------|----------------|
| **MUST DO** | REMOVE | **Remove Packages section from homepage entirely** — WF2.5 is explicit: "Packages only inside program pages. Do NOT show on homepage." The live site currently has a full Lesson Packages section. It must be deleted. **Action:** Delete the entire Lesson Packages section from the homepage HTML. |
| **IMPORTANT** | CHANGED | **Update IELTS card description** — WF2.5 sharpens the IELTS positioning to "Score-focused preparation". The current description is more generic. **Action:** Update IELTS card copy to emphasise score improvement as the primary outcome. |
| **IMPORTANT** | NEW | **Add "Limited availability" signal to 1-on-1 with Jake card** — WF2.5 adds "Premium, limited" to Jake's tier description. A scarcity cue increases perceived value. **Action:** Add a small badge or note: "Limited availability" to the Jake program card. |

---

## Section 3 — About (shift from solo tutor to team)

| Priority | Type | Issue / Change |
|----------|------|----------------|
| **MUST DO** | CHANGED | **Rewrite About copy in first-person plural ("we")** — WF2.5 specifies: "Use 'we' (team positioning)". The entire About section currently uses "I / my / me". Every instance must shift to "we / our / us". **Action:** Example: "I don't teach English. I help students find their voice in it." becomes "We don't teach English. We help students find their voice in it." Apply throughout. |
| **MUST DO** | CHANGED | **Update experience stat to "20+ Years Combined Experience"** — WF2.5: "20+ years combined experience". Live site shows "8+ Years Teaching" (single tutor). Must reflect the team. **Action:** Change stat: "8+ Years Teaching" → "20+ Years Combined Experience". |
| **IMPORTANT** | NEW | **Add IELTS/TOEFL specialist mention** — WF2.5: "Includes IELTS/TOEFL specialists". Add one line to the About copy acknowledging specialist team members. **Action:** Add sentence: "Our team includes dedicated IELTS and TOEFL specialists." |
| **IMPORTANT** | CHANGED | **Replace or remove Unsplash stock photo** — With the shift to a team, the single stock headshot of an unknown man is inconsistent and undermines trust. Three options: (a) team photo, (b) Jake solo with a caption "Jake, lead tutor", (c) text-forward layout with no photo. **Action:** Client decision needed. Confirm direction before developer removes or replaces image. |

---

## Section 4 — "Our Difference" (add 4th point)

| Priority | Type | Issue / Change |
|----------|------|----------------|
| **IMPORTANT** | NEW | **Add new lead differentiator: "Students know more than they can express"** — WF2.5 adds this root insight as the first differentiator. It anchors the whole method philosophy and should lead the section. **Action:** Add as a new first block in the Our Difference section. The other three points follow after. |

---

## Section 5 — Enquiry Form

| Priority | Type | Issue / Change |
|----------|------|----------------|
| **MUST DO** | CHANGED | **Replace calendar date picker with availability checkboxes** — WF2.5: "User submits availability via form" with manual follow-up scheduling. The current date picker implies instant booking. This conflicts with the manual scheduling model. **Action:** Replace calendar widget with: day-of-week checkboxes (Mon–Sun) and a time preference dropdown (Morning / Afternoon / Evening). |
| **IMPORTANT** | NEW | **Add optional "When do you want to start?" field** — WF2.5 adds this as an optional field. Helps the tutor prioritise urgent enquiries and manage scheduling. **Action:** Add optional dropdown at the bottom of the form: ASAP / 1–2 weeks / 1 month / Flexible. |

---

## Section 6 — User Flow (program pages now required)

**WF2.5 flow:** Land → Understand → Choose program → Go to program page → View packages → Submit trial request → Manual scheduling

| Priority | Type | Issue / Change |
|----------|------|----------------|
| **MUST DO** | CHANGED | **Program page routing — confirm scope with developer** — The user flow now routes through individual program pages (/programs/group, /programs/consultant, /programs/jake, /programs/ielts). Packages live on those pages. The "Learn More" buttons on program cards must link somewhere. **Action:** Confirm with developer: are /programs/* pages being built now, or do Learn More buttons stay as placeholders? Packages must be removed from homepage regardless. |
| **NICE TO HAVE** | NEW | **Add Packages link to program page sections and footer** — Since packages are no longer on the homepage, users need a clear path. Each program page should have its own Packages section. **Action:** Ensure footer "Programs" link is prominent. Each /programs/* page includes its own packages section. |

---

## Side-by-Side Diff

Every element that changes between the live site and Wireframe 2.5, with the required action.

| Section | Live Site / WF1 | Wireframe 2.5 | Action |
|---------|----------------|---------------|--------|
| **Hero headline** | "Students already knows..." (grammar error) | "Students Already Know More Than They Think" | Fix grammar, update copy |
| **Hero support line** | "We take what students are already learning across subjects..." | "Most students don't struggle with understanding — they struggle with expression." | Replace support line copy |
| **About voice** | First person — I / my / me throughout | Team voice — we / our / us throughout | Rewrite About in plural first person |
| **About experience stat** | "8+ Years Teaching" (solo) | "20+ Years Combined Experience" (team) | Update stat number and label |
| **About specialists** | Not mentioned | Includes IELTS/TOEFL specialists | Add one line to About copy |
| **About photo** | Unsplash stock headshot | Team photo, or Jake with caption, or no photo | Client decision needed |
| **Packages on homepage** | Full section visible | Removed — program pages only | Delete Packages section from homepage |
| **IELTS card** | Exam-focused preparation | Score-focused preparation | Update card copy |
| **1-on-1 Jake card** | Premium tier, no scarcity signal | Premium, limited availability | Add limited availability badge |
| **Our Difference** | 3 points | 4 points — "Students know more than they can express" added first | Add new lead differentiator block |
| **Form availability** | Calendar date picker | Day/time preference checkboxes | Replace calendar widget |
| **Form start date** | Not present | Optional: "When do you want to start?" | Add optional dropdown field |
| **User flow** | Homepage is the full journey | Homepage → program page → packages → form | Remove packages from homepage; confirm program pages scope |

---

## Non-Negotiable Dev Rules

These rules apply to the entire site and must not be broken under any circumstances.

### 1. No pricing on homepage
Confirmed in WF2.5. No price, 'from' amount, or cost reference anywhere on the homepage — including FAQ answers. Pricing lives inside `/programs/*` pages only.

### 2. No packages on homepage
WF2.5 makes this explicit. The Packages section must be deleted from the homepage. It appears only inside individual program pages.

### 3. Trial is request-based, not instant booking
No Calendly, no calendar embed, no auto-scheduling. The form collects availability preferences. The tutor follows up manually. No booking widget is needed.

### 4. Use "we" throughout — team positioning
All public-facing copy uses we / our / us. Jake can be named individually only on his own program card and in direct quotes.

### 5. Keep UI clean and premium
WF2.5 repeats this as an explicit dev rule. No cluttered elements, no discount language, no excessive badges. High-trust, high-value aesthetic throughout.

### 6. Program pages are the decision point
Each program card links to its own page. Those pages contain full detail and packages. The homepage is for discovery; program pages are for conversion.

---

*Document prepared from Wireframe 2.5 + live site audit · The Golden Method · April 2026*
