// Hover efekti tüm ikonlar için
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.getAttribute('src');       // Orijinal PNG
  const hover = icon.dataset.hover;               // Hover PNG

  if (hover) {
    icon.addEventListener('mouseenter', () => {
      icon.setAttribute('src', hover);            // Hover ikona geç
    });

    icon.addEventListener('mouseleave', () => {
      icon.setAttribute('src', original);         // Orijinal ikon geri dön
    });
  }
});
