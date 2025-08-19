// Hover efekti tüm ikonlar için
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// İkon1 alt ikonları hover ile göster/gizle
const ikon1Wrapper = document.querySelector('.ikon1-wrapper');
const ikon1SubIcons = document.querySelector('.ikon1-sub-icons');

ikon1Wrapper.addEventListener('mouseenter', () => {
  ikon1SubIcons.style.opacity = '1';
  ikon1SubIcons.style.pointerEvents = 'auto';
});

ikon1Wrapper.addEventListener('mouseleave', () => {
  ikon1SubIcons.style.opacity = '0';
  ikon1SubIcons.style.pointerEvents = 'none';
});
