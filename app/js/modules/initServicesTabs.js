import { smartScroller } from './smartScroller.js';

const initServicesInnerTabs = () => {
  const currentParentTabElementId = $('.tab-nav__item--active').find('.tab-nav__link').attr('href').replace('#', '');
  const currentParentTabElement = $(`.tab-content__item[data-id='${currentParentTabElementId}']`);
  const tabNavLink = currentParentTabElement.find('.services-card__link');
  const tabContentItem = currentParentTabElement.find('.services-card__img');
  const price = currentParentTabElement.find('.services-card__price span');
  const submitBtn = currentParentTabElement.find('.services-card__btn');

  // init tabs first render
  const firstItem = tabContentItem.first().addClass('services-card__img--active');
  tabContentItem.not(firstItem).removeClass('services-card__img--active');

  tabNavLink.on('click', e => {
    e.preventDefault();
    e.stopPropagation();

    const currentElement = $(e.currentTarget);
    const id = currentElement.attr('href').replace('#', '');
    const currentTabContentItem = currentParentTabElement.find(`.services-card__img[data-id='${id}']`);

    const currentServiceName = currentElement.find('span').text();
    submitBtn.attr('data-value', currentServiceName);

    price.text(currentElement.attr('data-price'));
    currentElement.closest('.services-card__list').find('.services-card__item').removeClass('services-card__item--active');
    currentElement.parent().addClass('services-card__item--active');

    tabContentItem.not(currentTabContentItem).removeClass('services-card__img--active');
    currentTabContentItem.addClass('services-card__img--active');
  });
};

export const initServicesTabs = () => {
  const tabLink = $('.tab-nav__link');
  const tabContentItem = $('.tab-content__item');

  // init tabs first render
  tabContentItem.not(tabContentItem.first()).hide();

  tabLink.on('click', e => {
    e.preventDefault();
    e.stopPropagation();

    const currentElement = $(e.currentTarget);

    const id = currentElement.attr('href').replace('#', '');
    const currentTabContentItem = $(`.tab-content__item[data-id='${id}']`);

    currentElement.closest('.tab-nav__list').find('.tab-nav__item').removeClass('tab-nav__item--active');
    currentElement.parent().addClass('tab-nav__item--active');

    tabContentItem.not(currentTabContentItem).fadeOut(0);
    currentTabContentItem.fadeIn(500);

    smartScroller(currentElement.parent(), $('.tab-nav'));
    initServicesInnerTabs();
  });

  initServicesInnerTabs();
};
