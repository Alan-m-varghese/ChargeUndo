---
name: Obsidian Kinetic
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#f5fff3'
  on-secondary: '#003919'
  secondary-container: '#34ff8c'
  on-secondary-container: '#007239'
  tertiary: '#ffffff'
  on-tertiary: '#00363d'
  tertiary-container: '#9cf0ff'
  on-tertiary-container: '#006f7c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#60ff98'
  secondary-fixed-dim: '#00e478'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005227'
  tertiary-fixed: '#9cf0ff'
  tertiary-fixed-dim: '#00daf3'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f58'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 3.75rem
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.625rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.125rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.625rem
    letterSpacing: -0.01em
  title-sm:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '600'
    lineHeight: 1.375rem
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.1875rem
    letterSpacing: 0.01em
  label-numeric:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '700'
    lineHeight: 1.5rem
    letterSpacing: -0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 0.875rem
    letterSpacing: 0.08em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
  space-2xl: 3.5rem
---

## Brand & Style

This design system delivers an authoritative, high-efficiency digital interface tailored for modern electric vehicle (EV) charging networks. It marries the disciplined, functional minimalism of premium mobility platforms with crisp electric accents that signify energy and technical precision.

The visual style is **High-Contrast Precision Minimalist**:
- **Black-Core Foundation**: Stark `#000000` canvas layered over deep obsidian tiers, creating infinite depth without visual fatigue.
- **Architectural Clarity**: Bold contrast ratios, razor-sharp hairline dividers, and deliberate spatial economy give it the gravitas of a mission-critical utility.
- **Functional Luminescence**: Dynamic electric mint highlights are reserved strictly for vital real-time data: power delivery, live station availability, state-of-charge progression, and route navigation.
- **Tone & Demeanor**: Controlled, frictionless, immediate, and premium. The interface gets out of the way, presenting charging metrics with absolute certainty.

## Colors

The palette is engineered specifically for low-light legibility, vehicle head unit displays, and outdoor glare conditions.

### Core Palette
- **Canvas Base (`#000000`)**: Deep void black for true-black OLED performance and limitless contrast.
- **Primary Accent (`#FFFFFF`)**: Pure stark white used for primary actions, prominent status tags, and high-impact headings.
- **Secondary / State of Charge (`#00FF87`)**: Electric mint neon, deployed strictly to communicate available stalls, active kilowatt delivery, connected charging states, and positive confirmation.
- **Tertiary / Telemetry (`#00E5FF`)**: High-voltage cyan for ultra-fast DC charger indicators, network status, and active routing guides.
- **Warning / Alert (`#FF3B30` & `#FFB800`)**: Strict traffic-standard signals for occupied bays, faults, offline dispensers, or surge tariff notifications.

### Obsidian Surface Tiering
- `surface-0` (`#000000`): Root viewport and bottom navigation backgrounds.
- `surface-1` (`#0A0A0A`): Elevated structural canvas and primary card fill.
- `surface-2` (`#141414`): Interactive tiles, drawer containers, and input fields.
- `surface-3` (`#1E1E1E`): Modal dialogues, sheet overlays, and hover states.
- `border-hairline` (`#222222`): 1px structural framing preventing visual bleed between obsidian planes.
- `border-subtle` (`#333333`): Focus states, dividers, and active container boundaries.

### Typography Neutral Ramp
- **High-Emphasis Text (`#FFFFFF`)**: Headlines, key numerical readouts (kW, kWh, %, $).
- **Medium-Emphasis Text (`#A0A0A0`)**: Secondary metadata, connector specifications, distance to station.
- **Low-Emphasis / Disabled Text (`#555555`)**: Sub-labels, inactive states, placeholder text.

## Typography

The typography architecture uses **Inter** throughout, leveraging its clean, neutral grotesque proportions, high x-height, and robust OpenType tabular features.

### Key Rules
- **Tabular Figures (`tnum`)**: All charging speeds, kilowatt-hour meters, timers, session costs, and percentage meters MUST enable `font-feature-settings: "tnum" 1` to prevent visual jitter during live updates.
- **Tight Kerning for Headings**: Display and headline scales apply negative letter-spacing (`-0.02em` to `-0.04em`) to mirror the compact, muscular posture of modern mobility brands.
- **Uppercase Micro-Labels**: Station port tags (e.g., `CCS2 350KW`, `NACS`, `CHADEMO`) use `label-caps` set in full uppercase with `+0.08em` tracking for instant identification at arm’s length.

## Layout & Spacing

The layout is built upon an 8pt base grid with a 4pt sub-grid for tight data arrangements.

### Grid & Form Factors
- **Mobile (< 768px)**: 4-column fluid layout with `margin: 1rem` and `gutter: 1rem`. Map is primary full-bleed background; floating sheet or drawer snaps between bottom (collapsed: 96px peek), middle (40% viewport: station details), and top (90% viewport: session checkout/filtering).
- **Tablet (768px - 1024px)**: 8-column layout. Split interface with a permanent 380px contextual panel on the left and interactive vector map occupying the remainder.
- **Desktop / In-Dash (> 1024px)**: 12-column layout with `margin: 2.5rem` and `gutter: 1.5rem`. Max container constraint of `1440px` for portal interfaces; in-vehicle views use full-width split with persistent driver telemetry.

