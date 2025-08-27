// Hover efekti tüm ikonlar için
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});
