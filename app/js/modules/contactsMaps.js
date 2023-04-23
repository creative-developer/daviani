const createAndSetMap = (src, elementClassName = '') => {
  const map = document.createElement('iframe');
  const element = document.querySelector(elementClassName);

  map.setAttribute('src', src);
  map.setAttribute('width', '100%');
  map.setAttribute('height', '100%');
  map.setAttribute('frameborder', '0');

  element.insertAdjacentElement('afterbegin', map);
};

function init(props) {
  return () => {
    let map = new ymaps.Map(props.selector, {
      center: props.center,
      zoom: 16,
    });

    let placemark = new ymaps.Placemark(
      props.center,
      {},
      {
        // iconLayout: 'default#image',
        // iconImageHref: '/assets/icons/map-mark.svg',
        // iconImageSize: [42, 42],
        // iconImageOffset: [-15, -30],
      },
    );

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

const initLoop = mapsSection => {
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
  }).done(() => {
    initLoop(mapsSection);
  });
};

export const initContactsMaps = () => {
  const mapsSection = $('.main-contacts');
  if (!mapsSection.length) {
    return;
  }

  ScrollTrigger.create({
    trigger: '.masters',
    start: 'top',
    once: true,
    onEnter: () => {
      fetchAndInitMaps(mapsSection);
      // createAndSetMap(
      //   'https://yandex.ru/map-widget/v1/?um=constructor%3A585485ea05390ddda4058cf9daeb8c6511d91bc51e08f6e1624889c2697b3ed6&amp;source=constructor',
      //   '.main-contacts__card--left .main-contacts__map',
      // );
      // createAndSetMap(
      //   'https://yandex.ru/map-widget/v1/?um=constructor%3A585485ea05390ddda4058cf9daeb8c6511d91bc51e08f6e1624889c2697b3ed6&amp;source=constructor',
      //   '.main-contacts__card--right .main-contacts__map',
      // );
    },
  });
};
