import { getRepository } from 'typeorm';
import { Producto } from './entidades/productos';

export class Db {
  constructor() {}

  async getAllProductos() {
    const repositorioProducto = getRepository(Producto);
    return repositorioProducto.find();
  }
}
