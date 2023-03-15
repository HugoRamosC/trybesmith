import { IError, ILogin, IUser } from '../interfaces/interfaces';
import userModel from '../models/user.model';
import { generateToken } from '../utils/auth';
import { validateLogin, validateUser } from './validation/validations';

const createUser = async (user: IUser) => {
  const validated = validateUser(user);
  console.log('userservice>>>>>>>>', validated.error);
  
  if (validated.error) {
    let status = 400;
    const { message, details } = validated.error;
    switch (true) {
      // https://stackoverflow.com/questions/43423458/use-string-includes-in-switch-javascript-case
      case (/base/i.test(details[0].type)):
        status = 422; break;
      case (/min/i.test(details[0].type)):
        status = 422; break;
      default:
        status = 400; break;
    }
    return { status, message };
  }
  const { id, username } = await userModel.createUser(user);
  const token: string = generateToken({ id, username });
  return { status: null, message: token };
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