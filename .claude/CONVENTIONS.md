# Conventions

## Styling

- **Framework**: Mantine v8 + CSS Modules
- **Approach**: Responsive via `clamp()` for fluid sizing
- **Background**: `#E6E2D6` (warm beige) — set in `global.css` on `body`
- **Text color**: `#333` (default), `#000` (headings)
- **Typography**: EB Garamond (variable weight), loaded via `@font-face` in `global.css`
- **Spacing**: CSS custom property `--gap-size: 3vh`
- **Components**: Mantine components used sparingly (Title in Info page); most UI is custom
- **Color scheme**: Light only — enforced via `defaultColorScheme="light"` in MantineProvider

## CSS Module Patterns

- Each component that needs styles gets a co-located `.module.css` file
- Import as `styles`: `import styles from './Component.module.css'`
- Use `clamp()` for responsive values: `clamp(min, preferred, max)`
- Full-viewport canvases use `width: 100vw; height: 100vh`

## Code Patterns

### Component structure

```
// 1. React/library imports
// 2. Local imports (components, assets)
// 3. CSS Module import
// 4. Component definition (default export function)
```

### Naming conventions

- **Files**: PascalCase for components/pages (`BurgerMenu.tsx`, `Home.tsx`)
- **CSS Modules**: PascalCase matching component (`BurgerMenu.module.css`)
- **Components**: PascalCase (`RotatingCube`, `WarpingGrid`)
- **Variables/functions**: camelCase
- **CSS classes**: camelCase in CSS Modules (`.boxContainer`, `.scopeImage`)

### State management

- Local state only (`useState`). No global state management.
- `useRef` for canvas/DOM element references
- `useEffect` for Three.js/Canvas setup and cleanup

### Three.js pattern

- Component creates a `ref` to a container div
- `useEffect` sets up scene, camera, renderer, animation loop
- Cleanup function cancels animation, removes event listeners, disposes renderer
- Full viewport sizing with resize handler

### Error handling

- Minimal — personal site with no API calls or user input
- Null checks on canvas/container refs before setup

## TypeScript

- Strict mode enabled
- `noUnusedLocals` and `noUnusedParameters` enforced
- `@types/three` and `@types/react-router-dom` for library types
- No shared type files — types are inline where needed
