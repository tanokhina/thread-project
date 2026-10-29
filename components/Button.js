// Creates a <button> element. Styles live in Button.css.
// variant: 'primary' or 'secondary'
export function Button({ label, variant = 'primary', disabled = false, onClick }) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `button button--${variant}`;
  button.textContent = label;
  button.disabled = disabled;

  if (onClick) {
    button.addEventListener('click', onClick);
  }

  return button;
}
