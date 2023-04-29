export const smoothScroll = () => {
  $('.js-scroll').on('click', e => {
    e.preventDefault();
    const attr = $(e.currentTarget).attr('href').replace('#', '');
    const el = $(`[data-id=${attr}]`);
    const headerHeight = window.innerWidth >= 991 ? 0 : 83;

    if (el.length) {
      const position = el.offset().top - headerHeight;
      $('body, html').animate({ scrollTop: position }, 700);

      return false;
    }
  });

  $('.js-menu-scroll').on('click', e => {
    e.preventDefault();
    const attr = $(e.currentTarget).attr('href').replace('#', '');
    const el = $(`[data-id=${attr}]`);
    const headerHeight = window.innerWidth >= 991 ? 0 : 83;

    $.magnificPopup.instance.close();

    if (el.length) {
      const position = el.offset().top - headerHeight;
      $('body, html').animate({ scrollTop: position }, 700);

      return false;
    }
  });
};
