const {Order} = require('../models/order')

// creating order 
async function createOrder(req,res) {
    const {customerName, product, price, quantity} = req.body;
    
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
            error: err.message,
        })
    }
}

// get order details
async function getOrders(req, res) {
    try {
        const order = await Order.find();
        console.log(order);
        return res.status(200).send(order);
    }
    catch(err){
        return res.status(500).send({
            status: "failed",
            errorr: err.message,
        })
    }
}
async function getOrder(req, res){
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
}

// update order
async function updateOrder(req, res){
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
}

// deleteOrder

async function deleteOrder(req, res){
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
}


module.exports = {
    createOrder,
    updateOrder,
    getOrder,
    getOrders,
    deleteOrder,
}