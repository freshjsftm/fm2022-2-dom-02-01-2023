'use strict';
// console.log("start");///s

// setTimeout(() => {  
//   console.log("setTimeout");//macro
// }, 0);

// const pr1 = new Promise((resolve, reject) => {
//   console.log("Promise start");///s
//   resolve();
//   //reject();
//   console.log("Promise end");///s
// });

// pr1
//   .then(() => {
//     console.log("resolve");//micro
//   })
//   .catch(() => {
//     console.log("reject");//micro
//   })
//   .finally(() => {
//     console.log("finally");//micro
//   });

// console.log("end");///s



function handlePromise(promise){
  return promise.then((data)=>{
    console.log('resolve data:', data);
  }).catch((err)=>{
    console.log('reject error:', err);
  })
}

const value = 45;

// const valuePromise = new Promise((resolve, reject)=>{
//   resolve(value)
// })

//const valuePromise = Promise.resolve(value);
const valuePromise = Promise.reject(value);

handlePromise(valuePromise);