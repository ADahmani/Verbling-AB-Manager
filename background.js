chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  var obj = JSON.parse(response);
  window.experiments = obj;
});
