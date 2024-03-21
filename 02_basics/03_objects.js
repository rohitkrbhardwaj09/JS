//singleton

//object literals
// Object.create --> using contructor and this is singleton method

const mySymbol = Symbol("key1")

const jsUser = {
    name : "Rohit",
    age : 18,
    [mySymbol] : "myKey1",
    location : "Jaipur",
    email : "rohit@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// ways of using objects
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySymbol]);

jsUser.email = "Rohit@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "RohitBhardwaj@gmail.com"
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greeting2 = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())
