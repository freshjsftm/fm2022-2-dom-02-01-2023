"use strict";

const template1 = /^\w{1,14}$/g;
const template2 = new RegExp('^\\w{1,14}$', "g");

//дз
//написати регулярний вираз, який буде валідувати  
//ім'я файлу картинки з розширенням png або webp

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
  if (template2.test(userInput)) {
    //validation
    userMessagesArray.push(userInput);
    // створити новий пункт і додати його до списку
    const li = createElement("li", {}, userInput);
    messagesList.append(li);

    target.reset();
  }
}
