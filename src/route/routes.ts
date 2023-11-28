import { Router } from 'express';
import { ingresarUsuario, registrarUsuario, registrarCarrito, obtenerProductos } from '../controller/controller';

const router: Router = Router();

router.post('/login/try', ingresarUsuario);

router.post('/register/success', registrarUsuario);

router.post('/carrito', registrarCarrito);

router.get('/productos', obtenerProductos);

export default router;
