const express = require('express');
const {registerUser} = require('../controller/userController')
const router = express.Router();

router.get('/', (req, res) => {
    return res.send("Welcome to User Profile Section");
});

// creating new users
router.post('/signup', registerUser)





module.exports = router;