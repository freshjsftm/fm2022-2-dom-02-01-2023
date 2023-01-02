"use strict";

function showMessage(msg = "1111") {
  console.log(msg);
}

//tag
const lisTag = document.getElementsByTagName('li')

//class
const lisClass = document.getElementsByClassName('item')

//all li
const lisAll = document.querySelectorAll('.item');
const ps = document.querySelectorAll('article>p');