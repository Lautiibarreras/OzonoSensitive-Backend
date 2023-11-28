import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Carrito {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    carrito: string;

    constructor(carrito: string) {
        this.carrito = carrito;
    }
}