"use strict";

//HTTP requests are ways of requesting info from a database in the from of response and request
//CRUD Application
//Create - POST
//Read - GET
//Update - PUT
//Delete - DELETE

//We are going to be using FETCH to request and recieve responses from the server

//Basic use case for a get request

fetch('https://jsonplaceholder.typicode.com/comments') // 1
    .then((response) => {                              //2
        if (response.status !== 200) {                 //3
            console.error(`status: ${response.status}`);
            return;
        }
        response.json()                                   //4
            .then((data) => {
                console.log(data);                              //5
                console.log(data[1]);
                console.log(data[1].body);
            }).catch((error) => {
                console.error(`${error}`);                  //6
        })

    })
//1 - starting with fetch, use the method and give it a target
//2 - Once the fetch request has gone through, do the following with the response
//3 - If response status IS NOT 200, log out the error and return
//4 - Take the fetch response and convert it to a readable and usable format using json
//5 - Coverted our data to a usable format AND console logging it out
//6 - Will print our the error if there are any