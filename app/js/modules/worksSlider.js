import Swiper, { Scrollbar, Autoplay, FreeMode } from 'swiper';

export const initWorksSlider = () => {
  const cloningElements = $('.works-slider__item').clone();

  new Swiper('.works-slider', {
    slideClass: 'works-slider__item',
    wrapperClass: 'works-slider__wrapper',
    modules: [Scrollbar, Autoplay, FreeMode],
    spaceBetween: 6,
    slidesPerView: 'auto',
    speed: 2500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    on: {
      beforeInit: function () {
        $('.works-slider__wrapper').append(cloningElements);
      },
      afterInit: function () {
        lazyload($('.works-slider__wrapper').find('.works-slider__img.lazy'));
      },
    },
    loop: true,
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true,
      snapOnRelease: true,
    },
  });
};
