function Redirecionar(url) {
    window.open(url)
}

function TrocarImg(seletor, novaImagem) {
    var elemento = document.querySelector(seletor)
    elemento.src = novaImagem
}

function SlideScroll() {
    const carouselWrapper = document.querySelector(".carousel-wrapper");
    const prevButton = document.querySelector(".carousel-control.left")
    const nextButton = document.querySelector(".carousel-control.right")
    const slider = document.querySelector(".carousel-container")

    const slides = document.querySelectorAll(".carousel-slide")
    const max_len = slides.length-4;

    let translateX = -0;
    const larguraDaTela = screen.width
    const step = (larguraDaTela/2) * 2;

    prevButton.addEventListener("click", function () {
        if (translateX != 0) {
            translateX += step
            carouselWrapper.style.transform = `translateX(${translateX}px)`
        }
    })

    nextButton.addEventListener("click", function() {
        if (Math.abs(translateX) != max_len * step) {
            translateX -= step
            carouselWrapper.style.transform = `translateX(${translateX}px)`
        }
    })
}

document.addEventListener("DOMContentLoaded", SlideScroll)
