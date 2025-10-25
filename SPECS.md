# Screen Transitions and Animations Specification

## Overview
Three main screens (x11, x12, x13) function as a single flow with smooth transitions and animations. x11 is the starting page.

## Screen Flow

### x11: Starting Screen (Country Selection)
- **Entry**: Default landing page
- **Globe Fly-In Animation** (on page load):
  - Globe image (image-152.png) flies in from right side
  - Initial state: invisible, scaled 2x, positioned off-screen right (left-[150%])
  - Animates to: visible, normal scale, final position (left-[860px], top-[277px])
  - Duration: 1000ms with ease-out timing
  - Globe size: 670×664px

- **Country Labels Entry Animation** (after globe flies in):
  - Start after 1000ms (when globe animation completes)
  - All country images fade in (opacity 0 → 100)
  - Scale up animation simultaneously (scale 0.9 → 1.0)
  - Staggered delays: Canada (50ms), Mexico (75ms), Colombia (100ms), Brazil (150ms), USA (0ms)
  - Duration: 700ms with ease-out timing
- **Interaction - Canada Hover Animation**:
  - **Implementation**: Inline SVG with CSS color transitions (not image swap)
  - **Scale**: From 170×50px to 208×70px
  - **Color**: Rings transition from white to #F38B00 (orange)
  - **Position offset**: Adjusted to keep rings centered during scale
  - **Duration**: 700ms with ease-out timing
  - **Note**: Changed from loading x12 to pure hover animation
  - **Other Countries on Canada Hover**:
    - All other country labels (USA, Brazil, Colombia, Mexico) shrink to 70% (30% reduction)
    - Horizontal offset by 15px (adjustable per country)
    - No color changes, only scale and position
    - Same 700ms duration with ease-out timing
    - Scale from center point (origin-center)

### x11 → x13: Market to Audience Transition
- **Trigger**: Click on "Canada" button in x11
- **Implementation**: All animations happen on x11, then navigate to x13

- **Globe Cross-Fade Animation** (1000ms):
  - **Small globe** (image-152.png): Transforms from 670×664px at position (860px, 277px) → 1868×726px at position (0, 292px) while **fading out** (opacity 1 → 0)
  - **Large globe** (image-152-1.png): Already positioned at final size/position, **fades in** simultaneously (opacity 0 → 1)
  - Creates seamless cross-fade transition between two images
  - Timing: 1000ms with ease-out

- **Content Fade Out** (x11) (500ms):
  - "Market SELECT" header fades out
  - All country buttons (USA, Brazil, Colombia, Mexico, Canada) fade out
  - Duration: 500ms

- **Navigation**:
  - Navigate to x13 after 2000ms (allows all animations to complete)

- **Content Fade In** (x13) (700ms, starts 500ms after mount):
  - "EXPLORATION PATHWAY / AUDIENCE" header fades in
  - "Choose a way to segment your audience" title fades in
  - "Lorem ipsum..." description text fades in
  - 4 segmentation buttons (Generation, Behaviors & Attitudes, Product Usage, Affluence) fade in
  - Duration: 700ms with ease-out timing

## Animation Timing Summary
- **x11 (on load)**: Globe flies in 1000ms, country labels fade in 700ms (start after globe completes)
- **x11 Canada hover**: Scale + color change 700ms, other countries shrink 700ms
- **x11 → x13**: Globe cross-fade 1000ms, content fade out 500ms, navigate after 2000ms, content fade in 700ms (on x13)

## Implementation Notes
- **x11 is the starting page** (x10 removed from main flow)
- x11 has globe fly-in animation on page load (same as x10 had)
- x11 Canada click triggers entire transition to x13 (x12 bypassed)
- Globe cross-fade technique creates seamless image swap during transformation
- All transitions use CSS transitions for smooth performance

## Screen Status
- **x10**: Optional/legacy screen, not in main flow
- **x11**: Starting page with all animations
- **x12**: Exists but bypassed in main flow
- **x13**: Final destination with audience selection
