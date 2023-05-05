const express = require('express');
const routes = express.Router();
const {validateCredential} = require('../../Day-10new/middlewares/auth')
const { createOrder,
    updateOrder,
    getOrder, getOrders,
    deleteOrder} = require('../controllers/orderController')



routes.post('/createorder', validateCredential, createOrder )

// get order details
routes.get('/getOrder', getOrder);
routes.get('/getOrders', getOrders)

// updating the product
routes.post('/updateOrder', updateOrder)

// delete order
routes.delete('/deleteOrder', deleteOrder)

module.exports = routes;