import { Connection } from 'typeorm';
import { Request, Response } from 'express';
import Usuario from '../entidades/usuarios';
import Carrito from '../entidades/carrito';
import Producto from '../entidades/productos'; 
import { createConnection } from 'typeorm';

let conexion: Connection | null = null;

export const obtenerConexionBaseDatos = async (): Promise<Connection> => {
  if (!conexion || !conexion.isConnected) {
    conexion = await createConnection();
  }
  return conexion;
};

export const registrarUsuario = async (req: Request, res: Response) => {
  const { formData } = req.body;

  const usuario = formData.usuario;
  const email = formData.email;
  const password = formData.password;

  try {
    const conexion = await obtenerConexionBaseDatos();

    const usuarioExistente = await conexion.manager.findOne(Usuario, { where: { usuario, email } });

    if (usuarioExistente) {
      return res.status(400).json({ error: 'El Usuario o Email ya está en uso' });
    } else {
      const nuevoUsuario = new Usuario(usuario, email, password);

      try {
        await conexion.manager.save(nuevoUsuario);
        await conexion.close();

        return res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
      } catch (error) {
        console.error('Error al registrar el usuario:', error);
        return res.status(500).json({ error: 'Error al conectar con la base de datos' });
      }
    }
  } catch (err) {
    console.error('Error al registrar el usuario:', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const ingresarUsuario = async (req: Request, res: Response) => {
  const { usuario, password } = req.body;

  try {
    const conexion = await obtenerConexionBaseDatos();

    const usuarioEncontrado = await conexion.manager.findOne(Usuario, { where: { usuario, password } });

    await conexion.close();

    if (usuarioEncontrado) {
      res.json({
        exito: true,
        mensaje: "Ingreso correcto"
      });
    } else {
      res.status(401).json({
        exito: false,
        mensaje: "Ingreso fallido"
      });
    }
  } catch (err) {
    console.log("Error al ingresar: ", err);
    res.status(500).json({
      exito: false,
      mensaje: "Error al ingresar"
    });
  }
};

export const registrarCarrito = async (req: Request, res: Response) => {
  const { carritoJsonificado } = req.body;

  try {
    const conexion = await obtenerConexionBaseDatos();

    const entidadCarrito = new Carrito(carritoJsonificado);

    await conexion.manager.save(Carrito, entidadCarrito);
    await conexion.close();

    return res.status(201).json({ mensaje: 'Carrito registrado exitosamente' });

  } catch (err) {
    console.error('Error al registrar el carrito:', err);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

export const obtenerProductos = async (_: any, res: Response) => {
  try {
    const conexion = await createConnection();
    const repositorioProductos = conexion.getRepository(Producto);
    const productosExistente = await repositorioProductos.find();

    await conexion.close();

    res.json(productosExistente);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
