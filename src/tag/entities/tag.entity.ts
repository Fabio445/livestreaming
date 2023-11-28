import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Tag {

	@PrimaryGeneratedColumn()
	idTag: number

	@Column()
	nome: string
 
}
