import { IMediaBreakPoints } from '../interfaces/interfaces';
import { MediaBreakPointsKeys, MediaBreakPointsValues } from '../types/types';

export const breakpoints: IMediaBreakPoints = {
  xl: '(max-width: 1439px)',
  lg: '(max-width: 991px)',
  md: '(max-width: 767px)',
  sm: '(max-width: 575px)',
  xsm: '(max-width: 374px)',
};

const getBreakpoint = (input: MediaBreakPointsKeys) => {
  if (breakpoints[input] !== undefined) {
    return breakpoints[input];
  } else {
    return input;
  }
};

const action = function (
  rule: MediaBreakPointsValues,
  handlerTrue: () => void,
  handlerFalse: () => void,
  listener?: any,
  elThis?: ThisType<unknown>,
) {
  if (typeof handlerTrue == 'function' || typeof handlerFalse == 'function') {
    // TODO: Потом нужно вернутся
    const mq = window.matchMedia(getBreakpoint(rule as any).toString());

    const callTrigger = function () {
      const matches = mq.matches;

      if (!matches && typeof handlerFalse == 'function') {
        if (elThis) {
          handlerFalse.call(elThis);
        } else {
          handlerFalse();
        }
      } else if (matches && typeof handlerTrue == 'function') {
        if (elThis) {
          handlerTrue.call(elThis);
        } else {
          handlerTrue();
        }
      }
    };

    if (listener !== false) {
      mq.addListener(callTrigger);
    }

    callTrigger();
  }
};

export const MQ = function (rule: MediaBreakPointsValues, handlerTrue: () => void, handlerFalse: () => void, listener?: any) {
  return action(rule, handlerTrue, handlerFalse, listener, this);
};
