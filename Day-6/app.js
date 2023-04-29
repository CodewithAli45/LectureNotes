// mongoose -> ORM (Object Relational Manager) - mongoose
const mongoose = require("mongoose");

const database = mongoose.connect("mongodb://127.0.0.1:27017/playground")
.then(() => console.log("connected to MongoDB"))
.catch((err) => console.log("error in connecting--->", err));
