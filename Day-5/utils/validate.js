const Joi = require('joi');
function validate(mechBody){
    const schema = Joi.object({
        subjects: Joi.array().required(),
        laboratory: Joi.array().required(),
        totalMarks: Joi.number().required(),
        sgpa: Joi.number().required(),
        topSubject: Joi.string().required(),
    })
   return schema.validate(mechBody);
}

module.exports = {
    validate,
}