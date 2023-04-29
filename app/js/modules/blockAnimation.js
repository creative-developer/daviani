import { scroller } from '../main.js';
import { breakpoints, gsapMatchMedia } from './consts.js';

export const initBlocksAnimation = () => {
  const windowHeight = document.documentElement.clientHeight;
  const collage = $('.collage');

  gsapMatchMedia.add(breakpoints.xl.minWidth, () => {
    scroller.effects('.facilities__sub-title', { speed: 0.9 });
    scroller.effects('.facilities__title', { speed: 1.1 });
    document.querySelectorAll('.facilities__item').forEach((item, index) => {
      if (index % 2 === 0) {
        scroller.effects(item, { speed: 1.1 });
      } else {
        scroller.effects(item, { speed: 0.9 });
      }
    });
  });

  gsapMatchMedia.add(breakpoints.xl.minWidth, () => {
    scroller.effects(collage, { speed: 1.2 });
  });

  scroller.effects('.advantages__title', { speed: 0.1 });

  gsapMatchMedia.add(breakpoints.md.minWidth, () => {
    scroller.effects('.advantages__col--left', { speed: 1.1 });
    scroller.effects('.advantages__col--center', { speed: 1.8 });
    scroller.effects('.advantages__col--right', { speed: 1.4 });
  });

  gsapMatchMedia.add(breakpoints.xl.maxWidth, () => {
    scroller.effects('.advantages__col--left', { speed: 0.8 });
    scroller.effects('.advantages__col--center', { speed: 1.6 });
    scroller.effects('.advantages__col--right', { speed: 0.8 });
  });

  gsapMatchMedia.add(breakpoints.sm.maxWidth, () => {
    scroller.effects('.advantages__col--left', { speed: 0.9 });
    scroller.effects('.advantages__col--center', { speed: 1.2 });
    scroller.effects('.advantages__col--right', { speed: 0.9 });
  });

  const mainTimeline = gsap.timeline({ defaults: { ease: 'none' } });

  const collageCenterElement = $('.collage__item--center');
  const centerElementCenterPoint = collageCenterElement[0].offsetTop + collageCenterElement.outerHeight() / 2;
  const centerElementTopOffsetPosition = centerElementCenterPoint - windowHeight / 2;
  const items = gsap.utils.toArray('.collage__item').filter(item => !item.classList.contains('collage__item--center'));

  const mainTitleSettings = {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: '.main-screen',
      // start: `-${Helpers.getWindowHeightPercentage(90)} top`,
      // end: `-${Helpers.getWindowHeightPercentage(50)} top`,
      start: 'top top',
      end: 'center top',
      scrub: true,
      markers: false,
      invalidateOnRefresh: true,
    },
  };

  const collageSettings = {
    xPercent: -6.75,
    scale: 3.5,
    duration: 1,
    scrollTrigger: {
      trigger: collage,
      start: `top+=${centerElementTopOffsetPosition} top`,
      end: '100% top',
      scrub: true,
      pin: true,
      // markers: true,
      invalidateOnRefresh: true,
    },
  };

  const collageItemsSettings = {
    opacity: 0,
    scrollTrigger: {
      trigger: collage,
      start: `top+=${centerElementTopOffsetPosition} top`,
      end: '100% top',
      scrub: true,
      markers: false,
      invalidateOnRefresh: true,
    },
  };

  // Collage section
  // gsapMatchMedia.add(breakpoints.xxl.minWidth, () => {
  //   tl.to('.main-gallery__title-wrap', mainTitleSettings).to(collage, collageSettings).to(items, collageItemsSettings);
  // });
  // gsapMatchMedia.add(breakpoints.xxl.maxWidth, () => {
  //   tl.to(collage, { ...collageSettings, xPercent: -7, scale: 4 }).to(items, collageItemsSettings);
  // });

  gsapMatchMedia.add(breakpoints.xxl.minWidth, () => {
    mainTimeline.to('.main-gallery__title-wrap', mainTitleSettings).to(collage, collageSettings).to(items, collageItemsSettings);
  });

  gsapMatchMedia.add(breakpoints.xl.minWidth, () => {
    gsapMatchMedia.add(breakpoints.xxl.maxWidth, () => {
      mainTimeline.to(collage, { ...collageSettings, xPercent: -7, scale: 4 }).to(items, collageItemsSettings);
    });
  });

  gsapMatchMedia.add(breakpoints.xl.maxWidth, () => {
    mainTimeline.pause().kill();
  });

  gsapMatchMedia.add(breakpoints.xl.minWidth, () => {
    // Services section
    const servicesTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services-banner',
        start: 'top bottom',
        end: 'bottom-=10% bottom',
        markers: false,
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
      defaults: { ease: 'none' },
    });

    servicesTl.to('.services-banner__img', { height: '100%' });
    // servicesTl.to('.services-banner__background-wrap', { opacity: 1, yPercent: 100, y: 0 });
    servicesTl.to('.services-banner__background-wrap', { opacity: 1, yPercent: 0, y: 0 });
  });

  // Brands Section
  gsapMatchMedia.add(breakpoints.xxl.minWidth, () => {
    const brandsTl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '.works-slider',
        start: 'top-=10% top',
        end: 'bottom-=50% top',
        markers: false,
        invalidateOnRefresh: true,
        toggleActions: 'play none none reverse',
      },
    });
    brandsTl.to('.brands__item', { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power1.in' });
  });
};
