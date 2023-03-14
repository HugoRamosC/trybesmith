import express from 'express';
import productController from './controllers/product.controller';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Up and running');
});

app.post('/products', productController.createProduct);

export default app;
