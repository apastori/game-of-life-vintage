# GAME OF LIFE TOTO

A vintage-retro-futuristic implementation of **John Conway's Game of Life**, styled as a Cold War–era scientific research console. The interface is designed to feel like a forgotten laboratory instrument — brass panels, bakelite controls, oscilloscope readouts, and an observation chamber for cellular automata.

![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)

## Overview

This project is an interactive cellular automata simulator built with React, TypeScript, and Vite. It faithfully implements Conway's rules on a **30×50** grid while wrapping the experience in a handcrafted vintage machine aesthetic inspired by 1970s laboratory equipment, military simulation consoles, and analog scientific instruments.

The visual design prioritizes atmosphere, tactile depth, and mechanical authenticity over modern flat UI conventions. Every surface is intended to feel physical — engraved metal, inset panels, indicator lamps, and hardware buttons with realistic press states.

## Features

- **Full Game of Life simulation** — start, pause, step-through generations
- **Interactive grid editing** — click or drag to toggle cells
- **Configurable editing rules** — allow editing while paused or while running
- **Variable simulation speed** — Slow, Medium, Fast, Lightning
- **Random seed** — populate the grid with a random initial state
- **Clear** — reset grid, generation counter, and simulation state
- **Live system readouts** — date, time, generation counter, and status indicators
- **Responsive layout** — adapts from desktop showcase to mobile usability

## Conway's Game of Life — Rules

1. **Underpopulation** — If a live cell has fewer than two live neighbors, it dies.
2. **Survival** — If a live cell has two or three live neighbors, it survives.
3. **Overpopulation** — If a live cell has more than three live neighbors, it dies.
4. **Reproduction** — If a dead cell has exactly three live neighbors, it becomes alive.

### Pattern Types

Different initial configurations evolve into distinct pattern categories:

- **Still Life** — patterns that do not change (e.g., block, beehive)
- **Oscillators** — patterns that repeat after a fixed number of generations (e.g., blinker, toad)
- **Gliders** — small patterns that translate across the grid
- **Spaceships** — larger moving patterns (e.g., lightweight spaceship)

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI Framework | React 18 |
| Language | TypeScript (strict mode) |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 3 + custom component classes |
| Utilities | tailwind-merge |

## Getting Started

### Prerequisites

