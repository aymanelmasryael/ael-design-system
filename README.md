# AEL | Design System — Zero-Dependency CSS Component Library

> **A zero-dependency CSS component library** — 12 components with 40+ variants.  
> Built with the AEL design language: glassmorphism, #0074FF accents, and dark theme. Copy-paste ready for any web project.  
> Built by Ayman Elmasry — AEL Digital Studio.

---

## Preview

![AEL Design System Preview](screenshot.svg)

---

## Table of Contents

- [Components](#components)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Quick Reference](#quick-reference)
- [Technical Details](#technical-details)
- [Credits](#credits)

---

## Components

| Category | Components | Variants |
|----------|-----------|----------|
| **Buttons** | Primary, Secondary, Ghost, Icon | 4 |
| **Inputs** | Text Input, Select, Textarea | 3 |
| **Cards** | Glass Card, Hover Card | 2 |
| **Badges** | Default, Primary, Success, Warning, Danger, Gold | 6 |
| **Tags** | Reusable tag chips | 4 |
| **Loaders** | Spinner (3 sizes), Dots, Skeleton | 5 |
| **Toggles** | Toggle Switch, Range Slider, Checkbox, Radio | 4 |
| **Navigation** | Nav Tabs | 2 |
| **Alerts** | Info, Success, Warning, Danger | 4 |
| **Tooltips** | Top, Bottom, Left, Right | 4 |
| **Modals** | Dialog, Confirm | 2 |
| **Progress** | Bar, Segmented, Steps | 3 |

**Total: 12 component categories · 40+ variants**

---

## Features

- **Zero dependencies** — pure CSS, no frameworks required
- **40+ variants** — multiple states and sizes for each component
- **CSS variables** — full theming via custom properties
- **Copy-paste** — one-click code snippets for every component
- **Dark theme** — optimized for dark-mode interfaces
- **Glassmorphism** — consistent frosted-glass aesthetic
- **Responsive** — works on all screen sizes
- **AEL branding** — consistent #0074FF color scheme

---

## Project Structure

```
ael-design-system/
├── index.html                  # HTML5 component showcase
├── ael_design_system.css       # Core CSS library
├── screenshot.svg              # Project preview image
├── .gitignore
└── README.md
```

This separation follows modern web best practices:
- **HTML5** — semantic elements with component demo sections
- **CSS3** — custom properties, Flexbox/Grid, animations, glassmorphism
- **Vanilla JS** — optional interactivity (not required for core components)

---

## Getting Started

### Run Locally

```bash
git clone https://github.com/aymanelmasryael/ael-design-system.git
cd ael-design-system
open index.html
```

### Quick Install

```html
<link rel="stylesheet" href="ael_design_system.css">
```

Or copy individual component code from the **Code** section of the showcase.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools, no package managers, no server

---

## Usage

### Browse Components
- Open `index.html` — all 12 component categories are displayed
- Each category shows all available variants
- Click the **Code** button to view and copy the HTML snippet

### Customize with CSS Variables

```css
:root {
  --ael-primary: #0074FF;
  --ael-bg: #0a1628;
  --ael-glass: rgba(10, 22, 40, 0.7);
  --ael-radius: 12px;
  --ael-transition: 0.2s ease;
}
```

### Copy Component Code
1. Navigate to any component
2. Click the copy icon
3. Paste directly into your project

---

## Quick Reference

### Button Examples

```html
<button class="ael-btn ael-btn-primary">Primary</button>
<button class="ael-btn ael-btn-secondary">Secondary</button>
<button class="ael-btn ael-btn-ghost">Ghost</button>
```

### Glass Card

```html
<div class="ael-card ael-glass-card">
  <h3>Card Title</h3>
  <p>Card content here</p>
</div>
```

### Alert

```html
<div class="ael-alert ael-alert-info">Info message</div>
<div class="ael-alert ael-alert-success">Success message</div>
```

---

## Technical Details

| Aspect | Detail |
|--------|--------|
| Architecture | CSS library + HTML showcase |
| CSS | Custom properties, Flexbox, Grid, animations |
| JavaScript | Optional — zero dependency requirement |
| Browser support | Chrome, Firefox, Safari, Edge (modern versions) |
| Theming | CSS custom properties |

---

## Credits

**Created by:** Ayman Elmasry — AEL Digital Studio  
**Website:** [aymanelmasry.com](https://aymanelmasry.com)  
**Email:** [info@aymanelmasry.com](mailto:info@aymanelmasry.com)  
**License:** © 2026 Ayman Elmasry — AEL Digital Studio. All rights reserved.

### Connect

[LinkedIn](https://linkedin.com/in/aymanelmasryael) · [Instagram](https://instagram.com/aymanelmasryael) · [X](https://x.com/aymanelmasryael) · [CodePen](https://codepen.io/aymanelmasryael) · [GitHub](https://github.com/aymanelmasryael) · [Behance](https://behance.net/aymanelmasryael)

---

*AEL Prompt IP System v1.0 — Sovereign Identity Block*
