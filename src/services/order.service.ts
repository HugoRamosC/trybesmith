import { IBodyNewOrder, IOrderModel } from '../interfaces';
import orderModel from '../models/order.model';
import productModel from '../models/product.model';
import { validateOrder } from './validation/validations';

const getAllOrders = async (): Promise<IOrderModel[]> => {
  const orders = await orderModel.getAllOrders();
  return orders;
};

const createOrder = async (body: IBodyNewOrder) => {
  if (body.productsIds && body.productsIds.length === 0) {
    return { status: 422, message: '"productsIds" must include only numbers' };
  }
  const validated = validateOrder(body.productsIds);  
  if (validated.error) {
    let status = 400;
    const { message, details } = validated.error;
    if (/base/i.test(details[0].type)) status = 422;
    return { status, message };
  }
  await orderModel.createOrder(body);
  await productModel.updateProductsByOrder(body);
  return { status: undefined, message: 'ok' };
};

const orderService = {
  getAllOrders,
  createOrder,
};

export default orderService;