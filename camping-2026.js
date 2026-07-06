(() => {
  const key = document.querySelector("#campgroundKey");
  const map = document.querySelector("#campingMap");
  if (!key || !map) return;

  const buttons = [...document.querySelectorAll("button[data-sites]")];
  const markers = [...map.querySelectorAll(".site-marker")];
  const popup = map.querySelector("#campNamePopup");

  const showSites = (button) => {
    const sites = new Set((button?.dataset.sites || "").split(/\s+/).filter(Boolean));
    buttons.forEach((item) => item.classList.toggle("is-active", Boolean(button) && item.dataset.sites === button.dataset.sites));
    markers.forEach((marker) => marker.classList.toggle("is-active", sites.has(marker.dataset.site)));
  };

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => showSites(button));
    button.addEventListener("focus", () => showSites(button));
    button.addEventListener("click", () => showSites(button));
  });

  markers.forEach((marker) => {
    marker.addEventListener("click", (event) => {
      event.stopPropagation();
      const matchingButton = buttons.find((button) => (button.dataset.sites || "").split(/\s+/).includes(marker.dataset.site));
      showSites(matchingButton || null);
      if (!popup) return;
      popup.textContent = `${marker.dataset.name} · ${marker.dataset.site}`;
      popup.style.setProperty("--popup-x", marker.style.getPropertyValue("--x"));
      popup.style.setProperty("--popup-y", marker.style.getPropertyValue("--y"));
      popup.hidden = false;
    });
  });

  key.addEventListener("mouseleave", () => showSites(null));
  map.addEventListener("mouseleave", () => {
    showSites(null);
    if (popup) popup.hidden = true;
  });
  key.addEventListener("focusout", (event) => {
    if (!key.contains(event.relatedTarget)) showSites(null);
  });
})();
