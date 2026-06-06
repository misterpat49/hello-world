const SAMPLE_WORDS = parseWords(`
White, black, red, purple, brown, blue, green, silver, gold, pink, purple, orange, yellow, wood, glass, metal, rock, stone, silk, cotton, washing machine, fridge, sofa, table, chair, curtains, window, house, chimney, door, floor, carpet, roof, lawn, driveway, sidewalk, hose, sink, toilet, shower, bedroom, mirror, faucet, oven, stove, microwave, tv, dvd, vcr, xbox, playstation, direcTV, remote control, pillow, blanket, dresser, toothpaste, brush, soap, shampoo, toothbrush, razor, medicine, pills, comb, cologne, perfume, hairspray, q-tip, glasses, contact lens, shoe, sock, boot, skirt, pants, shorts, t-shirt, dress, hat, sunglasses, ring, necklace, bracelet, watch, clock, jacket, helmet, goggles, wallet, purse, books, fireplace, lamp, picture, artwork, record player, vinyl, vase, flowers, plant, garden, candle, bar, liquor, beer, whiskey, tequila, vodka, gin, wine, toaster, garbage, fork, knife, spoon, spatula, pot, pan, coffee, milk, mustard, ketchup, mayo, water, butter, eggs, soda, coke, La croix, toast, cereal, salt, pepper, cupboard, toolbox, hammer, saw, screwdriver, nail, ruler, glue, tape, rice, beans, fish, tuna, breasts, penis, nose, mouth, eyes, ears, hair, neck, arm, hand, foot, fingers, toes, butt, underwear, bra, broom, vacuum, towel, detergent, flashlight, sleeping bag, tent, batteries, lighter, matches, mail, button, motorcycle, car, bus, boat, airplane, bike, baby, child, adult, mom, dad, diaper, fire, tornado, earthquake, hurricane, space, stars, sun, moon, planet, comet, asteroid, dinosaur, cow, pig, dog, cat, mouse, bear, chicken, turkey, horse, farm, tractor, train, ship, game, sword, gun, lightsaber, Santa, elf, Christmas, sleigh, toys, cookies, ice cream, dessert, dinner, lunch, breakfast, bacon, potato, tomato, apple, banana, lemon, carrot, peas, sugar, flour, cinnamon, California, Texas, New York, Washington, Oregon, Florida, Boston, Los Angeles, Hollywood, San Francisco, Detroit, Chicago, Canada, America, Mexico, Brazil, Ireland, London, Paris, France, Russia, China, Japan, China, Rome, Italy, Australia, New Zealand, Alaska, Hawaii, mountain, hills, waterfall, river, lake, ocean, desk, computer, iPhone, iPad, keyboard, suitcase, headphones, guitar, drums, flute, piano, cloud, sky, rain, hail, snow, snowman, sewer, clown, lion, tiger, popcorn, trapeze, circus, tree, bush, thorn, rose, eagle, bat, football, basketball, soccer, tennis, baseball, cricket, swimming pool, hot tub, slide, swing set, fountain, street, traffic light, boxing, wrestling, gloves, mustache, beard, wig, powder, make-up, lipstick, hospital, school, store, market, gas station, tank, jet, war, soldier, president, congress, senator, politician, villain, hero, princess, prince, king, queen, chess, poker, blackjack, casino, roulette, award, police officer, fireman, paramedic, medic, doctor, nurse, disease, band-aid, lotion, condom, tampon, blood, urine, tears, eyelashes, skin, lips, teeth, tongue, cowboy, dracula, Indian, robot, zombie, werewolf, vampire, Frankenstein, skeleton, pumpkin, jack-o-lantern, halloween, easter, basket, bunny, rabbit, magic, plate, bowl, superman, batman, aquaman, Wonder Woman, Spiderman, iron man, dragon, monster, snake, eel, frog, lizard, spider, mosquito, bumble bee, wasp, beetle, slug, caterpillar, butterfly, ant, mud, cramp, muscle, ink, pencil, tin man, scarecrow, oz, Darth Vader, chipmunk, Mickey Mouse, Donald Duck, Pluto, bugs bunny, snoopy, Garfield, smurf, surfboard, skateboard, snowboard, popeye, little mermaid, Aladdin, margarita, rainbow, Bambi, Snow White, cinderella, sleeping beauty, dumbo, trump, Obama, bill Clinton, Hillary Clinton, George Washington, Lincoln, JFK, Elvis, Michael Jackson, M&Ms, peanut butter, jelly, Michael Jordan, Marilyn Monroe, missile, rocket, shark, whale, octopus, fish, starfish, seahorse, giraffe, elephant, alligator, worm, unicorn, honey, pork, beef, pasta, burrito, taco, Africa, India, hulk, bible, Jesus, god, cross, jeep, cabin, scooter, Disneyland, legos, volcano, golf, club, Miami, Dallas, mummy, strawberry, cherry, shield, lifeguard, money, jewelry, pizza, mcdonalds, Taco Bell, pitbull, transformer, steam, web, marshmallow, key, tire, theater, Yahtzee, dice, merry go round, opera, comic book, lock, cage, paper, van, actor, director, island, scarf, square, circle, triangle, rectangle, madonna, Lady Gaga, teddy bear, friends, Pixar, alien, spaceship, blimp, zoo, rope, gym, library, lottery, subway, Beethoven, CD, dream, nightmare, balloon, parachute, needle, army, navy, freckle, pretzel, castle, torch, wheel, juice, steroid, joker, fairy, valentine, brain, heart, stomach, throat, hobbit, Milky Way, skull, Indiana jones, ark, bridge, haunted house, pulp, laboratory, office, cavity, dentist, parade, wolverine, Godzilla, King Kong, Sherlock Holmes, tom cruise, will smith, twilight, Elmo, Forrest Gump, terminator, toy story, rocky, Seinfeld, Bart Simpson, Ferrari, Volkswagen, speaker, credit card, fertilizer, bomb, scissors, ruler, jump rope, vacation, barbie, GI Joe, chocolate, weed, astronaut, Tokyo, San Diego, Seattle, St Patricks Day, Star Wars, Kanye West, Pinocchio, Peter Pan, Robin Hood, Tarzan, Winnie the Pooh, Mary Poppins, Harry Potter, James Bond, Yoda, pyramid, Yosemite, Scooby Doo, Smokey the Bear, Champagne, Manhattan, Martini, Bloody Mary, mimosa, sausage, toothpick, paperclip, surgery, yacht, bench, ornament, leather, telephone pole, screen, dart, donut, corn flakes, cheerios, criminal, Saturday Night Live, scuba diver, drugs, cocaine, olympics, super bowl, the oscars, big bird, Cookie Monster, a witch, tarantula, donkey, corvette, BMW, Netflix, Amazon, alphabet, google, facebook, instagram, snapchat, Coca Cola, Starbucks, Nike, Oreos, Ikea, Target, Jeans, slippers, stockings, Red Bull, MTV, HBO, Skittles, twitter, Pokemon, Justin Timberlake, beyonce, drake, dora the explorer, jetski, fingernail, thermometer, quarterback, oil, gasoline, scab, poop, statue of liberty, Rice Krispies, bikini, cake, frosting, peanut, deodorant, grave, coffin, fireworks, cartoon, clay, play dough, crayon, wax, sex, party, concert, festival, stalker, Humpty Dumpty, Game of Thrones, Stranger Things, poison, kindergarten, Pepsi, cork, bottle, graffiti, monopoly, scrabble, suit, birthday, funeral, wedding, graduation, cheez-its, cannibal, hunter, nickelodeon, jail, handcuffs, trophy, aquarium, chalk, map, jukebox, bowling pin, backpack, Kleenex, Picasso, zeus, weekend, holiday, calendar, compass, telescope, pirate, will ferrel, jimmy Fallon, jimmy Kimmel, Walmart, smuggler, Shakespeare, spy, britney spears, cupid, reindeer, Bigfoot, swamp, picnic, cap'n crunch, fruit loops, muppet, taxi, uber, airbnb, journal, crumbs, Moses, church, devil, demon, pocahontas, beauty and the beast, universal studios, recliner, licorice, kardashian, brad Pitt, tom hanks, Taylor Swift, Justin Bieber, Robert downey JR, Miley cryus, Eminem, tiger woods, Denzel Washington, Leonardo DiCaprio, Jennifer Lawrence, Jim Carrey, acid, grease, wings, quiz, mask, brick, sneeze, snail, milkshake, Kleenex, black panther, 49ers, The Lakers, microscope, lava, wheat, E.T., jack in the box, zit, lice, dandruff, cupcake, emoji, cushion, splinter, matrix, sand, sauna, asia, hoop, puddle, sheriff, ellen, cap'n crunch, gremlin, american idol, TikTok, Selfie, Tiger King, Corona Virus, Machine Gun, BuzzFeed, Hulu, Spanx, Coach, survivor, Coconut, plastic surgery, Hillary Clinton, Fishing, Salmon, Ursula, Jafar, Ape, Fart, Seaweed, Sushi, Clint Eastwood, Puppy, Vomit, Bicep, Bud Light, Grandpa, TMZ, Trader Joe's, Spaghetti, Italy, Moby Dick, Captain America, Reef, Joint, Chemistry, Treasure, Soap, Martian, polaroid, hangover, stock market, pop tarts, Mac & cheese, breakfast club, pee wee Herman, uncle buck, home alone, Eddie Murphy, Moby dick, jaws, gummy bears, ferris Bueller, Wyatt Earp, snakes on a plane, Hugh Jackman, John wick, Rambo, silence of the lambs, Shrek, Humpty Dumpty, little miss muffet, Edward scissorhands, pocahontas, ace Ventura, The Godfather, pennywise, quarter, nickel, penny, dollar, Stevie wonder, deaf, blind, Noah's ark, fish tank, shark tank, Charlie Brown, boogie man, explosion, Covid, vaccine, quarantine, garden gnome, bait, picasso, Olive Garden, red lobster, squid, goldilocks, Hansel & Gretel, frosty the snowman, chris rock, Ted Lasso, Elon Musk, NASA, silly putty, slinky, legos, wordle, coupon, checkbook, bitcoin, crypto, android, film, chapel, Nic Cage, home depot, antenna, tee pee, saddle, saloon, holster, forklift, Muhammad Ali, Al Capone, Frank SInatra, David Bowie, Steve Jobs, Steven Spielberg, Meryl Streep, Princess Diana, Lebron James, Quentin Tarantino, Jurassic Park, Mac Miller, Ted Lasso, Succession, The Last of Us, Mario Brothers, The Grove, Temple, religion, prostitute, The Bear, Jay-Z, Harry Styles, the Eiffel Tower, Great Wall of China, Thai Food, Gucci, Adidas, Calvin Klein, Levis, Prada, Timothee Chalamet, Adam Sandler, Scarlett Johansson, Emma Stone, Margot Robbie, Zendaya, Euphoria, parasite, Avatar, Jamie Lee Curtis, Magic Mike, air conditioner, tom holland, Jada Pinkett Smith, Serena Williams, Mariah Carey, Whitney Houston, Chris Rock, Dave Chappelle, Elton John, Bruno Mars, The Weeknd, Ariana Grande, Pete Davidson, Fleetwood Mac, U2, Coldplay, Malibu, ramen, spice, Tim waltz, kamala Harris, gandalf, oppenheimer, anime, Santa Monica, met gala
`);

