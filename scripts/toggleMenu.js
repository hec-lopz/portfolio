function toggleMenu({ state, button, menu, menu_items }) {
  button.addEventListener("click", () => {
    if (state) {
      button.classList.remove("menu-btn--open");
      menu.classList.remove("mobile-nav--open");
      state = false;
    } else {
      button.classList.add("menu-btn--open");
      menu.classList.add("mobile-nav--open");
      state = true;
    }
  });
  console.log(menu_items);
  Array.from(menu_items).forEach((item) => {
    item.addEventListener("click", () => {
      button.classList.remove("menu-btn--open");
      menu.classList.remove("mobile-nav--open");
      state = false;
    });
  });
}

export default toggleMenu;
