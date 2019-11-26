/* ======================================================================
UI Elements
====================================================================== */
const startGameButton = document.querySelector('.btn__reset');
const startScreenOverlay = document.querySelector('.start');
const phraseUL = document.querySelector('#phrase ul');

/* ======================================================================
Event Listeners
====================================================================== */
startGameButton.addEventListener('click', hideStartScreenOverlay);

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
    console.log(li);

  })
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);