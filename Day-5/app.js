const express = require('express');
const mechanical = require('./routes/mechanical');
const morgan = require('morgan')

const app = express();

// middleware -> inbuilt, routes and custom
// Request Processing pipeline
// template engines
if(app.get("env") === 'development'){
    console.log("Morgaon is enabled");
    app.use(morgan("combined"))
}

app.use(express.json());

// static middleware for displaying html file
app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));


app.set("view message", "pug");
app.set("views", './views');



/**
 * @version : 1.0.0
 * @path -> /lectureNotes
 * @alimurtza45
 * @example https://localhost:4000/mechanical
 */

// custom middleware
// app.use(function(req, res, next){
//     console.log("Calling custom middleware");
//     console.log(`req -> ${req} and res -> ${res}`);
//     next();
// })

app.get('/', (req, res) => {
    return res.send("Below is my college subject with marks details")
});





app.use('/mechanical', mechanical);



app.listen(4000, () => {
    console.log("Server is runnig at 4000");
})