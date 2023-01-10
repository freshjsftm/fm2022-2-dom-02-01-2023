"use strict";
const str = `
Yesterday all my troubles seemed so far away,
Now it looks as though they're here to stay.
Oh, I believe in yesterday.

Suddenly I'm not half the man I used to be,
There's a shadow hanging over me.
Oh, yesterday came suddenly.

Why she had to go, I don't know, she wouldn't say.
I said something wrong, now I long for yesterday.

Yesterday love was such an easy game to play.
Now I need a place to hide away.
Oh, I believe in yesterday.
`;
const template1 = /\b([a-z]+)'([a-z]+)\b/gi;
const newStr = str.replace(template1, '$1^$2');
//console.log(newStr)
const template2 = new RegExp('^\\w{1,14}$', "g");

// дз
// написати регулярний вираз, який буде валідувати  
// ім'я файлу картинки з розширенням png або webp

const userMessagesArray = [];
const messagesList = document.getElementById("messages");
const rootForm = document.getElementById("root-form");
const textInput = rootForm.textInput;
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
