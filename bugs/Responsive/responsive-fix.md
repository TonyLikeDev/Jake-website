# Bug Report: Excessive Empty Space on Mobile

## Problem
The landing page, particularly the Hero section and general section transitions, contains too much empty space on mobile devices.

### Symptoms
- The Hero section occupies `100vh` (full screen height), which can feel sparse or disconnected from the content below on smaller screens.
- Standard section padding (`64px 0` on mobile) creates large gaps between content blocks.
- On some mobile browsers, the `100vh` height can cause layout shifts due to the browser's dynamic UI bars (address bar).

## Root Causes
1. `.hero` has `min-height: 100vh` globally.
2. `section` padding on mobile is set to `64px 0`.

## Fix Applied
1. Changed `.hero` min-height to `auto` on mobile (max-width: 768px) and added appropriate vertical padding (`120px 0 60px`) to ensure content is well-framed without forcing a full-screen height.
2. Reduced global `section` padding from `64px 0` to `48px 0` for better content density on mobile.

## Verification Checklist
- [x] Hero section content is visible and accessible without excessive scrolling.
- [x] Gaps between sections (e.g., Method -> Approach -> Programs) are tighter and more cohesive.
- [x] Trust bar follows the Hero section naturally.
