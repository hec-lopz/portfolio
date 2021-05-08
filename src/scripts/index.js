import toggleMenu from "./toggleMenu.js";
import "../stylus/main.styl";
import Card from "./Card";
import { resizeViewport } from "./resizeViewport";
const debounce = require("lodash/debounce");

let menuOpen = false;
const $menu_btn = document.querySelector(".mobile-btn");
const $menu_modal = document.querySelector(".mobile-nav");
const $menu_item = document.querySelectorAll(".header__btn");
const $card_tooltips = document.querySelectorAll(".technologies__tooltip");

toggleMenu({
  state: menuOpen,
  button: $menu_btn,
  menu: $menu_modal,
  menu_items: $menu_item,
});

window.addEventListener("load", () => {
  $menu_modal.setAttribute("style", "transition: .25s ease-in transform");
  $menu_btn
    .querySelector(".menu-btn__burger")
    .setAttribute("style", "transition: all .5s ease;");

  const tooltip_transition = "transition: transform 250ms ease-in;";
  $card_tooltips.forEach((i) => {
    i.setAttribute("style", tooltip_transition);
  });
});

resizeViewport();
window.addEventListener("resize", debounce(resizeViewport, 300));
