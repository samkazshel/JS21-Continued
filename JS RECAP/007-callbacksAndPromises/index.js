'use strict';

//promises and callbacks
//Promises are used for when some data will EVENTUALLY be avaliable.
//Javascript is an event driven language, it follows a single function path and completes when it is finished
//Javascript can do multiple things at the same time, if we use a promise to say "some data will be here eventually"
//We can do other stuff while its waiting

//Promises come in 3 states
//Resolved - Finished and is successful
//Pending - Waiting for data
//Rejected - Incorrect or no data 

//creating a promise called promise, it takes in two parameters (resolve and reject)
//What we're doing here those parameters comes after the arrow
let promise = new Promise((resolve, reject) => {

    let string = "pass";
    if (string === "pass") {
        //What happens if the promise if successful
        // if successful run the resolve function and pass in "Successful"
        resolve("Successful");
    } else {
        reject("Failed");
    }
});

// .then() - if function has completed, what should happen next
//.then( our arrow function)
promise.then((message) => {
    console.log(`Running after message, the message is ${message}`);
//.catch() - if function has failed, what should happen next
}).catch((message) => {
    console.log(`Running after the promise, the message is ${message}`);

}).then(() => {
    console.log("This is the end of the promise and will always run")
});


