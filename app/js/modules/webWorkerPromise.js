export const initWorker = stringUrl => {
  return data => {
    const worker = new Worker(stringUrl);
    return new Promise((resolve, reject) => {
      worker.onmessage = event => {
        worker.terminate();
        resolve(event.data);
      };
      worker.onerror = error => {
        worker.terminate();
        reject(error.message);
      };
      worker.postMessage(data);
    });
  };
};
