import { getRepository } from 'typeorm';
import { Producto } from './entidades/Producto';

export class Db {
  constructor() {}

  async getAllProductos() {
    const repositorioProducto = getRepository(Producto);
    return repositorioProducto.find();
  }
}
