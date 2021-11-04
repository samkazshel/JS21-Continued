'use strict';
let addData = document.querySelector("#fetchChange");
let addHeader = document.querySelector("#cardHolder")

let newData = (data) => {
    let newP = document.createElement('p');
    newP.textContent = data;
    addData.appendChild(newP);
}


fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/1')
    .then((response) => {
        if (response.status !== 200) {
            console.error(`status: ${response}`);
            return;
        }
        response.json()
            .then((data) => {
                let data1 = data.department;
                let data2 = data.objectURL;
                let data3 = data.artistWikidata_url;
                let newCard = document.createElement('div');
                let newIMG = document.createElement('img');
                let newCardBody = document.createElement('div');
                let newTitle = document.createElement('h5');
                let newText = document.createElement('p');
                let newHyperLink = document.createElement('a');
                console.log(data2);
                console.log(data3);

                newCard.classList = "card";
                newCard.style = "width: 18rem";
                newIMG.src = data2;
                newIMG.classList = "card-img-top";
                newIMG.alt = "This is an image of an art piece";
                newCardBody.classList = "card-body";
                newTitle.classList = "card-title";
                newText.classList = "card-text";
                newHyperLink.classList = "btn btn-primary";
                newHyperLink.href = data2;

                newTitle.textContent = "Image From API"
                newText.textContent = data1;
                newHyperLink.textContent =  "go to image";

                //append everything
                newCardBody.appendChild(newTitle);
                newCardBody.appendChild(newText);
                newCardBody.appendChild(newHyperLink);

                newCard.appendChild(newCardBody);
                addHeader.appendChild(newCard);
            }).catch((error) => {
                console.error(`${error}`);
            })
    });
