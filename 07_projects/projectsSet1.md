# Projects related to DOM

## project link
[click here to view](https://stackblitz.com/edit/stackblitz-starters-nsjbzj?embed=1&file=index.html&view=preview)

# Solution code

## Project #1 - Background Changer
#### HTML
```html
 <div class="canvas">
      <h1>Color Scheme Switcher</h1>
      <span class="button" id="grey"></span>
      <span class="button" id="white"></span>
      <span class="button" id="blue"></span>
      <span class="button" id="yellow"></span>
      <span class="button" id="purple"></span>
      <h2>
        Try clicking on one of the colors above
        <span>to change the background color of this page</span>
      </h2>
  </div>
```
#### CSS
```css
.canvas {
  display: block;
  text-align: center;
}
.button {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 80px;
  height: 80px;
}
#grey {
  background-color: grey;
}
#white {
  background-color: white;
}
#blue {
  background-color: blue;
}
#yellow {
  background-color: yellow;
}
#purple {
  background-color: purple;
}
```
#### JavaScript
```javascript
    const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## Project #2 - BMI Calculator
#### HTML
```html
<div class="container">
      <h1>BMI Calculator</h1>

      <form action="">
        <p>
          <label for="height">Height in CM:</label>
          <input type="text" id="height" />
        </p>
        <p>
          <label for="height">Weight in CM:</label>
          <input type="text" id="weight" />
        </p>
        <button>Calculate</button>

        <div id="results"></div>
        <div id="weight-guide">
          <h3>BMI Weight Guide</h3>
          <p>Under Weight = Less than 18.6</p>
          <p>Normal Range = 18.6 and 24.9</p>
          <p>Overweight = Greater than 24.9</p>
        </div>
      </form>
    </div>
```

#### CSS
```css
.container {
  margin: 15px;
}
.container p {
  padding: 8px;
}
.container button {
  margin: 12px 160px;
  padding: 6px 10px;
  background-color: chocolate;
  border: none;
  border-radius: 3px;
  font-weight: bold;
}
#weight-guide {
  background-color: #d4d4d4;
  padding: 10px 50px;
}
#results {
  padding: 10px;
  font-weight: bold;
}
```

#### JavaScript
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);

    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} - You are under weight.</span> `;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>${bmi} - You are having normal weight.</span> `;
    } else {
      results.innerHTML = `<span>${bmi} - You are over weight.</span> `;
    }
  }
});
```


## Project #3 - Digital Clock

### Solution Code 

#### HTML
```html
 <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
```

#### CSS
```css

```.center {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 180px;
}
#clock {
  padding: 8px;
  background-color: brown;
  color: white;
  height: 38px;
  width: 90px;
  border-radius: 6px;
  margin-top: 10px;
  font-size: 14px;
  border: 2px solid transparent;
}
#clock:hover {
  border: 2px solid tomato;
}
```

#### JavaScript
```javascript
const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project #4 - Guess the Number

### Solution Code

#### html
```html
   <div class="wrapper">
      <h2>Number guessing game</h2>

      <p>Try and guess a random number between 1 and 100.</p>
      <p>You have 10 attempts to guess the right answer.</p>

      <div class="form-body">
        <form action="">
          <label for="guessField" id="guess">Guess a number</label> <br />
          <input type="text" id="guessField" class="guessField" /> <br />
          <input
            type="submit"
            id="guessSbmt"
            class="guessSbmt"
            value="Submit guess"
          />
        </form>
      </div>

      <div class="resultPara">
        <p>Previous Guesses: <span class="guesses"></span></p>
        <p>Guesses Remaining: <span class="lastResult">10</span></p>
      </div>
      <p class="lowOrHigh"></p>
    </div>
```

#### CSS
```CSS

.wrapper {
  margin-top: 50px;
}

.wrapper h2 {
  padding: 15px;
}
.wrapper p {
  padding: 6px;
}

.form-body {
  display: flex;
  justify-content: center;
  align-items: center;
}
#guess {
  font-size: 20px;
}
#guessField {
  border: 4px solid transparent;
  padding: 5px;
  margin: 10px;
}
#guessField:hover {
  border-bottom: 4px solid rgb(194, 135, 248);
}
```

#### JavaScript 
```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#guessSbmt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultPara');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //it will validate, entered value is b/w 1 or 100
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //it will tell, if your value is matched, low or high
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  //it will display the msg
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //
  lowOrHigh.innerHTML = `<h3>${message}</h3>`;
}

function newGame() {
  //
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  //
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
```