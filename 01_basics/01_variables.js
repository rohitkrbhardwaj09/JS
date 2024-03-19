const accountId = 144553; //ab ise change ni kiya ja sakta
let accountEmail = "Rohit@gmail.com"; //

/*
    Prefer not to use "var" 
    because of issue in block scope and functional scope
*/
var accountPassword = "12345"; //Nowdays We don't use var, because it have scope issue

accountCity = "Jaipur"; //We can do this, but not recommonded to do

let accountState; 

// accountId = 2; //Not Allowed
// console.log(accountId); //This will throw an error

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Benguluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);