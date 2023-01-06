"use strict";

const cardsContainer = document.getElementById("cardsContainer");

const actorCardsHTML = actors
  .filter((actor) => actor.name)
  .map((actor) => createCard(actor));

function createCard(actor) {
  const cardHTML = document.createElement("li");
  cardHTML.classList.add("cardWrapper");

  const article = document.createElement("article");
  article.classList.add("cardContainer");

  const divWrapper = document.createElement("div");
  divWrapper.classList.add("cardPhotoWrapper");

  const divInintial = document.createElement("div");
  divInintial.classList.add("cardInitial");
  divInintial.append(
    document.createTextNode(getInitial(actor.name) || "noname")
  );
  console.log(stringToColour(actor.name));
  divInintial.style.backgroundColor = stringToColour(actor.name);

  const img = document.createElement("img");
  img.hidden = true;
  img.classList.add("cardPhoto");
  img.setAttribute("src", actor.photo);
  img.setAttribute("alt", actor.name);
  img.addEventListener("error", handlerImageError);
  img.addEventListener("load", handlerImageLoad);

  const fullName = document.createElement("h2");
  fullName.classList.add("cardName");
  fullName.append(document.createTextNode(actor.name || "noname"));

  const description = document.createElement("p");
  description.classList.add("cardBirthdate");
  description.append(document.createTextNode(actor.birthdate || "not info"));

  divWrapper.append(divInintial, img);
  article.append(divWrapper, fullName, description);
  cardHTML.append(article);
  return cardHTML;
}

cardsContainer.append(...actorCardsHTML);

function handlerImageError({ target }) {
  target.remove();
}
function handlerImageLoad({ target }) {
  target.hidden = false;
}
