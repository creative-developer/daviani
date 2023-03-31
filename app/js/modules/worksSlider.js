import Swiper, { Scrollbar, Autoplay } from 'swiper';

export const initWorksSlider = () => {
  const swiper = new Swiper('.works-slider', {
    slideClass: 'works-slider__item',
    wrapperClass: 'works-slider__wrapper',
    modules: [Scrollbar, Autoplay],
    spaceBetween: 6,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
    },
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true,
    },
  });
};
