import { WHEEL_IMAGES_LIMIT } from './consts.js';

const scrollSmootherAnimation = () => {
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

  function infiniteReverse() {
    tl.reverse();
    checkReverseLoop();
  }

  function checkReverseLoop() {
    if (tl.reversed() && tl.totalTime() <= tl.duration()) {
      tl.totalTime(tl.totalTime() + tl.duration() * 1000, true);
    }
  }

  const tl = gsap.to('.wheel', {
    rotate: -360,
    duration: 160,
    repeat: -1,
    ease: 'none',
    onRepeat: checkReverseLoop,
    onReverseComplete: infiniteReverse,
  });

  let direction = 'bottom';
  let memoizedDirection = 'bottom';

  const handleScrollBottom = self => {
    tl.play();
  };

  const handleScrollTop = self => {
    infiniteReverse();
  };

  ScrollTrigger.create({
    trigger: '.main-page',
    start: 'top top',
    end: 'bottom top',
    scrub: 2,
    // markers: true,
    invalidateOnRefresh: true,
    onUpdate: self => {
      direction = self.direction === 1 ? 'bottom' : 'top';

      if (direction === 'bottom' && memoizedDirection !== direction) {
        memoizedDirection = 'bottom';
        handleScrollBottom(self);
      }

      if (direction === 'top' && memoizedDirection !== direction) {
        memoizedDirection = 'top';
        handleScrollTop(self);
      }

      if (direction === 'top') {
        tl.progress(tl.progress() - self.progress / 200);
      }

      if (direction === 'bottom') {
        tl.progress(tl.progress() + self.progress / 200);
      }
    },
  });

  const mainScreenContainer = $('.main-screen');
  let startPositionProgress = 0;

  mainScreenContainer.on('click', e => {
    const clientXProgress = e.clientX / window.outerWidth;

    startPositionProgress = clientXProgress;
  });

  mainScreenContainer.on('mousemove', e => {
    // Нажата левая кнопка мыши и ховер
    if (e.buttons === 1) {
      const clientXProgress = e.clientX / window.outerWidth;
      // console.log(clientXProgress - startPositionProgress);
    }
  });

  setup();

  window.addEventListener('resize', () => {
    setup();
  });
};

const clonningValidImagesCount = () => {
  const wheel = $('.wheel');
  const images = $('.wheel__card');

  if (!wheel.length) {
    return;
  }
  const imagesClonningSteps = Math.ceil(WHEEL_IMAGES_LIMIT / images.length);
  const arr = [];

  for (let i = 0; i < imagesClonningSteps; i++) {
    arr.push(...images.clone());
  }

  const validAmountOfItems = arr.slice(0, WHEEL_IMAGES_LIMIT);
  wheel.html($(validAmountOfItems));

  scrollSmootherAnimation();
};

export const initScrollSmoother = () => {
  clonningValidImagesCount();
};
