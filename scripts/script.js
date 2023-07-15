/* ----- ----- const of the carousel ----- ----- ----- */
const carouselContainer = document.querySelectorAll('.carousel__main-container');
const carouselArrowLeft = document.querySelectorAll('.carousel__arrow--left');
const carouselArrowRight = document.querySelectorAll('.carousel__arrow--right');

/* ----- ----- Event Listener for arrows right and left ----- ----- ----- */
carouselArrowRight[0].addEventListener('click', () => {
    carouselContainer[0].scrollLeft += carouselContainer[0].offsetWidth;
});

carouselArrowLeft[0].addEventListener('click', () => {
    carouselContainer[0].scrollLeft -= carouselContainer[0].offsetWidth;
});

carouselArrowRight[1].addEventListener('click', () => {
    carouselContainer[1].scrollLeft += carouselContainer[1].offsetWidth;
});

carouselArrowLeft[1].addEventListener('click', () => {
    carouselContainer[1].scrollLeft -= carouselContainer[1].offsetWidth;
});
