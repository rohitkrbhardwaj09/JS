//Dates
let myDate = new Date();
console.log(myDate); //2024-03-20T04:04:41.507Z
console.log(myDate.toString()); //Wed Mar 20 2024 04:04:41 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); //Wed Mar 20 2024
console.log(myDate.toISOString()); //2024-03-20T04:04:41.507Z
console.log(typeof myDate); //object

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2024, 0, 23, 5, 3)
console.log(myCreatedDate.toLocaleString());

let myCreatedDate3 = new Date("2024-01-23")
console.log(myCreatedDate.toLocaleString());

//timestamps
let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds()); 