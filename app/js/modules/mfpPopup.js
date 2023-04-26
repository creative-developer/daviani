export const mfpPopupInit = () => {
  window.mfpPopup = function (popupID, source) {
    const closeBtn =
      '<svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.41 13.41"><polygon points="12 13.41 6.71 8.12 1.41 13.41 0 12 5.29 6.71 0 1.41 1.41 0 6.71 5.29 12 0 13.41 1.41 8.12 6.71 13.41 12 12 13.41"/></svg>';

    $.magnificPopup.open({
      items: {
        src: popupID,
      },
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      closeMarkup: `<button type="button" class="mfp-close">${closeBtn}</button>`,
      mainClass: 'mfp-fade-zoom',
      callbacks: {
        open: function () {},
      },
    });
  };
};
