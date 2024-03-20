const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++
console.log(Math) //Object [Math] {}
console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5 (Jara bhi 4 se jyada hua to value will be 5)
console.log(Math.floor(4.6)); //4 (it will return the floor value)
console.log(Math.min(3,5,6,8)); //3
console.log(Math.max(3, 5, 2, 8)); //8

console.log("------------------");
console.log(Math.random()); //any random value (mostly in decimal) //0.2894246499552713
console.log(Math.random()*10); //5.695622190884095

//sometime it may return the 0 value, so in order to prevent
console.log((Math.random()*10) + 1); //random value min 1
console.log(Math.floor((Math.random()*10) + 1));

const min = 100;
const max = 200;

console.log(Math.floor((Math.random()) * (max - min + 1) + min));
