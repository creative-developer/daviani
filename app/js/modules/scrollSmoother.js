import { WHEEL_IMAGES_LIMIT } from './consts';

const scrollSmootherAnimation = () => {
  gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

  ScrollSmoother.create({
    wrapper: '.smooth-wrapper',
    content: '.smooth-content',
    smooth: 1.5,
    effects: true,
    autoResize: true,
  });

  const wheel = document.querySelector('.wheel');
  const elements = gsap.utils.toArray('.wheel__card');

  function setup() {
    const radius = wheel.offsetWidth / 2;
    const center = wheel.offsetWidth / 2;
    const total = elements.length;
    const slice = (2 * Math.PI) / total;

    elements.forEach((item, i) => {
      const angle = i * slice;

      const x = center + radius * Math.sin(angle);
      const y = wheel.offsetWidth - (center + radius * Math.cos(angle));

      gsap.set(item, {
        rotation: angle + '-rad',
        xPercent: -50,
        yPercent: -50,
        x: x,
        y: y,
      });
    });
  }

  gsap.to('.wheel', {
    rotate: -360,
    ease: 'linear',
    opacity: 0,
    duration: elements.length / 2,
    scrollTrigger: {
      start: 0,
      end: 'max',
      scrub: true,
      snap: 1 / elements.length,
      invalidateOnRefresh: true,
    },
  });

  setup();

  window.addEventListener('resize', setup);
};

const clonningValidImagesCount = () => {
  const wheel = $('.wheel');
  const images = $('.wheel__card');
  const imagesClonningSteps = Math.ceil(WHEEL_IMAGES_LIMIT / images.length);

  const arr = [];

  for (let i = 0; i < imagesClonningSteps; i++) {
    arr.push(...images.clone());
  }

  const validAmountOfItems = arr.slice(0, WHEEL_IMAGES_LIMIT);
  $(wheel.html(validAmountOfItems));

  scrollSmootherAnimation();
};

export const initScrollSmoother = () => {
  clonningValidImagesCount();
};
