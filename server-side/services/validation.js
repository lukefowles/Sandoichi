import Joi from '@hapi/joi';

//Register
export const registerValidation = input => {
    const schema = Joi.object( {
        name: Joi.string().min(3).required(),

        email: Joi.string().min(6).required().email(),

        address: Joi.string().min(6).required(),

        password: Joi.string().min(6).required()
    });

    return schema.validate(input);
}

export const loginValidation = input => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    })

    return schema.validate(input);
};