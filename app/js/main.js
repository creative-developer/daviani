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
import { initContactsMaps } from './modules/contactsMaps.js';
import { initBlocksAnimation } from './modules/blockAnimation.js';
import { initRems } from './modules/calcRem.js';
import { initMenu } from './modules/menu.js';
import { initLazyLoadImages } from './modules/lazyLoadImages.js';

export let scroller = null;

$(document).ready(() => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  scroller = ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
    effects: true,
    autoResize: true,
    smoothTouch: false,
    ignoreMobileResize: true,
  });

  ScrollTrigger.config({ ignoreMobileResize: true });

  initRems();
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
  initContactsMaps();
  initMenu();
  initBlocksAnimation();
  initLazyLoadImages();

  $(window).on('load', () => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  });
});
