import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { Producto } from './entidades/Producto';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'tu_usuario',
    password: 'tu_contraseña',
    database: 'tu_base_de_datos',
    entities: [Producto],
    synchronize: true,
    logging: true,
 });
