self.addEventListener('message', async event => {
  const { basePath, imageURL } = event.data;

  const response = await fetch(`${basePath}${imageURL}`);
  const blob = await response.blob();

  self.postMessage({
    imageURL: imageURL,
    blob: blob,
  });
});
