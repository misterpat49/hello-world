(() => {
  const button = document.querySelector("#subpageMenuButton");
  const menu = document.querySelector("#subpageToolbarMenu");
  if (!button || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    button.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    button.querySelector("span").textContent = open ? "×" : "☰";
  };

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!menu.classList.contains("is-open"));
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && event.target !== button) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
      button.focus();
    }
  });
})();
