// Libs
import '../../node_modules/magnific-popup/dist/jquery.magnific-popup.min';

import { smoothScroll } from './modules/smoothScroll';
import { mediaQueriesInit } from './modules/mediaQueries';
import { popupsInit } from './modules/popups';
import { mfpPopupInit } from './modules/mfpPopup';
import { mainGalleryInit } from './modules/mainGallery';

$(document).ready(() => {
  mfpPopupInit();
  mediaQueriesInit();
  smoothScroll();

  popupsInit();
  mainGalleryInit();
});
