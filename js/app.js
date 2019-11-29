/* ======================================================================
UI Elements
====================================================================== */
const overlay = document.querySelector('#overlay');
const title = document.querySelector('.title');
const startGameButton = document.querySelector('.btn__reset');
const startScreenOverlay = document.querySelector('.start');
const phraseUL = document.querySelector('#phrase ul');
const keyboard = document.querySelector('#qwerty');
const scoreboard = document.querySelector('#scoreboard ol');

/* ======================================================================
Event Listeners
====================================================================== */
startGameButton.addEventListener('click', hideStartScreenOverlay);
keyboard.addEventListener('click', keyboardPress);

/* ======================================================================
Controllers
====================================================================== */
let missed = 0;

/* ======================================================================
Data
====================================================================== */
const phrases = [
  'Change the world by being yourself',
  'Every moment is a fresh beginning',
  'Never regret anything that made you smile',
  'Aspire to inspire before we expire',
  'Everything you can imagine is real',
  'Simplicity is the ultimate sophistication',
  'Tough times never last but tough people do',
  'Have enough courage to start and enough heart to finish',
  'Determine your priorities and focus on them',
  'Never let your emotions overpower your intelligence'
]

/* ======================================================================
Logic
====================================================================== */
function hideStartScreenOverlay() {
  startScreenOverlay.style.display = 'none';
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
}

function getRandomPhraseAsArray(arr) {
  // Randomly choose phrase from the array
  const arrayIndex = Math.floor(Math.random() * (arr.length));
  const randomPhrase = arr[arrayIndex]
  const arrayOfCharacters = randomPhrase.split('');
  return arrayOfCharacters;
}

function addPhraseToDisplay(arr) {
  arr.forEach(char => {
    const li = document.createElement('li');
    li.textContent = char;
    phraseUL.appendChild(li);
    if (char !== ' ') {
      li.classList = 'letter';
    }
  });
}

function keyboardPress(e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.classList = 'chosen';
    e.target.disabled = true;
  }
  const letterFound = checkLetter(e.target);
  if (letterFound === null) {
    missed += 1;
    console.log(missed);
    if (missed <= 5) {
      scoreboard.removeChild(scoreboard.children[0]);
    }
  }
  checkWin();
}

function checkLetter(clickedButton) {
  const clickedLetter = clickedButton.textContent;
  const letterSlots = document.querySelectorAll('.letter');
  let matchFound = 0;
  letterSlots.forEach(charSlot => {
    const char = charSlot.textContent;
    if (char.toLowerCase() === clickedLetter) {
      charSlot.classList = 'letter show';
      matchFound += 1;
    }
  });
  if (matchFound > 0) {
    return clickedLetter;
  } else if (matchFound < 1) {
    return null
  }
}

function processWin() {
  overlay.style.display = 'flex';
  overlay.classList = 'win';
  title.textContent = `You win!`;
  startGameButton.textContent = 'Play Again!';
  const winButton = document.querySelector('.win .btn__reset');
  winButton.addEventListener('click', () => location.reload());
}

function processLose() {
  overlay.style.display = 'flex';
  overlay.classList = 'lose';
  title.textContent = `You lose...`;
  startGameButton.textContent = 'Play Again!';
  const loseButton = document.querySelector('.lose .btn__reset');
  loseButton.addEventListener('click', () => location.reload());
}

function checkWin() {
  const allLetters = document.querySelectorAll('.letter');
  const guessedLetters = document.querySelectorAll('.show');
  const numberOfAllLetters = allLetters.length;
  const numberOfGuessedLetters = guessedLetters.length;
  if (numberOfAllLetters === numberOfGuessedLetters) {
    processWin();
  } else if (missed > 5) {
    processLose();
  }
}