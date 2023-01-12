"use strict";

const list = document.getElementById("list");
list.addEventListener("click", handlerClick);

function handlerClick({target}){
  if(target===list) return;
  console.log(target.innerText)
  target.innerText += '!'
  target.style.color = 'teal';
}