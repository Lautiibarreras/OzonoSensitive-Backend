import express from 'express';
import { getAllProductos, realizarCompra } from '../controller/controller';

const router = express.Router();

router.get('/productos', getAllProductos);

router.post('/compra', realizarCompra);

export default router;
