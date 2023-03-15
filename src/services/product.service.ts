import { IProduct, IProductModel } from '../interfaces/interfaces';
import productModel from '../models/product.model';
import { validateProduct } from './validation/validations';

const createProduct = async (product: IProduct) => {
  const validated = validateProduct(product);
  if (validated.error) {
    let status = 400;
    const { message, details } = validated.error;
    switch (details[0].type) {
      case 'string.base':
        status = 422; break;
      case 'string.min':
        status = 422; break;
      default:
        status = 400; break;
    }
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