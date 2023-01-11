"use strict";

const myPromise1 = new Promise(executor);

function executor(resolve, reject) {
  Math.random() > 0.5 ? resolve('ok') : reject('error');
}

myPromise1
.then((data)=>{console.log('resolve:', data)})
.catch((err)=>{console.log('reject:', err)})

//setTimeout(callback, 1000);

// function timeout(ms){
//   return new Promise((resolve, reject)=>{
//     setTimeout(reject, ms);
//   })
// }

// timeout(3000)
//   .then(()=>{console.log('resolve')})
//   .catch(()=>{console.log('error')})
//   .finally(()=>{console.log('finally')})