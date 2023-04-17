export const imageLoaderMultipleThread = async () => {
  const ImageLoaderWorker = new Worker('js/multipleWorkers.js');
  const imgElements = document.querySelectorAll('img[data-src]');

  let i = 0;

  imgElements.forEach(imageElement => {
    const imageURL = imageElement.getAttribute('data-src');
    ImageLoaderWorker.postMessage({ basePath: `${window.location.href}`, imageURL });
  });

  ImageLoaderWorker.addEventListener('message', event => {
    const imageData = event.data;
    const imageElement = $(`img.lazy[data-src='${imageData.imageURL}']`);
    const objectURL = URL.createObjectURL(imageData.blob);
    imageElement.attr('data-src', objectURL);
    lazyload(imageElement);
    i++;

    if (imgElements.length <= i) {
      ImageLoaderWorker.terminate();
    }
  });
};
