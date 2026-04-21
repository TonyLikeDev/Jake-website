# 🐛 BUG: Content flush against container edges (desktop)

**Severity:** Medium — visual/polish bug, page still usable but looks unprofessional
**Platform:** Desktop (Brave browser visible in screenshot)
**URL tested:** `http://localhost:5173`
**Page:** The Golden Method – About Jake section + Stats section
**Screenshot:** `1776762839402_image.png`

---

## What's happening (observed)

Content is **flush against the left edge** of its container with no horizontal padding / breathing room:

1. **Jake's photo** (left column) — the image starts at the very edge, touching the container's left side.
2. **Stats row** at the bottom (`8+ Years`, `1,000+`, `7,000+`) — the first stat `8+ Years` also starts right at the left edge, no offset from the container.

The content looks "stuck" to the edges of the white box instead of being comfortably inset.

---

## Expected behavior

- Content should have **consistent horizontal padding** from the container edges on desktop.
- The left image should align with the left padding line used by the text and stats above/below — so everything has the same "left gutter".
- Recommended: minimum `24–48px` of horizontal padding on desktop, or use a `max-width` container with `margin: 0 auto` and internal padding.

---

## Likely causes

- [ ] The section wrapper has **no `padding-inline`** (or `padding-left` / `padding-right`) set.
- [ ] The container is using `width: 100%` without a `max-width` + centered margins.
- [ ] The image column has a negative margin or `margin-inline-start: 0` overriding the parent padding.
- [ ] Grid/flex layout is stretching children edge-to-edge instead of respecting container padding.

---

## Suggested fix

### Option A — add horizontal padding to the container

```css
.about-section,
.stats-section {
  padding-inline: 48px;   /* or clamp for responsive */
  /* or: padding-left: 48px; padding-right: 48px; */
}

@media (max-width: 768px) {
  .about-section,
  .stats-section {
    padding-inline: 16px;
  }
}
```

### Option B — use a centered max-width wrapper

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding-inline: 24px;
}
```
Then wrap the About section and Stats section content inside `.container`.

### Option C — responsive padding with `clamp`

```css
.section {
  padding-inline: clamp(16px, 5vw, 64px);
}
```
Scales padding smoothly between mobile and desktop.

---

## Checklist

- [ ] Jake's photo has visible left padding (not touching container edge)
- [ ] `8+ Years` stat has same left offset as the paragraph text above it
- [ ] Right side also has matching padding (check `7,000+` doesn't touch right edge)
- [ ] All sections on the page use the **same horizontal padding value** (consistent gutter across the whole page)
- [ ] Padding scales appropriately on smaller screens (not too much on mobile, not too little on wide desktop)
- [ ] Check on wide monitors (1440px+, 1920px+) — content should have `max-width` so it doesn't stretch across the full screen

---

## Related

This likely affects other sections too, not just About + Stats. After fixing, scroll through the whole page and verify every section has consistent horizontal padding (Packages, What Clients Say, Contact Form, etc.).
