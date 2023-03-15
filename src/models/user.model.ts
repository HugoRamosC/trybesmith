import { ResultSetHeader, RowDataPacket } from 'mysql2';
import query from './sqlQueries';
import connection from './connection';
import { ILogin, IUser, IUserModel } from '../interfaces';

const createUser = async (user: IUser): Promise<IUserModel> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query
    .createUserQuery, [username, vocation, level, password]);
  return { id: insertId, username, vocation, level, password };
};

const login = async (inputLogin: ILogin): Promise<IUserModel[]> => {
  const { username } = inputLogin;
  const [rows] = await connection
    .execute<RowDataPacket[] & IUserModel[]>(query
    .getByUsernameQuery, [username]);
  return rows;
};

const userModel = {
  createUser,
  login,
};

export default userModel;