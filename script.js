// Hover efekti masaüstü
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// Mobil toggle alt ikonlar
function isMobile() {
  return window.innerWidth <= 768;
}

document.querySelectorAll('.is-icon-wrapper, .yasam-icon-wrapper').forEach(wrapper => {
  const subIcons = wrapper.querySelector('.is-hover-icons, .yasam-sub-icons');
  if (!subIcons) return;

  // Başlangıçta mobilde alt ikonları gizle
  if (isMobile()) subIcons.classList.remove('show');

  // Ana ikon tıklandığında alt ikonları aç
  wrapper.addEventListener('click', function(e) {
    if (!isMobile()) return;

    if (!subIcons.classList.contains('show')) {
      e.preventDefault();
      subIcons.classList.add('show');
    }
  });
});

// Pencere yeniden boyutlandığında reset
window.addEventListener('resize', () => {
  document.querySelectorAll('.is-hover-icons, .yasam-sub-icons').forEach(subIcons => {
    if (isMobile()) {
      subIcons.classList.remove('show');
    } else {
      subIcons.classList.add('show');
    }
  });
});
