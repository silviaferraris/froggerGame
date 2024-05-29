// Definizione delle costanti per le direzioni di movimento
const DIRECTION_UP = 0;
const DIRECTION_DOWN = 1;
const DIRECTION_LEFT = 2;
const DIRECTION_RIGHT = 3;

// Definizione delle costanti per i tipi di veicoli
const VEHICLE_CAR = 0;
const VEHICLE_TRUCK = 1;

// Definizione degli stati del gioco
const STATE_START = 0;
const STATE_PLAY = 1;

// Definizione delle costanti per il motivo di fine del gioco
const STOP_REASON_GAME_OVER = 0;
const STOP_REASON_WIN = 1;

// Creazione del contenitore principale e del debug grid
const container = document.createElement("div");
const debugGrid = document.createElement("div");

// Dimensioni del contenitore principale
const containerWidth = 800;
const containerHeight = 500;

// Variabile per abilitare/disabilitare il movimento della mosca
const flyCanMoves = true;

// Dimensione delle celle nel gioco
const cellsSize = 50;

// Variabili di stato del gioco
let gameState = STATE_START;
let score = 0;
let maxScore = 0;

// Stile del contenitore principale
container.style.position = "relative";
container.style.width = `${containerWidth}px`;
container.style.height = `${containerHeight}px`;
container.style.backgroundColor = "#32a852";
container.style.overflow = "hidden";
container.style.transform = "scale(2)";
container.style.transformOrigin = "top left";

// Aggiunta del contenitore al corpo del documento HTML
document.body.appendChild(container);

// Creazione del testo per il punteggio
const scoreText = document.createElement("span");
scoreText.style.position = "absolute";
scoreText.style.fontSize = "30px";
scoreText.style.fontFamily = "sans-serif";
scoreText.style.top = "10px";
scoreText.style.right = "10px";
scoreText.style.zIndex = 50;
scoreText.innerText = "0";
container.appendChild(scoreText);

// Schermata di inizio gioco
const startScreen = document.createElement("div");
startScreen.style.position = "absolute";
startScreen.style.width = "100%";
startScreen.style.height = "100%";
startScreen.style.zIndex = "100";
startScreen.style.backgroundColor = "white";
startScreen.style.transition = "opacity 200ms ease";

// Titolo del gioco
const title = document.createElement("h1");
title.innerText = "FROGGER GAME";
title.style.fontSize = "80px";
title.style.fontFamily = "cursive";
title.style.display = "block";
title.style.width = "100%";
title.style.textAlign = "center";
title.style.userSelect = "none";

// Sottotitolo per iniziare il gioco
const subtitle = document.createElement("h3");
subtitle.innerText = "Premi SPAZIO per iniziare";
subtitle.style.fontSize = "40px";
subtitle.style.fontFamily = "sans-serif";
subtitle.style.display = "block";
subtitle.style.width = "100%";
subtitle.style.textAlign = "center";
subtitle.style.userSelect = "none";

// Aggiunta del titolo e del sottotitolo alla schermata di inizio gioco
startScreen.appendChild(title);
startScreen.appendChild(subtitle);

// Aggiunta della schermata di inizio gioco al contenitore principale
container.appendChild(startScreen);

// Funzione per impostare il punteggio
function setScore(newScore) {
  score = newScore;
  // Aggiorna il massimo punteggio raggiunto
  if (score > maxScore) maxScore = score;
  // Aggiorna il testo del punteggio visualizzato
  scoreText.innerText = `${score}`;
}

