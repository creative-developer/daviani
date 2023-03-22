// Popup opener
export const popupsInit = () => {
  $('.js-popup').on('click', function (event: JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>) {
    event.preventDefault();
    let popupID = $(this).attr('href');

    // @ts-ignore
    window.mfpPopup(popupID);
  });

  // popup more
  $('.js-popup-more').on('click', function (event: JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>) {
    event.preventDefault();
    const btn = $(this);
    const popupID = btn.attr('href');

    const data = {
      title: btn.siblings('.country-popup__title').text() || '',
    };
    // @ts-ignore
    window.mfpPopup(popupID, data);
  });

  $('.js-popup-close').on('click', function (e: JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>) {
    e.preventDefault();

    // @ts-ignore
    $.magnificPopup.close();
  });
};
