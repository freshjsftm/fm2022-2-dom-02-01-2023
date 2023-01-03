"use strict";
let count = 123456789;

function wrapperCounter(start = 0) {
  let count = start;
  return function counter() {
    count++;
    return count;
  }
}

const counter1 = wrapperCounter();
console.log(counter1())

const counter2 = wrapperCounter(100);