const STORAGE_KEY = "summer-2026-box-office-contest";

// Shared data sync for the published site. The anon key is safe to use in browser code when Row Level Security policies are set in Supabase.
const SUPABASE_URL = "https://aagpivdjxecaejuilhaf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZ3BpdmRqeGVjYWVqdWlsaGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjU1MDUsImV4cCI6MjA5NDc0MTUwNX0.lkx1UhkuKOz367Ns6Rpuczl2aqbC1eRc6dikvK1hx2Q";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const MAX_PICKS = 15;
const MAX_WEEKENDS = 4;
const MAX_STORED_IMAGE_LENGTH = 900000;
const ADMIN_PASSWORD = "boc26";
const ADMIN_SESSION_KEY = "summer-box-office-admin-unlocked";

const demoEntries = `Maya Chen:
1. Summer Tentpole A
2. Animated Sequel B
3. Superhero Launch C
4. Dinosaur Event D
5. Family Adventure E
6. Action Finale F
7. Racing Drama G
8. Sci-Fi Original H
9. Comedy Reboot I
10. Horror Breakout J
11. Martial Arts Legacy K
12. Mystery Thriller L
13. Fantasy Quest M
14. Teen Comedy N
15. Music Event O

Jordan Lee:
1. Dinosaur Event D
2. Superhero Launch C
3. Summer Tentpole A
4. Family Adventure E
5. Animated Sequel B
6. Action Finale F
7. Racing Drama G
8. Comedy Reboot I
9. Sci-Fi Original H
10. Mystery Thriller L
11. Martial Arts Legacy K
12. Horror Breakout J
13. Teen Comedy N
14. Music Event O
15. Fantasy Quest M

Priya Shah:
1. Superhero Launch C
2. Summer Tentpole A
3. Family Adventure E
4. Dinosaur Event D
5. Action Finale F
6. Animated Sequel B
7. Sci-Fi Original H
8. Racing Drama G
9. Fantasy Quest M
10. Comedy Reboot I
11. Mystery Thriller L
12. Teen Comedy N
13. Martial Arts Legacy K
14. Horror Breakout J
15. Music Event O`;

const demoResults = `Summer Tentpole A | 118.5 | 63.1 | 38.0 | 24.6
Animated Sequel B | 92.3 | 51.7 | 31.5 | 18.0
Superhero Launch C | 125.0 | 69.0 | 42.0 | 28.0
Dinosaur Event D | 101.0 | 56.2 | 35.1 | 21.6
Family Adventure E | 84.4 | 48.5 | 29.3 | 18.9
Action Finale F | 76.0 | 44.2 | 22.8 | 12.4
Racing Drama G | 58.2 | 38.4 | 25.1 |
Sci-Fi Original H | 41.8 | 28.0 | |
Comedy Reboot I | 36.3 | |
Horror Breakout J | 48.0 | 24.2 | 13.3 | 7.2
Martial Arts Legacy K | 32.5 | 18.2 | 10.0 | 6.1
Mystery Thriller L | 31.0 | 19.0 | |
Fantasy Quest M | 27.5 | 14.1 | 8.6 | 4.0
Teen Comedy N | 22.2 | |
Music Event O | 24.4 | |`;

const demoReleaseDates = {
  "summer tentpole a": "2026-05-01",
  "animated sequel b": "2026-05-08",
  "superhero launch c": "2026-05-15",
  "dinosaur event d": "2026-05-22",
  "family adventure e": "2026-05-29",
};

const els = {
  adminLogin: document.querySelector("#adminLogin"),
  adminSection: document.querySelector("#admin"),
  adminPassword: document.querySelector("#adminPassword"),
  unlockAdmin: document.querySelector("#unlockAdmin"),
  adminPasswordStatus: document.querySelector("#adminPasswordStatus"),
  entriesInput: document.querySelector("#entriesInput"),
  resultsInput: document.querySelector("#resultsInput"),
  resultsGrid: document.querySelector("#resultsGrid"),
  contestYear: document.querySelector("#contestYear"),
  currentContestWeek: document.querySelector("#currentContestWeek"),
  leaderboardImageInput: document.querySelector("#leaderboardImageInput"),
  leaderboardImageUpload: document.querySelector("#leaderboardImageUpload"),
  saveLeaderboardImage: document.querySelector("#saveLeaderboardImage"),
  clearLeaderboardImage: document.querySelector("#clearLeaderboardImage"),
  leaderboardImageStatus: document.querySelector("#leaderboardImageStatus"),
  standingsGifInput: document.querySelector("#standingsGifInput"),
  standingsGifUpload: document.querySelector("#standingsGifUpload"),
  saveStandingsGif: document.querySelector("#saveStandingsGif"),
  clearStandingsGif: document.querySelector("#clearStandingsGif"),
  standingsGifStatus: document.querySelector("#standingsGifStatus"),
  comingSoonInput: document.querySelector("#comingSoonInput"),
  saveComingSoon: document.querySelector("#saveComingSoon"),
  clearComingSoon: document.querySelector("#clearComingSoon"),
  comingSoonStatus: document.querySelector("#comingSoonStatus"),
  weeklyUpdateInput: document.querySelector("#weeklyUpdateInput"),
  saveWeeklyUpdate: document.querySelector("#saveWeeklyUpdate"),
  clearWeeklyUpdate: document.querySelector("#clearWeeklyUpdate"),
  weeklyUpdateStatus: document.querySelector("#weeklyUpdateStatus"),
  movieQuoteInput: document.querySelector("#movieQuoteInput"),
  movieQuoteCharacter: document.querySelector("#movieQuoteCharacter"),
  movieQuoteActor: document.querySelector("#movieQuoteActor"),
  movieQuoteMovie: document.querySelector("#movieQuoteMovie"),
  saveMovieQuote: document.querySelector("#saveMovieQuote"),
  clearMovieQuote: document.querySelector("#clearMovieQuote"),
  movieQuoteStatus: document.querySelector("#movieQuoteStatus"),
  paidPlayerList: document.querySelector("#paidPlayerList"),
  savePaidStatus: document.querySelector("#savePaidStatus"),
  paidStatusNote: document.querySelector("#paidStatusNote"),
  paidStatusList: document.querySelector("#paidStatusList"),
  patrickSecretImageUpload: document.querySelector("#patrickSecretImageUpload"),
  savePatrickSecretImage: document.querySelector("#savePatrickSecretImage"),
  clearPatrickSecretImage: document.querySelector("#clearPatrickSecretImage"),
  patrickSecretImageStatus: document.querySelector("#patrickSecretImageStatus"),
  saveEntries: document.querySelector("#saveEntries"),
  saveResults: document.querySelector("#saveResults"),
  clearEntries: document.querySelector("#clearEntries"),
  clearResults: document.querySelector("#clearResults"),
  loadDemo: document.querySelector("#loadDemo"),
  entryStatus: document.querySelector("#entryStatus"),
  resultStatus: document.querySelector("#resultStatus"),
  exportBackup: document.querySelector("#exportBackup"),
  importBackupInput: document.querySelector("#importBackupInput"),
  clearBrowserStorage: document.querySelector("#clearBrowserStorage"),
  backupStatus: document.querySelector("#backupStatus"),
  leaderboardRows: document.querySelector("#leaderboardRows"),
  leaderboardImage: document.querySelector("#leaderboardImage"),
  standingsGif: document.querySelector("#standingsGif"),
  enterListButton: document.querySelector("#enterListButton"),
  weeklyUpdateSection: document.querySelector("#weeklyUpdateSection"),
  weeklyUpdateText: document.querySelector("#weeklyUpdateText"),
  movieQuoteSection: document.querySelector("#movieQuoteSection"),
  movieQuoteText: document.querySelector("#movieQuoteText"),
  movieQuoteMeta: document.querySelector("#movieQuoteMeta"),
  newEntryForm: document.querySelector("#newEntryForm"),
  newEntryName: document.querySelector("#newEntryName"),
  newEntryPicks: document.querySelector("#newEntryPicks"),
  newEntryStatus: document.querySelector("#newEntryStatus"),
  resetNewEntry: document.querySelector("#resetNewEntry"),
  gradeForm: document.querySelector("#gradeForm"),
  gradePlayerSelect: document.querySelector("#gradePlayerSelect"),
  gradeMovies: document.querySelector("#gradeMovies"),
  gradeStatus: document.querySelector("#gradeStatus"),
  resetGrades: document.querySelector("#resetGrades"),
  contestantSelect: document.querySelector("#contestantSelect"),
  contestantLists: document.querySelector("#contestantLists"),
  compareContestantA: document.querySelector("#compareContestantA"),
  compareContestantB: document.querySelector("#compareContestantB"),
  resetCompare: document.querySelector("#resetCompare"),
  compareLists: document.querySelector("#compareLists"),
  compareStats: document.querySelector("#compareStats"),
  pathToWinSelect: document.querySelector("#pathToWinSelect"),
  pathToWinCard: document.querySelector("#pathToWinCard"),
  contestFunStats: document.querySelector("#contestFunStats"),
  movieRows: document.querySelector("#movieRows"),
  movieReleaseSort: document.querySelector("#movieReleaseSort"),
  movieTotalSort: document.querySelector("#movieTotalSort"),
  allContestMovies: document.querySelector("#allContestMovies"),
  patrickSecretImage: document.querySelector("#patrickSecretImage"),
  patrickSecretRelease: document.querySelector("#patrickSecretRelease"),
  standingsGrid: document.querySelector("#standingsGrid"),
  hallCurrentWinners: document.querySelector("#hallCurrentWinners"),
  currentYearHall: document.querySelector("#currentYearHall"),
  finalStandingsGrid: document.querySelector("#finalStandingsGrid"),
  finalLeaderboardRows: document.querySelector("#finalLeaderboardRows"),
  finalMovieRows: document.querySelector("#finalMovieRows"),
  finalStudioLists: document.querySelector("#finalStudioLists"),
  completedCount: document.querySelector("#completedCount"),
  completedNote: document.querySelector("#completedNote"),
  completedMovies: document.querySelector("#completedMovies"),
  trackingMovies: document.querySelector("#trackingMovies"),
  statWeek: document.querySelector("#statWeek"),
  comingSoonWeek: document.querySelector("#comingSoonWeek"),
  comingSoonMovies: document.querySelector("#comingSoonMovies"),
  statPlayers: document.querySelector("#statPlayers"),
  statMovies: document.querySelector("#statMovies"),
  statGross: document.querySelector("#statGross"),
  statLeader: document.querySelector("#statLeader"),
};

const defaultState = { entriesText: "", resultsText: "", releaseDates: {}, contestYear: "2026", currentContestWeek: "", leaderboardImageUrl: "", comingSoonText: "", weeklyUpdateText: "", movieQuoteText: "", movieQuoteCharacter: "", movieQuoteActor: "", movieQuoteMovie: "", standingsGifUrl: "", paidPlayers: {}, patrickSecretImageUrl: "", adminReleaseDateSort: "", movieTableSort: "", selectedContestant: "", compareContestantA: "", compareContestantB: "", pathToWinContestant: "", selectedGradePlayer: "", movieGrades: {}, leaderboardRankMovement: {} };
let lastSaveWarning = "";
let state = loadState();

function loadState() {
  try {
    const savedState = { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) };
    if (savedState.leaderboardImageUrl?.startsWith("data:image/") && savedState.leaderboardImageUrl.length > MAX_STORED_IMAGE_LENGTH) {
      savedState.leaderboardImageUrl = "";
      lastSaveWarning = "The oversized uploaded leaderboard image was cleared from browser storage. Your other contest data is still here.";
    }
    if (savedState.standingsGifUrl?.startsWith("data:image/") && savedState.standingsGifUrl.length > MAX_STORED_IMAGE_LENGTH) {
      savedState.standingsGifUrl = "";
      lastSaveWarning = "The oversized uploaded standings GIF was cleared from browser storage. Your other contest data is still here.";
    }
    if (savedState.patrickSecretImageUrl?.startsWith("data:image/") && savedState.patrickSecretImageUrl.length > MAX_STORED_IMAGE_LENGTH) {
      savedState.patrickSecretImageUrl = "";
      lastSaveWarning = "The oversized secret JPG was cleared from browser storage. Your other contest data is still here.";
    }
    if (lastSaveWarning) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
      } catch {
        lastSaveWarning = "An oversized uploaded image was cleared for this page load, but browser storage could not be rewritten yet.";
      }
    }
    return { ...savedState, compareContestantA: "", compareContestantB: "" };
  } catch {
    return { ...defaultState };
  }
}

