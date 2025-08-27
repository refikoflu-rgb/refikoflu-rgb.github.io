// Hover efekti masaüstü
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if (hover) {
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// Mobil toggle + ikinci dokunuş
function isMobile() {
  return window.innerWidth <= 480;
}

let openWrapper = null;

function closeAll() {
  document.querySelectorAll('.is-hover-icons, .yasam-sub-icons').forEach(el => {
    el.classList.remove('show');
  });
  openWrapper = null;
}

// Ana ikon click event
document.querySelectorAll('.is-icon-wrapper, .yasam-icon-wrapper, .ask-wrapper').forEach(wrapper => {
  const subIcons = wrapper.querySelector('.is-hover-icons, .yasam-sub-icons');

  wrapper.addEventListener('click', function(e) {
    if (!isMobile()) return;
    e.stopPropagation();

    if (!subIcons.classList.contains('show')) {
      closeAll();
      subIcons.classList