- Node.js 18+
- [pnpm](https://pnpm.io/) (recommended — project uses `pnpm-lock.yaml`)

### Install & Run

```bash
pnpm install
pnpm dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Other Scripts

```bash
pnpm build    # TypeScript check + production build
pnpm lint     # ESLint
pnpm preview  # Preview production build locally
```

## Project Structure

```
src/
├── App.tsx                  # Root layout — machine chassis wrapper
├── GameLife.tsx             # Main component — state, logic, layout sections
├── computeNextGrid.ts       # Core Game of Life generation logic
├── canEditGrid.ts           # Editing permission rules
├── GridConfig.ts            # Grid dimensions (30 rows × 50 columns)
├── components/
│   ├── MachineHeader.tsx    # Engraved hero title + decorative frame
│   ├── SystemReadout.tsx    # Live date/time and status readouts
│   ├── ControlButton.tsx    # Start / Pause / Step hardware buttons
│   ├── ClearButton.tsx      # Reset control
│   ├── SeedRandomButton.tsx # Random seed control
│   ├── SelectorSpeed.tsx    # Speed selector
│   ├── EditingToggle.tsx    # Mechanical toggle switches
│   ├── GridButton.tsx       # Individual grid cell
│   ├── SimulationStatus.tsx # Running/paused indicator lamp
│   └── GenerationText.tsx   # Generation counter readout
├── index.css                # Vintage design system (component classes)
└── ...
tailwind.config.js           # Design tokens — colors, fonts, animations
index.html                   # Fonts, favicon, page title
public/
└── john-conway-favicon.png  # Favicon (John Conway)
```

## Design Philosophy

The interface is built around one central idea: **the application is a physical machine**, not a web page.

Design references include:

- Forgotten Cold War scientific computer terminals
- 1970s laboratory control panels
- Military simulation consoles
- Retro analog electronic instruments
- Vintage cybernetic research equipment

The aesthetic deliberately avoids generic modern SaaS patterns — no flat corporate dashboards, no startup-style gradients, no neon cyberpunk. Instead, the palette draws from **aged brass, burnished copper, dark walnut, oxidized metal, and warm amber indicator lighting**.

## Visual Design System

Styling is centralized in two files that work together:

- **`tailwind.config.js`** — design tokens (colors, fonts, shadows, keyframes)
- **`src/index.css`** — reusable component classes under `@layer components`

Components consume these shared classes rather than duplicating inline styles, keeping the system maintainable.

### Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `brass` | `#c9a227` | Primary accent — frames, labels, engraved text |
| `brass-light` | `#e8c84a` | Highlighted brass surfaces |
| `brass-dark` | `#8b6914` | Panel borders, depth shadows |
| `copper` | `#b87333` | Secondary metallic accent |
| `walnut` | `#3d2817` | Warm wood-toned panel backgrounds |
| `charcoal` | `#1a1a1e` | Deep machine body, dead cell background |
| `amber` | `#ffb347` | Live cell phosphor glow, readout text |
| `monitor` | `#39ff14` | Active status indicators (vintage green CRT) |
| `warning` | `#cc3333` | Paused / alert indicator lamps |
| `steel` | `#4a6fa5` | Industrial blue accent |
| `bakelite` | `#2a2420` | Button and switch body material |

CSS custom properties in `:root` mirror key colors and define `--cell-size: clamp(10px, 2.2vw, 20px)` for responsive grid cells.

### Typography

Three font families loaded from Google Fonts, each serving a distinct hierarchy role:

| Role | Font | Usage |
|------|------|-------|
| Display | **Saira Stencil One** | Main title — "GAME OF LIFE TOTO" |
| Label | **Oswald** | Panel labels, button text, section headings |
| Mono | **Share Tech Mono** | Readouts, counters, timestamps |

The title uses an **engraved metal treatment** (`.engraved-title`): a multi-stop brass gradient clipped to text, combined with layered drop shadows to simulate depth carved into a machine panel. Subtitles use wide letter-spacing (`.engraved-subtitle`) to mimic stamped serial plates.

Body text defaults to Oswald with a warm brass tint (`rgba(232, 200, 74, 0.9)`).

### Layout Architecture

The UI is organized into three framed sections inside a `.machine-chassis` wrapper:

```
┌─────────────────────────────────────────┐
│  MACHINE HEADER                         │
│  Engraved title + live system readouts  │
├─────────────────────────────────────────┤
│  CONTROL DECK                           │
│  Start / Pause / Step / Clear / Random  │
│  Speed selector + editing toggles       │
├─────────────────────────────────────────┤
│  OBSERVATION CHAMBER                    │
│  Status + generation readouts           │
│  Framed grid behind glass overlay       │
└─────────────────────────────────────────┘
```

Each section uses `.vintage-panel` — a raised metal frame with inset highlights, deep outer shadows, and decorative `.screw` elements at the corners.

### Component Styling Decisions

#### Machine Chassis (`.machine-chassis`)

The root background uses a vertical walnut-to-charcoal gradient with two pseudo-element overlays: a subtle brass ambient glow at the top and a vignette darkening the edges. A faint horizontal scanline pattern adds analog texture without distracting from content.

#### Vintage Panels (`.vintage-panel`, `.inset-panel`)

Panels simulate layered metal surfaces using multi-stop linear gradients and compound box-shadows (inset highlight + inset shadow + outer drop shadow + brass border ring). This creates the illusion of a physical bezel mounted on the chassis.

#### Hardware Buttons (`.vintage-btn`)

All control buttons (Start, Pause, Step, Clear, Random) share a single bakelite button class:

- **Default** — raised with a 3px bottom shadow simulating physical depth
- **Hover** — 1px lift, brighter surface, faint amber glow
- **Active/pressed** — 2px depression with inset shadow
- **Disabled** — flattened, desaturated, inset-only shadow (inactive hardware)

#### Mechanical Toggle Switches (`.mechanical-toggle`)

Editing toggles hide the native checkbox (`sr-only`) and render a custom track + thumb. When checked, the track shifts to a green-tinted background and the thumb slides right with a brass gradient and glow — mimicking a laboratory rocker switch.

#### Readouts (`.readout`)

Status displays and counters use a dark inset background with faint green border tint (oscilloscope CRT bezel), monospace amber text with glow, and a scanline overlay pseudo-element. Numbers use tabular spacing and zero-padding for instrument-panel authenticity.

#### Indicator Lamps (`.indicator-lamp`)

Small circular lamps with three states:

- **Active** (`.indicator-lamp--active`) — green glow with pulse animation
- **Inactive** (`.indicator-lamp--inactive`) — dark recessed socket
- **Warning** (`.indicator-lamp--warning`) — red glow for paused state

#### Observation Chamber (`.observation-chamber`)

The grid sits inside a thick walnut/brass frame with corner screws, an inner dark viewport (`.observation-chamber-inner`), and a `.glass-overlay` pseudo-element providing diagonal sheen and faint scanlines — making the cellular matrix appear viewed through protective glass.

#### Grid Cells (`.grid-cell`)

| State | Class | Visual |
|-------|-------|--------|
| Dead | `.grid-cell--dead` | Near-black (`#0a0a0e`) with subtle border |
| Alive | `.grid-cell--alive` | Radial amber phosphor gradient with glow box-shadow |

Cell size is responsive via `clamp(10px, 2.2vw, 20px)`, preserving the original 20px desktop feel while scaling down on smaller screens. The chamber scrolls horizontally on narrow viewports so the full grid remains accessible.

#### Decorative Details

- **Screws** (`.screw`) — radial-gradient circles with a cross-slot pseudo-element at panel corners
- **Separators** (`.instrument-separator`) — horizontal brass gradient lines fading at edges
- **Serial labels** — "SER. NO. CA-1970-Ω", "CAL. CERT. VALID", "OBSERVATION PORT Mk.IV" stamped at panel footers
- **Glass overlay** — diagonal light reflection + scanline texture on the grid viewport

### Motion Design

Animations are defined in `tailwind.config.js` and applied via CSS classes. All motion is **precise and mechanical** — no bouncy or cartoon effects.

| Animation | Duration | Effect |
|-----------|----------|--------|
| `cell-birth` | 0.35s | Scale from 0.6 → 1.08 → 1 with amber glow expansion |
| `cell-death` | 0.4s | Brightness and opacity decay (vintage monitor fade) |
| `flicker` | 3s loop | Subtle opacity variation on the live clock readout |
| `indicator-pulse` | 2s loop | Active lamp breathing glow |
| `blink` | 1.5s loop | Indicator lamp on/off cycle |
| `scanline` | 8s loop | Vertical scanline sweep (available for CRT effects) |

Button interactions use CSS `transition-all duration-150` for immediate mechanical feedback on hover and press.

### System Readout Panel

`SystemReadout.tsx` is a presentational component with isolated display-only state (a 1-second interval for the live clock). It renders six instrument readouts:

| Label | Content |
|-------|---------|
| SYSTEM DATE | Current date (MM.DD.YYYY) |
| SYSTEM TIME | Live clock (HH:MM:SS) with flicker animation |
| GENERATION ENGINE | Zero-padded generation counter |
| CELLULAR AUTOMATA | Active/Standby lamp + label |
| SIMULATION STATUS | Running/Paused lamp + label |
| SIMULATION ACTIVE | Engaged/Idle lamp + label |

This is the only UI addition that introduces new state, and it is fully isolated from game logic.

## Architecture Notes

- **Game logic is untouched** — `computeNextGrid.ts`, `canEditGrid.ts`, `Rules.ts`, and `GridConfig.ts` contain pure simulation logic with no UI coupling.
- **State lives in `GameLife.tsx`** — all simulation state (grid, playing, generation, speed, editing permissions, mouse drag) is managed here and passed down as props.
- **Strict TypeScript** — branded integer types, interface-driven props, and assertion utilities enforce type safety throughout.
- **No duplicated styling** — three previously near-identical button components now share `.vintage-btn`; tokens live in one Tailwind config.

## Responsive Behavior

| Breakpoint | Adaptation |
|------------|------------|
| Desktop | Full museum-quality layout, 20px cells, multi-column readout grid |
| Tablet | Condensed readout grid (3 columns), maintained panel framing |
| Mobile | 2-column readouts, stacked control deck, smaller cells via clamp(), horizontal scroll in observation chamber |

## License

This project is licensed under the **GNU General Public License v2.0**.

See [LICENSE](./LICENSE) for the full license text.

```
Copyright (C) 2026 apastori

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.
```

## Acknowledgments

- **John Horton Conway** (1937–2020) — mathematician who created the Game of Life in 1970
- Favicon portrait: `public/john-conway-favicon.png`
