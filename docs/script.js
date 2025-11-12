// Dark mode toggle
const body = document.body;
const toggle = document.getElementById('themeToggle');
const themeKey = 'demo-theme';

const saved = localStorage.getItem(themeKey);
if (saved === 'dark') {
  body.setAttribute('data-theme', 'dark');
  toggle.setAttribute('aria-pressed', 'true');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  if (isDark) {
    body.removeAttribute('data-theme');
    localStorage.setItem(themeKey, 'light');
    toggle.setAttribute('aria-pressed', 'false');
    toggle.textContent = '🌙';
  } else {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem(themeKey, 'dark');
    toggle.setAttribute('aria-pressed', 'true');
    toggle.textContent = '☀️';
  }
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form handler (demo only)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const message = data.get('message')?.toString().trim();

  if (!name || !email || !message) {
    status.textContent = 'Please fill out all fields.';
    return;
  }
  status.textContent = `Thanks, ${name}! this sent nothing.`;
  form.reset();
});
