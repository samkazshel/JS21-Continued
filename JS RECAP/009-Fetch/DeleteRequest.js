'use strict';
let deleteField = document.querySelector("#deleteId");
let button = document.querySelector("#inputBtn");

let deleteData = () => {
    let deleteValue = deleteField.value;
    
    deleteRequest(deleteValue);

    return deleteValue;

}

let deleteRequest = (id) => {
    fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
        method: `DELETE`
    })
        .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.statusText}`);
                return;
            }
            response.json()
                .then((data) => {
                    console.log(data);
            })
        })
}

button.addEventListener('click', deleteData);