const name = "Rohit"
const repoCount = 50;

//Outdated way to write
console.log(name + repoCount + "Value")

//New way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String interpolation or string literals

const gameName = new String("Ludo-King")
console.log(gameName[2]); //d
console.log(gameName.__proto__); //{}
console.log(gameName.length); //8
console.log(gameName.toUpperCase()); //LUDOKING
console.log(gameName.charAt(2)); //d

const newString = gameName.substring(0, 4);
console.log(newString); //Ludo -> 

const anotherString = gameName.slice(2, 6)
console.log(anotherString) //do-K

const newStringOne = "   Rohit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com"
console.log(url.replace('google', 'www.google')); //https://www.google.com

console.log(url.includes('google')); //true

console.log(gameName.split('-')); //[ 'Ludo', 'King' ]