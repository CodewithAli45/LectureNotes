const {parentPort} = require('worker_threads');

parentPort.postMessage("from worker");
