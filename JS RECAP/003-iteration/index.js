'use strict';

//Iteration allows us to modify variables, add functionality over a set amount of time

//For Loops
for (let i = 0; i < 10; i++){
    console.log(i);
}
//Do While Loop
let newCounter = 20;
do {
    console.log("This will print once");
    console.log(newCounter);
} while (newCounter < 5);


//While
let counter = 3;
while (counter < 10) {
    console.log(`counter is currently less than ten, counter is at ${counter}`)
    counter++;
}
//For Each
//JS arrays can contain items of more than one data type
let colorList = ["Red", "Green", "Blue", "Yellow"];
for (let color of colorList) {
    console.log(color);
}