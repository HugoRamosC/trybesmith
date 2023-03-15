import Joi from 'joi';

const loginSchema = Joi.object().keys({
  unsername: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  'any.required': '"{#key}" is required',
  'array.min': '"{#key}" must be greater than or equal to {#limit}',
});

export default {
  loginSchema,
};