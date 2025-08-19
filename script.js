// Hover efekti
document.querySelectorAll('.hover-icon').forEach(icon => {
  const original = icon.src;
  const hover = icon.dataset.hover;
  if(hover){
    icon.addEventListener('mouseenter', () => { icon.src = hover; });
    icon.addEventListener('mouseleave', () => { icon.src = original; });
  }
});

// Modal açma
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const isIcon = document.getElementById("isIcon");

isIcon.addEventListener('click', () => {
  modal.style.display = "block";
  modalImg.src = "is-page.png"; // tıklanınca gösterilecek görsel
});

const span = document.getElementsByClassName("close")[0];
span.onclick = () => { modal.style.display = "none"; }
window.onclick = e => { if(e.target == modal) modal.style.display = "none"; }
