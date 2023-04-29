const Joi = require("joi");

function validate(carBody){
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        price: Joi.string().required(),
        type: Joi.array().required(),
        origin: Joi.string().required(),
    });

    return schema.validate(carBody);
}

module.exports = {
    validate,
}