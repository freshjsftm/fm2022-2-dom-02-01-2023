"use strict";

const userMessagesArray = [];

const rootForm = document.getElementById("root-form");
rootForm.addEventListener("submit", handlerForm);

function handlerForm(event) {
  const {
    target,
    target: { textInput },
  } = event;
  event.preventDefault();
  console.log("value:", textInput.value);
  console.log(target);
  const userInput = textInput.value.trim();
  //додавати введене значення до масиву userMessagesArray
  if (userInput) {
    userMessagesArray.push(userInput);
    //очищати форму після додавання
    target.reset();
  }
  console.log(userMessagesArray);
}
