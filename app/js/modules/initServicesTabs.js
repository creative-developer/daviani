export const initServicesTabs = () => {
  const tabList = $('.tab-nav__list');
  const tabItem = $('.tab-nav__item');
  const tabLink = $('.tab-nav__link');
  const tabContentItem = $('.tab-content__item');

  // init tabs first render
  tabContentItem.not(tabContentItem.first()).hide();

  tabLink.on('click', e => {
    e.preventDefault();
    const currentElement = $(e.currentTarget);
    const id = currentElement.attr('href').replace('#', '');
    const currentTabContentItem = $(`.tab-content__item[data-id='${id}']`);

    currentElement.closest('.tab-nav__list').find('.tab-nav__item').removeClass('tab-nav__item--active');
    currentElement.parent().addClass('tab-nav__item--active');

    tabContentItem.not(currentTabContentItem).fadeOut(0);
    currentTabContentItem.fadeIn(500);
  });
};