const TEAM_LABELS = {
  red: "Red",
  blue: "Blue"
};

const SUPABASE_URL = "https://aagpivdjxecaejuilhaf.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZ3BpdmRqeGVjYWVqdWlsaGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxNjU1MDUsImV4cCI6MjA5NDc0MTUwNX0.lkx1UhkuKOz367Ns6Rpuczl2aqbC1eRc6dikvK1hx2Q";
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const state = {
  words: [...SAMPLE_WORDS],
  boardSize: 5,
  assassinCount: 1,
  cards: [],
  currentTeam: null,
  startingTeam: null,
  nextStartingTeam: null,
  pendingGuessCount: null,
  selectedGuessCount: null,
  bonusEnabled: false,
  settingsLocked: false,
  currentClueText: "",
  lastRevealedCardId: null,
  assassinBlinking: false,
  assassinRevealVisible: false,
  selectedAssassinCardId: null,
  clueLimit: 0,
  guessesThisTurn: 0,
  gameOver: false,
  gameOverReason: null,
  winnerTeam: null,
  assassinLoserTeam: null,
  gameWinRecorded: false,
  sessionWarningVisible: false,
  newGameWarningVisible: false,
  sessionWins: {
    red: 0,
    blue: 0
  },
  clueTurns: {
    red: 0,
    blue: 0
  },
  statusText: "Good luck word nerds",
  spymasterMode: false,
  swapMode: false,
  wordsSwapped: false
};