### Spacing Principles
- Component inner padding scales with purpose: compact status pills use `space-xs` vertically and `space-sm` horizontally; cards and critical session surfaces use `space-lg` uniform padding.
- Data pairs (label + value) maintain a strict `space-xs` (4px) vertical relationship to preserve visual grouping.

## Elevation & Depth

This design system deliberately eschews standard drop shadows in favor of obsidian layering and razor-sharp borders. Depth communicates immediacy and hierarchy through luminance, not blur.

### Depth Hierarchy
1. **Base Layer (L0)**: `#000000`. Vector map canvas, night-mode road network with low-contrast gray arterials (`#1A1A1A`) and white route ribbons.
2. **Surface Layer (L1)**: `#0A0A0A` with a 1px solid `#222222` outline. Standard cards, list items, station overview cards.
3. **Elevated Interactive Layer (L2)**: `#141414` with a 1px solid `#2A2A2A` outline. Active charging bay tiles, selected station containers.
4. **Overlay / Flyout Layer (L3)**: `#1E1E1E` with a 1px solid `#383838` outline. Modal dialogues, vehicle selector drawers, QR authorization prompts. Accompanied by a 60% black backdrop curtain (`rgba(0, 0, 0, 0.75)`).

### Subtle Radial Glows (Telemetric Feedback Only)
Soft ambient glows are permitted exclusively behind primary charge state indicators. A 24px blur radial light with 15% opacity using `#00FF87` is allowed behind the active SOC percentage ring during continuous power transfer to denote kinetic energy flow.

## Shapes

The design system incorporates a dual-geometry approach: **Pill-shaped action elements** contrasted against **disciplined, softly-rounded structural containers**.

- **Interactive Primary Elements (`roundedness: 3`, Full Pill / 9999px)**: Primary CTAs, status tags, plug filter selectors, search input pills, and quick-filter chips use generous capsule geometries for rapid touch targets.
- **Structural Modules (`rounded-lg: 1rem`)**: Charging bay cards, analytics widgets, payment methods, and notification banners use a controlled 16px corner radius, balancing modern sleekness with structural rigidity.
- **Connector Icon Badges (`rounded-md: 0.5rem`)**: Plug type indicators (CCS, NACS) sit inside 8px rounded square boxes with 1px border lines.

## Components

### 1. Primary Action Buttons
- **Stark Primary (The Signature Button)**: Pure `#FFFFFF` background with `#000000` bold text. Fully pill-shaped (`border-radius: 9999px`). Height: 56px (mobile) / 48px (desktop). Tap feedback: instantaneous scale-down to `0.98` with opacity `#E0E0E0`.
- **Secondary Button**: `#141414` background with a 1px solid `#2A2A2A` border and `#FFFFFF` text. Fully pill-shaped. Hover: background becomes `#1E1E1E`.
- **Ghost Action**: Transparent background with `#FFFFFF` or `#00FF87` underline text and icon.

### 2. Charging Status Cards & Badges
- **Station Availability Badge**: Pill container with `#00FF871A` (10% tint) fill, `#00FF87` hairline border, and a 6px pulsing electric mint dot next to `4/6 AVAILABLE`.
- **High-Power (DC Fast) Tag**: Inverted badge with `#FFFFFF` background, `#000000` text, reading `350 kW`.
- **In-Session Charge Card**: `#0A0A0A` surface with 1px `#222222` outline. Displays big tabular metrics: State of Charge (e.g. `78%`), real-time delivery rate (`184 kW`), session cost (`$14.20`), and time remaining (`12 min`).

### 3. Connectors & Filter Chips
- Capsule-shaped interactive chips (`height: 36px`). Inactive state: `#0A0A0A` with 1px `#222222` border and `#A0A0A0` text. Active state: `#FFFFFF` fill with `#000000` text, displaying specific plug icons (NACS / CCS2).

### 4. Input Fields
- Obsidian pill or rounded-lg fields with `#141414` fill and 1px `#222222` border. Height: 52px. Inner text: `#FFFFFF`. Placeholders: `#555555`. Focused state: 1px outline in pure `#FFFFFF`. Search inputs feature a monochrome search glyph and a dedicated electric green location pin action.

### 5. Checkboxes, Toggles & Radios
- **Toggle Switches**: 28px height, 48px width pill track. Off: `#1E1E1E` track with `#555555` thumb. On: `#00FF87` track with `#000000` thumb.
- **Radio Bay Selectors**: Circular 20px dial with 2px `#2A2A2A` border. When selected: `#FFFFFF` outer ring with a 10px `#000000` gap and `#FFFFFF` solid inner dot.

### 6. Map UI Overlays
- **Station Pins**: Minimalist black pill with white typography showing station speed (e.g. `150`) and a solid green dot indicating open availability. Dimmed gray pin (`#333333`) when all bays are occupied.
- **Route HUD**: Top-anchored floating capsule displaying distance, arrival SOC estimate (`24% ARRIVE`), and direct precondition battery triggers.