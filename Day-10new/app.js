const express = require('express');
const router = require('./routes/userRoute');
const routerOrder = require('../mongo/routes/orderRoutes')
const mongoose = require('mongoose');
const auth = require('./auth/auth')
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/playground")
    .then(() => console.log("monggo db is connected"))
    .catch((err) => console.log("error in connecting mongodb", err));


app.use(express.json());
app.use('/auth', auth);
app.use('/order', routerOrder);
app.use('/user', router);

app.listen(5000, () => {
    console.log("Server running on 5000");
})