# Projects related to DOM

## project link
[click here to view](https://jsprojects-1vck--8080--d0228c83.local-credentialless.webcontainer.io/)

# Solution code

## project 1
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

