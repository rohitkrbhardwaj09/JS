const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //flash
//This is not a good syntax
//Instead using this, we should use
//concat method
console.log("-----------------------------------------------------");
const all_heors = marvel_heros.concat(dc_heros)
console.log(all_heors) //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros] 
console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 
/*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  ]*/


console.log((Array.isArray("Rohit"))); //false, because it is string value
console.log(Array.from("Rohit")); // [ 'R', 'o', 'h', 'i', 't' ]
console.log(Array.from({name: "Rohit"}));// [] // agr ye kisi vjh se array me convert ni kr paya to it wll return empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)) //[ 100, 200, 300 ]
