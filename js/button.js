const button1 = document.querySelector(".header__button");
const link1 = document.querySelector(".header__button-link");

button1.addEventListener("click", () => {
  window.location.href = link1.href;
});

const button2 = document.querySelector(".button");
const link2 = document.querySelector(".button-link");

button2.addEventListener("click", () => {
  window.location.href = link2.href;
});

const button3 = document.querySelector(".about__button");
const link3 = document.querySelector(".about__button-link");

button3.addEventListener("click", () => {
  window.location.href = link3.href;
});

