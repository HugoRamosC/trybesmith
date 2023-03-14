import { ResultSetHeader } from 'mysql2';
import query from './sqlQueries';
import connection from './connection';
import { IUser, IUserModel } from '../interfaces';

const createUser = async (user: IUser): Promise<IUserModel> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query
    .createUserQuery, [username, vocation, level, password]);
  return { id: insertId, username, vocation, level, password };
};

const userModel = {
  createUser,
};

export default userModel;