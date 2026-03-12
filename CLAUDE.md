# CLAUDE.md

**shukroon.com** — Personal website with interactive 3D visualizations.
Built with Vite + React 19 + TypeScript + Mantine v8 + Three.js. Hosted on GitHub Pages.
Live at: https://shukroon.com

## Hard Constraints

- **Production-ready code only.** No placeholder logic. Use proper error handling, types, and validation.
- **Light color scheme only.** Do not add dark mode or color scheme switching.
- **EB Garamond is the sole font.** Do not introduce additional typefaces.
- **Background color is `#E6E2D6`.** Do not change without explicit permission.
- **Follow the phased build plan.** Do not skip ahead unless explicitly asked.
- Ask before assuming when a decision could go multiple ways.

## North Star Metric

Visitor engagement — time spent interacting with the visual components.

## Documentation

All detailed docs live in `.claude/`. Read only what you need per task — use the mapping below.

| File | Contents |
|------|----------|
| `.claude/ARCHITECTURE.md` | File tree, entry flow, directory layout, import conventions |
| `.claude/CONVENTIONS.md` | Styling tokens, theme values, coding conventions, component patterns |
| `.claude/DECISIONS.md` | Why certain choices were made, rejected alternatives, known tradeoffs |
| `.claude/TASKS.md` | Phase checklist, common task recipes, session handoff prompt |
| `.claude/CHANGELOG.md` | Audit trail of all documentation updates |
| `.claude/TOOLS.md` | Plugins, MCP servers, skills, agents — when to use which tool |

### When to read what

| If the task involves… | Read |
|---|---|
| Components, layout, new pages, routes | `ARCHITECTURE.md` |
| Styling, colors, coding patterns, types | `CONVENTIONS.md` |
| Understanding *why* something was built a certain way | `DECISIONS.md` |
| Phase progress, routine recipes, session handoff | `TASKS.md` |
| Three.js components, canvas work | `ARCHITECTURE.md` + `CONVENTIONS.md` |
| Which plugin or MCP to use for a task | `TOOLS.md` |

If a task spans multiple concerns, load the relevant files — but never load all of them speculatively.

### Documentation Evolution Rules

These docs are living documents. Follow these rules:

- **Update after every task** that changes project structure, conventions, or decisions — in the same session.
- **Create new files** if a new major concern emerges that doesn't fit existing files. Add to both tables above.
- **Split files** if any `.claude/` file exceeds ~200 lines.
- **Archive** irrelevant decisions in DECISIONS.md with a date and reason.
- **Changelog**: Every documentation update gets a dated entry in `.claude/CHANGELOG.md`.

## Preferences

- Use agent teams for multi-task work (batch independent tasks in parallel, sequence dependent ones).
- One task at a time within each phase — walk through step by step.
- Keep CSS Modules for component-specific styles; use `global.css` only for truly global rules.

## Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Type-check with tsc -b then build with Vite (output: dist/)
npm run preview   # Preview the production build locally
```

There are no test or lint commands configured.

## Git Workflow

- Default branch: `main`.
- Feature branches for multi-step work (`feat/<name>`, `fix/<name>`).
- Commit messages: conventional commits (`feat:`, `fix:`, `refactor:`, `style:`, `chore:`).
- Push to `main` triggers GitHub Actions deploy to GitHub Pages.

## README

`README.md` in the repo root is the GitHub-facing project page. It contains the tech stack, setup instructions, Mermaid architecture diagrams, and key design decisions. **Update it with every structural change** — new components, new pages, changed data flow, etc.
