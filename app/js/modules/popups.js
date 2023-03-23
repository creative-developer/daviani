// Popup opener
export const popupsInit = () => {
  $('.js-popup').on('click', function (event) {
    event.preventDefault();
    let popupID = $(this).attr('href');

    window.mfpPopup(popupID);
  });

  // popup more
  $('.js-popup-more').on('click', function (event) {
    event.preventDefault();
    const btn = $(this);
    const popupID = btn.attr('href');

    const data = {
      title: btn.siblings('.country-popup__title').text() || '',
    };

    window.mfpPopup(popupID, data);
  });

  $('.js-popup-close').on('click', function (e) {
    e.preventDefault();

    $.magnificPopup.close();
  });
};
