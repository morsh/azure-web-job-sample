var workerName = 'query-id';//process.env.WORKER;

console.log('Selected worker according to environment variable:', workerName);

var worker = require('x-' + workerName);

worker.run(function (err) {
    if (err) return console.error('error running', workerName, 'worker:', err);
    console.info(workerName, 'worker exited');
});