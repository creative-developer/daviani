import { MQ } from './MQ.js';
import { breakpoints } from './consts.js';

export const mediaQueriesInit = () => {
  MQ(
    breakpoints.lg.maxWidth,
    () => {
      // in lg
      console.log('in lg');
      const sliderBtns = $('.masters__slider-btns-wrap').find('.masters__slider-btn');
      $('.masters__mobile-slider-btns-wrap').append(sliderBtns);
    },
    () => {
      // out lg
      console.log('out lg');
      const sliderBtns = $('.masters__mobile-slider-btns-wrap').find('.masters__slider-btn');
      $('.masters__slider-btns-wrap').append(sliderBtns);
    },
  );
  MQ(
    breakpoints.sm.maxWidth,
    () => {
      // in sm
    },
    () => {
      // out sm
    },
  );
};
