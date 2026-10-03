# Northstar Freight — Immersive Scrollytelling Logistics Experience

A responsive, high-end freight and multimodal logistics landing page built with React, TypeScript, and Tailwind CSS. The central experience features an interactive scrollytelling journey where dimensional, bespoke vector scenes—a gantry crane loading a flatbed truck, a container vessel navigating open seas, and a cargo freighter in flight—move and transform in real-time in sync with scroll progress.

---

## ✨ Features

- **Interactive Scrollytelling Scenes**:
  - **Intermodal Depot (Crane & Truck)**: Pinned 4-stage sequence where an overhead gantry crane positions a 40ft container, lowers it onto a flatbed chassis with suspension compression, locks the twist pins, and dispatches the truck onto the highway. Includes interactive stage scrubber controls.
  - **Deep-Sea Ocean Freight**: A container ship sailing across dynamic ocean swells and horizons with progressive reveals of supply chain callouts.
  - **High-Altitude Air Freight**: Cargo aircraft gliding across the upper sky with condensation trails, transitioning seamlessly into enterprise customer testimonials.
- **Editorial Brand Direction**:
  - Original brand identity: **Northstar Freight** (*"We move freight. We own the outcome."*).
  - High-contrast, restrained color palette (deep navy `#0B132B`, maritime ocean blue `#1D4ED8`, sky accent `#0284C7`, warm white canvas `#F8FAFC`).
  - Zero external image dependencies: all illustrations are handcrafted layered SVGs and CSS vectors for instant, reliable loading at any resolution.
- **Interactive Capabilities**:
  - **Multimodal Services**: Air Freight, Ocean Freight, and Customs Clearance cards with original vector icons and lane metrics.
  - **Our Approach**: Smooth architectural arch transition with an interactive 4-phase custody lifecycle coordinator (*Intake*, *Handshake*, *Linehaul*, *Final Mile*).
  - **Operations Inquiry Modal**: Interactive booking planner with mode selection, validation, and simulated SLA dispatch confirmation.
- **Accessibility & Performance**:
  - Full keyboard accessibility with focus rings (`focus-visible`).
  - Native `prefers-reduced-motion` detection with graceful static fallbacks.
  - Smooth 60fps/120fps scroll interpolation without layout shifts.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion**: Custom high-performance scroll hooks & [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/northstar-freight.git

# Navigate to project directory
cd northstar-freight

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be running at `http://localhost:3000`.

---

## 📄 License

Apache-2.0
