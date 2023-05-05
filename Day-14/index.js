// performance and optimization

const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     return res.status(200).send("Doing load test to analyse the performance");
// })
//Processor	Intel(R) Core(TM) i3-5005U CPU @ 2.00GHz, 2000 Mhz, 2 Core(s), 4 Logical Processor(s)

// module.exports.run = function(){
//     app.listen(5000, () => {
//     console.log("server running on port 5000");
//     })
// }
const {Worker} = require('worker_threads')
let counter = 0;

app.get('/', (req, res) => {
    counter++;
    return res.status(200).send({counter});
})

// app.get('/intesive', (req, res) => {
//     for(let i = 0; i< 1000000000000; i++){
//         counter++;
//     }
//     return res.status(200).send({counter});
// })


app.get('/intesive', (req, res) => {
    const worker = new Worker('./worker.js')
    worker.on('message', (data) => {
        console.log('messages -> ', data);
    })
    // return res.status(200).send({counter});
})


app.listen(5000, () => {
    console.log("server running on port 5000");
})