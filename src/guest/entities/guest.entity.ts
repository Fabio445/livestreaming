import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Guest {

	@PrimaryGeneratedColumn()
	idGuest: number

}
