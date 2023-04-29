import { MQ } from './MQ.js';
import { breakpoints } from './consts.js';
import { fixHeader } from './fixHeader.js';

export const mediaQueriesInit = () => {
  MQ(
    breakpoints.xl.maxWidth,
    () => {
      // in xl
      ScrollTrigger.killAll();
    },
    () => {
      // out xl
      // initBlocksAnimation();
    },
  );
  MQ(
    breakpoints.lg.maxWidth,
    () => {
      // in lg
      const sliderBtns = $('.masters__slider-btns-wrap').find('.masters__slider-btn');
      $('.masters__mobile-slider-btns-wrap').append(sliderBtns);

      fixHeader();
      document.addEventListener('scroll', fixHeader);
    },
    () => {
      // out lg
      const sliderBtns = $('.masters__mobile-slider-btns-wrap').find('.masters__slider-btn');
      $('.masters__slider-btns-wrap').append(sliderBtns);

      document.removeEventListener('scroll', fixHeader);
      $('.header').removeClass('header--scrolled');
    },
  );
  MQ(
    breakpoints.sm.maxWidth,
    () => {
      // in sm
      // ScrollTrigger.normalizeScroll();
    },
    () => {
      // ScrollTrigger.normalizeScroll(false);
      // out sm
    },
  );

  MQ(
    breakpoints.xl.minWidth,
    () => {
      // in xl
    },
    () => {
      // out xl
    },
  );
};
