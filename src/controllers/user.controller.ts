import { Request, Response } from 'express';
import userService from '../services/user.service';

const createUser = async (req: Request, res: Response) => {
  const token = await userService.createUser(req.body);
  return res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { status, message } = await userService.login(req.body);
  if (status !== 200) return res.status(status).json({ message });
  return res.status(status).json({ token: message });
};

const userController = {
  createUser,
  login,
};

export default userController;