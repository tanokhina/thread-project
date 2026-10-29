// Reads the JSON token files and turns every key into a CSS variable,
// e.g. "color-primary" becomes var(--color-primary).
const TOKEN_FILES = ['colors.json', 'spacing.json', 'radius.json', 'border.json'];

export async function loadTokens() {
  const root = document.documentElement;

  for (const file of TOKEN_FILES) {
    const response = await fetch(new URL(file, import.meta.url));
    const tokens = await response.json();

    for (const [key, value] of Object.entries(tokens)) {
      root.style.setProperty(`--${key}`, value);
    }
  }
}
