document.addEventListener("DOMContentLoaded", showElements);

function showElements() {
  const imgTargets = document.querySelectorAll(".welcome__img_element-animation");
  const titleTargets = document.querySelectorAll(".welcome__title_element-animation");
  const descTargets = document.querySelectorAll(".welcome__desc_element-animation");
  const buttonTargets = document.querySelectorAll(".welcome__button_element-animation");
  const clientTargets = document.querySelectorAll(".welcome__client_element-animation");
  const advantagesTargets = document.querySelectorAll(".advantages__container_element-animation");
  const aboutImagesTargets = document.querySelectorAll(".about__images_element-animation");
  const aboutTitleH3Targets = document.querySelectorAll(".about__title-h3_element-animation");
  const aboutTitleH2Targets = document.querySelectorAll(".about__title-h2_element-animation");
  const aboutDescTargets = document.querySelectorAll(".about__desc_element-animation");
  const aboutListTargets = document.querySelectorAll(".about__list_element-animation");
  const aboutButtonTargets = document.querySelectorAll(".about__button_element-animation");
  const serviceTitleH3Targets = document.querySelectorAll(".service__title-h3_element-animation");
  const serviceTitleH2Targets = document.querySelectorAll(".service__title-h2_element-animation");
  const serviceDescTargets = document.querySelectorAll(".service__desc_element-animation");
  const serviceCardsItemTargets = document.querySelectorAll(".service__cards-item_element-animation");
  const chooseTitleH3Targets = document.querySelectorAll(".choose__title-h3_element-animation");
  const chooseTitleH2Targets = document.querySelectorAll(".choose__title-h2_element-animation");
  const chooseListTargets = document.querySelectorAll(".choose__list_element-animation");
  const chooseImagesTargets = document.querySelectorAll(".choose__images_element-animation");
  const startedTitleH3Targets = document.querySelectorAll(".started__title-h3_element-animation");
  const startedTitleH2Targets = document.querySelectorAll(".started__title-h2_element-animaiton");
  const startedVideoTargets = document.querySelectorAll(".started__video_element-animation");
  const startedButtonTargets = document.querySelectorAll(".started__button_element-animation");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  imgTargets.forEach((target) => {
    observer.observe(target);
  });

  titleTargets.forEach((target) => {
    observer.observe(target);
  });

  descTargets.forEach((target) => {
    observer.observe(target);
  });

  buttonTargets.forEach((target) => {
    observer.observe(target);
  });

  clientTargets.forEach((target) => {
    observer.observe(target);
  });

  advantagesTargets.forEach((target) => {
    observer.observe(target);
  });

  aboutImagesTargets.forEach((target) => {
    observer.observe(target);
  });

  aboutTitleH3Targets.forEach((target) => {
    observer.observe(target);
  });
  
  aboutTitleH2Targets.forEach((target) => {
    observer.observe(target);
  });

  aboutDescTargets.forEach((target) => {
    observer.observe(target);
  });

  aboutListTargets.forEach((target) => {
    observer.observe(target);
  });

  aboutButtonTargets.forEach((target) => {
    observer.observe(target);
  });

  serviceTitleH3Targets.forEach((target) => {
    observer.observe(target);
  });

  serviceTitleH2Targets.forEach((target) => {
    observer.observe(target);
  });

  serviceDescTargets.forEach((target) => {
    observer.observe(target);
  });

  serviceCardsItemTargets.forEach((target) => {
    observer.observe(target);
  });

  chooseTitleH3Targets.forEach((target) => {
    observer.observe(target);
  });

  chooseTitleH2Targets.forEach((target) => {
    observer.observe(target);
  });

  chooseListTargets.forEach((target) => {
    observer.observe(target);
  });

  chooseImagesTargets.forEach((target) => {
    observer.observe(target);
  });

  startedTitleH3Targets.forEach((target) => {
    observer.observe(target);
  });

  startedTitleH2Targets.forEach((target) => {
    observer.observe(target);
  });

  startedVideoTargets.forEach((target) => {
    observer.observe(target);
  });

  startedButtonTargets.forEach((target) => {
    observer.observe(target);
  });
}