async function saveStateToSupabase() {
  if (!supabaseClient) return;

  try {
    const { error } = await supabaseClient.from("contest_state").upsert({
      id: "singleton",
      state,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  } catch (error) {
    console.warn("Supabase save failed", error);
  }
}

async function syncFromSupabase() {
  if (!supabaseClient) return;

  try {
    const { data, error } = await supabaseClient
      .from("contest_state")
      .select("state")
      .eq("id", "singleton")
      .single();
    if (error || !data?.state) return;

    state = { ...defaultState, ...data.state, compareContestantA: "", compareContestantB: "" };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    render();
  } catch (error) {
    console.warn("Supabase sync failed", error);
  }
}

function subscribeToSupabaseState() {
  if (!supabaseClient) return;

  supabaseClient
    .channel("contest-state-sync")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "contest_state", filter: "id=eq.singleton" },
      (payload) => {
        if (!payload.new?.state) return;

        state = { ...defaultState, ...payload.new.state, compareContestantA: "", compareContestantB: "" };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        render();
      }
    )
    .subscribe();
}

function saveState() {
  lastSaveWarning = "";
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (shouldSyncSupabase()) saveStateToSupabase();
    return true;
  } catch (error) {
    if (state.leaderboardImageUrl?.startsWith("data:image/") || state.standingsGifUrl?.startsWith("data:image/") || state.patrickSecretImageUrl?.startsWith("data:image/")) {
      state.leaderboardImageUrl = "";
      state.standingsGifUrl = "";
      state.patrickSecretImageUrl = "";
      lastSaveWarning = "The uploaded image or GIF was too large for browser storage, so it was removed. Your other data was saved.";
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        if (shouldSyncSupabase()) saveStateToSupabase();
        return true;
      } catch {
        lastSaveWarning = "Save failed because browser storage is full. Export a backup, then clear large saved items or use a smaller image.";
      }
    } else {
      lastSaveWarning = "Save failed because browser storage is full. Export a backup, then clear large saved items or use a smaller image.";
    }
    console.warn(error);
    return false;
  }
}

function shouldSyncSupabase() {
  return (isAdminPage() && isAdminUnlocked()) || Boolean(els.newEntryForm) || Boolean(els.gradeForm);
}

function showSaveWarning(fallbackElement = els.backupStatus) {
  if (!lastSaveWarning) return;

  const target = fallbackElement || els.backupStatus || els.leaderboardImageStatus || els.standingsGifStatus || els.entryStatus;
  if (target) {
    target.textContent = lastSaveWarning;
  }
}

function isAdminPage() {
  return Boolean(els.adminSection || els.adminLogin);
}

function isAdminUnlocked() {
  return !isAdminPage() || sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function setAdminLockState() {
  if (!isAdminPage()) return;

  const unlocked = isAdminUnlocked();
  if (els.adminLogin) {
    els.adminLogin.hidden = unlocked;
  }
  if (els.adminSection) {
    els.adminSection.hidden = !unlocked;
  }
  if (els.adminPasswordStatus && !unlocked) {
    els.adminPasswordStatus.textContent = "Admin tools are locked.";
  }
}

function unlockAdmin() {
  if (!els.adminPassword) return;

  if (els.adminPassword.value === ADMIN_PASSWORD) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
    els.adminPassword.value = "";
    setAdminLockState();
    return;
  }

  if (els.adminPasswordStatus) {
    els.adminPasswordStatus.textContent = "Incorrect password.";
  }
}

function contestYear() {
  const year = Number.parseInt(state.contestYear, 10);
  return Number.isFinite(year) ? year : 2026;
}

function contestName() {
  return `${contestYear()} Summer Box Office Challenge`;
}

function contestEdition() {
  return 27 + (contestYear() - 2026);
}

function renderContestYear() {
  if (els.contestYear) {
    const currentValue = String(contestYear());
    if (!els.contestYear.options.length) {
      els.contestYear.innerHTML = Array.from({ length: 25 }, (_, index) => {
        const year = 2026 + index;
        return `<option value="${year}">${year}</option>`;
      }).join("");
    }
    els.contestYear.value = currentValue;
  }

  document.querySelectorAll(".contest-name").forEach((element) => {
    element.textContent = contestName();
  });
  document.querySelectorAll(".contest-year").forEach((element) => {
    element.textContent = contestYear();
  });
  document.querySelectorAll(".contest-edition").forEach((element) => {
    element.textContent = contestEdition();
  });
  document.title = document.title.replace(/\d{4} Summer Box Office Challenge/, contestName());
}

function backupFileName() {
  return `box-office-contest-backup-${new Date().toISOString().slice(0, 10)}.json`;
}

function exportBackup() {
  const payload = {
    app: contestName(),
    version: 1,
    exportedAt: new Date().toISOString(),
    storageKey: STORAGE_KEY,
    state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = backupFileName();
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);

  if (els.backupStatus) {
    els.backupStatus.textContent = "Backup exported.";
  }
}

function normalizeBackupState(parsed) {
  const backupState = parsed?.state || parsed;
  if (!backupState || typeof backupState !== "object" || Array.isArray(backupState)) {
    throw new Error("Backup file did not contain contest data.");
  }

  return { ...defaultState, ...backupState, compareContestantA: "", compareContestantB: "" };
}

function importBackupFile(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      state = normalizeBackupState(JSON.parse(reader.result));
      saveState();
      if (els.backupStatus) {
        els.backupStatus.textContent = `Imported backup: ${file.name}`;
      }
      render();
    } catch (error) {
      if (els.backupStatus) {
        els.backupStatus.textContent = `Could not import backup. ${error.message}`;
      }
    } finally {
      if (els.importBackupInput) {
        els.importBackupInput.value = "";
      }
    }
  });
  reader.addEventListener("error", () => {
    if (els.backupStatus) {
      els.backupStatus.textContent = "Could not read backup file.";
    }
  });
  reader.readAsText(file);
}

function clearBrowserStorage() {
  if (!window.confirm("Clear all saved contest data in this browser? Export a backup first if you need to keep it.")) return;

  localStorage.removeItem(STORAGE_KEY);
  state = { ...defaultState };
  lastSaveWarning = "";
  render();
  if (els.backupStatus) {
    els.backupStatus.textContent = "Browser storage cleared for this site.";
  }
}

function getReleaseDates() {
  return state.releaseDates || {};
}

function normalizeMovie(title) {
  return title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, " ").trim();
}

function cleanMovieLine(line) {
  return line
    .replace(/^\s*(?:\d{1,2}[\).:-]?|[-*•])\s*/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function splitDataLine(line) {
  if (line.includes("|")) return line.split("|").map((part) => part.trim());
  if (line.includes("\t")) return line.split("\t").map((part) => part.trim());
  return line.split(",").map((part) => part.trim());
}

function parseEntries(text) {
  return text
    .split(/\n\s*\n/g)
    .map((block) => block.split(/\n/).map((line) => line.trim()).filter(Boolean))
    .filter((lines) => lines.length)
    .map((lines) => {
      let name = "";
      let movieLines = [];
      const firstLine = lines[0];
      const colonMatch = firstLine.match(/^([^:]+):\s*(.*)$/);

      if (colonMatch) {
        name = colonMatch[1].trim();
        movieLines = [colonMatch[2], ...lines.slice(1)].filter(Boolean);
      } else if (lines.length === 1) {
        const cells = splitDataLine(firstLine).filter(Boolean);
        name = cells.shift() || "";
        movieLines = cells;
      } else {
        name = firstLine.replace(/:$/, "").trim();
        movieLines = lines.slice(1);
      }

      const picks = movieLines
        .flatMap((line) => line.includes("|") || line.includes("\t") ? splitDataLine(line) : [line])
        .flatMap((line) => line.includes(",") && !/^\d/.test(line) ? splitDataLine(line) : [line])
        .map(cleanMovieLine)
        .filter(Boolean)
        .slice(0, MAX_PICKS);

      return { name, picks };
    })
    .filter((entry) => entry.name && entry.picks.length);
}

function parseResults(text) {
  const movieMap = new Map();

  text
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const cells = splitDataLine(line);
      const title = cleanMovieLine(cells.shift() || "");
      if (!title || /^movie$/i.test(title)) return;

      const weekends = Array.from({ length: MAX_WEEKENDS }, (_, index) => {
        const raw = (cells[index] || "").replace(/\$/g, "").replace(/m$/i, "").trim();
        const value = Number.parseFloat(raw);
        return Number.isFinite(value) ? value : 0;
      });

      movieMap.set(normalizeMovie(title), { title, weekends });
    });

  return movieMap;
}

