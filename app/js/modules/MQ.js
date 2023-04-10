import { breakpoints } from './consts.js';

const getBreakpoint = input => {
  if (breakpoints[input] !== undefined) {
    return breakpoints[input].maxWidth;
  } else {
    return input;
  }
};

const action = function (rule, handlerTrue, handlerFalse, listener, elThis) {
  if (typeof handlerTrue == 'function' || typeof handlerFalse == 'function') {
    const mq = window.matchMedia(getBreakpoint(rule));

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

    if (listener !== false) mq.addListener(callTrigger);

    callTrigger();
  }
};

export const MQ = function (rule, handlerTrue, handlerFalse, listener) {
  return action(rule, handlerTrue, handlerFalse, listener, this);
};
