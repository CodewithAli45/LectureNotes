const app = require('./app');
const dotevn = require('dotenv');

dotevn.config();
app.listen(3000, ()=>{
    console.log("Server running at 3000");
})