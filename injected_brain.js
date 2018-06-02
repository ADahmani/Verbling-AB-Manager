var experiments = [];
var variations = window.app.Experiment.variations || {};
for (var i = 0; i < Object.keys(variations).length; i++) {
  experiments[i] = window.app.Experiment.findExperimentById(
    Object.keys(variations)[i].toString()
  );
}

window.postMessage(JSON.stringify(experiments), 'https://verbling.com');
