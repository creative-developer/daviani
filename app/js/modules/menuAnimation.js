export const menuAnimation = () => {
  const menu = $('.js-menu-animation');
  const menuItem = menu.find('.nav__item');

  const tl = gsap.timeline({ defaults: { duration: 0.2, ease: 'none' } }).delay(0.1);
  tl.fromTo(menuItem, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1, stagger: 0.05, duration: 0.3 });
  tl.fromTo('.menu__phone-wrap', { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
  tl.fromTo('.menu__btn-wrap', { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
  tl.fromTo('.menu__contact-item', { y: 50, opacity: 0 }, { y: 0, stagger: 0.05, opacity: 1 });
  tl.fromTo('.menu__social-wrap .social__item', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05 });
};
