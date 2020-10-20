const NAV_BUTTON = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  NAV_BUTTON.setAttribute('aria-expanded', !expanded);
}

NAV_BUTTON.addEventListener('click', toggleNav);
