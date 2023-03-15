import Joi from 'joi';
import { ILogin, IProduct, IUser } from '../../interfaces/interfaces';
// import loginSchema from './schemas';

export const validateLogin = (inputLogin: ILogin) => {
  const loginSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  return loginSchema.validate(inputLogin);
};

export const validateProduct = (inputLogin: IProduct) => {
  const productSchema = Joi.object().keys({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
    orderId: Joi.number(),
  });

  return productSchema.validate(inputLogin);
};

export const validateUser = (user: IUser) => {
  const userSchema = Joi.object().keys({
    username: Joi.string().min(3).required(),
    vocation: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  return userSchema.validate(user);
};

export default {
  validateLogin,
};