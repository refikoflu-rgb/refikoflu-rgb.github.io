// Hover efektleri
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// Yaşam ikon toggle (mobil ve masaüstü)
const yasamWrapper = document.querySelector('.yasam-icon-wrapper');
const yasamMain = yasamWrapper.querySelector('.yasam-main');
const yasamSubs = yasamWrapper.querySelector('.yasam-sub-icons');

yasamMain.addEventListener('click', () => {
  const visible = yasamSubs.style.opacity === '1';
  if (visible) {
    yasamSubs.style.opacity = 0;
    yasamSubs.style.pointerEvents = 'none';
    yasamMain.style.opacity = 1;
  } else {
    yasamSubs.style.opacity = 1;
    yasamSubs.style.pointerEvents = 'auto';
    yasamMain.style.opacity = 0;
  }
});
