//This imports the Lodash library with the "_" variable
const _ = window._;

//This gets the canvas element with id "hangman"
const canvas = document.getElementById("hangman");

//It gets the 2D rendering context for the canvas
const ctx = canvas.getContext("2d");

// Gets the element with id "word"
const wordEl = document.getElementById("word");

// Gets the element with id "incorrect-guesses"
const incorrectGuessesEl = document.getElementById("incorrect-guesses");

// Gets the element with id "wstart-button"
const startButton = document.getElementById("start-button");

// An array of words for the game
const words = ["javascript", "python", "ruby", "java", "erlang", "go", "php", "swift", "scala", "kotlin"];

//It helps to randomly select a word from the worrds array
let word = words[Math.floor(Math.random() * words.length)];
let wordArray = word.split("");
let wordSoFar = _.map(wordArray, () => "_");
let incorrectGuesses = [];
let remainingGuesses = 6;

// This to add an event listener to the startButton element.
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

// This function updates the display of the word and incorrect guesses
const updateDisplay = () => {
  wordEl.innerHTML = wordSoFar.join(" ");
  incorrectGuessesEl.innerHTML = `Incorrect guesses: ${incorrectGuesses.join(", ")}`;
  canvas.width = 400;
  canvas.height = 400;
  drawHangman();
  checkForWin();
};

//This is a function to check if the player has won or lost the game.
const checkForWin = () => {
  if (!wordSoFar.includes("_")) {
    alert("You win!");
  } else if (remainingGuesses === 0) {
    alert(`You lose! The word was ${word}`);
  }
};

//this is the function to draw the hangman
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
