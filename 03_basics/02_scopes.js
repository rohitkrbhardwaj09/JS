// let a = 10;
// const b = 20;
// var c = 30;
// var c = 300 //global scope
let a = 300

if (true) {
    let a = 10; //block scope
    const b = 20; //block scope
    console.log("Inner: ",a);
}

console.log("Outer: ", a);
// console.log(b);

function one(){
    const username = "Rohit";

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    two()
}

one();

if(true) {
    const username = "Rohit"
    if(username === "Rohit"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//-------------------------------------------Interesting-------------------------------------------------
console.log(addOne(5));
function addOne(num){
    return num + 1;
}


// addTwo(5)
const addTwo = function(num){
    return num+2;
}

