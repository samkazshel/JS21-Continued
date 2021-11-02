'use strict';

function add(x, y) {
    return x + y;
}

console.log(add(6, 4));

//Generally in JS we use function expressions
//Stored as variables, meaning they can exist locally, and used whenever needed

const subFunc = function (x, y) {
    return x - y;
}

console.log(subFunc(10, 7));

let newString = `The sum 10 - 7 = ${subFunc(10, 7)}`;

console.log(newString);

//Arrow function are shorthand methods of writing functions, to improve legibility
//Arrow functions are used Everywhere so if you want to understand JS solutions/ libraries
// you need to know how this works

function standardHelloWorld(name) {
    return `Hello ${name}`;
}
console.log(standardHelloWorld("Sam"));

//turning the function into a function expression
let newFunctionExpression = function (name) {
    return `Hello ${name}`;
}

//remove the word function and use an arrow instead
let functionArrow = (name) => {
    return `Hello ${name}`;
}

//if your function only returns one line (such as this), remove the brackets and return directly after the arrow

let functionArrowOneLine = (name) => `Hello ${name}`;

//if only passing in one parameter you can ignore the brackets
let arrowFunctionShorter = name => `Hello ${name}`;

//if passing in no parameters must add brackets
let arrowFunctionSuperShort = () => `Hello Everyone`;

console.log(newFunctionExpression("Sam"));
console.log(functionArrow("Sam"));
console.log(functionArrowOneLine("Sam"));
console.log(arrowFunctionShorter("Alfie"));
console.log(arrowFunctionSuperShort());