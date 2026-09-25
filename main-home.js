(() => {
  const logo = document.querySelector("#testBullseyeLogo");
  const heroLogo = document.querySelector("#testBullseyeHeroLogo");
  const cascade = document.querySelector("#testPosterCascade");
  if (!logo && !heroLogo && !cascade) return;
  const storageKey = "summer-2026-box-office-contest";
  const applyLogo = (state) => {
    const url = state?.topFiveLogoUrl || "";
    if (!url) return;
    if (logo) {
      logo.src = url;
      logo.closest(".test-bullseye-mark")?.classList.add("has-logo");
    }
    if (heroLogo) {
      heroLogo.src = url;
      heroLogo.closest(".test-hero-logo")?.classList.add("has-logo");
    }
  };
  const selectedContestState = (rootState) => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("contest");
    const saved = localStorage.getItem("box-office-bullseye-public-contest");
    const contestId = fromUrl || saved || "summer-2026";
    if (contestId === "summer-2026") return rootState || {};
    return { ...(rootState || {}), ...((rootState?.contests || {})[contestId] || {}) };
  };
  const validPosterUrl = (value) => /^https?:\/\//i.test(String(value || "").trim());
  const buildPosterCascade = (rootState) => {
    if (!cascade) return;
    const state = selectedContestState(rootState);
    const isArmyTicker = cascade.classList.contains("army-poster-row");
    const armyPosters = (Array.isArray(state?.armyMoviePosters) ? state.armyMoviePosters : [])
      .map((movie) => ({
        key: String(movie?.title || "").trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim(),
        title: String(movie?.title || "").trim(),
        url: String(movie?.url || "").trim(),
      }))
      .filter((movie) => movie.title && validPosterUrl(movie.url));
    const selectedArmyKeys = isArmyTicker && Array.isArray(state?.armyTickerPosterSelections)
      ? state.armyTickerPosterSelections.filter(Boolean)
      : [];
    const selectedArmyPosters = selectedArmyKeys
      .map((key) => armyPosters.find((poster) => poster.key === key))
      .filter(Boolean);

    const releaseDates = state?.releaseDates || {};
    const contestPosters = Object.entries(state?.moviePosterImages || {})
      .filter(([, url]) => validPosterUrl(url))
      .map(([key, url]) => ({ key, url, releaseDate: releaseDates[key] || "" }))
      .sort((a, b) => {
        if (a.releaseDate && b.releaseDate) return a.releaseDate.localeCompare(b.releaseDate) || a.key.localeCompare(b.key);
        if (a.releaseDate) return -1;
        if (b.releaseDate) return 1;
        return a.key.localeCompare(b.key);
      });
    const posters = isArmyTicker
      ? (selectedArmyPosters.length ? selectedArmyPosters : (armyPosters.length ? armyPosters : contestPosters))
      : contestPosters;
    if (!posters.length) return;
    const posterMarkup = posters.map(({ url }) => `<img src="${url.replace(/"/g, "&quot;")}" alt="">`).join("");
    cascade.innerHTML = `<div class="test-poster-track"><div class="test-poster-set">${posterMarkup}</div><div class="test-poster-set" aria-hidden="true">${posterMarkup}</div></div>`;
    cascade.classList.add("is-ready");
  };
  const applyState = (state) => { applyLogo(state); buildPosterCascade(state); };
  try { applyState(JSON.parse(localStorage.getItem(storageKey) || "{}")); } catch {}
  fetch("https://aagpivdjxecaejuilhaf.supabase.co/rest/v1/contest_state?id=eq.singleton&select=state", {
    headers: { apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZ3BpdmRqeGVjYWVqdWlsaGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjU1MDUsImV4cCI6MjA5NDc0MTUwNX0.lkx1UhkuKOz367Ns6Rpuczl2aqbC1eRc6dikvK1hx2Q", Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZ3BpdmRqeGVjYWVqdWlsaGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjU1MDUsImV4cCI6MjA5NDc0MTUwNX0.lkx1UhkuKOz367Ns6Rpuczl2aqbC1eRc6dikvK1hx2Q" }
  }).then((response) => response.json()).then((rows) => applyState(rows?.[0]?.state)).catch(() => {});
})();

(() => {
  const brand = document.querySelector("#headerContestBrand, .test-canvas-brand-name");
  if (!brand) return;
  const activeContest = () => new URLSearchParams(window.location.search).get("contest")
    || localStorage.getItem("box-office-bullseye-public-contest")
    || "summer-2026";
  const label = () => activeContest() === "winter-2026"
    ? "BOX OFFICE BULLSEYE: WINTER 2026"
    : "BOX OFFICE BULLSEYE: SUMMER 2026";
  const restore = () => {
    const nextLabel = label();
    if (brand.textContent !== nextLabel) brand.textContent = nextLabel;
  };
  restore();
  new MutationObserver(restore).observe(brand, { childList: true, characterData: true, subtree: true });
})();

