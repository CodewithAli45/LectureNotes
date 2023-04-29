console.log("Starts here");

const { add, subtract } = require('./logger');
console.log('add', add(10,45));
console.log('sub', subtract(10, 8));
console.log(global);
