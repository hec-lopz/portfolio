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

function toggleMenu({ state, button, menu, menu_items }) {
  button.addEventListener("click", () => {
    if (state) {
      button.classList.toggle("menu-btn--open");
      menu.classList.toggle("header__nav--open");
      state = false;
    } else {
      button.classList.toggle("menu-btn--open");
      menu.classList.toggle("header__nav--open");
      state = true;
    }
  });
  Array.from(menu_items).forEach((item) => {
    item.addEventListener("click", () => {
      button.classList.remove("menu-btn--open");
      menu.classList.remove("header__nav--open");
      state = false;
    });
  });
  // document.addEventListener("scroll", () => {
  //   console.log(window.innerHeight, window.scrollY);
  //   if (
  //     window.scrollY <= window.innerHeight &&
  //     window.scrollY >= window.innerHeight - 100
  //   ) {
  //     button.classList.remove("mobile-btn--scrolled");
  //   }
  //   if (
  //     window.scrollY >= window.innerHeight &&
  //     window.scrollY <= window.innerHeight + 100
  //   ) {
  //     button.classList.add("mobile-btn--scrolled");
  //   }
  // });
}

export default toggleMenu;
