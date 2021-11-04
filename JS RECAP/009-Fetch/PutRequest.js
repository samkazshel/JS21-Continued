'use strict';

//POST Request - creating the data and pushing it into a database
//POST requests we also need to pass data in a body of data
// Data we get back will likely be using the data we sent

// This is the object we are creating to post to the backend
let inputField = document.querySelector("#inputField");
let bodyField = document.querySelector("#bodyField");
let idField = document.querySelector("#idField");
let button = document.querySelector("#inputBtn");

let postData = () => {
    let inputValue = inputField.value;
    let bodyValue = bodyField.value;
    let idValue = idField.value;

    let newObject = {
        title: inputValue,
        body: bodyValue,
        userID: idValue
    };
    
    postFetch(newObject);

    return newObject;
}

// let newObject = {
//     title: 'New Object',
//     body: 'zip ziip zorp',
//     userID: 20
// }


let postFetch = (object) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-type": "application/JSON"
        },
        body: JSON.stringify(object) //we will be creating and passing in an object here

    })
    .then((response) => {
        if (response.status !== 201) {
            console.error(`Status: ${response.status}`);
            return;
        }
        response.json()
            .then((data) => {
                console.log(data);
                let outputDiv = document.querySelector("#output");
                let pTitle = document.createElement('p');
                let pBody = document.createElement('p');
                let pid = document.createElement('p');

                pTitle.textContent = data.title;
                pBody.textContent = data.body;
                pid.textContent = data.userID;
                outputDiv.appendChild(pTitle);
                outputDiv.appendChild(pBody);
                outputDiv.appendChild(pid);

            })
    })
}

button.addEventListener('click', postData);