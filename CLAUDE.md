# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start Vite dev server with hot reload
- `npm run build` — TypeScript compile + Vite production build (output: `/dist`)
- `npm run lint` — Run ESLint (flat config format)
- `npm run preview` — Preview production build locally
- `npx shadcn@latest add <component>` — Add new shadcn/ui components

## Architecture

Single-page React 19 + TypeScript app built with Vite. No client-side router — navigation uses hash-based smooth scrolling to section IDs.

**App structure** (`src/App.tsx`): Header → sections (Hero, Mission, Services, Stats, Testimonials, News, CTA, Contact) → Footer. Each section is a self-contained component in `src/sections/`.

**Key directories:**
- `src/sections/` — Page sections rendered sequentially in App.tsx
- `src/components/` — Header, Footer, and shared components
- `src/components/ui/` — shadcn/ui primitives (New York style, Radix UI-based)
- `src/hooks/` — Custom hooks (e.g., `use-mobile.ts` for 768px breakpoint)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

**Path alias:** `@` maps to `src/` (configured in both vite.config.ts and tsconfig).

## Styling & Design System

Tailwind CSS 3 with a custom brand theme defined in `tailwind.config.js`:

- **Brand colors:** `dragon-red` (#C41E3A), `berlin-charcoal`, `golden`, `sage`, `lavender`, `deep-blue`, `coral`, `warm-white`, `warm-cream`, `sky-mist`
- **Fonts:** `font-display` (Playfair Display), `font-body` (Inter), `font-ui` (Space Grotesk)
- **Custom animations:** `animate-float`, `animate-bounce-slow`, `animate-fade-in-up`, `animate-count-up`
- **Shadows:** `shadow-card`, `shadow-card-hover`, `shadow-cta`, `shadow-cta-hover`

CSS variables for shadcn/ui theming are defined in `src/index.css`. Dark mode is class-based.

## Key Conventions

- All content is in German (site serves a Berlin-based children's services nonprofit)
- No backend — the contact form simulates submission client-side
- State is managed with React hooks only (useState/useEffect); no external state library
- Icons from `lucide-react`
- Vite `base: './'` for relative-path deployment flexibility
