'use strict';

let result;
let num1;
let num2;
let num3;
let nameStr;

let add = (x, y) => {
    return `${x} + ${y} = ${x + y}`;
} 

let sub = (x, y) => {
    return `${x} - ${y} = ${x - y}`
}

let multiply = (x, y) => {
    return `${x} * ${y} = ${x * y}`;
}

let divide = (x, y) => {
    return `${x} / ${y} = ${x / y}`;
}

let oddOrEven = x => {
    if (x % 2 == 0) {
        return `${x} is even!`;
    } else {
        return `${x} is odd!`;
    }
}
 
let runMethod = method => {
    console.log("****************");
    console.log(method);
}

let maxNum = (x, y) => {
    if (x > y) {
        return `Largest is ${x}`
    } else if (x < y) {
        return `Largest is ${y}`
    }
}

let minNum = (x, y) => {
    if (x < y) {
        return `Smallest is ${x}`
    } else if (x > y) {
        return `Smallest is ${y}`
    } 
}

let roundNum = x => {
    return Math.round(x);
}

let randNum = (x, y) => {
    return Math.floor((Math.random() * y - x + 1) + x);
}
let startCalculator = () => console.log("starting up calculator now!")
    
let turnOffCalculator = name => console.log(`Goodbye ${name}`);

    startCalculator();
    num1 = 5;
    num2 = 12;
    num3 = 3.80;
    nameStr = "Reece";


    runMethod(add(num1, num2));
    runMethod(sub(num1, num2));
    runMethod(multiply(num1, num2));
    runMethod(divide(num1, num2));
    runMethod(oddOrEven(num1));
    runMethod(maxNum(num1, num2));
    runMethod(minNum(num1, num2));
    runMethod(roundNum(num3));
    runMethod(randNum(num1, num2));

    turnOffCalculator(nameStr);