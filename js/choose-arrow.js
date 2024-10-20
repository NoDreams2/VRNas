document.addEventListener("DOMContentLoaded", () => {
  const chooseArrow1 = document.getElementById("choose-arrow-1");
  const chooseDesc1 = document.querySelector(".choose__desc");
  let isUp1 = false;

  chooseArrow1.addEventListener("click", () => {
    if (isUp1) {
      chooseArrow1.innerHTML = "⮟";
      chooseDesc1.classList.remove("active");
    } else {
      chooseArrow1.innerHTML = "⮝";
      chooseDesc1.classList.add("active");
    }
    isUp1 = !isUp1;
  });
});

