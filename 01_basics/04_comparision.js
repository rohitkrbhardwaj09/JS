console.log(2>1); //true
console.log(2>=1); //true
console.log(2<1); //false
console.log(2==1); //false
console.log(2!=1); //true

//Datatype of both the value must be same
console.log("2" < 1) //false
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/* 
The reason is that an equality check == and comparision > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
Thatswhy (3) null>=0 is true and null>0 is false.
*/

console.log(undefined == 0) //false
console.log(undefined < 0) //false
console.log(undefined > 0) //false

//strict check -> '==='
console.log("2"==2) //true -> 
console.log("2"===2); //false -> String === number
