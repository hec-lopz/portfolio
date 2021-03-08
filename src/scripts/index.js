import toggleMenu from "./toggleMenu.js";

let menuOpen = false;
const $menu_btn = document.querySelector(".mobile-btn");
const $menu_modal = document.querySelector(".mobile-nav");
const $menu_item = document.querySelectorAll(".mobile-nav__item");

toggleMenu({
  state: menuOpen,
  button: $menu_btn,
  menu: $menu_modal,
  menu_items: $menu_item,
});
