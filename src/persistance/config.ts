import 'reflect-metadata'
import { DataSource } from 'typeorm';
import { Producto } from './entidades/productos';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'ozonosensitive',
    entities: [Producto],
    synchronize: true,
    logging: true,
 });

 AppDataSource.initialize()
    .then(async() => {

        const repoProductos = AppDataSource.manager.getRepository(Producto);
        const porductosExiste = await repoProductos.find();
        if (porductosExiste.length === 0){
            const producto1 = new Producto("Ozono1", 100, "Ozono casa 1");
            const producto2 = new Producto("Ozono2", 200, "Ozono casa 2");
            const producto3 = new Producto("Ozono3", 300, "Ozono casa 3");
            const producto4 = new Producto("Ozono4", 400, "Ozono casa 4");
            const producto5 = new Producto("Ozono5", 500, "Ozono casa 5")

            await repoProductos.save([producto1,producto2,producto3,producto4,producto5])
        }
    })
