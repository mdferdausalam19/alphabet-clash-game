function handleKeyboardKeyUpEvent(e) {
  const playerPressed = e.key;
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  if (playerPressed.toLowerCase() === currentAlphabet.toLowerCase()) {
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);

    removeBackgroundColorById(currentAlphabet.toLocaleLowerCase());
    continueGame();
  } else if (playerPressed === "Escape") {
    gameOver();
    removeBackgroundColorById(currentAlphabet.toLocaleLowerCase());
  } else {
    const lifeValue = getTextElementValueById("current-life");
    const updatedLifeValue = lifeValue - 1;
    setTextElementValueById("current-life", updatedLifeValue);
    if (updatedLifeValue === 0) {
      gameOver();
      removeBackgroundColorById(currentAlphabet.toLocaleLowerCase());
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  hideElementById("score");
  showElementById("playground");
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("playground");
  showElementById("score");
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("final-score", lastScore);
}
