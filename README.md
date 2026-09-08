# Portfolio - Leonie Bosshard

A high-performance, responsive portfolio web application designed and built for **Leonie Bosshard**, an Intermedia Student with photographing and graphic designing work. The platform translates visual design concepts into a production-ready Web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Technical Overview & Client Collaboration

This project focused on end-to-end client collaboration, transforming complex UI concepts into a clean, maintainable codebase:

- **Figma-to-Code Implementation:** Translated high-fidelity Figma mockups into responsive, accessible Next.js UI components.
- **Iterative Client Workflow:** Conducted direct feedback cycles to refine typography, asset framing, grid alignments, and overall visual identity.
- **Production Handover:** Engineered a centralized content configuration so the client can update project entries without modifying layout logic.

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS, `clsx` / `tailwind-merge`
- **Animations:** Framer Motion
- **Optimization:** Next.js Image Component (AVIF/WebP formats), SVG rendering

## Key Features & Architecture

- **Dynamic Project Engine:** Built a strongly typed metadata architecture that dynamically renders project cards across graphic design and photography categories through a unified card component.
- **Custom SVG Radial Skill Visualizer:** Developed a speedometer-style metric gauge using calculated SVG stroke offsets and custom icon renderers instead of generic UI libraries.
- **Modular UI Components:** Designed reusable component primitives (e.g., dynamic frame rounding, asset loaders) utilizing Tailwind utility merging for consistent visual hierarchy across pages.
- **Performance & Asset Optimization:** Implemented automated image optimization and Framer Motion transitions for smooth interaction speeds without compromising photographic image quality.

## Local Development

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/leonie-bosshard-portfolio.git
cd leonie-bosshard-portfolio
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Access local server:**
   Open `http://localhost:3000` in your browser.
