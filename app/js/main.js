// Libs
import 'magnific-popup/dist/jquery.magnific-popup.min';
// Внимание!!!: Нужно подключать именно эту версию gsap так как только это версия работает со ScrollSmoother
import './libs/gsap.min';
import './libs/ScrollTrigger.min';
import './libs/ScrollSmoother.min';

import { smoothScroll } from './modules/smoothScroll';
import { mediaQueriesInit } from './modules/mediaQueries';
import { popupsInit } from './modules/popups';
import { mfpPopupInit } from './modules/mfpPopup';
import { initScrollSmoother } from './modules/scrollSmoother';
import { collageAnimationInit } from './modules/collageAnimation';
import { initFancyBox } from './modules/fancybox';
import { initMastersSlider } from './modules/mastersSlider';
import { initWorksSlider } from './modules/worksSlider';

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
  // servicesTabsInit();
});
