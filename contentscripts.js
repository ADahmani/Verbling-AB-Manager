function injectScript(file, node) {
  var th = document.getElementsByTagName(node)[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', file);
  th.appendChild(s);
}
injectScript(chrome.extension.getURL('/injected_brain.js'), 'body');
window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
  var result = /^https?:\/\/([a-zA-Z\d-]+\.){0,}verbling\.com$/.test(
    event.origin
  );
  if (!result) return;
  chrome.runtime.sendMessage(event.data);
}
