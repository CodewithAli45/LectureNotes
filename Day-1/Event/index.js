const EventEmitter = require('events');

// const eventEmitter = new EventEmitter;
// eventEmitter.on('coinCollected', () => {
//     console.log('You collected coin');
// })

// function collectCoin () {
//     console.log('Coin Collected');
//     eventEmitter.emit('coinCollected')
// }

// collectCoin();

const eventEmitter = new EventEmitter;
eventEmitter.on('start', number => {
    console.log(`Started ${number}`);
});
eventEmitter.emit('start', 22);

eventEmitter.on('start', (start, end) => {
    console.log(`Start at ${start} and end at ${end}`);
});
eventEmitter.emit('start', 10, 20);