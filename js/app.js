/* ======================================================================
UI Elements
====================================================================== */
const startGameButton = document.querySelector('.btn__reset');
const startScreenOverlay = document.querySelector('.start');
const phraseUL = document.querySelector('#phrase ul');
const keyboard = document.querySelector('#qwerty');

/* ======================================================================
Event Listeners
====================================================================== */
startGameButton.addEventListener('click', hideStartScreenOverlay);
keyboard.addEventListener('click', keyboardPress);

/* ======================================================================
Controllers
====================================================================== */


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
  checkLetter(e.target);
}

function checkLetter(clickedButton) {
  const letterFound = clickedButton.textContent;

  // Function loop checking if pressed key match any letter
  const letterSlots = document.querySelectorAll('.letter');
  letterSlots.forEach(charSlot => {
    const char = charSlot.textContent;
    if (char.toLowerCase() === letterFound) {
      charSlot.classList = 'letter show';
      return char;
    } else {
      return null;
    }
  });


  // If there's a match, add the class show to the letter slot
  // Return letter

  // If there's no match, return null
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);