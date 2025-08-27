// Hover efekti masaüstü
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// Mobil toggle alt ikonlar ve sayfanın başka yerine tıklayınca kapanma
function isMobile() {
  return window.innerWidth <= 768;
}

let openWrapper = null;

document.querySelectorAll('.is-icon-wrapper, .yasam-icon-wrapper').forEach(wrapper => {
  const subIcons = wrapper.querySelector('.is-hover-icons, .yasam-sub-icons');
  if (!subIcons) return;

  // Başlangıçta mobilde alt ikonları gizle
  if (isMobile()) subIcons.classList.remove('show');

  // Ana ikon tıklandığında alt ikonları aç/kapat
  wrapper.addEventListener('click', function(e) {
    if (!isMobile()) return;

    e.stopPropagation(); // click bubbling engelle

    // Önceki açıksa kapat
    if (openWrapper && openWrapper !== subIcons) {
      openWrapper.classList.remove('show');
    }

    if (subIcons.classList.contains('show')) {
      subIcons.classList.remove('show');
      openWrapper = null;
    } else {
      subIcons.classList.add('show');
      openWrapper = subIcons;
    }
  });
});

// Sayfanın başka bir yerine tıklayınca tüm alt ikonlar kapanır
document.addEventListener('click', function() {
  if (openWrapper) {
    openWrapper.classList.remove('show');
    openWrapper = null;
  }
});

// Pencere yeniden boyutlandığında reset
window.addEventListener('resize', () => {
  document.querySelectorAll('.is-hover-icons, .yasam
