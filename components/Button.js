// Creates a <button> element. Styles live in Button.css.
// variant: 'primary' or 'secondary'
// ariaLabel: optional name for screen readers, for when the visible label
//   isn't enough on its own (e.g. a future icon-only button)
export function Button({ label, variant = 'primary', disabled = false, ariaLabel, onClick }) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `button button--${variant}`;
  button.textContent = label;
  button.disabled = disabled;

  if (ariaLabel) {
    button.setAttribute('aria-label', ariaLabel);
  }

  if (onClick) {
    button.addEventListener('click', onClick);
  }

  return button;
}
