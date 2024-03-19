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

//*************************************OPERATIONS***********************************************************

let value = 3;
let negValue = -value;
console.log(negValue) //-3

let str1 = "Rohit"
let str2 = " Bhardwaj"
let str3 = str1+str2
console.log(str3); //Rohit Bhardwaj

console.log("1"+2) //12
console.log(1+"2"); //12
console.log("1"+"2"); //12
console.log("1"+2+3); //123
console.log(1+2+"3"); //33

console.log(+true) //1

console.log(+"") //0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101

let gameCounter2 = 200
++gameCounter2;
console.log(gameCounter2);

