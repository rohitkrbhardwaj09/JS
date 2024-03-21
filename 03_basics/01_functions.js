function sayMyName() {
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");
}

//running function
sayMyName();
sayMyName();

function addTwoNumbers(number1, number2) {
    // console.log(Number(number1) + Number(number2));
    let result = Number(number1) + Number(number2);
    return result;
}

const result = addTwoNumbers("3", "4");
console.log("Result: ", result);

function loginUserMessage(username = "Sam") {

    if (!username) {
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage("Rohit"));


function calculateCartPrice(...num1) { //rest operator
    return num1;
}

console.log(calculateCartPrice(200, 300, 500));

const user = {
    username: "Rohit",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject(
    {
        username: "Sam",
        price: 399
    }
)


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));