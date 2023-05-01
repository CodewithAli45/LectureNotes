const fs = require("fs");
const express = require("express");
const Joi = require('joi');
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/products.json`));
// console.log(products);
// Middlewares
app.use(express.json());

function validate(reqBody){
    const schema = Joi.object({
        // id: Joi.number().required(),
        name: Joi.string().min(5).max(30).required(),
        price: Joi.number().required(),
        quantity: Joi.number()
    });

    return schema.validate(reqBody);
}


// get method
app.get('/api/v1/products', (req, res) => {
    return res.send(products);
})

app.get('/api/v1/products/:id', (req, res) => {
    const {id} = req.params;
    const product = products.find(data => data.id === Number(id));
    if(!product){
        return res.status(404).send("Product not found");
    }

    return res.status(200).send(product);
});

app.get('/api/v1/products/:name/:price', (req, res) =>{
    const {name, price} = req.params;
    const product = products.find((data) => {
        return data.price === Number(price) && data.name === name
    });
    // console.log(product);
    if(!product){
        return res.status(400).send({
            status: 'failed', 
            message: `${name} not found!`, 
        })
    }
    return res.status(200).send({
        status: 'success', 
        message: `${name} fetched successfully`, 
        data: {
            product
        },
    });
})

// post method
app.post('/api/v1/products', (req, res) => {
    const {name, price, quantity} = req.body;

    const {error} = validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    
    const newProduct = {
        id: products.length + 1,
        name, price, quantity,
    }

    products.push(newProduct);
    return res.status(201).send(newProduct);
});

// 







app.listen(3000, ()=> {
    console.log('Server runnig at 3000');
})