const DEFAULT_STATE = JSON.parse(JSON.stringify(state));
let gameRoomId = "";
let saveTimer = null;
let isApplyingRemoteState = false;
let roomChannel = null;

const els = {
  board: document.querySelector("#board"),
  appTitle: document.querySelector("#appTitle"),
  gameStatus: document.querySelector("#gameStatus"),
  gameLayout: document.querySelector(".game-layout"),
  setupCard: document.querySelector(".setup-card"),
  clueCard: document.querySelector(".clue-card"),
  wordsCard: document.querySelector(".words-card"),
  redScoreCard: document.querySelector("#redScoreCard"),
  blueScoreCard: document.querySelector("#blueScoreCard"),
  redScoreLabel: document.querySelector("#redScoreLabel"),
  blueScoreLabel: document.querySelector("#blueScoreLabel"),
  redGuessBadge: document.querySelector("#redGuessBadge"),
  blueGuessBadge: document.querySelector("#blueGuessBadge"),
  submittedClue: document.querySelector("#submittedClue"),
  assassinReveal: document.querySelector("#assassinReveal"),
  assassinRevealWord: document.querySelector("#assassinRevealWord"),
  redOverallWins: document.querySelector("#redOverallWins"),
  blueOverallWins: document.querySelector("#blueOverallWins"),
  gameOverBanner: document.querySelector("#gameOverBanner"),
  gameOverTitle: document.querySelector("#gameOverTitle"),
  gameOverDetail: document.querySelector("#gameOverDetail"),
  redRemaining: document.querySelector("#redRemaining"),
  blueRemaining: document.querySelector("#blueRemaining"),
  wordUpload: document.querySelector("#wordUpload"),
  boardSizeSelect: document.querySelector("#boardSizeSelect"),
  assassinCountLabel: document.querySelector("#assassinCountLabel"),
  assassinCountSelect: document.querySelector("#assassinCountSelect"),
  christmasModeBtn: document.querySelector("#christmasModeBtn"),
  newGameBtn: document.querySelector("#newGameBtn"),
  newSessionBtn: document.querySelector("#newSessionBtn"),
  sessionWarning: document.querySelector("#sessionWarning"),
  confirmNewSessionBtn: document.querySelector("#confirmNewSessionBtn"),
  cancelNewSessionBtn: document.querySelector("#cancelNewSessionBtn"),
  newGameWarning: document.querySelector("#newGameWarning"),
  confirmNewGameBtn: document.querySelector("#confirmNewGameBtn"),
  cancelNewGameBtn: document.querySelector("#cancelNewGameBtn"),
  boardModeBtn: document.querySelector("#boardModeBtn"),
  swapWordsBtn: document.querySelector("#swapWordsBtn"),
  clueTextForm: document.querySelector("#clueTextForm"),
  clueTextInput: document.querySelector("#clueTextInput"),
  clueTextSubmit: document.querySelector("#clueTextForm button[type='submit']"),
  guessButtons: document.querySelector("#guessButtons"),
  newWordsBtn: document.querySelector("#newWordsBtn"),
  bonusChoice: document.querySelector("#bonusChoice"),
  bonusText: document.querySelector("#bonusText"),
  noBonusBtn: document.querySelector("#noBonusBtn"),
  yesBonusBtn: document.querySelector("#yesBonusBtn"),
  gameRoomLabel: document.querySelector("#gameRoomLabel"),
  gameRoomInput: document.querySelector("#gameRoomInput"),
  joinRoomForm: document.querySelector("#joinRoomForm"),
  copyRoomLinkBtn: document.querySelector("#copyRoomLinkBtn"),
  newRoomBtn: document.querySelector("#newRoomBtn")
};

function generateGameRoomId() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 6 }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
}

function cleanGameRoomId(value) {
  return String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 12);
}

function gameRoomStorageKey(roomId = gameRoomId) {
  return "pendy-codenames:" + roomId;
}

function gameRoomSupabaseId(roomId = gameRoomId) {
  return "codenames-" + roomId.toLowerCase();
}

function gameRoomLink(roomId = gameRoomId) {
  const url = new URL(window.location.href);
  url.searchParams.set("game", roomId);
  return url.toString();
}

function setGameRoomUrl(roomId) {
  const url = new URL(window.location.href);
  url.searchParams.set("game", roomId);
  window.history.replaceState(null, "", url);
}

function getInitialGameRoomId() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = cleanGameRoomId(params.get("game"));
  if (fromUrl) return fromUrl;

  const created = generateGameRoomId();
  setGameRoomUrl(created);
  return created;
}

function resetStateToDefaults() {
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, JSON.parse(JSON.stringify(DEFAULT_STATE)));
  els.clueTextInput.value = "";
  els.clueTextInput.classList.remove("is-submitted");
  document.body.classList.remove("christmas-mode");
}

function serializableGameState() {
  const sharedState = JSON.parse(JSON.stringify(state));
  delete sharedState.spymasterMode;
  delete sharedState.swapMode;
  delete sharedState.sessionWarningVisible;
  delete sharedState.newGameWarningVisible;
  return sharedState;
}

