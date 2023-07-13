/* ----- ----- const of the carousel ----- ----- ----- */
const carouselContainer = document.querySelector('.carousel__main-container');
const carouselArrowLeft = document.querySelector('.carousel__arrow--left');
const carouselArrowRight = document.querySelector('.carousel__arrow--right');

/* ----- ----- Event Listener for arrows right and left ----- ----- ----- */
carouselArrowRight.addEventListener('click', () => {
    carouselContainer.scrollLeft += carouselContainer.offsetWidth;
});

carouselArrowLeft.addEventListener('click', () => {
    carouselContainer.scrollLeft -= carouselContainer.offsetWidth;
});
