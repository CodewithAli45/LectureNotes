const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('Next number problem')
})
app.get('/api/get-num-next', (req, res) => {
    const num = Number(req.query.num);
    const nextNum = num + 1;

    res.json({
        message : nextNum,
        status : "success"
    })
});

module.exports = app;