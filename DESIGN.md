---
name: Luminous Emerald FinTech
colors:
  surface: '#0f131d'
  surface-dim: '#0f131d'
  surface-bright: '#353944'
  surface-container-lowest: '#0a0e18'
  surface-container-low: '#171b26'
  surface-container: '#1c1f2a'
  surface-container-high: '#262a35'
  surface-container-highest: '#313540'
  on-surface: '#dfe2f1'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dfe2f1'
  inverse-on-surface: '#2c303b'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#68dba9'
  on-secondary: '#003825'
  secondary-container: '#25a475'
  on-secondary-container: '#00311f'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#19aee8'
  on-tertiary-container: '#003e55'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#0f131d'
  on-background: '#dfe2f1'
  surface-variant: '#313540'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.005em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  financial-mono:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system expresses a serene, sovereign mastery over wealth and algorithmic intelligence. It merges the institutional trustworthiness of private banking with the effortless clarity of a next-generation AI co-pilot. 

The aesthetic is built on **refined dark-mode glassmorphism**: deep abyssal navies and midnight slates layered under frosted silica surfaces, pierced by radiant emerald accents and soft chromatic ambient gradients. The emotional goal is cognitive calm—eliminating the anxiety inherent to personal financial administration through surgical legibility, expansive breathing room, balanced contrast, and delicate tactile depth.

## Colors

The palette is engineered around dark atmospheric balance, high legibility, and targeted optical highlights.

### Primary & Functional Accents
- **Primary Emerald (`#10B981`)**: Represents financial health, positive yields, active actions, and positive trend vectors.
- **Secondary Deep Emerald (`#059669`)**: State changes, active presses, interactive button gradients, and focus depth.
- **Tertiary Cyan (`#38BDF8`)**: AI contextual insights, predictive forecasts, and secondary analytic data streams.
- **Negative / Alert (`#EF4444`)**: Unfavorable variances, expenses over budget, input validation alerts, and destructive actions.

### Canvas & Surface Architecture
- **Base Canvas**: Linear gradient from Deep Navy (`#0B0F19`) to Slate Dark (`#111827`) along a 180° light falloff.
- **Glass Surfaces**: `rgba(17, 24, 39, 0.70)` to `rgba(31, 41, 55, 0.50)` compounded with `backdrop-filter: blur(20px)`.
- **Structural Outlines**: Monolithic edge definition via `rgba(255, 255, 255, 0.08)` for standard structures and `rgba(255, 255, 255, 0.15)` for interactive or raised containers.

### Typography & Content Tones
- **Text Primary (`#F9FAFB`)**: High-contrast, pristine white for account values, titles, and decisive metrics.
- **Text Secondary (`#9CA3AF`)**: Balanced cool silver for captions, metadata, supporting copy, and table labels.
- **Text Muted (`#6B7280`)**: Suppressed slate for placeholders, decorative timestamps, and structural borders.

## Typography

The type system prioritizes computational precision, balanced rhythmic pacing, and clear numeric scans. 

- **Font Family**: Plus Jakarta Sans provides clean geometric construction paired with modern humanist finishes.
- **Tabular Figures**: For currency rows, ticker streams, and balance sheets, employ `font-variant-numeric: tabular-nums` to ensure exact column alignment across changing values.
- **Hierarchy Rules**: Primary balance statements and high-level AI takeaway cards must utilize negative letter tracking (`-0.02em` to `-0.03em`) to anchor authority. Overline tags and status badges transition to uppercase tracking (`0.04em`) to establish crisp section boundaries.

## Layout & Spacing

The structural layout uses an adaptive 12-column fluid grid system on desktop that gracefully collapses to a 6-column grid on tablet, and a single or dual-column setup on mobile devices.

### Grid & Boundaries
- **Desktop (1280px+)**: 12-column fluid configuration, `2.5rem` (`40px`) margins, `1.5rem` (`24px`) gutters. Maximum content constraint capped at `1440px`.
- **Tablet (768px - 1279px)**: 6-column fluid structure, `1.5rem` (`24px`) margins and gutters.
- **Mobile (< 768px)**: 4-column flow with `1rem` (`16px`) outer margins and `1rem` gutters.

### Spatial Cadence
Spacing follows an exact 8pt spatial baseline:
- `space-xs` (4px): Micro-gaps between status dots, currency signs, and text labels.
- `space-sm` (8px): Icon-to-label distances, list item interior padding.
- `space-md` (16px): Standard form element gap, chip clusters, inner card sub-blocks.
- `space-lg` (24px): Standard card container padding, section component stack.
- `space-xl` (40px): Segmented widget gaps, major analytic block separations.

## Elevation & Depth

Visual hierarchy does not rely on opaque shadows. Depth is maintained through glassmorphic stacking, edge highlight reflections, and diffused chromatic radiance.

