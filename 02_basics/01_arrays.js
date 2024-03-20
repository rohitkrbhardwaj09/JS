//arrays
// /Javascript arrays are resizable
// It can contain mix of different datatypes

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray[0]);

/*
#Shallow copy
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
(It means, same reference ko point krte h mtlb share krte h to jo bhi changes hum array me krenge wo original array me bhi changes honge).

#Deep Copy
A Deep copy of an object is a copy whose properties do not share the same references (Point to the same underlying values) as those of the source object from which the copy was made.
(In this, properties do not share the same reference)
*/

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr2[2]);

//Array methods
myArray.push(6);
myArray.push(7);
console.log(myArray); 

myArray.pop(); //removes last value from array
console.log(myArray);

myArray.unshift(9); //adds value at first index and shift rest all value to next index
console.log(myArray);

myArray.shift(); //Removes first indexed value
console.log(myArray);

console.log(myArray.includes(4)); //true
console.log(myArray.indexOf(4)); //4

const newArr = myArray.join()
console.log(myArray);
console.log(typeof myArray); //Object
console.log(newArr)
console.log(typeof newArr); //String

//slice and splice
const mna1 = myArray.slice(1, 3)
console.log(mna1);
console.log(myArray);

const mna2 = myArray.splice(1, 3)
console.log(mna2);
console.log(myArray); //splice remove array indexes