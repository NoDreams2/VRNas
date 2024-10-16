const button = document.querySelector(".header__button");
const link = document.querySelector(".header__button-link");

button.addEventListener('click', () =>{
    window.location.href = link.href
})