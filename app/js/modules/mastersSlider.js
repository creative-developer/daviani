import Swiper, { Navigation, Pagination } from 'swiper';

export const initMastersSlider = () => {
  new Swiper('.masters-slider', {
    modules: [Navigation, Pagination],
    slideClass: 'masters-slider__item',
    wrapperClass: 'masters-slider__wrapper',
    spaceBetween: 50,
    slidesPerView: 'auto',
    navigation: {
      prevEl: '.masters__slider-btn--prev',
      nextEl: '.masters__slider-btn--next',
      disabledClass: 'masters__slider-btn--disabled',
    },
    speed: 700,
    autoplay: true,
  });
};
