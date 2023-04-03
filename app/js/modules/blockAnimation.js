import { Helpers } from './Helpers.js';
import { scroller } from './scrollSmoother.js';

export const initBlocksAnimation = () => {
  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;

  scroller.effects('.facilities__sub-title', { speed: 0.9 });
  scroller.effects('.facilities__title', { speed: 1.1 });

  document.querySelectorAll('.facilities__item').forEach((item, index) => {
    if (index % 2 === 0) {
      console.log(item);
      scroller.effects(item, { speed: 1.1 });
    } else {
      scroller.effects(item, { speed: 0.9 });
    }
  });

  // TODO: ВОт это актуально
  // gsap.fromTo(
  //   '.main-gallery__title',
  //   { y: 100, filter: 'blur(3px)' },
  //   {
  //     opacity: 1,
  //     y: 0,
  //     filter: 'blur(0px)',
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: '.main-screen',
  //       // start: `-${Helpers.getWindowHeightPercentage(90)} top`,
  //       // end: `-${Helpers.getWindowHeightPercentage(50)} top`,
  //       start: 'top top',
  //       end: 'center top',
  //       scrub: true,
  //       markers: true,
  //       // anticipatePin: 1,
  //     },
  //   },
  // );

  const tl = gsap.timeline({ defaults: { ease: 'none' } });

  const collage = $('.collage');
  const collageCenterElement = $('.collage__item--center');
  const centerElementCenterPoint = collageCenterElement[0].offsetTop + collageCenterElement.outerHeight() / 2;
  const centerElementTopOffsetPosition = centerElementCenterPoint - windowHeight / 2;
  const items = gsap.utils.toArray('.collage__item').filter(item => !item.classList.contains('collage__item--center'));

  tl.fromTo(
    '.main-gallery__title',
    { y: 100, filter: 'blur(3px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scrollTrigger: {
        trigger: '.main-screen',
        // start: `-${Helpers.getWindowHeightPercentage(90)} top`,
        // end: `-${Helpers.getWindowHeightPercentage(50)} top`,
        start: 'top top',
        end: 'center top',
        scrub: true,
        markers: false,
      },
    },
  );

  // Collage section
  // tl.fromTo(
  //   collage,
  //   { y: 300 },
  //   {
  //     y: 0,
  //     scrollTrigger: {
  //       trigger: '.main-gallery',
  //       start: 'top top',
  //       end: 'center top',
  //       scrub: true,
  //       markers: true,
  //     },
  //   },
  // );

  tl.to(collage, {
    xPercent: -8,
    scale: 4,
    duration: 1,
    scrollTrigger: {
      trigger: collage,
      start: `top+=${centerElementTopOffsetPosition} top`,
      end: '90% 75%',
      scrub: true,
      pin: true,
      markers: true,
    },
  }).to(items, {
    opacity: 0,
    scrollTrigger: {
      trigger: collage,
      start: `top+=${centerElementTopOffsetPosition} top`,
      end: '90% 75%',
      scrub: true,
      markers: true,
    },
  });

  // gsap.to('.main-gallery__title', {
  //   y: 0,
  //   scrollTrigger: {
  //     trigger: '.main-gallery__title',
  //     pin: '.main-gallery__title',
  //     start: 'bottom center',
  //     end: 'bottom+=200 center',
  //     scrub: 1,
  //     markers: {
  //       startColor: '#fff',
  //       endColor: '#fff',
  //     },
  //   },
  // });

  // const collageCenterElementScalingTimeline = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: collage,
  //     // start: 'top top',
  //     // start: `top+=${centerElementTopOffsetPosition} top`,
  //     // end: () => {
  //     //   return `top+=${centerElementTopOffsetPosition + 200} top`;
  //     // },
  //     // end: `bottom top+=${centerElementTopOffsetPosition}`,
  //     start: `top+=${centerElementTopOffsetPosition} top`,
  //     end: () => {
  //       return `90% 75%`;
  //     },
  //     scrub: true,
  //     pin: true,
  //     // pinSpacing: false,
  //     markers: true,
  //     // invalidateOnRefresh: true,
  //     anticipatePin: true,
  //   },
  //   defaults: {
  //     ease: 'none',
  //   },
  // });

  // .to(collage, { yPercent: -100, duration: 2 });

  // gsap.fromTo(
  //   '.advantages__title',
  //   {
  //     y: 500,
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,
  //     y: 0,
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: '.advantages',
  //       endTrigger: '.advantages__row',
  //       // start: `-${Helpers.getWindowHeightPercentage(80)} +=10%`,
  //       // end: `-${Helpers.getWindowHeightPercentage(75)} top`,
  //       // start: 'top top+=20%',
  //       // end: 'top top',
  //       pin: true,
  //       pinnedContainer: '.advantages__title',
  //       scrub: true,
  //       markers: true,
  //       invalidateOnRefresh: true,
  //     },
  //   },
  // );
};
