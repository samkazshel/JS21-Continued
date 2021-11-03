'use strict';

let promise = new Promise((resolve, reject) => {
    let a = 5;
    if (a % 2 == 0) {
        resolve("That is a even");
    } else {
        reject("That is odd");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message); 
}).then(() => {
    console.log("This function is looking for whether the number is even or odd")
})