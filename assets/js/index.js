"use strict";

const userMessagesArray = [];
const messagesList = document.getElementById("messages");
const rootForm = document.getElementById("root-form");
rootForm.addEventListener("submit", handlerForm);

function handlerForm(event) {
  const {
    target,
    target: { textInput },
  } = event;
  event.preventDefault();
  const userInput = textInput.value.trim();
  if (userInput) {//validation 
    userMessagesArray.push(userInput);
    // створити новий пункт і додати його до списку
    const li = createElement('li',{}, userInput);
    messagesList.append(li);

    target.reset();
  }
}
