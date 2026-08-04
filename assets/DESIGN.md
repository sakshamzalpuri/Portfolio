---
name: Kinetic Cyber
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c3caac'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8d9479'
  outline-variant: '#434933'
  surface-tint: '#a7d700'
  primary: '#ffffff'
  on-primary: '#273500'
  primary-container: '#bff500'
  on-primary-container: '#546d00'
  inverse-primary: '#4e6700'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#bff500'
  primary-fixed-dim: '#a7d700'
  on-primary-fixed: '#151f00'
  on-primary-fixed-variant: '#3a4d00'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 4rem
  gutter: 24px
  margin: 32px
---

## Brand & Style

This design system is defined by a high-energy, tech-forward aesthetic that bridges the gap between premium software and futuristic industrial design. It targets a modern, tech-savvy audience through a **High-Contrast / Bold** style that utilizes a dark-mode-first environment punctuated by acidic neon accents.

The visual language is structured and geometric, conveying precision, speed, and innovation. It feels "always-on" and energetic, yet maintains professional clarity through disciplined typography and generous internal spacing. The atmosphere is nocturnal and immersive, making it ideal for developer tools, portfolios, or fintech applications.

## Colors

The palette is anchored by a deep obsidian background, creating a zero-distraction environment. 

- **Primary (Neon Lime):** Reserved for high-priority calls to action, active states, and critical highlights. Its high luminance ensures immediate visual hierarchy.
- **Secondary (Pure White):** Primarily used for high-contrast text and prominent secondary actions.
- **Surface Tiers:** Uses a layered approach with `#000000` as the base canvas and `#1A1A1A` for containers, cards, and input fields to create subtle depth.
- **Support Colors:** Accents of muted green-greys are used for borders and inactive states to prevent the UI from feeling overly harsh while maintaining the monochromatic tech feel.

## Typography

The system utilizes a dual-font approach. **Plus Jakarta Sans** serves as the primary face for headings and body copy, providing a modern, geometric clarity. For technical metadata and labels, **Geist** is used to introduce a monospaced, developer-focused precision.

Large headlines should use tight letter-spacing to enhance the "bold" impact. Body text maintains generous line-heights for readability against the dark background. Labels are often set in uppercase with slight tracking to reinforce the technical dashboard aesthetic.

## Layout & Spacing

This design system uses a **Fluid Grid** model built on an 8px rhythm, with 4px sub-increments for tight component internal spacing.

- **Desktop:** 12-column grid with 24px gutters. Content is typically contained in card-based modules that scale with the viewport.
- **Tablet:** 8-column grid with 20px gutters.
- **Mobile:** 4-column grid with 16px gutters and 16px side margins.

Layouts should favor "stacking" logic where sections are clearly separated by wide `xl` gaps, while internal card components use dense `sm` or `md` padding to maintain a compact, "cockpit-like" feel.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows. 

1. **Base Layer:** Pure black (#000000).
2. **Container Layer:** Deep charcoal (#1A1A1A) with soft 1px borders in a slightly lighter grey (#2A2A2A).
3. **Interactive Layer:** Active elements use the Neon Lime (#C7FF00) to "pop" off the surface.

Avoid shadows unless they are "Glow" effects used sparingly for primary buttons, utilizing the primary color with a 20% opacity and 20px blur to simulate a technical display radiance.

## Shapes

The shape language is consistently **Rounded**, using a 0.5rem base radius. This softens the aggressive high-contrast palette and makes the tech aesthetic feel premium and approachable rather than harsh. 

Larger containers and cards should scale to `rounded-xl` (1.5rem) to create clear containment. Buttons and input fields should remain at the standard `rounded` (0.5rem) to maintain a crisp, functional appearance.

## Components

- **Buttons:** 
    - *Primary:* Solid Neon Lime (#C7FF00) with Black (#000000) text. Bold weight.
    - *Secondary:* Solid White (#FFFFFF) with Black text.
    - *Outlined:* 1px border in Neon Lime or White with transparent background.
- **Input Fields:** Background set to #1A1A1A with a 1px border. On focus, the border transitions to Neon Lime. Use Geist for placeholder text.
- **Chips/Labels:** Small, high-contrast pills with Geist typography. Can be used with an icon prefix for status indicators.
- **Cards:** Defined by #1A1A1A backgrounds and `rounded-xl` corners. Use these to group related data points.
- **Navigation:** Bottom-docked or side-docked floating bars with blurred backgrounds and high-contrast icon buttons.
- **Data Visualization:** Line charts and progress bars must use Neon Lime for "active/positive" data and White for "neutral" data.