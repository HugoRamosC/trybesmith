import { RowDataPacket } from 'mysql2';
import query from './sqlQueries';
import connection from './connection';
import { IOrderModel } from '../interfaces';

const getAllOrders = async (): Promise<IOrderModel[]> => {
  const [result] = await connection
    .execute<RowDataPacket[] & IOrderModel[]>(query.getAllOrdersQuery);
  return result;
};

const orderModel = {
  getAllOrders,
};

export default orderModel;