'use strict';

let button1 = document.querySelector("#firstButton");
let button2 = document.querySelector("#secondButton");
let button3 = document.querySelector("#thirdButton");
let button4 = document.querySelector("#fourthButton");
let pItemList = document.querySelectorAll('p');
let header1 = document.querySelector("#firstHeader");
let header2 = document.querySelector("#secondHeader");
console.log(button1);

//add event listener takes in two things
//the event that we are listening for
//the function that will happen once the event occurs
let pressButtonFucntion = () => {
    console.log("Button pressed from JS :)");
};

button1.addEventListener('click', () => {
    pItemList[1].style.border = '20px solid green';
});
button2.addEventListener('click', () => {
    document.getElementById("thirdHeader").textContent = "THE FITNESS GRAND PACER TEST IS A MULTISTAGE AROBIC CAPACITY TEST";
});


button3.addEventListener('click', () => {
    document.getElementById("p6").style.backgroundColor = "purple";
});

button4.addEventListener('click', () => {
    pItemList[3].style.fontSize = "xx-large";
})

pItemList[4].addEventListener('mouseover', () => {
    alert("OI NONE OF THAT");
})

//grab data from form

let textInput = document.querySelector("#textInput");
let button5 = document.querySelector("#printButton");

//add an event listener to the button to tell it to do something

button5.addEventListener('click', () => {
    var newH2 = document.createElement("h2");
    var textIn = document.createTextNode(textInput.value);
    newH2.appendChild(textIn);
    var currentLast = document.getElementById("#textInput");
    document.body.insertBefore(newH2, currentLast);
});

