# The Golden Method — Website Implementation Plan
**Date:** April 2026
**Based on:** Synthesis of `golden-method-dev-brief-v6-claude.md` & `golden-method-dev-brief-v6-gpt.md`

## 1. Core Direction & Positioning
The Golden Method is **not a tutoring service or a school**. It is a **premium language consulting** service focused on an "expression-first" methodology. The website must feel structured, intentional, and high-end. 

**Key UX/UI Principles:**
*   **Minimalist & Clean:** No clutter, no discount language, no "school-like" imagery.
*   **Translation-Friendly:** Short sentences (max 1 per card body, max 2 per section body). Simple vocabulary designed for non-native English readers.
*   **No Pricing on Homepage:** Pricing is restricted to specific program modals.
*   **No Instant Booking:** The form is an enquiry/assessment request only.

---

## 2. Global Vocabulary Rules (Strict Enforcement)

| ❌ DO NOT USE | ✅ USE INSTEAD |
| :--- | :--- |
| Lesson / Lessons | Session / Sessions |
| Class / Classes | Program / Group / Group Sessions |
| Teacher / Tutor | Consultant / Coach |
| Teaching / Tutoring | Coaching / Guided / Consulting |
| Child / Kids | Young learners (Only when necessary, prefer "people/individuals") |
| Student / Students | People / Individual / Participants (Limit use of "student") |
| Classroom | Session |
| Drilling / Exercises | Practice / Communication / Expression |
| Education / Learning | Progress / Growth / Development |
| "Your student" | "You" or specific references |

**Universal CTA Rule:** 
All trial-related buttons must use the exact wording: **`Request a Trial`**.
(Do not use "Book a Trial", "Start Now", "Free Trial", or "Request a Trial Session").

---

## 3. Section-by-Section Build Plan

### 1. Hero Section
*   **Badge:** ACCEPTING STUDENTS FOR SUMMER BREAK 2026
*   **Headline:** Students Already Know More Than They Think.
*   **Subheadline:** Most just haven't been taught how to communicate it clearly in English. *(GPT Refinement)*
*   **Support Line:** Understanding Isn't the Problem. Expression Is. *(GPT Refinement)*
*   **Primary CTA:** Request a Trial *(Strict)*
*   **Secondary CTA:** See How It Works *(GPT Refinement)*
*   **Trust Line:** No payment needed. In the first session, we find out exactly where you are and what you need.

### 2. Trust Bar
*   **NO COMMITMENT:** Clear level assessment in first session
*   **EXPRESSION FIRST:** Focus on communication, not memorization
*   **INDIVIDUAL FOCUS:** Individual focus, even in groups
*   **10+ YEARS:** Years experience for each consultant

### 3. Process / How It Works
*   **Headline:** A Clear Process, Tailored to the Individual
*   **Subhead:** Focus on expression, not just correctness.
*   **Step 1 — We Identify the Starting Point:** We begin with a conversation to understand current ability and communication style.
*   **Step 2 — We Build Clear Expression:** We guide full ideas first, then refine accuracy through feedback.
*   **Step 3 — Progress Doesn't Stop After the Session:** Communication improves beyond sessions through real-world use.

### 4. Programs
*   **Label:** PROGRAMS
*   **Heading:** Four programs. One commitment.
*   **Body:** Every program is personalised to the individual's level. Choose what works best for you.
*   **Cards:**
    *   Group Sessions *(Most Popular)* — Small groups, max 4. Conversation-focused.
    *   1-on-1 Consultant — Fully personalised. Real-time feedback.
    *   1-on-1 with Jake *(Premium, Limited)* — Premium. Limited availability.
    *   IELTS Specialist — Score-focused. All four skills covered.

### 5. Differentiators (What Makes This Different)
*   **Heading:** You Already Know More Than You Can Express. We Help You Show It.
*   **Cards:**
    1.  **People Know More Than They Can Say:** They have ideas and opinions. They just need help getting them out in English.
    2.  **Say It. Then Say It Better:** We focus on full sentences first. The right answer comes second.
    3.  **Confidence Comes From Doing, Not Drilling:** Confidence is built by speaking — in every session, from day one.

### 6. About Section
*   **Perspective:** First-person "I/my" (Jake).
*   **Heading:** I help people find their voice in English.
*   **Body:** I've worked with people for 8+ years. My job is to unlock what's already there — not fill gaps. I recruit and train every consultant on our team. Every person gets the same high standard.
*   **Stats:** 8+ Years · 1,000+ Participants · 7,000+ Hours

### 7. Reviews (Testimonials)
*   **Label:** WHAT CLIENTS SAY *(GPT Refinement)*
*   **Heading:** Real feedback from people who've gone through the process.
*   **Filters:** All · Group Sessions · 1-on-1 · IELTS

### 8. Intake / Contact Form
*   **Label:** GET STARTED
*   **Heading:** Start With an Assessment *(GPT Refinement)*
*   **Subheadline:** This first session helps us understand your level, identify strengths, and recommend the right path forward.
*   **Key Line:** This isn't a sample. It's a structured starting point.
*   **Form Field Refinements (Crucial):**
    *   `Student Name` ➔ **Name**
    *   `Student Age` ➔ **Age**
    *   `Current English Level` ➔ **Current English Level**
    *   `Parent / Guardian Name` ➔ **Contact Name**
    *   `Interested Program` ➔ Options updated to remove "Classes" (e.g., "Group Sessions")
*   **Submit Button:** SUBMIT ENQUIRY

### 9. FAQ & Footer
*   **FAQ Focus:** Emphasize method, fit, and progress. (e.g., "What makes this different?", "How does a session work?")
*   **Footer Tagline:** Premium English Consulting — Expression First

---
*This plan serves as the master blueprint for updating all React components in `src/components/` to align with the final V6 brand guidelines.*