import { ResultSetHeader, RowDataPacket } from 'mysql2';
import query from './SQL/sqlQueries';
import connection from './connection/connection';
import { IBodyNewOrder, IProduct, IProductModel } from '../interfaces';

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

const updateProductsByOrder = async (body: IBodyNewOrder) => {
  Promise.all(body.productsIds.map((product: number) => connection
    .execute(query.updateProductOrderQuery, [product])));
};

const productModel = {
  createProduct,
  getAllProducts,
  updateProductsByOrder,
};

export default productModel;