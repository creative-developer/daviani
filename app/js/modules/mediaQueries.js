import { MQ } from './MQ.js';
import { initBlocksAnimation } from './blockAnimation.js';
import { breakpoints } from './consts.js';

export const mediaQueriesInit = () => {
  MQ(
    breakpoints.xl.maxWidth,
    () => {
      // in xl
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
    },
    () => {
      // out lg
      const sliderBtns = $('.masters__mobile-slider-btns-wrap').find('.masters__slider-btn');
      $('.masters__slider-btns-wrap').append(sliderBtns);
    },
  );
  MQ(
    breakpoints.sm.maxWidth,
    () => {
      // in sm
      ScrollTrigger.normalizeScroll();
    },
    () => {
      ScrollTrigger.normalizeScroll(false);
      // out sm
    },
  );
};
