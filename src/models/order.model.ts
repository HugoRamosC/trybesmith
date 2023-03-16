import { RowDataPacket } from 'mysql2';
import query from './SQL/sqlQueries';
import connection from './connection/connection';
import { IBodyNewOrder, IOrderModel } from '../interfaces';

const getAllOrders = async (): Promise<IOrderModel[]> => {
  const [result] = await connection
    .execute<RowDataPacket[] & IOrderModel[]>(query.getAllOrdersQuery);
  return result;
};

const createOrder = async (body: IBodyNewOrder) => {
  const newOrder = await connection
    .execute(query.createOrderQuery, [body.user.id]);
  return newOrder;
};

const orderModel = {
  getAllOrders,
  createOrder,
};

export default orderModel;