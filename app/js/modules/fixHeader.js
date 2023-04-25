export const fixHeader = () => {
  const scrollTop = $(window).scrollTop();
  const header = $('.header');
  const headerHeight = header.height();

  if (scrollTop > headerHeight) {
    header.addClass('header--scrolled');
  } else {
    header.removeClass('header--scrolled');
  }
};
