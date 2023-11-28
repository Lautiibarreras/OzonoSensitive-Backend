import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  usuario: string;

  @Column()
  email: string;

  @Column()
  password: string;

    constructor(usuario: string, email: string, password: string) {
        this.usuario = usuario;
        this.email = email;
        this.password = password;
    }
}