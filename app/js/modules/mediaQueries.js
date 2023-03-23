import { breakpoints, MQ } from './MQ';

export const mediaQueriesInit = () => {
  MQ(
    breakpoints.lg,
    () => {
      // in lg
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