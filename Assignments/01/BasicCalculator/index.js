const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send("Basic Calculator APP");
})

// addition end point
app.post('/add', (req, res) => {
    let {num1, num2} = req.body;
    if(typeof num1 === 'string' || typeof num2 === 'string'){
        res.send({
            status: "error",
            message: "Invalid type",
        })
        return;
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let sum = num1 + num2;
    console.log('sum is', sum);
    return res.status(201).send({
        status: 'Success',
        message: 'sum of two number is', sum,
    })
})

// substraction end point
app.post('/subtract', (req, res) => {
    let {num1, num2} = req.body;
    if(typeof num1 === 'string' || typeof num2 === 'string'){
        res.send({
            status: 'error',
            message: "Invalid data types"
        });
        return;
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = 0;
    if(num1 > num2){
        result = num1 - num2;
    } else{
        result = num2 - num1;
    }

    return res.status(201).send({
        status: "success",
        message: "subtract of two number is",
        result,
    })
})

app.listen(4500, ()=> {
    console.log("Server runnig at 4500");
});