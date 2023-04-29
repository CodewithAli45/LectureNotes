const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const port = 2000;

// parse json body
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

// addition end point

app.get('/add', (req, res) => {
    let {num1, num2} = req.body;

    if(typeof num1 === 'string' || typeof num2 === 'string'){
        res.send({
            status : 'error',
            message : "Invalid data types",
        });
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(num1 > 100000 || num2 > 100000 || num1 + num2 > 100000){
        res.send({
            status : 'error',
            message : "Overflow",
        })
        return;
    }

    const sum = num1 + num2;

    res.send({
        status: 'success',
        message : `the sum of given number is ${sum}`
    })
})





app.listen(port, () => {
    console.log('Server is runnig at 2000');
});

// module.exports(app);
