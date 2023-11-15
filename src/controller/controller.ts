import { Request, Response } from 'express';
import { Db } from '../persistance/db';

export const getAllProductos = async (_req: Request, res: Response) => {
  const db = new Db();
  const productos = await db.getAllProductos();
  res.json(productos);
};

// Nueva función para la compra
export const realizarCompra = async (req: Request, res: Response) => {
  const { productos } = req.body;

  // Lógica para procesar la compra, actualizar la base de datos, etc.
  // Puedes utilizar TypeORM para manejar las operaciones de base de datos

  res.json({ mensaje: 'Compra realizada con éxito' });
};
