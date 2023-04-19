export const WHEEL_IMAGES_LIMIT = 45;

export const breakpoints = {
  xxl: { minWidthNumberValue: 1440, minWidth: '(min-width: 1440px)', maxWidthNumberValue: 1439, maxWidth: '(max-width: 1439px)' },
  xl: { minWidthNumberValue: 1200, minWidth: '(min-width: 1200px)', maxWidthNumberValue: 1199, maxWidth: '(max-width: 1199px)' },
  lg: { minWidthNumberValue: 992, minWidth: '(min-width: 992px)', maxWidthNumberValue: 991, maxWidth: '(max-width: 991px)' },
  md: { minWidthNumberValue: 768, minWidth: '(min-width: 768px)', maxWidthNumberValue: 767, maxWidth: '(max-width: 767px)' },
  sm: { minWidthNumberValue: 576, minWidth: '(min-width: 576px)', maxWidthNumberValue: 575, maxWidth: '(max-width: 575px)' },
  xsm: { minWidthNumberValue: 375, minWidth: '(min-width: 375px)', maxWidthNumberValue: 374, maxWidth: '(max-width: 374px)' },
};

export const gsapMatchMedia = gsap.matchMedia();
