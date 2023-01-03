"use strict";

function createCounter(start = 0){
  let count = start;
  //debugger
  return {
    increment(){
      //debugger
      return ++count;
    },
    decrement(){
      return --count;
    },
  }
}

const counter1 = createCounter();
// debugger
console.log(counter1.increment())
console.log(counter1.increment())
console.log(counter1.decrement())
console.log(counter1.increment())

const counter2 = createCounter(10);
console.log(counter2.decrement())
console.log(counter2.decrement())
console.log(counter2.decrement())
console.log(counter2.decrement())