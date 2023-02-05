const _ = window._;
const canvas = document.getElementById("hangman");
const ctx = canvas.getContext("2d");
const wordEl = document.getElementById("word");
const incorrectGuessesEl = document.getElementById("incorrect-guesses");
const startButton = document.getElementById("start-button");

let word = "javascript";
let wordArray = word.split("");
let wordSoFar = _.map(wordArray, () => "_");
let incorrectGuesses = [];
let remainingGuesses = 6;

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  document.addEventListener("keydown", event => {
    if (event.key.length === 1) {
      let letter = event.key;
      if (!wordArray.includes(letter)) {
        if (!incorrectGuesses.includes(letter)) {
          incorrectGuesses.push(letter);
          remainingGuesses--;
        }
      } else {
        for (let i = 0; i < wordArray.length; i++) {
          if (wordArray[i] === letter) {
            wordSoFar[i] = letter;
          }
        }
      }
      updateDisplay();
    }
  });
  updateDisplay();
});

const updateDisplay = () => {
  wordEl.innerHTML = wordSoFar.join(" ");
  incorrectGuessesEl.innerHTML = `Incorrect guesses: ${incorrectGuesses.join(", ")}`;
  canvas.width = 400;
  canvas.height = 400;
  drawHangman();
  checkForWin();
};

const checkForWin = () => {
  if (!wordSoFar.includes("_")) {
    alert("You win!");
  } else if (remainingGuesses === 0) {
    alert(`You lose! The word was ${word}`);
  }
};

const drawHangman = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  switch (remainingGuesses) {
    case 5:
      drawHead();
      break;
    case 4:
      drawHead();
      drawBody();
      break;
    case 3:
      drawHead();
      drawBody();
      drawArm1();
      break;
    case 2:
      drawHead();
      drawBody();
      drawArm1();
      drawArm2();
      break;
      case 1:
      drawHead();
      drawBody();
      drawArm1();
      drawArm2();
      drawLeg1();
      break;
      case 0:
      drawHead();
      drawBody();
      drawArm1();
      drawArm2();
      drawLeg1();
      drawLeg2();
      break;
      }
      };
      
      const drawHead = () => {
      ctx.beginPath();
      ctx.arc(250, 100, 50, 0, 2 * Math.PI);
      ctx.stroke();
      };
      
      const drawBody = () => {
      ctx.beginPath();
      ctx.moveTo(250, 150);
      ctx.lineTo(250, 300);
      ctx.stroke();
      };
      
      const drawArm1 = () => {
      ctx.beginPath();
      ctx.moveTo(250, 175);
      ctx.lineTo(325, 225);
      ctx.stroke();
      };
      
      const drawArm2 = () => {
      ctx.beginPath();
      ctx.moveTo(250, 175);
      ctx.lineTo(175, 225);
      ctx.stroke();
      };
      
      const drawLeg1 = () => {
      ctx.beginPath();
      ctx.moveTo(250, 300);
      ctx.lineTo(325, 375);
      ctx.stroke();
      };
      
      const drawLeg2 = () => {
      ctx.beginPath();
      ctx.moveTo(250, 300);
      ctx.lineTo(175, 375);
      ctx.stroke();
      };