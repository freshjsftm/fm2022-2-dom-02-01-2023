"use strict";

function showMessage(msg = "1111") {
  console.log("hi!");
  console.log(msg);
}

const action = () => {
  showMessage("sdfsdfsdsfd");
};

//отримати кнопку
//const button = document.getElementsByTagName('button')[0];
//const [button] = document.getElementsByTagName("button");
const button = document.querySelector('button+button');
//натиснути на кнопку  і викликати функцію
button.addEventListener('click', ()=>showMessage('qwerty'));
// button.addEventListener("click", () => {
//   showMessage("sdfsdfsdsfd");
// });


const heading1 = document.getElementById('heading');

//const heading2 = document.querySelector('#heading');
const a = document.querySelector('a');