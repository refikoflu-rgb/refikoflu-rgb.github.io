// Hover efekti tüm ikonlar için (desktop)
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// Yaşam ikonu dokunma/hover açma kapama
const yasamWrapper = document.querySelector('.yasam-icon-wrapper');

yasamWrapper.addEventListener('mouseenter', () => {
  yasamWrapper.classList.add('hovered');
});

yasamWrapper.addEventListener('mouseleave', () => {
  yasamWrapper.classList.remove('hovered');
});

// Mobil için dokunma
yasamWrapper.addEventListener('click', (e) => {
  // Dokunma ile toggle
  if (window.innerWidth <= 768) {
    e.preventDefault();
    yasamWrapper.classList.toggle('hovered');
  }
});