function getContestMovies(entries) {
  const movieMap = new Map();

  entries.forEach((entry) => {
    entry.picks.forEach((pick) => {
      const key = normalizeMovie(pick);
      if (!movieMap.has(key)) {
        movieMap.set(key, pick);
      }
    });
  });

  return Array.from(movieMap.entries())
    .map(([key, title]) => ({ key, title }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

function parseLocalDate(value) {
  if (!value) return null;

  const parts = value.split("-").map((part) => Number.parseInt(part, 10));
  if (parts.length !== 3 || parts.some((part) => !Number.isFinite(part))) return null;

  return new Date(parts[0], parts[1] - 1, parts[2]);
}

function daysBetween(start, end) {
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDay = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.floor((endDay - startDay) / 86400000);
}

function contestWeekLabel(releaseDateValue, today = new Date()) {
  const releaseDate = parseLocalDate(releaseDateValue);
  if (!releaseDate) return "No date";

  const contestStart = new Date(contestYear(), 4, 1);
  const daysSinceContestStart = daysBetween(contestStart, releaseDate);
  if (daysSinceContestStart < 0) return "Before contest";

  return `Week ${Math.floor(daysSinceContestStart / 7) + 1}`;
}

function nextContestWeekLabel(value) {
  if (value === "Upcoming") return "Week 1";
  if (value === "After cap") return "After cap";

  const match = String(value || "").match(/^Week\s+(\d+)$/i);
  if (!match) return "Auto";

  return `Week ${Number.parseInt(match[1], 10) + 1}`;
}

function isEntryClosed() {
  const match = String(state.currentContestWeek || "").match(/^Week\s+(\d+)$/i);
  return Boolean(match && Number.parseInt(match[1], 10) >= 2) || state.currentContestWeek === "After cap";
}

function parseComingSoonMovies(text) {
  return text
    .split(/\n/)
    .map((line) => cleanMovieLine(line.trim()))
    .filter(Boolean);
}

const gradePointValues = { "A+": 12, A: 11, "A-": 10, "B+": 9, B: 8, "B-": 7, "C+": 6, C: 5, "C-": 4, "D+": 3, D: 2, "D-": 1, F: 0 };
const gradeOptions = Object.keys(gradePointValues);

function gradeLabelFromAverage(value) {
  const closest = gradeOptions
    .map((grade) => ({ grade, gap: Math.abs(gradePointValues[grade] - value) }))
    .sort((a, b) => a.gap - b.gap || gradePointValues[b.grade] - gradePointValues[a.grade])[0];

  return closest?.grade || "N/A";
}

function releasedOrTrackedMovies(entries, results) {
  const releaseDates = getReleaseDates();
  const today = new Date();

  return getContestMovies(entries)
    .filter((movie) => {
      const savedMovie = results.get(movie.key);
      const releaseDate = parseLocalDate(releaseDates[movie.key]);
      return hasAnyBoxOffice(savedMovie) || Boolean(releaseDate && releaseDate <= today);
    })
    .sort((a, b) => {
      const aDate = releaseDates[a.key] || "";
      const bDate = releaseDates[b.key] || "";
      if (aDate && bDate) return aDate.localeCompare(bDate) || a.title.localeCompare(b.title);
      if (aDate) return -1;
      if (bDate) return 1;
      return a.title.localeCompare(b.title);
    });
}

function movieGradeStats(entries) {
  const movieTitles = new Map(getContestMovies(entries).map((movie) => [movie.key, movie.title]));
  const totals = new Map();

  Object.entries(state.movieGrades || {}).forEach(([playerName, grades]) => {
    Object.entries(grades || {}).forEach(([movieKey, grade]) => {
      if (!(grade in gradePointValues)) return;
      const stat = totals.get(movieKey) || { key: movieKey, title: movieTitles.get(movieKey) || movieKey, points: 0, votes: 0, players: [] };
      stat.points += gradePointValues[grade];
      stat.votes += 1;
      stat.players.push({ name: playerName, grade });
      totals.set(movieKey, stat);
    });
  });

  return Array.from(totals.values())
    .map((stat) => ({ ...stat, average: stat.points / stat.votes, averageGrade: gradeLabelFromAverage(stat.points / stat.votes) }))
    .sort((a, b) => b.average - a.average || b.votes - a.votes || a.title.localeCompare(b.title));
}

function movieTotal(movie, weekLimit = MAX_WEEKENDS) {
  if (!movie) return 0;

  return movie.weekends.slice(0, weekLimit).reduce((sum, value) => sum + value, 0);
}

function formatAdminNumber(value) {
  return Number(value.toFixed(3)).toString();
}

function cumulativeWeekendTotals(weekends) {
  let total = 0;
  return weekends.map((value) => {
    if (value <= 0) return "";

    total += value;
    return total;
  });
}

function isMovieCompleted(movie) {
  return Boolean(movie) && movie.weekends.length >= MAX_WEEKENDS && movie.weekends.every((value) => value > 0);
}

function hasAnyBoxOffice(movie) {
  return Boolean(movie) && movie.weekends.some((value) => value > 0);
}

function weeksLeft(movie) {
  if (!movie) return MAX_WEEKENDS;

  const enteredWeeks = movie.weekends.filter((value) => value > 0).length;
  return Math.max(0, MAX_WEEKENDS - enteredWeeks);
}

function scoreEntries(entries, results, weekFilter = "all") {
  const weekLimit = weekFilter === "all" ? MAX_WEEKENDS : Number(weekFilter);

  return entries
    .map((entry) => {
      let score = 0;
      let lockedMovies = 0;

      entry.picks.forEach((pick, index) => {
        const movie = results.get(normalizeMovie(pick));
        if (!movie) return;

        const multiplier = MAX_PICKS - index;
        const points = movieTotal(movie, weekLimit) * multiplier;
        score += points;

        if (isMovieCompleted(movie)) {
          lockedMovies += 1;
        }
      });

      return { ...entry, score, lockedMovies };
    })
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function scoreRawGross(entries, results) {
  return entries
    .map((entry) => {
      const rawGross = entry.picks.reduce((sum, pick) => {
        const movie = results.get(normalizeMovie(pick));
        return movie ? sum + movieTotal(movie) : sum;
      }, 0);

      return { ...entry, rawGross };
    })
    .sort((a, b) => b.rawGross - a.rawGross || a.name.localeCompare(b.name));
}
function leaderboardRankMap(scored) {
  return new Map(scored.map((entry, index) => [entry.name, index + 1]));
}

function calculateLeaderboardMovement(entries, oldResults, newResults) {
  const oldRanks = leaderboardRankMap(scoreEntries(entries, oldResults, "all"));
  const newRanks = leaderboardRankMap(scoreEntries(entries, newResults, "all"));
  const movement = {};

  newRanks.forEach((newRank, name) => {
    const oldRank = oldRanks.get(name);
    if (!oldRank) return;
    const delta = oldRank - newRank;
    if (delta !== 0) movement[name] = delta;
  });

  return movement;
}

function renderLeaderboardMovement(name) {
  const delta = Number(state.leaderboardRankMovement?.[name] || 0);
  if (!delta) return "";

  const direction = delta > 0 ? "up" : "down";
  const arrow = delta > 0 ? "↑" : "↓";
  const spots = Math.abs(delta);
  const label = escapeHtml(name) + " moved " + direction + " " + spots + " spot" + (spots === 1 ? "" : "s");
  return '<span class="leaderboard-move leaderboard-move-' + direction + '" aria-label="' + label + '">' + arrow + spots + '</span>';
}

function formatRawGrossLeaders(rawScored) {
  if (!rawScored.length) return { names: "No studio yet", value: undefined };

  const topRawGross = rawScored[0].rawGross;
  const names = rawScored
    .filter((entry) => entry.rawGross === topRawGross)
    .map((entry) => entry.name)
    .join(", ");

  return { names, value: topRawGross };
}

function formatMoney(value) {
  return `$${value.toFixed(1)}M`;
}

function formatReleaseDate(value) {
  const date = parseLocalDate(value);
  if (!date) return "Release date TBD";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatScore(value) {
  return Math.round(value).toLocaleString();
}

function formatCurrentLeaders(scored) {
  if (!scored.length) return "None";

  const topScore = scored[0].score;
  return scored
    .filter((entry) => entry.score === topScore)
    .map((entry) => entry.name)
    .join(", ");
}

function formatNames(names) {
  if (!names) return "No studio yet";

  return String(names)
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean)
    .map(escapeHtml)
    .join(", ") || "No studio yet";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function contestantStanding(entry, scored) {
  const index = scored.findIndex((scoredEntry) => scoredEntry.name === entry.name);
  return index >= 0 ? { rank: index + 1, score: scored[index].score } : null;
}

function renderPickList(entry, results, scored = []) {
  const standing = contestantStanding(entry, scored);

  return `
    <article class="contestant-card">
      <h3>
        <span>${escapeHtml(entry.name)}</span>
        ${standing ? `<small>#${standing.rank} • ${formatScore(standing.score)} points</small>` : ""}
      </h3>
      <ol>
        ${entry.picks.map((pick, index) => {
          const movie = results.get(normalizeMovie(pick));
          const statusClass = isMovieCompleted(movie) ? "is-complete" : hasAnyBoxOffice(movie) ? "has-results" : "";

          return `
          <li class="${statusClass}">
            <span class="pick-rank">${index + 1}</span>
            <span class="pick-title">${escapeHtml(pick)}</span>
            <span class="pick-multiplier">${MAX_PICKS - index}x</span>
            <span class="pick-gross">${movie ? formatMoney(movieTotal(movie)) : "-"}</span>
          </li>
        `;
        }).join("")}
      </ol>
    </article>
  `;
}

function renderContestantOptions(select, entries, selectedName, placeholder = "") {
  if (!select) return;

  select.disabled = false;
  const placeholderOption = placeholder ? `<option value="" ${selectedName ? "" : "selected"}>${placeholder}</option>` : "";
  const sortedEntries = entries.slice().sort((a, b) => a.name.localeCompare(b.name));
  select.innerHTML = placeholderOption + sortedEntries
    .map((entry) => `<option value="${escapeHtml(entry.name)}" ${entry.name === selectedName ? "selected" : ""}>${escapeHtml(entry.name)}</option>`)
    .join("");
}

function renderNewEntryForm(entries) {
  if (!els.newEntryPicks) return;

  const movies = getContestMovies(entries).sort((a, b) => a.title.localeCompare(b.title));
  if (!movies.length) {
    els.newEntryPicks.innerHTML = `<div class="empty-state">No contest movies are available yet.</div>`;
    if (els.newEntryStatus) {
      els.newEntryStatus.textContent = "The Projectionist Control Room needs saved player lists before new entries can use dropdowns.";
    }
    return;
  }

  const options = movies
    .map((movie) => `<option value="${escapeHtml(movie.title)}">${escapeHtml(movie.title)}</option>`)
    .join("");

  els.newEntryPicks.innerHTML = Array.from({ length: MAX_PICKS }, (_, index) => `
    <label class="new-entry-pick">
      <span>${index + 1}</span>
      <select data-rank="${index + 1}" required>
        <option value="">Pick movie</option>
        ${options}
      </select>
    </label>
  `).join("");
  if (els.newEntryStatus) {
    els.newEntryStatus.textContent = "Choose one movie for each ranked slot.";
  }
  updateNewEntryOptions();
}

function updateNewEntryOptions() {
  if (!els.newEntryPicks) return;

  const selects = Array.from(els.newEntryPicks.querySelectorAll("select"));
  const selectedByOtherSelects = new Set();

  selects.forEach((select) => {
    selects.forEach((otherSelect) => {
      if (otherSelect !== select && otherSelect.value) {
        selectedByOtherSelects.add(normalizeMovie(otherSelect.value));
      }
    });

    Array.from(select.options).forEach((option) => {
      option.disabled = Boolean(option.value) && selectedByOtherSelects.has(normalizeMovie(option.value));
    });
    selectedByOtherSelects.clear();
  });
}

function submitNewEntry() {
  if (!els.newEntryName || !els.newEntryPicks || !els.newEntryStatus) return;

  const name = els.newEntryName.value.trim();
  const selects = Array.from(els.newEntryPicks.querySelectorAll("select"));
  const picks = selects.map((select) => select.value.trim());
  const entries = parseEntries(state.entriesText);

  if (!name) {
    els.newEntryStatus.textContent = "Enter a studio name first.";
    return;
  }
  if (entries.some((entry) => entry.name.toLowerCase() === name.toLowerCase())) {
    els.newEntryStatus.textContent = "That studio name is already in the contest.";
    return;
  }
  if (picks.length !== MAX_PICKS || picks.some((pick) => !pick)) {
    els.newEntryStatus.textContent = "Choose all 15 movies before submitting.";
    return;
  }
  if (new Set(picks.map(normalizeMovie)).size !== picks.length) {
    els.newEntryStatus.textContent = "Each movie can only appear once on your list.";
    return;
  }

  const entryBlock = `${name}:\n${picks.map((pick, index) => `${index + 1}. ${pick}`).join("\n")}`;
  state.entriesText = [state.entriesText.trim(), entryBlock].filter(Boolean).join("\n\n");
  state.selectedContestant = name;
  saveState();
  render();
  if (els.newEntryStatus) {
    els.newEntryStatus.textContent = `${name}'s list was submitted.`;
  }
  window.location.href = "index.html#leaderboard";
}

function entryWeightedScore(entry, results) {
  return entry.picks.reduce((sum, pick, index) => {
    const movie = results.get(normalizeMovie(pick));
    return movie ? sum + movieTotal(movie) * (MAX_PICKS - index) : sum;
  }, 0);
}

function entryRawGross(entry, results) {
  return entry.picks.reduce((sum, pick) => {
    const movie = results.get(normalizeMovie(pick));
    return movie ? sum + movieTotal(movie) : sum;
  }, 0);
}

function leaderboardRank(scored, name) {
  const index = scored.findIndex((entry) => entry.name === name);
  return index >= 0 ? `#${index + 1}` : "N/A";
}

function leaderboardRankForScore(scored, score) {
  if (!scored.length) return "N/A";
  return `#${scored.filter((entry) => entry.score > score).length + 1}`;
}

function renderCompareScoreLines(entryA, scoreA, entryB, scoreB, formatter = formatScore) {
  return `
    <div class="compare-score-lines">
      <p><span>${escapeHtml(entryA.name)}</span><strong>${formatter(scoreA)}</strong></p>
      <p><span>${escapeHtml(entryB.name)}</span><strong>${formatter(scoreB)}</strong></p>
    </div>
  `;
}

function renderPlayerJump(name) {
  return `<button class="player-jump" type="button" data-player-name="${escapeHtml(name)}">${escapeHtml(name)}</button>`;
}

function renderPlayerJumpList(names) {
  if (!names) return "No studio yet";

  const playerNames = String(names)
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);

  return playerNames.length ? playerNames.map(renderPlayerJump).join("<span class=\"name-separator\">, </span>") : "No studio yet";
}

function contestIsComplete(entries, results) {
  const uniquePicks = Array.from(new Set(entries.flatMap((entry) => entry.picks.map(normalizeMovie))));
  return Boolean(uniquePicks.length) && uniquePicks.every((key) => isMovieCompleted(results.get(key)));
}

function winnerPlaces(scored, rawScored) {
  const goldenCeo = formatRawGrossLeaders(rawScored);
  return [
    { label: "First Place - $2000", names: scored[0]?.name, value: scored[0]?.score, suffix: "points" },
    { label: "Second Place - $500", names: scored[1]?.name, value: scored[1]?.score, suffix: "points" },
    { label: "The Golden CEO - $200", note: "(no multipliers here, simply who picked the best collection of 15 films for their studio)", names: goldenCeo.names, value: goldenCeo.value, suffix: "points" },
  ];
}

function renderWinnerCards(container, places, nameRenderer = formatNames) {
  if (!container) return;

  container.innerHTML = places.map((place) => `
    <article class="standing-card">
      <span class="standing-label">${place.label}</span>
      <strong>${nameRenderer(place.names)}</strong>
      <p>${place.value !== undefined ? `${formatScore(place.value)} ${place.suffix}` : "Save player lists and grosses to calculate this spot."}</p>
      ${place.note ? `<span class="standing-note">${place.note}</span>` : ""}
    </article>
  `).join("");
}

function renderCompareStats(entryA, entryB, results, scored) {
  if (!els.compareStats) return;

  const aMap = new Map(entryA.picks.map((pick, index) => [normalizeMovie(pick), { pick, rank: index + 1 }]));
  const bMap = new Map(entryB.picks.map((pick, index) => [normalizeMovie(pick), { pick, rank: index + 1 }]));
  const shared = Array.from(aMap.entries()).filter(([key]) => bMap.has(key));
  const uniqueA = Array.from(aMap.entries()).filter(([key]) => !bMap.has(key));
  const uniqueB = Array.from(bMap.entries()).filter(([key]) => !aMap.has(key));
  const disagreements = shared
    .map(([key, a]) => ({ title: a.pick, spread: Math.abs(a.rank - bMap.get(key).rank), aRank: a.rank, bRank: bMap.get(key).rank }))
    .sort((a, b) => b.spread - a.spread || a.title.localeCompare(b.title))
    .slice(0, 3);

  els.compareStats.innerHTML = `
    <h4>Generated comparison</h4>
    <div class="compare-stat-grid">
      <article>
        <span>Shared movies</span>
        <strong>${shared.length}</strong>
      </article>
      <article class="compare-score-card">
        <span>Leaderboard rank</span>
        ${renderCompareScoreLines(entryA, leaderboardRank(scored, entryA.name), entryB, leaderboardRank(scored, entryB.name), (value) => value)}
      </article>
      <article class="compare-score-card">
        <span>Score</span>
        ${renderCompareScoreLines(entryA, entryWeightedScore(entryA, results), entryB, entryWeightedScore(entryB, results))}
      </article>
      <article class="compare-score-card">
        <span>Golden CEO score</span>
        ${renderCompareScoreLines(entryA, entryRawGross(entryA, results), entryB, entryRawGross(entryB, results))}
      </article>
    </div>
    <div class="compare-detail-grid">
      <article>
        <h5>Biggest rank gaps</h5>
        <ul>
          ${disagreements.length ? disagreements.map((item) => `<li>${escapeHtml(item.title)} <em>${entryA.name}: #${item.aRank}, ${entryB.name}: #${item.bRank}</em></li>`).join("") : "<li>No shared movies yet.</li>"}
        </ul>
      </article>
      <article>
        <h5>Only on ${escapeHtml(entryA.name)}</h5>
        <ul>
          ${uniqueA.length ? uniqueA.slice(0, 5).map(([, item]) => `<li>${escapeHtml(item.pick)}</li>`).join("") : "<li>No unique picks.</li>"}
        </ul>
      </article>
      <article>
        <h5>Only on ${escapeHtml(entryB.name)}</h5>
        <ul>
          ${uniqueB.length ? uniqueB.slice(0, 5).map(([, item]) => `<li>${escapeHtml(item.pick)}</li>`).join("") : "<li>No unique picks.</li>"}
        </ul>
      </article>
    </div>
  `;
}

function formatRankList(items, emptyText) {
  return items.length
    ? items.map((item) => `<li>${item}</li>`).join("")
    : `<li>${emptyText}</li>`;
}

function aggregateListForEntries(entries) {
  const stats = new Map();
  entries.forEach((entry) => {
    entry.picks.forEach((pick, index) => {
      const key = normalizeMovie(pick);
      const stat = stats.get(key) || { title: pick, ranks: [], pickCount: 0 };
      stat.ranks.push(index + 1);
      stat.pickCount += 1;
      stats.set(key, stat);
    });
  });

  return Array.from(stats.values())
    .map((movie) => ({
      ...movie,
      aggregateAverageRank: (movie.ranks.reduce((sum, rank) => sum + rank, 0) + (entries.length - movie.pickCount) * (MAX_PICKS + 1)) / entries.length,
    }))
    .sort((a, b) => a.aggregateAverageRank - b.aggregateAverageRank || b.pickCount - a.pickCount || a.title.localeCompare(b.title))
    .slice(0, MAX_PICKS);
}


function pathToWinLeverage(entry, entries, results) {
  const movieStats = new Map();

  entries.forEach((contestant) => {
    contestant.picks.forEach((pick, index) => {
      const key = normalizeMovie(pick);
      const stat = movieStats.get(key) || { title: pick, multipliers: [] };
      stat.multipliers.push(MAX_PICKS - index);
      movieStats.set(key, stat);
    });
  });

  return entry.picks.map((pick, index) => {
    const key = normalizeMovie(pick);
    const entryMultiplier = MAX_PICKS - index;
    const stat = movieStats.get(key) || { title: pick, multipliers: [] };
    const otherTotal = stat.multipliers.reduce((sum, value) => sum + value, 0) - entryMultiplier;
    const otherAverage = entries.length > 1 ? otherTotal / (entries.length - 1) : 0;
    const movie = results.get(key);

    return {
      title: pick,
      rank: index + 1,
      multiplier: entryMultiplier,
      pickCount: stat.multipliers.length,
      currentGross: movieTotal(movie),
      edge: entryMultiplier - otherAverage,
    };
  });
}

function renderPathToWin(entries, results, scored) {
  if (!els.pathToWinSelect || !els.pathToWinCard) return;

  if (!entries.length) {
    els.pathToWinSelect.innerHTML = '<option value="">No contestants saved</option>';
    els.pathToWinSelect.disabled = true;
    els.pathToWinCard.innerHTML = '<div class="empty-state">Save player lists to generate a Path to Win.</div>';
    return;
  }

  const selectedEntry = entries.find((entry) => entry.name === state.pathToWinContestant);
  renderContestantOptions(els.pathToWinSelect, entries, selectedEntry?.name || "", "Pick a studio");

  if (!selectedEntry) {
    els.pathToWinCard.innerHTML = '<div class="empty-state">Pick a studio to see what needs to break their way.</div>';
    return;
  }

  const scoredEntry = scored.find((entry) => entry.name === selectedEntry.name);
  const rank = scored.findIndex((entry) => entry.name === selectedEntry.name) + 1;
  const score = scoredEntry?.score || 0;
  const topScore = scored[0]?.score || 0;
  const gapToFirst = Math.max(0, topScore - score);
  const nextTarget = scored[rank - 2];
  const gapToNext = nextTarget ? Math.max(0, nextTarget.score - score) : 0;
  const tailingStudio = scored[rank];
  const tailingGap = tailingStudio ? Math.max(0, score - tailingStudio.score) : 0;
  const leverage = pathToWinLeverage(selectedEntry, entries, results);
  const rootingFor = leverage
    .filter((movie) => movie.edge > 0)
    .sort((a, b) => b.edge - a.edge || b.multiplier - a.multiplier || a.title.localeCompare(b.title))
    .slice(0, 5);
  const rootingAgainst = leverage
    .filter((movie) => movie.edge < 0)
    .sort((a, b) => a.edge - b.edge || b.currentGross - a.currentGross || a.title.localeCompare(b.title))
    .slice(0, 4);
  const missingUpside = leverage
    .filter((movie) => movie.currentGross <= 0 && movie.edge > 0)
    .sort((a, b) => b.edge - a.edge || a.title.localeCompare(b.title))
    .slice(0, 3);

  const nextTargetText = nextTarget
    ? '<p>Next target: <strong>' + escapeHtml(nextTarget.name) + '</strong>, ' + formatScore(gapToNext) + ' points ahead.</p>'
    : '<p>' + escapeHtml(selectedEntry.name) + ' is already sitting at the top of the mountain.</p>';
  const hotOnTailText = tailingStudio
    ? '<p>Hot on their tail: <strong>' + escapeHtml(tailingStudio.name) + '</strong>, ' + formatScore(tailingGap) + ' points back.</p>'
    : '<p>Hot on their tail: nobody, they are holding up the back of the line.</p>';

  els.pathToWinCard.innerHTML =
    '<article class="path-to-win-card">' +
      '<div class="path-to-win-summary">' +
        '<p><span>Current rank</span><strong>#' + (rank || 'N/A') + '</strong></p>' +
        '<p><span>Score</span><strong>' + formatScore(score) + '</strong></p>' +
        '<p><span>Gap to first</span><strong>' + formatScore(gapToFirst) + '</strong></p>' +
      '</div>' +
      '<div class="path-to-win-note">' + nextTargetText + hotOnTailText + '</div>' +
      '<div class="path-to-win-grid">' +
        '<section><h4>Rooting for</h4><ul class="fun-mini-list">' +
          formatRankList(rootingFor.map((movie) => escapeHtml(movie.title) + ' <em>#' + movie.rank + ', ' + movie.multiplier + 'x, leverage +' + movie.edge.toFixed(1) + ' per $1M</em>'), 'No clear positive leverage movies.') +
        '</ul></section>' +
        '<section><h4>Rooting against</h4><ul class="fun-mini-list">' +
          formatRankList(rootingAgainst.map((movie) => escapeHtml(movie.title) + ' <em>#' + movie.rank + ', leverage ' + movie.edge.toFixed(1) + ' per $1M</em>'), 'No obvious danger movies.') +
        '</ul></section>' +
        '<section><h4>Best unreleased swings</h4><ul class="fun-mini-list">' +
          formatRankList(missingUpside.map((movie) => escapeHtml(movie.title) + ' <em>' + movie.multiplier + 'x, on ' + movie.pickCount + '/' + entries.length + ' lists</em>'), 'Most of this studio&apos;s leverage is already in motion.') +
        '</ul></section>' +
      '</div>' +
    '</article>';
}

function renderContestFunStats(entries, results, scored) {
  if (!els.contestFunStats) return;

  if (!entries.length) {
    els.contestFunStats.innerHTML = `<div class="empty-state">Save player lists to generate contest-wide stats.</div>`;
    return;
  }

  const movieStats = new Map();
  entries.forEach((entry) => {
    entry.picks.forEach((pick, index) => {
      const key = normalizeMovie(pick);
      const rank = index + 1;
      const stat = movieStats.get(key) || { title: pick, ranks: [], players: [], firstPlaceVotes: 0 };
      stat.ranks.push(rank);
      stat.players.push(entry.name);
      if (rank === 1) stat.firstPlaceVotes += 1;
      movieStats.set(key, stat);
    });
  });

  const movies = Array.from(movieStats.values()).map((movie) => ({
    ...movie,
    pickCount: movie.players.length,
    averageRank: movie.ranks.reduce((sum, rank) => sum + rank, 0) / movie.ranks.length,
    spread: Math.max(...movie.ranks) - Math.min(...movie.ranks),
  }));
  const consensusPicks = movies
    .filter((movie) => movie.pickCount === entries.length)
    .slice()
    .sort((a, b) => b.pickCount - a.pickCount || a.averageRank - b.averageRank || a.title.localeCompare(b.title));
  const topChoices = movies
    .filter((movie) => movie.firstPlaceVotes > 0)
    .sort((a, b) => b.firstPlaceVotes - a.firstPlaceVotes || b.pickCount - a.pickCount || a.title.localeCompare(b.title));
  const aggregateList = aggregateListForEntries(entries);
  const aggregateEntry = { name: "Aggregate list", picks: aggregateList.map((movie) => movie.title) };
  const aggregateScore = entryWeightedScore(aggregateEntry, results);
  const aggregateRank = leaderboardRankForScore(scored, aggregateScore);
  const biggestDisagreements = movies
    .filter((movie) => movie.pickCount > 1)
    .sort((a, b) => b.spread - a.spread || b.pickCount - a.pickCount || a.title.localeCompare(b.title))
    .slice(0, 3);
  const loneWolves = movies.filter((movie) => movie.pickCount === 1);
  const loneWolfMoviesByPlayer = new Map(entries.map((entry) => [entry.name, []]));
  loneWolves.forEach((movie) => {
    loneWolfMoviesByPlayer.get(movie.players[0])?.push(movie.title);
  });
  const loneWolfGroups = Array.from(loneWolfMoviesByPlayer.entries())
    .map(([name, titles]) => [name, titles.sort((a, b) => a.localeCompare(b))])
    .filter(([, titles]) => titles.length)
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
  const sameziesMap = new Map();
  entries.forEach((entry) => {
    const key = entry.picks.map(normalizeMovie).sort().join("|");
    const group = sameziesMap.get(key) || { players: [], movies: entry.picks.slice().sort((a, b) => a.localeCompare(b)) };
    group.players.push(entry.name);
    sameziesMap.set(key, group);
  });
  const sameziesGroups = Array.from(sameziesMap.values())
    .filter((group) => group.players.length > 1)
    .sort((a, b) => b.players.length - a.players.length || a.players.join(", ").localeCompare(b.players.join(", ")));
  const soulmatePairs = [];
  entries.forEach((entryA, indexA) => {
    const aRanks = new Map(entryA.picks.map((pick, index) => [normalizeMovie(pick), index + 1]));
    entries.slice(indexA + 1).forEach((entryB) => {
      const bRanks = new Map(entryB.picks.map((pick, index) => [normalizeMovie(pick), index + 1]));
      const sharedKeys = Array.from(aRanks.keys()).filter((key) => bRanks.has(key));
      const totalGap = sharedKeys.reduce((sum, key) => sum + Math.abs(aRanks.get(key) - bRanks.get(key)), 0);

      soulmatePairs.push({
        names: `${entryA.name} + ${entryB.name}`,
        sharedCount: sharedKeys.length,
        averageGap: sharedKeys.length ? totalGap / sharedKeys.length : MAX_PICKS,
      });
    });
  });
  const studioSoulmates = soulmatePairs
    .sort((a, b) => b.sharedCount - a.sharedCount || a.averageGap - b.averageGap || a.names.localeCompare(b.names))
    .slice(0, 1);
  const studioRivals = soulmatePairs
    .slice()
    .sort((a, b) => a.sharedCount - b.sharedCount || b.averageGap - a.averageGap || a.names.localeCompare(b.names))
    .slice(0, 1);
  const gradeStats = movieGradeStats(entries);
  const topGradeScore = gradeStats[0]?.average;
  const topGradeVoteCount = topGradeScore == null
    ? 0
    : Math.max(...gradeStats.filter((movie) => movie.average === topGradeScore).map((movie) => movie.votes));
  const summerGradeWinners = topGradeScore == null
    ? []
    : gradeStats.filter((movie) => movie.average === topGradeScore && movie.votes === topGradeVoteCount);
  const summerGradeWinnerLabel = summerGradeWinners.length > 1 ? "Movies of the summer" : "Movie of the summer";
  const summerGradeWinnerText = summerGradeWinners.length
    ? summerGradeWinners.map((movie) => escapeHtml(movie.title)).join(", ") + " <em>" + summerGradeWinners[0].averageGrade + " average, " + topGradeVoteCount + " grade" + (topGradeVoteCount === 1 ? "" : "s") + "</em>"
    : "No movie grades submitted yet.";
  const summerGradeWinnerKeys = new Set(summerGradeWinners.map((movie) => movie.key));
  const audienceReportList = gradeStats.filter((movie) => !summerGradeWinnerKeys.has(movie.key));
  els.contestFunStats.innerHTML = `
    <div class="fun-stat-grid">
      <article class="fun-wide">
        <span>Everyone in the fucking contest picked this movie</span>
        <ul class="fun-mini-list">
          ${formatRankList(consensusPicks.map((movie) => `${escapeHtml(movie.title)} <em>${movie.pickCount}/${entries.length} lists, avg rank ${movie.averageRank.toFixed(1)}</em>`), "No movie appears on every list yet.")}
        </ul>
      </article>
      <article>
        <span>Biggest rank splits</span>
        <ul class="fun-mini-list">
          ${formatRankList(biggestDisagreements.map((movie) => `${escapeHtml(movie.title)} <em>${movie.spread} spots apart</em>`), "Needs shared picks.")}
        </ul>
      </article>
      <article>
        <span>#1 pick magnets</span>
        <ul class="fun-mini-list">
          ${formatRankList(topChoices.map((movie) => `${escapeHtml(movie.title)} <em>${movie.firstPlaceVotes} first-place vote${movie.firstPlaceVotes === 1 ? "" : "s"}</em>`), "No first-place votes.")}
        </ul>
      </article>
      <article>
        <span>Audience report card</span>
        <div class="report-card-winner">
          <strong>${summerGradeWinnerLabel}</strong>
          <p>${summerGradeWinnerText}</p>
        </div>
        <ul class="fun-mini-list">
          ${formatRankList(audienceReportList.map((movie) => `${escapeHtml(movie.title)} <em>${movie.averageGrade} average, ${movie.votes} grade${movie.votes === 1 ? "" : "s"}</em>`), summerGradeWinners.length ? "No other movie grades submitted yet." : "No movie grades submitted yet.")}
        </ul>
      </article>
      <article class="fun-wide">
        <span>Aggregate list <em>(${aggregateRank} if this was a real user, the optimum list based off everyone&apos;s averages)</em></span>
        <ul class="fun-mini-list">
          ${formatRankList(aggregateList.map((movie, index) => `${index + 1}. ${escapeHtml(movie.title)} <em>avg rank ${movie.aggregateAverageRank.toFixed(1)}, ${movie.pickCount}/${entries.length} lists</em>`), "Save player lists to build the aggregate list.")}
        </ul>
      </article>
      <article class="fun-wide">
        <span>Lone-wolf movies</span>
        <ul class="fun-mini-list">
          ${formatRankList(loneWolfGroups.map(([name, titles]) => `${escapeHtml(name)} <em>${titles.map(escapeHtml).join(", ")}</em>`), "No solo picks.")}
        </ul>
      </article>
      <article class="fun-wide">
        <span>Samezies <em>(same 15 movies, ranking ignored)</em></span>
        <ul class="fun-mini-list">
          ${formatRankList(sameziesGroups.map((group) => `${group.players.map(escapeHtml).join(", ")} <em>${group.movies.map(escapeHtml).join(", ")}</em>`), "No studios picked the exact same 15 movies.")}
        </ul>
      </article>
      <article>
        <span>Studio soulmates <em>(most similar lists based on selection and ranking)</em></span>
        <ul class="fun-mini-list">
          ${formatRankList(studioSoulmates.map((pair) => `${escapeHtml(pair.names)} <em>${pair.sharedCount} shared movies, avg rank gap ${pair.averageGap.toFixed(1)}</em>`), "Need at least two studios.")}
        </ul>
      </article>
      <article>
        <span>Studio rivals <em>(least similar lists based on selection and ranking)</em></span>
        <ul class="fun-mini-list">
          ${formatRankList(studioRivals.map((pair) => `${escapeHtml(pair.names)} <em>${pair.sharedCount} shared movies, avg rank gap ${pair.averageGap.toFixed(1)}</em>`), "Need at least two studios.")}
        </ul>
      </article>
    </div>
  `;
}

function renderContestantLists(entries, results, scored) {
  if (!els.contestantLists) return;

  if (!entries.length) {
    if (els.contestantSelect) {
      els.contestantSelect.innerHTML = `<option value="">No contestants saved</option>`;
      els.contestantSelect.disabled = true;
    }
    if (els.compareContestantA) {
      els.compareContestantA.innerHTML = `<option value="">No contestants saved</option>`;
      els.compareContestantA.disabled = true;
    }
    if (els.compareContestantB) {
      els.compareContestantB.innerHTML = `<option value="">No contestants saved</option>`;
      els.compareContestantB.disabled = true;
    }
    els.contestantLists.innerHTML = `<div class="empty-state">No contestant lists have been saved yet.</div>`;
    if (els.compareLists) {
      els.compareLists.innerHTML = `<div class="empty-state">Save player lists to compare studios.</div>`;
    }
    if (els.compareStats) {
      els.compareStats.innerHTML = "";
    }
    renderPathToWin(entries, results, scored);
    renderContestFunStats(entries, results, scored);
    return;
  }

  const selectedEntry = entries.find((entry) => entry.name === state.selectedContestant) || entries[0];
  state.selectedContestant = selectedEntry.name;
  const compareEntryA = entries.find((entry) => entry.name === state.compareContestantA);
  const compareEntryB = entries.find((entry) => entry.name === state.compareContestantB);

  renderContestantOptions(els.contestantSelect, entries, selectedEntry.name);
  renderContestantOptions(els.compareContestantA, entries, compareEntryA?.name || "", "Pick a studio");
  renderContestantOptions(els.compareContestantB, entries, compareEntryB?.name || "", "Pick a studio");
  renderPathToWin(entries, results, scored);

  els.contestantLists.innerHTML = renderPickList(selectedEntry, results, scored);
  renderContestFunStats(entries, results, scored);

  if (compareEntryA && compareEntryB && compareEntryA.name !== compareEntryB.name) {
    if (els.compareLists) {
      els.compareLists.innerHTML = `
        ${renderPickList(compareEntryA, results, scored)}
        ${renderPickList(compareEntryB, results, scored)}
      `;
    }
    renderCompareStats(compareEntryA, compareEntryB, results, scored);
  } else {
    if (els.compareLists) {
      els.compareLists.innerHTML = `<div class="empty-state">Pick two studios to compare.</div>`;
    }
    if (els.compareStats) {
      els.compareStats.innerHTML = "";
    }
  }
}

function renderLeaderboard(scored) {
  if (!els.leaderboardRows) return;

  if (!scored.length) {
    els.leaderboardRows.innerHTML = `<div class="empty-state">No player lists have been saved yet.</div>`;
    return;
  }

  els.leaderboardRows.innerHTML = scored
    .map((entry, index) => `
      <div class="leaderboard-row ${index === 0 ? "is-first" : ""}" role="row">
        <span role="cell">${index + 1}</span>
        <span role="cell">${renderPlayerJump(entry.name)}${renderLeaderboardMovement(entry.name)}</span>
        <span role="cell">${formatScore(entry.score)}</span>
        <span role="cell">${entry.lockedMovies}/${MAX_PICKS}</span>
      </div>
    `)
    .join("");
}

function renderLeaderboardImage() {
  const imageUrl = state.leaderboardImageUrl.trim();
  const isUploadedImage = imageUrl.startsWith("data:image/");

  if (els.leaderboardImageInput) {
    els.leaderboardImageInput.value = isUploadedImage ? "" : imageUrl;
  }
  if (els.leaderboardImageUpload) {
    els.leaderboardImageUpload.value = "";
  }
  if (els.leaderboardImageStatus) {
    els.leaderboardImageStatus.textContent = imageUrl
      ? (isUploadedImage ? "Uploaded leaderboard image saved." : "Leaderboard image URL saved.")
      : "No leaderboard image saved.";
  }
  if (!els.leaderboardImage) return;

  els.leaderboardImage.hidden = !imageUrl;
  els.leaderboardImage.innerHTML = imageUrl
    ? `<img src="${escapeHtml(imageUrl)}" alt="Contest leaderboard feature image">`
    : "";
}

function renderStandingsGif() {
  const gifUrl = state.standingsGifUrl.trim();
  const isUploadedGif = gifUrl.startsWith("data:image/");

  if (els.standingsGifInput) {
    els.standingsGifInput.value = isUploadedGif ? "" : gifUrl;
  }
  if (els.standingsGifUpload) {
    els.standingsGifUpload.value = "";
  }
  if (els.standingsGifStatus) {
    els.standingsGifStatus.textContent = gifUrl
      ? (isUploadedGif ? "Uploaded standings GIF saved." : "Standings GIF URL saved.")
      : "No standings GIF saved.";
  }
  if (!els.standingsGif) return;

  els.standingsGif.hidden = !gifUrl;
  els.standingsGif.innerHTML = gifUrl
    ? `<img src="${escapeHtml(gifUrl)}" alt="Animated standings feature GIF">`
    : "";
}

function imageFileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      let dataUrl = String(reader.result || "");
      if (isGifLikeFile(file) && !dataUrl.startsWith("data:image/")) {
        dataUrl = dataUrl.replace(/^data:[^;]*;/, "data:image/gif;");
      }
      resolve(dataUrl);
    });
    reader.addEventListener("error", () => reject(new Error("Image could not be read.")));
    reader.readAsDataURL(file);
  });
}

function isGifLikeFile(file) {
  return file.type === "image/gif" || /\.(gif|gig)$/i.test(file.name);
}

function isSupportedImageFile(file) {
  return file.type.startsWith("image/") || isGifLikeFile(file);
}

function isJpegImageFile(file) {
  return file.type === "image/jpeg" || /\.(jpe?g)$/i.test(file.name);
}

function resizeImageDataUrl(dataUrl, maxWidth = 1400, quality = 0.84) {
  return new Promise((resolve) => {
    if (dataUrl.startsWith("data:image/gif")) {
      resolve(dataUrl);
      return;
    }

    const image = new Image();
    image.addEventListener("load", () => {
      if (image.width <= maxWidth && dataUrl.length < MAX_STORED_IMAGE_LENGTH) {
        resolve(dataUrl);
        return;
      }

      const scale = Math.min(1, maxWidth / image.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(image.width * scale);
      canvas.height = Math.round(image.height * scale);
      const context = canvas.getContext("2d");
      if (!context) {
        resolve(dataUrl);
        return;
      }

      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    });
    image.addEventListener("error", () => resolve(dataUrl));
    image.src = dataUrl;
  });
}

function renderWeeklyUpdate() {
  const update = state.weeklyUpdateText.trim();

  if (els.weeklyUpdateInput) {
    els.weeklyUpdateInput.value = update;
  }
  if (els.weeklyUpdateStatus) {
    els.weeklyUpdateStatus.textContent = update ? "Weekly update saved." : "No weekly update saved.";
  }
  if (!els.weeklyUpdateSection || !els.weeklyUpdateText) return;

  els.weeklyUpdateSection.hidden = !update;
  els.weeklyUpdateText.innerHTML = update ? escapeHtml(update).replace(/\n/g, "<br>") : "";
}

function renderMovieQuote() {
  const quote = state.movieQuoteText.trim();
  const character = state.movieQuoteCharacter.trim();
  const actor = state.movieQuoteActor.trim();
  const movie = state.movieQuoteMovie.trim();
  const metaParts = [character, actor, movie].filter(Boolean);

  if (els.movieQuoteInput) {
    els.movieQuoteInput.value = quote;
  }
  if (els.movieQuoteCharacter) {
    els.movieQuoteCharacter.value = character;
  }
  if (els.movieQuoteActor) {
    els.movieQuoteActor.value = actor;
  }
  if (els.movieQuoteMovie) {
    els.movieQuoteMovie.value = movie;
  }
  if (els.movieQuoteStatus) {
    els.movieQuoteStatus.textContent = quote ? "Movie quote saved." : "No movie quote saved.";
  }
  if (!els.movieQuoteSection || !els.movieQuoteText) return;

  els.movieQuoteSection.hidden = !quote;
  els.movieQuoteText.innerHTML = quote ? escapeHtml(quote).replace(/\n/g, "<br>") : "";
  if (els.movieQuoteMeta) {
    els.movieQuoteMeta.hidden = !metaParts.length;
    els.movieQuoteMeta.textContent = metaParts.join(" • ");
  }
}

function listCountForMovie(entries, movieTitle) {
  const key = normalizeMovie(movieTitle);
  return entries.reduce((count, entry) => count + (entry.picks.some((pick) => normalizeMovie(pick) === key) ? 1 : 0), 0);
}
function playersForMovie(entries, movieTitle) {
  const key = normalizeMovie(movieTitle);
  return entries
    .map((entry) => {
      const rankIndex = entry.picks.findIndex((pick) => normalizeMovie(pick) === key);
      return rankIndex >= 0 ? { name: entry.name, rank: rankIndex + 1 } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.rank - b.rank || a.name.localeCompare(b.name));
}

function renderAllMoviesListDetails(entries, movieTitle) {
  const players = playersForMovie(entries, movieTitle);
  const label = players.length + " list" + (players.length === 1 ? "" : "s");
  if (!players.length) return `<span>0 lists</span>`;

  return [
    `<details class="all-movies-player-details">`,
    `<summary>${label}</summary>`,
    `<ul>`,
    players.map((player) => `<li><strong>${escapeHtml(player.name)}</strong> <span>#${player.rank}</span></li>`).join(""),
    `</ul>`,
    `</details>`
  ].join("");
}

function renderMovies(results, entries) {
  if (!els.movieRows) return;

  const releaseDates = getReleaseDates();
  const sort = state.movieTableSort || "release-asc";
  const movies = Array.from(results.values()).sort((a, b) => {
    const aDate = releaseDates[normalizeMovie(a.title)] || "";
    const bDate = releaseDates[normalizeMovie(b.title)] || "";
    const aTotal = movieTotal(a);
    const bTotal = movieTotal(b);

    if (sort === "release-desc") {
      if (aDate && bDate) return bDate.localeCompare(aDate) || a.title.localeCompare(b.title);
      if (aDate) return 1;
      if (bDate) return -1;
      return a.title.localeCompare(b.title);
    }

    if (sort === "total-asc") return aTotal - bTotal || a.title.localeCompare(b.title);
    if (sort === "total-desc") return bTotal - aTotal || a.title.localeCompare(b.title);

    if (aDate && bDate) return aDate.localeCompare(bDate) || a.title.localeCompare(b.title);
    if (aDate) return -1;
    if (bDate) return 1;
    return a.title.localeCompare(b.title);
  });

  if (!movies.length) {
    els.movieRows.innerHTML = `<div class="empty-state">Enter box office results to see tracked movie totals.</div>`;
    return;
  }

  if (els.movieReleaseSort) {
    els.movieReleaseSort.textContent = `Movie release${sort === "release-asc" ? " ↑" : sort === "release-desc" ? " ↓" : ""}`;
  }
  if (els.movieTotalSort) {
    els.movieTotalSort.textContent = `Total${sort === "total-asc" ? " ↑" : sort === "total-desc" ? " ↓" : ""}`;
  }

  els.movieRows.innerHTML = movies
    .map((movie) => `
      <div class="movie-row ${isMovieCompleted(movie) ? "is-complete" : ""}" role="row">
        <span class="movie-title-cell" role="cell">
          ${escapeHtml(movie.title)}
          <small>${formatReleaseDate(releaseDates[normalizeMovie(movie.title)])}</small>
        </span>
        <span role="cell">${listCountForMovie(entries, movie.title)}</span>
        ${movie.weekends.map((value) => `<span role="cell">${value ? formatMoney(value) : "-"}</span>`).join("")}
        <span role="cell">${formatMoney(movieTotal(movie))}</span>
      </div>
    `)
    .join("");
}

function renderAllContestMovies(entries, results) {
  if (!els.allContestMovies) return;

  const releaseDates = getReleaseDates();
  const contestMovies = getContestMovies(entries).sort((a, b) => {
    const aDate = releaseDates[a.key] || "";
    const bDate = releaseDates[b.key] || "";

    if (aDate && bDate) return aDate.localeCompare(bDate) || a.title.localeCompare(b.title);
    if (aDate) return -1;
    if (bDate) return 1;
    return a.title.localeCompare(b.title);
  });
  if (!contestMovies.length) {
    els.allContestMovies.innerHTML = `<div class="empty-state">No movies have been entered yet.</div>`;
    return;
  }

  els.allContestMovies.innerHTML = contestMovies
    .map((movie) => {
      const savedMovie = results.get(movie.key);
      const count = listCountForMovie(entries, movie.title);
      const listDetailsHtml = renderAllMoviesListDetails(entries, movie.title);
      const isComplete = isMovieCompleted(savedMovie);
      const isShowing = hasAnyBoxOffice(savedMovie);
      const status = isComplete ? "Completed for Contest" : isShowing ? "Now Showing" : "Awaiting results";
      const statusClass = isComplete
        ? "all-movies-status-complete"
        : isShowing
          ? "all-movies-status-showing"
          : "all-movies-status-awaiting";
      const rowClass = isShowing || isComplete ? "" : " all-movies-row-awaiting";
      const releaseDate = formatReleaseDate(releaseDates[movie.key]);
      const movieTitleHtml = renderAllMoviesTitle(movie.title);

      return `
        <div class="all-movies-row${rowClass}">
          <span class="all-movies-date">${releaseDate}</span>
          ${movieTitleHtml}
          ${listDetailsHtml}
          <span class="all-movies-status ${statusClass}">${status}</span>
        </div>
      `;
    })
    .join("");
}

function sortedPlayerNames(entries) {
  return entries.map((entry) => entry.name).sort((a, b) => a.localeCompare(b));
}

function renderPaidAdmin(entries) {
  if (!els.paidPlayerList) return;

  if (els.patrickSecretImageUpload) els.patrickSecretImageUpload.value = "";
  if (els.patrickSecretImageStatus) {
    els.patrickSecretImageStatus.textContent = state.patrickSecretImageUrl
      ? "Secret JPG saved for Patrick Pendergast."
      : "No secret JPG saved.";
  }

  const playerNames = sortedPlayerNames(entries);
  if (!playerNames.length) {
    els.paidPlayerList.innerHTML = `<div class="empty-state">Save player lists first.</div>`;
    if (els.paidStatusNote) els.paidStatusNote.textContent = "No player lists saved.";
    return;
  }

  els.paidPlayerList.innerHTML = playerNames.map((name) => `
    <label class="paid-player-row">
      <input type="checkbox" value="${escapeHtml(name)}" ${state.paidPlayers?.[name] ? "checked" : ""}>
      <span>${escapeHtml(name)}</span>
    </label>
  `).join("");

  const paidCount = playerNames.filter((name) => state.paidPlayers?.[name]).length;
  if (els.paidStatusNote) els.paidStatusNote.textContent = `${paidCount}/${playerNames.length} player${playerNames.length === 1 ? "" : "s"} marked paid.`;
}

function isBillyKnightTitle(title) {
  return String(title || "").trim().toLocaleLowerCase() === "billy knight";
}

function renderAllMoviesTitle(title) {
  const safeTitle = escapeHtml(title);
  const imageUrl = String(state.patrickSecretImageUrl || "").trim();
  if (!imageUrl || !isBillyKnightTitle(title)) return `<strong>${safeTitle}</strong>`;

  return `<strong><a class="secret-jpg-link" href="patrick-secret.html">${safeTitle}</a></strong>`;
}

function renderPaidStatusName(name) {
  return `<strong>${escapeHtml(name)}</strong>`;
}

function renderPatrickSecretPage() {
  if (!els.patrickSecretImage) return;

  const imageUrl = String(state.patrickSecretImageUrl || "").trim();
  els.patrickSecretImage.innerHTML = imageUrl
    ? '<img src="' + escapeHtml(imageUrl) + '" alt="Secret Patrick Pendergast image">'
    : '<div class="empty-state">No secret JPG has been uploaded yet.</div>';
  if (els.patrickSecretRelease) {
    els.patrickSecretRelease.hidden = !imageUrl;
  }
}

function renderPaidStatusPage(entries) {
  if (!els.paidStatusList) return;

  const playerNames = sortedPlayerNames(entries);
  if (!playerNames.length) {
    els.paidStatusList.innerHTML = `<div class="empty-state">No players have been saved yet.</div>`;
    return;
  }

  els.paidStatusList.innerHTML = playerNames.map((name) => {
    const paid = Boolean(state.paidPlayers?.[name]);
    return `
      <div class="paid-status-row ${paid ? "is-paid" : "is-unpaid"}">
        ${renderPaidStatusName(name)}
        <span>${paid ? "Paid" : "Not paid yet"}</span>
      </div>
    `;
  }).join("");
}

function renderAdminResultsGrid(entries, results) {
  if (!els.resultsGrid) return;

  const releaseDates = getReleaseDates();
  const sortDirection = state.adminReleaseDateSort;
  const contestMovies = getContestMovies(entries).sort((a, b) => {
    const aDate = releaseDates[a.key] || "";
    const bDate = releaseDates[b.key] || "";

    if (sortDirection === "asc" || sortDirection === "desc") {
      if (aDate && bDate) {
        return sortDirection === "asc" ? aDate.localeCompare(bDate) || a.title.localeCompare(b.title) : bDate.localeCompare(aDate) || a.title.localeCompare(b.title);
      }
      if (aDate) return sortDirection === "asc" ? -1 : 1;
      if (bDate) return sortDirection === "asc" ? 1 : -1;
    }

    return a.title.localeCompare(b.title);
  });
  if (els.currentContestWeek) {
    els.currentContestWeek.value = state.currentContestWeek;
  }

  if (!contestMovies.length) {
    els.resultsGrid.innerHTML = `<div class="empty-state">Save player lists first, then every contest movie will appear here.</div>`;
    return;
  }

  els.resultsGrid.innerHTML = `
    <div class="result-grid-row result-grid-head" role="row">
      <span role="columnheader">Movie</span>
      <span role="columnheader"><button class="result-sort-button" type="button" data-sort="release-date">Release date${sortDirection === "asc" ? " ↑" : sortDirection === "desc" ? " ↓" : ""}</button></span>
      <span role="columnheader">Contest week</span>
      <span role="columnheader">Week 1</span>
      <span role="columnheader">Week 2</span>
      <span role="columnheader">Week 3</span>
      <span role="columnheader">Week 4</span>
      <span role="columnheader">Actions</span>
    </div>
    ${contestMovies.map((movie) => {
      const savedMovie = results.get(movie.key);
      const weekends = savedMovie?.weekends || Array.from({ length: MAX_WEEKENDS }, () => 0);
      const cumulativeTotals = cumulativeWeekendTotals(weekends);
      const releaseDate = releaseDates[movie.key] || "";

      return `
        <div class="result-grid-row" role="row" data-movie-key="${escapeHtml(movie.key)}" data-movie-title="${escapeHtml(movie.title)}">
          <span class="result-movie-title" role="cell">${escapeHtml(movie.title)}</span>
          <label class="result-release-date" role="cell">
            <span>Release date</span>
            <input type="date" value="${escapeHtml(releaseDate)}">
          </label>
          <span class="result-contest-week" role="cell">${contestWeekLabel(releaseDate)}</span>
          ${cumulativeTotals.map((value, index) => `
            <label class="result-week" role="cell">
              <span>Week ${index + 1}</span>
              <input type="number" min="0" step="0.1" inputmode="decimal" value="${value ? value : ""}" data-week="${index}">
            </label>
          `).join("")}
          <button class="result-clear-row" type="button" data-action="clear-row-grosses">Clear grosses</button>
        </div>
      `;
    }).join("")}
  `;
}

function serializeAdminResultsGrid() {
  if (!els.resultsGrid) return els.resultsInput?.value.trim() || "";

  const releaseDates = {};
  const resultLines = [];

  Array.from(els.resultsGrid.querySelectorAll(".result-grid-row[data-movie-title]"))
    .forEach((row) => {
      const key = row.dataset.movieKey;
      const title = row.dataset.movieTitle;
      const releaseDate = row.querySelector(".result-release-date input")?.value.trim() || "";
      const values = Array.from(row.querySelectorAll(".result-week input")).map((input) => input.value.trim());
      let previousTotal = 0;
      const weekendValues = values.map((raw) => {
        if (!raw) return "";

        const cumulativeTotal = Number.parseFloat(raw.replace(/\$/g, "").replace(/m$/i, "").trim());
        if (!Number.isFinite(cumulativeTotal)) return "";

        const weekendValue = cumulativeTotal - previousTotal;
        previousTotal = cumulativeTotal;
        return formatAdminNumber(weekendValue);
      });

      if (releaseDate) {
        releaseDates[key] = releaseDate;
      }

      if (values.some(Boolean)) {
        resultLines.push(`${title} | ${weekendValues.join(" | ")}`);
      }
    });

  state.releaseDates = releaseDates;
  return resultLines.join("\n");
}

function preserveAdminReleaseDates() {
  if (!els.resultsGrid) return;

  const releaseDates = {};
  Array.from(els.resultsGrid.querySelectorAll(".result-grid-row[data-movie-title]"))
    .forEach((row) => {
      const key = row.dataset.movieKey;
      const releaseDate = row.querySelector(".result-release-date input")?.value.trim() || "";
      if (releaseDate) {
        releaseDates[key] = releaseDate;
      }
    });

  state.releaseDates = releaseDates;
}

function renderOverallStandings(scored, rawScored) {
  if (!els.standingsGrid) return;

  renderWinnerCards(els.standingsGrid, winnerPlaces(scored, rawScored), renderPlayerJumpList);
}

function renderCompletion(entries, results) {
  if (!els.completedCount || !els.completedNote || !els.completedMovies || !els.trackingMovies) return;

  const uniquePicks = new Set(entries.flatMap((entry) => entry.picks.map(normalizeMovie)));
  const movies = Array.from(results.values()).sort((a, b) => a.title.localeCompare(b.title));
  const completed = movies.filter((movie) => uniquePicks.has(normalizeMovie(movie.title)) && isMovieCompleted(movie));
  const tracking = movies
    .filter((movie) => !isMovieCompleted(movie))
    .sort((a, b) => weeksLeft(a) - weeksLeft(b) || a.title.localeCompare(b.title));
  const completionTotal = uniquePicks.size;

  els.completedCount.textContent = `${completed.length}/${completionTotal}`;
  els.completedNote.textContent = completionTotal
    ? `${completed.length} of ${completionTotal} player-entered movies have all four weekend totals entered.`
    : "Save player lists to establish the movie pool.";

  els.completedMovies.innerHTML = completed.length
    ? completed.map((movie) => `<li>${escapeHtml(movie.title)}</li>`).join("")
    : `<li>No movies have reached the four-week cap yet.</li>`;

  els.trackingMovies.innerHTML = tracking.length
    ? tracking.map((movie) => {
      const remaining = weeksLeft(movie);
      const label = remaining === 1 ? "1 week left" : `${remaining} weeks left`;
      return `<li>${escapeHtml(movie.title)} <em>(${label})</em></li>`;
    }).join("")
    : `<li>Every tracked movie is complete.</li>`;
}

function renderHallCurrentYear(entries, results, scored, rawScored) {
  if (!els.currentYearHall || !els.hallCurrentWinners) return;

  const isComplete = contestIsComplete(entries, results);
  els.currentYearHall.hidden = !isComplete;
  if (!isComplete) return;

  renderWinnerCards(els.hallCurrentWinners, winnerPlaces(scored, rawScored));
}

function renderFinalLeaderboard(scored) {
  if (!els.finalLeaderboardRows) return;

  if (!scored.length) {
    els.finalLeaderboardRows.innerHTML = `<div class="empty-state">No player lists have been saved yet.</div>`;
    return;
  }

  els.finalLeaderboardRows.innerHTML = scored
    .map((entry, index) => `
      <div class="leaderboard-row ${index === 0 ? "is-first" : ""}" role="row">
        <span role="cell">${index + 1}</span>
        <span role="cell">${escapeHtml(entry.name)}</span>
        <span role="cell">${formatScore(entry.score)}</span>
        <span role="cell">${entry.lockedMovies}/${MAX_PICKS}</span>
      </div>
    `)
    .join("");
}

function renderFinalMovieRows(entries, results) {
  if (!els.finalMovieRows) return;

  const releaseDates = getReleaseDates();
  const movies = Array.from(results.values()).sort((a, b) => {
    const aDate = releaseDates[normalizeMovie(a.title)] || "";
    const bDate = releaseDates[normalizeMovie(b.title)] || "";

    if (aDate && bDate) return aDate.localeCompare(bDate) || a.title.localeCompare(b.title);
    if (aDate) return -1;
    if (bDate) return 1;
    return a.title.localeCompare(b.title);
  });

  if (!movies.length) {
    els.finalMovieRows.innerHTML = `<div class="empty-state">No movie totals have been saved yet.</div>`;
    return;
  }

  els.finalMovieRows.innerHTML = movies
    .map((movie) => `
      <div class="movie-row ${isMovieCompleted(movie) ? "is-complete" : ""}" role="row">
        <span class="movie-title-cell" role="cell">
          <strong>${escapeHtml(movie.title)}</strong>
          <small>${formatReleaseDate(releaseDates[normalizeMovie(movie.title)])}</small>
        </span>
        <span role="cell">${listCountForMovie(entries, movie.title)}</span>
        ${movie.weekends.map((value) => `<span role="cell">${value ? formatMoney(value) : "-"}</span>`).join("")}
        <span role="cell">${formatMoney(movieTotal(movie))}</span>
      </div>
    `)
    .join("");
}

function renderFinalStudioLists(entries, results, scored) {
  if (!els.finalStudioLists) return;

  if (!entries.length) {
    els.finalStudioLists.innerHTML = `<div class="empty-state">No studio lists have been saved yet.</div>`;
    return;
  }

  els.finalStudioLists.innerHTML = entries
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((entry) => renderPickList(entry, results, scored))
    .join("");
}

function renderFinalYearResults(entries, results, scored, rawScored) {
  if (!els.finalStandingsGrid && !els.finalLeaderboardRows && !els.finalMovieRows && !els.finalStudioLists) return;

  renderWinnerCards(els.finalStandingsGrid, winnerPlaces(scored, rawScored));
  renderFinalLeaderboard(scored);
  renderFinalMovieRows(entries, results);
  renderFinalStudioLists(entries, results, scored);
}

function renderStats(entries, results, scored) {
  const movies = Array.from(results.values());
  const uniquePicks = new Set(entries.flatMap((entry) => entry.picks.map(normalizeMovie)));
  const gross = movies.reduce((sum, movie) => sum + movieTotal(movie), 0);

  if (els.statPlayers) els.statPlayers.textContent = entries.length;
  if (els.statWeek) els.statWeek.textContent = state.currentContestWeek || "Auto";
  if (els.enterListButton) {
    const entryClosed = isEntryClosed();
    els.enterListButton.classList.toggle("is-disabled", entryClosed);
    els.enterListButton.setAttribute("aria-disabled", entryClosed ? "true" : "false");
    els.enterListButton.textContent = entryClosed ? "Entry closed" : "Enter your list";
    if (entryClosed) {
      els.enterListButton.removeAttribute("href");
    } else {
      els.enterListButton.href = "./enter-list.html";
    }
  }
  if (els.comingSoonWeek) els.comingSoonWeek.textContent = nextContestWeekLabel(state.currentContestWeek);
  if (els.statMovies) els.statMovies.textContent = `${movies.length}/${uniquePicks.size}`;
  if (els.statGross) els.statGross.textContent = formatMoney(gross);
  if (els.statLeader) els.statLeader.textContent = formatCurrentLeaders(scored);
  if (els.entryStatus) els.entryStatus.textContent = entries.length ? `${entries.length} player list${entries.length === 1 ? "" : "s"} saved` : "No lists saved";
  if (els.resultStatus) els.resultStatus.textContent = movies.length ? `${movies.length} movie total${movies.length === 1 ? "" : "s"} saved` : "No grosses saved";
}

function formatRankGroup(matches, rank) {
  const names = matches
    .filter((match) => match.rank === rank)
    .map((match) => escapeHtml(match.name))
    .join(", ");

  return names ? `${names} (#${rank})` : "No studio";
}

function renderGradePage(entries, results) {
  if (!els.gradeForm) return;

  const players = entries.slice().sort((a, b) => a.name.localeCompare(b.name));
  const movies = releasedOrTrackedMovies(entries, results);

  if (!players.length) {
    els.gradePlayerSelect.innerHTML = `<option value="">No studios saved</option>`;
    els.gradePlayerSelect.disabled = true;
    els.gradeMovies.innerHTML = `<div class="empty-state">No player lists have been saved yet.</div>`;
    if (els.gradeStatus) els.gradeStatus.textContent = "No studios available yet.";
    return;
  }

  const selectedPlayer = players.find((entry) => entry.name === state.selectedGradePlayer)?.name || players[0].name;
  state.selectedGradePlayer = selectedPlayer;
  const savedGrades = state.movieGrades?.[selectedPlayer] || {};

  els.gradePlayerSelect.disabled = false;
  els.gradePlayerSelect.innerHTML = players
    .map((entry) => `<option value="${escapeHtml(entry.name)}" ${entry.name === selectedPlayer ? "selected" : ""}>${escapeHtml(entry.name)}</option>`)
    .join("");

  if (!movies.length) {
    els.gradeMovies.innerHTML = `<div class="empty-state">No released movies are available to grade yet.</div>`;
    if (els.gradeStatus) els.gradeStatus.textContent = "Released movies will appear here once dates or box office totals are entered.";
    return;
  }

  const releaseDates = getReleaseDates();
  els.gradeMovies.innerHTML = movies
    .map((movie) => {
      const alreadyGraded = Boolean(savedGrades[movie.key]);
      return `
        <div class="grade-row ${alreadyGraded ? "is-graded" : ""}">
          <div>
            <strong>${escapeHtml(movie.title)}</strong>
            <small>${formatReleaseDate(releaseDates[movie.key])}</small>
          </div>
          <div class="grade-control">
            ${alreadyGraded ? `<button class="grade-regrade-button" type="button" data-regrade-movie="${escapeHtml(movie.key)}">Re-grade</button><span>Already graded</span>` : ""}
            <select data-movie-key="${escapeHtml(movie.key)}" aria-label="Grade ${escapeHtml(movie.title)}" ${alreadyGraded ? "hidden disabled" : ""}>
              <option value="">No grade</option>
              ${gradeOptions.map((grade) => `<option value="${grade}">${grade}</option>`).join("")}
            </select>
          </div>
        </div>
      `;
    })
    .join("");

  const gradeCount = Object.values(savedGrades).filter(Boolean).length;
  if (els.gradeStatus) els.gradeStatus.textContent = gradeCount ? `${gradeCount} movie${gradeCount === 1 ? "" : "s"} already graded. Use Re-grade to update one.` : "No grades submitted yet.";
}

function renderComingSoon(entries) {
  if (!els.comingSoonMovies) return;

  const targetWeek = nextContestWeekLabel(state.currentContestWeek);
  const releaseDates = getReleaseDates();
  const movies = /^Week\s+\d+$/i.test(targetWeek)
    ? getContestMovies(entries)
      .filter((movie) => contestWeekLabel(releaseDates[movie.key]) === targetWeek)
      .sort((a, b) => (releaseDates[a.key] || "").localeCompare(releaseDates[b.key] || "") || a.title.localeCompare(b.title))
      .map((movie) => movie.title)
    : [];

  if (!movies.length) {
    els.comingSoonMovies.innerHTML = `<p class="coming-soon-empty">Set the current contest week in the Projectionist Control Room and add release dates to see next week&apos;s movies.</p>`;
    return;
  }

  els.comingSoonMovies.innerHTML = movies.map((movieTitle) => {
    const key = normalizeMovie(movieTitle);
    const matches = entries
      .map((entry) => {
        const pickIndex = entry.picks.findIndex((pick) => normalizeMovie(pick) === key);
        return pickIndex >= 0 ? { name: entry.name, rank: pickIndex + 1 } : null;
      })
      .filter(Boolean);

    const leftOffCount = Math.max(0, entries.length - matches.length);

    if (!matches.length) {
      return `
        <article>
          <strong>${escapeHtml(movieTitle)}</strong>
          <p>No contestant has this movie on their list.</p>
          <p><span>Left off lists</span>${leftOffCount}</p>
        </article>
      `;
    }

    const highestRank = Math.min(...matches.map((match) => match.rank));
    const lowestRank = Math.max(...matches.map((match) => match.rank));

    return `
      <article>
        <strong>${escapeHtml(movieTitle)}</strong>
        <p><span>Highest ranked</span>${formatRankGroup(matches, highestRank)}</p>
        <p><span>Lowest ranked</span>${formatRankGroup(matches, lowestRank)}</p>
        <p><span>Left off lists</span>${leftOffCount}</p>
      </article>
    `;
  }).join("");
}

function jumpToContestant(name) {
  state.selectedContestant = name;
  saveState();
  render();

  document.querySelector("#contestants")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function render() {
  const entries = parseEntries(state.entriesText);
  const results = parseResults(state.resultsText);
  const scored = scoreEntries(entries, results, "all");
  const rawScored = scoreRawGross(entries, results);

  if (els.entriesInput) els.entriesInput.value = state.entriesText;
  if (els.resultsInput) els.resultsInput.value = state.resultsText;

  renderContestYear();
  setAdminLockState();
  renderLeaderboard(scored);
  renderLeaderboardImage();
  renderStandingsGif();
  renderWeeklyUpdate();
  renderMovieQuote();
  renderNewEntryForm(entries);
  renderGradePage(entries, results);
  renderContestantLists(entries, results, scored);
  renderAdminResultsGrid(entries, results);
  renderPaidAdmin(entries);
  renderPaidStatusPage(entries);
  renderPatrickSecretPage();
  renderMovies(results, entries);
  renderAllContestMovies(entries, results);
  renderOverallStandings(scored, rawScored);
  renderCompletion(entries, results);
  renderHallCurrentYear(entries, results, scored, rawScored);
  renderFinalYearResults(entries, results, scored, rawScored);
  renderComingSoon(entries);
  renderStats(entries, results, scored);
}

els.saveEntries?.addEventListener("click", () => {
  state.entriesText = els.entriesInput.value.trim();
  saveState();
  render();
  showSaveWarning(els.entryStatus);
});

els.saveResults?.addEventListener("click", () => {
  const entries = parseEntries(state.entriesText);
  const oldResults = parseResults(state.resultsText);
  const nextResultsText = serializeAdminResultsGrid();
  const newResults = parseResults(nextResultsText);

  state.leaderboardRankMovement = calculateLeaderboardMovement(entries, oldResults, newResults);
  state.resultsText = nextResultsText;
  saveState();
  render();
  showSaveWarning(els.resultStatus);
});

els.clearEntries?.addEventListener("click", () => {
  state.entriesText = "";
  saveState();
  render();
});

els.clearResults?.addEventListener("click", () => {
  preserveAdminReleaseDates();
  state.resultsText = "";
  saveState();
  render();
});

els.loadDemo?.addEventListener("click", () => {
  state.entriesText = demoEntries;
  state.resultsText = demoResults;
  state.releaseDates = demoReleaseDates;
  saveState();
  render();
});

els.unlockAdmin?.addEventListener("click", unlockAdmin);

els.adminPassword?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    unlockAdmin();
  }
});

