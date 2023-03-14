import express from 'express';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Up and running');
});

app.post('/products', productController.createProduct);
app.get('/products', productController.getAllProducts);
app.post('/users', userController.createUser);

export default app;
