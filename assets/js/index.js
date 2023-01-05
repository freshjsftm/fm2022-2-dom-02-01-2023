"use strict";

const cardsContainer = document.getElementById("cardsContainer");

const actorCardsHTML = actors.map((actor) => createCard(actor));

function createCard(actor) {
  const cardHTML = document.createElement("li");
  cardHTML.classList.add("cardWrapper");

  const article = document.createElement("article");
  article.classList.add("cardContainer");

  const divWrapper = document.createElement("div");
  divWrapper.classList.add("cardPhotoWrapper");

  const divInintial = document.createElement("div");
  divInintial.classList.add("cardInitial");
  //написати функцію, яка повертає ініціали
  //і передати замість  actor.name[0]
  //і додати їм красиві стилі
  divInintial.append(document.createTextNode(actor.name[0]));

  const img = document.createElement("img");
  img.classList.add("cardPhoto");
  img.setAttribute("src", actor.photo);
  img.setAttribute("alt", actor.name);
  img.addEventListener("error", () => {
    img.remove();
  });

  const fullName = document.createElement("h2");
  fullName.classList.add("cardName");
  fullName.append(document.createTextNode(actor.name));

  const description = document.createElement("p");
  description.classList.add("cardBirthdate");
  description.append(document.createTextNode(actor.birthdate));

  divWrapper.append(divInintial, img);
  //divWrapper.append(img);
  article.append(divWrapper, fullName, description);
  cardHTML.append(article);
  return cardHTML;
}

cardsContainer.append(...actorCardsHTML);
