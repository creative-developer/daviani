const createAndSetMap = (src, elementClassName = '') => {
  const map = document.createElement('iframe');
  const element = document.querySelector(elementClassName);

  map.setAttribute('src', src);
  map.setAttribute('width', '100%');
  map.setAttribute('height', '100%');
  map.setAttribute('frameborder', '0');

  element.insertAdjacentElement('afterbegin', map);
};

export const initContactsMaps = () => {
  ScrollTrigger.create({
    trigger: '.masters',
    start: 'top',
    once: true,
    onEnter: () => {
      createAndSetMap(
        'https://yandex.ru/map-widget/v1/?um=constructor%3A585485ea05390ddda4058cf9daeb8c6511d91bc51e08f6e1624889c2697b3ed6&amp;source=constructor',
        '.main-contacts__card--left .main-contacts__map',
      );
      createAndSetMap(
        'https://yandex.ru/map-widget/v1/?um=constructor%3A585485ea05390ddda4058cf9daeb8c6511d91bc51e08f6e1624889c2697b3ed6&amp;source=constructor',
        '.main-contacts__card--right .main-contacts__map',
      );
    },
  });
};
