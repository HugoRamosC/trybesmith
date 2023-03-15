import Joi from 'joi';
import { ILogin, IProduct } from '../../interfaces/interfaces';
// import loginSchema from './schemas';

export const validateLogin = (inputLogin: ILogin) => {
  const loginSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  return loginSchema.validate(inputLogin);
};

export const validateProduct = (inputLogin: IProduct) => {
  const loginSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
    orderId: Joi.number(),
  });

  return loginSchema.validate(inputLogin);
};

export default {
  validateLogin,
};