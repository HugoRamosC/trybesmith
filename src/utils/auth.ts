import jwt from 'jsonwebtoken';
import { IUserToken } from '../interfaces';

const secret: string = process.env.JWT_SECRET || 'secret';

const jwtConfig: object = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

export const generateToken = (user: IUserToken): string => {
  const token = jwt.sign(user, secret, jwtConfig);
  return token;
};

export const validateToken = (token: string) => {
  if (!token) return false;
  const decodedToken = jwt.verify(token, secret);
  return decodedToken;
};