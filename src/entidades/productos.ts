import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Producto {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;

  @Column()
  caracteristicas: string;

    constructor(nombre:string, precio:number, caracteristicas:string ){
        this.nombre = nombre;
        this.precio = precio;
        this.caracteristicas = caracteristicas
  }
}
