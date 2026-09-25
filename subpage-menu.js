(() => {
  const contestProfiles = {
    "summer-2026": { season: "Summer", year: "2026" },
    "winter-2026": { season: "Winter", year: "2026" },
  };
  const publicContestKey = "box-office-bullseye-public-contest";
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("contest");
  const sourceFromUrl = params.get("from");
  const saved = localStorage.getItem(publicContestKey);
  const selectedContest = contestProfiles[fromUrl] ? fromUrl : contestProfiles[saved] ? saved : "summer-2026";
  const sourceContest = contestProfiles[sourceFromUrl] ? sourceFromUrl : selectedContest;
  const profile = contestProfiles[selectedContest];
  const headerProfile = contestProfiles[sourceContest];
  const brandText = "BOX OFFICE BULLSEYE: " + headerProfile.season.toUpperCase() + " " + headerProfile.year;
  const titleText = "Box Office Bullseye: " + profile.season + " " + profile.year;

  function contestStorageState(contestId) {
    try {
      const savedState = JSON.parse(localStorage.getItem("summer-2026-box-office-contest") || "{}");
      if (contestId === "summer-2026") return savedState || {};
      return { ...(savedState || {}), ...((savedState.contests || {})[contestId] || {}) };
    } catch {
      return {};
    }
  }

  function renderWeekendWagerMenuVisibility() {
    const hidden = Boolean(contestStorageState(selectedContest).weekendWagerMenuHidden);
    document.querySelectorAll('a[href*="top-five-perfect-order.html"]').forEach((link) => {
      link.hidden = hidden;
      link.setAttribute("aria-hidden", hidden ? "true" : "false");
    });
  }

  if (contestProfiles[sourceFromUrl]) {
    localStorage.setItem(publicContestKey, sourceFromUrl);
  } else if (contestProfiles[fromUrl]) {
    localStorage.setItem(publicContestKey, fromUrl);
  }

  const contestHref = (href) => {
    if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) return href;
    let url;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return href;
    }
    if (url.origin !== window.location.origin) return href;
    if (!url.pathname.endsWith(".html") && !url.pathname.endsWith("/")) return href;
    if (selectedContest === "summer-2026") {
      url.searchParams.delete("contest");
    } else {
      url.searchParams.set("contest", selectedContest);
    }
    return url.pathname.split("/").pop() + url.search + url.hash;
  };

  document.body.classList.toggle("winter-contest-theme", selectedContest === "winter-2026");
  document.querySelectorAll(".bullseye-brand-name, .subpage-menu-header .contest-name").forEach((element) => {
    element.textContent = brandText;
  });
  document.querySelectorAll(".subpage-menu-header .brand").forEach((link) => {
    link.href = sourceContest === "winter-2026" ? "./index.html?contest=winter-2026#top" : "./index.html#top";
  });
  document.querySelectorAll(".test-footer-top-link").forEach((link) => {
    link.textContent = titleText;
    link.href = selectedContest === "winter-2026" ? "./index.html?contest=winter-2026#top" : "./index.html#top";
  });
  document.querySelectorAll("[data-contest-static][href]").forEach((link) => {
    let url;
    try {
      url = new URL(link.getAttribute("href"), window.location.href);
    } catch {
      return;
    }
    if (url.origin === window.location.origin && contestProfiles[selectedContest]) {
      url.searchParams.set("from", selectedContest);
      link.setAttribute("href", url.pathname.split("/").pop() + url.search + url.hash);
    }
  });
  document.querySelectorAll(".subpage-toolbar-menu a[href], main a[href]").forEach((link) => {
    if (link.hasAttribute("data-contest-static")) return;
    const href = link.getAttribute("href");
    if (href && !href.includes("codenames/")) {
      link.setAttribute("href", contestHref(href));
    }
  });
  renderWeekendWagerMenuVisibility();

  if (/Box Office Bullseye: (Summer|Winter) 2026/i.test(document.title)) {
    document.title = document.title.replace(/Box Office Bullseye: (Summer|Winter) 2026/i, titleText);
  }

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
