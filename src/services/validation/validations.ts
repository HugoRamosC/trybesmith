import Joi from 'joi';
import { ILogin } from '../../interfaces';
// import loginSchema from './schemas';

export const validateLogin = (inputLogin: ILogin) => {
  const loginSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  return loginSchema.validate(inputLogin);
};

export default {
  validateLogin,
};