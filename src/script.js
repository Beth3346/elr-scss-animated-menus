"use-strict";
(() => {
  const menus = Array.from(document.getElementsByClassName("menu-animated"));

  menus.forEach(menu => {
    const items = Array.from(menu.getElementsByClassName("menu-item-button"));

    items.forEach(item => {
      item.addEventListener("click", e => {
        e.preventDefault();
        const current = Array.from(menu.getElementsByClassName("current"))[0];

        current.classList.remove("current");
        item.parentNode.classList.add("current");
      });
    });
  });
})();