els.exportBackup?.addEventListener("click", exportBackup);

els.importBackupInput?.addEventListener("change", () => {
  importBackupFile(els.importBackupInput.files?.[0]);
});

els.clearBrowserStorage?.addEventListener("click", clearBrowserStorage);

els.contestYear?.addEventListener("change", () => {
  state.contestYear = els.contestYear.value;
  saveState();
  render();
});

els.newEntryForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  submitNewEntry();
});

els.resetNewEntry?.addEventListener("click", () => {
  if (els.newEntryName) {
    els.newEntryName.value = "";
  }
  els.newEntryPicks?.querySelectorAll("select").forEach((select) => {
    select.value = "";
  });
  if (els.newEntryStatus) {
    els.newEntryStatus.textContent = "Choose one movie for each ranked slot.";
  }
  updateNewEntryOptions();
});

els.newEntryPicks?.addEventListener("change", (event) => {
  if (!event.target.matches("select")) return;
  updateNewEntryOptions();
});

els.gradePlayerSelect?.addEventListener("change", () => {
  state.selectedGradePlayer = els.gradePlayerSelect.value;
  render();
});
els.gradeMovies?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-regrade-movie]");
  if (!button) return;

  const row = button.closest(".grade-row");
  const select = row?.querySelector("select[data-movie-key]");
  const label = row?.querySelector(".grade-control span");
  if (!select) return;

  button.hidden = true;
  if (label) label.hidden = true;
  select.disabled = false;
  select.hidden = false;
  select.removeAttribute("disabled");
  select.removeAttribute("hidden");
  select.value = "";
  select.focus();
});

