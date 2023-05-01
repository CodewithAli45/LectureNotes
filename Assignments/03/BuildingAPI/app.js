const express = require('express');
const fs = require('fs');
const Joi = require('joi')
const app = express();

app.use(express.json());

const users = JSON.parse(fs.readFileSync(`${__dirname}/../data/user.json`));
// console.log(users);

function validate(reqBody){
    const schema = Joi.object({
        name: Joi.string().min(5).max(30).required(),
        email: Joi.string().email({
            minDomainSegments: 2,
            tlds: {
                allow: ['com', 'in', 'custom']
            }
        }).required(),
    })

    return schema.validate(reqBody);
}

app.get('/', (req, res) => {
    return res.status(200).send(users);
})

// getting all users
app.get('/api/v1/users', (req, res) => {
    return res.status(200).send({
        status: "success",
        data: {
            users
        },
    })
})


// getting users by id
app.get('/api/v1/users/:id', (req, res) => {
    const {id} = req.params;
    // console.log(id);
    const user = users.find(data => data._id === Number(id));
    if(!user){
        return res.status(404).send({
            stattus: "Error",
            message: "User Not Found",
        })
    }

    return res.status(200).send({
        status: "success",
        data: {
            user
        },
    })
})

// creating new user
app.post('/api/v1/users', (req, res) => {
    const {name, email} = req.body;

    const {error} = validate(req.body);
    if(error){
        return res.status(400).send({
            status: "Error",
            message: "Name or email missing",
        })
    }

    const user = {
        _id: users.length + 1,
        name, email,
    };

    users.push(user);
    return res.status(201).send({
        status: "success",
        data: {
            user,
        }
    })

})











app.listen(3000, ()=> {
    console.log('Runnig at 3000');
})