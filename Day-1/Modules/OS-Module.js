const os = require('os');



console.log(os.arch());
// give os architecute: mine is -> x64

console.log(os.cpus().length);
// Return an array of object about no. of cpu core

console.log(os.endianness());
//Returns a string identifying the endianness of the CPU for which the Node.js binary was compiled.
//Possible values are 'BE' for big endian and 'LE' for little endian.

console.log(os.freemem());
// Returns the amount of free system memory in bytes as an integer.

console.log(os.homedir());
//Returns the string path of the current user's home directory.

console.log(os.hostname());
// Return the hostname


console.log(os.networkInterfaces());
