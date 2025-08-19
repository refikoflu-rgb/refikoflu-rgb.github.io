// Hover efekti tüm ikonlar için
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// Mobilde yasam ikonuna dokunma
const yasamWrapper = document.querySelector('.yasam-icon-wrapper');
yasamWrapper.addEventListener('click', (e) => {
  if(window.innerWidth <= 768){
    e.preventDefault();
    const subIcons = yasamWrapper.querySelector('.yasam-sub-icons');
    subIcons.style.opacity = subIcons.style.opacity === '1' ? '0' : '1';
    subIcons.style.pointerEvents = subIcons.style.opacity === '1' ? 'auto' : 'none';
  }
});
