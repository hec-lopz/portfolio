import toggleMenu from "./toggleMenu.js";
import "../stylus/main.styl";

let menuOpen = false;
const $menu_btn = document.querySelector(".mobile-btn");
const $menu_modal = document.querySelector(".mobile-nav");
const $menu_item = document.querySelectorAll(".header__btn");

toggleMenu({
  state: menuOpen,
  button: $menu_btn,
  menu: $menu_modal,
  menu_items: $menu_item,
});

window.addEventListener("load", () => {
  $menu_modal.setAttribute("style", "transition: .25s ease-in transform");
  console.log("loaded");
  $menu_btn
    .querySelector(".menu-btn__burger")
    .setAttribute("style", "transition: all .5s ease;");
});
