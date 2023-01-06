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
  img.setAttribute("hidden", true);
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

function createElement(tag='div', { classNames, listeners, attrs , styles}={}, children=[]) {
  const elem = document.createElement(tag);
  if (classNames) {
    elem.classList.add(...classNames);
  }
  if (listeners) {
    for (const [typeEvent, handler] of Object.entries(listeners)) {
      elem.addEventListener(typeEvent, handler);
    }
  }
  if (attrs) {
    for (const [typeAttr, valueAttr] of Object.entries(attrs)) {
      elem.setAttribute(typeAttr, valueAttr);
    }
  }
  if (styles) {
    for (const [nameStyle, valueStyle] of Object.entries(styles)) {
      elem.style[nameStyle] = valueStyle;
    }
  }
  elem.append(...children);
  return elem;
}





// const elem = createElement("img", {
//   classNames: ["cardPhoto", "test"],
//   listeners: { error: handlerImageError, load: handlerImageLoad },
//   attrs: { src: actor.photo, alt: actor.name, hidden: true },
// });
