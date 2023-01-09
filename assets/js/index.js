"use strict";

const rootForm = document.getElementById("root-form");
//const [, btnSubmit] = rootForm.elements;
//console.log(btnSubmit);
// console.dir(rootForm)
// console.dir(rootForm.elements.textInput)

// btnSubmit.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log('event.type:', event.type);
// });

rootForm.addEventListener("submit", handlerForm);

function handlerForm(event) {
  const {
    target: { textInput },
  } = event;
  event.preventDefault();
  console.log("value:", textInput.value);
}
