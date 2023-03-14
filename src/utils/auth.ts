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
  if (!token) {
    const error = { status: 401, message: 'Token not found' };
    return error;
  }
  const decryptedData = jwt.verify(token, secret);
  return { decoded: decryptedData };
};