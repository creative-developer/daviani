import lozad from 'lozad';

export const initLazyLoadImages = () => {
  const observer = lozad('.lazy');
  observer.observe();
};
