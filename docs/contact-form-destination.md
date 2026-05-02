# Contact Form Destination — Options & Recommendation

## Current state
The enquiry form (`script.js` `handleSubmit`, line 168) only shows a fake "Request Sent ✓" confirmation. Submissions are **not sent or stored anywhere yet**.

## Options considered

### 1. Email (recommended)
Send each submission straight to Jake's inbox via a third-party form service.

- **Pros:** Fastest to set up (~5 minutes), zero backend code, free tier covers low volume, instant notification, replying is natural since enquiries need a personal response anyway.
- **Cons:** No searchable history beyond the inbox, no dashboard.
- **Tools:** [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), [Resend](https://resend.com), [Web3Forms](https://web3forms.com).

### 2. Supabase (database)
Store submissions in a Supabase table, view them in the Supabase dashboard.

- **Pros:** Searchable history, can build admin dashboard later, structured data, exportable to CSV.
- **Cons:** More setup (project, table schema, API keys, client code), no notification by default — you'd need to check the dashboard or add an email/webhook trigger on top.
- **When it's worth it:** Once enquiry volume is high enough that an inbox gets messy, or if Jake wants analytics on enquiries.

### 3. Excel / Google Sheets
Push each submission as a new row in a spreadsheet.

- **Pros:** Familiar interface, easy to sort/filter.
- **Cons:** No native web-form integration — needs Zapier, Make, or Google Apps Script as middleware. Slower than email and adds a third-party dependency. Excel desktop files aren't realistic for a live form.
- **Verdict:** Not worth it as a primary destination. Better as a periodic export from email or Supabase.

## Recommendation

**Phase 1 (now):** Wire up **Formspree** (or similar) so submissions hit Jake's email immediately. Lowest effort, highest value for a small tutoring business.

**Phase 2 (later, only if needed):** Add Supabase if enquiry volume grows enough to need a searchable record or dashboard. Email + Supabase can coexist — email for the alert, Supabase for the archive.

**Skip:** Direct Excel integration. If a spreadsheet is ever needed, export from email or Supabase rather than building it into the form.

## Implementation notes (for Phase 1)

- Form lives in `index.html` with class `.enquiry-form`.
- Replace the fake confirmation in `handleSubmit` (`script.js:168`) with a real `fetch()` POST to the Formspree endpoint.
- Keep the existing UI feedback (button text change + form reset) for UX consistency.
- Validate required fields client-side before submitting.
