// Read more toggle
function toggleBio(btn) {
  const extra = document.querySelector('.bio-extra');
  const expanded = extra.style.display !== 'none';
  extra.style.display = expanded ? 'none' : 'inline';
  btn.textContent = expanded ? 'Read more ↓' : 'Read less ↑';
}

// Animate skill bars and fade in items on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
    entry.target.querySelectorAll('.project-item, .award-item, .education-item').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(s => observer.observe(s));