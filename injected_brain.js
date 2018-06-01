console.log(window.app.Experiment);
var experiments = [];
var variations = window.app.Experiment.variations || {};
console.log({variations});
console.log('key:', Object.keys(variations)[0].toString());

for (var i = 0; i < Object.keys(variations).length; i++) {
  console.log('key:', Object.keys(variations)[i].toString());
  experiments[i] = window.app.Experiment.findExperimentById(
    Object.keys(variations)[i].toString()
  );
}
console.log({experiments});

chrome.runtime.sendMessage({experiments}, function(response) {
  console.log('got a response', response);
});
