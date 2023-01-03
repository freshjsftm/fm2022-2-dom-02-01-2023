"use strict";

/*
const adder = createAdder(100);
adder(14)  //114
adder(10)  //124
adder(100) //224

const adder2 = createAdder(0);
adder2(14)  //14
adder2(10)  //24
adder2(100) //124
*/

/*
 написати функцію, яка повертає функцію
 перша функція приймає в якості аргуманта стартове значення
 друга функція приймає в якості аргумента число, яке буде додаватися до накопичувальної суми
 друга функція повертає накопичувальну суму
*/

//hight order function
// function createAdder(start=0){
//   let result = start; //closure
//   return function (number){
//     result += number;
//     return result;
//   }
// }

// function createAdder(start=0){
//   return function (number){   
//     return start += number;
//   }
// }

const createAdder = (start=0) => (number) => start += number;

const adder = createAdder(100);
adder(14)  //114
adder(10)  //124
adder(100) //224