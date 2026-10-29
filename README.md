Read this file.
Day 9: installed Claude Code

## Commands I learned in Week 2

### Moving around and looking at files

- `cd` — change directory. Moves me into a folder (`cd tokens`), up one level (`cd ..`), or home (`cd ~`).
- `ls` — list what's in the current folder. `ls -la` also shows hidden files and details.
- `mkdir` — make a new folder, e.g. `mkdir components`.
- `cat` — print a file's contents to the terminal, e.g. `cat README.md`.
- Pipes (`|`) — send the output of one command into another, e.g. `ls | grep md` lists only files with "md" in the name.

### Git (saving versions of my project)

- `git init` — turn the current folder into a git repository so git starts tracking it.
- `git add` — pick which changes go into the next save. `git add .` adds everything.
- `git commit -m "message"` — save a snapshot of the added changes with a short note.
- `git log` — show the history of commits. `git log --oneline` is the short version.
- `git branch` — list branches, or create one with `git branch my-branch`. A branch is a separate line of work.

### Node and npm

- `node -v` — show which version of Node.js is installed (checks that it's installed at all).
- `npm install` — download the packages a project needs (listed in `package.json`) into `node_modules`.
- `npx` — run a package's command without installing it permanently, e.g. `npx some-tool`.

### Claude Code

- `claude` — start Claude Code in the current folder so I can ask it to read, explain, and edit my project.

### Previewing in the browser

- `python3 -m http.server` — start a tiny web server in the current folder so the browser can load my files. Run it from the project folder, then open http://localhost:8000/preview/ to see the Button states. Stop it with Ctrl+C.
