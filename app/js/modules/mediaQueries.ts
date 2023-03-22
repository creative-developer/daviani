import { breakpoints, MQ } from './MQ';

export const mediaQueriesInit = () => {
  console.log('serdar');

  MQ(
    breakpoints.lg,
    () => {
      // in lg
      console.log('ishldei');
    },
    () => {
      // out lg
    },
  );
  MQ(
    breakpoints.sm,
    () => {
      // in sm
    },
    () => {
      // out sm
    },
  );
};
