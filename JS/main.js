let mainImg = document.querySelector(".pic");
let overlay = document.querySelector(".over");
let modalImg = document.querySelector(".modal");
let close = document.querySelector(".closeBtn");

mainImg.addEventListener("click", () => {
  modalImg.src = mainImg.getAttribute("src");
  overlay.style.display = "block"
});

close.addEventListener("click", () => { overlay.style.display = "none" })