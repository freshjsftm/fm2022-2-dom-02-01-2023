"use strict";

const unique = document.getElementById("unique");

function showAlert() {
  alert(2);
  unique.removeEventListener("click", showAlert);
  //unique.disabled = true;
}
function showLog() {
  console.log(3);
}
// unique.onclick = showAlert;
// unique.onclick = showLog;

unique.addEventListener("click", showAlert);
unique.addEventListener("click", showLog);

unique.addEventListener("myevent", () => {
  console.log("myevent")
  console.log(unique);
});

const eventClick = new MouseEvent('dblclick');
unique.dispatchEvent(eventClick);

const eventMy = new Event('myevent');
unique.dispatchEvent(eventMy);

// const imagesDB = [
//   "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ocean-quotes-index-1624414741.jpg",
//   "https://media.vogue.fr/photos/62d7c593413ae1c919695f4a/2:3/w_2560%2Cc_limit/155380802",
//   "https://th-thumbnailer.cdn-si-edu.com/HPG2yfboB6qxZb-E3cayS7dYu5s=/1072x720/filters:no_upscale():focal(2301x1599:2302x1600)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/a3/9c/a39cb32f-b19e-4c45-a236-d0cb54c0be8f/5840602412_0611190a2a_o.jpg",
// ];

// const slider = new Slider(imagesDB);

// const img = document.querySelector(".slider-container>.slide>img");
// const [prevBtn, nextBtn] = document.querySelectorAll(
//   ".slider-container button"
// );

// function updateViewSlider() {
//   img.setAttribute("src", slider.currentSlide);
//   //img.src = slider.currentSlide;
//   //дз - додати атрибути alt та title з текстом
// }
// updateViewSlider();

// const createSlideBtnHandler =
//   (dirrection = "next") =>
//   () => {
//     slider.currentIndex =
//       slider[dirrection === "next" ? "nextIndex" : "prevIndex"];
//     updateViewSlider();
//   };

// prevBtn.addEventListener("click", createSlideBtnHandler("prev"));
// nextBtn.addEventListener("click", createSlideBtnHandler("next"));
