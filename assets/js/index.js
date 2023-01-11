"use strict";

const user = {
  id: 1,
  firsName: "Brad",
  lastName: "Pitt",
  age: 59,
  getFullName() {
    return `${this.firsName} ${this.lastName}`;
  },
  children:['Max', 'Marry'],
  isAdult: true,
  hasPet: undefined,
  isUkraine: null,
  [Symbol('symbol')]:'symbol',
  birthdate:{
    day:18,
    month:12,
    year:1963,
  },
};
console.log(user);
const serializeUser = JSON.stringify(user);
console.log(serializeUser);


const deserializeUser = JSON.parse(serializeUser);
console.log(deserializeUser);