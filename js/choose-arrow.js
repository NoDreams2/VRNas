document.addEventListener("DOMContentLoaded", () => {
  const chooseArrow1 = document.getElementById("choose-arrow-1");
  const chooseDesc1 = document.querySelector(".choose__desc-1");
  let isUp1 = true;

  chooseArrow1.addEventListener("click", () => {
    if (isUp1) {
      chooseArrow1.innerHTML = "&#11167;";
      chooseDesc1.classList.add("active");
    } else {
      chooseArrow1.innerHTML = "&#11165;";
      chooseDesc1.classList.remove("active");
    }
    isUp1 = !isUp1;
  });

  const chooseArrow2 = document.getElementById("choose-arrow-2");
  const chooseDesc2 = document.querySelector(".choose__desc-2");
  let isUp2 = false;

  chooseArrow2.addEventListener("click", () => {
    if (isUp2) {
      chooseArrow2.innerHTML = "&#11167;";
      chooseDesc2.classList.remove("active");
    } else {
      chooseArrow2.innerHTML = "&#11165;";
      chooseDesc2.classList.add("active");
    }
    isUp2 = !isUp2;
  });
  
  const chooseArrow3 = document.getElementById("choose-arrow-3");
  const chooseDesc3 = document.querySelector(".choose__desc-3");
  let isUp3 = false;

  chooseArrow3.addEventListener("click", () => {
    if (isUp3) {
      chooseArrow3.innerHTML = "&#11167;";
      chooseDesc3.classList.remove("active");
    } else {
      chooseArrow3.innerHTML = "&#11165;";
      chooseDesc3.classList.add("active");
    }
    isUp3 = !isUp3;
  });
});

