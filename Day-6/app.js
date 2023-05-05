// database - it is place where we can store and retrieve the data
// SQL -> Structure Querying Language - tables and rows  
// Pros -> very fast, consistent, stable, optimise
// cons -> memory wastage, when the size need to improve the hardware, which searching is difficut vertical scaling

// NoSQL -> collection (table) and document (rows)

// mongoose -> ORM (Object Relational Manager) - mongoose
const mongoose = require("mongoose");

const database = mongoose.connect("mongodb://127.0.0.1:27017/playground")
.then(() => console.log("connected to MongoDB"))
.catch((err) => console.log("error in connecting--->", err));
