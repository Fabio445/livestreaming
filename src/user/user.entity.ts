import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
// attirbuti

	@PrimaryGeneratedColumn()
	idUser: number

	@Column()
	username: string

	@Column()
	password: string

	@Column()
	email: string

	// TODO add
}