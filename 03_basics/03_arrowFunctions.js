const user = {
    username: "Rohit",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "Rohit"
//     console.log(this.username);
// }

// chai()

// const chai = function() {
//     let username = "Rohit"
//     console.log(this.username);
// }


// const chai = () => {
//     let username = "Rohit"
//     console.log(this);
// }

// chai()

// ----------------------------------------------------------------------------------------------------
//basic arrow function or Explicit return
// const addTwo = (number1, number2) => {
//     return number1 + number2;
// }

// console.log(addTwo(3,4));

//implicit return
// const addTwo = (number1, number2) => (number1 + number2);

// console.log(addTwo(3,4));


//return object
const addTwo = (number1, number2) => ({username: "Rohit"})

console.log(addTwo(3,4));
