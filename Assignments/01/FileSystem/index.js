const {myfileWriter} = require('./app');
const {myfileReader} = require('./app');
const {myfileUpdater} = require('./app');
const {myfileDeleter} = require('./app')

const filename = './example.txt';
const demo = './demo.txt';
const filecontent = "Here is the start of Node js file handling system.\n Please enter your code below.";

// creating demo file 
// myfileWriter(demo, filecontent);

// reading file
myfileReader(filename);

// updating demo file
const updatedtext = 'In nodejs following this needs to keep in mind and they are mongodb, postman';
myfileUpdater(demo, updatedtext);

// deleting demo file
myfileDeleter(demo);


