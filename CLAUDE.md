# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is an early-stage design-system project. There is no `package.json`, build, lint, or test tooling yet, so there are no commands to run beyond git.

- `tokens/` holds design tokens as flat JSON key/value maps. Keys are kebab-case and prefixed by category (e.g. `tokens/colors.json` → `"color-primary": "#3B5BDB"`). Hex colors are uppercase.
- `components/` exists but is empty and untracked by git (git doesn't track empty folders). No component framework has been chosen yet.
- `README.md` is the owner's learning log (a "Day N" journal plus notes on the terminal, git, npm and Claude Code commands they've learned), not project documentation. Add to it in the same style; don't rewrite it into conventional README form.

## Design system conventions

- Components live in `components/`, one file per component, named in PascalCase (e.g. `Button.jsx`).
- Colours, spacing and radius come from tokens in `tokens/`. Never hard-code hex or px values.
- Every interactive component has default, hover, focus and disabled states.
- Use 2-space indentation.
- When you add a new terminal command to the workflow, add it to `README.md`.

## Working with the owner

The owner is learning the command line, git, and Node as they build this. When you introduce a new command or tool, briefly explain what it does. Don't add frameworks, build tooling, or dependencies unless asked.

Commit messages are short, imperative summaries (e.g. "Add README and first color token"). Work happens directly on `main`.