(() => {
  const summerTitle = document.querySelector(".test-summer-title");
  const hero = document.querySelector(".main-design-canvas .hero");
  if (!summerTitle || !hero) return;
  const syncTaglineWidth = () => hero.style.setProperty("--summer-title-width", summerTitle.getBoundingClientRect().width + "px");
  document.fonts?.ready.then(syncTaglineWidth);
  window.addEventListener("resize", syncTaglineWidth);
  syncTaglineWidth();
})();

(() => {
  const button = document.querySelector("#testMenuButton");
  const menu = document.querySelector("#testToolbarMenu");
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
  menu.addEventListener("click", (event) => { if (event.target.closest("a")) setOpen(false); });
  document.addEventListener("click", (event) => { if (!menu.contains(event.target)) setOpen(false); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { setOpen(false); button.focus(); } });
})();


(() => {
  const section = document.querySelector("#weeklyUpdateSection");
  const text = document.querySelector("#weeklyUpdateText");
  const button = document.querySelector("#weeklyUpdateExpand");
  if (!section || !text || !button) return;
  const card = section.querySelector(".weekly-update-card");
  if (!card) return;

  const reset = () => {
    section.classList.remove("is-expanded");
    button.hidden = true;
    button.setAttribute("aria-expanded", "false");
    button.textContent = "Read more";

    requestAnimationFrame(() => {
      if (section.hidden || !text.textContent.trim()) return;
      const textClipped = text.scrollHeight > text.clientHeight + 1;
      const cardClipped = card.scrollHeight > card.clientHeight + 1;
      button.hidden = !(textClipped || cardClipped);
    });
  };

  button.addEventListener("click", () => {
    const expanded = section.classList.toggle("is-expanded");
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Show less" : "Read more";
  });

  new MutationObserver(reset).observe(text, { childList: true, characterData: true, subtree: true });
  reset();
})();


(() => {
  const leaderboard = document.querySelector(".leaderboard");
  const rows = document.querySelector("#leaderboardRows");
  const button = document.querySelector("#leaderboardExpand");
  if (!leaderboard || !rows || !button) return;

  const sync = () => {
    const hasMore = rows.querySelectorAll(":scope > .leaderboard-row").length > 5;
    if (!hasMore) leaderboard.classList.remove("is-expanded");
    button.hidden = !hasMore;
    const expanded = leaderboard.classList.contains("is-expanded");
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Show top five" : "View full leaderboard";
  };

  button.addEventListener("click", () => {
    leaderboard.classList.toggle("is-expanded");
    sync();
  });

  new MutationObserver(sync).observe(rows, { childList: true });
  sync();
})();


(() => {
  const list = document.querySelector("#completedMovies");
  const button = document.querySelector("#completedMoviesExpand");
  if (!list || !button) return;

  const sync = () => {
    const hasMore = list.querySelectorAll(":scope > li").length > 10;
    if (!hasMore) list.classList.remove("is-expanded");
    button.hidden = !hasMore;
    const expanded = list.classList.contains("is-expanded");
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Show first ten" : "View all completed movies";
  };

  button.addEventListener("click", () => {
    list.classList.toggle("is-expanded");
    sync();
  });

  new MutationObserver(sync).observe(list, { childList: true });
  sync();
})();


(() => {
  const table = document.querySelector(".movie-table");
  const rows = document.querySelector("#movieRows");
  const button = document.querySelector("#movieTableExpand");
  if (!table || !rows || !button) return;

  const sync = () => {
    const hasMore = rows.querySelectorAll(":scope > .movie-row").length > 5;
    if (!hasMore) table.classList.remove("is-expanded");
    button.hidden = !hasMore;
    const expanded = table.classList.contains("is-expanded");
    button.setAttribute("aria-expanded", String(expanded));
    button.textContent = expanded ? "Show first five" : "View all tracked movies";
  };

  button.addEventListener("click", () => {
    table.classList.toggle("is-expanded");
    sync();
  });

  new MutationObserver(sync).observe(rows, { childList: true });
  sync();
})();


(() => {
  const container = document.querySelector("#contestFunStats");
  if (!container) return;

  const prepareCards = () => {
    container.querySelectorAll(".fun-stat-grid > article").forEach((card) => {
      if (card.dataset.accordionReady) return;
      card.dataset.accordionReady = "true";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-expanded", "false");
    });
  };

  const toggleCard = (card) => {
    const expanded = card.classList.toggle("is-expanded");
    card.setAttribute("aria-expanded", String(expanded));
  };

  container.addEventListener("click", (event) => {
    const card = event.target.closest(".fun-stat-grid > article");
    if (card) toggleCard(card);
  });

  container.addEventListener("keydown", (event) => {
    const card = event.target.closest(".fun-stat-grid > article");
    if (!card || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    toggleCard(card);
  });

  new MutationObserver(prepareCards).observe(container, { childList: true, subtree: true });
  prepareCards();
})();
