/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;

  const now = new Date().getTime();
  while (new Date().getTime() < now + 3000) {
    /* do nothing; this will exit once it reaches the time limit */
    /* if you want you could do something and exit */
  }
  postMessage(response);
});
