import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre: string;

  @Column()
  correo: string;

  @Column()
  contraseña: string;

  constructor(nombre: string, correo: string, contraseña: string) {
    this.nombre = nombre;
    this.correo = correo;
    this.contraseña = contraseña;
  }
}
