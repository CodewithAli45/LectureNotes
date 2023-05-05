const express = require('express');
const mongoose = require('mongoose');
const log = require('debug')('app:db');

const app = express();
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    .then(() => console.log("Mongodb connected  -- "))
    .catch(err => console.log("something wrong in connecting ", err))


// schema
const orderSchema = new mongoose.Schema({
    customerName: {type: String, required: true},
    product: String,
    price: Number,
    quantity: Number,
    date: {type: Date, default: Date.now},
    totalPrice: Number,
});

// model
const Order = mongoose.model("Order", orderSchema);

// creating order
app.post('/createorder', async (req, res) => {
    const {customerName, product, price, quantity} = req.body;
    log("Creating new order");

    try {
        const order = new Order({
        customerName,
        product,
        price, quantity,
        totalPrice: price * quantity,  
        });

        const newOrder = await order.save();
        return res.status(201).json({
            message: "Successfully created the order",
            data: newOrder,
        }) 
    } catch(err){
        return res.status(500).send({
            status: "failed",
            errorr: err.message,
        })
    }
    
})

// get order details

app.get('/getOrder', async (req, res) => {
    const {id} = req.query;
    // console.log(id);

    try {
        const order = await Order.findById(id);
        if(!order) {
            return res.status(404).send("order not found");
        }

        return res.status(200).json({
            status: "Succeess",
            data: order,
        })
    } catch(err){
        return res.status(500).send({
            status: "failed",
            errorr: err.message,
        })
    }
})

// updating the product

app.post('/updateOrder', async (req, res) => {
    const {id, price} = req.body;
    const order = await Order.findById(id);
    if(!order) {
        return res.status(404).send("order not found");
    }

    order.price = price;
    order.totalPrice = price * order.quantity;

    await order.save();
    return res.status(200).json({
        message: "Successfully updated the order",
        data: order,
    }) 
})

// delete order
app.delete('/deleteOrder', async (req, res) => {
    const {id} = req.body;

    try{
        const deleteOrder = await Order.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Successfully deleted the order",
            data: deleteOrder,
        }) 
    }catch(err){
        return res.status(500).send({
            status: "failed",
            errorr: err.message,
        })
    }
})
// listening the server
app.listen(5000, () => {
    console.log("Server is running at port 5000");
});