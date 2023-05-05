const bcrypt = require('bcrypt')
const {User, validateUser} = require('../models/user') ;
const jwt = require('jsonwebtoken');

async function registerUser(req, res){
    const {error} = validateUser(req.body);
    if(error){
        return res.send(error.details[0].message);
    }

    const {name, email, password} = req.body;

    // checking alredy registed 
    let user = await User.findOne({email});
    if(user){
        return res.send("user is already registed");
    }

    try{
        // console.log("creating new users");
        user = new User({
            name, email, password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        
        const newUser = await user.save();
        const token = jwt.sign({_id: user._id}, "JWTPrivateKey");

        return res.header("X-Auth-Token", token).status(201).send({
            status: "new user created successfully",
            data: {
                name: newUser.name,
                email: newUser.email,
            },
        })
        // return res.status(201).json({
        //     status: "new user created successfully",
        //     data: {
        //         name: newUser.name,
        //         email: newUser.email,
        //     },
        //     token,
        // })

    } catch(err){
        return res.status(500).json({
            status: "something went wrong",
            error: err.message,
        })
    }
}

module.exports = {
    registerUser,

}