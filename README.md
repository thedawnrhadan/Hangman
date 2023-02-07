# Overview

The purpose of this project was to demonstrate the use of JavaScript and improve my skills as an engineer, and to create an interactive hangman game for users to play and enjoy. It also helps to develop a deeper understanding of web development concepts such as event handling, canvas rendering, and using libraries like Lodash.

In short, this is the Hangman game. The game randomly selects a word from a predefined list of words and displays it as underscores, representing unguessed letters. The player can guess a letter by typing on the keyboard, and the game updates the word display and the hangman if the guess is incorrect. The game ends when the player has guessed all the letters of the word or made 6 incorrect guesses, at which point an alert will appear announcing the outcome of the game.

[Software Demo Video](https://youtu.be/UozW5uJe9F4)

# Development Environment
- Lodash Library: Lodash is a JavaScript library that provides utility functions for common programming tasks. In this code, the Lodash library is imported with the "_" variable and used to map an array of underscores to the length of the randomly selected word, representing the state of the word so far.
- HTML Canvas: Canvas is a HTML element used to draw graphics on the web pages via scripting. In this code, the canvas element is retrieved from the HTML document with the ID "hangman", and its 2D rendering context is obtained with the "getContext" method. The canvas is used to draw the hangman as the game progresses.
- HTML Elements: HTML elements are used to display the game information such as the word to guess, incorrect guesses, and the start button. In this code, several HTML elements are retrieved from the HTML document with the ID "word", "incorrect-guesses", and "start-button". These elements are updated with the information about the game state.
- JavaScript

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [freeCodeCamp.org](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [W3schools](https://www.w3schools.com/js/)

# Future Work

- User interface and experience
- Speed performance
- Security vulnerabilities
