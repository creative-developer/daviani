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

export let scroller = null;

$(document).ready(() => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  gsapMatchMedia.add(breakpoints.xl.minWidth, () => {
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

  const aosOptions = aosAnimationInit();
  initRems();
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

  aosOptions.done(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 800);
  });

  $(window).on('load', () => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
  });
});
