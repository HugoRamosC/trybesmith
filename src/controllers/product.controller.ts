import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response) => {
  const { status, message } = await productService.createProduct(req.body);
  if (status) return res.status(status).json({ message });
  return res.status(201).json(message);
};

const getAllProducts = async (req: Request, res: Response) => {
  const products = await productService.getAllProducts();
  return res.status(200).json(products);
};

const productController = {
  createProduct,
  getAllProducts,
};

export default productController;