// Libs
import 'magnific-popup/dist/jquery.magnific-popup.min.js';
// Внимание!!!: Нужно подключать именно эту версию gsap так как только это версия работает со ScrollSmoother
// import './libs/gsap.min.js';
// import './libs/ScrollTrigger.min.js';
// import './libs/ScrollSmoother.min.js';

import { smoothScroll } from './modules/smoothScroll.js';
import { mediaQueriesInit } from './modules/mediaQueries.js';
import { popupsInit } from './modules/popups.js';
import { mfpPopupInit } from './modules/mfpPopup.js';
import { initScrollSmoother } from './modules/scrollSmoother.js';
import { collageAnimationInit } from './modules/collageAnimation.js';
import { initFancyBox } from './modules/fancybox.js';
import { initMastersSlider } from './modules/mastersSlider.js';
import { initWorksSlider } from './modules/worksSlider.js';
import { initServicesTabs } from './modules/initServicesTabs.js';

$(document).ready(() => {
  mfpPopupInit();
  mediaQueriesInit();
  smoothScroll();
  popupsInit();
  initScrollSmoother();
  collageAnimationInit();
  initFancyBox();
  initMastersSlider();
  initWorksSlider();
  initServicesTabs();
  // servicesTabsInit();
});
