import { MQ } from './MQ.js';
import { breakpoints } from './consts.js';

export const mediaQueriesInit = () => {
  MQ(
    breakpoints.lg.maxWidth,
    () => {
      // in lg
      console.log('in lg');
    },
    () => {
      // out lg
      console.log('out lg');
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
