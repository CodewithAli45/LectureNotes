const express = require('express');

let hashedPassword = "";
async function signup(req, res) {
    const {username, password, email} = req.body;
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    // console.log(salt);

    hashedPassword = await bcrypt.hash(password, salt);
    return res.status(201).json({
        msg: "User is registered",
        data: hashedPassword,
    })
}

async function signin(req, res) {
    const {username, password} = req.body;

    const isValid = await bcrypt.compare(password, hashedPassword);
    console.log('result', isValid);

    if(isValid){
        return res.status(200).json({
            msg: "Logged in successfully"
        })
    }
    return res.status(403).send("Invalid username or password")
}


module.exports ={
    signin,
    signup,
}