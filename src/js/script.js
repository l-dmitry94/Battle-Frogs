window.addEventListener("scroll", () => {
    const scrollToTopButton = document.querySelector("#scrollToTopButton");
    if (document.documentElement.scrollTop > 150) {
        scrollToTopButton.style.opacity = 1;
        scrollToTopButton.style.visibility = 'visible'
    } else {
        scrollToTopButton.style.opacity = 0;
        scrollToTopButton.style.visibility = 'hidden'
    }
});

// Піднімаємо сторінку вгору при кліку на кнопку
document.getElementById("scrollToTopButton").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});