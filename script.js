// Tüm hover ikonlar için güvenli hover efekti
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.getAttribute('src');       // orijinal PNG
  const hover = icon.dataset.hover;               // hover PNG

  if (hover) {
    icon.addEventListener('mouseenter', () => {
      icon.setAttribute('src', hover);            // hover ikona geç
    });

    icon.addEventListener('mouseleave', () => {
      icon.setAttribute('src', original);         // orijinal ikon geri dön
    });
  }
});
