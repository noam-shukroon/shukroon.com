# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server
- `npm run build` — Type-check with `tsc -b` then build with Vite (output: `dist/`)
- `npm run preview` — Preview the production build locally

There are no test or lint commands configured.

## Architecture

Personal website (shukroon.com) built with Vite + React 19 + TypeScript. Deployed to GitHub Pages via GitHub Actions on push to `main`.

### Tech Stack
- **UI framework:** Mantine v8 with a custom theme (EB Garamond font)
- **Routing:** react-router-dom v7 (BrowserRouter)
- **3D/Visual:** Three.js for interactive visual components
- **Styling:** CSS Modules (`.module.css` files) + Mantine styles + `global.css`

### Structure
- `src/main.tsx` — Entry point. Sets up MantineProvider (light color scheme), BrowserRouter, and custom theme.
- `src/App.tsx` — Route definitions. BurgerMenu renders on all pages.
- `src/pages/` — Route pages: Home (`/`), NS (`/ns`), Info (`/info`), Cube (`/cube`), Grid (`/grid`), Sphere (`/sphere`)
- `src/components/` — Shared components: BurgerMenu (site navigation), RotatingCube, WarpingGrid, WireframeSphere (Three.js canvas components)

### Deployment
- Push to `main` triggers `.github/workflows/deploy.yml`
- Builds with Node 20, deploys `dist/` to GitHub Pages
- Custom domain: shukroon.com (via `CNAME` file)

### TypeScript
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`

## README

`README.md` in the repo root is the GitHub-facing project page. It contains the tech stack, setup instructions, Mermaid architecture diagrams (component tree, form flow, data flow, directory structure), and key design decisions. **Update it with every structural change** — new components, new step types, new topics, changed data flow, etc.
