export const initMenu = () => {
  const menu = $('.menu');
  const header = $('.header');
  const jsMenuBtn = $('.js-menu');

  // Mobile menu toggle
  jsMenuBtn.on('click', e => {
    e.preventDefault();

    $(e.currentTarget).toggleClass('is-active');
    menu.toggleClass('opened');
    header.toggleClass('menu-opened');
  });
};
