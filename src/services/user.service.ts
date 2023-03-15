import { IError, ILogin, IUser } from '../interfaces';
import userModel from '../models/user.model';
import { generateToken } from '../utils/auth';
import { validateLogin } from './validation/validations';

const createUser = async (user: IUser): Promise<string> => {
  const { id, username } = await userModel.createUser(user);
  const token: string = generateToken({ id, username });
  return token;
};

const login = async (inputLogin: ILogin): Promise<IError> => {
  const validated = validateLogin(inputLogin);
  if (validated.error) return { status: 400, message: validated.error.message };
  
  const { username, password } = inputLogin;
  const user = await userModel.login(inputLogin);
  if (user.length === 0 || user[0].password !== password) {
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