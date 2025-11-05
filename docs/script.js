document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');
  if (!name || !email || !msg) {
    status.textContent = 'Please fill out all fields.';
    return;
  }
  status.textContent = `Thanks, ${name}! Your message has been recorded (demo only).`;
  e.target.reset();
});
