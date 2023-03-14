import { IUser } from '../interfaces';
import userModel from '../models/user.model';
import { generateToken } from '../utils/auth';

const createUser = async (user: IUser): Promise<string> => {
  const { id, username } = await userModel.createUser(user);

  const token: string = generateToken({ id, username });

  return token;
};

const userService = {
  createUser,
};

export default userService;