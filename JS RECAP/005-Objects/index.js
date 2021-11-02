// let cat = {
//     name: "Zaph",
//     colour: "Ashy Black",
//     fluffy: true,
//     goodCatRating: 9,
//     chonky: true
// };

// console.log(cat);
// console.log(cat.colour);

// function getColour() {
//     return cat.colour;
// }

// console.log(getColour());

// let coffeeArray = [
//     latte = { espresso: "1", milk: "oat", sugars: 2, price: 3.99 },
//     cappucino = { espresso: "2", milk: "cow", sugars: 1, price: 4.99 },
//     mocha = { espresso: "1", milk: "cow-chocolote", sugars: 0, price: 3.50 }
// ]

// console.log(coffeeArray[2].milk);
// console.log(coffeeArray[1].espresso);

// let coffee = coffeeArray.pop();
// console.log(coffee);
// console.log(coffeeArray.sort());

// function makeCoffee(coffee, espresso, milk, sugars, price) {
//     let test1 = { coffeeName: coffee, espresso: espresso, milk: milk, sugars: sugars, price: price };
//     coffeeArray.push(test1);
//     return test1;
// }

// makeCoffee("pea latte", 4, "pea", 0, 7.99);
// makeCoffee("death drink", 8, "none", 0, 4.00);


let coffeeObject = {
    coffeeName: "latte",
    espresso: "1",
    milk: "Cow",
    sugars: "1"
};

coffeeJSON = { "coffeeName": "latte", "espresso": "1", "milk": "Cow", "sugars": "1" };

console.log("____________________________");
console.log(coffeeJSON.coffeeName);

let newCoffeeObject = JSON.parse('{ "coffeeName": "latte", "espresso": "1", "milk": "Cow", "sugars": "1" }');
console.log(newCoffeeObject);
console.log(typeof newCoffeeObject);


