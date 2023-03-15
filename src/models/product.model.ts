import { ResultSetHeader, RowDataPacket } from 'mysql2';
import query from './sqlQueries';
import connection from './connection';
import { IProduct, IProductModel } from '../interfaces/interfaces';

const createProduct = async (product: IProduct) => {
  const { name, amount, orderId } = product;
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(query.createProductQuery, [name, amount]);
  return { id: insertId, name, amount, orderId };
};

const getAllProducts = async (): Promise<IProductModel[]> => {
  const [result] = await connection
    .execute<RowDataPacket[] & IProductModel[]>(query.getAllProductsQuery);
  return result;
};

const productModel = {
  createProduct,
  getAllProducts,
};

export default productModel;