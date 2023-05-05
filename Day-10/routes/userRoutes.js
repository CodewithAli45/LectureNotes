const express = require('express');
const router = express.Router();
const {User, validate} = require('../model/user')
const {signin, signup} = require('../controller/userController')

router.get('/', (req, res) => {
    return res.send("Welcome to our profile");

})
router.post('/user', async (req, res) => {
    const {error} = validate(req.body);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    const {userName, email, password} = req.body;
    // pre verification of already registered user
    let user = await User.findOne({email});
    if(user){
        return res.status(400).send("User already registered");
    }

    try {
        user = new User({userName, email, password});

        const newUser = await user.save();
    } catch {
        
    }

})


// app.post('/signup', signup);
// app.post('/signin', signin);



module.exports = router;