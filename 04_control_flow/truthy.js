const userEmail = "rohit@gmail.com"

if(userEmail){
    console.log("Got the email");
}else{
    console.log("Don't have username");
}

//truthy vs falsy value

//truthy value -> '0', "false", 'false', " ", [], {}, function() {}
//falsy value -> false, 0, -0, BigInt 0n, "", null, undefined, NaN

usersEmail = []

if(usersEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined
//This is use when, somewhere returning null or undefined but we dont want it and want to proceed further, then we use this
let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10 //10
val1 = undefined ?? 20 //20

console.log(val1);


//Ternary Operator
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Price is less than 80") : console.log("Price is more than 80");