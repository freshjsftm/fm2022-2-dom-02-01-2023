"use strict";

const rootForm = document.getElementById("root-form");
// console.log(rootForm)
// console.dir(rootForm)
// console.dir(rootForm.elements.textInput)

rootForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(rootForm.elements.textInput.value);
});
