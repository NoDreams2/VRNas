window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    const headerContainer = this.document.querySelector(".header__container")
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 83) {
        header.classList.add("scroll");
        headerContainer.style.margin = '10px auto'
    } else {
        header.classList.remove("scroll");
        headerContainer.style.margin = '31px auto 0 auto'
    }
});
