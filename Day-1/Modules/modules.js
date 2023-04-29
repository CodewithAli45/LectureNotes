// const path = require('path');
// console.log('filename  ', __filename);
// console.log(path.parse(__filename));

// const os = require('os');
// console.log(os.networkInterfaces());

// file system
// const fs = require('fs');
// console.log(fs.readdirSync('./'));

// event
const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('start', (args) => {
    console.log("starts here events ", args);
});

emitter.emit('start', {
    name: 'amaxon',
    salar : 20000,
    empolyer: 150,
    corporation : "2001",
    ceo : 'jeff bezoa'
});