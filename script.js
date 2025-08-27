// Hover efekti tüm ikonlar için (masaüstü)
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// Mobil için toggle alt ikonları
function isMobile() {
  return window.innerWidth <= 768; // mobil ekran sınırı
}

document.querySelectorAll('.is-icon-wrapper, .yasam-icon-wrapper').forEach(wrapper => {
  const mainLink = wrapper.querySelector('a') || wrapper.querySelector('.hover-icon');
  const subIcons = wrapper.querySelector('.is-hover-icons, .yasam-sub-icons');

  if (!subIcons) return;

  // Başlangıçta mobilde alt ikonları gizle
  if (isMobile()) {
    subIcons.classList.remove('show');
  }

  wrapper.addEventListener('click', function(e) {
    if (!isMobile()) return; // masaüstü hover zaten çalışıyor

    if (!subIcons.classList.contains('show')) {
      e.preventDefault();        // linki engelle
      subIcons.classList.add('show'); // alt ikonları göster
    } else {
      // alt ikonlar zaten açıksa tıklama normal link gibi çalışır
      // eğer ana link bir <a> değilse, alt ikonlar zaten görünür
    }
  });
});

// Pencere yeniden boyutlandığında alt ikonları resetle
window.addEventListener('resize', () => {
  document.querySelectorAll('.is-hover-icons, .yasam-sub-icons').forEach(subIcons => {
    if (isMobile()) {
      subIcons.classList.remove('show');
    } else {
      subIcons.classList.add('show'); // masaüstünde hover ile zaten görünüyor
    }
  });
});
