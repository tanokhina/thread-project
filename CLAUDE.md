# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is an early-stage design-system project. There is no `package.json`, build, lint, or test tooling yet. The only command beyond git is `python3 -m http.server` (run from the project root) to view the preview at http://localhost:8000/preview/.

- `tokens/` holds design tokens as flat JSON key/value maps (`colors`, `spacing`, `radius`, `border`). Keys are kebab-case and prefixed by category (e.g. `tokens/colors.json` → `"color-primary": "#3B5BDB"`). Hex colors are uppercase.
- `tokens/load-tokens.js` fetches the JSON files and sets each key as a CSS variable on `:root` (`color-primary` → `--color-primary`). CSS uses only `var(--…)`. New token files must be added to its `TOKEN_FILES` list.
- `components/` uses plain JS + CSS, with no framework: `Button.js` exports a function that returns a DOM element, and `Button.css` holds its styles. `.is-hover` / `.is-focus` classes exist only so the preview can show those states statically.
- `preview/index.html` shows every component variant × state. It needs the local server because browsers block JSON fetches and JS modules on `file://`.
- `README.md` is the owner's learning log (a "Day N" journal plus notes on the terminal, git, npm and Claude Code commands they've learned), not project documentation. Add to it in the same style; don't rewrite it into conventional README form.

## Design system conventions

- Components live in `components/`, one file per component, named in PascalCase (e.g. `Button.js`, with styles in `Button.css`).
- Colours, spacing and radius come from tokens in `tokens/`. Never hard-code hex or px values.
- Every interactive component has default, hover, focus and disabled states.
- Build on native elements (`<button>`, `<a>`, `<input>`) so keyboard support comes for free.
- Show focus with `:focus-visible` using the `--color-focus-ring` / `--focus-ring-width` tokens. Never remove an outline without replacing it.
- Contrast: text at least 4.5:1; focus rings and borders at least 3:1.
- Use 2-space indentation.
- When you add a new terminal command to the workflow, add it to `README.md`.

## Working with the owner

The owner is learning the command line, git, and Node as they build this. When you introduce a new command or tool, briefly explain what it does. Don't add frameworks, build tooling, or dependencies unless asked.

Commit messages are short, imperative summaries (e.g. "Add README and first color token"). Work happens directly on `main`.
