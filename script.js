// Theme toggle — persists choice in localStorage.
// Defaults to dark unless the user explicitly picked light before.
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const iconMoon = document.getElementById('icon-moon');
  const iconSun = document.getElementById('icon-sun');

  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    root.classList.add('light');
    iconMoon.classList.add('hidden');
    iconSun.classList.remove('hidden');
  }

  toggle.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    iconMoon.classList.toggle('hidden', isLight);
    iconSun.classList.toggle('hidden', !isLight);
  });
})();

// Fade-in on scroll for sections below the fold.
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('section').forEach((section) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
    observer.observe(section);
  });
})();
