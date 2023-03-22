export const breakpoints = {
  xl: '(max-width: 1439px)',
  lg: '(max-width: 991px)',
  md: '(max-width: 767px)',
  sm: '(max-width: 575px)',
  xsm: '(max-width: 374px)',
};

// @ts-ignore
const getBreakpoint = input => {
  // @ts-ignore
  if (breakpoints[input] !== undefined) {
    // @ts-ignore
    return breakpoints[input];
  } else {
    return input;
  }
};

// @ts-ignore
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

// @ts-ignore
export const MQ = function (rule, handlerTrue, handlerFalse, listener) {
  return action(rule, handlerTrue, handlerFalse, listener, this);
};
