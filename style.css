/* Genel ayarlar */
body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: #fff;
  position: relative;
  min-height: 100vh;
}

.full-image {
  max-width: 100%;
  height: auto;
}

/* Logo */
.logo {
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 50;
}

.logo img {
  height: auto;
  width: 200px;
}

/* Ana ikonlar */
.main-icon {
  position: absolute;
  width: 150px;
  text-align: center;
}

/* İş ikonu wrapper */
.is-icon-wrapper {
  top: 50%;
  left: 20%;
  transform: translateY(-50%);
}

/* Normal ikon */
.is-main {
  width: 100%;
  transition: opacity 0.3s ease;
}

/* Hover ikonları masaüstü */
.is-hover-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0.9);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.is-hover-icons img {
  width: 150px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.is-hover-icons img:hover {
  transform: scale(1.1);
}

/* Hover masaüstü */
.is-icon-wrapper:hover .is-main {
  opacity: 0;
}

.is-icon-wrapper:hover .is-hover-icons {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}

/* Aşk ikonu */
.ask-wrapper {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

/* Yaşam alt ikonları */
.yasam-icon-wrapper {
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
  position: absolute;
}

.yasam-main {
  width: 100%;
}

.hover-icon {
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center center;
  width: 100%;
}

.hover-icon:hover {
  transform: scale(1.15);
}

/* Yaşam alt ikonları */
.yasam-sub-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0.9);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.yasam-sub-icons img {
  width: 50px;
  transition: transform 0.3s ease;
}

.yasam-sub-icons img:hover {
  transform: scale(1.2);
}

.yasam-icon-wrapper:hover .yasam-sub-icons {
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) scale(1);
}

.yasam-icon-wrapper:hover .yasam-main {
  opacity: 0;
}

/* WhatsApp */
.whatsapp {
  position: fixed;
  left: 50%;
  bottom: 30px;
  z-index: 1000;
  width: 90px;
  transform: translateX(-50%);
  transition: transform 0.3s ease;
}

.whatsapp:hover {
  transform: translateX(-50%) scale(0.9);
}

/* Responsive */
@media (max-width: 480px) {

  .main-icon,
  .is-icon-wrapper,
  .yasam-icon-wrapper,
  .ask-wrapper {
    position: relative;
    transform: none;
    display: block;
    margin: 10px auto;
  }

  /* Logo mobilde üstte ve sağda */
  .logo {
    top: 5%;
    left: 5%;
  }

  /* Alt ikonlar başlangıçta gizli ve ana ikon ortasında */
  .is-hover-icons,
  .yasam-sub-icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    pointer-events: none;
    flex-direction: row;
    gap: 10px;
    transition: opacity 0.3s ease;
    z-index: 20;
  }

  /* Toggle ile görünür */
  .is-hover-icons.show,
  .yasam-sub-icons.show {
    opacity: 1;
    pointer-events: auto;
  }

  .is-hover-icons img { width: 80px; }
  .yasam-sub-icons img { width: 40px; }
}
