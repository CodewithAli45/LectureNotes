const events = require("events");

const eventEmitter = new events;
function printName(eventEmitter, personEvent){
    eventEmitter.on(personEvent, (arg) => {
        console.log(`My name is ${arg}`);
    })
}

printName(eventEmitter, 'personEvent');
eventEmitter.emit('personEvent', "Ali");

