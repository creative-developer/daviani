import { initLazyLoadImages } from './lazyLoadImages.js';
import { initWorker } from './webWorkerPromise.js';

export const imageLoaderSingleThread = () => {
  const ImageLoaderWorker = initWorker('js/workers.js');
  const imgElements = document.querySelectorAll('img.lazy[data-src]');
  const imagesPaths = [];

  imgElements.forEach(imageElement => {
    const imageURL = imageElement.getAttribute('data-src');
    imagesPaths.push({ basePath: `${window.location.href}`, imageURL });
    // ImageLoaderWorker.postMessage({ basePath: `${window.location.href}`, imageURL });
  });

  ImageLoaderWorker(imagesPaths).then(data => {
    const imageData = data;
    imageData.forEach(item => {
      const imageElement = $(`img.lazy[data-src="${item.imageURL}"]`);

      const objectURL = URL.createObjectURL(item.blob);
      imageElement.attr('data-src', objectURL);
      initLazyLoadImages();
      // imageElement.removeAttr('data-src');
      gsap.fromTo('.loader', { yPercent: 0 }, { duration: 0.3, ease: 'none', yPercent: -100 });
    });
  });
};
