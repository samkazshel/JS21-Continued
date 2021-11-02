'use strict';

// alert("hello world");

//let num = 1;
//let bool = true;
//let string = "1";

// Conditionals are used to check if something is true (num > 10) 
// and do something with this information

//console.log(bool == true);
//console.log(bool == num); will print true because 1 = true & 0 = false

//console.log(string == bool);

//Truthy + Falsey
//Within JavaScript every value is either truthy or falsey
//Generally truthy means, has some value, most values are truthy
//Falset - generally has no value

// let fBool = false;
// let fNum = 0;
// let fStr = "";
// let fUndef = undefined;
// let fNull = null;
// let fNaN = NaN;

// console.log(typeof fNaN);

//Truthy values
// let truthy1 = '0';
// let truthy2 = 'false';

// console.log(`Should be true ${fNum == truthy2}`);

//if statement
// let age = 22;

// if (age > 40) {
//     console.log("you're old");
// } else {
//     console.log("You're under 40, no midlife crisis yet");
// }

//Ternary Statements
//([condition] ? value1 : value 2)
// let ageString = (age > 40 ? "You might have a crisis soon.." : "No Crisis .... yet");
// console.log(ageString);

// let strictA = true;
// let strictB = 1;

// console.log(strictA == strictB);
// console.log(strictA === strictB);

// console.log(strictA != strictB);
// console.log(strictA !== strictB);

let age =53;

if (age > 18 && age < 65) {
    console.log("alive");
} else if (age < 18) {
    console.log("no");
}else {
    console.log("Oh this guy dead");
}

let ageS = (age > 50 ? "this guy old as shit" : "you aight");
console.log(ageS);