function applyGameState(savedState) {
  if (!savedState || typeof savedState !== "object") return;

  const localSpymasterMode = state.spymasterMode;
  resetStateToDefaults();
  Object.assign(state, { ...JSON.parse(JSON.stringify(DEFAULT_STATE)), ...savedState });
  state.spymasterMode = localSpymasterMode;
  if (!Array.isArray(state.words) || !state.words.length) state.words = [...SAMPLE_WORDS];
  if (!state.sessionWins) state.sessionWins = { red: 0, blue: 0 };
  if (!state.clueTurns) state.clueTurns = { red: 0, blue: 0 };
  els.clueTextInput.value = state.currentClueText || "";
  els.clueTextInput.classList.toggle("is-submitted", Boolean(state.currentClueText));
}

function loadLocalGameState() {
  try {
    const saved = JSON.parse(localStorage.getItem(gameRoomStorageKey()));
    if (saved) applyGameState(saved);
  } catch (error) {
    console.warn("Could not load local Codenames game", error);
  }
}

function saveLocalGameState() {
  try {
    localStorage.setItem(gameRoomStorageKey(), JSON.stringify(serializableGameState()));
  } catch (error) {
    console.warn("Could not save local Codenames game", error);
  }
}

async function saveRemoteGameState() {
  if (!supabaseClient || !gameRoomId) return;

  try {
    const { error } = await supabaseClient.from("contest_state").upsert({
      id: gameRoomSupabaseId(),
      state: serializableGameState(),
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  } catch (error) {
    console.warn("Could not sync Codenames game", error);
  }
}

function scheduleGameSave() {
  if (isApplyingRemoteState || !gameRoomId) return;

  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    saveLocalGameState();
    saveRemoteGameState();
  }, 250);
}

async function loadRemoteGameState() {
  if (!supabaseClient || !gameRoomId) return false;

  try {
    const { data, error } = await supabaseClient
      .from("contest_state")
      .select("state")
      .eq("id", gameRoomSupabaseId())
      .maybeSingle();
    if (error || !data?.state) return false;

    isApplyingRemoteState = true;
    applyGameState(data.state);
    saveLocalGameState();
    render();
    isApplyingRemoteState = false;
    return true;
  } catch (error) {
    isApplyingRemoteState = false;
    console.warn("Could not load remote Codenames game", error);
    return false;
  }
}

function subscribeToGameRoom() {
  if (!supabaseClient || !gameRoomId) return;

  if (roomChannel) {
    supabaseClient.removeChannel(roomChannel);
    roomChannel = null;
  }

  roomChannel = supabaseClient
    .channel("codenames-room-" + gameRoomId)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "contest_state", filter: "id=eq." + gameRoomSupabaseId() },
      (payload) => {
        if (!payload.new?.state) return;
        isApplyingRemoteState = true;
        applyGameState(payload.new.state);
        saveLocalGameState();
        render();
        isApplyingRemoteState = false;
      }
    )
    .subscribe();
}

function renderGameRoom() {
  if (els.gameRoomLabel) els.gameRoomLabel.textContent = gameRoomId || "------";
  if (els.gameRoomInput && document.activeElement !== els.gameRoomInput) els.gameRoomInput.value = gameRoomId || "";
}

async function switchGameRoom(roomId) {
  const nextRoomId = cleanGameRoomId(roomId) || generateGameRoomId();
  window.clearTimeout(saveTimer);
  if (roomChannel && supabaseClient) {
    supabaseClient.removeChannel(roomChannel);
    roomChannel = null;
  }

  gameRoomId = nextRoomId;
  setGameRoomUrl(gameRoomId);

  isApplyingRemoteState = true;
  resetStateToDefaults();
  loadLocalGameState();
  render();
  isApplyingRemoteState = false;

  await loadRemoteGameState();
  subscribeToGameRoom();
  scheduleGameSave();
}

async function copyGameRoomLink() {
  const link = gameRoomLink();
  try {
    await navigator.clipboard.writeText(link);
    setStatus("Copied game link for " + gameRoomId + ".");
  } catch {
    setStatus("Game link: " + link);
  }
  render();
}

