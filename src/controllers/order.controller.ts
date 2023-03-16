import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrders = async (req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  return res.status(200).json(orders);
};

const createOrder = async (req: Request, res: Response) => {
  const { status, message } = await orderService.createOrder(req.body);
  if (status) return res.status(status).json({ message });
  const { user, productsIds } = req.body;
  return res.status(201).json({ userId: user.id, productsIds });
};

const orderController = {
  getAllOrders,
  createOrder,
};

export default orderController;