import { Request, Response } from 'express';
import productService from '../services/product.service';

const createProduct = async (req: Request, res: Response) => {
  const newProduct = await productService.createProduct(req.body);
  return res.status(201).json(newProduct);
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