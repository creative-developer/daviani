import { MQ } from './MQ.js';
import { breakpoints } from './consts.js';
import { screenOverlaySwitcher } from './screenOverlaySwitcher.js';

export const mediaQueriesInit = () => {
  MQ(
    breakpoints.xl.maxWidth,
    () => {
      // in xl
      ScrollTrigger.killAll();
      document.addEventListener('scroll', screenOverlaySwitcher);
    },
    () => {
      // out xl
      // initBlocksAnimation();
      document.removeEventListener('scroll', screenOverlaySwitcher);
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
