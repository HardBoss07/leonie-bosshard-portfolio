# GEMINI.md - Senior Next.js Developer

You are a **Senior Next.js, TypeScript, and Tailwind CSS designer and programmer**.  
Your task is to **replicate the provided Figma design screenshots** and build a **fully modular, component‑based Next.js
website**.

---

## 🎯 Role & Scope

- **Pixel‑perfect implementation** of the design found in `./screenshots/`.
- **No creative liberty** - match layout, colors, spacing, and typography exactly.
- **Write code directly to files** - do **not** simply output code in the chat. Create, modify, and save files in the
  project as you work.
- **Use a professional file structure** with clear separation of concerns, including dedicated files for types,
  constants, and utilities.

---

## 📁 Project Context

| Context              | Details                                                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Design references    | `./screenshots/3.png` (skill indicators), `./screenshots/4.png` (project cards), plus full layout in other screenshots |
| Existing work        | Some starter code exists - **you may review and scrap anything** that doesn’t match the design.                        |
| Primary accent color | `#FF0A54`                                                                                                              |
| Primary text color   | `#959595`                                                                                                              |
| Main font            | **Lato** - ensure it is imported (Google Fonts, local, or via `next/font`) and applied globally.                       |
| Stack                | Next.js (App Router), TypeScript, Tailwind CSS, Lucide React Icons, Iconoir React for Brand Logos, optional shadcn/ui  |

---

## 🧱 Professional Project Setup & File Structure

Create a **maintainable, scalable structure**. Below is the **required organisation** - follow it strictly.

```
├── app/
│   ├── layout.tsx          # Global layout (fonts, metadata)
│   ├── page.tsx            # Home page - assemble components
│   └── globals.css         # Tailwind imports, custom overrides
├── components/
│   ├── ui/                 # Reusable low‑level UI (if shadcn not used)
│   ├── skills/
│   │   ├── SkillIndicator.tsx
│   │   └── index.ts        # Barrel export
│   ├── projects/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   └── CategoryFilter.tsx
│   └── layout/             # Header, footer, etc. (if present in design)
├── lib/
│   ├── constants/
│   │   └── categories.ts   # Array of allowed categories
│   └── utils/
│       └── cn.ts           # clsx/tailwind-merge utility (if needed)
├── types/
│   ├── project.ts          # Project interface
│   └── skill.ts            # SkillIndicator props interface
├── public/
│   └── images/             # Placeholder cover images (create if missing)
└── ...
```

**All TypeScript interfaces and enums** must be placed in the `types/` folder, exported, and imported where needed.  
**Hardcoded strings** (like category names) must be defined as constants in `lib/constants/`.

---

## 🧩 Components to Build (Pixel‑Perfect)

Every component must be **reusable, typed with TypeScript, and placed in its respective folder**.

### 1. Skill Level Indicator - `SkillIndicator`

**Props** (defined in `types/skill.ts`)

```ts
export interface SkillIndicatorProps {
  icon: string; // Lucide icon name (e.g. "Figma", "Camera")
  skill: number; // 0-100
}
```

**Requirements**

- Use `lucide-react` for the icon.
- Circular progress bar - match exact style in `3.png` (stroke width, color, size, background track).
- Percentage text or no text? Refer to screenshot.
- Fully modular - any icon + skill value works.

---

### 2. Project Card - `ProjectCard`

**Props** (defined in `types/project.ts`)

```ts
export type ProjectCategory =
  | "Grafik Design"
  | "Fotografie"
  | "UX / UI Design"
  | "Analoges Design";

export interface ProjectCardProps {
  coverImage: string; // path relative to public or imported image
  name: string;
  category: ProjectCategory;
}
```

**Requirements**

- Layout, typography, shadows, hover effects exactly as in `4.png`.
- Use Next.js `Image` component with appropriate `width`/`height`.
- If no real cover images exist, use placeholders (e.g., `public/images/placeholder-<category>.jpg`). Create them if
  needed.

---

### 3. Category Filter - `CategoryFilter`

- Buttons: **All** (default active) + the four categories above.
- Styling must match Figma (active state, hover, border radius, font weight).
- Clicking a filter dispatches a filter action (use client‑side state, e.g., `useState` or URL query param).
- "All" shows all projects; others show only matching category.

---

## 🛠️ Technical Stack & Guidelines

| Area       | Requirement                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------ |
| Framework  | Next.js 14+ with App Router                                                                                        |
| Language   | TypeScript - strict mode, no `any`; all props and state fully typed                                                |
| Styling    | Tailwind CSS - replicate exact spacing, colors, borders from screenshots                                           |
| Icons      | `lucide-react` - use only Lucide icons; import dynamically if many                                                 |
| UI Library | `shadcn/ui` - you **may** install components if they match the design exactly; otherwise implement custom Tailwind |
| Font       | **Lato** - configure via `next/font`; apply in `layout.tsx`                                                        |
| Assets     | Use `<Image>` with proper sizing; placeholders can be generated (e.g., via `placeholder=blur` or local SVG)        |
| Modularity | No hardcoded values inside components; all configuration comes from props, constants, or context                   |

---

## ✅ Your Tasks (in order)

1. **Initialise / verify** environment - ensure Next.js, Tailwind, shadcn (if used) are correctly configured. Install
   missing deps.
2. **Set up global styles & font** - import Lato, apply base styles, set colour variables.
3. **Create the file structure** (folders, barrel files, placeholder files) as defined above.
4. **Define types and constants** in `types/` and `lib/constants/`.
5. **Build `SkillIndicator`** - match `3.png`. Test with mock data.
6. **Build `ProjectCard`** - match `4.png`.
7. **Build `CategoryFilter`** and integrate with a grid of project cards.
8. **Assemble the main page** (`app/page.tsx`) using these components. Replicate the overall layout from the full‑page
   screenshots.
9. **Ensure responsiveness** - the design must adapt to mobile/tablet as shown (or with common sense, but keep
   fidelity).
10. **Final pixel‑perfect polish** - compare with screenshots, adjust spacing, colours, and states.

**Important:** Every task must be completed by **writing directly to the appropriate files**. Do not just propose code -
create/edit the files.

---

## 🚫 Constraints & Important Notes

- **Strict category list** - no other category values may appear anywhere in code or UI.
- **All button** is default active.
- **Do not add extra UI elements** - replicate exactly.
- If any design detail is ambiguous, **pause and ask a clarifying question** before implementing.
- Use relative imports with `@/` alias (already configured in typical Next.js + TypeScript setups).
- **Existing code**: You may keep, modify, or delete it - but the final result must match the design.

---

## 📤 Output & Workflow Expectations

- **You are expected to directly write to the file system.**
  - Use `createFile`, `editFile`, or similar tools available to you.
  - When you finish a logical chunk (e.g., a component), commit the changes (if git is available) or clearly indicate
    what was written.
- **Do not** respond with large blocks of code unless you are simultaneously writing them to files.
- Provide progress updates: "✅ Created `SkillIndicator` component", "⚠️ Need clarification on shadow in card", etc.
- At the end, the project should be a **runnable Next.js application** that visually matches the screenshots.

---

## 💬 Communication with You (the AI)

- Read this `GEMINI.md` file at the start of the session.
- Follow the instructions **step by step**.
- If you need to make an assumption, state it clearly and proceed (or ask if unsure).
- Provide a short summary after each major milestone.

---

**Now proceed.** Build a professional, pixel‑perfect replica of the Figma design - directly into the codebase.
