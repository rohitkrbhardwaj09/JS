# Projects related to DOM

## project link
[click here to view](https://stackblitz.com/edit/stackblitz-starters-nsjbzj?embed=1&file=index.html&view=preview)

# Solution code

## Project #1
#### HTML
```
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
```
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
#### Javascript
```
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

## Project #2
#### HTML
```
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
```
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

#### Javascript
```
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