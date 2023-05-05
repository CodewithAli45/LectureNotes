const mongoose = require('mongoose');
const Joi = require('joi');

// schema
const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true}
});
// model
const User = mongoose.model("User", userSchema);

//validation part
const validate = (User) => {
    const schema = Joi.object({
        userName: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required().email(),
    })

    return schema.validate(User);
}

module.exports = {
    User, 
    validate,
}