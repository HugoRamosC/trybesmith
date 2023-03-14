import { IProduct, IProductModel } from '../interfaces';
import productModel from '../models/product.model';

const createProduct = async (product: IProduct): Promise<IProductModel> => {
  const newProduct = productModel.createProduct(product);
  return newProduct;
};

const getAllProducts = async (): Promise<IProductModel[]> => {
  const products = productModel.getAllProducts();
  return products;
};

const productService = {
  createProduct,
  getAllProducts,
};

export default productService;