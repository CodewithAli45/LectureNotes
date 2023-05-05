const express = require('express');
const bcrypt = require('bcrypt');
const user = require('./routes/userRoutes');
const router = require('./routes/userRoutes')

const app = express();

const SALT_ROUNDS = 10;

app.use(express.json());


// app.use('/auth', user)
app.use('/', router);



app.listen(5000, () => {
    console.log("server is runnint at 5000");
});