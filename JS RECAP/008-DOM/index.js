'use strict';

let header1 = document.querySelector('#firstHeader');
let header2 = document.querySelector('#secondHeader');
let header3 = document.querySelector('#thirdHeader');
console.log(header1);
console.log(typeof header1);

header1.textContent = "new text wowowowo";
header2.textContent = "WOW MORE NEW TEXT";
header3.textContent = "THE FITNESS GRAND PACER TEST IS A MULTISTAGE AROBIC CAPACITY TEST";
document.getElementById("firstHeader").style.color = "blue";
document.getElementById("secondHeader").style.fontWeight = "bolder";
document.getElementById("thirdHeader").style.backgroundColor = "purple";

let listItemList = document.querySelectorAll('li');
console.log(listItemList);

for (let li of listItemList) {
    li.style.border = '5px solid purple';
};
document.getElementById("p1").style.fontFamily = "verdana";
document.getElementById("p2").style.fontFamily = "arial";
document.getElementById("p3").style.fontFamily = "serif";
document.getElementById("p4").style.fontFamily = "sans-serif";
document.getElementById("p5").style.fontFamily = "Impact";
document.getElementById("p6").style.fontFamily = "Charcoal";

let pItemList = document.querySelectorAll('p');

pItemList[1].style.border = '10px solid blue';
pItemList[4].style.border = '10px solid red';
pItemList[6].style.border = '10px solid green';

pItemList[2].style.color = "green";
pItemList[3].style.color = "red";
pItemList[6].style.color = "blue";

