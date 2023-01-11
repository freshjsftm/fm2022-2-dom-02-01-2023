"use strict";
//const promise = fetch("ht://");
// const promise = fetch("./assets/js/data.json");
// console.log(promise);

// const jsonPromise = promise.then((response)=>{
//   return response.json();
// })

// jsonPromise.then((data)=>{
//   console.table(data);
// })


// promise.then(
//   //fullfild
//   (response) => {
//     // console.log("OK");
//     // console.log('data here=>',response)
//     const jsonPromise = response.json();
//     jsonPromise.then(
//       (data) => {
//         console.table(data);
//       },
//       () => {
//         console.log("error data");
//       }
//     );
//   },
//   //rejected
//   () => {
//     console.log("error");
//   }
// );


fetch("./assets/js/data.json")
  .then((response) => response.json())
  .then((data) => {
    console.table(data);
    //виведіть імена юзерів
    data.forEach((user)=>{console.log(user.firstName)})
  })
  .catch((error)=>{console.log(error)})
  .finally(()=>{console.log('finally')})

