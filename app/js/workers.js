this.addEventListener('message', async event => {
  const imagesPaths = event.data;
  const imagesPromises = imagesPaths.map(async item => {
    const response = await fetch(`${item.basePath}${item.imageURL}`);
    const blob = await response.blob();
    return { blob, imageURL: item.imageURL };
  });

  const images = (await Promise.allSettled(imagesPromises)).map(item => item.value);

  self.postMessage(images);
});
