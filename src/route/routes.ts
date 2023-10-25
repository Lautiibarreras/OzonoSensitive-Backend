import express, { Request, Response } from 'express';

const router = express.Router();

let productos = [
  { nombre: 'Producto1', modelo: 'Modelo1', precio: 150, paisOrigen: 'Argentina' },
  { nombre: 'Producto2', modelo: 'Modelo2', precio: 80, paisOrigen: 'Brasil' },
  { nombre: 'Producto3', modelo: 'Modelo3', precio: 200, paisOrigen: 'Chile' },
];

router.get('/', (_: Request, res: Response) => {

  res.send('Mi primer Server');
});

//1
router.get('/productos', (_: Request, res: Response) => {

  res.json(productos);
});

//2
router.get('/productos/precio-mayor-cien', (_: Request, res: Response) => {

  const productosFiltrados = productos.filter(producto => producto.precio > 100);

  res.json(productosFiltrados);
});

//3

//4
router.delete('/productos/:modelo', (req: Request, res: Response) => {
  const { modelo } = req.params;
  const longitud = productos.length;

  productos = productos.filter(producto => producto.modelo !== modelo);
  if (productos.length === longitud) {
    res.status(404).send('Producto no encontrado');
  } else {
    res.send('Producto eliminado');
  }
});

//5
router.get('/productos/por-pais/:pais', (req: Request, res: Response) => {
  const { pais } = req.params;
  const productoEncontrado = productos.find(producto => producto.paisOrigen === pais);
  
  if (productoEncontrado) {
    res.json(productoEncontrado);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

//6
router.get('/productos/por-precio/:precio', (req: Request, res: Response) => {
  const { precio } = req.params;
  const productoEncontrado = productos.find(producto => producto.precio === Number(precio));
  
  if (productoEncontrado) {
    res.json(productoEncontrado);
  } else {
    res.status(404).send('Producto no encontrado');
  }
});

//7
router.post('/productos', (req: Request, res: Response) => {
  const { nombre, modelo, precio, paisOrigen } = req.body;
  if (nombre && modelo && precio && paisOrigen) {
    const nuevoProducto = { nombre, modelo, precio, paisOrigen };
    productos.push(nuevoProducto);
    res.send('Producto creado');
  } else {
    res.status(404).send('Faltan campos para crear el producto');
  }
});

export default router;