els.gradeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const playerName = els.gradePlayerSelect?.value || "";
  if (!playerName) return;

  const grades = { ...((state.movieGrades || {})[playerName] || {}) };
  els.gradeMovies?.querySelectorAll("select[data-movie-key]").forEach((select) => {
    if (select.disabled) return;

    if (select.value) {
      grades[select.dataset.movieKey] = select.value;
    } else {
      delete grades[select.dataset.movieKey];
    }
  });

  state.selectedGradePlayer = playerName;
  state.movieGrades = { ...(state.movieGrades || {}), [playerName]: grades };
  saveState();
  render();
  if (els.gradeStatus) els.gradeStatus.textContent = "Grades submitted. Thanks.";
});
els.resetGrades?.addEventListener("click", () => {
  const playerName = els.gradePlayerSelect?.value || "";
  if (!playerName) return;

  state.movieGrades = { ...(state.movieGrades || {}), [playerName]: {} };
  saveState();
  render();
});

els.contestantSelect?.addEventListener("change", () => {
  state.selectedContestant = els.contestantSelect.value;
  saveState();
  render();
});

els.compareContestantA?.addEventListener("change", () => {
  state.compareContestantA = els.compareContestantA.value;
  saveState();
  render();
});

els.compareContestantB?.addEventListener("change", () => {
  state.compareContestantB = els.compareContestantB.value;
  saveState();
  render();
});

