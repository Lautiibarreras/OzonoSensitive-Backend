import { Request, Response } from 'express';
// import { Usuarios } from '../persistance/entidades/usuarios';
import { Db } from '../persistance/db';

export const getAllProductos = async (_req: Request, res: Response) => {
  const db = new Db();
  const productos = await db.getAllProductos();
  res.json(productos);
};

export const realizarCompra = async (_: Request, res: Response) => {
  // const { productos } = req.body;

  // Lógica para procesar la compra, actualizar la base de datos, etc.
  // Puedes utilizar TypeORM para manejar las operaciones de base de datos

  res.json({ mensaje: 'Compra realizada con éxito' });
};

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { nombre, correo, contraseña } = req.body;

//     console.log('Nombre:', nombre);
//     console.log('Correo electrónico:', correo);

//     const user = await Usuarios.findOne({ nombre, correo });

//     if (user && user.contraseña === contraseña) {
//       res.json({ mensaje: 'Inicio de sesión exitoso' });
//     } else {
//       res.status(401).json({ mensaje: 'Credenciales incorrectas' });
//     }
//   } catch (error) {
//     console.error('Error al realizar la consulta a la base de datos:', error);
//     res.status(500).json({ mensaje: 'Error interno del servidor' });
//   }
// };
