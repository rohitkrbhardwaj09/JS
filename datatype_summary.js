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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack AND Heap Memory
//Stack (Primitive) , Heap (Non-Primitive)
/*
    Jab bhi stack memory use hoti hai, jo bhi humne variable declare kia hai uska hume ek copy milta hai
    and
    jab bhi ek memory ek heap ke andar define or declare hoti hai, vhan se hume original value ka reference milta hai
    yha reference se mtlb hai hum jo bhi changes krte hai wo original value me hi karte hai, original value hi change hoti hai
*/

let myName = "Rohit Kumar Bhardwaj"
let myAnotherName = myName
myAnotherName = "Rohit Bhardwaj"

console.log(myName);
console.log(myAnotherName)

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}
let user2 = user1

user2.email = "Rohit@gmail.com"

console.log(user1.email);
console.log(user2.email);