els.resetCompare?.addEventListener("click", () => {
  state.compareContestantA = "";
  state.compareContestantB = "";
  saveState();
  render();
});

els.pathToWinSelect?.addEventListener("change", () => {
  state.pathToWinContestant = els.pathToWinSelect.value;
  saveState();
  render();
});

els.currentContestWeek?.addEventListener("change", () => {
  state.currentContestWeek = els.currentContestWeek.value;
  saveState();
  render();
});

els.leaderboardRows?.addEventListener("click", (event) => {
  const button = event.target.closest(".player-jump");
  if (!button) return;

  jumpToContestant(button.dataset.playerName);
});

els.standingsGrid?.addEventListener("click", (event) => {
  const button = event.target.closest(".player-jump");
  if (!button) return;

  jumpToContestant(button.dataset.playerName);
});

els.saveLeaderboardImage?.addEventListener("click", () => {
  const uploadedImage = els.leaderboardImageUpload?.files?.[0];

  if (uploadedImage) {
    if (!isSupportedImageFile(uploadedImage)) {
      if (els.leaderboardImageStatus) {
        els.leaderboardImageStatus.textContent = "Choose an image, GIF, or .gig file to upload.";
      }
      return;
    }

    imageFileToDataUrl(uploadedImage)
      .then((dataUrl) => resizeImageDataUrl(dataUrl))
      .then((dataUrl) => {
        state.leaderboardImageUrl = dataUrl;
        saveState();
        render();
        showSaveWarning(els.leaderboardImageStatus);
      })
      .catch(() => {
        if (els.leaderboardImageStatus) {
          els.leaderboardImageStatus.textContent = "That image could not be uploaded.";
        }
      });
    return;
  }

  state.leaderboardImageUrl = els.leaderboardImageInput.value.trim();
  saveState();
  render();
  showSaveWarning(els.leaderboardImageStatus);
});

