"use strict";

//debugger
let value = 10; //global

if(true){
  let value = 30; //block
}
function log() {
  console.log("function log:", value);
}
//log();

function wrapper() {
  let value = 20; //local
  console.log("function wrapper:", value);

  log();
}
wrapper();

console.log('out functions value = ', value);