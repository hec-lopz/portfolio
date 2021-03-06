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
