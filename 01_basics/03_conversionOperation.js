// let score = "33abc";
// let score = null;
let score = true;

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score) //conversion

console.log(typeof(valueInNumber)) //number
console.log(valueInNumber) //NaN->string, 0->null, 1->boolean

let isLoggedIn = "Rohit";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //1->true, 0->false, ""->false, "Rohit"->true

let someNumber = 33;
let stringNum = String(someNumber)
console.log(stringNum) //33
console.log(typeof stringNum) //string