els.clearLeaderboardImage?.addEventListener("click", () => {
  state.leaderboardImageUrl = "";
  if (els.leaderboardImageUpload) {
    els.leaderboardImageUpload.value = "";
  }
  saveState();
  render();
  showSaveWarning(els.leaderboardImageStatus);
});

els.saveStandingsGif?.addEventListener("click", () => {
  const uploadedGif = els.standingsGifUpload?.files?.[0];

  if (uploadedGif) {
    if (!isGifLikeFile(uploadedGif)) {
      if (els.standingsGifStatus) {
        els.standingsGifStatus.textContent = "Choose a GIF or .gig file to upload.";
      }
      return;
    }

    imageFileToDataUrl(uploadedGif)
      .then((dataUrl) => {
        state.standingsGifUrl = dataUrl;
        saveState();
        render();
        showSaveWarning(els.standingsGifStatus);
      })
      .catch(() => {
        if (els.standingsGifStatus) {
          els.standingsGifStatus.textContent = "That GIF could not be uploaded.";
        }
      });
    return;
  }

  state.standingsGifUrl = els.standingsGifInput.value.trim();
  saveState();
  render();
  showSaveWarning(els.standingsGifStatus);
});

els.clearStandingsGif?.addEventListener("click", () => {
  state.standingsGifUrl = "";
  if (els.standingsGifUpload) {
    els.standingsGifUpload.value = "";
  }
  saveState();
  render();
  showSaveWarning(els.standingsGifStatus);
});

