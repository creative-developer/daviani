import { MQ } from './MQ.js';
import { breakpoints } from './consts.js';

const mapsSection = $('.main-contacts');
let mapCounter = 0;

function init(props) {
  return () => {
    let map = new ymaps.Map(props.selector, {
      center: props.center,
      zoom: 16,
    });

    let placemark = new ymaps.Placemark(props.center, {}, {});

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  };
}

const initMaps = mapsSection => {
  const maps = mapsSection.find('.main-contacts__map');

  maps.each((i, el) => {
    const [x, y] = $(el).attr('data-cor').trim().split(',');

    ymaps.ready(init({ selector: el, center: [Number(x), Number(y)] }));
  });
};

const fetchAndInitMaps = mapsSection => {
  const ymapsSrc = mapsSection.attr('data-src');

  $.ajax({
    url: ymapsSrc,
    dataType: 'script',
  })
    .fail(() => {
      if (mapCounter < 5) {
        fetchAndInitMaps(mapsSection);
      }
    })
    .done(() => {
      initMaps(mapsSection);
    });
};

const loadMapOnTheScroll = e => {
  const targetElement = $('.masters');
  const targetElementOffsetTop = targetElement.offset().top;

  if (targetElementOffsetTop <= window.scrollY) {
    fetchAndInitMaps(mapsSection);
    document.removeEventListener('scroll', loadMapOnTheScroll);
    return false;
  }
};

export const initContactsMaps = () => {
  if (!mapsSection.length) {
    return;
  }

  MQ(
    breakpoints.xl.maxWidth,
    () => {
      // in xl
      document.addEventListener('scroll', loadMapOnTheScroll);
    },
    () => {
      // out xl
      ScrollTrigger.create({
        trigger: '.masters',
        start: 'top',
        once: true,
        onEnter: () => {
          fetchAndInitMaps(mapsSection);
        },
      });
    },
  );
};
