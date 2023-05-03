import lax from 'lax.js';

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
import { initForm } from './modules/form.js';
import { initFixHeader } from './modules/fixHeader.js';

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
  initForm();
  initFixHeader();

  // Add animation bindings to elements
  // MQ(
  //   breakpoints.xl.maxWidth,
  //   () => {
  //     lax.init();

  //     // Add a driver that we use to control our animations
  //     lax.addDriver('scrollY', function () {
  //       return window.scrollY;
  //     });

  //     lax.addElements('.advantages__title', {
  //       scrollY: {
  //         translateY: [
  //           ['elInY', 'elCenterY', 'elOutY'],
  //           {
  //             [breakpoints.xl.maxWidthNumberValue]: [200, 'screenHeight/3', 'screenHeight'],
  //           },
  //         ],
  //       },
  //     });

  //     lax.addElements('.advantages__col--left', {
  //       scrollY: {
  //         translateY: [
  //           ['elInY', 'elCenterY', 'elOutY'],
  //           {
  //             [breakpoints.xl.maxWidthNumberValue]: ['screenHeight/2', -400, -800],
  //           },
  //         ],
  //       },
  //     });

  //     lax.addElements('.advantages__col--center', {
  //       scrollY: {
  //         translateY: [
  //           ['elInY', 'elCenterY', 'elOutY'],
  //           {
  //             [breakpoints.xl.maxWidthNumberValue]: ['screenHeight/2', -500, -1200],
  //           },
  //         ],
  //       },
  //     });

  //     lax.addElements('.advantages__col--right', {
  //       scrollY: {
  //         translateY: [
  //           ['elInY', 'elCenterY', 'elOutY'],
  //           {
  //             [breakpoints.xl.maxWidthNumberValue]: ['screenHeight/2', -450, -1000],
  //           },
  //         ],
  //       },
  //     });

  //     //
  //   },
  //   () => {},
  // );

  // const settings = [
  //   { element: '.advantages__title-wrap', scale: 1.1, overflow: true, transition: 'cubic-bezier(0,0,1,1)' },
  //   { element: '.advantages__col--left .advantages__inner', scale: 1.2, overflow: true, transition: 'cubic-bezier(0,0,1,1)' },
  //   { element: '.advantages__col--center .advantages__inner', scale: 1.5, overflow: true, transition: 'cubic-bezier(0,0,1,1)' },
  //   { element: '.advantages__col--right .advantages__inner', scale: 1.4, overflow: true, transition: 'cubic-bezier(0,0,1,1)' },
  // ];

  // settings.forEach(({ element, ...settings }) => {
  //   new simpleParallax(document.querySelector(element), settings);
  // });

  $(window).on('load', () => {
    gsapMatchMedia.add(breakpoints.xl.minWidth, () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    });
  });
});
