const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/orderRoutes')


mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
    .then(() => console.log("Mongodb connected  -- "))
    .catch(err => console.log("something wrong in connecting ", err))


const app = express();
app.use(express.json());




app.get('/order', (req, res) => {
    return res.send("Welcome to home page of Order ")
} )


app.use('/order', routes)







// listening the server
app.listen(5000, () => {
    console.log("Server is running at port 5000");
});