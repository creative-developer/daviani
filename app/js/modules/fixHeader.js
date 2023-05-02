// let scrollY = 0;
// const headerPositionClassSwitcher = () => {
//   const vertical = window.scrollY;
//   const isUpScrolling = scrollY >= vertical;

//   if (isUpScrolling) {
//     header.addClass('up');
//     header.removeClass('down');
//   } else {
//     header.addClass('down');
//     header.removeClass('up');
//   }

//   scrollY = vertical;
// };

const fixHeader = e => {
  const scrollTop = $(window).scrollTop();
  const header = $('.header');
  const headerHeight = header.height();

  if (scrollTop > headerHeight) {
    header.addClass('header--scrolled');
  } else {
    header.removeClass('header--scrolled');
  }
};

export const initFixHeader = () => {
  fixHeader();
  document.addEventListener('scroll', fixHeader);
};
