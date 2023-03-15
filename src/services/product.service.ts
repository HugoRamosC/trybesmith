import { IProduct, IProductModel } from '../interfaces/interfaces';
import productModel from '../models/product.model';
import { validateProduct } from './validation/validations';

const createProduct = async (product: IProduct) => {
  const validated = validateProduct(product);
  if (validated.error) {
    let status = 400;
    const { message, details } = validated.error;
    if (/base|min/i.test(details[0].type)) status = 422;
    return { status, message };
  }
  const newProduct = await productModel.createProduct(product);
  return { status: null, message: newProduct };
};

const getAllProducts = async (): Promise<IProductModel[]> => {
  const products = await productModel.getAllProducts();
  return products;
};

const productService = {
  createProduct,
  getAllProducts,
};

export default productService;