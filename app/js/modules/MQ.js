export const breakpoints = {
  xxl: { minWidth: '(min-width: 1440px)', maxWidth: '(max-width: 1439px)' },
  xl: { minWidth: '(min-width: 1200px)', maxWidth: '(max-width: 1199px)' },
  lg: { minWidth: '(min-width: 992px)', maxWidth: '(max-width: 991px)' },
  md: { minWidth: '(min-width: 768px)', maxWidth: '(max-width: 767px)' },
  sm: { minWidth: '(min-width: 576px)', maxWidth: '(max-width: 575px)' },
  xsm: { minWidth: '(min-width: 375px)', maxWidth: '(max-width: 374px)' },
};

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
