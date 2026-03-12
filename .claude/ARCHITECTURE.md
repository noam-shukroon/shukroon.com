# Architecture

## Entry Flow

1. **Visitor lands on `/`** → `Home.tsx` renders the NS logo linking to `/ns`
2. **BurgerMenu** is rendered globally on all routes (fixed position, top-left)
3. **Navigation** → BurgerMenu drawer provides links to all 6 routes
4. **Visual pages** (`/cube`, `/grid`, `/sphere`) render full-viewport interactive canvases

## Directory Layout

Legend: ✅ = implemented, 📁 = scaffolded (empty), 🔮 = planned (not yet created)

```
shukroon.com/
├── CLAUDE.md                          # ✅ Hard constraints + documentation map
├── CNAME                              # ✅ Custom domain (shukroon.com)
├── PROMPT-TEMPLATE.md                 # ✅ Task prompt template
├── README.md                          # ✅ GitHub-facing project page
├── index.html                         # ✅ HTML entry point
├── package.json                       # ✅ Dependencies & scripts
├── tsconfig.json                      # ✅ TypeScript config (strict)
├── vite.config.ts                     # ✅ Vite config with React plugin
├── vite-env.d.ts                      # ✅ Vite type declarations
├── .claude/                           # ✅ Living documentation
│   ├── ARCHITECTURE.md                # ✅ This file
│   ├── CONVENTIONS.md                 # ✅ Coding standards
│   ├── DECISIONS.md                   # ✅ Design decisions
│   ├── TASKS.md                       # ✅ Phase checklist
│   ├── CHANGELOG.md                   # ✅ Documentation audit trail
│   └── TOOLS.md                       # ✅ Plugins, skills, MCP servers
├── .github/
│   └── workflows/
│       └── deploy.yml                 # ✅ GitHub Actions → GitHub Pages
└── src/
    ├── main.tsx                       # ✅ Entry: MantineProvider + BrowserRouter + theme
    ├── App.tsx                        # ✅ Route definitions + global BurgerMenu
    ├── global.css                     # ✅ @font-face, body reset, CSS vars
    ├── assets/
    │   ├── fonts/
    │   │   └── EBGaramond-VariableFont_wght.ttf  # ✅ Variable weight font
    │   └── images/
    │       ├── ns.svg                 # ✅ NS logo (dark)
    │       ├── ns-white.svg           # ✅ NS logo (white, used as favicon)
    │       ├── scope.png              # ✅ Scope image for /ns page
    │       └── apple-touch-icon.png   # ✅ iOS icon
    ├── pages/
    │   ├── Home.tsx                   # ✅ Logo link to /ns
    │   ├── Home.module.css            # ✅ Logo sizing + hover
    │   ├── NS.tsx                     # ✅ Scope image display
    │   ├── NS.module.css              # ✅ Image sizing
    │   ├── Info.tsx                   # ✅ Email display (Mantine Title)
    │   ├── Cube.tsx                   # ✅ Wrapper for RotatingCube
    │   ├── Grid.tsx                   # ✅ Wrapper for WarpingGrid
    │   └── Sphere.tsx                 # ✅ Wrapper for WireframeSphere
    └── components/
        ├── BurgerMenu.tsx             # ✅ Drawer nav with route links
        ├── BurgerMenu.module.css      # ✅ Burger icon + drawer + overlay
        ├── RotatingCube.tsx           # ✅ CSS 3D transform cube
        ├── RotatingCube.module.css    # ✅ Perspective + keyframe rotation
        ├── WarpingGrid.tsx            # ✅ Canvas 2D mouse-interactive grid
        └── WireframeSphere.tsx        # ✅ Three.js wireframe sphere
```

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | `Home` | NS logo linking to `/ns` |
| `/ns` | `NS` | Scope image |
| `/info` | `Info` | Email contact (Noam@Shukroon.com) |
| `/cube` | `Cube` | CSS 3D rotating cube |
| `/grid` | `Grid` | Canvas 2D warping grid (mouse-interactive) |
| `/sphere` | `Sphere` | Three.js wireframe sphere |

## Import Conventions

- React/library imports first, then local imports
- Assets imported directly (`import img from '../assets/images/...'`)
- CSS Modules imported as `styles` (`import styles from './Component.module.css'`)
- No path aliases configured — all relative imports
