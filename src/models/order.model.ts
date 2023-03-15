import { RowDataPacket } from 'mysql2';
import query from './sqlQueries';
import connection from './connection';
import { IOrderModel, IUserModel } from '../interfaces/interfaces';

const getAllOrders = async (): Promise<IOrderModel[]> => {
  const [result] = await connection
    .execute<RowDataPacket[] & IOrderModel[]>(query.getAllOrdersQuery);
  return result;
};

const createOrder = async ({ productsIds }, user: IUserModel) => {
  const newOrder = await connection.execute(query.createOrderQuery, [user.id]);
  Promise.all(productsIds.map((product) => connection
    .execute(query.updateProductOrderQuery, [product])));

  return newOrder;
};

const orderModel = {
  getAllOrders,
  createOrder,
};

export default orderModel;