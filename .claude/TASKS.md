# Tasks

## Session Handoff Prompt

Copy this into the first message of every new Claude session:

> Read CLAUDE.md first — it contains hard constraints and a documentation map.
> Then read only the `.claude/` files relevant to your task (see the "When to read what" table).
>
> Before starting any task:
> - Identify which .claude/ files are relevant and read only those.
> - For routine tasks, you should need zero exploratory file reads beyond what you are directly editing.
> - Prefer inline comments in source files over re-scanning .claude/ files for implementation details.

## Current Status

**Phase**: Initial setup complete
**Last completed**: Scaffolded `.claude/` documentation system
**Next up**: User-directed — awaiting next task
**Stack**: Vite 7.3 + React 19.2 + TypeScript 5.9 + Mantine 8.3 + Three.js 0.183

## Common Task Recipes

- **Add a new page** →
  1. Create `src/pages/NewPage.tsx` (and optional `.module.css`)
  2. Add route in `src/App.tsx`
  3. Add nav entry in `src/components/BurgerMenu.tsx` (`pages` array)
  4. Update `.claude/ARCHITECTURE.md` (directory layout + routes table)
  5. Update `README.md` if structural

- **Add a new Three.js component** →
  1. Create `src/components/NewVisual.tsx`
  2. Use the established pattern: `useRef` + `useEffect` + cleanup
  3. Create wrapper page in `src/pages/`
  4. Wire up route + nav (see "Add a new page")

- **Add a new CSS-only visual** →
  1. Create component + `.module.css` in `src/components/`
  2. Use `clamp()` for responsive sizing
  3. Create wrapper page + route + nav

- **Modify the theme** →
  1. Edit `src/main.tsx` (Mantine `createTheme` call)
  2. For global styles, edit `src/global.css`
  3. Update `.claude/CONVENTIONS.md` with new tokens
