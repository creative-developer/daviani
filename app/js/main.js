import { smoothScroll } from './modules/smoothScroll.js';
import { mediaQueriesInit } from './modules/mediaQueries.js';
import { popupsInit } from './modules/popups.js';
import { mfpPopupInit } from './modules/mfpPopup.js';
import { initScrollSmoother } from './modules/scrollSmoother.js';
import { initFancyBox } from './modules/fancybox.js';
import { initMastersSlider } from './modules/mastersSlider.js';
import { initWorksSlider } from './modules/worksSlider.js';
import { initServicesTabs } from './modules/initServicesTabs.js';
import { initContactsMaps } from './modules/contactsMaps.js';
import { initBlocksAnimation } from './modules/blockAnimation.js';
import { initRems } from './modules/calcRem.js';
import { initMenu } from './modules/menu.js';
import { initLazyLoadImages } from './modules/lazyLoadImages.js';
import { initMobileBlocksAnimation } from './modules/initMobileBlocksAnimation.js';
import { aosAnimationInit } from './modules/animationOnScroll.js';
import { breakpoints, gsapMatchMedia } from './modules/consts.js';
import { MQ } from './modules/MQ.js';
import { inputsMaskInit } from './modules/inputsMask.js';

export let scroller = null;

$(document).ready(() => {
  gsapMatchMedia.add(breakpoints.xl.minWidth, () => {
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
    initBlocksAnimation();
  });

  MQ(
    breakpoints.xl.maxWidth,
    () => {
      aosAnimationInit();
      // aosOptions.done(() => {
      //   setTimeout(() => {
      //     // AOS.refresh();
      //   }, 800);
      // });
    },
    () => {},
  );

  initRems();
  inputsMaskInit();
  mfpPopupInit();
  mediaQueriesInit();
  smoothScroll();
  popupsInit();
  initScrollSmoother();
  initFancyBox();
  initMastersSlider();
  initWorksSlider();
  initServicesTabs();
  initContactsMaps();
  initMenu();
  initMobileBlocksAnimation();
  initLazyLoadImages();

  $(window).on('load', () => {
    gsapMatchMedia.add(breakpoints.xl.minWidth, () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    });
  });
});
