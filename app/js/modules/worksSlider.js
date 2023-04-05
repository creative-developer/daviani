import Swiper, { Scrollbar, Autoplay } from 'swiper';

export const initWorksSlider = () => {
  const cloningElements = $('.works-slider__wrapper').clone();
  $('.works-slider').append(cloningElements);

  const tl = gsap.timeline({ defaults: { yoyo: false, repeat: -1, ease: 'none', duration: 20 } });
  tl.fromTo('.works-slider__wrapper', { xPercent: 0 }, { xPercent: -100 });

  // const swiper = new Swiper('.works-slider', {
  //   slideClass: 'works-slider__item',
  //   wrapperClass: 'works-slider__wrapper',
  //   modules: [Scrollbar, Autoplay],
  //   spaceBetween: 6,
  //   slidesPerView: 'auto',
  //   speed: 2000,
  //   autoplay: {
  //     delay: undefined,
  //     waitForTransition: false,
  //     stopOnLastSlide: false,
  //     pauseOnMouseEnter: false,
  //     disableOnInteraction: false,
  //   },
  //   loop: true,
  //   freeMode: true,
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //     enabled: true,
  //     draggable: true,
  //   },
  // });
};
