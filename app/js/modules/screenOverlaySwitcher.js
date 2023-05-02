export const screenOverlaySwitcher = () => {
  const scrollTop = $(window).scrollTop();
  const footer = $('.footer');
  const screenOverlayEl = $('.screen-overlay');
  const windowHeight = $(window).outerHeight();
  const footerOffsetTop = footer.offset().top;

  if (windowHeight + scrollTop >= footerOffsetTop) {
    screenOverlayEl.hide();
  } else {
    screenOverlayEl.show();
  }
};
