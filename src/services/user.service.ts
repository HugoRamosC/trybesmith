import { IError, ILogin, IUser } from '../interfaces';
import userModel from '../models/user.model';
import { generateToken } from '../utils/auth';

const createUser = async (user: IUser): Promise<string> => {
  const { id, username } = await userModel.createUser(user);
  const token: string = generateToken({ id, username });
  return token;
};

const login = async (inputLogin: ILogin): Promise<IError> => {
  const { username, password } = inputLogin;
  if (!username) return { status: 400, message: '"username" is required' };
  if (!password) return { status: 400, message: '"password" is required' };
  
  const user = await userModel.login(inputLogin);
  if (user.length === 0 || user[0].password !== inputLogin.password) {
    return { status: 401, message: 'Username or password invalid' };
  }

  const token: string = generateToken({ id: user[0].id, username });
  return { status: 200, message: token };
};

const userService = {
  createUser,
  login,
};

export default userService;