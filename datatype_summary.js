/*
# Primitive (7 types)
    -String
    -Number
    -boolean
    -null
    -undefined
    -Symbol
    -object
    -bigInt

# Reference (Non Primitive) 
    -Arrays
    -Objects
    -Functions

# JavaScript is a dynamically typed language. This means that the type of a variable is not declared when the variable is created, and can change throughout the program.
    For example, the following code is valid JavaScript:
    var x = 5; // x is a number
    x = "hello"; // x is now a string

#   const id = Symbol('123')
    const anotherId = Symbol('123')
    console.log(id === anotherId); //false

#   const bigNumber = 9044086974743893934908n;

#   Arrays
    const heros = ["Shaktiman", "Naagraj", "Doga"];

#   Object
    let myObj = {
        name: "Rohit",
        age: 22,
    }

#   Functions
    const myfunction = function(){
        console.log("Hello World");
    }

# TypeOf Operator Results
undefined                                              : "undefined"
null                                                   : "object"
boolean                                                : "boolean"
number                                                 : "number"
String                                                 : "string"
Object (native and does not implement)                 : "object"
Object (native or host and does not implement)         : "function"
Object (host and does not implement)                   : implementation defined except may ot be "undefined", "boolean", "number", or "string"
function                                               : function (object function)

//reference
https://262.ecma-international.org/5.1/#sec-11.4.3
*/
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false

const bigNumber = 9044086974743893934908n;
console.log(typeof bigNumber);