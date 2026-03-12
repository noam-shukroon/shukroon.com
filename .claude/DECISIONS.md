# Decisions & Tradeoffs

## Light-only color scheme

Mantine's `defaultColorScheme="light"` is explicitly set. The warm beige `#E6E2D6` background is central to the site's identity. Dark mode would require a separate palette and isn't worth the complexity for a personal site.

## EB Garamond as sole typeface

A serif variable-weight font loaded locally (not from Google Fonts). Gives the site a distinctive editorial feel. The variable font file supports all needed weights without additional network requests.

## CSS 3D transforms for the cube (not Three.js)

The rotating cube uses pure CSS `transform-style: preserve-3d` and `@keyframes` instead of Three.js. Simpler, no canvas overhead, and the cube is a static animation (no interaction needed). Three.js is reserved for the more complex sphere.

## Canvas 2D for the warping grid (not Three.js)

The grid uses native `<canvas>` with 2D context for mouse-interactive warping. Three.js would be overkill for 2D line drawing. Direct canvas manipulation gives fine-grained control over the warp math.

## Three.js only for the wireframe sphere

Three.js is the heaviest dependency. It's used only where 3D perspective, camera, and tube geometry are genuinely needed. The sphere renders latitude/longitude tubes via `CatmullRomCurve3` + `TubeGeometry`.

## BrowserRouter (not HashRouter)

Using `BrowserRouter` with GitHub Pages. Works because GitHub Pages serves `index.html` for all paths (no server-side routing needed for an SPA).

## No test or lint configuration

This is a small personal/portfolio site. The overhead of ESLint/Prettier/testing frameworks isn't justified yet. TypeScript strict mode provides the primary safety net.

## @types packages in dependencies (not devDependencies)

`@types/react`, `@types/react-dom`, `@types/three` are in `dependencies` rather than `devDependencies`. Not ideal but functional — TypeScript checks run at build time via `tsc -b` before Vite build.

## Archived

<!-- Moved here when no longer relevant.
     Format: ## [Title] (archived YYYY-MM-DD — [reason]) -->
