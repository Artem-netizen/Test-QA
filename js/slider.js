const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    speed: 1700,
    slidesPerView: 1,
    autoHeight: true,
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        0: {
            spaceBetween: 15,
        },
        768: {
            spaceBetween: 30,
        },
    },
});