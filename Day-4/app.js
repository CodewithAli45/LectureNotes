const express = require("express");
const cars = require('./routes/cars');
const bikes = require('./routes/bikes');
const app = express();



app.use(express.json()); // to convert post data into json format

const welcome = "Welcome to Mashreq Cars, here you will all kind of luxry super sports \n which originated from different contries of Earch."
// get method to retive data from server
app.get('/', (req, res) => {
    return res.send(welcome);
});

app.use('/cars', cars);
app.use('/bikes', bikes)

// listerning the port on web browser
app.listen(5000, () => {
    console.log("Server is running at port 5000");
});

