import { IOrderModel } from '../interfaces/interfaces';
import orderModel from '../models/order.model';

const getAllOrders = async (): Promise<IOrderModel[]> => {
  const orders = orderModel.getAllOrders();
  return orders;
};

const orderService = {
  getAllOrders,
};

export default orderService;