### Layer Stack Architecture
1. **Canvas (Base 0)**: Unadorned deep dark navy `#0B0F19`. Decorated only by large, low-opacity ambient back-glows (e.g., radial gradients of `#10B981` at 8% opacity and `#38BDF8` at 5% opacity, each with `blur(120px)`).
2. **Surface Glass (Level 1 - Cards, Panels)**: 
   - Fill: `rgba(17, 24, 39, 0.70)`
   - Backdrop Filter: `blur(20px)`
   - Stroke: 1px continuous hairline `rgba(255, 255, 255, 0.08)`
   - Shadow: `0 10px 30px -10px rgba(0, 0, 0, 0.5)`
3. **Elevated Overlays (Level 2 - Modals, Dropdowns, Float Nav)**:
   - Fill: `rgba(24, 33, 53, 0.85)`
   - Backdrop Filter: `blur(32px)`
   - Stroke: 1px `rgba(255, 255, 255, 0.15)`
   - Shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08) inset`
4. **Active Focus & Glow (Level 3)**:
   - Interactive nodes generate outward radiance: `box-shadow: 0 0 20px rgba(16, 185, 129, 0.25)`.

## Shapes

The design uses a balanced rounded architecture (Level 2) that softens technical financial data without looking playful or non-serious.

- **Base Radius (`rounded-md`, 0.5rem / 8px)**: Inputs, action buttons, table cell selections, inline badges.
- **Intermediate Radius (`rounded-lg`, 1rem / 16px)**: Metric tiles, transaction list containers, modular data sheets.
- **Large Radius (`rounded-xl`, 1.5rem / 24px)**: Hero analytics viewports, dynamic AI query interfaces, primary dialog modules.
- **Pill (`rounded-full`)**: Preserved exclusively for contextual status pills, categorical chips, and circular icon wrappers.

## Components

### Buttons
- **Primary Action**: Solid emerald (`#10B981`) background, deep slate text (`#0B0F19`), weight 600. On hover: `#059669` transition with an emerald ambient glow (`0 0 16px rgba(16, 185, 129, 0.35)`).
- **Secondary (Glass)**: Frosted surface (`rgba(255, 255, 255, 0.05)`), border `rgba(255, 255, 255, 0.10)`, text `#F9FAFB`. Hover expands opacity to `rgba(255, 255, 255, 0.10)`.
- **Tertiary (Ghost)**: Transparent ground, text `#9CA3AF`, hover text `#F9FAFB` with `rgba(255, 255, 255, 0.04)` fill.

### Input Fields
- **Container**: Fill `rgba(17, 24, 39, 0.60)`, 1px border `rgba(255, 255, 255, 0.08)`, radius `0.5rem`.
- **Text & Placeholder**: Value color `#F9FAFB`, placeholder `#6B7280`.
- **Focus State**: Border transitions to `#10B981` with an outward halo: `box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.20)`.
- **Error State**: Border shifts to `#EF4444` with a red halo: `box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.20)`. Subtext renders in `#EF4444` at `body-sm`.

### Cards & Data Modules
- **Structure**: Glass layer with `backdrop-filter: blur(20px)`, border `rgba(255, 255, 255, 0.08)`, internal padding `1.5rem`.
- **Accent Top-Light**: Optional subtle pseudo-element border on top edge (`1px linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`).

### Chips & Filter Tags
- **Default State**: Surface `rgba(255, 255, 255, 0.04)`, border `rgba(255, 255, 255, 0.08)`, text `#9CA3AF`, rounded-full.
- **Active State**: Surface `rgba(16, 185, 129, 0.15)`, border `rgba(16, 185, 129, 0.40)`, text `#10B981`.

### Checkboxes & Radios
- **Unchecked**: Base `rgba(17, 24, 39, 0.80)`, 1.5px border `rgba(255, 255, 255, 0.20)`, size `18px`, radius `4px` (checkbox) or `50%` (radio).
- **Checked**: Fill `#10B981`, checkmark/inner-dot `#0B0F19`.

### Transaction Lists
- **Rows**: Separated by hairline borders (`1px solid rgba(255, 255, 255, 0.05)`). Hover state shifts row background to `rgba(255, 255, 255, 0.02)`.
- **Amount Values**: Positive inflows formatted in `#10B981` (`+$1,240.00`), standard outflows formatted in `#F9FAFB` (`-$42.50`), with tabular font sizing.

### AI Financial Assistant Pill / Feed
- **Visual Style**: Distinctive subtle cyan-emerald linear gradient border (`linear-gradient(135deg, #10B981, #38BDF8)` at 30% opacity).
- **Prompt Input**: Pill-shaped frosted input featuring an animated subtle pulsing emerald beacon indicator to signal dynamic readiness.