els.saveWeeklyUpdate?.addEventListener("click", () => {
  state.weeklyUpdateText = els.weeklyUpdateInput.value.trim();
  saveState();
  render();
});

els.clearWeeklyUpdate?.addEventListener("click", () => {
  state.weeklyUpdateText = "";
  saveState();
  render();
});

els.saveMovieQuote?.addEventListener("click", () => {
  state.movieQuoteText = els.movieQuoteInput.value.trim();
  state.movieQuoteCharacter = els.movieQuoteCharacter?.value.trim() || "";
  state.movieQuoteActor = els.movieQuoteActor?.value.trim() || "";
  state.movieQuoteMovie = els.movieQuoteMovie?.value.trim() || "";
  saveState();
  render();
});

els.clearMovieQuote?.addEventListener("click", () => {
  state.movieQuoteText = "";
  state.movieQuoteCharacter = "";
  state.movieQuoteActor = "";
  state.movieQuoteMovie = "";
  saveState();
  render();
});

els.savePatrickSecretImage?.addEventListener("click", () => {
  const uploadedImage = els.patrickSecretImageUpload?.files?.[0];

  if (!uploadedImage) {
    if (els.patrickSecretImageStatus) els.patrickSecretImageStatus.textContent = "Choose a JPG to upload.";
    return;
  }

  if (!isJpegImageFile(uploadedImage)) {
    if (els.patrickSecretImageStatus) els.patrickSecretImageStatus.textContent = "Choose a JPG or JPEG file.";
    return;
  }

  imageFileToDataUrl(uploadedImage)
    .then((dataUrl) => resizeImageDataUrl(dataUrl, 1200, 0.86))
    .then((dataUrl) => {
      state.patrickSecretImageUrl = dataUrl;
      saveState();
      render();
      showSaveWarning(els.patrickSecretImageStatus);
    })
    .catch(() => {
      if (els.patrickSecretImageStatus) els.patrickSecretImageStatus.textContent = "That JPG could not be uploaded.";
    });
});

els.clearPatrickSecretImage?.addEventListener("click", () => {
  state.patrickSecretImageUrl = "";
  if (els.patrickSecretImageUpload) els.patrickSecretImageUpload.value = "";
  saveState();
  render();
  showSaveWarning(els.patrickSecretImageStatus);
});

els.savePaidStatus?.addEventListener("click", () => {
  const paidPlayers = {};
  els.paidPlayerList?.querySelectorAll("input[type='checkbox']").forEach((input) => {
    if (input.checked) {
      paidPlayers[input.value] = true;
    }
  });

  state.paidPlayers = paidPlayers;
  saveState();
  render();
});

els.resultsGrid?.addEventListener("input", (event) => {
  if (!event.target.matches(".result-release-date input")) return;

  const row = event.target.closest(".result-grid-row");
  const contestWeek = row?.querySelector(".result-contest-week");
  if (contestWeek) {
    contestWeek.textContent = contestWeekLabel(event.target.value);
  }
});

els.resultsGrid?.addEventListener("click", (event) => {
  const clearButton = event.target.closest(".result-clear-row[data-action='clear-row-grosses']");
  if (clearButton) {
    const row = clearButton.closest(".result-grid-row[data-movie-title]");
    row?.querySelectorAll(".result-week input").forEach((input) => {
      input.value = "";
    });
    state.resultsText = serializeAdminResultsGrid();
    saveState();
    render();
    return;
  }

  const button = event.target.closest(".result-sort-button[data-sort='release-date']");
  if (!button) return;

  state.resultsText = serializeAdminResultsGrid();
  state.adminReleaseDateSort = state.adminReleaseDateSort === "asc" ? "desc" : "asc";
  saveState();
  render();
});

document.querySelector(".movie-table")?.addEventListener("click", (event) => {
  const button = event.target.closest(".table-sort-button[data-movie-sort]");
  if (!button) return;

  const sortType = button.dataset.movieSort;
  if (sortType === "release") {
    state.movieTableSort = state.movieTableSort === "release-asc" ? "release-desc" : "release-asc";
  }
  if (sortType === "total") {
    state.movieTableSort = state.movieTableSort === "total-desc" ? "total-asc" : "total-desc";
  }
  saveState();
  render();
});

render();
syncFromSupabase();
subscribeToSupabaseState();
