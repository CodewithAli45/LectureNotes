const express = require('express');
const {User} = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send("auth working");
});

const validate = (body) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required()
    });

    return schema.validate(body);
}

router.post('/signin', async (req, res) => {
    const {error} = validate(req.body);
    if(error){
        return res.status(400).json(error.details[0].message);
    }

    const {email, password} = req.body;

    // checking for email and password
    let user = await User.findOne({email});
    if(!user){
        return res.status(404).send("user is not registered");
    }
    try {
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            return res.send("email or password is incorrect");
        }
        const token = jwt.sign({_id: user._id}, "JWTPrivateKey");
        return res.header("X-Auth-Token", token).status(200).send({
            msg: "logged in successfully",
            login: true,
        })

        // return res.status(200).json({
        //     msg: "logged in successfully",
        //     login: true,
        // })
    } catch(err){
        return res.status(500).json({
            msg: "failed", 
            error: err,
        })
    }
})

module.exports = router;