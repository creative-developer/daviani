this.addEventListener('message', async event => {
  const { basePath, imageURL } = event.data;

  const response = await fetch(`${basePath}${imageURL}`);
  const blob = await response.blob();

  // Send the image data to the UI thread!
  self.postMessage({
    imageURL: imageURL,
    blob: blob,
  });
});
