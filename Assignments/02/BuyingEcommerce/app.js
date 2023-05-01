const express = require('express')
const fs = require('fs')

const app = express();

// importing product from product.json file
const products = JSON.parse(
    fs.readFileSync('./data/product.json')
)
// console.log(product);

// middleware
app.use(express.json());
app.get('/', (req, res) => {
    return res.send(product);
})


// dynamic input
app.get('/api/v1/products/:id', (req, res) => {
    const {id} = req.params;
    const product = products.find(data => data.id === Number(id));
    if(!product){
        return res.status(404).send({
            status: "failed", 
            message: "Product not found!" 
        })
    }
    return res.status(200).send(product)
});


// patch method
app.patch('/api/v1/products/:id', (req, res) => {
    const {id} = req.params;
    const {quantity} = req.body;

    const product = products.find(data => data.id === Number(id));
    if(!product){
        return res.status(404).send({
            status: "failed", 
            message: "Product not found!" 
        })
    }

    if(product.quantity < quantity){
        return res.status(404).send({
            status: "success", 
            message: `Product ${id}, Out of stock!` 
        })
    }

    product.quantity -= quantity;

    return res.status(200).send({
        status: "success",
        message: `Thank you for purchasing Product ${id}`,
        product: {
            id,
            name: `Product ${id}`,
            price: product.price,
            quantity: product.quantity,
    
        }
    });
})

module.exports = app;