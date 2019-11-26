console.log(`We're in!`);
/* ======================================================================
UI Elements
====================================================================== */
const startGameButton = document.querySelector('.btn__reset');
const startScreenOverlay = document.querySelector('.start');
console.log(startGameButton);
console.log(startScreenOverlay);

/* ======================================================================
Event Listeners
====================================================================== */
startGameButton.addEventListener('click', hideStartScreenOverlay);

/* ======================================================================
Controllers
====================================================================== */

/* ======================================================================
Logic
====================================================================== */
function hideStartScreenOverlay() {
  console.log(`Start Game button pressed!`);
  startScreenOverlay.style.display = 'none';
}