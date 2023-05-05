// user
// id ->  to 200
// limit: 15
// user: 200
// total page -> user / limit + 1
// current page -> 7 -> 91 -105
// start -> (page - 1) : (7-1) * limit = 6 *15 = 90
// end -> page * limit: 7 * 15: 105
// conditions: id > start && id <= end

const express = require('express');

const app = express();
app.use(express.json());

const users = [];
for(let id = 1; id <= 200; id++){
    if(id % 3 == 0) continue;
    users.push({
        id,
        name: `user - ${id}`
    })
}
// from Frontend
app.post('/user', (req, res) => {
    const {limit, page} = req.body;
    const start = (page - 1) * limit;
    const end = page * limit;

    const userData = users.filter((user, index) => 
    index + 1 > start && index + 1 <= end);

    const pagination ={
        totalPage: Math.ceil(users.length / limit),
        currentPage: page,
        totalcount: users.length,
    }
    return res.status(201).json({
        data: userData,
        pagination,
    });
})



app.listen(5000, () => {
    console.log("server runnig at 5000");
});