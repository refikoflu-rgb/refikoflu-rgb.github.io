// Masaüstü hover için görsel swap (sadece data-hover olan img'lerde)
document.querySelectorAll('.hover-icon').forEach(img => {
  const hover = img.dataset.hover;
  if (!hover) return;
  const original = img.getAttribute('src');
  img.addEventListener('mouseenter', () => { if (!isMobile()) img.src = hover; });
  img.addEventListener('mouseleave', () => { if (!isMobile()) img.src = original; });
});

function isMobile() { return window.innerWidth <= 480; }

let openPanel = null;

// Alt panelleri kapat
function closeAllPanels() {
  document.querySelectorAll('.is-hover-icons, .yasam-sub-icons').forEach(el => el.classList.remove('show'));
  openPanel = null;
}

// Mobil: ikon1 ve ikon3 için ilk dokunuşta alt ikonları aç/kapat
['.is-icon-wrapper', '.yasam-icon-wrapper'].forEach(sel => {
  const wrapper = document.querySelector(sel);
  if (!wrapper) return;
  const panel = wrapper.querySelector('.is-hover-icons, .yasam-sub-icons');
  if (!panel) return;

  wrapper.addEventListener('click', (e) => {
    if (!isMobile()) return;      // masaüstünü etkileme
    e.stopPropagation();

    // Başka bir panel açıksa kapat
    if (openPanel && openPanel !== panel) {
      openPanel.classList.remove('show');
    }

    // Bu paneli toggle et (ilk dokunuş)
    const willOpen = !panel.classList.contains('show');
    if (willOpen) {
      panel.classList.add('show');
      openPanel = panel;
    } else {
      panel.classList.remove('show');
      openPanel = null;
    }
  });
});

// Mobil: alt ikonlardan birine dokunulursa link çalışır (engelleme yok)

// Sayfanın herhangi bir yerine veya LOGO'ya dokunulursa açık paneli kapat
document.addEventListener('click', (e) => {
  if (!isMobile()) return;
  // Alt panel dışına tıklama
  if (openPanel && !openPanel.contains(e.target)) {
    // Logo ya da boş alan vs.
    const clickedOnToggleWrapper =
      e.target.closest('.is-icon-wrapper') || e.target.closest('.yasam-icon-wrapper');
    if (!clickedOnToggleWrapper) {
      closeAllPanels();
    }
  }
});

// Ekran yönü/değişiminde reset
window.addEventListener('resize', () => { if (isMobile()) closeAllPanels(); });
