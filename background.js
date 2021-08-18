const filters = { urls: ['https://github.com/'] };

const onHeadersReceived = (({ responseHeaders }) => {
  const cspHeader = responseHeaders.find(({ name }) => name === 'content-security-policy');
  cspHeader.value = `media-src https://i.temp.media`;
  return { responseHeaders };
});

chrome.webRequest.onHeadersReceived.addListener(onHeadersReceived, filters, ['blocking', 'responseHeaders']);

/*
  Paste it to the browser's console on the Github's main page "https://github.com".

  const div = document.createElement('div');
  div.innerHTML = `
      <video width="500" height="400" controls>
          <source src="https://i.temp.media/video/500-x-400-10.mp4" type="video/mp4" />
      </video>
  `;
  document.body.prepend(div);
*/
