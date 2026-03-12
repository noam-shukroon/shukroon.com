# Tools — Plugins, Skills & MCP Servers

## MCP Servers

### context7
**Status**: Connected
**What it does**: Retrieves up-to-date documentation and code examples for libraries
**Key tools**: `resolve-library-id`, `query-docs`
**When to use**: Looking up Mantine, Three.js, React Router, or Vite APIs

### claude-in-chrome
**Status**: Connected
**What it does**: Browser automation for visual QA and testing
**Key tools**: `tabs_context_mcp`, `tabs_create_mcp`, `navigate`, `read_page`, `computer`
**When to use**: Visual verification of UI changes at different viewports

## Skills

| Skill | When to use |
|-------|-------------|
| `frontend-design` | Building new UI components or pages |
| `feature-dev` | Multi-file feature work with codebase exploration |
| `superpowers:brainstorming` | Before any creative work — new features, components, behavior changes |
| `superpowers:writing-plans` | Before multi-step implementation |
| `superpowers:dispatching-parallel-agents` | Independent tasks that can run simultaneously |
| `superpowers:systematic-debugging` | Bug investigation |
| `superpowers:verification-before-completion` | Before claiming work is done |
| `/simplify` | After implementation — reduce complexity in changed files |
| `/code-review` | Final quality pass |
| `/revise-claude-md` | Capture session learnings |

## When to Use What

| Task | Tool |
|------|------|
| Look up Mantine/Three.js/React API | context7 |
| Visual QA after UI changes | claude-in-chrome |
| New page or component | frontend-design + feature-dev |
| Independent small fixes | superpowers:dispatching-parallel-agents |
| Bug investigation | superpowers:systematic-debugging |
| Multi-task batch work | dev-workflow (execute mode) |
