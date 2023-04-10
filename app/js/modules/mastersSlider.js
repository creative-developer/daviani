import { breakpoints } from './consts.js';
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
    breakpoints: {
      [breakpoints.xl.minWidthNumberValue]: {
        spaceBetween: 50,
      },
      [breakpoints.lg.minWidthNumberValue]: {
        spaceBetween: 40,
      },
      [breakpoints.md.minWidthNumberValue]: {
        spaceBetween: 30,
      },
      0: {
        spaceBetween: 16,
      },
    },
  });
};
