import { breakpoints, MQ } from './MQ';

export const mediaQueriesInit = () => {
  // @ts-ignore
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
  // @ts-ignore
  MQ(
    breakpoints.sm,
    () => {
      // in sm
    },
    () => {},
  );
};
