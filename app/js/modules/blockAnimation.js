import { Helpers } from './Helpers.js';
import { scroller } from './scrollSmoother.js';

export const initBlocksAnimation = () => {
  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;

  scroller.effects('.facilities__sub-title', { speed: 0.9 });
  scroller.effects('.facilities__title', { speed: 1.1 });

  document.querySelectorAll('.facilities__item').forEach((item, index) => {
    if (index % 2 === 0) {
      scroller.effects(item, { speed: 1.1 });
    } else {
      scroller.effects(item, { speed: 0.9 });
    }
  });

  scroller.effects('.collage', { speed: 1.2 });
  scroller.effects('.advantages__title', { speed: 0.1 });

  scroller.effects('.advantages__col--left', { speed: 1.1 });
  scroller.effects('.advantages__col--center', { speed: 1.8 });
  scroller.effects('.advantages__col--right', { speed: 1.4 });

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

  // console.log(centerElementTopOffsetPosition);

  tl.to('.main-gallery__title', {
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
    },
  });

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
    xPercent: -6.75,
    scale: 3.5,
    duration: 1,
    scrollTrigger: {
      trigger: collage,
      start: `top+=${centerElementTopOffsetPosition} top`,
      end: '100% top',
      scrub: true,
      pin: true,
      markers: false,
    },
  }).to(items, {
    opacity: 0,
    scrollTrigger: {
      trigger: collage,
      start: `top+=${centerElementTopOffsetPosition} top`,
      end: '100% top',
      scrub: true,
      markers: false,
    },
  });

  const servicesTl = gsap.timeline({
    scrollTrigger: {
      trigger: '.services-banner',
      start: 'top center',
      end: 'bottom center',
      markers: false,
      scrub: 1.2,
    },
    defaults: { ease: 'none' },
  });

  servicesTl.to('.services-banner__img', { height: '100%' });
  servicesTl.to('.services-banner__background-wrap', { opacity: 1, y: 0 });

  const brandsTl = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: '.works-slider',
      start: 'top top',
      bottom: 'bottom-=10% top',
      scrub: true,
      markers: false,
    },
  });

  const brandsImagesList = gsap.utils.toArray('.brands__item');

  brandsTl.from(brandsImagesList, { y: 160, stagger: 0.1, duration: 1, ease: 'none' });

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
