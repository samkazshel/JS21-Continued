'use strict';
let addData = document.querySelector("#fetchChange");

let newData = (data) => {
    let newP = document.createElement('p');
    newP.textContent = data;
    addData.appendChild(newP);
}

fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => {
        if (response.status !== 200) {
            console.error(`status: ${response}`);
            return;
        }
        response.json()
            .then((data) => {
                let data1 = data[1].body;
                newData(data1);
            }).catch((error) => {
                console.error(`${error}`);
            })
    });

