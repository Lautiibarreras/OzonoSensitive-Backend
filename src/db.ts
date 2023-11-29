import "reflect-metadata";
import { createConnection } from "typeorm";
import Producto from './entidades/productos'
import Usuario from './entidades/usuarios';
import Carrito from './entidades/carrito';

createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'ozonosensitive',
    synchronize: true,
    logging: true,
    entities: [Producto, Usuario, Carrito],
    subscribers: [],
    migrations: []
})
    .then(async (connection) => {
        const repoProductos = connection.getRepository(Producto);
        const porductosExiste = await repoProductos.find();
        if (porductosExiste.length === 0){
            const producto1 = new Producto("Ozono1", 100, "Ozono casa 1", "https://cdn-icons-png.flaticon.com/512/2175/2175188.png");
            const producto2 = new Producto("Ozono2", 200, "Ozono casa 2", "https://cdn-icons-png.flaticon.com/512/2175/2175188.png");
            const producto3 = new Producto("Ozono3", 300, "Ozono casa 3", "https://cdn-icons-png.flaticon.com/512/2175/2175188.png");
            const producto4 = new Producto("Ozono4", 400, "Ozono casa 4", "https://cdn-icons-png.flaticon.com/512/2175/2175188.png");
            const producto5 = new Producto("Ozono5", 500, "Ozono casa 5", "https://cdn-icons-png.flaticon.com/512/2175/2175188.png")

            await repoProductos.save([producto1,producto2,producto3,producto4,producto5])
        }
        
        console.log("Base iniciada");

        await connection.close();
    }).catch((error) => {
        console.log("Error al inicializar la base: ", error)
    });