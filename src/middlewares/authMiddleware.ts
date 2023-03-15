import { NextFunction, Request, Response } from 'express';
import { validateToken } from '../utils/auth';

const checkTokenLogin = async (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization as string;
  const decodedToken = validateToken(token);
  if (!decodedToken) return res.status(401).json({ message: 'Invalid token' });

  req.body.user = decodedToken;
  
  next();
};

export default checkTokenLogin;