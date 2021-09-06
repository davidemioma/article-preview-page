"use strict";

const shareBtn = document.querySelector(".share");
const shareImg = document.querySelector(".share_img");

shareBtn.addEventListener("click", function () {
  const info = document.querySelector(".social");
  info.classList.toggle("hidden");
  shareBtn.classList.toggle("active");
  shareImg.classList.toggle("active");
});
