"use strict";

const text = document.getElementById("text");

const btn = document.getElementById("btn");

const idTimeout = setInterval(() => {
  console.log("subscribe!");
}, 1500);

btn.addEventListener("click", () => {
  clearInterval(idTimeout)
});

// console.log(1);
// setTimeout(()=>{
//   console.log(3);
// }, 0);
// console.log(2);


