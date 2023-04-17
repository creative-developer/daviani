this.addEventListener('message', async event => {
  const imagesPaths = event.data;

  const imagesPromises = imagesPaths.map(async item => {
    const response = await fetch(`${item.basePath}${item.imageURL}`);
    const blob = await response.blob();
    return { blob, imageURL: item.imageURL };
  });
  // const response = await fetch(`${basePath}${imageURL}`);
  const images = (await Promise.allSettled(imagesPromises)).map(item => item.value);

  // const blob = await response.blob();

  // Send the image data to the UI thread!
  self.postMessage(images);
});
