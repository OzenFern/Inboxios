const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarLinks = document.querySelectorAll(".navbar a");
const overlay = document.querySelector("#overlay");

function setOverlay(state) {
  overlay.classList.toggle("active", state);
}

function closeNavbar() {
  navbarToggle.classList.remove("active");
  navbarMenu.classList.remove("active");
  setOverlay(false);
}

function openNavbar() {
  navbarToggle.classList.add("active");
  navbarMenu.classList.add("active");
  setOverlay(true);
}

function toggleNavbar() {
  if (navbarMenu.classList.contains("active")) {
    closeNavbar();
  } else {
    openNavbar();
  }
}

navbarLinks.forEach((link) => {
  link.addEventListener("click", closeNavbar);
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-scroll", scrollY > 10);
});

document.addEventListener("click", (e) => {
  if (navbarToggle.contains(e.target)) {
    toggleNavbar();
    return;
  }

  if (!navbar.contains(e.target)) {
    closeNavbar();
  }
});
