export const smoothScroll = () => {
  $('.js-scroll').on('click', (e: JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>) => {
    e.preventDefault();
    const attr = $(e.currentTarget).attr('href').replace('#', '');
    const el = $(`[data-id=${attr}]`);
    const headerHeight = 56;

    if (el.length) {
      const position = el.offset().top - headerHeight;
      $('body, html').animate({ scrollTop: position }, 700);

      return false;
    }
  });
};
