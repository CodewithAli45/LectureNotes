const fs = require('fs');


// const textInput = fs.readFileSync('./text/newfile.txt', 'utf8');
// // console.log(textInput);

// const textOutput = `I am the best ${textInput} \n Created on - ${Date.now()}`;
// fs.writeFileSync('./text/output.text', textOutput);

// console.log('file created');

const outputText = `Hi My name is Ali Murtaza and I am from Bokaro Jharkhand.
I have completed my graduation in Mechanical Engineer in  2018 from Ramgarh Engineering College.
Currently i am pursuing my career in Full Stack Developer Course from Newton School.
So far i have completed Frontend and I have created two Project. One is Bookmy Show Clone and other is Meeso Clone 
\n ${Date.now()}`;

fs.writeFileSync('./text/NewOutput.txt', outputText);
console.log('File Created');