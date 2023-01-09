"use strict";

const cardsContainer = document.getElementById("cardsContainer");

const actorCardsHTML = actors
  .filter((actor) => actor.name)
  .map((actor) => createCard(actor));
  
/**
 * 
 * @param {object} actor {name:string, photo:string, birthdate:string}
 * @returns {Node}
 */
function createCard(actor){
  return createElement('li',{classNames:['cardWrapper']},
          createElement('article',{classNames:['cardContainer']},
            createElement('div', {classNames:['cardPhotoWrapper']},
              createElement('div', {
                classNames:['cardInitial'], 
                styles:{'backgroundColor':stringToColour(actor.name)}
              },
                document.createTextNode(getInitial(actor.name) || "noname")
              ),
              createElement('img', {
                classNames:['cardPhoto'],
                listeners: { error: handlerImageError, load: handlerImageLoad },
                attrs: { src: actor.photo, alt: actor.name, hidden: true }
              })
            ),
            createElement('h2', {classNames:['cardName']}, 
              document.createTextNode(actor.name || 'noname')
            ),
            createElement('p', {classNames:['cardBirthdate']},
              document.createTextNode(actor.birthdate || 'not info')
            )
          )
        )
}  

cardsContainer.append(...actorCardsHTML);
