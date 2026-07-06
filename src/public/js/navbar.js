import { $, $$ } from "./utils/selector.js";
import { on } from "./utils/eventListener.js";

const navbar = $(".navbar");
const navbarToggle = $(".navbar-toggle");
const navbarMenu = $(".navbar-menu");
const navbarLinks = $$(".navbar a");
const overlay = $("#overlay");

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

// Adding Event Listeners
on(navbarLinks, "click", closeNavbar);

on(window, "scroll", () => {
  navbar.classList.toggle("navbar-scroll", scrollY > 10);
});

on(document, "click", (e) => {
  if (navbarToggle.contains(e.target)) {
    toggleNavbar();
    return;
  }

  if (!navbar.contains(e.target)) {
    closeNavbar();
  }
});
