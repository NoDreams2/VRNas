const arrowFirst = document.getElementById("arrow-first");
const menu1 = document.querySelector(".header__menu-1");
let isUp1 = true;
arrowFirst.addEventListener("click", () => {
  if (!isUp2) {
    arrowSecond.innerHTML = "&#11167";
    menu2.classList.remove('active');
    isUp2 = true;
  }

  if (isUp1) {
    arrowFirst.innerHTML = "&#11165;";
    menu1.classList.add('active'); 
  } else {
    arrowFirst.innerHTML = "&#11167;";
    menu1.classList.remove('active'); 
  }
  isUp1 = !isUp1;
});

const arrowSecond = document.getElementById("arrow-second");
const menu2 = document.querySelector(".header__menu-2");
let isUp2 = true;
arrowSecond.addEventListener("click", () => {
  if (!isUp1) {
    arrowFirst.innerHTML = "&#11167;";
    menu1.classList.remove('active')
    isUp1 = true;;
  }

  if (isUp2) {
    arrowSecond.innerHTML = "&#11165;";
    menu2.classList.add('active'); 
  } else {
    arrowSecond.innerHTML = "&#11167;";
    menu2.classList.remove('active'); 
  }
  isUp2 = !isUp2;
});
