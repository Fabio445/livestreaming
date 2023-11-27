import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
// attirbuti

	@PrimaryGeneratedColumn()
	id: number

	@Column()
	user_name: string

	// TODO add
}