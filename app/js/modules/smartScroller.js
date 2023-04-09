export const smartScroller = (currentElement, scrollerContainer) => {
  const offsetLeft = $(currentElement).offset().left;

  $(scrollerContainer).animate({ scrollLeft: offsetLeft }, 400);

  return false;
};
