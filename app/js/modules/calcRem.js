const calcRem = () => {
  let _deltaX = 0;
  let _deltaY = 0;

  if (window.innerHeight < window.innerWidth) {
    _deltaX = (window.innerWidth / 1903) * 100;
    _deltaY = (window.innerHeight / 979) * 100;
  } else {
    _deltaX = (window.innerWidth / 1920) * 100;
    _deltaY = (window.innerHeight / 979) * 100;
  }

  if (_deltaX <= _deltaY) {
    $('html').css('font-size', _deltaX + '%');
  } else {
    $('html').css('font-size', _deltaY + '%');
  }
};

export const initRems = () => {
  if ($(window).outerWidth() > 1440) {
    calcRem();
  }

  $(window).on('load resize', function () {
    if ($(window).outerWidth() > 1440) {
      calcRem();
    }
  });
};