function parseWords(text, fileName = "") {
  let rawWords = [];
  const trimmed = text.trim();

  if (fileName.endsWith(".json")) {
    const parsed = JSON.parse(trimmed);
    rawWords = Array.isArray(parsed) ? parsed : Object.values(parsed).flat();
  } else {
    rawWords = trimmed.split(/[\n,;\t]+/);
  }

  const seen = new Set();
  return rawWords
    .map((word) => String(word).trim())
    .filter(Boolean)
    .filter((word) => {
      const key = word.toLocaleLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getRoleCounts(boardSize, startingTeam, assassinCount) {
  const totalCards = boardSize * boardSize;
  const baseNonAssassinCards = totalCards - 1;
  const estimatedTeamWords = Math.round(baseNonAssassinCards * (17 / 24));
  const teamWords = estimatedTeamWords % 2 === 0 ? estimatedTeamWords - 1 : estimatedTeamWords;
  const startingWords = Math.ceil(teamWords / 2);
  const otherWords = Math.floor(teamWords / 2);
  const neutralWords = totalCards - assassinCount - teamWords;

  return {
    [startingTeam]: startingWords,
    [startingTeam === "red" ? "blue" : "red"]: otherWords,
    neutral: neutralWords,
    assassin: assassinCount
  };
}

function buildRoles(startingTeam, boardSize, assassinCount) {
  const counts = getRoleCounts(boardSize, startingTeam, assassinCount);
  const otherTeam = startingTeam === "red" ? "blue" : "red";
  return shuffle([
    ...Array(counts[startingTeam]).fill(startingTeam),
    ...Array(counts[otherTeam]).fill(otherTeam),
    ...Array(counts.neutral).fill("neutral"),
    ...Array(counts.assassin).fill("assassin")
  ]);
}

function isChristmasMode() {
  return document.body.classList.contains("christmas-mode");
}

function teamLabel(team) {
  if (team === "blue" && isChristmasMode()) return "Green";
  return TEAM_LABELS[team];
}

function localizeText(text) {
  if (text === "Good luck word nerds") {
    return isChristmasMode() ? "Good luck word elves" : text;
  }
  if (isChristmasMode() && text.includes("selected the black word and ruined the fun for everyone!")) {
    return text
      .replace(/\bBlue\b/g, "Green")
      .replace(/\bblue\b/g, "green")
      .replace("selected the black word and ruined the fun for everyone!", "selected the naughty word and ruined Christmas!");
  }
  if (!isChristmasMode()) return text;
  return text
    .replace(/\bBlue\b/g, "Green")
    .replace(/\bblue\b/g, "green")
    .replace(/\bBlack words\b/g, "Naughty words")
    .replace(/\bblack words\b/g, "naughty words")
    .replace(/\bBlack word\b/g, "Naughty word")
    .replace(/\bblack word\b/g, "naughty word");
}

function newGame() {
  const totalCards = state.boardSize * state.boardSize;
  if (state.words.length < totalCards) {
    setStatus(`Need at least ${totalCards} unique words for a ${state.boardSize}x${state.boardSize} grid. This database has ${state.words.length}.`);
    return;
  }

  state.startingTeam = state.nextStartingTeam || (Math.random() > 0.5 ? "red" : "blue");
  state.nextStartingTeam = state.startingTeam === "red" ? "blue" : "red";
  state.currentTeam = state.startingTeam;
  state.pendingGuessCount = null;
  state.selectedGuessCount = null;
  state.bonusEnabled = false;
  state.currentClueText = "";
  els.clueTextInput.value = "";
  els.clueTextInput.classList.remove("is-submitted");
  state.lastRevealedCardId = null;
  state.assassinBlinking = false;
  state.assassinRevealVisible = false;
  state.selectedAssassinCardId = null;
  state.settingsLocked = false;
  state.clueLimit = 0;
  state.guessesThisTurn = 0;
  state.gameOver = false;
  state.gameOverReason = null;
  state.winnerTeam = null;
  state.assassinLoserTeam = null;
  state.gameWinRecorded = false;
  state.sessionWarningVisible = false;
  state.newGameWarningVisible = false;
  state.clueTurns.red = 0;
  state.clueTurns.blue = 0;
  state.spymasterMode = false;
  state.swapMode = false;
  state.wordsSwapped = false;

  const selectedWords = shuffle(state.words).slice(0, totalCards);
  const roles = buildRoles(state.startingTeam, state.boardSize, state.assassinCount);
  state.cards = selectedWords.map((word, index) => ({
    id: crypto.randomUUID(),
    word,
    role: roles[index],
    revealed: false,
    revealedBy: null
  }));

  setStatus(`${TEAM_LABELS[state.startingTeam]} starts and has ${getRoleCounts(state.boardSize, state.startingTeam, state.assassinCount)[state.startingTeam]} words.`);
  render();
}

function newWords() {
  const wasSpymasterMode = state.spymasterMode;
  newGame();
  state.spymasterMode = wasSpymasterMode;
  render();
}

function newGamePreservingMode() {
  const wasSpymasterMode = state.spymasterMode;
  newGame();
  state.spymasterMode = wasSpymasterMode;
  render();
}

function setStatus(message) {
  state.statusText = message;
  els.gameStatus.textContent = localizeText(message);
}

function remaining(team) {
  return state.cards.filter((card) => card.role === team && !card.revealed).length;
}

function submitClueText(event) {
  event.preventDefault();
  if (state.pendingGuessCount !== null || state.clueLimit > 0) return;

  const clue = els.clueTextInput.value.trim();
  if (!clue) return;

  state.currentClueText = clue;
  els.clueTextInput.value = clue;
  els.clueTextInput.classList.add("is-submitted");
  render();
}

function askForBonus(count) {
  if (state.gameOver || !state.cards.length || state.pendingGuessCount !== null) return;

  if (!Number.isInteger(count) || count < 1 || count > 9) {
    setStatus("Select a number from 1 to 9.");
    return;
  }

  state.pendingGuessCount = count;
  state.settingsLocked = true;
  state.swapMode = false;

  if (state.clueTurns[state.currentTeam] === 0) {
    setGuessCount(false);
    return;
  }

  els.bonusText.textContent = `${teamLabel(state.currentTeam)} adding an extra guess?`;
  render();
  els.yesBonusBtn.focus();
}

function setGuessCount(wantsBonus) {
  if (state.pendingGuessCount === null) return;

  const count = state.pendingGuessCount;
  const totalGuesses = wantsBonus ? count + 1 : count;
  state.clueLimit = totalGuesses;
  state.selectedGuessCount = totalGuesses <= 9 ? totalGuesses : null;
  state.bonusEnabled = wantsBonus;
  state.guessesThisTurn = 0;
  state.pendingGuessCount = null;
  state.clueTurns[state.currentTeam] += 1;
  setStatus(`${TEAM_LABELS[state.currentTeam]} should guess ${totalGuesses}${wantsBonus ? ` total (${count} plus one bonus)` : ""}.`);
  render();
}

function switchTurn(message) {
  if (state.gameOver || !state.currentTeam) return;
  state.currentTeam = state.currentTeam === "red" ? "blue" : "red";
  state.pendingGuessCount = null;
  state.selectedGuessCount = null;
  state.bonusEnabled = false;
  state.currentClueText = "";
  els.clueTextInput.value = "";
  els.clueTextInput.classList.remove("is-submitted");
  state.clueLimit = 0;
  state.guessesThisTurn = 0;
  setStatus(message || `${TEAM_LABELS[state.currentTeam]} team's turn.`);
  render();
}

function toggleSwapMode() {
  if (!state.cards.length || state.settingsLocked || state.gameOver) return;

  state.swapMode = !state.swapMode;
  setStatus(state.swapMode ? "Select board words to swap." : "Swap words off.");
  render();
}

function swapCardWord(cardId) {
  if (!state.swapMode || state.settingsLocked || state.gameOver) return;

  const card = state.cards.find((candidate) => candidate.id === cardId);
  if (!card) return;

  const currentWords = new Set(state.cards.map((candidate) => candidate.word.toLocaleLowerCase()));
  const replacements = state.words.filter((word) => !currentWords.has(word.toLocaleLowerCase()));
  if (!replacements.length) {
    setStatus("No unused words left in the database.");
    state.swapMode = false;
    render();
    return;
  }

  card.word = shuffle(replacements)[0];
  state.wordsSwapped = true;
  setStatus(`Swapped in "${card.word}".`);
  render();
}

function revealCard(cardId) {
  if (state.swapMode) {
    swapCardWord(cardId);
    return;
  }

  if (state.gameOver || state.clueLimit === 0 || state.pendingGuessCount !== null) return;

  const card = state.cards.find((candidate) => candidate.id === cardId);
  if (!card || card.revealed) return;

  card.revealed = true;
  card.revealedBy = state.currentTeam;
  state.lastRevealedCardId = card.id;
  state.guessesThisTurn += 1;

  if (card.role === "assassin") {
    const winner = state.currentTeam === "red" ? "blue" : "red";
    state.assassinLoserTeam = state.currentTeam;
    state.winnerTeam = winner;
    state.selectedAssassinCardId = card.id;
    state.assassinRevealVisible = true;
    state.assassinBlinking = false;
    state.gameOverReason = "assassin";
    state.gameOver = true;
    recordSessionWin(winner);
    setStatus(`${TEAM_LABELS[state.assassinLoserTeam]} selected the black word and ruined the fun for everyone! ${TEAM_LABELS[winner]} wins.`);
    window.setTimeout(() => {
      if (state.selectedAssassinCardId === card.id) {
        state.assassinRevealVisible = false;
        state.assassinBlinking = true;
        render();
      }
    }, 1600);
    window.setTimeout(() => {
      if (state.selectedAssassinCardId === card.id) {
        state.assassinRevealVisible = false;
        state.assassinBlinking = false;
        render();
      }
    }, 4120);
  } else if (remaining("red") === 0 || remaining("blue") === 0) {
    const winner = remaining("red") === 0 ? "red" : "blue";
    state.winnerTeam = winner;
    state.gameOverReason = "all-words";
    state.gameOver = true;
    recordSessionWin(winner);
    setStatus(`${TEAM_LABELS[winner]} team wins.`);
  } else if (card.role !== state.currentTeam) {
    const nextTeam = state.currentTeam === "red" ? "blue" : "red";
    switchTurn(`${TEAM_LABELS[state.currentTeam]} hit ${roleName(card.role)}. ${TEAM_LABELS[nextTeam]} is up.`);
    return;
  } else if (state.clueLimit > 0 && state.guessesThisTurn >= state.clueLimit) {
    const nextTeam = state.currentTeam === "red" ? "blue" : "red";
    switchTurn(`${TEAM_LABELS[state.currentTeam]} used all available guesses. ${TEAM_LABELS[nextTeam]} is up.`);
    return;
  } else {
    const guessesLeft = state.clueLimit > 0 ? state.clueLimit - state.guessesThisTurn : "set a clue to limit";
    setStatus(`Correct. ${TEAM_LABELS[state.currentTeam]} may keep guessing.`);
  }

  render();
}

function roleName(role) {
  if (role === "red") return "a red word";
  if (role === "blue") return isChristmasMode() ? "a green word" : "a blue word";
  if (role === "neutral") return "an innocent bystander";
  return "the assassin";
}

function wordScale(word) {
  const compactLength = word.replace(/\s+/g, "").length;
  if (compactLength >= 18) return 0.68;
  if (compactLength >= 14) return 0.8;
  if (compactLength >= 11) return 0.92;
  if (compactLength >= 9) return 0.98;
  return 1;
}

function render() {
  renderGameRoom();
  renderMode();
  renderGridSize();
  renderBoard();
  renderPanel();
  renderGameOverBanner();
  renderAssassinReveal();
  scheduleGameSave();
}

function renderGridSize() {
  els.board.style.setProperty("--grid-size", state.boardSize);
  els.boardSizeSelect.value = String(state.boardSize);
  els.assassinCountSelect.value = String(state.assassinCount);
}

function renderMode() {
  const enabled = document.body.classList.contains("christmas-mode");
  els.christmasModeBtn.classList.toggle("is-active", enabled);
  els.christmasModeBtn.setAttribute("aria-pressed", String(enabled));
  els.christmasModeBtn.textContent = enabled ? "Christmas mode on" : "Christmas mode off";
  els.appTitle.textContent = enabled ? "A Very Codenames Christmas" : "Pendy Codenames";
  els.assassinCountLabel.textContent = enabled ? "Naughty words" : "Black words";
  els.assassinCountSelect.setAttribute("aria-label", enabled ? "Naughty word count" : "Black word count");
  els.boardModeBtn.textContent = getBoardModeButtonText();
  document.title = els.appTitle.textContent;
  els.gameStatus.textContent = localizeText(state.statusText);
}

function getBoardModeButtonText() {
  if (isChristmasMode()) {
    return state.spymasterMode ? "Show Wish List mode" : "Show Santa mode";
  }

  return state.spymasterMode ? "Show guessing mode" : "Show spymaster mode";
}

function renderBoard() {
  els.board.innerHTML = "";

  if (!state.cards.length) {
    const empty = document.createElement("div");
    empty.className = "empty-board";
    empty.textContent = `${isChristmasMode() ? "Ho Ho Ho! " : ""}Start a game to deal ${state.boardSize * state.boardSize} cards.`;
    els.board.append(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  state.cards.forEach((card) => {
    const button = document.createElement("button");
    const isWinningWord = state.gameOver && card.role === state.winnerTeam;
    const isSelectedAssassin = state.assassinBlinking && card.id === state.selectedAssassinCardId;
    const isAssassinFinaleCard = state.assassinBlinking && state.gameOverReason === "assassin";
    const showRoleColor = card.revealed || state.gameOver || state.spymasterMode;
    const wasUnchosen = (state.gameOver || state.spymasterMode) && !card.revealed;
    const helpedOpponent = card.revealed
      && ["red", "blue"].includes(card.role)
      && card.revealedBy
      && card.revealedBy !== card.role;
    button.type = "button";
    button.className = [
      "word-card",
      showRoleColor ? `revealed ${card.role}` : "",
      wasUnchosen ? "unchosen" : "",
      state.swapMode ? "swap-selectable" : "",
      isAssassinFinaleCard ? "assassin-finale" : "",
      isSelectedAssassin ? "finale-assassin" : "",
      isAssassinFinaleCard && !isSelectedAssassin ? `finale-winner finale-${state.winnerTeam}` : "",
      card.id === state.lastRevealedCardId ? "just-revealed" : "",
      isWinningWord ? `winner-blink winner-${card.role}` : ""
    ].filter(Boolean).join(" ");
    const wordText = document.createElement("span");
    wordText.textContent = isAssassinFinaleCard && !isSelectedAssassin ? "" : card.word;
    button.append(wordText);

    if (helpedOpponent) {
      const thanks = document.createElement("span");
      thanks.className = "thanks-badge";
      thanks.textContent = `Thanks, ${teamLabel(card.revealedBy)}!`;
      button.append(thanks);
    }

    button.style.setProperty("--word-scale", wordScale(card.word));
    button.disabled = state.swapMode && !state.settingsLocked && !state.gameOver
      ? false
      : state.gameOver
        || card.revealed
        || state.clueLimit === 0
        || state.pendingGuessCount !== null;
    button.setAttribute("aria-label", `${card.word}${showRoleColor ? `, ${roleName(card.role)}` : ""}`);
    button.addEventListener("click", () => revealCard(card.id));
    fragment.append(button);
  });

  els.board.append(fragment);
}

function renderPanel() {
  const compactGuessingMode = Boolean(state.cards.length && state.settingsLocked && !state.spymasterMode && !state.gameOver);
  els.redRemaining.textContent = remaining("red");
  els.blueRemaining.textContent = remaining("blue");
  renderScoreCards();
  const showSubmittedClue = Boolean(state.currentClueText && state.clueLimit > 0);
  els.submittedClue.hidden = !showSubmittedClue;
  els.submittedClue.textContent = showSubmittedClue ? `Clue: ${state.currentClueText}` : "";
  els.gameLayout.classList.toggle("compact-guessing", compactGuessingMode);
  const firstTeam = compactGuessingMode ? state.currentTeam : state.startingTeam;
  els.redScoreCard.style.order = firstTeam === "blue" ? "2" : "1";
  els.blueScoreCard.style.order = firstTeam === "blue" ? "1" : "2";
  els.redScoreCard.classList.toggle("assassin-loser", state.assassinLoserTeam === "red");
  els.blueScoreCard.classList.toggle("assassin-loser", state.assassinLoserTeam === "blue");

  els.boardModeBtn.disabled = !state.cards.length;
  els.boardModeBtn.textContent = getBoardModeButtonText();
  els.swapWordsBtn.hidden = !state.cards.length || state.settingsLocked || state.gameOver;
  els.swapWordsBtn.classList.toggle("is-active", state.swapMode);
  els.swapWordsBtn.setAttribute("aria-pressed", String(state.swapMode));
  els.swapWordsBtn.textContent = state.swapMode ? "Swapping words" : "Swap words";
  els.sessionWarning.hidden = !state.sessionWarningVisible;
  els.newGameWarning.hidden = !state.newGameWarningVisible;
  els.setupCard.hidden = state.settingsLocked && !state.spymasterMode;
  els.clueCard.hidden = !state.spymasterMode;
  const clueNumberSelected = state.pendingGuessCount !== null || state.clueLimit > 0;
  els.clueTextInput.disabled = state.gameOver || !state.cards.length || clueNumberSelected;
  els.clueTextSubmit.disabled = els.clueTextInput.disabled;
  els.clueTextInput.classList.toggle("is-submitted", Boolean(state.currentClueText && els.clueTextInput.value.trim() === state.currentClueText));
  els.wordsCard.hidden = !state.spymasterMode;
  els.boardSizeSelect.disabled = state.settingsLocked;
  els.assassinCountSelect.disabled = state.settingsLocked;
  els.guessButtons.hidden = !state.spymasterMode || state.pendingGuessCount !== null;
  els.bonusChoice.hidden = !state.spymasterMode || state.pendingGuessCount === null;
  els.newWordsBtn.disabled = state.gameOver || !state.cards.length || state.settingsLocked;
  els.wordUpload.disabled = state.gameOver || state.settingsLocked;
  if (state.pendingGuessCount !== null) {
    els.bonusText.textContent = `${teamLabel(state.currentTeam)} adding an extra guess?`;
  }

  els.guessButtons.querySelectorAll("button").forEach((button) => {
    const count = Number(button.dataset.count);
    const selected = count === state.pendingGuessCount || count === state.selectedGuessCount;
    button.disabled = state.gameOver || !state.cards.length || !state.spymasterMode || state.pendingGuessCount !== null;
    button.classList.toggle("is-selected", selected);
  });
}

function renderScoreCards() {
  const labels = {
    red: "Red",
    blue: teamLabel("blue")
  };

  els.redScoreLabel.textContent = labelForScoreCard("red", labels.red);
  els.blueScoreLabel.textContent = labelForScoreCard("blue", labels.blue);
  els.redOverallWins.textContent = `Overall wins: ${state.sessionWins.red}`;
  els.blueOverallWins.textContent = `Overall wins: ${state.sessionWins.blue}`;
  els.redScoreCard.disabled = true;
  els.blueScoreCard.disabled = true;
  els.redScoreCard.classList.toggle("active-turn", state.currentTeam === "red" && !state.gameOver);
  els.blueScoreCard.classList.toggle("active-turn", state.currentTeam === "blue" && !state.gameOver);

  const guessesLeft = state.clueLimit > 0 ? Math.max(state.clueLimit - state.guessesThisTurn, 0) : null;
  updateGuessBadge(els.redGuessBadge, state.currentTeam === "red" && !state.gameOver, guessesLeft);
  updateGuessBadge(els.blueGuessBadge, state.currentTeam === "blue" && !state.gameOver, guessesLeft);
}

function labelForScoreCard(team, label) {
  if (!state.cards.length) return label;
  if (state.gameOver) return state.winnerTeam === team ? `${label} wins` : label;
  if (state.currentTeam === team) return `${label}'s turn`;
  return label;
}

function updateGuessBadge(badge, isActive, guessesLeft) {
  badge.hidden = !isActive;
  if (badge.hidden) return;
  badge.textContent = guessesLeft === null
    ? (isChristmasMode() ? "Santa's thinking" : "Spymaster's thinking")
    : `${guessesLeft} guess${guessesLeft === 1 ? "" : "es"} left`;
}

function recordSessionWin(winner) {
  if (state.gameWinRecorded || !winner) return;
  state.sessionWins[winner] += 1;
  state.gameWinRecorded = true;
}

function requestNewGame() {
  if (state.cards.length && (state.settingsLocked || state.wordsSwapped) && !state.gameOver) {
    state.newGameWarningVisible = true;
    state.sessionWarningVisible = false;
    state.swapMode = false;
    render();
    return;
  }

  newGame();
}

function confirmNewGame() {
  state.newGameWarningVisible = false;
  newGame();
}

function cancelNewGame() {
  state.newGameWarningVisible = false;
  render();
}

function newSession() {
  state.sessionWarningVisible = true;
  state.newGameWarningVisible = false;
  render();
}

function confirmNewSession() {
  state.sessionWins.red = 0;
  state.sessionWins.blue = 0;
  state.sessionWarningVisible = false;
  setStatus("New session started.");
  render();
}

function cancelNewSession() {
  state.sessionWarningVisible = false;
  render();
}

function renderGameOverBanner() {
  els.gameOverBanner.hidden = !state.gameOver;
  if (!state.gameOver) return;

  els.gameOverTitle.className = state.winnerTeam || "";
  els.gameOverTitle.textContent = `${teamLabel(state.winnerTeam)} wins`;
  if (state.gameOverReason === "assassin") {
    els.gameOverDetail.textContent = localizeText(`${TEAM_LABELS[state.assassinLoserTeam]} selected the black word and ruined the fun for everyone!`);
  } else {
    els.gameOverDetail.textContent = `${teamLabel(state.winnerTeam)} uncovered every team word.`;
  }
}

function renderAssassinReveal() {
  const selectedCard = state.cards.find((card) => card.id === state.selectedAssassinCardId);
  els.assassinReveal.hidden = !(state.assassinRevealVisible && selectedCard);
  els.assassinReveal.className = `assassin-reveal ${state.winnerTeam || ""}`.trim();
  els.assassinRevealWord.textContent = selectedCard ? selectedCard.word : "";
}

els.wordUpload.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    const words = parseWords(await file.text(), file.name.toLowerCase());
    const totalCards = state.boardSize * state.boardSize;
    if (words.length < totalCards) {
      setStatus(`"${file.name}" has ${words.length} unique words. Add at least ${totalCards} for this grid.`);
      return;
    }
    state.words = words;
    setStatus(`Loaded ${words.length} words from ${file.name}.`);
    newGame();
  } catch (error) {
    setStatus(`Could not read that word database: ${error.message}`);
  } finally {
    event.target.value = "";
  }
});

els.boardSizeSelect.addEventListener("change", (event) => {
  state.boardSize = Number(event.target.value);
  if (state.cards.length) {
    newGamePreservingMode();
  } else {
    setStatus(`Grid size set to ${state.boardSize}x${state.boardSize}.`);
    render();
  }
});

els.assassinCountSelect.addEventListener("change", (event) => {
  state.assassinCount = Number(event.target.value);
  if (state.cards.length) {
    newGamePreservingMode();
  } else {
    setStatus(`Black word count set to ${state.assassinCount}.`);
    render();
  }
});

els.christmasModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("christmas-mode");
  render();
});
els.newGameBtn.addEventListener("click", requestNewGame);
els.newSessionBtn.addEventListener("click", newSession);
els.confirmNewGameBtn.addEventListener("click", confirmNewGame);
els.cancelNewGameBtn.addEventListener("click", cancelNewGame);
els.confirmNewSessionBtn.addEventListener("click", confirmNewSession);
els.cancelNewSessionBtn.addEventListener("click", cancelNewSession);
els.newWordsBtn.addEventListener("click", newWords);
els.swapWordsBtn.addEventListener("click", toggleSwapMode);
els.clueTextForm.addEventListener("submit", submitClueText);
els.clueTextInput.addEventListener("input", () => {
  els.clueTextInput.classList.toggle("is-submitted", Boolean(state.currentClueText && els.clueTextInput.value.trim() === state.currentClueText));
});
els.guessButtons.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-count]");
  if (!button) return;
  askForBonus(Number(button.dataset.count));
});
els.noBonusBtn.addEventListener("click", () => setGuessCount(false));
els.yesBonusBtn.addEventListener("click", () => setGuessCount(true));
els.boardModeBtn.addEventListener("click", () => {
  state.spymasterMode = !state.spymasterMode;
  render();
});
els.joinRoomForm.addEventListener("submit", (event) => {
  event.preventDefault();
  switchGameRoom(els.gameRoomInput.value);
});
els.copyRoomLinkBtn.addEventListener("click", copyGameRoomLink);
els.newRoomBtn.addEventListener("click", () => switchGameRoom(generateGameRoomId()));

switchGameRoom(getInitialGameRoomId());
